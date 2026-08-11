import type {
    DecodedTx,
    DecodedTxIn,
    DecodedTxOut,
    DemoDriver,
    DemoFailure,
    DemoResult,
    DemoSession,
    StepEvent,
    StepId,
} from "./types";
import type { FixtureUtxo } from "./fixtures";
import {
    FEE_RATE_SAT_PER_VB,
    RECEIVER_ADDRESS,
    SENDER_CHANGE_ADDRESS,
    amountBounds,
    feeOf,
    selectReceiverContribution,
    selectSenderInputs,
    serializedSizeOf,
    vsizeOf,
    wallets,
    weightOf,
} from "./fixtures";

/**
 * A driver that walks the same steps in the same order as a real BIP 77
 * session and returns transactions whose arithmetic holds, without a wasm
 * module or a relay. It is what `npm run dev -- --mock` runs, so the workshop
 * survives a room with no network. It is honest about shape and dishonest
 * about only two things, both deliberate: the signatures were never computed,
 * so `hex` is filler of the right length rather than a serialized transaction,
 * and the delays are hand-written rather than measured.
 */

const DIRECTORY = "payjo.in";
const RELAY = "pj.benalleng.com";

export interface MockDriverOptions {
    /** Force a failure kind, so every degraded state can be reached on demand. */
    failure?: DemoFailure["kind"];
    /** Multiplies every delay. Leave it alone unless a test cannot afford real latency. */
    speed?: number;
}

class Cancelled extends Error {}

const btcAmount = (sat: number) =>
    (sat / 1e8)
        .toFixed(8)
        .replace(/0+$/, "")
        .replace(/\.$/, "");
const btc = (sat: number) => (sat / 1e8).toFixed(8);

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
const token = (n: number) =>
    Array.from(
        { length: n },
        () => UPPER[Math.floor(Math.random() * UPPER.length)],
    ).join("");

const HEX = "0123456789abcdef";
const filler = (bytes: number) =>
    Array.from(
        { length: bytes * 2 },
        () => HEX[Math.floor(Math.random() * 16)],
    ).join("");

/** Fixed txids: the mock never computes one, and a stable value beats a random one. */
const ORIGINAL_TXID =
    "a439a9479276f55ca03e7e599e02fefa5b40c8636f9f91ea3923bb3a360c3304";
const PAYJOIN_TXID =
    "94f1b5cef174613d37c24958a045933be5448b59b6390b5bf8f6cf31c1f957fc";

const decoded = (
    txid: string,
    inputs: DecodedTxIn[],
    outputs: DecodedTxOut[],
    feeSat: number,
): DecodedTx => ({
    txid,
    hex: filler(serializedSizeOf(inputs.length, outputs.length)),
    vsize: vsizeOf(inputs.length, outputs.length),
    weight: weightOf(inputs.length, outputs.length),
    feeSat,
    feeRateSatPerVb: FEE_RATE_SAT_PER_VB,
    inputs,
    outputs,
});

const shuffled = <T,>(items: T[]): T[] => {
    const out = [...items];
    for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
};

interface Plan {
    original: DecodedTx;
    payjoin: DecodedTx;
    contributed: FixtureUtxo;
}

/**
 * Both transactions for one transfer. The sender's change is identical in
 * each: the receiver's contribution pays its own way out of the receiver's
 * output, which is the default when the sender has not offered to cover
 * additional fee.
 */
const buildPlan = (amountSat: number): Plan => {
    const senderInputs = selectSenderInputs(amountSat);
    const senderTotal = senderInputs.reduce((n, u) => n + u.valueSat, 0);
    const contributed = selectReceiverContribution();

    const originalFee = feeOf(senderInputs.length, 2);
    const payjoinFee = feeOf(senderInputs.length + 1, 2);
    const changeSat = senderTotal - amountSat - originalFee;

    const asInput = (
        u: FixtureUtxo,
        party: DecodedTxIn["party"],
    ): DecodedTxIn => ({
        txid: u.txid,
        vout: u.vout,
        valueSat: u.valueSat,
        address: u.address,
        party,
    });

    const change: DecodedTxOut = {
        valueSat: changeSat,
        address: SENDER_CHANGE_ADDRESS,
        party: "sender",
        isChange: true,
    };

    const original = decoded(
        ORIGINAL_TXID,
        senderInputs.map((u) => asInput(u, "sender")),
        [
            {
                valueSat: amountSat,
                address: RECEIVER_ADDRESS,
                party: "receiver",
                isChange: false,
            },
            change,
        ],
        originalFee,
    );

    const payjoin = decoded(
        PAYJOIN_TXID,
        shuffled([
            ...senderInputs.map((u) => asInput(u, "sender")),
            asInput(contributed, "receiver"),
        ]),
        [
            {
                valueSat: amountSat + contributed.valueSat - (payjoinFee - originalFee),
                address: RECEIVER_ADDRESS,
                party: "receiver",
                isChange: false,
            },
            change,
        ],
        payjoinFee,
    );

    return { original, payjoin, contributed };
};

