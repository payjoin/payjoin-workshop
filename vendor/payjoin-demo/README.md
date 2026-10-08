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
| Source | `engine/` in this repository: the `payjoin-demo-wallet` crate, `ubrn.config.yaml` and `wasm-manifest-patch.toml` |
| Bindings | `payjoin-ffi` v0.24.0 from https://github.com/payjoin/rust-payjoin at tag `payjoin-javascript-0.3.0+payjoin-1.2.0` (`6c31c67a`, the `payjoin` npm package v0.3.0), over `payjoin` v1.2.0 from crates.io. `engine/Cargo.lock` pins every crate version |
| Toolchain | rustc 1.85.0, wasm-bindgen 0.2.108, uniffi-bindgen-react-native 0.31.0-3, prettier 3.6.2, node 22.22.2, all from that rust-payjoin tag's `#javascript` dev shell and `payjoin-ffi/javascript` npm lock |
| wasm-opt | not run |
| Wasm size | 3,658,641 bytes raw · 1,043,774 gzip -9 · 728,225 brotli -q11 |

SHA-256:

```
2f12686ff110d658f8f51115c2b84daba875a29e1a621484cac8cd6cc5dfa7d5  payjoin.ts
e3cd474bd5334816c2e824f39ec413c660e865fa33298005f1ff8e0c521595ed  demo_wallet.ts
67a7e15126477b0ea60924e61f0995170176d04d3399c35365f4ce0497aee244  wasm-bindgen/index.js
be3bbbf5b676d4dbf2556e08242027dca05d902c24f56764704a678196f533a3  wasm-bindgen/index_bg.wasm
```

## Rebuilding

You need a rust-payjoin checkout at the tag above. It provides the nix dev
shell and, through its npm dependencies, the ubrn CLI and prettier. Nothing gets
installed in this repository.

```sh
# In the rust-payjoin checkout
git checkout payjoin-javascript-0.3.0+payjoin-1.2.0
nix develop .#javascript
cd payjoin-ffi/javascript
npm ci
UBRN=$PWD/node_modules/.bin/ubrn
PRETTIER=$PWD/node_modules/.bin/prettier

# Same shell, now in this repository
cd /path/to/payjoin-workshop/engine
# ubrn compiles its CLI from a workspace with no lock file. This lets cargo pick
# crate versions that still build on the dev shell's rustc, as rust-payjoin's
# scripts/generate_bindings.sh does.
export CARGO_RESOLVER_INCOMPATIBLE_RUST_VERSIONS=fallback
rm -rf generated generated-entrypoint.ts rust_modules/demo-wasm/src
mkdir -p rust_modules/demo-wasm
cp Cargo.lock rust_modules/demo-wasm/Cargo.lock
"$UBRN" build web --config ubrn.config.yaml --and-generate --release
"$PRETTIER" --ignore-path /dev/null --tab-width 4 --write 'generated/*.ts'
cp generated/*.ts ../vendor/payjoin-demo/
cp generated/wasm-bindgen/* ../vendor/payjoin-demo/wasm-bindgen/
```

`--release` is not optional: the default debug build is 15.9 MB. The `rm -rf`
matters too. Stale generated modules can hide a build that silently dropped the
payjoin crate from the binary, which is what `npm run check` guards against.

ubrn generates the wasm crate under `rust_modules/` as a workspace of its own,
so without the copied lock file cargo would resolve fresh versions instead of
the ones `engine/Cargo.lock` pins.

ubrn formats the bindings only when it finds prettier in a `node_modules` above
its output, and this repository does not install prettier, hence the explicit
step. `--ignore-path` is needed because prettier skips gitignored files. The
formatting keeps `payjoin.ts` readable as an API reference.

The four TypeScript files and `index.js` reproduce byte for byte from the same
sources. `index_bg.wasm` does not reproduce across checkouts: it embeds the
builder's absolute source paths and symbol hashes derived from them. A rebuild
should export the same functions, which `WebAssembly.Module.exports` lists.

`wasm-opt -Oz` (binaryen) over `index_bg.wasm` shrinks it further. The engine
built from payjoin 1.0.0 went from 3.9 MB to 2.8 MB raw that way. This build
skipped it, so the hashes above are of the unoptimized module.

## Testing the engine's Rust

In the same dev shell, `cargo test` in `engine/` drives a whole payjoin in
process with the demo wallet answering every receiver check and pins the BIP 78
fee split. `cargo run -p payjoin-demo-wallet --bin gen-fixtures` regenerates
`engine/fixtures/demo-fixtures.json`, byte for byte from a clean tree.
