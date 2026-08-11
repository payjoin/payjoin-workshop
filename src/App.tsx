export default function App() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6">
            <header className="flex flex-col gap-3 text-left">
                <h1 className="text-4xl sm:text-5xl m-0">Build a payjoin</h1>
                <p className="m-0 text-lg text-white/70 max-w-3xl">
                    A payjoin is a transfer the sender and the receiver build
                    together. Both put in an input, so the finished transaction
                    has two owners and still reads like any other payment on
                    chain. In this workshop you implement both sides of a BIP 77
                    payjoin with Payjoin Dev Kit, right here in the browser.
                </p>
                <p className="m-0 text-sm text-white/45">
                    <a
                        className="text-primary no-underline hover:underline"
                        href="https://github.com/bitcoin/bips/blob/master/bip-0077.md"
                    >
                        BIP 77
                    </a>
                    {" · "}
                    <a
                        className="text-primary no-underline hover:underline"
                        href="https://payjoin.org"
                    >
                        payjoin.org
                    </a>
                </p>
            </header>
        </main>
    );
}
