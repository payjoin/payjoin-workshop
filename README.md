# Payjoin workshop

Build both sides of a BIP 77 payjoin in your browser with [Payjoin Dev
Kit](https://payjoin.org). Two regtest wallets run in one page. You implement
the receiver, who issues a BIP 21 URI and contributes an input under an
automated receive rule, and the sender, who builds, verifies and signs the
transfer. The result is a transaction with two owners that reads like any
other payment on chain.

Nothing here is spendable and nothing is broadcast. In live mode the protocol
runs over the real payjo.in directory server and public OHTTP relays; in mock
mode it runs with no network at all.

## Before you start

1. Install Node.js 20 or later (https://nodejs.org).
2. Clone this repository and prove your machine is ready:

```sh
npm ci
npm run check
```

`npm run check` prints `READY` when everything works. If it prints anything
else, it names the problem. Nothing else is required: no Bitcoin node, no
wallet, no funds, no Rust toolchain. (Nix users: `nix develop` provides Node.)

## Run it

```sh
npm run dev            # live mode: real directory server, real relays
npm run dev -- --mock  # offline mode: the protocol is simulated in-page
```

Open the printed URL. Press "Run a payjoin", set an amount as the receiver,
hand the URI across, and send the transfer as the sender. In mock mode a
finished payjoin plays out end to end, which is how the workshop looks before
you have written anything. In live mode the protocol is real, so every step
waits on the checkpoint you implement next.

Appending `?fail=wasm-load`, `?fail=network`, `?fail=protocol` or
`?fail=cancelled` to the URL forces each failure state.

## The workshop: five checkpoints

All five live in one file: **`src/workshop/steps.ts`**. Each is a function
whose body is a `TODO(step-N)` comment and a `NotImplemented` throw. Fill them
in order. The page stays runnable the whole time: an unimplemented checkpoint
shows up as a readable failure card naming the step, not a crash.

Run `npm run dev` while you work; the page reloads as you save. The trace
lights up as each checkpoint lands.

### step-1 — the receiver opens a session

Create the BIP 77 session against the directory server and return the BIP 21
URI. Win: the receiver pane shows the URI and a QR code, and the trace reads

```
Opening a payjoin session      directory server payjo.in
Issued a BIP 21 payjoin URI    15,000,000 sat
```

This is the async unlock: the session lives at the directory server, so a real
receiver can close the laptop once the URI is out.

### step-2 — the sender builds and posts the original PSBT

Parse the URI, build and sign the original PSBT, post it through an OHTTP
relay. Win:

```
Read the payjoin URI                          15,000,000 sat to bcrt1q…
Built the original PSBT                       1 in, 2 out, 282 sat fee
Signed the original PSBT                      141 vB
Sent the original PSBT to the directory server   via pj.benalleng.com
```

The original PSBT is a complete, broadcastable transfer. If the receiver never
responds, the sender can broadcast it as-is — payjoin only ever improves on a
payment that already works.

### step-3 — the receiver checks the original PSBT

Poll the directory server, then walk the receiver's checks: broadcastable, no
inputs of ours, no inputs seen before, our output present. Win:

```
Received the original PSBT
Checked the original PSBT      broadcastable, none of its inputs are ours, our output is there
```

Each check exists because a malicious sender probes. The typestates force the
sequence — the library will not let you contribute before checking.

The library hands your wallet each check as a list of items to mark, and you
apply the marked list. Because you mark the items yourself, the answers can
come from an async lookup such as an indexer call.

### step-4 — the receive rule fires

Implement `selectContribution` (the rule: consolidate the smallest coin on
every receive), contribute the coin it picks, sign the PSBT the proposal hands
you, and post the proposal.
Win:

```
Contributed a receiver input at a random index   the receive rule picked the smallest coin: 40,000,000 sat
Signed the receiver's own input
Sent the proposal back                           via pj.benalleng.com
```

This is the point of the whole session: a wallet that acts while receiving.
The rule shipped here is deliberately simple; production rules are policy —
consolidate under a fee threshold, cut through a queued send, top up a
channel. The rule function is the only place a new policy touches.

### step-5 — the sender verifies and finalizes

Poll for the proposal, verify it against what was signed for, sign the
sender's inputs, finalize. Win: the finished payjoin renders with inputs
coloured by owner, and the trace ends

```
Received the proposal
Checked the proposal against the original PSBT
Signed the payjoin transaction                209 vB
Payjoin complete, nothing broadcast           2 inputs from both sides, 349 sat fee
```

The sender never trusts the receiver: the proposal is re-verified before
anything is signed. Mutual verification is the trust model.

## Fell behind?

Every checkpoint has a tag holding the solutions up to and including that
step:

```sh
git checkout -f step-3    # steps 1-3 solved, 4-5 still TODO
git checkout -f solutions # all five solved
git checkout -f main      # back to the skeleton
```

`-f` discards your local edits, which is what you want when rejoining the
group. Git will mention a "detached HEAD" for tags; for this session that is
fine to ignore. To compare any two checkpoints: `git diff step-2 step-3 --
src/workshop/steps.ts` shows exactly what step 3 adds.

## No network in the room?

The workshop USB stick carries this repository, Node installers for every
platform, and a populated npm cache. From the stick:

```sh
git clone payjoin-workshop my-workshop     # or copy the folder
cd my-workshop
npm ci --offline --cache ../npm-cache
npm run check
npm run dev -- --mock
```

Mock mode needs no network at any point. Live mode needs outbound HTTPS only.

## Pay the receiver from a real wallet

In live mode the receiver's session is real, so any BIP 77 sender can pay the
URI on the page — scan the QR, or run
[payjoin-cli](https://crates.io/crates/payjoin-cli) against it. There is also a
headless version of the page's receiver for testing against an external
counterparty (run it from the `solutions` branch):

```sh
npx tsx scripts/receiver-only.mts --amount 15000000
```

The built-in wallet is a regtest fixture, so the protocol completes but a real
counterparty's broadcast fails at its node: the receiver's coin exists on no
chain. To make the finished payjoin broadcastable, load a fixture for a test
network whose coins are real funded outpoints — `--fixtures <file>` here, or
`?fixtures=<url>` on the page. The fixture loader refuses mainnet keys.

## What is actually happening

BIP 77 payjoin is asynchronous: the two wallets never talk to each other
directly. A **directory server** (payjo.in here) is the mailbox both sides
post to and poll from, so neither has to be online at the same time as the
other. An **OHTTP relay** sits in front of it and strips who is asking, so
the directory sees payloads but not people. Payloads are encrypted end to end
with HPKE; the infrastructure learns nothing about the transfer. Those are
two different hops doing two different jobs.

Verify the flow you built matches the spec:
[BIP 77](https://github.com/bitcoin/bips/blob/master/bip-0077.md) ·
[payjoin.org](https://payjoin.org) ·
[Payjoin Dev Kit](https://github.com/payjoin/rust-payjoin)

## Take it home: the Rust track

The wasm engine you drove is `payjoin-ffi` over the
[`payjoin`](https://crates.io/crates/payjoin) crate, and the typestates you
walked in step 3 are that crate's API. The same flow in Rust, against the same
directory server:

```sh
cargo install payjoin-cli
payjoin-cli receive --help
```

`payjoin-cli` is a working reference wallet for BIP 77 against a bitcoind
node. Reading its `receive` and `send` implementations after this workshop is
the fastest route to a production integration. Bindings exist for TypeScript
(what you used today), C#, Python and Dart from the same
[rust-payjoin](https://github.com/payjoin/rust-payjoin) repository, and a
typical wallet integration lands in about a thousand lines.

Questions, integration support: dan@payjoin.org

## Development

Gates, all of which CI runs on Node 20 and 22:

```sh
npm run check   # environment + vendored engine + typecheck, prints READY
npm test        # mock driver contract + engine regression guard
npm run build   # tsc + vite production build
```

`PAYJOIN_LIVE_E2E=1 npm test` additionally drives one whole payjoin over the
live directory server. It needs every checkpoint solved (run it from the
`solutions` branch), and it puts real traffic on volunteer-run relays, so it
is off by default and does one payjoin per run. Do not loop it.

The vendored engine under `vendor/payjoin-demo/` is a build product of the
Rust in `engine/`. Provenance and rebuild instructions are in
`vendor/payjoin-demo/README.md`. CI does not build it.

## License

MITNFA. See `LICENSE`.
