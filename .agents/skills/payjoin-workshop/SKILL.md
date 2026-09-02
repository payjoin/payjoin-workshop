---
name: payjoin-workshop
description: Explain, teach, implement, customize, and review the payjoin-workshop repository's five BIP 77 checkpoints. Use when someone asks about this workshop, src/workshop/steps.ts, its mock/live drivers, the receiver contribution rule, or how to learn Payjoin Dev Kit through the workshop. Keep work educational and testnet-safe; do not treat this skill as a production wallet audit or permission to use real funds.
---

# Payjoin Workshop

Use this skill as a focused Payjoin workshop and PDK knowledge assistant. The repository demonstrates a BIP 77 Payjoin in a browser with two fixture wallets. It is not a wallet, a Bitcoin node, or proof that a production integration is secure.

## Choose the mode

Identify the user's intent before acting:

- **Answer:** answer a question about Payjoin, PDK, the workshop, a checkpoint, an API call, or a trace event using the repository and relevant references.
- **Implement:** complete one requested checkpoint in `src/workshop/steps.ts`, in order, while preserving the driver contract.
- **Customize:** change a workshop policy or presentation deliberately, then add or update tests for the changed behavior.
- **Debug:** trace a failure from the UI or test to the relevant driver/checkpoint and explain the smallest repair.
- **Test:** add or run a focused test that demonstrates the lesson or guards a changed behavior.
- **Review:** inspect a proposed change for protocol invariants, regression risk, and missing evidence; do not silently implement it unless asked.

Map natural language to the relevant checkpoint or source file. The user does not need to know names such as `receiveAndCheck`. If the request is an implementation request and the target is clear, fill the related part directly. If it is only a question, do not edit files.

## Working workflow

1. Inspect the checkout before editing. Read `README.md`, `src/workshop/steps.ts`, `src/workshop/toolkit.ts`, the driver types, and the tests relevant to the request. Check the current branch and preserve unrelated user changes.
2. Establish the boundary: the workshop teaches the integration seam; the toolkit owns polling, persistence, relay failover, and error conversion; the PDK engine owns Payjoin protocol state and validation; the wallet adapter owns addresses, PSBT construction, signing, ownership queries, and coin policy.
3. Identify the checkpoint's sender/receiver role, expected typestate transition, observable trace events, and failure/fallback behavior. State any assumption about a mock-only demonstration versus a live protocol path. Give the direct answer or implementation mapping before details.
4. Make the smallest scoped change. Follow the TODO comments and existing type names. Keep mock and live drivers on the same `DemoDriver` contract. Do not bypass PDK validation by fabricating a successful result in the live path.
5. Verify proportionally. Prefer mock tests and local checks first. Run `npm run check`, `npm test`, and `npm run build` when dependencies are available. Run live E2E only when the user explicitly requests it; it uses public relay infrastructure and must not be looped.
6. Report what changed, the commands and results that provide evidence, and what remains unverified. A passing mock test proves the demo contract, not mainnet safety or real broadcastability.

## Non-negotiable Payjoin teaching points

- The sender first creates a complete, broadcastable Original PSBT. Payjoin is an improvement on a working payment, not a prerequisite for payment.
- The receiver must check the Original PSBT before contributing: broadcastability, input ownership, replay/previously-seen inputs, and the receiver output.
- The receiver contributes only its own input, applies an explicit fee policy, and signs only its own input.
- The sender verifies the Proposal against the Original PSBT before signing sender inputs.
- Preserve the sender's intended outputs and fee protections. Do not describe input order as ownership proof; Payjoin may randomize input placement.
- Explain the directory/mailbox, OHTTP relay, and HPKE encryption as different components with different jobs. Do not collapse them into “the relay encrypts everything.”
- Use mock mode, regtest, or another non-production fixture while learning. Never request, print, or commit private keys, seed phrases, real wallet exports, or unnecessary raw PSBT secrets.

## Reference routing

Read only the reference needed for the current request:

- [Workshop map](references/workshop-map.md): read for checkpoint selection, source files, expected trace, branches, and the driver seam.
- [Protocol and safety](references/protocol-and-safety.md): read for BIP 77 roles, PDK boundaries, typestate reasoning, and security-sensitive explanations.
- [Evaluation and examples](references/evaluation.md): read when designing tests, evaluating a skill response, or customizing workshop behavior.

## Response shape

For implementation or customization, organize the answer around:

1. **Understanding** — role, checkpoint, and intended behavior.
2. **Change** — files and smallest implementation choice.
3. **Verification** — observed command/test results.
4. **Boundary** — what the result does not prove and the next safe exercise.

For knowledge requests, give the direct answer first and then map it to the relevant function, trace event, or PDK concept. For implementation requests, show the smallest related change and its evidence; do not bury the answer under a simulated classroom dialogue or a large unrelated code dump.
