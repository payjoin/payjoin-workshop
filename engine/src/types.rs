//! The value types that cross the FFI. They mirror `DecodedTx` and friends in
//! `src/driver/types.ts`; keep the two in step.

/// Which side of the demo something belongs to. A payjoin's defining visible property is
/// that its inputs come from both, so nothing downstream may infer this from ordering.
/// The receiver randomizes input position on purpose (payjoin's `contribute_inputs`).
#[derive(Debug, Clone, Copy, PartialEq, Eq, uniffi::Enum)]
pub enum Party {
    Receiver,
    Sender,
}

#[derive(Debug, Clone, uniffi::Record)]
pub struct Utxo {
    pub txid: String,
    pub vout: u32,
    pub value_sat: u64,
    pub address: String,
    /// Everything an `InputPair` needs for its `witness_utxo`. P2WPKH takes no
    /// `non_witness_utxo`, and the FFI's `PsbtInput` has no field for one anyway.
    pub script_pubkey: Vec<u8>,
}

#[derive(Debug, Clone, uniffi::Record)]
pub struct DecodedTxIn {
    pub txid: String,
    pub vout: u32,
    pub value_sat: u64,
    pub address: String,
    pub party: Party,
}

#[derive(Debug, Clone, uniffi::Record)]
pub struct DecodedTxOut {
    pub value_sat: u64,
    pub address: String,
    pub party: Party,
    pub is_change: bool,
}

#[derive(Debug, Clone, uniffi::Record)]
pub struct DecodedTx {
    pub txid: String,
    pub hex: String,
    pub vsize: u64,
    pub weight: u64,
    pub fee_sat: u64,
    pub fee_rate_sat_per_vb: f64,
    pub inputs: Vec<DecodedTxIn>,
    pub outputs: Vec<DecodedTxOut>,
}

/// Sat bounds the amount control should respect, so a visitor cannot pick an amount the
/// sender's fixture UTXOs cannot cover.
#[derive(Debug, Clone, uniffi::Record)]
pub struct AmountBounds {
    pub min_sat: u64,
    pub max_sat: u64,
    pub default_sat: u64,
}
