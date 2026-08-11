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
export const driverFactory = (
    forceFailure?: DemoFailure["kind"],
): CreateDriver => {
    return () =>
        import("./mockDriver").then((m) =>
            m.createMockDriver({ failure: forceFailure }),
        );
};
