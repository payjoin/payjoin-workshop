//! Coin selection, PSBT construction and P2WPKH signing over a fixed fixture UTXO set.
//!
//! This is the only part of the demo that is not real PDK. Everything else (the BIP 77
//! state machine, HPKE, OHTTP, the directory) runs unmodified.

use std::str::FromStr;

use bitcoin::secp256k1::{Message, Secp256k1, SecretKey};
use bitcoin::sighash::SighashCache;
use bitcoin::transaction::{predict_weight, InputWeightPrediction};
use bitcoin::{
    absolute, transaction, Address, Amount, CompressedPublicKey, EcdsaSighashType, FeeRate,
    Network, OutPoint, Psbt, ScriptBuf, Sequence, Transaction, TxIn, TxOut, Witness,
};

use crate::error::{DemoWalletError, Result};
use crate::fixtures::WalletFixture;
use crate::types::{Party, Utxo};

/// bitcoind's default for a wallet-funded transaction: RBF-signalling, no timelock.
const SEQUENCE: Sequence = Sequence::ENABLE_RBF_NO_LOCKTIME;

/// Change is kept well clear of the dust limit rather than merely above it. The sender's
/// fee contribution is taken out of the change output (`build_recommended`), so a
/// change output that is only just spendable would make `build_recommended` fall back to
/// the clamped path and stop demonstrating the fee-contribution logic.
const CHANGE_FLOOR: Amount = Amount::from_sat(10_000);

/// The amount control's floor. Large enough to read as a plausible transfer next to the
/// fixture's coin sizes, and far above the dust limit.
const MIN_TRANSFER: Amount = Amount::from_sat(100_000);

/// Leaves the sender's two smallest coins unspent at the default, so the original has one
/// input and the payjoin has two.
const DEFAULT_TRANSFER: Amount = Amount::from_sat(15_000_000);

/// Used only to size the headroom `amount_bounds` reserves. The live fee rate comes from
/// the caller.
const REFERENCE_FEE_RATE: FeeRate = FeeRate::from_sat_per_vb_u32(10);

/// A keypair and the single P2WPKH script it controls.
#[derive(Debug, Clone)]
pub struct Key {
    pub secret: SecretKey,
    pub public: bitcoin::secp256k1::PublicKey,
    pub address: Address,
    pub script_pubkey: ScriptBuf,
}

impl Key {
    fn load(wif: &str, expected_address: &str, network: Network) -> Result<Self> {
        let private = bitcoin::PrivateKey::from_wif(wif).map_err(DemoWalletError::fixture)?;
        let secp = Secp256k1::signing_only();
        let public = private.public_key(&secp);
        let compressed = CompressedPublicKey::try_from(public)
            .map_err(|_| DemoWalletError::fixture("fixture key must be compressed"))?;
        let address = Address::p2wpkh(&compressed, network);
        if address.to_string() != expected_address {
            return Err(DemoWalletError::fixture(format!(
                "wif does not derive the address recorded beside it: {expected_address}"
            )));
        }
        let script_pubkey = address.script_pubkey();
        Ok(Self { secret: private.inner, public: public.inner, address, script_pubkey })
    }
}

#[derive(Debug, Clone)]
pub struct Coin {
    pub outpoint: OutPoint,
    pub txout: TxOut,
    pub key: Key,
}

#[derive(Debug, Clone)]
pub struct Wallet {
    pub party: Party,
    pub network: Network,
    pub receive: Key,
    pub change: Key,
    pub coins: Vec<Coin>,
}

impl Wallet {
    pub fn load(fixture: &WalletFixture, party: Party, network: Network) -> Result<Self> {
        if fixture.address_type != "p2wpkh" {
            return Err(DemoWalletError::fixture(format!(
                "only p2wpkh is supported, fixture says {}",
                fixture.address_type
            )));
        }
        let receive = Key::load(&fixture.receive.wif, &fixture.receive.address, network)?;
        let change = Key::load(&fixture.change.wif, &fixture.change.address, network)?;
        let coins = fixture
            .utxos
            .iter()
            .map(|utxo| {
                let key = Key::load(&utxo.wif, &utxo.address, network)?;
                Ok(Coin {
                    outpoint: OutPoint {
                        txid: utxo.txid.parse().map_err(DemoWalletError::fixture)?,
                        vout: utxo.vout,
                    },
                    txout: TxOut {
                        value: Amount::from_sat(utxo.value_sat),
                        script_pubkey: key.script_pubkey.clone(),
                    },
                    key,
                })
            })
            .collect::<Result<Vec<_>>>()?;
        if coins.is_empty() {
            return Err(DemoWalletError::fixture("wallet has no utxos"));
        }
        Ok(Self { party, network, receive, change, coins })
    }

