// Everything the workshop steps lean on, prewritten. The steps in steps.ts
// make the payjoin calls; this file carries the plumbing around them: relay
// failover, directory polling, persistence, input wrapping. A production
// wallet owns equivalents of all of it, but none of it is the payjoin
// integration surface, which is why the workshop does not ask you to type it.

import * as demo from "../../vendor/payjoin-demo/demo_wallet";
import * as pdk from "../../vendor/payjoin-demo/payjoin";
import type { Party, StepId } from "../driver/types";
import { RelayManager, postEncapsulated, throughRelay } from "../driver/relays";

/** The original PSBT is built above the rate the sender asks the receiver to
 *  hold it to, so the receiver's fee contribution stays inside the sender's
 *  `check_fees` bound. */
export const ORIGINAL_FEE_RATE_SAT_PER_VB = 2n;
/** sat/kwu, which is what `buildRecommended` takes. 250 sat/kwu is 1 sat/vB. */
export const SENDER_MIN_FEE_RATE_SAT_PER_KWU = 250n;
export const RECEIVER_MIN_FEE_RATE_SAT_PER_VB = 1n;
export const RECEIVER_MAX_FEE_RATE_SAT_PER_VB = 10n;

/** The directory server long-polls, holding a request open until a message
 *  arrives or ~30s pass. It does the waiting, so these only cover the case
 *  where the other side is slower than one long-poll. */
const POLL_ATTEMPTS = 4;
const POLL_INTERVAL_MS = 250;

export class Cancelled extends Error {
    constructor() {
        super("the demo was cancelled");
        this.name = "Cancelled";
    }
}

/** A protocol-level failure: PDK rejected something, or the wallet could not
 *  satisfy it. Distinct from a relay failure so the page can say which. */
export class ProtocolError extends Error {
    constructor(
        message: string,
        readonly cause?: unknown,
    ) {
        super(message);
        this.name = "ProtocolError";
    }
}

/** Session persistence, in memory. A real wallet writes these events to disk
 *  so a session survives a restart; the demo only needs them to satisfy the
 *  API's persistence seam. */
export class MemoryPersister {
    private readonly events: string[] = [];
    save(event: string): void {
        this.events.push(event);
    }
    load(): string[] {
        return this.events;
    }
    close(): void {}
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function host(url: string): string {
    try {
        return new URL(url).host;
    } catch {
        return url;
    }
}

/** uniffi hands `Vec<u8>` across as an ArrayBuffer already; this only narrows
 *  the type when a runtime happens to give a view instead. */
export function toArrayBuffer(bytes: ArrayBuffer | Uint8Array): ArrayBuffer {
    return bytes instanceof Uint8Array
        ? (bytes.buffer.slice(
              bytes.byteOffset,
              bytes.byteOffset + bytes.byteLength,
          ) as ArrayBuffer)
        : bytes;
}

export interface ToolkitDeps {
    onStep: (event: {
        role: Party;
        id: StepId;
        label: string;
        detail?: string;
        at: number;
    }) => void;
    wallets: demo.DemoWalletsLike;
    receiver: demo.DemoWalletLike;
    sender: demo.DemoWalletLike;
    directory: string;
    relays: RelayManager;
    fetchImpl: typeof fetch;
    isCancelled: () => boolean;
}

/**
 * What a step function gets to work with. `receiver` and `sender` are the two
 * fixture wallets; everything else is transport and bookkeeping.
 */
export class Toolkit {
    readonly receiverPersister = new MemoryPersister();
    readonly senderPersister = new MemoryPersister();

    constructor(private readonly deps: ToolkitDeps) {}

    /** The directory server this session lives at. */
    get directory(): string {
        return this.deps.directory;
    }

    /** The receiver's fixture wallet. */
    get receiver(): demo.DemoWalletLike {
        return this.deps.receiver;
    }

    /** The sender's fixture wallet. */
    get sender(): demo.DemoWalletLike {
        return this.deps.sender;
    }

    /** Report a protocol step. The page renders exactly what you emit, in the
     *  order you emit it — this is the trace lighting up. */
    emit(role: Party, id: StepId, label: string, detail?: string): void {
        this.deps.onStep({ role, id, label, detail, at: Date.now() });
    }

    /** Shorten a URL to its host for a trace detail line. */
    host(url: string): string {
        return host(url);
    }

    /** Decode a finalized PSBT into the rendered transaction, with each input
     *  and output attributed to the wallet that owns it. */
    decode(psbtBase64: string): demo.DecodedTx {
        return this.deps.wallets.extractTx(psbtBase64);
    }

    /** The directory server's OHTTP keys, fetched and decoded. Fetched from
     *  the directory itself: it serves /ohttp-keys with CORS open, and the
     *  relay only ever carries encapsulated requests. */
    async ohttpKeys(): Promise<pdk.OhttpKeysLike> {
        const url = `${this.deps.directory.replace(/\/$/, "")}/ohttp-keys`;
        const response = await this.deps.fetchImpl(url);
        // The fetch can outlast a Stop press. Catch it here, or the session
        // goes on to issue a URI nobody will act on.
        this.checkCancelled();
        if (!response.ok) {
            throw new Error(
                `directory server ${host(url)} answered ${response.status} for its ohttp keys`,
            );
        }
        return pdk.OhttpKeys.decode(await response.arrayBuffer());
    }

