import type { CreateDriver, DemoFailure } from "./types";

/**
 * The one place that decides which driver the page runs. Everything above it
 * is written against `DemoDriver` alone, so the page cannot tell the mock and
 * the real engine apart — which is the property the workshop teaches: a wallet
 * integrates the driver seam, not the transport underneath it.
 *
 * `forceFailure` carries `?fail=` from the URL. A driver that talks to a real
 * relay cannot produce failures on demand, so a forced failure always resolves
 * to the mock.
 */
export interface DriverChoice {
    /** Offline mode: simulate the protocol, never touch the network. */
    mock: boolean;
    forceFailure?: DemoFailure["kind"];
    /** Live mode only: URL of a fixture-wallet JSON to load instead of the
     *  built-in regtest wallet. Carried by `?fixtures=` so a session can be
     *  issued on another test network — the loader refuses mainnet keys. */
    fixturesUrl?: string;
}

export const driverFactory = ({
    mock,
    forceFailure,
    fixturesUrl,
}: DriverChoice): CreateDriver => {
    if (mock || forceFailure !== undefined) {
        return () =>
            import("./mockDriver").then((m) =>
                m.createMockDriver({ failure: forceFailure }),
            );
    }
    return async () => {
        const fixtures = fixturesUrl
            ? await (await fetch(fixturesUrl)).text()
            : undefined;
        const { createLiveDriver } = await import("./wasmDriver");
        return createLiveDriver({ fixtures });
    };
};
