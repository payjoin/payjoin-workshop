// The live driver: real BIP 77 over the public directory server and OHTTP
// relays, with the fixture wallet standing in for a node. Both roles run here,
// in one browser tab, which is what the two-pane page shows. Everything the
// protocol touches is unmodified PDK; only the wallet is simulated, and
// nothing is broadcast.
//
// The protocol calls themselves live in src/workshop/steps.ts — they are the
// workshop. This file is the frame around them: it owns the session state
// machine, hands each step its toolkit, and turns anything a step throws into
// the failure shape the page renders.

import * as demo from "../../vendor/payjoin-demo/demo_wallet";
import * as steps from "../workshop/steps";
import {
    Cancelled,
    ProtocolError,
    Toolkit,
} from "../workshop/toolkit";
import { DEFAULT_DIRECTORY, DEFAULT_RELAYS, NoRelaysLeft, RelayManager } from "./relays";
import { initWasm } from "./wasmInit";
import type {
    DecodedTx,
    DemoDriver,
    DemoResult,
    DemoSession,
    Party,
    StepEvent,
    WalletView,
} from "./types";

export interface LiveDriverOptions {
    /** Instantiates the wasm module. Supplied by tests, which read bytes off
     *  disk where the browser fetches a URL. */
    initWasm?: () => Promise<void>;
    directory?: string;
    relays?: readonly string[];
    /** Which of the remaining relays to try next. Random in production; a test
     *  pins it so a deliberately broken relay is guaranteed to be reached. */
    relayPick?: (remaining: number) => number;
    fetchImpl?: typeof fetch;
    /** Fixture JSON. Defaults to the wallet compiled into the wasm. */
    fixtures?: string;
}

const toNumber = (value: bigint): number => Number(value);

const toParty = (party: demo.Party): Party =>
    party === demo.Party.Receiver ? "receiver" : "sender";

function toDecodedTx(tx: demo.DecodedTx): DecodedTx {
    return {
        txid: tx.txid,
        hex: tx.hex,
        vsize: toNumber(tx.vsize),
        weight: toNumber(tx.weight),
        feeSat: toNumber(tx.feeSat),
        feeRateSatPerVb: tx.feeRateSatPerVb,
        inputs: tx.inputs.map((input) => ({
            txid: input.txid,
            vout: input.vout,
            valueSat: toNumber(input.valueSat),
            address: input.address,
            party: toParty(input.party),
        })),
        outputs: tx.outputs.map((output) => ({
            valueSat: toNumber(output.valueSat),
            address: output.address,
            party: toParty(output.party),
            isChange: output.isChange,
        })),
    };
}

function toWalletView(wallet: demo.DemoWalletLike, party: Party): WalletView {
    return {
        party,
        address: wallet.address(),
        balanceSat: toNumber(wallet.balanceSat()),
        utxos: wallet.listUnspent().map((utxo) => ({
            txid: utxo.txid,
            vout: utxo.vout,
            valueSat: toNumber(utxo.valueSat),
        })),
    };
}

export async function createLiveDriver(
    options: LiveDriverOptions = {},
): Promise<DemoDriver> {
    await (options.initWasm ?? initWasm)();

    const wallets = options.fixtures
        ? demo.DemoWallets.fromJson(options.fixtures)
        : demo.DemoWallets.embedded();
    const receiver = wallets.receiver();
    const sender = wallets.sender();

    const directory = options.directory ?? DEFAULT_DIRECTORY;
    const relayList = options.relays ?? DEFAULT_RELAYS;
    // Bound, because a browser's fetch throws "Illegal invocation" when it is
    // called detached from its global. Node does not care, so only a browser
    // run catches the unbound version.
    const fetchImpl = options.fetchImpl ?? fetch.bind(globalThis);

    return {
        wallets: () => ({
            receiver: toWalletView(receiver, "receiver"),
            sender: toWalletView(sender, "sender"),
        }),
        amountBounds: () => {
            const bounds = wallets.amountBounds();
            return {
                minSat: toNumber(bounds.minSat),
                maxSat: toNumber(bounds.maxSat),
                defaultSat: toNumber(bounds.defaultSat),
            };
        },
        createSession: (onStep) => {
            const flag = { cancelled: false };
            const toolkit = new Toolkit({
                onStep: (e) => onStep(e as StepEvent),
                wallets,
                receiver,
                sender,
                directory,
                relays: new RelayManager(relayList, options.relayPick),
                fetchImpl,
                isCancelled: () => flag.cancelled,
            });
            return new LiveSession(toolkit, flag);
        },
    };
}

class LiveSession implements DemoSession {
    private receiverSession?: steps.ReceiverSession;

    constructor(
        private readonly toolkit: Toolkit,
        private readonly flag: { cancelled: boolean },
    ) {}

    cancel(): void {
        this.flag.cancelled = true;
    }

    /** Rejects rather than resolving to a failure: `issueUri` returns a URI,
     *  so the contract gives it no channel for `ok: false`. Callers of `send`
     *  get the richer treatment. */
    async issueUri(amountSat: number): Promise<string> {
        this.throwIfCancelled();
        const opened = await steps.openReceiverSession(this.toolkit, amountSat);
        this.receiverSession = opened;
        return opened.uri;
    }

    async send(uri: string): Promise<DemoResult> {
        try {
            return await this.run(uri);
        } catch (error) {
            return this.toFailure(error);
        }
    }

    private async run(uri: string): Promise<DemoResult> {
        this.throwIfCancelled();
        const opened = this.receiverSession;
        if (!opened) {
            throw new ProtocolError("send() was called before issueUri()");
        }

        const tk = this.toolkit;
        const sent = await steps.sendOriginal(tk, uri);
        const original = toDecodedTx(tk.decode(sent.originalPsbt));
        this.throwIfCancelled();

        const wantsOutputs = await steps.receiveAndCheck(tk, opened.session);
        this.throwIfCancelled();

        await steps.contributeAndPropose(tk, wantsOutputs);
        this.throwIfCancelled();

        const finalPsbt = await steps.verifyAndFinalize(tk, sent.sendCtx);
        const payjoin = toDecodedTx(tk.decode(finalPsbt));

        return { ok: true, original, payjoin };
    }

    private throwIfCancelled(): void {
        if (this.flag.cancelled) throw new Cancelled();
    }

    private toFailure(error: unknown): DemoResult {
        const message = error instanceof Error ? error.message : String(error);
        if (error instanceof Cancelled) {
            return { ok: false, kind: "cancelled", message };
        }
        if (error instanceof NoRelaysLeft) {
            return { ok: false, kind: "network", message };
        }
        if (
            error instanceof ProtocolError ||
            error instanceof steps.NotImplemented
        ) {
            return { ok: false, kind: "protocol", message };
        }
        // Anything PDK threw. The page shows it verbatim; the driver does not
        // classify errors it did not raise.
        return { ok: false, kind: "protocol", message };
    }
}
