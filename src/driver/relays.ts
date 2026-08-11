// Relay selection with failover, the same policy payjoin-cli ships: pick at
// random from the relays that have not failed, and exclude a relay for the
// rest of the session once it does.
//
// The OHTTP key fetch does not go through a relay here. payjo.in serves
// /ohttp-keys with `access-control-allow-origin: *`, and a browser has no way
// to CONNECT through a proxy the way a native client does, so the demo fetches
// keys straight from the directory server and the relay only ever carries
// encapsulated requests. Those are what this retries.

/** The public OHTTP relays payjoin-cli ships in example.config.toml. */
export const DEFAULT_RELAYS = [
    "https://pj.benalleng.com",
    "https://pj.bobspacebkk.com",
    "https://payjoin.achow101.com",
];

export const DEFAULT_DIRECTORY = "https://payjo.in";

export class NoRelaysLeft extends Error {
    constructor(readonly failed: string[]) {
        super(
            `every relay failed: ${failed.join(", ")}. The demo cannot reach the directory server.`,
        );
        this.name = "NoRelaysLeft";
    }
}

export class RelayError extends Error {
    constructor(
        readonly relay: string,
        message: string,
    ) {
        super(message);
        this.name = "RelayError";
    }
}

export interface RelayAttempt {
    relay: string;
    error: Error;
}

export class RelayManager {
    private readonly failed = new Set<string>();
    readonly attempts: RelayAttempt[] = [];

    constructor(
        private readonly relays: readonly string[] = DEFAULT_RELAYS,
        private readonly pick: (n: number) => number = (n) =>
            Math.floor(Math.random() * n),
    ) {
        if (relays.length === 0) {
            throw new Error("RelayManager needs at least one relay");
        }
    }

    /** Relays not yet known to be broken, in configured order. */
    remaining(): string[] {
        return this.relays.filter((relay) => !this.failed.has(relay));
    }

    choose(): string {
        const remaining = this.remaining();
        if (remaining.length === 0) {
            throw new NoRelaysLeft([...this.failed]);
        }
        return remaining[this.pick(remaining.length)];
    }

    markFailed(relay: string, error: Error): void {
        this.failed.add(relay);
        this.attempts.push({ relay, error });
    }

    failedRelays(): string[] {
        return [...this.failed];
    }
}

/**
 * Runs `attempt` against a relay, moving to another one on failure until the
 * relays run out.
 *
 * `attempt` takes the relay rather than closing over one because an OHTTP
 * request is bound to the relay it was encapsulated for. Retrying means
 * building a fresh request and a fresh OHTTP context, not resending the old
 * bytes somewhere else.
 */
export async function throughRelay<T>(
    relays: RelayManager,
    attempt: (relay: string) => Promise<T>,
): Promise<{ value: T; relay: string }> {
    for (;;) {
        const relay = relays.choose();
        try {
            return { value: await attempt(relay), relay };
        } catch (error) {
            if (error instanceof NoRelaysLeft) throw error;
            relays.markFailed(
                relay,
                error instanceof Error ? error : new Error(String(error)),
            );
        }
    }
}

/** POSTs an encapsulated OHTTP body and returns the raw response bytes. */
export async function postEncapsulated(
    request: { url: string; contentType: string; body: ArrayBuffer },
    fetchImpl: typeof fetch,
): Promise<ArrayBuffer> {
    const response = await fetchImpl(request.url, {
        method: "POST",
        headers: { "Content-Type": request.contentType },
        body: request.body,
    });
    if (!response.ok) {
        throw new RelayError(
            new URL(request.url).host,
            `relay answered ${response.status} ${response.statusText}`,
        );
    }
    return response.arrayBuffer();
}
