# Vendored payjoin engine

Prebuilt so the workshop needs Node and a browser, and no Rust toolchain.

One WebAssembly binary carries two Rust crates: `payjoin-ffi` (the Payjoin Dev
Kit bindings — every protocol call the workshop makes) and `payjoin-demo-wallet`
(a fixture wallet: regtest coins, PSBT construction and signing, transaction
decoding). The TypeScript files here are the generated uniffi bindings over that
binary; `wasm-bindgen/` is the loader.

Nothing in this directory is hand-written. Regenerate it rather than editing it.

## Provenance

| | |
|---|---|
| Source | https://github.com/payjoin/rust-payjoin |
| Base commit | `aa485530` — "Bump payjoin to version 1.0.0" (`payjoin` v1.0.0, `payjoin-ffi` v0.24.0) |
| Demo crate | `payjoin-demo-wallet` v0.1.0 + `ubrn.demo.config.yaml`, from the `demo-wallet` branch rebased onto the base commit |
| Toolchain | rustc 1.85.0, wasm-bindgen 0.2.108, uniffi-bindgen-react-native 0.31.0-3, wasm-opt (binaryen 129) `-Oz` |
| Wasm size | 2,844,960 bytes raw · 739,037 bytes brotli |

SHA-256:

```
f1fc86f1a5a35e5479e8d900e7d217ed5f666f652218ebc74ad5f9537df1a5f0  payjoin.ts
ffb40eb63052c2d4a4753b8c14e3417f78641d7933a87e1bc877e9be7002c91e  demo_wallet.ts
dc09bfac8ebada044e51cd43074680e4c20b65c6aec00a158026b2d97cc7b368  wasm-bindgen/index.js
97b059efa6b9f5d990907ce590fbb5744bf4295dd18fba3688ac3ef63ad686db  wasm-bindgen/index_bg.wasm
```

## Rebuilding

From a rust-payjoin checkout with the `demo-wallet` branch merged or rebased in:

```sh
cd payjoin-ffi/javascript
npm ci
rm -rf demo/generated rust_modules/demo-wasm/src
npx ubrn build web --config ubrn.demo.config.yaml --and-generate --release
wasm-opt -Oz demo/generated/wasm-bindgen/index_bg.wasm \
    -o demo/generated/wasm-bindgen/index_bg.wasm
```

then copy `demo/generated/{payjoin,payjoin-ffi,demo_wallet,demo_wallet-ffi}.ts`
and `demo/generated/wasm-bindgen/{index.js,index.d.ts,index_bg.wasm,index_bg.wasm.d.ts}`
over this directory. `--release` is not optional: the default debug build is
15.9 MB. The `rm -rf` first matters too — stale generated modules can mask a
build that silently dropped the payjoin crate from the binary, which is what
`npm run check` guards against.
