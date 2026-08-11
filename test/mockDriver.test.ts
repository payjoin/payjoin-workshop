import { describe, expect, it } from "vitest";
import { createMockDriver } from "../src/driver/mockDriver";
import type { DemoResult, StepEvent } from "../src/driver/types";

/** The contract's step order, both roles interleaved, for a whole session. */
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

/** Real latency is the mock's job on screen, not in a test run. */
const FAST = { speed: 0.01 };

const run = async (options = {}, amountSat?: number) => {
    const driver = await createMockDriver({ ...FAST, ...options });
    const steps: StepEvent[] = [];
    const session = driver.createSession((e) => steps.push(e));
    const amount = amountSat ?? driver.amountBounds().defaultSat;
    const uri = await session.issueUri(amount);
    const result = await session.send(uri);
    return { driver, steps, uri, result, amount };
};

const assertOk = (
    result: DemoResult,
): Extract<DemoResult, { ok: true }> => {
    if (!result.ok) {
        throw new Error(`expected success, got ${result.kind}: ${result.message}`);
    }
    return result;
};

describe("the mock driver", () => {
    it("walks the whole trace in contract order", async () => {
        const { steps, result } = await run();
        assertOk(result);
        expect(steps.map((e) => e.id)).toEqual(STEP_ORDER);
        expect(steps.every((e) => e.label.length > 0)).toBe(true);
    });

    it("returns transactions whose arithmetic holds", async () => {
        const { result, amount } = await run();
        const { original, payjoin } = assertOk(result);

        for (const tx of [original, payjoin]) {
            const inSat = tx.inputs.reduce((n, i) => n + i.valueSat, 0);
            const outSat = tx.outputs.reduce((n, o) => n + o.valueSat, 0);
            expect(inSat - outSat).toBe(tx.feeSat);
        }

        expect(original.inputs.every((i) => i.party === "sender")).toBe(true);
        expect(
            original.outputs.find((o) => o.party === "receiver")?.valueSat,
        ).toBe(amount);
        expect(payjoin.inputs.some((i) => i.party === "receiver")).toBe(true);
        expect(payjoin.inputs.length).toBe(original.inputs.length + 1);
        expect(payjoin.feeSat).toBeGreaterThan(original.feeSat);
    });

    it("applies the receive rule: the smallest receiver coin is contributed", async () => {
        const { driver, result } = await run();
        const { payjoin } = assertOk(result);
        const receiverCoins = driver.wallets().receiver.utxos;
        const smallest = Math.min(...receiverCoins.map((u) => u.valueSat));
        const contributed = payjoin.inputs.find((i) => i.party === "receiver");
        expect(contributed?.valueSat).toBe(smallest);
    });

    it("treats an unpayable amount as a protocol failure, not a crash", async () => {
        const driver = await createMockDriver(FAST);
        const session = driver.createSession(() => {});
        const result = await session.send("bitcoin:bcrt1qmangled?amount=99999");
        expect(result.ok).toBe(false);
        if (!result.ok) expect(result.kind).toBe("protocol");
    });

    it("can force each failure kind", async () => {
        await expect(
            createMockDriver({ ...FAST, failure: "wasm-load" }),
        ).rejects.toThrow();

        for (const kind of ["network", "protocol", "cancelled"] as const) {
            const { result } = await run({ failure: kind });
            expect(result.ok).toBe(false);
            if (!result.ok) expect(result.kind).toBe(kind);
        }
    });

    it("settles a cancelled session as cancelled", async () => {
        const driver = await createMockDriver(FAST);
        const session = driver.createSession(() => {});
        const uri = await session.issueUri(driver.amountBounds().defaultSat);
        const inFlight = session.send(uri);
        session.cancel();
        const result = await inFlight;
        expect(result.ok).toBe(false);
        if (!result.ok) expect(result.kind).toBe("cancelled");
    });
});