export const createMockDriver = async (
    options: MockDriverOptions = {},
): Promise<DemoDriver> => {
    const speed = options.speed ?? 1;

    await new Promise((resolve) => setTimeout(resolve, 400 * speed));
    if (options.failure === "wasm-load") {
        throw new Error("failed to instantiate the payjoin module");
    }

    return {
        wallets,
        amountBounds,
        createSession(onStep: (e: StepEvent) => void): DemoSession {
            let cancelled = false;
            let interrupt: (() => void) | null = null;

            const sleep = (ms: number) =>
                new Promise<void>((resolve, reject) => {
                    if (cancelled) {
                        reject(new Cancelled());
                        return;
                    }
                    const timer = setTimeout(() => {
                        interrupt = null;
                        resolve();
                    }, ms * speed);
                    interrupt = () => {
                        clearTimeout(timer);
                        interrupt = null;
                        reject(new Cancelled());
                    };
                });

            const step = async (
                ms: number,
                role: StepEvent["role"],
                id: StepId,
                label: string,
                detail?: string,
            ) => {
                await sleep(ms);
                onStep({ role, id, label, detail, at: Date.now() });
            };

            const cancel = () => {
                cancelled = true;
                interrupt?.();
            };

            return {
                cancel,

                async issueUri(amountSat: number): Promise<string> {
                    await step(
                        700,
                        "receiver",
                        "session-init",
                        "Opening a payjoin session",
                        `directory server ${DIRECTORY}`,
                    );
                    const uri =
                        `bitcoin:${RECEIVER_ADDRESS}?amount=${btcAmount(amountSat)}` +
                        `&pj=HTTPS://PAYJO.IN/${token(13)}` +
                        `%23RK1${token(58)}+EX1${token(8)}+OH1${token(66)}&pjos=0`;
                    await step(
                        250,
                        "receiver",
                        "uri-issued",
                        "Issued a BIP 21 payjoin URI",
                        `${amountSat.toLocaleString("en-US")} sat`,
                    );
                    return uri;
                },

                async send(uri: string): Promise<DemoResult> {
                    const bounds = amountBounds();
                    const amountSat = Math.round(
                        Number(/[?&]amount=([\d.]+)/.exec(uri)?.[1] ?? 0) * 1e8,
                    );
                    if (
                        !amountSat ||
                        amountSat < bounds.minSat ||
                        amountSat > bounds.maxSat
                    ) {
                        return {
                            ok: false,
                            kind: "protocol",
                            message:
                                "the URI names an amount this wallet cannot send",
                        };
                    }

                    const { original, payjoin, contributed } =
                        buildPlan(amountSat);

                    try {
                        await step(
                            200,
                            "sender",
                            "uri-parsed",
                            "Read the payjoin URI",
                            `${amountSat.toLocaleString("en-US")} sat to ${RECEIVER_ADDRESS.slice(0, 12)}…`,
                        );
                        await step(
                            350,
                            "sender",
                            "original-built",
                            "Built the original PSBT",
                            `${original.inputs.length} in, ${original.outputs.length} out, ${original.feeSat} sat fee`,
                        );
                        await step(
                            300,
                            "sender",
                            "original-signed",
                            "Signed the original PSBT",
                            `${original.vsize} vB — the receiver can broadcast this one if the payjoin falls through`,
                        );
                        await step(
                            500,
                            "sender",
                            "request-sent",
                            "Sent the original PSBT to the directory server",
                            `via ${RELAY}`,
                        );

                        if (options.failure === "network") {
                            await sleep(1400);
                            return {
                                ok: false,
                                kind: "network",
                                message:
                                    "the OHTTP relay stopped responding while the request was in flight",
                                relay: RELAY,
                            };
                        }
                        if (options.failure === "cancelled") {
                            await sleep(600);
                            cancel();
                        }

                        await step(
                            1100,
                            "receiver",
                            "request-received",
                            "Received the original PSBT",
                            `via ${RELAY}`,
                        );
                        await step(
                            400,
                            "receiver",
                            "checks-passed",
                            "Checked the original PSBT",
                            "broadcastable, none of its inputs are ours, our output is there",
                        );
                        await step(
                            350,
                            "receiver",
                            "inputs-contributed",
                            "Contributed a receiver input at a random index",
                            `the receive rule picked the smallest coin: ${btc(contributed.valueSat)} BTC from ${contributed.txid.slice(0, 8)}…:${contributed.vout}`,
                        );
                        await step(
                            300,
                            "receiver",
                            "proposal-signed",
                            "Signed the receiver's own input",
                        );
                        await step(
                            450,
                            "receiver",
                            "proposal-sent",
                            "Sent the proposal back",
                            `via ${RELAY}`,
                        );

                        await step(
                            1200,
                            "sender",
                            "proposal-received",
                            "Received the proposal",
                        );

                        if (options.failure === "protocol") {
                            await sleep(400);
                            return {
                                ok: false,
                                kind: "protocol",
                                message:
                                    "the proposal moved the sender's change output, so it was rejected and the original PSBT stands",
                            };
                        }

                        await step(
                            350,
                            "sender",
                            "proposal-checked",
                            "Checked the proposal against the original PSBT",
                            "our outputs survived and the fee rose only by what the extra input costs",
                        );
                        await step(
                            400,
                            "sender",
                            "payjoin-signed",
                            "Signed the payjoin transaction",
                            `${payjoin.vsize} vB`,
                        );
                        await step(
                            200,
                            "sender",
                            "done",
                            "Payjoin complete, nothing broadcast",
                            `${payjoin.inputs.length} inputs from both sides, ${payjoin.feeSat} sat fee`,
                        );

                        return { ok: true, original, payjoin };
                    } catch (e) {
                        if (e instanceof Cancelled) {
                            return {
                                ok: false,
                                kind: "cancelled",
                                message: "session cancelled",
                            };
                        }
                        return {
                            ok: false,
                            kind: "protocol",
                            message: String(e),
                        };
                    }
                },
            };
        },
    };
};
