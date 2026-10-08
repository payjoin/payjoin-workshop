//! Drives a whole payjoin in process, with the demo wallet behind every callback a
//! receiver would normally answer from a node.
//!
//! If this passes, any later failure in the browser engine is in transport or bindings,
//! which is a much cheaper place to debug than a wasm module talking to a relay.
//!
//! BIP 78 rather than BIP 77, deliberately: v1 exercises the same sender checks, receiver
//! checks, coin contribution and finalization, and needs no directory, no OHTTP and no
//! network. What v2 adds on top is transport.

use std::collections::HashMap;
use std::str::FromStr;

use bitcoin::psbt::{Input as PsbtInput, Psbt};
use bitcoin::{Address, Amount, FeeRate, Network, OutPoint, Sequence, TxIn, TxOut};
use payjoin::receive::v1::{build_v1_pj_uri, Headers, UncheckedOriginalPayload};
use payjoin::receive::InputPair;
use payjoin::send::v1::SenderBuilder;
use payjoin::{ImplementationError, OutputSubstitution, Request, Uri, Url};
use payjoin_demo_wallet::{DecodedTx, DemoWallet, DemoWallets, Party};

/// Above the 1 sat/vB the sender asks the receiver to hold the transaction to, so the
/// receiver's fee contribution stays inside `check_fees`' bound: it caps the contribution
/// at `original_fee_rate * additional_input_weight`.
const FEE_RATE_SAT_PER_VB: u64 = 2;
const SENDER_MIN_FEE_RATE: FeeRate = FeeRate::from_sat_per_vb_u32(1);

const ENDPOINT: &str = "https://example.com";

#[test]
fn payjoin_round_trip_at_the_default_amount() {
    let wallets = DemoWallets::embedded().expect("embedded fixture loads");
    let amount_sat = wallets.amount_bounds().default_sat;
    let outcome = run(&wallets, amount_sat);

    assert_eq!(outcome.payjoin.outputs.len(), 2, "payjoin should keep the original's two outputs");
    assert!(
        outcome.payjoin.inputs.iter().any(|input| input.party == Party::Receiver),
        "the receiver must have contributed an input; that is what makes this a payjoin"
    );
    assert!(
        outcome.payjoin.inputs.iter().any(|input| input.party == Party::Sender),
        "the sender's inputs must survive into the payjoin"
    );
    assert!(
        outcome.payjoin.inputs.len() > outcome.original.inputs.len(),
        "the payjoin should have more inputs than the original"
    );
}

/// The demo exists to show the receiver getting paid, so check the arithmetic, not just
/// that the protocol did not error.
#[test]
fn both_sides_end_up_where_bip78_says_they_should() {
    let wallets = DemoWallets::embedded().expect("embedded fixture loads");
    let amount_sat = wallets.amount_bounds().default_sat;
    let outcome = run(&wallets, amount_sat);

    let outputs_of = |tx: &DecodedTx, party: Party| -> u64 {
        tx.outputs.iter().filter(|out| out.party == party).map(|out| out.value_sat).sum()
    };
    let inputs_of = |tx: &DecodedTx, party: Party| -> u64 {
        tx.inputs.iter().filter(|input| input.party == party).map(|i| i.value_sat).sum()
    };

    assert_eq!(
        outputs_of(&outcome.original, Party::Receiver),
        amount_sat,
        "the original pays exactly what was asked"
    );
    assert_eq!(
        inputs_of(&outcome.original, Party::Receiver),
        0,
        "only the sender funds the original"
    );
    assert_eq!(
        inputs_of(&outcome.payjoin, Party::Sender),
        inputs_of(&outcome.original, Party::Sender),
        "the sender's inputs must survive unchanged into the payjoin"
    );

    // BIP 78's fee split: the sender offers to cover the receiver's added input, and the
    // offer comes out of the sender's change. Whatever is left over the receiver pays
    // itself, out of the output it is being paid into.
    let contributed = inputs_of(&outcome.payjoin, Party::Receiver);
    assert!(contributed > 0, "the receiver contributed no input; this is not a payjoin");

    let sender_contribution =
        outputs_of(&outcome.original, Party::Sender) - outputs_of(&outcome.payjoin, Party::Sender);
    assert!(sender_contribution > 0, "the sender should have offered a fee contribution");

    let extra_fee = outcome.payjoin.fee_sat - outcome.original.fee_sat;
    let receiver_fee_share = extra_fee - sender_contribution;
    assert_eq!(
        outputs_of(&outcome.payjoin, Party::Receiver),
        amount_sat + contributed - receiver_fee_share,
        "the receiver is paid the amount plus its own coin, less its share of the added fee"
    );
}

