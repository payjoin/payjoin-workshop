// `npm run dev` starts the live demo; `npm run dev -- --mock` starts it in
// offline mode, where the mock driver simulates the protocol and nothing
// touches the network. A wrapper rather than a vite flag so the mode is an
// explicit environment the config can read.
import { spawn } from "node:child_process";

const args = process.argv.slice(2);
const mock = args.includes("--mock");
const rest = args.filter((a) => a !== "--mock");

const child = spawn("npx", ["vite", ...rest], {
    stdio: "inherit",
    env: { ...process.env, DEMO_MOCK: mock ? "1" : "" },
});
child.on("exit", (code) => process.exit(code ?? 1));
