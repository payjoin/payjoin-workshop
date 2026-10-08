// The workshop. Five checkpoints, one function each, run in order by the live
// driver. Everything around them — relay failover, polling, persistence — is
// prewritten in toolkit.ts; what is in this file is the payjoin integration
// surface itself, the same calls a production wallet makes.
//
// Each checkpoint is marked TODO(step-N). Fill them in order; the trace on the
// page lights up as each one lands. Fell behind? `git checkout step-N` puts
// you at any checkpoint, solved. All five: `git checkout solutions`.

import * as demo from "../../vendor/payjoin-demo/demo_wallet";
import * as pdk from "../../vendor/payjoin-demo/payjoin";
import {
    ORIGINAL_FEE_RATE_SAT_PER_VB,
    ProtocolError,
    RECEIVER_MAX_FEE_RATE_SAT_PER_VB,
    RECEIVER_MIN_FEE_RATE_SAT_PER_VB,
    SENDER_MIN_FEE_RATE_SAT_PER_KWU,
    Toolkit,
} from "./toolkit";

/** Thrown by a checkpoint that has not been implemented yet. The page shows
 *  the message, so an unimplemented step is a readable state, not a crash. */
export class NotImplemented extends Error {
    constructor(step: string, fn: string) {
        super(
            `TODO(${step}): implement ${fn} in src/workshop/steps.ts — or \`git checkout ${step}\` to see it solved`,
        );
        this.name = "NotImplemented";
    }
}

// ---------------------------------------------------------------------------
// step-1 — the receiver opens a session
// ---------------------------------------------------------------------------

export interface ReceiverSession {
    session: pdk.InitializedLike;
    uri: string;
}

/**
 * Create the receiver's BIP 77 session against the directory server and issue
 * the BIP 21 URI a sender can act on. This is the async unlock: the session
 * lives at the directory, so the receiver can go offline once the URI is out.
 */
export async function openReceiverSession(
    tk: Toolkit,
    amountSat: number,
): Promise<ReceiverSession> {
    // TODO(step-1): create the receiver session.
    //
    //   1. Announce it: tk.emit("receiver", "session-init", "Opening a payjoin
    //      session", …) — the detail line is yours; the directory's host,
    //      tk.host(tk.directory), reads well.
    //   2. Build the session with pdk.ReceiverBuilder. It takes the address
    //      (tk.receiver.address()), the directory (tk.directory), and the
    //      directory's OHTTP keys (await tk.ohttpKeys()). Chain
    //      .withAmount(BigInt(amountSat)).build().save(tk.receiverPersister).
    //   3. Read the BIP 21 URI off the session: session.pjUri().asString()
    //   4. Emit "uri-issued" and return { session, uri }.
    //
    // Win: the receiver pane shows the URI and its QR code.
    throw new NotImplemented("step-1", "openReceiverSession");
}

// ---------------------------------------------------------------------------
// step-2 — the sender builds and posts the original PSBT
// ---------------------------------------------------------------------------

export interface SentOriginal {
    sendCtx: pdk.PollingForProposalLike;
    originalPsbt: string;
}

/**
 * Parse the URI, build and sign the original PSBT, and post it through an
 * OHTTP relay to the directory server. The original PSBT is a complete,
 * broadcastable transfer — if the receiver never shows up, the sender can
 * broadcast it as-is. Payjoin only ever improves on a payment that already
 * works.
 */
