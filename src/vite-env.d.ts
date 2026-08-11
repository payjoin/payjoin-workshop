/// <reference types="vite/client" />

/** True when the dev server was started with `npm run dev -- --mock`: the mock
 *  driver simulates the protocol and the wasm engine is never fetched. */
declare const __DEMO_MOCK__: boolean;
