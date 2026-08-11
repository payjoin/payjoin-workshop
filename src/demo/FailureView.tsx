import type { DemoFailure } from "../driver/types";
import { TxComparison } from "./TxView";
import { Button } from "./ui";
import { exampleOriginal, examplePayjoin } from "./fallbackTx";
import styles from "./styles.module.css";

/**
 * What the visitor gets when a run does not finish. Two of these are our fault
 * and two are not, and the difference decides whether we owe them an example:
 * when the demo could not run, showing a payjoin anyway is the point of the
 * page. When the protocol refused a proposal or the visitor stopped it, the
 * run itself is the story and a substitute transaction would only muddy it.
 */

interface Copy {
    title: string;
    body: string;
    retry: string;
    showExample: boolean;
}

const copy = (failure: DemoFailure): Copy => {
    switch (failure.kind) {
        case "wasm-load":
            return {
                title: "The demo could not start",
                body: "Payjoin runs here as a WebAssembly module that loads when you press the button, and this time it did not load. Below is what it builds when it does.",
                retry: "Try again",
                showExample: true,
            };
        case "network":
            return {
                title: "The relay stopped answering",
                body: "A payjoin session passes through an OHTTP relay so that neither wallet learns the other's IP address. This one went quiet partway through. Nothing was at risk: the sender had already signed an original PSBT that pays the same receiver the same amount, and that transaction stays valid whether or not the payjoin happens. Below is what the demo builds when the relay is up.",
                retry: "Try again",
                showExample: true,
            };
        case "protocol":
            return {
                title: "The proposal was refused",
                body: "The sender checks every proposal against what they signed for and walks away if it does not match. This is the part of payjoin that makes it safe to hand a stranger's wallet a signed transaction.",
                retry: "Run it again",
                showExample: false,
            };
        case "cancelled":
            return {
                title: "Stopped",
                body: "You stopped the transfer while it was in flight. Either side can do that at any point, and the original PSBT is simply never broadcast.",
                retry: "Run it again",
                showExample: false,
            };
    }
};

export function FailureView({
    failure,
    onRetry,
}: {
    failure: DemoFailure;
    onRetry: () => void;
}) {
    const { title, body, retry, showExample } = copy(failure);
    const relay = failure.kind === "network" ? failure.relay : undefined;

    return (
        <section className="flex flex-col gap-6">
            <div className={`${styles.panel} p-5 flex flex-col gap-3 text-left`}>
                <h2 className="text-2xl m-0">{title}</h2>
                <p className="m-0 text-white/70 max-w-3xl">{body}</p>
                <p className={`${styles.inset} ${styles.mono} m-0 p-3 text-white/55`}>
                    {failure.message}
                    {relay && ` (${relay})`}
                </p>
                <div className="flex gap-3 flex-wrap">
                    <Button onClick={onRetry}>{retry}</Button>
                    <a
                        className="px-5 py-2 rounded-lg border border-solid border-white/30 text-white no-underline hover:no-underline hover:border-white/60"
                        href="https://payjoin.org/docs/how-it-works/payjoin-v2-bip-77"
                    >
                        Read how it works
                    </a>
                </div>
            </div>

            {showExample && (
                <TxComparison
                    original={exampleOriginal}
                    payjoin={examplePayjoin}
                    heading="What a payjoin looks like"
                    note="A fixed example, not the run that just failed."
                />
            )}
        </section>
    );
}
