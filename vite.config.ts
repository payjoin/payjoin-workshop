import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// DEMO_MOCK is set by `npm run dev -- --mock` (see scripts/dev.mjs). The flag
// compiles the page into offline mode: the mock driver runs and the wasm engine
// is never fetched, so the workshop works with no network at all.
export default defineConfig({
    plugins: [react(), tailwindcss()],
    define: {
        __DEMO_MOCK__: JSON.stringify(process.env.DEMO_MOCK === "1"),
    },
    test: {
        environment: "node",
        include: ["test/**/*.test.ts"],
        testTimeout: 120_000,
    },
});
