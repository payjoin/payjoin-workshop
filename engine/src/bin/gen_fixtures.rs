//! Regenerates `fixtures/demo-fixtures.json`.
//!
//! No bitcoind. Nothing in the demo is broadcast and the broadcast check is stubbed, so
//! the fixture UTXOs need not exist on any chain. Keys come from a published seed and the
//! outpoints are real hashes of real, never-broadcast transactions.
//!
//! Run from `engine/`:
//!
//! ```sh
//! cargo run -p payjoin-demo-wallet --bin gen-fixtures
//! ```

use std::collections::HashSet;
use std::path::PathBuf;

use bitcoin::{Amount, Network, ScriptBuf};
use payjoin_demo_wallet::fixtures::{
    derive_key, synthesize_funding_tx, DerivedKey, FixtureFile, KeyFixture, UtxoFixture,
    WalletFixture, Wallets, FIXTURE_COMMENT, FIXTURE_SEED,
};
use payjoin_demo_wallet::{DemoWallets, Party};

const NETWORK: Network = Network::Regtest;

/// Several coins so coin selection is visible and the original carries change. Not a
/// sweep: a sweep short-circuits the sender to `build_non_incentivizing` and skips the
/// fee-contribution logic that makes payjoin worth demonstrating.
const SENDER_COINS_SAT: [u64; 4] = [20_000_000, 35_000_000, 50_000_000, 100_000_000];

/// The receiver contributes one of these to the proposal.
const RECEIVER_COINS_SAT: [u64; 2] = [40_000_000, 60_000_000];

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let receiver = build_wallet("receiver", &RECEIVER_COINS_SAT);
    let sender = build_wallet("sender", &SENDER_COINS_SAT);

    let file = FixtureFile {
        comment: FIXTURE_COMMENT.to_string(),
        network: NETWORK.to_string(),
        generated_by: "cargo run -p payjoin-demo-wallet --bin gen-fixtures".to_string(),
        seed: FIXTURE_SEED.to_string(),
        wallets: Wallets { receiver, sender },
    };

    check(&file)?;

    let json = serde_json::to_string_pretty(&file)? + "\n";
    let path = PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("fixtures/demo-fixtures.json");
    std::fs::write(&path, &json)?;
    println!("wrote {} ({} bytes)", path.display(), json.len());
    Ok(())
}

fn build_wallet(label: &str, coins_sat: &[u64]) -> WalletFixture {
    let receive = derive_key(FIXTURE_SEED, &format!("{label}/receive"), NETWORK);
    let change = derive_key(FIXTURE_SEED, &format!("{label}/change"), NETWORK);
    let coin_keys: Vec<DerivedKey> = (0..coins_sat.len())
        .map(|index| derive_key(FIXTURE_SEED, &format!("{label}/coin/{index}"), NETWORK))
        .collect();

    let funding_outputs: Vec<_> = coin_keys
        .iter()
        .zip(coins_sat)
        .map(|(key, sat)| (key.script_pubkey.clone(), Amount::from_sat(*sat)))
        .collect();
    let funding_tx = synthesize_funding_tx(label, &funding_outputs);
    let txid = funding_tx.compute_txid();

    WalletFixture {
        label: label.to_string(),
        address_type: "p2wpkh".to_string(),
        receive: receive.to_fixture(NETWORK),
        change: change.to_fixture(NETWORK),
        utxos: coin_keys
            .iter()
            .zip(coins_sat)
            .enumerate()
            .map(|(vout, (key, sat))| {
                let KeyFixture { path, wif, pubkey, address, script_pubkey } =
                    key.to_fixture(NETWORK);
                UtxoFixture {
                    txid: txid.to_string(),
                    vout: vout as u32,
                    value_sat: *sat,
                    path,
                    wif,
                    pubkey,
                    address,
                    script_pubkey,
                }
            })
            .collect(),
    }
}