#[test]
fn fees_stay_sane_across_the_round_trip() {
    let wallets = DemoWallets::embedded().expect("embedded fixture loads");
    let outcome = run(&wallets, wallets.amount_bounds().default_sat);

    assert!(
        outcome.payjoin.fee_sat >= outcome.original.fee_sat,
        "the absolute fee may not decrease; the sender rejects that outright"
    );
    assert!(
        outcome.payjoin.fee_rate_sat_per_vb >= 1.0,
        "the payjoin must still be relayable, got {} sat/vB",
        outcome.payjoin.fee_rate_sat_per_vb
    );
    assert!(
        outcome.payjoin.fee_rate_sat_per_vb < 10.0,
        "an unexpectedly high fee rate means the fee contribution logic misfired, got {}",
        outcome.payjoin.fee_rate_sat_per_vb
    );
    assert_eq!(
        outcome.payjoin.vsize,
        outcome.payjoin.weight.div_ceil(4),
        "the decoded view must agree with itself"
    );
    // Both sides signed for real, so the rendered size is the real size: exactly one more
    // P2WPKH input than the original, at 68 vB give or take a byte of DER signature.
    let added_vsize = outcome.payjoin.vsize - outcome.original.vsize;
    assert!(
        (66..=70).contains(&added_vsize),
        "the payjoin should be one P2WPKH input heavier, grew by {added_vsize} vB"
    );
}

/// Output order and the receiver's input position are randomized, so a single pass proves
/// less than it looks. Repeat enough to hit both output orderings.
#[test]
fn round_trip_survives_the_randomized_orderings() {
    let wallets = DemoWallets::embedded().expect("embedded fixture loads");
    let bounds = wallets.amount_bounds();
    let mut receiver_output_positions = std::collections::HashSet::new();

    for amount_sat in [bounds.min_sat, bounds.default_sat, 50_000_000, 120_000_000] {
        for _ in 0..4 {
            let outcome = run(&wallets, amount_sat);
            let position = outcome
                .payjoin
                .outputs
                .iter()
                .position(|out| out.party == Party::Receiver)
                .expect("the receiver is always paid");
            receiver_output_positions.insert(position);
        }
    }

    assert_eq!(
        receiver_output_positions.len(),
        2,
        "the payment output should not be pinned to one index"
    );
}

#[test]
fn the_receiver_refuses_to_sign_the_sender_s_inputs() {
    let wallets = DemoWallets::embedded().expect("embedded fixture loads");
    let sender = wallets.sender();
    let receiver = wallets.receiver();

    let psbt = sender
        .build_original_psbt(receiver.address(), 15_000_000, FEE_RATE_SAT_PER_VB)
        .expect("original builds");

    let error =
        receiver.sign_and_finalize(psbt).expect_err("the receiver owns none of these inputs");
    assert!(error.to_string().contains("no input"), "unexpected error: {error}");
}

struct Outcome {
    original: DecodedTx,
    payjoin: DecodedTx,
}

/// Sender and receiver, both driven by the demo wallet, with the request and response
/// passed between them as the bytes they would be on the wire.
fn run(wallets: &DemoWallets, amount_sat: u64) -> Outcome {
    let receiver = wallets.receiver();
    let sender = wallets.sender();

    // The receiver issues a BIP 21 URI.
    let receiver_address = address(&receiver.address());
    let mut pj_uri = build_v1_pj_uri(&receiver_address, ENDPOINT, OutputSubstitution::Disabled)
        .expect("uri builds");
    pj_uri.set_amount(Amount::from_sat(amount_sat));

    // The sender builds, signs and finalizes the original. BIP 78 wants it broadcastable,
    // since the receiver holds it as the fallback.
    let original_psbt = sender
        .build_original_psbt(receiver.address(), amount_sat, FEE_RATE_SAT_PER_VB)
        .expect("original builds");
    let original_psbt = sender.sign_and_finalize(original_psbt).expect("sender signs the original");
    let original = wallets.extract_tx(original_psbt.clone()).expect("original decodes");

    let uri = Uri::from_str(&pj_uri.to_string())
        .expect("uri parses")
        .assume_checked()
        .check_pj_supported()
        .expect("uri offers payjoin");
    let (request, context) = SenderBuilder::new(psbt(&original_psbt), uri)
        .build_recommended(SENDER_MIN_FEE_RATE)
        .expect("sender builds the request")
        .create_v1_post_request();

    let response = receive(&request, &receiver);

    // Back in the sender: check the proposal, then sign it.
    let checked = context.process_response(response.as_bytes()).expect("proposal passes checks");
    let payjoin_psbt =
        sender.sign_and_finalize(checked.to_string()).expect("sender signs the payjoin");
    let payjoin = wallets.extract_tx(payjoin_psbt).expect("payjoin decodes");

    Outcome { original, payjoin }
}

