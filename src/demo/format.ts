/** Display helpers. Sats are the unit everywhere else; BTC exists only on screen. */

export const btc = (sat: number): string => (sat / 1e8).toFixed(8);

export const sats = (sat: number): string => sat.toLocaleString("en-US");

/** Long identifiers, shortened but still recognisable at both ends. */
export const short = (s: string, head = 8, tail = 6): string =>
    s.length <= head + tail + 1 ? s : `${s.slice(0, head)}…${s.slice(-tail)}`;

export const outpoint = (txid: string, vout: number): string =>
    `${short(txid, 8, 4)}:${vout}`;

export const elapsed = (at: number, start: number): string => {
    const seconds = Math.max(0, at - start) / 1000;
    return `+${seconds.toFixed(1)}s`;
};