/// Everything the fixture must satisfy for PDK to accept the transactions built from it.
/// A fixture that fails here would fail much later, inside a protocol error message that
/// says nothing about which line of JSON was wrong.
fn check(file: &FixtureFile) -> Result<(), Box<dyn std::error::Error>> {
    for wallet in [&file.wallets.receiver, &file.wallets.sender] {
        let outputs = wallet
            .utxos
            .iter()
            .map(|utxo| -> Result<_, Box<dyn std::error::Error>> {
                Ok((ScriptBuf::from_hex(&utxo.script_pubkey)?, Amount::from_sat(utxo.value_sat)))
            })
            .collect::<Result<Vec<_>, _>>()?;
        let txid = synthesize_funding_tx(&wallet.label, &outputs).compute_txid().to_string();
        for (vout, utxo) in wallet.utxos.iter().enumerate() {
            assert_eq!(utxo.txid, txid, "{}: outpoint txid is not the funding tx's", wallet.label);
            assert_eq!(utxo.vout, vout as u32, "{}: vout must match position", wallet.label);
        }
    }

    // Ownership is a set-membership test, so an overlap between the two sides would make
    // `check_inputs_not_owned` reject the sender's own inputs.
    let receiver_scripts: HashSet<&str> = scripts(&file.wallets.receiver).collect();
    let sender_scripts: HashSet<&str> = scripts(&file.wallets.sender).collect();
    assert!(
        receiver_scripts.is_disjoint(&sender_scripts),
        "the two sides must not share a script; ownership is decided by set membership"
    );

    // Loading re-derives every address from its WIF and rejects a mismatch, so this also
    // proves the recorded addresses and scripts belong to the recorded keys.
    let wallets = DemoWallets::from_json(serde_json::to_string(file)?)?;
    let receiver = wallets.receiver();
    let sender = wallets.sender();
    assert_eq!(receiver.party(), Party::Receiver);
    assert_eq!(sender.party(), Party::Sender);

    // The receiver contributes one input to the payjoin, and its value lands in the receiver's
    // own output. Below the dust limit that output could not be spent.
    let smallest_receiver_coin = file
        .wallets
        .receiver
        .utxos
        .iter()
        .map(|utxo| utxo.value_sat)
        .min()
        .expect("receiver has coins");
    assert!(
        smallest_receiver_coin > 100_000,
        "receiver's contributed input is too small to render"
    );

    // Every amount the UI can offer must actually be payable, at a fee rate well above
    // anything the demo will use.
    let bounds = wallets.amount_bounds();
    assert!(bounds.min_sat <= bounds.default_sat && bounds.default_sat <= bounds.max_sat);
    for amount_sat in [bounds.min_sat, bounds.default_sat, bounds.max_sat] {
        let psbt = sender.build_original_psbt(receiver.address(), amount_sat, 10)?;
        let signed = sender.sign_and_finalize(psbt)?;
        let decoded = wallets.extract_tx(signed)?;
        assert_eq!(decoded.outputs.len(), 2, "the original PSBT must not be a sweep");
        assert!(
            decoded.outputs.iter().any(|out| out.party == Party::Receiver),
            "the original PSBT must have a receiver output, or `identify_receiver_outputs` returns MissingPayment"
        );
        assert!(
            decoded.outputs.iter().any(|out| out.is_change),
            "the original PSBT must have change"
        );
    }

    println!(
        "checks passed: receiver {} sat over {} coins, sender {} sat over {} coins, amounts {}..{} sat",
        receiver.balance_sat(),
        file.wallets.receiver.utxos.len(),
        sender.balance_sat(),
        file.wallets.sender.utxos.len(),
        bounds.min_sat,
        bounds.max_sat
    );
    Ok(())
}

fn scripts(wallet: &WalletFixture) -> impl Iterator<Item = &str> {
    [wallet.receive.script_pubkey.as_str(), wallet.change.script_pubkey.as_str()]
        .into_iter()
        .chain(wallet.utxos.iter().map(|utxo| utxo.script_pubkey.as_str()))
}
