import { useCallback, useEffect, useRef, useState } from "react";
import type {
    DemoDriver,
    DemoFailure,
    DemoResult,
    DemoSession,
    Party,
    StepEvent,
} from "../driver/types";
import { driverFactory } from "../driver/driver";
import { WalletPane } from "./WalletPane";
import { TxComparison } from "./TxView";
import { FailureView } from "./FailureView";
import { UriQr } from "./UriQr";
import { Button, RegtestBadge } from "./ui";
import { btc } from "./format";
import styles from "./styles.module.css";

/**
 * The visitor drives this. The receiver sets an amount and issues a BIP 21
 * URI, the URI is handed across, and the sender sends the transfer. Everything
 * protocol-shaped happens behind `DemoDriver`; this file knows about panes,
 * buttons and order of events, and nothing about relays, wasm or PSBTs.
 */

type Phase =
    | "idle"
    | "loading"
    | "ready"
    | "issuing"
    | "issued"
    | "handed"
    | "sending"
    | "done"
    | "failed";

const FAILURE_KINDS: DemoFailure["kind"][] = [
    "wasm-load",
    "network",
    "protocol",
    "cancelled",
];

/**
 * `?fail=network` and friends force a degraded state. It is how the failure
 * views get built and looked at without waiting for a relay to have a bad day.
 */
const forcedFailure = (): DemoFailure["kind"] | undefined => {
    const asked = new URLSearchParams(window.location.search).get("fail");
    return FAILURE_KINDS.find((kind) => kind === asked);
};

const parseBtc = (text: string): number | null => {
    if (!/^\d*\.?\d{0,8}$/.test(text.trim()) || text.trim() === "") return null;
    return Math.round(Number(text) * 1e8);
};

