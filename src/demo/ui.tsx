import type { Party } from "../driver/types";
import styles from "./styles.module.css";

export function PartyChip({ party }: { party: Party }) {
    return <span className={`${styles[party]} ${styles.chip}`}>{party}</span>;
}

/** Required on every pane: the amounts are large and the addresses are not mainnet. */
export function RegtestBadge() {
    return (
        <span className="text-[0.7rem] leading-tight rounded-full border border-solid border-white/25 px-2 py-0.5 text-white/70 whitespace-nowrap">
            regtest — simulated wallets, nothing is broadcast
        </span>
    );
}

export function Button({
    children,
    onClick,
    variant = "primary",
    disabled,
}: {
    children: React.ReactNode;
    onClick: () => void;
    variant?: "primary" | "secondary";
    disabled?: boolean;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`px-5 py-2 rounded-lg text-base font-medium transition-colors border border-solid ${
                variant === "primary"
                    ? "bg-primary border-primary text-white hover:bg-pink-500"
                    : "bg-transparent border-white/30 text-white hover:border-white/60"
            } ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
        >
            {children}
        </button>
    );
}
