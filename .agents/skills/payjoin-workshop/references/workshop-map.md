# Workshop map

Use this page when a learner asks where to work or what a checkpoint is meant to teach.

## Repository contract

The learner-facing integration surface is `src/workshop/steps.ts`. It contains five functions with `TODO(step-N)` markers. The surrounding application is deliberately prewritten so the learner focuses on Payjoin integration rather than browser plumbing.

The important supporting files are:

- `src/workshop/toolkit.ts`: wallet helpers, persistence, polling, relay handling, response conversion, and error types.
- `src/driver/types.ts`: the `DemoDriver`, `DemoSession`, trace events, and failure contract shared by mock and live paths.
- `src/driver/mockDriver.ts`: offline simulation used for fast tests and classroom demonstrations.
- `src/driver/wasmDriver.ts`: live PDK/FFI-backed driver.
- `test/mockDriver.test.ts`: contract tests for event order, arithmetic, contribution policy, and cancellation.
- `README.md`: setup, checkpoint instructions, live/mock boundaries, and Rust follow-up.

## Checkpoints

| Step | Function | Role | Learner concept | Success signal |
| --- | --- | --- | --- | --- |
| 1 | `openReceiverSession` | Receiver | Build and save a BIP 77 receiver session; issue a BIP 21 URI | `session-init`, `uri-issued` |
| 2 | `sendOriginal` | Sender | Parse URI; build/sign Original PSBT; wrap and post it through OHTTP | `uri-parsed`, `original-built`, `original-signed`, `request-sent` |
| 3 | `receiveAndCheck` | Receiver | Poll and pass the receiver's safety checks in order | `request-received`, `checks-passed` |
| 4 | `selectContribution`, `contributeAndPropose` | Receiver | Apply wallet policy; contribute an input; fee-range; sign and post Proposal | `inputs-contributed`, `proposal-signed`, `proposal-sent` |
| 5 | `verifyAndFinalize` | Sender | Poll, re-verify Proposal, sign sender inputs, finalize | `proposal-received`, `proposal-checked`, `payjoin-signed`, `done` |

Implement in order unless the learner deliberately checks out a solved checkpoint or asks for a conceptual explanation. The tags `step-1` through `step-5` are solved milestones; `solutions` contains all five solutions; `main` is the learner skeleton. Do not use a forceful checkout over user edits without explicit permission.

## Expected ownership story

The Original transaction contains sender inputs and a receiver payment output. The Proposal adds a receiver-owned input and adjusts the receiver output to account for the contribution and additional fee. The sender's change remains sender-owned. Input order may be randomized, so the UI's owner coloring is explanatory metadata, not a protocol field.

## Mock versus live

Mock mode is offline and intentionally simulates the shape of the protocol. It is useful for classroom flow, deterministic tests, failure cards, and arithmetic checks. It does not compute real signatures or prove broadcastability.

Live mode exercises the real directory and public OHTTP relay path through the vendored engine. It is opt-in in tests, requires every checkpoint, and may use public volunteer infrastructure. Treat live traffic as a one-off integration check, not a load test.

## Safe customization examples

Good bounded changes include:

- replace `consolidate-smallest` with a clearly named, tested receive policy;
- change trace wording without changing the driver event IDs;
- add a negative test for an invalid amount, empty receiver wallet, cancellation, or failed proposal;
- add a teaching panel that explains one existing trace event.

Changes that require a separate design review include changing fee protection, changing which inputs may be contributed, accepting unchecked proposals, changing persistence semantics, or adding real-wallet fixtures.
