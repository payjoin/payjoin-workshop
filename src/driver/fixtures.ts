import type { WalletView } from "./types";

/**
 * The mock driver's wallets and transaction arithmetic. The coins, addresses
 * and outpoints are copied from the fixture wallet compiled into the wasm
 * engine, so the page looks the same whether the protocol is simulated or
 * real. Every address is a published-seed regtest address; nothing here is
 * spendable and nothing is broadcast.
 */

export const RECEIVER_ADDRESS = "bcrt1qzw82nappetzsax7sxrg7z8muqej7gydv0em7nw";
export const SENDER_CHANGE_ADDRESS = "bcrt1q4u2ueygge3d7lk3dpc75zfmsevt3ty42rhs843";

const RECEIVER_UTXOS = [
    {
        txid: "0f62094121122691ee923a72a44804d724ae8e3fdb21806ddf1efadda26e98fa",
        vout: 0,
        valueSat: 40_000_000,
        address: "bcrt1q93khm7gdq0sm980k5k2taw28e7s06f5eqacyz4",
    },
    {
        txid: "0f62094121122691ee923a72a44804d724ae8e3fdb21806ddf1efadda26e98fa",
        vout: 1,
        valueSat: 60_000_000,
        address: "bcrt1qfmsaaduknxkz6m3ttp8drnagulv37a8w2jfjcd",
    },
];

const SENDER_UTXOS = [
    {
        txid: "b4d677b24417c37a30109e6b1e51511981de07add4a32efb42ab90b792608878",
        vout: 0,
        valueSat: 20_000_000,
        address: "bcrt1qj4tqu8dkz9l2r82thg0z0gnrapk685xs58ah49",
    },
    {
        txid: "b4d677b24417c37a30109e6b1e51511981de07add4a32efb42ab90b792608878",
        vout: 1,
        valueSat: 35_000_000,
        address: "bcrt1qtxkeyd90m0qtaraa2a9ulhdtjrl28mrrmscww0",
    },
    {
        txid: "b4d677b24417c37a30109e6b1e51511981de07add4a32efb42ab90b792608878",
        vout: 2,
        valueSat: 50_000_000,
        address: "bcrt1qjc7c4napermdu9nhswxen8xx45engy43ws9wfy",
    },
    {
        txid: "b4d677b24417c37a30109e6b1e51511981de07add4a32efb42ab90b792608878",
        vout: 3,
        valueSat: 100_000_000,
        address: "bcrt1qsdr3z3dqgas5rq2p34cmcm3q5f0hzamq0hwe28",
    },
];

export interface FixtureUtxo {
    txid: string;
    vout: number;
    valueSat: number;
    address: string;
}

export const receiverUtxos: FixtureUtxo[] = RECEIVER_UTXOS;
export const senderUtxos: FixtureUtxo[] = SENDER_UTXOS;

const sum = (utxos: FixtureUtxo[]) => utxos.reduce((n, u) => n + u.valueSat, 0);

export const wallets = (): { receiver: WalletView; sender: WalletView } => ({
    receiver: {
        party: "receiver",
        address: RECEIVER_ADDRESS,
        balanceSat: sum(RECEIVER_UTXOS),
        utxos: RECEIVER_UTXOS.map(({ txid, vout, valueSat }) => ({
            txid,
            vout,
            valueSat,
        })),
    },
    sender: {
        party: "sender",
        address: SENDER_CHANGE_ADDRESS,
        balanceSat: sum(SENDER_UTXOS),
        utxos: SENDER_UTXOS.map(({ txid, vout, valueSat }) => ({
            txid,
            vout,
            valueSat,
        })),
    },
});

/** Matches the rate the live driver builds the original PSBT at. */
export const FEE_RATE_SAT_PER_VB = 2;

/** Below this a P2WPKH output costs more to spend than it holds. */
const DUST_SAT = 546;

/**
 * Size of a P2WPKH-only transaction. Base bytes are 4 version + 1 input count +
 * 41 per input + 1 output count + 31 per output + 4 locktime; witness bytes are
 * 2 marker and flag + 108 per input, for a 72-byte signature and a 33-byte
 * pubkey with their length prefixes. The single-byte counts hold because these
 * transactions never approach 253 inputs or outputs.
 */
const baseSizeOf = (nIn: number, nOut: number) =>
    4 + 1 + 41 * nIn + 1 + 31 * nOut + 4;
const witnessSizeOf = (nIn: number) => 2 + 108 * nIn;

export const weightOf = (nIn: number, nOut: number): number =>
    baseSizeOf(nIn, nOut) * 4 + witnessSizeOf(nIn);

export const serializedSizeOf = (nIn: number, nOut: number): number =>
    baseSizeOf(nIn, nOut) + witnessSizeOf(nIn);

export const vsizeOf = (nIn: number, nOut: number): number =>
    Math.ceil(weightOf(nIn, nOut) / 4);

export const feeOf = (nIn: number, nOut: number): number =>
    vsizeOf(nIn, nOut) * FEE_RATE_SAT_PER_VB;

/**
 * Bounds that keep the sender solvent at either input count and always leave a
 * change output above dust, so the original the result view contrasts against
 * always has change. Min and default match the wasm engine's fixture wallet.
 */
export const amountBounds = () => ({
    minSat: 100_000,
    maxSat: sum(SENDER_UTXOS) - feeOf(SENDER_UTXOS.length + 1, 2) - DUST_SAT,
    defaultSat: 15_000_000,
});

/**
 * Largest first until the transfer and its fee are covered, with the fee
 * growing as each input is added. A real wallet would do better than this; the
 * mock only needs a selection the arithmetic can be checked against.
 */
export const selectSenderInputs = (amountSat: number): FixtureUtxo[] => {
    const candidates = [...SENDER_UTXOS].sort((a, b) => b.valueSat - a.valueSat);
    const chosen: FixtureUtxo[] = [];
    let total = 0;
    for (const utxo of candidates) {
        chosen.push(utxo);
        total += utxo.valueSat;
        if (total >= amountSat + feeOf(chosen.length, 2)) return chosen;
    }
    return chosen;
};

/**
 * The receive rule the workshop implements in step 4, mirrored here so mock
 * runs tell the same story: consolidate the smallest UTXO on every receive.
 */
export const selectReceiverContribution = (): FixtureUtxo =>
    [...RECEIVER_UTXOS].sort((a, b) => a.valueSat - b.valueSat)[0];
