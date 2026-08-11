// The page's receiver, headless: opens a live session on the public directory
// server, prints the BIP 21 URI, then waits for an EXTERNAL sender to pay it —
// receives, checks, applies the receive rule, and posts the proposal. Use it
// to test the workshop's receiver against a real counterparty wallet
// (payjoin-cli, or a phone) instead of the in-page sender.
//
//     npx tsx scripts/receiver-only.mts [--amount <sat>] [--fixtures <json>]
//
// --fixtures loads a different fixture wallet (see vendor/payjoin-demo — the
// format refuses mainnet). With a testnet fixture whose coins are real,
// funded outpoints, the payjoin that comes out is broadcastable by the
// counterparty; with the built-in regtest fixture the protocol completes but
// the counterparty's broadcast fails, because the receiver's coin exists on
// no chain.
//
// It composes the exact modules the page runs (toolkit + steps), so it only
// works once the checkpoints are solved: run it from the solutions branch.

import { readFileSync } from "node:fs";
import { parseArgs } from "node:util";
import { DEFAULT_RELAYS, RelayManager } from "../src/driver/relays";
import * as steps from "../src/workshop/steps";
import { Toolkit } from "../src/workshop/toolkit";
import { demo, initWasmForTests } from "../test/initWasm";
import { makeFetch } from "../test/proxyFetch";

const { values } = parseArgs({
    options: {
        amount: { type: "string", default: "15000000" },
        fixtures: { type: "string" },
    },
});
const amountSat = Number(values.amount);

/** An external sender takes human time to act. Each directory poll long-polls
 *  ~30s server-side, so this is a handful of quiet polls, not a busy loop. */
const MAX_WAIT_MS = 10 * 60 * 1000;

await initWasmForTests();
const wallets = values.fixtures
    ? demo.DemoWallets.fromJson(readFileSync(values.fixtures, "utf8"))
    : demo.DemoWallets.embedded();

const tk = new Toolkit({
    onStep: (e) =>
        console.log(
            `[receiver] ${e.id.padEnd(19)} ${e.label}${e.detail ? ` — ${e.detail}` : ""}`,
        ),
    wallets,
    receiver: wallets.receiver(),
    sender: wallets.sender(),
    directory: "https://payjo.in",
    relays: new RelayManager(DEFAULT_RELAYS),
    fetchImpl: makeFetch(),
    isCancelled: () => false,
});

const { session, uri } = await steps.openReceiverSession(tk, amountSat);
console.log(`\n${uri}\n`);
console.log("waiting for a sender…");

const deadline = Date.now() + MAX_WAIT_MS;
let wantsOutputs = null;
while (Date.now() < deadline && wantsOutputs === null) {
    try {
        wantsOutputs = await steps.receiveAndCheck(tk, session);
    } catch (e) {
        if (String(e).includes("never delivered")) continue;
        throw e;
    }
}
if (!wantsOutputs) {
    console.error("no sender arrived before the deadline");
    process.exit(1);
}
await steps.contributeAndPropose(tk, wantsOutputs);
console.log("proposal posted; the sender verifies and finalizes from here.");