    /// Every script this side controls. Backs `check_inputs_not_owned` and
    /// `identify_receiver_outputs`, both of which are set membership over raw
    /// scriptPubKey bytes with no address round-trip.
    pub fn owns_script(&self, script_pubkey: &bitcoin::Script) -> bool {
        self.key_for_script(script_pubkey).is_some()
    }

    pub fn key_for_script(&self, script_pubkey: &bitcoin::Script) -> Option<&Key> {
        if self.receive.script_pubkey == *script_pubkey {
            return Some(&self.receive);
        }
        if self.change.script_pubkey == *script_pubkey {
            return Some(&self.change);
        }
        self.coins.iter().find(|coin| coin.txout.script_pubkey == *script_pubkey).map(|c| &c.key)
    }

    pub fn balance(&self) -> Amount { self.coins.iter().map(|coin| coin.txout.value).sum() }

    pub fn list_unspent(&self) -> Vec<Utxo> {
        self.coins
            .iter()
            .map(|coin| Utxo {
                txid: coin.outpoint.txid.to_string(),
                vout: coin.outpoint.vout,
                value_sat: coin.txout.value.to_sat(),
                address: coin.key.address.to_string(),
                script_pubkey: coin.txout.script_pubkey.to_bytes(),
            })
            .collect()
    }

    /// Builds and returns an unsigned original PSBT transferring `amount` to `to`.
    ///
    /// Selects smallest-coin-first and always leaves a change output. Both choices matter.
    /// A sweep short-circuits the sender to `build_non_incentivizing` and never exercises
    /// the fee contribution, and the receiver's privacy-preserving coin selection requires
    /// exactly two outputs (payjoin's `avoid_uih`).
    pub fn build_original_psbt(
        &self,
        to: &Address,
        amount: Amount,
        fee_rate: FeeRate,
    ) -> Result<Psbt> {
        let receiver_script = to.script_pubkey();
        if self.owns_script(&receiver_script) {
            return Err(DemoWalletError::coin_selection(
                "the sender cannot send to itself; the demo needs two distinct parties",
            ));
        }
        let change_script = self.change.script_pubkey.clone();
        let change_floor = CHANGE_FLOOR.max(change_script.minimal_non_dust());

        let mut candidates: Vec<&Coin> = self.coins.iter().collect();
        candidates.sort_by_key(|coin| coin.txout.value);

        let mut selected: Vec<&Coin> = Vec::new();
        let mut total = Amount::ZERO;
        for coin in candidates {
            selected.push(coin);
            total = total
                .checked_add(coin.txout.value)
                .ok_or_else(|| DemoWalletError::coin_selection("input total overflowed"))?;

            let weight = predict_weight(
                std::iter::repeat_n(InputWeightPrediction::P2WPKH_MAX, selected.len()),
                [receiver_script.len(), change_script.len()],
            );
            let fee = fee_rate
                .fee_wu(weight)
                .ok_or_else(|| DemoWalletError::coin_selection("fee overflowed"))?;
            let Some(change) = total.checked_sub(amount).and_then(|rest| rest.checked_sub(fee))
            else {
                continue;
            };
            if change < change_floor {
                continue;
            }
            return Ok(self.assemble(selected, to, amount, change));
        }

        Err(DemoWalletError::coin_selection(format!(
            "{} sat plus fee and change exceeds the {} sat this wallet holds",
            amount.to_sat(),
            self.balance().to_sat()
        )))
    }

