# Vendored payjoin engine

Prebuilt so the workshop needs Node and a browser, and no Rust toolchain.

One WebAssembly binary carries two Rust crates: `payjoin-ffi` (the Payjoin Dev
Kit bindings, which make every protocol call the workshop needs) and
`payjoin-demo-wallet` (a fixture wallet: regtest coins, PSBT construction and
signing, transaction decoding). The TypeScript files here are the generated
uniffi bindings over that binary; `wasm-bindgen/` is the loader.

Nothing in this directory is hand-written. Regenerate it rather than editing it.

## Provenance

| | |
|---|---|
| Source | https://github.com/payjoin/rust-payjoin |
| Base commit | `6c31c67a`, tag `payjoin-javascript-0.3.0+payjoin-1.2.0` (`payjoin` v1.2.0, `payjoin-ffi` crate v0.24.0, `payjoin` npm package v0.3.0) |
| Demo crate | `payjoin-demo-wallet` v0.1.0 + `ubrn.demo.config.yaml`, from the `demo-wallet` branch rebased onto the base commit |
| Toolchain | rustc 1.85.0, wasm-bindgen 0.2.108, uniffi-bindgen-react-native 0.31.0-3, node 22.22.2, from the rust-payjoin `#javascript` dev shell |
| wasm-opt | not run |
| Wasm size | 3,657,590 bytes raw · 1,043,530 gzip -9 · 728,649 brotli -q11 |

SHA-256:

```
2f12686ff110d658f8f51115c2b84daba875a29e1a621484cac8cd6cc5dfa7d5  payjoin.ts
ffb40eb63052c2d4a4753b8c14e3417f78641d7933a87e1bc877e9be7002c91e  demo_wallet.ts
67a7e15126477b0ea60924e61f0995170176d04d3399c35365f4ce0497aee244  wasm-bindgen/index.js
b516623d887ff20ca75973ed9745f2ba48bec64c47c6bf4c921e38c89a9f3daf  wasm-bindgen/index_bg.wasm
```

## Rebuilding

From a rust-payjoin checkout with the `demo-wallet` branch merged or rebased in,
inside `nix develop .#javascript`:

```sh
cd payjoin-ffi/javascript
npm ci
# ubrn compiles its CLI from a workspace with no lock file. This lets cargo pick
# crate versions that still build on the dev shell's rustc, as
# scripts/generate_bindings.sh does.
export CARGO_RESOLVER_INCOMPATIBLE_RUST_VERSIONS=fallback
rm -rf demo/generated rust_modules/demo-wasm/src
mkdir -p rust_modules/demo-wasm
cp ../../Cargo-recent.lock rust_modules/demo-wasm/Cargo.lock
npx ubrn build web --config ubrn.demo.config.yaml --and-generate --release
```

then copy `demo/generated/{payjoin,payjoin-ffi,demo_wallet,demo_wallet-ffi}.ts`
and `demo/generated/wasm-bindgen/{index.js,index.d.ts,index_bg.wasm,index_bg.wasm.d.ts}`
over this directory.

`--release` is not optional: the default debug build is 15.9 MB. The `rm -rf`
matters too. Stale generated modules can hide a build that silently dropped the
payjoin crate from the binary, which is what `npm run check` guards against.
Seeding the lock file from `Cargo-recent.lock` builds against the same
dependency versions the published bindings use.

`wasm-opt -Oz` (binaryen) over `index_bg.wasm` shrinks it further. The previous
engine, built from payjoin 1.0.0, went from 3.9 MB to 2.8 MB raw that way. This
build skipped it, so the hashes above are of the unoptimized module.
