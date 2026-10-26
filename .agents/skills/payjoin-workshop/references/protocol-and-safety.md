# Protocol and safety context

Use this page when explaining why a workshop call exists or reviewing a protocol-sensitive change. It is a teaching summary, not a replacement for the current BIP or PDK API documentation.

## Mental model

Payjoin makes a transaction collaborative: the sender pays the receiver while the receiver adds one of its own inputs. The resulting transaction has inputs from both parties, improving privacy and allowing receiver-side wallet policies such as consolidation.

For BIP 77, the receiver creates an asynchronous session and publishes a BIP 21 URI. The sender parses the URI, creates and signs an Original PSBT, and posts the encrypted request. The receiver polls, checks it, contributes inputs and outputs according to policy, signs its own input, and posts a Proposal. The sender polls, verifies the Proposal against the Original PSBT, signs its own inputs, and finalizes.

The directory server acts as a mailbox. OHTTP separates the party requesting a resource from the party receiving the request. HPKE protects the protocol payload between the participants. These are separate protocol responsibilities and should be explained separately.

## PDK boundary

The Payjoin Dev Kit is the protocol engine and integration toolkit. It is not the application's complete wallet. The application still supplies or selects:

- wallet addresses and UTXO data;
- Original PSBT creation and wallet signing;
- receiver input-selection policy;
- input/output ownership callbacks;
- persistence and session recovery choices;
- network and relay configuration;
- user-facing fallback, cancellation, and retry behavior.

The workshop's `Toolkit` packages many of these choices so learners can focus on the PDK calls. When teaching production code, make the adapter boundary visible instead of implying that the workshop's fixture wallet is a production wallet.

## Receiver checks

Explain the checks as defenses against malformed payments and wallet probing:

1. **Broadcast suitability:** the Original should be acceptable to the wallet/node's broadcast rules.
2. **Inputs not owned:** the sender must not already be spending receiver-owned outpoints.
3. **Inputs not seen before:** a receiver should track seen inputs or equivalent state to reduce probing and replay risk.
4. **Receiver outputs identified:** the receiver must know which output it owns before constructing its Proposal.

The PDK typestate sequence is pedagogical and safety-relevant: the receiver cannot contribute until the required checks have been completed.

## Signature and fee boundaries

The sender signs the Original before the receiver participates. The receiver's proposal-signing callback must sign only receiver-owned inputs. The sender must verify the returned Proposal before signing sender inputs.

When explaining fees, distinguish:

- the sender's Original fee;
- the Proposal's additional input/transaction cost;
- the receiver's allowed fee range;
- whether the receiver or sender bears the additional fee.

Do not claim that a successful demo trace proves an economically optimal fee policy.

## Version discipline

PDK APIs, bindings, BIP wording, and relay infrastructure can change. Before giving version-specific code:

1. inspect the repository's vendored engine and package metadata;
2. identify the exact binding and version in use;
3. prefer the current official PDK/BIP documentation for new API claims;
4. label workshop-specific helper names separately from public PDK API names.

Useful authoritative starting points:

- [Payjoin V2 / BIP 77](https://payjoin.org/docs/how-it-works/payjoin-v2-bip-77/)
- [Payjoin V1 / BIP 78](https://payjoin.org/docs/how-it-works/payjoin-v1-bip-78/)
- [Payjoin Dev Kit](https://payjoindevkit.org/)
- [rust-payjoin repository](https://github.com/payjoin/rust-payjoin)
- [BIP 77 text](https://github.com/bitcoin/bips/blob/master/bip-0077.md)
