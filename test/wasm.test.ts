import { describe, expect, it } from "vitest";
import { demo, initWasmForTests, pdk } from "./initWasm";

// The engine is one wasm binary carrying two crates, and a bad build can drop
// the payjoin crate while the demo wallet keeps working (see
// vendor/payjoin-demo/README.md). Exercising a symbol from each crate is the
// regression guard.
describe("the vendored engine", () => {
    it("loads, and both crates answer", async () => {
        await initWasmForTests();

        const wallets = demo.DemoWallets.embedded();
        const receiver = wallets.receiver();
        const sender = wallets.sender();
        expect(receiver.listUnspent()).toHaveLength(2);
        expect(sender.listUnspent()).toHaveLength(4);
        expect(receiver.address()).toMatch(/^bcrt1q/);

        const parsed = pdk.Uri.parse(`bitcoin:${receiver.address()}`);
        expect(parsed).toBeDefined();
    });

    it("keeps the fixture bounds sane", async () => {
        await initWasmForTests();
        const bounds = demo.DemoWallets.embedded().amountBounds();
        expect(bounds.minSat).toBeLessThanOrEqual(bounds.defaultSat);
        expect(bounds.defaultSat).toBeLessThanOrEqual(bounds.maxSat);
    });
});
