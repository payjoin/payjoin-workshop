// A whole BIP 77 payjoin over the live payjo.in directory server and the
// public OHTTP relays, headless in Node, through the same workshop steps the
// page runs. It proves the solved checkpoints work against production
// infrastructure — so it only passes once every step is implemented, and it
// puts real traffic on relays other people run and pay for. Both are why it
// sits behind an environment flag and does one payjoin per run. Do not loop it.
//
//     PAYJOIN_LIVE_E2E=1 npm test

import { describe, expect, it } from "vitest";
import { createLiveDriver } from "../src/driver/wasmDriver";
import { DEFAULT_RELAYS } from "../src/driver/relays";
import type { StepEvent } from "../src/driver/types";
import { initWasmForTests } from "./initWasm";
import { makeFetch } from "./proxyFetch";

/** Resolves to nothing and answers nothing. First in the list so the failover
 *  has to step over it before the run can reach a real relay. */
const BROKEN_RELAY = "https://relay.invalid.payjoin-workshop.example";

const STEP_ORDER = [
    "session-init",
    "uri-issued",
    "uri-parsed",
    "original-built",
    "original-signed",
    "request-sent",
    "request-received",
    "checks-passed",
    "inputs-contributed",
    "proposal-signed",
    "proposal-sent",
    "proposal-received",
    "proposal-checked",
    "payjoin-signed",
    "done",
];

describe.runIf(process.env.PAYJOIN_LIVE_E2E === "1")(
    "live payjoin over the public relays",
    () => {
        it("completes a payjoin against payjo.in, over a broken relay first", async () => {
            const driver = await createLiveDriver({
                initWasm: initWasmForTests,
                relays: [BROKEN_RELAY, ...DEFAULT_RELAYS],
                // Node's fetch ignores http_proxy. A browser needs nothing here.
                fetchImpl: makeFetch(),
                // Always take the first relay still standing, so the broken
                // one is guaranteed to be tried and the failover exercised.
                relayPick: () => 0,
            });

            const steps: StepEvent[] = [];
            const session = driver.createSession((e) => steps.push(e));
            const amountSat = driver.amountBounds().defaultSat;

            const uri = await session.issueUri(amountSat);
            expect(uri).toMatch(/^bitcoin:bcrt1q/);
            expect(uri).toContain("pj=");

            const result = await session.send(uri);
            expect(
                result.ok,
                result.ok === false
                    ? `${result.kind}: ${result.message}`
                    : undefined,
            ).toBe(true);
            if (!result.ok) return;

            const { original, payjoin } = result;

            // The original PSBT: the sender alone, with change.
            expect(original.inputs.every((i) => i.party === "sender")).toBe(
                true,
            );
            expect(original.outputs).toHaveLength(2);
            expect(
                original.outputs.find((o) => o.party === "receiver")?.valueSat,
            ).toBe(amountSat);
            expect(
                original.outputs.some(
                    (o) => o.isChange && o.party === "sender",
                ),
            ).toBe(true);

            // The signed proposal: inputs from both sides. The whole point.
            expect(payjoin.inputs.some((i) => i.party === "receiver")).toBe(
                true,
            );
            expect(payjoin.inputs.some((i) => i.party === "sender")).toBe(true);
            expect(payjoin.inputs.length).toBeGreaterThan(
                original.inputs.length,
            );
            expect(payjoin.outputs).toHaveLength(2);
            expect(payjoin.txid).not.toBe(original.txid);

            // The receive rule: the contributed coin is the receiver's smallest.
            const receiverCoins = driver.wallets().receiver.utxos;
            const smallest = Math.min(...receiverCoins.map((u) => u.valueSat));
            expect(
                payjoin.inputs.find((i) => i.party === "receiver")?.valueSat,
            ).toBe(smallest);

            // Real signatures, so the rendered transaction is a transaction.
            expect(payjoin.hex).toMatch(/^[0-9a-f]+$/);
            expect(payjoin.feeSat).toBeGreaterThanOrEqual(original.feeSat);
            expect(payjoin.feeRateSatPerVb).toBeGreaterThanOrEqual(1);
            expect(payjoin.vsize).toBeGreaterThan(0);
            expect(payjoin.weight).toBeGreaterThan(0);

            // The trace the page renders, in order, on both roles.
            expect(steps.map((e) => e.id)).toEqual(STEP_ORDER);
            expect(steps.every((e) => e.label.length > 0)).toBe(true);

            console.log(
                `\n  payjoin ${payjoin.txid}\n  ${payjoin.inputs.length} in / ${payjoin.outputs.length} out, ${payjoin.vsize} vB, ${payjoin.feeSat} sat\n  nothing was broadcast\n`,
            );
        });
    },
);

describe("live driver, without touching the network", () => {
    it("exposes both fixture wallets and sendable bounds", async () => {
        const driver = await createLiveDriver({ initWasm: initWasmForTests });
        const { receiver, sender } = driver.wallets();
        expect(receiver.party).toBe("receiver");
        expect(sender.party).toBe("sender");
        expect(receiver.utxos).toHaveLength(2);
        expect(sender.utxos).toHaveLength(4);
        expect(receiver.address).toMatch(/^bcrt1q/);
        expect(sender.address).toMatch(/^bcrt1q/);
        expect(receiver.address).not.toBe(sender.address);
        expect(sender.balanceSat).toBe(
            sender.utxos.reduce((sum, utxo) => sum + utxo.valueSat, 0),
        );

        // The highest amount the page offers still leaves room for fee and
        // change.
        const bounds = driver.amountBounds();
        expect(bounds.maxSat).toBeLessThan(sender.balanceSat);
    });

    it("settles a cancelled session as cancelled rather than throwing", async () => {
        const driver = await createLiveDriver({ initWasm: initWasmForTests });
        const session = driver.createSession(() => {});
        session.cancel();
        const result = await session.send(
            "bitcoin:bcrt1qexample?pj=https://payjo.in",
        );
        expect(result.ok).toBe(false);
        if (!result.ok) expect(result.kind).toBe("cancelled");
    });
});
