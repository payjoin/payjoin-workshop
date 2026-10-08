//! The on-disk fixture format, plus the deterministic derivation that produces it.
//!
//! The derivation lives here rather than in the generator binary so that anything
//! reading a fixture can recompute it and prove the file was not hand-edited.

use bitcoin::hashes::{sha256, Hash, HashEngine};
use bitcoin::script::PushBytesBuf;
use bitcoin::secp256k1::{PublicKey, Secp256k1, SecretKey};
use bitcoin::{
    absolute, transaction, Address, Amount, CompressedPublicKey, Network, NetworkKind, OutPoint,
    PrivateKey, ScriptBuf, Sequence, Transaction, TxIn, TxOut, Witness,
};
use serde::{Deserialize, Serialize};

use crate::error::{DemoWalletError, Result};

/// Published on purpose. Every key in the fixture file is a pure function of this string,
/// so the file is reproducible and the keys are worthless by construction.
pub const FIXTURE_SEED: &str = "payjoin.org demo wallet fixtures v1";

pub const FIXTURE_COMMENT: &str = "REGTEST DEMO KEYS - PUBLISHED DELIBERATELY, WORTHLESS, \
     DERIVED FROM A SEED IN THIS FILE. NEVER SEND REAL BITCOIN TO THESE ADDRESSES.";

/// The fixture that ships with the crate, embedded so the browser needs no second fetch.
pub const EMBEDDED_FIXTURES: &str = include_str!("../fixtures/demo-fixtures.json");

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FixtureFile {
    #[serde(rename = "$comment")]
    pub comment: String,
    pub network: String,
    pub generated_by: String,
    pub seed: String,
    pub wallets: Wallets,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Wallets {
    pub receiver: WalletFixture,
    pub sender: WalletFixture,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WalletFixture {
    pub label: String,
    /// Always `p2wpkh`. It is the one script type whose sender-side input weight is a
    /// constant, so `build_recommended` works against an unsigned original (payjoin's
    /// `expected_input_weight`).
    pub address_type: String,
    /// Where this side is paid.
    pub receive: KeyFixture,
    /// Where this side sends its own change. Separate from `receive` so the demo never
    /// renders address reuse in a transaction whose point is privacy.
    pub change: KeyFixture,
    pub utxos: Vec<UtxoFixture>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct KeyFixture {
    /// Derivation path under `seed`, so a reader can recompute the key.
    pub path: String,
    pub wif: String,
    pub pubkey: String,
    pub address: String,
    #[serde(rename = "scriptPubKey")]
    pub script_pubkey: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UtxoFixture {
    pub txid: String,
    pub vout: u32,
    pub value_sat: u64,
    /// One key per UTXO. Set membership over several scripts is what
    /// `check_inputs_not_owned` and `identify_receiver_outputs` actually do, and a
    /// one-element set would not exercise it.
    pub path: String,
    pub wif: String,
    pub pubkey: String,
    pub address: String,
    #[serde(rename = "scriptPubKey")]
    pub script_pubkey: String,
}

impl FixtureFile {
    pub fn parse(json: &str) -> Result<Self> {
        serde_json::from_str(json).map_err(DemoWalletError::fixture)
    }

    pub fn network(&self) -> Result<Network> {
        self.network.parse::<Network>().map_err(DemoWalletError::fixture)
    }
}

/// A keypair and the P2WPKH script it controls.
#[derive(Debug, Clone)]
pub struct DerivedKey {
    pub path: String,
    pub secret: SecretKey,
    pub public: PublicKey,
    pub address: Address,
    pub script_pubkey: ScriptBuf,
}

impl DerivedKey {
    pub fn to_fixture(&self, network: Network) -> KeyFixture {
        KeyFixture {
            path: self.path.clone(),
            wif: PrivateKey {
                compressed: true,
                network: NetworkKind::from(network),
                inner: self.secret,
            }
            .to_wif(),
            pubkey: self.public.to_string(),
            address: self.address.to_string(),
            script_pubkey: self.script_pubkey.to_hex_string(),
        }
    }
}

/// Derives a keypair from `seed` and `path` by hashing them together, bumping a counter
/// on the vanishingly unlikely event that the digest is not a valid scalar.
///
/// Deliberately not BIP 32: the fixture needs one flat, auditable step from a published
/// string to a key, and no wallet will ever import it.
pub fn derive_key(seed: &str, path: &str, network: Network) -> DerivedKey {
    let secp = Secp256k1::signing_only();
    let mut counter: u32 = 0;
    loop {
        let mut engine = sha256::Hash::engine();
        engine.input(seed.as_bytes());
        engine.input(b"/");
        engine.input(path.as_bytes());
        engine.input(&counter.to_be_bytes());
        let digest = sha256::Hash::from_engine(engine);
        if let Ok(secret) = SecretKey::from_slice(digest.as_byte_array()) {
            let public = PublicKey::from_secret_key(&secp, &secret);
            let compressed = CompressedPublicKey(public);
            let address = Address::p2wpkh(&compressed, network);
            let script_pubkey = address.script_pubkey();
            return DerivedKey { path: path.to_string(), secret, public, address, script_pubkey };
        }
        counter += 1;
    }
}

/// Builds the never-broadcast transaction that funds one side of the demo.
///
/// Coinbase-shaped, so it needs no prevouts of its own and its output values are
/// self-consistent without inventing a fee. Nothing in the demo consults a chain (the
/// broadcast check is stubbed and no transaction is ever sent), so the only property
/// these need is that the outpoints be real hashes of a real transaction rather than
/// hand-typed digits.
pub fn synthesize_funding_tx(label: &str, outputs: &[(ScriptBuf, Amount)]) -> Transaction {
    let mut tag = PushBytesBuf::new();
    tag.extend_from_slice(format!("payjoin.org demo funding: {label}").as_bytes())
        .expect("tag fits in a push");
    Transaction {
        version: transaction::Version::TWO,
        lock_time: absolute::LockTime::ZERO,
        input: vec![TxIn {
            previous_output: OutPoint::null(),
            script_sig: bitcoin::script::Builder::new().push_slice(tag).into_script(),
            sequence: Sequence::MAX,
            witness: Witness::new(),
        }],
        output: outputs
            .iter()
            .map(|(script_pubkey, value)| TxOut {
                value: *value,
                script_pubkey: script_pubkey.clone(),
            })
            .collect(),
    }
}
