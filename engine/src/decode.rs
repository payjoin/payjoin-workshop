//! Turns a finalized PSBT into the transaction view the demo renders.
//!
//! Attribution happens here because only this layer holds both wallets. The page must not
//! infer it: the receiver inserts its inputs at random indices
//! (payjoin's `contribute_inputs`), which is the property the demo
//! exists to show.

use bitcoin::{Address, Amount, Psbt, Transaction};

use crate::error::{DemoWalletError, Result};
use crate::types::{DecodedTx, DecodedTxIn, DecodedTxOut, Party};
use crate::wallet::Wallet;

pub fn decode(receiver: &Wallet, sender: &Wallet, psbt: &Psbt) -> Result<DecodedTx> {
    let fee = psbt.fee().map_err(DemoWalletError::decode)?;
    let tx = psbt.clone().extract_tx_unchecked_fee_rate();

    let inputs = psbt
        .unsigned_tx
        .input
        .iter()
        .zip(&psbt.inputs)
        .map(|(txin, psbtin)| {
            let txout = psbtin
                .witness_utxo
                .as_ref()
                .ok_or_else(|| DemoWalletError::decode("input is missing its witness utxo"))?;
            Ok(DecodedTxIn {
                txid: txin.previous_output.txid.to_string(),
                vout: txin.previous_output.vout,
                value_sat: txout.value.to_sat(),
                address: render_address(receiver, &txout.script_pubkey)?,
                party: attribute(receiver, sender, &txout.script_pubkey)?,
            })
        })
        .collect::<Result<Vec<_>>>()?;

    let outputs = tx
        .output
        .iter()
        .map(|txout| {
            let party = attribute(receiver, sender, &txout.script_pubkey)?;
            let owner = match party {
                Party::Receiver => receiver,
                Party::Sender => sender,
            };
            Ok(DecodedTxOut {
                value_sat: txout.value.to_sat(),
                address: render_address(receiver, &txout.script_pubkey)?,
                party,
                // The change output is the one paying the spending side's change key, not
                // "the second output". The demo shuffles output order.
                is_change: owner.change.script_pubkey == txout.script_pubkey,
            })
        })
        .collect::<Result<Vec<_>>>()?;

    Ok(DecodedTx {
        txid: tx.compute_txid().to_string(),
        hex: bitcoin::consensus::encode::serialize_hex(&tx),
        vsize: tx.vsize() as u64,
        weight: tx.weight().to_wu(),
        fee_sat: fee.to_sat(),
        fee_rate_sat_per_vb: fee_rate_sat_per_vb(fee, &tx),
        inputs,
        outputs,
    })
}

fn attribute(receiver: &Wallet, sender: &Wallet, script_pubkey: &bitcoin::Script) -> Result<Party> {
    if receiver.owns_script(script_pubkey) {
        Ok(Party::Receiver)
    } else if sender.owns_script(script_pubkey) {
        Ok(Party::Sender)
    } else {
        Err(DemoWalletError::decode(format!(
            "script {script_pubkey:x} belongs to neither demo wallet"
        )))
    }
}

fn render_address(any_wallet: &Wallet, script_pubkey: &bitcoin::Script) -> Result<String> {
    Address::from_script(script_pubkey, any_wallet.network)
        .map(|address| address.to_string())
        .map_err(DemoWalletError::decode)
}

fn fee_rate_sat_per_vb(fee: Amount, tx: &Transaction) -> f64 {
    let vsize = tx.vsize();
    if vsize == 0 {
        return 0.0;
    }
    fee.to_sat() as f64 / vsize as f64
}
