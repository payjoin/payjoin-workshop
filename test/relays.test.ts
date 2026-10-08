// Relay failover and the failure shapes it produces, offline. The live e2e
// test exercises the same path against real relays, but only when asked to.
import { describe, expect, it } from "vitest";
import { NoRelaysLeft, RelayManager, throughRelay } from "../src/driver/relays";
import { toFailure } from "../src/driver/wasmDriver";
import { Cancelled, Toolkit, type ToolkitDeps } from "../src/workshop/toolkit";

const BROKEN_RELAY = "https://relay.invalid.payjoin-workshop.example";

describe("relay failover", () => {
    it("steps past a failing relay and keeps the survivors", async () => {
        const relays = new RelayManager(
            [BROKEN_RELAY, "https://a.example", "https://b.example"],
            () => 0,
        );
        const used: string[] = [];

        const { value, relay } = await throughRelay(
            relays,
            async (candidate) => {
                used.push(candidate);
                if (candidate === BROKEN_RELAY)
                    throw new Error("connection refused");
                return "delivered";
            },
        );

        expect(value).toBe("delivered");
        expect(relay).toBe("https://a.example");
        expect(used).toEqual([BROKEN_RELAY, "https://a.example"]);
        expect(relays.failedRelays()).toEqual([BROKEN_RELAY]);
        expect(relays.remaining()).toEqual([
            "https://a.example",
            "https://b.example",
        ]);
    });

    it("gives up once every relay has failed", async () => {
        const relays = new RelayManager(
            [BROKEN_RELAY, "https://a.example"],
            () => 0,
        );
        await expect(
            throughRelay(relays, async () => {
                throw new Error("connection refused");
            }),
        ).rejects.toBeInstanceOf(NoRelaysLeft);
    });

    it("names the failed relays in the network failure", () => {
        const failure = toFailure(
            new NoRelaysLeft([BROKEN_RELAY, "https://a.example"]),
        );
        expect(failure).toMatchObject({
            ok: false,
            kind: "network",
            relay: `${BROKEN_RELAY}, https://a.example`,
        });
    });
});

describe("cancellation", () => {
    it("stops a session cancelled while its OHTTP keys were in flight", async () => {
        let cancelled = false;
        const tk = new Toolkit({
            directory: "https://directory.example",
            fetchImpl: async () => {
                cancelled = true;
                return new Response(new Uint8Array([0]));
            },
            isCancelled: () => cancelled,
        } as unknown as ToolkitDeps);

        await expect(tk.ohttpKeys()).rejects.toBeInstanceOf(Cancelled);
    });
});