/// The receiver side, with each check answered the way the browser demo answers it.
fn receive(request: &Request, receiver: &DemoWallet) -> String {
    let query = Url::from_str(&request.url).expect("url parses").query().unwrap_or("").to_string();
    let proposal =
        UncheckedOriginalPayload::from_request(&request.body, &query, HeaderMock::new(request))
            .expect("request parses");

    // Nothing is broadcast and no node is consulted, so this is a constant.
    let proposal =
        proposal.check_broadcast_suitability(None, |_tx| Ok(true)).expect("broadcast check passes");

    // Ownership is set membership over scriptPubKey bytes. The receiver must own none of the
    // sender's inputs, and at least one output.
    let proposal = proposal
        .check_inputs_not_owned(&mut |outpoint| {
            // No chain to resolve an outpoint against, so the receiver's own coins are the
            // authoritative set, which is what a wallet consults anyway.
            Ok(receiver
                .list_unspent()
                .iter()
                .any(|utxo| utxo.txid == outpoint.txid.to_string() && utxo.vout == outpoint.vout))
        })
        .expect("the receiver owns none of the sender's inputs");
    let proposal = proposal
        .check_no_inputs_seen_before(&mut |_outpoint| Ok(false))
        .expect("no input has been seen before")
        .identify_receiver_outputs(&mut |script| Ok(receiver.owns_script(script.to_bytes())))
        .expect("the receiver is paid by the original");

    let proposal = proposal.commit_outputs();

    let unspent = receiver.list_unspent();
    let candidates = unspent.iter().map(candidate);
    let selected = proposal
        .try_preserving_privacy(candidates)
        .expect("a privacy-preserving input is available");
    let proposal = proposal
        .contribute_inputs(vec![selected])
        .expect("the contribution is accepted")
        .commit_inputs();

    let proposal = proposal
        .apply_fee_range(Some(FeeRate::BROADCAST_MIN), Some(FeeRate::from_sat_per_vb_u32(4)))
        .expect("the fee range is satisfiable");

    // The demo wallet signs only its own input here. The library checks that: it compares
    // the ntxid across the callback and rejects a signature on any input from the original.
    let proposal = proposal
        .finalize_proposal(|to_sign| {
            receiver
                .sign_and_finalize(to_sign.to_string())
                .map(|signed| psbt(&signed))
                .map_err(ImplementationError::new)
        })
        .expect("the receiver finalizes its own input");

    proposal.psbt().to_string()
}

fn candidate(utxo: &payjoin_demo_wallet::Utxo) -> InputPair {
    let address = address(&utxo.address);
    InputPair::new(
        TxIn {
            previous_output: OutPoint {
                txid: utxo.txid.parse().expect("fixture txid parses"),
                vout: utxo.vout,
            },
            // Overwritten with the original's sequence by `contribute_inputs`.
            sequence: Sequence::default(),
            ..Default::default()
        },
        PsbtInput {
            witness_utxo: Some(TxOut {
                value: Amount::from_sat(utxo.value_sat),
                script_pubkey: address.script_pubkey(),
            }),
            ..Default::default()
        },
        // P2WPKH input weight is a constant, so no explicit weight is needed or allowed.
        None,
    )
    .expect("fixture utxo makes a valid input pair")
}

fn address(text: &str) -> Address {
    Address::from_str(text)
        .expect("address parses")
        .require_network(Network::Regtest)
        .expect("fixtures are regtest")
}

fn psbt(base64: &str) -> Psbt { Psbt::from_str(base64).expect("psbt parses") }

struct HeaderMock(HashMap<String, String>);

impl Headers for HeaderMock {
    fn get_header(&self, key: &str) -> Option<&str> { self.0.get(key).map(String::as_str) }
}

impl HeaderMock {
    fn new(request: &Request) -> Self {
        Self(HashMap::from([
            ("content-type".to_string(), request.content_type.to_string()),
            ("content-length".to_string(), request.body.len().to_string()),
        ]))
    }
}
