import type { StepEvent, WalletView } from "../driver/types";
import { StepTrace } from "./StepTrace";
import { PartyChip, RegtestBadge } from "./ui";
import { btc, outpoint, short } from "./format";
import styles from "./styles.module.css";

export function WalletPane({
    wallet,
    title,
    active,
    events,
    start,
    children,
}: {
    wallet: WalletView;
    title: string;
    /** Whose turn it is: colours the pane border and marks the trace as still running. */
    active: boolean;
    events: StepEvent[];
    start: number | null;
    children?: React.ReactNode;
}) {
    return (
        <section
            className={`${styles.panel} ${styles[wallet.party]} ${active ? styles.active : ""} p-4 sm:p-5 flex flex-col gap-4 text-left`}
        >
            <header className="flex flex-col gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                    <PartyChip party={wallet.party} />
                    <h3 className="text-lg">{title}</h3>
                </div>
                <RegtestBadge />
            </header>

            <div className={`${styles.inset} p-3 flex flex-col gap-1`}>
                <div className="flex items-baseline justify-between gap-3">
                    <span className="text-white/55 text-sm">Balance</span>
                    <span className="tabular-nums">
                        {btc(wallet.balanceSat)} BTC
                    </span>
                </div>
                <div
                    className={`${styles.mono} text-white/55`}
                    title={wallet.address}
                >
                    {short(wallet.address, 12, 8)}
                </div>
                <ul className="list-none p-0 m-0 mt-1 flex flex-col gap-1">
                    {wallet.utxos.map((u) => (
                        <li
                            key={`${u.txid}:${u.vout}`}
                            className={`${styles.mono} flex justify-between gap-3 text-white/45`}
                        >
                            <span>{outpoint(u.txid, u.vout)}</span>
                            <span className="tabular-nums">
                                {btc(u.valueSat)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {children && <div className="flex flex-col gap-3">{children}</div>}

            <div className="flex flex-col gap-2">
                <h4 className="text-xs uppercase tracking-wider text-white/40">
                    Protocol steps
                </h4>
                <StepTrace events={events} start={start} pending={active} />
            </div>
        </section>
    );
}