export async function sendOriginal(
    tk: Toolkit,
    uri: string,
): Promise<SentOriginal> {
    // TODO(step-2): the sender side.
    //
    //   1. Parse: pdk.Uri.parse(uri).checkPjSupported() — a mangled URI throws,
    //      and the driver turns that into a protocol failure, not a crash. Read
    //      the amount with pjUri.amountSats() (undefined means throw a
    //      ProtocolError). Emit "uri-parsed".
    //   2. Build and sign the original PSBT with the wallet:
    //        tk.sender.signAndFinalize(tk.sender.buildOriginalPsbt(
    //            pjUri.address(), amountSat, ORIGINAL_FEE_RATE_SAT_PER_VB))
    //      tk.decode(originalPsbt) gives you numbers for the detail lines.
    //      Emit "original-built", then "original-signed".
    //   3. Wrap it for BIP 77: new pdk.SenderBuilder(originalPsbt, pjUri)
    //        .buildRecommended(SENDER_MIN_FEE_RATE_SAT_PER_KWU)
    //        .save(tk.senderPersister)
    //   4. Post it through an OHTTP relay:
    //        const posted = await tk.throughRelay(async (relay) => {
    //            const request = sender.createV2PostRequest(relay);
    //            return { body: await tk.post(request.request),
    //                     ohttpCtx: request.ohttpCtx };
    //        });
    //      then sender.processResponse(posted.value.body,
    //      posted.value.ohttpCtx).save(tk.senderPersister) is your sendCtx.
    //      Emit "request-sent" and return { sendCtx, originalPsbt }.
    //
    // Win: the trace shows request-sent — the directory server now holds the
    // encrypted original PSBT.
    throw new NotImplemented("step-2", "sendOriginal");
}

// ---------------------------------------------------------------------------
// step-3 — the receiver receives the original PSBT and checks it
// ---------------------------------------------------------------------------

/**
 * Poll the directory server for the original PSBT and run the receiver's
 * checks. Each check exists because a malicious sender probes: replaying
 * originals or spending the receiver's own coins back at it are how an
 * attacker unmasks a wallet's UTXOs. The typestates force this sequence — you
 * cannot reach "contribute" without passing them.
 */
export async function receiveAndCheck(
    tk: Toolkit,
    session: pdk.InitializedLike,
): Promise<pdk.WantsOutputsLike> {
    // TODO(step-3): receive the original PSBT and run the receiver's checks.
    //
    //   1. Poll: await tk.pollForOriginal(session) — null means it never came;
    //      throw a ProtocolError. Emit "request-received".
    //   2. Walk the typestate chain. Each check is a checklist: the state hands
    //      you its items, your wallet marks every one of them in order, and you
    //      apply the marked list. You mark the items yourself, so a real wallet
    //      can look each one up asynchronously first. Each result is
    //      `.save(tk.receiverPersister)` then cast to the next state. The
    //      names below are those states; pollForOriginal returned `unchecked`.
    //        unchecked.applyBroadcastSuitability(undefined, true)
    //            — a real wallet first tests
    //              extractTxToCheckBroadcastSuitability() for mempool
    //              acceptance; nothing is broadcast in the demo, so there is
    //              no mempool to ask
    //            → as pdk.MaybeInputsOwnedLike
    //        maybeInputsOwned.applyInputsOwnedChecklist(
    //            maybeInputsOwned.inputsOwnedChecklist().map((item) =>
    //                item.mark(tk.receiverOwnsOutpoint(item.value()))))
    //            → as pdk.MaybeInputsSeenLike
    //        maybeInputsSeen.applyInputsSeenChecklist(
    //            maybeInputsSeen.inputsSeenChecklist().map((item) =>
    //                item.mark(false)))
    //            — a payment processor keeps a seen-inputs table here to
    //              blunt probing; the demo has no state across runs
    //            → as pdk.OutputsUnknownLike
    //        outputsUnknown.applyOutputsOwnedChecklist(
    //            outputsUnknown.outputsOwnedChecklist().map((item) =>
    //                item.mark(tk.receiver.ownsScript(item.value()))))
    //            → as pdk.WantsOutputsLike
    //   3. Emit "checks-passed" and return the WantsOutputsLike.
    //
    // Win: the trace shows checks-passed. You cannot reach "contribute"
    // without this — the typestates will not let you.
    throw new NotImplemented("step-3", "receiveAndCheck");
}

// ---------------------------------------------------------------------------
// step-4 — the receive rule fires: contribute an input, sign, post the proposal
// ---------------------------------------------------------------------------

/** A pre-defined rule the wallet executes when a transfer arrives. One rule
 *  ships with the workshop; production rules are policy — consolidate under a
 *  fee threshold, cut through a queued send, top up a channel. */
export type ReceiveRule = "consolidate-smallest";

/**
 * The rule itself: given the receiver's spendable coins, pick the one to
 * contribute. "consolidate-smallest" folds the wallet's smallest coin into
 * every transfer that arrives, so receiving steadily defragments the wallet
 * inside transactions someone else initiated.
 */
