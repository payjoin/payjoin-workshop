// Test-side engine bootstrap: Node reads the wasm bytes off disk, where the
// browser (src/driver/wasmInit.ts) fetches them by URL. Everything after the
// bytes is the same in both.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as demo from "../vendor/payjoin-demo/demo_wallet";
import * as pdk from "../vendor/payjoin-demo/payjoin";
import initAsync from "../vendor/payjoin-demo/wasm-bindgen/index.js";

let done = false;

export async function initWasmForTests(): Promise<void> {
    if (done) return;
    const bytes = readFileSync(
        join(
            dirname(fileURLToPath(import.meta.url)),
            "../vendor/payjoin-demo/wasm-bindgen/index_bg.wasm",
        ),
    );
    await initAsync({ module_or_path: bytes });
    pdk.default.initialize();
    demo.default.initialize();
    done = true;
}

export { demo, pdk };
