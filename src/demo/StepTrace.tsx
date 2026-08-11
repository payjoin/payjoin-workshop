import type { StepEvent } from "../driver/types";
import { elapsed } from "./format";
import styles from "./styles.module.css";

/**
 * One side's view of the protocol. Labels and details come from the driver, so
 * a step the driver knows about but this page does not still renders as a
 * readable line.
 */
export function StepTrace({
    events,
    start,
    pending,
}: {
    events: StepEvent[];
    start: number | null;
    pending: boolean;
}) {
    if (events.length === 0 && !pending) {
        return (
            <p className="text-sm text-white/45 m-0">
                Nothing has happened on this side yet.
            </p>
        );
    }

    return (
        <ol className="list-none p-0 m-0 flex flex-col gap-2">
            {events.map((e, i) => (
                <li
                    key={`${e.id}-${i}`}
                    className="flex gap-3 items-baseline text-sm"
                >
                    <span className="text-white/35 tabular-nums shrink-0 w-12 text-right">
                        {start === null ? "" : elapsed(e.at, start)}
                    </span>
                    <span className="min-w-0">
                        <span className="text-white">{e.label}</span>
                        {e.detail && (
                            <span className="block text-white/50 text-[0.78rem] leading-snug">
                                {e.detail}
                            </span>
                        )}
                    </span>
                </li>
            ))}
            {pending && (
                <li
                    className={`flex gap-3 items-baseline text-sm ${styles.pending}`}
                >
                    <span className="text-white/35 shrink-0 w-12 text-right">
                        ···
                    </span>
                    <span className="text-white/70">working</span>
                </li>
            )}
        </ol>
    );
}
