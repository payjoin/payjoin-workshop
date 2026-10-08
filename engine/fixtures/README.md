# Demo fixtures

**The private keys in `demo-fixtures.json` are published on purpose and are worthless.
Never send bitcoin to any address in that file.**

They are regtest keys derived from a seed printed in the file itself, so anyone can
recompute every one of them. The demo signs real transactions in the
visitor's browser, which means real keys have to be in the page, which means they must be
keys nobody could ever lose anything to.

## What is in here

Two wallets, `receiver` and `sender`. Each has a receiving key, a separate change key, and one
key per UTXO. A wallet is a _set_ of scripts, which is what payjoin's ownership checks
actually test, and separate keys keep address reuse out of a transaction whose subject is
privacy.

All P2WPKH, because P2WPKH is the one script type whose sender-side
input weight is a constant (payjoin's `expected_input_weight`), so the sender can size the
fee contribution against an original that is not yet signed. Taproot would not work here.

The sender holds four coins (0.2 / 0.35 / 0.5 / 1.0 BTC) and the receiver two (0.4 / 0.6). The
sender has several so coin selection is visible and the original carries a change output;
a sweep would short-circuit the sender's `build_recommended` to `build_non_incentivizing`
and skip the fee contribution that makes payjoin
interesting to show. All amounts are integer sats.

## The coins do not exist

Each wallet's UTXOs are outputs of a synthetic, never-broadcast, coinbase-shaped
transaction, so the outpoints are real hashes of a real transaction rather than typed
digits. Nothing consults a chain: the demo never broadcasts, and the receiver's broadcast
check is stubbed to `true`. There is no regtest node behind this file and none is needed.

## Regenerating

From `engine/`:

```sh
cargo run -p payjoin-demo-wallet --bin gen-fixtures
```

The generator is deterministic: a clean tree reproduces the file byte for byte. It asserts
everything the fixture has to satisfy before it writes: outpoints recompute from the
funding transaction, every WIF derives the address recorded beside it, the two wallets'
script sets are disjoint, and an original PSBT builds, signs and decodes at the lowest,
default and highest amount the UI can offer.

## Labelling

The file's own `$comment` and this README are two of the three places these keys have to be
marked. The third is the `RegtestBadge` on the demo page (`src/demo/ui.tsx`). The amounts
here are BTC-scale and a visitor could otherwise reasonably think they are watching mainnet.