export function selectContribution(
    utxos: demo.Utxo[],
    rule: ReceiveRule,
): demo.Utxo {
    // TODO(step-4): the rule. For "consolidate-smallest", return the utxo with
    // the smallest valueSat (throw a ProtocolError if the wallet is empty).
    // This function is the policy hook — a new rule is a new case here, and
    // nothing else changes.
    throw new NotImplemented("step-4", "selectContribution");
}

/**
 * Apply the rule: contribute the selected input, let the receiver's output
 * grow by what the contribution brings in, sign the receiver's input, and post
 * the proposal back through an OHTTP relay. The library slots the contributed
 * input in at a random index, so nothing in the finished transaction says
 * which input is whose.
 */
export async function contributeAndPropose(
    tk: Toolkit,
    wantsOutputs: pdk.WantsOutputsLike,
): Promise<void> {
    // TODO(step-4): apply the rule, sign, and post the proposal.
    //
    //   1. Keep the outputs as they are:
    //        wantsOutputs.commitOutputs().save(tk.receiverPersister)
    //            as pdk.WantsInputsLike
    //   2. Let the rule pick the coin:
    //        selectContribution(tk.receiver.listUnspent(),
    //                           "consolidate-smallest")
    //      then contribute it:
    //        .contributeInputs([tk.toInputPair(coin)]).commitInputs()
    //        .save(tk.receiverPersister) as pdk.WantsFeeRangeLike
    //      Emit "inputs-contributed" — say what the rule picked.
    //   3. Fee policy, then sign:
    //        .applyFeeRange(RECEIVER_MIN_FEE_RATE_SAT_PER_VB,
    //                       RECEIVER_MAX_FEE_RATE_SAT_PER_VB)
    //        .save(tk.receiverPersister) as pdk.ProvisionalProposalLike
    //      Sign the PSBT the provisional proposal hands you, then give it
    //      back:
    //        const signed =
    //            tk.receiver.signAndFinalize(provisional.psbtToSign())
    //            — signs the receiver's own input and nothing else; PDK
    //              rejects a signature on any input from the original PSBT
    //        provisional.finalizeSignedProposal(signed)
    //            .save(tk.receiverPersister) as pdk.PayjoinProposalLike
    //      Emit "proposal-signed".
    //   4. Post it back, the same throughRelay shape as step-2 but with
    //      proposal.createPostRequest(relay) and request.clientResponse, then
    //      proposal.processResponse(body, clientResponse).
    //      Emit "proposal-sent".
    //
    // Win: proposal-sent. Your wallet just acted while receiving — that is
    // the receive rule firing inside a transfer someone else initiated.
    throw new NotImplemented("step-4", "contributeAndPropose");
}

// ---------------------------------------------------------------------------
// step-5 — the sender verifies, signs and finalizes
// ---------------------------------------------------------------------------

/**
 * Poll for the proposal, verify it against what was signed for, sign the
 * sender's inputs, and finalize. The sender never trusts the receiver:
 * `pollForProposal` re-verifies the proposal as it decrypts — outputs intact,
 * fee sane, nothing hijacked — and refuses to hand over one that fails. The
 * trust model is mutual verification, not cooperation.
 */
export async function verifyAndFinalize(
    tk: Toolkit,
    sendCtx: pdk.PollingForProposalLike,
): Promise<string> {
    // TODO(step-5): finalize.
    //
    //   1. Poll: await tk.pollForProposal(sendCtx) resolves to the proposal
    //      PSBT — and has already verified it against what the sender signed
    //      for as it decrypted (outputs intact, fee sane, nothing hijacked);
    //      a proposal that fails verification throws instead of resolving.
    //      Emit "proposal-received", then "proposal-checked".
    //   2. Sign the sender's inputs and finalize:
    //        tk.sender.signAndFinalize(proposalPsbt)
    //      tk.decode(finalPsbt) gives you the finished transaction for the
    //      detail lines. Emit "payjoin-signed", then "done", and return the
    //      finalized PSBT.
    //
    // Win: the finished payjoin renders, inputs coloured by owner.
    throw new NotImplemented("step-5", "verifyAndFinalize");
}
