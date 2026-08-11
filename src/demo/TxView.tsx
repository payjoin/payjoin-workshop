import type { DecodedTx, DecodedTxIn, DecodedTxOut } from "../driver/types";
import { PartyChip } from "./ui";
import { btc, outpoint, sats, short } from "./format";
import styles from "./styles.module.css";

function InputRow({ input }: { input: DecodedTxIn }) {
    return (
        <li className={`${styles.inset} p-3 flex flex-col gap-1`}>
            <div className="flex items-baseline justify-between gap-x-3 gap-y-1 flex-wrap">
                <span className="tabular-nums whitespace-nowrap">
                    {btc(input.valueSat)} BTC
                </span>
                <PartyChip party={input.party} />
            </div>
            <div
                className={`${styles.mono} text-white/45`}
                title={`${input.txid}:${input.vout}`}
            >
                {outpoint(input.txid, input.vout)}
            </div>
            <div className={`${styles.mono} text-white/45`} title={input.address}>
                {short(input.address, 12, 8)}
            </div>
        </li>
    );
}

function OutputRow({ output }: { output: DecodedTxOut }) {
    return (
        <li className={`${styles.inset} p-3 flex flex-col gap-1`}>
            <div className="flex items-baseline justify-between gap-x-3 gap-y-1 flex-wrap">
                <span className="tabular-nums whitespace-nowrap">
                    {btc(output.valueSat)} BTC
                </span>
                <span className="flex items-center gap-2">
                    {output.isChange && (
                        <span className="text-[0.7rem] text-white/45">
                            change
                        </span>
                    )}
                    <PartyChip party={output.party} />
                </span>
            </div>
            <div className={`${styles.mono} text-white/45`} title={output.address}>
                {short(output.address, 12, 8)}
            </div>
        </li>
    );
}

function Facts({ tx, extraFeeSat }: { tx: DecodedTx; extraFeeSat?: number }) {
    return (
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 m-0 text-sm">
            <div>
                <dt className="text-white/40 text-xs uppercase tracking-wider">
                    Fee
                </dt>
                <dd className="m-0 tabular-nums">{sats(tx.feeSat)} sat</dd>
            </div>
            <div>
                <dt className="text-white/40 text-xs uppercase tracking-wider">
                    Fee rate
                </dt>
                <dd className="m-0 tabular-nums">
                    {tx.feeRateSatPerVb} sat/vB
                </dd>
            </div>
            <div>
                <dt className="text-white/40 text-xs uppercase tracking-wider">
                    Size
                </dt>
                <dd className="m-0 tabular-nums">{sats(tx.vsize)} vB</dd>
            </div>
            <div>
                <dt className="text-white/40 text-xs uppercase tracking-wider">
                    Weight
                </dt>
                <dd className="m-0 tabular-nums">{sats(tx.weight)} WU</dd>
            </div>
            {extraFeeSat !== undefined && (
                <div className="col-span-2 sm:col-span-4 text-white/55">
                    {sats(extraFeeSat)} sat more than the original, which is
                    what one extra input costs at this fee rate. The sender's
                    change is untouched.
                </div>
            )}
        </dl>
    );
}

function TxCard({
    tx,
    title,
    caption,
    extraFeeSat,
}: {
    tx: DecodedTx;
    title: string;
    caption: string;
    extraFeeSat?: number;
}) {
    const owners = new Set(tx.inputs.map((i) => i.party));

    return (
        <article
            className={`${styles.panel} p-4 sm:p-5 flex flex-col gap-4 text-left`}
        >
            <header className="flex flex-col gap-1">
                <h3 className="text-lg">{title}</h3>
                <p className="m-0 text-sm text-white/55">{caption}</p>
                <p className={`${styles.mono} m-0 text-white/40`} title={tx.txid}>
                    {short(tx.txid, 12, 8)}
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-3 items-start">
                <div className="flex flex-col gap-2 min-w-0">
                    <h4 className="text-xs uppercase tracking-wider text-white/40">
                        {tx.inputs.length}{" "}
                        {tx.inputs.length === 1 ? "input" : "inputs"}
                        {owners.size > 1 && `, ${owners.size} owners`}
                    </h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-2">
                        {tx.inputs.map((input) => (
                            <InputRow
                                key={`${input.txid}:${input.vout}`}
                                input={input}
                            />
                        ))}
                    </ul>
                    {owners.size > 1 && (
                        <p className="m-0 text-xs text-white/45">
                            The receiver slots its input in at a random index,
                            so the order changes every run.
                        </p>
                    )}
                </div>

                <div
                    aria-hidden="true"
                    className="text-white/30 text-xl self-center justify-self-center rotate-90 sm:rotate-0"
                >
                    →
                </div>

                <div className="flex flex-col gap-2 min-w-0">
                    <h4 className="text-xs uppercase tracking-wider text-white/40">
                        {tx.outputs.length}{" "}
                        {tx.outputs.length === 1 ? "output" : "outputs"}
                    </h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-2">
                        {tx.outputs.map((output, i) => (
                            <OutputRow
                                key={`${output.address}-${i}`}
                                output={output}
                            />
                        ))}
                    </ul>
                </div>
            </div>

            <Facts tx={tx} extraFeeSat={extraFeeSat} />

            {tx.hex && (
                <details className="text-sm">
                    <summary className="cursor-pointer text-white/55">
                        Raw transaction
                    </summary>
                    <p
                        className={`${styles.mono} ${styles.inset} p-3 mt-2 mb-0 text-white/50 max-h-40 overflow-y-auto`}
                    >
                        {tx.hex}
                    </p>
                </details>
            )}
        </article>
    );
}

/**
 * The original beside the payjoin. The original is what this transfer would
 * have looked like without payjoin, and it is here because the difference is
 * the whole argument.
 */
export function TxComparison({
    original,
    payjoin,
    heading = "The transaction that came out",
    note,
}: {
    original: DecodedTx;
    payjoin: DecodedTx;
    heading?: string;
    /** Set when these are not the transactions the visitor just built. */
    note?: string;
}) {
    return (
        <section className="flex flex-col gap-4">
            <div className="text-left flex flex-col gap-2">
                <h2 className="text-2xl m-0">{heading}</h2>
                <p className="m-0 text-white/65 max-w-3xl">
                    Two inputs, and they belong to two different people. Anyone
                    reading this transaction off the chain would assume one
                    owner spent both, and they would be wrong. That assumption
                    is what most Bitcoin surveillance is built on.
                </p>
                {note && <p className="m-0 text-sm text-white/45">{note}</p>}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
                <TxCard
                    tx={original}
                    title="Original"
                    caption="What the sender would have broadcast on their own."
                />
                <TxCard
                    tx={payjoin}
                    title="Payjoin"
                    caption="What the two wallets built together."
                    extraFeeSat={payjoin.feeSat - original.feeSat}
                />
            </div>
        </section>
    );
}