    fn assemble(&self, selected: Vec<&Coin>, to: &Address, amount: Amount, change: Amount) -> Psbt {
        let transfer = TxOut { value: amount, script_pubkey: to.script_pubkey() };
        let change = TxOut { value: change, script_pubkey: self.change.script_pubkey.clone() };
        // Which output is the transfer must not be readable off the index. bitcoind
        // randomizes this too, and the demo renders the result.
        let output = if bitcoin::secp256k1::rand::random::<bool>() {
            vec![transfer, change]
        } else {
            vec![change, transfer]
        };

        let unsigned_tx = Transaction {
            version: transaction::Version::TWO,
            lock_time: absolute::LockTime::ZERO,
            input: selected
                .iter()
                .map(|coin| TxIn {
                    previous_output: coin.outpoint,
                    script_sig: ScriptBuf::new(),
                    sequence: SEQUENCE,
                    witness: Witness::new(),
                })
                .collect(),
            output,
        };

        let mut psbt = Psbt::from_unsigned_tx(unsigned_tx)
            .expect("a freshly built transaction carries no signatures");
        for (input, coin) in psbt.inputs.iter_mut().zip(selected) {
            input.witness_utxo = Some(coin.txout.clone());
        }
        psbt
    }

    /// Signs and finalizes every input this wallet owns, and touches nothing else.
    ///
    /// Payjoin enforces this. The receiver's `finalize_proposal`
    /// rejects a callback that signs an input from the sender's original and rejects any
    /// change to the unsigned transaction via an `ntxid` comparison.
    ///
    /// PDK never verifies a signature. Every gate in the production path checks field
    /// presence (the sender's `check_inputs`), so a dummy witness would pass. Signing for real
    /// costs nothing over primitives already linked and is what makes the transaction the
    /// demo renders an actual transaction.
    pub fn sign_and_finalize(&self, psbt: &mut Psbt) -> Result<usize> {
        let secp = Secp256k1::signing_only();
        let unsigned_tx = psbt.unsigned_tx.clone();
        let mut cache = SighashCache::new(&unsigned_tx);
        let mut signed = 0usize;

        for index in 0..psbt.inputs.len() {
            let Some(txout) = psbt.inputs[index].witness_utxo.clone() else { continue };
            let Some(key) = self.key_for_script(&txout.script_pubkey) else { continue };

            let sighash = cache
                .p2wpkh_signature_hash(
                    index,
                    &txout.script_pubkey,
                    txout.value,
                    EcdsaSighashType::All,
                )
                .map_err(DemoWalletError::signing)?;
            let signature = bitcoin::ecdsa::Signature {
                signature: secp.sign_ecdsa(&Message::from(sighash), &key.secret),
                sighash_type: EcdsaSighashType::All,
            };

            let input = &mut psbt.inputs[index];
            input.final_script_witness = Some(Witness::p2wpkh(&signature, &key.public));
            input.final_script_sig = None;
            input.partial_sigs.clear();
            // The sender's `check_inputs` rejects a proposal whose inputs carry key paths.
            input.bip32_derivation.clear();
            input.sighash_type = None;
            signed += 1;
        }

        if signed == 0 {
            return Err(DemoWalletError::signing("no input of this psbt belongs to this wallet"));
        }
        Ok(signed)
    }

    pub fn parse_psbt(base64: &str) -> Result<Psbt> {
        Psbt::from_str(base64).map_err(DemoWalletError::psbt)
    }

    /// The range the amount control may offer, derived from the sender's coins so the
    /// visitor cannot pick an amount that fails coin selection.
    pub fn amount_bounds(&self) -> crate::types::AmountBounds {
        let inputs = std::iter::repeat_n(InputWeightPrediction::P2WPKH_MAX, self.coins.len());
        let weight = predict_weight(inputs, [self.change.script_pubkey.len(); 2]);
        let headroom = REFERENCE_FEE_RATE
            .fee_wu(weight)
            .unwrap_or(Amount::ZERO)
            .checked_add(CHANGE_FLOOR)
            .unwrap_or(CHANGE_FLOOR);
        let max = self.balance().checked_sub(headroom).unwrap_or(Amount::ZERO);
        crate::types::AmountBounds {
            min_sat: MIN_TRANSFER.to_sat(),
            max_sat: max.max(MIN_TRANSFER).to_sat(),
            default_sat: DEFAULT_TRANSFER.clamp(MIN_TRANSFER, max.max(MIN_TRANSFER)).to_sat(),
        }
    }
}
