// `npm run check` — proves this machine can run the workshop, before the
// workshop starts. It verifies the Node version, the installed dependencies,
// the vendored payjoin engine, and that the TypeScript compiles, then prints
// READY. If it prints anything else, fix that before the session begins.
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let failed = false;

const ok = (label, detail = "") =>
    console.log(`  ok    ${label}${detail ? ` — ${detail}` : ""}`);
const bad = (label, detail) => {
    console.error(`  FAIL  ${label} — ${detail}`);
    failed = true;
};

// Node 20+ for stable fetch, WebAssembly and ES2022 everywhere this repo uses them.
const major = Number(process.versions.node.split(".")[0]);
if (major >= 20) ok("node", `v${process.versions.node}`);
else bad("node", `v${process.versions.node} — install Node 20 or later (nodejs.org)`);

// Dependencies present. `npm ci` is the fix, `npm ci --offline` from the USB
// stick's cache when there is no network.
if (existsSync(join(root, "node_modules", "@ubjs", "core"))) {
    ok("dependencies", "node_modules is populated");
} else {
    bad("dependencies", "run: npm ci   (or npm ci --offline from the USB cache)");
}

// The payjoin engine: instantiate the vendored wasm and confirm BOTH crates
// answer. The engine is one binary carrying two linked crates — the payjoin
// bindings and the demo wallet — and a bad build can silently drop the payjoin
// half while everything else keeps working. Calling each crate's uniffi
// contract-version export is the cheapest proof the whole engine is present.
try {
    const wasmDir = join(root, "vendor", "payjoin-demo", "wasm-bindgen");
    const bindgen = await import(join(wasmDir, "index.js"));
    await bindgen.default({
        module_or_path: readFileSync(join(wasmDir, "index_bg.wasm")),
    });
    for (const crate of ["payjoin_ffi", "payjoin_demo_wallet"]) {
        const symbol = `ubrn_ffi_${crate}_uniffi_contract_version`;
        if (typeof bindgen[symbol] !== "function") {
            throw new Error(`wasm export ${symbol} is missing`);
        }
        bindgen[symbol]();
    }
    ok("payjoin engine", "wasm loads, both crates answer");
} catch (e) {
    bad("payjoin engine", e instanceof Error ? e.message : String(e));
}

// The same compile the build runs. Skeleton TODOs are comments, so this passes
// at every checkpoint.
const tsc = spawnSync("npx", ["tsc", "--noEmit"], { cwd: root, stdio: "inherit" });
if (tsc.status === 0) ok("typescript", "tsc --noEmit is clean");
else bad("typescript", "tsc --noEmit failed (output above)");

if (failed) {
    console.error("\nNOT READY — fix the failures above and run npm run check again.");
    process.exit(1);
}
console.log("\nREADY");
