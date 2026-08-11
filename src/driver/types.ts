export type Party = "receiver" | "sender";

/** A wallet as a pane renders it. Regtest fixtures; nothing here is spendable. */
export interface WalletView {
  party: Party;
  /** The address this side shows. bcrt1q… */
  address: string;
  balanceSat: number;
  utxos: Array<{ txid: string; vout: number; valueSat: number }>;
}

export interface DecodedTxIn {
  txid: string;
  vout: number;
  valueSat: number;
  address: string;
  /** Which side of the demo owns this input. The point of the whole demo is that
   *  a payjoin has inputs from both. */
  party: Party;
}

export interface DecodedTxOut {
  valueSat: number;
  address: string;
  party: Party;
  isChange: boolean;
}

export interface DecodedTx {
  txid: string;
  hex: string;
  vsize: number;
  weight: number;
  feeSat: number;
  feeRateSatPerVb: number;
  inputs: DecodedTxIn[];
  outputs: DecodedTxOut[];
}

export type StepId =
  // receiver, phase 1
  | "session-init"
  | "uri-issued"
  // sender, phase 2
  | "uri-parsed"
  | "original-built"
  | "original-signed"
  | "request-sent"
  // receiver, phase 2
  | "request-received"
  | "checks-passed"
  | "inputs-contributed"
  | "proposal-signed"
  | "proposal-sent"
  // sender, phase 2
  | "proposal-received"
  | "proposal-checked"
  | "payjoin-signed"
  | "done";

export interface StepEvent {
  role: Party;
  id: StepId;
  /** Short human label for the trace line. Driver supplies it; the page does not
   *  map StepId to prose, so a new step never silently renders blank. */
  label: string;
  /** Optional second line — a fee rate, an outpoint, a directory host. */
  detail?: string;
  /** ms since epoch, from the driver's clock. */
  at: number;
}

export type DemoFailure =
  | { kind: "wasm-load"; message: string }
  | { kind: "network"; message: string; relay?: string }
  | { kind: "protocol"; message: string }
  | { kind: "cancelled"; message: string };

export type DemoResult =
  | { ok: true; original: DecodedTx; payjoin: DecodedTx }
  | ({ ok: false } & DemoFailure);

export interface DemoSession {
  /** Phase 1 — the receiver side. Emits `session-init` then `uri-issued`.
   *  Resolves to the BIP 21 URI the visitor carries across to the sender pane. */
  issueUri(amountSat: number): Promise<string>;

  /** Phase 2 — the sender side, called with the URI the visitor supplied.
   *  Emits the rest of the steps on both roles and resolves to the result.
   *  Never rejects: protocol and network failure arrive as `ok: false`. */
  send(uri: string): Promise<DemoResult>;

  /** Idempotent. After this, in-flight promises settle as `cancelled`. */
  cancel(): void;
}

export interface DemoDriver {
  /** Fixture wallets, for the pane headers. Available before any session starts. */
  wallets(): { receiver: WalletView; sender: WalletView };
  /** Sat bounds the UI's amount control should respect, derived from the fixture
   *  UTXO set so the visitor cannot ask for more than the sender can cover. */
  amountBounds(): { minSat: number; maxSat: number; defaultSat: number };
  createSession(onStep: (e: StepEvent) => void): DemoSession;
}

/** Both drivers are created asynchronously — the wasm one has a module to load,
 *  and the mock one matches the shape so the page has one code path. */
export type CreateDriver = () => Promise<DemoDriver>;
