import type { DecodedTx } from "../driver/types";

/**
 * A transfer of 0.15 BTC, kept here so a visitor whose demo could not run
 * still sees what it would have shown. It is a fixed example rather than a
 * recording of a run, so it carries no serialized transaction: an invented hex
 * string would be the one thing on the page that does not survive being
 * checked.
 */

const RECEIVER = "bcrt1qzw82nappetzsax7sxrg7z8muqej7gydv0em7nw";
const SENDER_CHANGE = "bcrt1q4u2ueygge3d7lk3dpc75zfmsevt3ty42rhs843";

const SENDER_INPUT = {
    txid: "b4d677b24417c37a30109e6b1e51511981de07add4a32efb42ab90b792608878",
    vout: 3,
    valueSat: 100_000_000,
    address: "bcrt1qsdr3z3dqgas5rq2p34cmcm3q5f0hzamq0hwe28",
    party: "sender" as const,
};

const RECEIVER_INPUT = {
    txid: "0f62094121122691ee923a72a44804d724ae8e3fdb21806ddf1efadda26e98fa",
    vout: 0,
    valueSat: 40_000_000,
    address: "bcrt1q93khm7gdq0sm980k5k2taw28e7s06f5eqacyz4",
    party: "receiver" as const,
};

const CHANGE = {
    valueSat: 84_999_718,
    address: SENDER_CHANGE,
    party: "sender" as const,
    isChange: true,
};

export const exampleOriginal: DecodedTx = {
    txid: "0af89c6f7356a703c9f73e2d272bf9e2ff8c3618df1531c105981f61f304ddac",
    hex: "",
    vsize: 141,
    weight: 562,
    feeSat: 282,
    feeRateSatPerVb: 2,
    inputs: [SENDER_INPUT],
    outputs: [
        {
            valueSat: 15_000_000,
            address: RECEIVER,
            party: "receiver",
            isChange: false,
        },
        CHANGE,
    ],
};

export const examplePayjoin: DecodedTx = {
    txid: "0b52baaaf58fec4d53b2bc921843bfd2ee75bea8a4cfb33cba89f2421a499768",
    hex: "",
    vsize: 209,
    weight: 834,
    feeSat: 418,
    feeRateSatPerVb: 2,
    inputs: [RECEIVER_INPUT, SENDER_INPUT],
    outputs: [
        {
            valueSat: 54_999_864,
            address: RECEIVER,
            party: "receiver",
            isChange: false,
        },
        CHANGE,
    ],
};