export default function PayjoinDemo() {
    const [phase, setPhase] = useState<Phase>("idle");
    const [driver, setDriver] = useState<DemoDriver | null>(null);
    const [events, setEvents] = useState<StepEvent[]>([]);
    const [startedAt, setStartedAt] = useState<number | null>(null);
    const [uri, setUri] = useState<string | null>(null);
    const [result, setResult] = useState<Extract<
        DemoResult,
        { ok: true }
    > | null>(null);
    const [failure, setFailure] = useState<DemoFailure | null>(null);
    const [amountText, setAmountText] = useState("");
    const [working, setWorking] = useState<Party | null>(null);
    const [copied, setCopied] = useState(false);

    const session = useRef<DemoSession | null>(null);
    const cancelledByVisitor = useRef(false);

    useEffect(() => () => session.current?.cancel(), []);

    const bounds = driver?.amountBounds();
    const amountSat = parseBtc(amountText);
    const amountOk =
        bounds !== undefined &&
        amountSat !== null &&
        amountSat >= bounds.minSat &&
        amountSat <= bounds.maxSat;

    const load = useCallback(async () => {
        setPhase("loading");
        setFailure(null);
        try {
            const loaded = await driverFactory({
                mock: __DEMO_MOCK__,
                forceFailure: forcedFailure(),
            })();
            setDriver(loaded);
            setAmountText(btc(loaded.amountBounds().defaultSat));
            setPhase("ready");
        } catch (e) {
            setFailure({ kind: "wasm-load", message: String(e) });
            setPhase("failed");
        }
    }, []);

    const requestTransfer = useCallback(async () => {
        if (!driver || amountSat === null) return;
        cancelledByVisitor.current = false;
        setEvents([]);
        setStartedAt(Date.now());
        setWorking("receiver");
        setPhase("issuing");

        const created = driver.createSession((e) => {
            setEvents((prior) => [...prior, e]);
            setWorking(e.role);
        });
        session.current = created;

        try {
            setUri(await created.issueUri(amountSat));
            setWorking(null);
            setPhase("issued");
        } catch (e) {
            setFailure(
                cancelledByVisitor.current
                    ? {
                          kind: "cancelled",
                          message:
                              "session cancelled before the URI went out",
                      }
                    : { kind: "protocol", message: String(e) },
            );
            setPhase("failed");
        }
    }, [driver, amountSat]);

    const send = useCallback(async () => {
        if (!session.current || uri === null) return;
        setWorking("sender");
        setPhase("sending");

        const outcome = await session.current.send(uri);
        setWorking(null);
        if (!outcome.ok) {
            setFailure(outcome);
            setPhase("failed");
        } else {
            setResult(outcome);
            setPhase("done");
        }
    }, [uri]);

    const stop = useCallback(() => {
        cancelledByVisitor.current = true;
        session.current?.cancel();
    }, []);

    const copyUri = useCallback(async () => {
        if (uri === null) return;
        try {
            await navigator.clipboard.writeText(uri);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // The URI stays visible and selectable either way.
        }
    }, [uri]);

    const reset = useCallback(() => {
        session.current?.cancel();
        session.current = null;
        setEvents([]);
        setStartedAt(null);
        setUri(null);
        setResult(null);
        setFailure(null);
        setWorking(null);
        setPhase(driver ? "ready" : "idle");
    }, [driver]);

    if (phase === "idle" || phase === "loading") {
        return (
            <section
                className={`${styles.panel} p-6 sm:p-8 flex flex-col gap-4 items-start text-left`}
            >
                <h2 className="text-2xl m-0">Two wallets, one transfer</h2>
                <p className="m-0 text-white/70 max-w-2xl">
                    You set an amount as the receiver, hand the BIP 21 URI
                    across, and send the transfer as the sender. Each side shows
                    what it is doing while it does it, and at the end you read
                    the transaction they built together.
                </p>
                <RegtestBadge />
                <Button onClick={load} disabled={phase === "loading"}>
                    {phase === "loading"
                        ? "Loading the payjoin engine…"
                        : "Run a payjoin"}
                </Button>
            </section>
        );
    }

    // The only way past loading without a driver is a driver that refused to load.
    if (!driver) {
        return (
            <FailureView
                failure={
                    failure ?? {
                        kind: "wasm-load",
                        message: "the payjoin engine did not load",
                    }
                }
                onRetry={load}
            />
        );
    }

    const wallets = driver.wallets();
    const receiverEvents = events.filter((e) => e.role === "receiver");
    const senderEvents = events.filter((e) => e.role === "sender");

    return (
        <div className="flex flex-col gap-6">
            <p className="m-0 text-xs text-white/45">
                {__DEMO_MOCK__ || forcedFailure() !== undefined
                    ? "offline simulation — the mock driver walks the protocol; nothing touches the network"
                    : "live — this session runs over the payjo.in directory server through public OHTTP relays"}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem_minmax(0,1fr)] gap-4 items-start">
                <WalletPane
                    wallet={wallets.receiver}
                    title="Receiver"
                    active={working === "receiver"}
                    events={receiverEvents}
                    start={startedAt}
                >
                    {phase === "ready" && bounds && (
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-sm text-white/60"
                                htmlFor="payjoin-demo-amount"
                            >
                                Ask for
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    id="payjoin-demo-amount"
                                    inputMode="decimal"
                                    className={`${styles.inset} ${styles.mono} border border-solid border-white/15 text-white px-3 py-2 w-40`}
                                    value={amountText}
                                    onChange={(e) =>
                                        setAmountText(e.target.value)
                                    }
                                />
                                <span className="text-white/60">BTC</span>
                            </div>
                            {!amountOk && (
                                <p className="m-0 text-xs text-white/50">
                                    Between {btc(bounds.minSat)} and{" "}
                                    {btc(bounds.maxSat)} BTC, which is what the
                                    sender's wallet can actually cover.
                                </p>
                            )}
                            <Button
                                onClick={requestTransfer}
                                disabled={!amountOk}
                            >
                                Request a transfer
                            </Button>
                        </div>
                    )}
                </WalletPane>

                <div className="flex flex-col gap-3">
                    {uri === null ? (
                        <div
                            className={`${styles.seam} p-4 text-left text-sm text-white/50`}
                        >
                            The receiver's BIP 21 URI turns up here, and the
                            sender takes it from here. This hand-off is the only
                            thing the two wallets share before the transfer
                            starts.
                        </div>
                    ) : (
                        <div
                            className={`${styles.panel} p-4 flex flex-col gap-3 text-left`}
                        >
                            <h4 className="text-xs uppercase tracking-wider text-white/40 m-0">
                                Transfer request
                            </h4>
                            <UriQr uri={uri} />
                            <p
                                className={`${styles.mono} ${styles.inset} m-0 p-3 text-white/60 max-h-40 overflow-y-auto`}
                            >
                                {uri}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {phase === "issued" ? (
                                    <Button onClick={() => setPhase("handed")}>
                                        Hand to the sender
                                    </Button>
                                ) : (
                                    <p className="m-0 text-sm text-white/45 self-center">
                                        Handed to the sender.
                                    </p>
                                )}
                                <Button onClick={copyUri} variant="secondary">
                                    {copied ? "Copied" : "Copy URI"}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                <WalletPane
                    wallet={wallets.sender}
                    title="Sender"
                    active={working === "sender"}
                    events={senderEvents}
                    start={startedAt}
                >
                    {phase === "handed" && (
                        <Button onClick={send}>Send the transfer</Button>
                    )}
                    {phase === "sending" && (
                        <Button onClick={stop} variant="secondary">
                            Stop
                        </Button>
                    )}
                </WalletPane>
            </div>

            {phase === "done" && result && (
                <TxComparison
                    original={result.original}
                    payjoin={result.payjoin}
                />
            )}

            {phase === "failed" && failure && (
                <FailureView failure={failure} onRetry={reset} />
            )}

            {phase === "done" && (
                <div className="flex justify-center">
                    <Button onClick={reset} variant="secondary">
                        Run another one
                    </Button>
                </div>
            )}
        </div>
    );
}