    /** Run one encapsulated exchange against an OHTTP relay, failing over to
     *  the next relay until one answers. `attempt` receives the relay to
     *  encapsulate for; a retry builds a fresh request rather than resending
     *  old bytes, because an OHTTP request is bound to its relay. */
    async throughRelay<T>(
        attempt: (relay: string) => Promise<T>,
    ): Promise<{ value: T; relay: string }> {
        this.checkCancelled();
        return throughRelay(this.deps.relays, attempt);
    }

    /** POST an encapsulated OHTTP request body; resolves to the response bytes. */
    post(request: {
        url: string;
        contentType: string;
        body: ArrayBuffer;
    }): Promise<ArrayBuffer> {
        return postEncapsulated(request, this.deps.fetchImpl);
    }

    /** Poll the directory server until the sender's original PSBT arrives.
     *  Resolves to null when it never does. */
    async pollForOriginal(
        session: pdk.InitializedLike,
    ): Promise<pdk.UncheckedOriginalPayloadLike | null> {
        for (let attempt = 0; attempt < POLL_ATTEMPTS; attempt++) {
            this.checkCancelled();
            const polled = await this.throughRelay(async (relay) => {
                const request = session.createPollRequest(relay);
                const body = await this.post(request.request);
                return { body, clientResponse: request.clientResponse };
            });
            const outcome = session
                .processResponse(polled.value.body, polled.value.clientResponse)
                .save(this.receiverPersister);

            if (outcome instanceof pdk.InitializedTransitionOutcome.Progress) {
                return outcome.inner
                    .inner as pdk.UncheckedOriginalPayloadLike;
            }
            if (!(outcome instanceof pdk.InitializedTransitionOutcome.Stasis)) {
                throw new ProtocolError(
                    "unrecognized receiver transition outcome",
                );
            }
            if (attempt + 1 < POLL_ATTEMPTS) await sleep(POLL_INTERVAL_MS);
        }
        return null;
    }

    /** Poll the directory server until the receiver's proposal arrives.
     *  `processResponse` runs every sender check as it decrypts: the receiver
     *  did not touch the sender's inputs, the fee did not fall, and the
     *  contribution stayed inside what was offered. A proposal that fails any
     *  of them throws instead of resolving. */
    async pollForProposal(sendCtx: pdk.PollingForProposalLike): Promise<string> {
        for (let attempt = 0; attempt < POLL_ATTEMPTS; attempt++) {
            this.checkCancelled();
            const polled = await this.throughRelay(async (relay) => {
                const request = sendCtx.createPollRequest(relay);
                const body = await this.post(request.request);
                return { body, ohttpCtx: request.ohttpCtx };
            });
            const outcome = sendCtx
                .processResponse(polled.value.body, polled.value.ohttpCtx)
                .save(this.senderPersister);

            if (
                outcome instanceof
                pdk.PollingForProposalTransitionOutcome.Progress
            ) {
                return outcome.inner.psbtBase64;
            }
            if (attempt + 1 < POLL_ATTEMPTS) await sleep(POLL_INTERVAL_MS);
        }
        throw new ProtocolError(
            "the directory server never delivered the proposal to the sender",
        );
    }

    /** Wrap one of the receiver's coins as a contribution candidate. */
    toInputPair(utxo: demo.Utxo): pdk.InputPairLike {
        const txin = pdk.TxIn.create({
            previousOutput: pdk.OutPoint.create({
                txid: utxo.txid,
                vout: utxo.vout,
            }),
            scriptSig: new Uint8Array([]).buffer,
            // Overwritten with the original's sequence when the input is
            // contributed; a payjoin must not mix sequence numbers.
            sequence: 0,
            witness: [],
        });
        const psbtIn = pdk.PsbtInput.create({
            witnessUtxo: pdk.TxOut.create({
                valueSat: utxo.valueSat,
                scriptPubkey: toArrayBuffer(utxo.scriptPubkey),
            }),
            redeemScript: undefined,
            witnessScript: undefined,
        });
        return new pdk.InputPair(txin, psbtIn, undefined);
    }

    /** Whether the receiver's wallet owns this outpoint, for the receiver's
     *  own-inputs check. */
    receiverOwnsOutpoint(outpoint: pdk.OutPoint): boolean {
        return this.deps.receiver
            .listUnspent()
            .some(
                (utxo) =>
                    utxo.txid === outpoint.txid && utxo.vout === outpoint.vout,
            );
    }

    /** Throws once the visitor has pressed Stop. The polling helpers call it
     *  between hops; a step only needs it inside a long loop of its own. */
    checkCancelled(): void {
        if (this.deps.isCancelled()) throw new Cancelled();
    }
}
