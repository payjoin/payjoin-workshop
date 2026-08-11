// Browser-side engine bootstrap: the wasm is fetched by URL and instantiated
// once, then both crates' uniffi bindings are initialized. Tests do the same
// with bytes read off disk (test/initWasm.ts).
import * as demo from "../../vendor/payjoin-demo/demo_wallet";
import * as pdk from "../../vendor/payjoin-demo/payjoin";
import initAsync from "../../vendor/payjoin-demo/wasm-bindgen/index.js";
import wasmUrl from "../../vendor/payjoin-demo/wasm-bindgen/index_bg.wasm?url";

let done = false;

export async function initWasm(): Promise<void> {
    if (done) return;
    await initAsync({ module_or_path: wasmUrl });
    pdk.default.initialize();
    demo.default.initialize();
    done = true;
}
