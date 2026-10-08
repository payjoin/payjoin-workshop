//! A wallet for the workshop's browser demo, backed by fixed regtest fixtures and no chain.
//!
//! The demo runs both roles of BIP 77 in one browser page against the live payjo.in
//! directory. Everything the protocol touches is real PDK; only the wallet is simulated,
//! because a browser cannot run bitcoind. The callbacks a receiver would answer from a
//! node are answered here instead: the broadcast check is a constant, ownership is set
//! membership over the fixture's scripts, and signing is P2WPKH over primitives
//! rust-bitcoin already links into the payjoin wasm.
//!
//! This crate depends on `payjoin-ffi` and adds its own uniffi namespace. Because uniffi
//! bindgen runs in library mode over the resulting cdylib, one wasm binary carries both
//! namespaces, with a single copy of rust-bitcoin and secp256k1 and no change to
//! `payjoin-ffi` itself.
//!
//! **Nothing here is for production.** The keys are published, the coins do not exist,
//! and no transaction is ever broadcast.

use std::str::FromStr;
use std::sync::Arc;

use bitcoin::{Address, Amount, FeeRate, Network};

pub mod decode;
pub mod error;
pub mod fixtures;
pub mod types;
pub mod wallet;

pub use error::{DemoWalletError, Result};
/// Re-exported so `payjoin-ffi`'s uniffi scaffolding is linked into anything that links
/// this crate.
///
/// Nothing here calls into it. Without a reference rustc drops the dependency, and the
/// demo wasm then carries only the `demo_wallet` namespace: no payjoin bindings, no error,
/// nothing to grep for. Deleting this line silently guts the demo.
pub use payjoin_ffi;
pub use types::{AmountBounds, DecodedTx, DecodedTxIn, DecodedTxOut, Party, Utxo};
pub use wallet::Wallet;

/// One side of the demo. Holds its own keys and its own fixture UTXOs, and knows nothing
/// about the other side.
#[derive(uniffi::Object)]
pub struct DemoWallet(Wallet);

#[uniffi::export]
impl DemoWallet {
    pub fn party(&self) -> Party { self.0.party }

    /// The address this side is paid at, and the one the pane header shows.
    pub fn address(&self) -> String { self.0.receive.address.to_string() }

    pub fn change_address(&self) -> String { self.0.change.address.to_string() }

    pub fn balance_sat(&self) -> u64 { self.0.balance().to_sat() }

    /// Set membership over raw scriptPubKey bytes, which is what the receiver's input and
    /// output ownership checks test. No address round-trip.
    pub fn owns_script(&self, script_pubkey: Vec<u8>) -> bool {
        self.0.owns_script(bitcoin::Script::from_bytes(&script_pubkey))
    }

    pub fn list_unspent(&self) -> Vec<Utxo> { self.0.list_unspent() }

    /// Returns an unsigned original PSBT, base64. Sign it with [`Self::sign_and_finalize`]
    /// before handing it to `SenderBuilder`.
    pub fn build_original_psbt(
        &self,
        to: String,
        amount_sat: u64,
        fee_rate_sat_per_vb: u64,
    ) -> Result<String> {
        let to = Address::from_str(&to)
            .map_err(DemoWalletError::psbt)?
            .require_network(self.0.network)
            .map_err(DemoWalletError::psbt)?;
        let psbt = self.0.build_original_psbt(
            &to,
            Amount::from_sat(amount_sat),
            FeeRate::from_sat_per_vb(fee_rate_sat_per_vb)
                .ok_or_else(|| DemoWalletError::psbt("fee rate overflowed"))?,
        )?;
        Ok(psbt.to_string())
    }

    /// Signs and finalizes only the inputs this wallet owns, leaving every other input
    /// byte-identical. Serves the sender's original, the receiver's proposal, and the
    /// sender's signature over the returned proposal.
    pub fn sign_and_finalize(&self, psbt_base64: String) -> Result<String> {
        let mut psbt = Wallet::parse_psbt(&psbt_base64)?;
        self.0.sign_and_finalize(&mut psbt)?;
        Ok(psbt.to_string())
    }
}

/// Both sides plus the operations that need both, which is anything that says which party
/// an input or output belongs to.
#[derive(uniffi::Object)]
pub struct DemoWallets {
    receiver: Arc<DemoWallet>,
    sender: Arc<DemoWallet>,
}

#[uniffi::export]
impl DemoWallets {
    /// Loads the fixture that ships inside this binary, so the page needs no second fetch.
    #[uniffi::constructor]
    pub fn embedded() -> Result<Self> { Self::from_json(fixtures::EMBEDDED_FIXTURES.to_string()) }

    #[uniffi::constructor]
    pub fn from_json(json: String) -> Result<Self> {
        let file = fixtures::FixtureFile::parse(&json)?;
        let network = file.network()?;
        if network == Network::Bitcoin {
            return Err(DemoWalletError::fixture("the demo refuses to load mainnet keys"));
        }
        Ok(Self {
            receiver: Arc::new(DemoWallet(Wallet::load(
                &file.wallets.receiver,
                Party::Receiver,
                network,
            )?)),
            sender: Arc::new(DemoWallet(Wallet::load(
                &file.wallets.sender,
                Party::Sender,
                network,
            )?)),
        })
    }

    pub fn receiver(&self) -> Arc<DemoWallet> { self.receiver.clone() }

    pub fn sender(&self) -> Arc<DemoWallet> { self.sender.clone() }

    pub fn amount_bounds(&self) -> AmountBounds { self.sender.0.amount_bounds() }

    /// Decodes a finalized PSBT into the view the result pane renders, with each input and
    /// output attributed to the side that owns it.
    pub fn extract_tx(&self, psbt_base64: String) -> Result<DecodedTx> {
        let psbt = Wallet::parse_psbt(&psbt_base64)?;
        decode::decode(&self.receiver.0, &self.sender.0, &psbt)
    }
}

uniffi::setup_scaffolding!("demo_wallet");
