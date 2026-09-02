# Evaluation and example requests

Use this page when testing whether the skill gives accurate workshop/PDK answers and changes only the requested code.

## Minimum verification

For ordinary workshop implementation, use this order:

```sh
npm run check
npm test
npm run build
```

The mock tests should cover at least:

- the complete trace order;
- input/output arithmetic and fee increase;
- the receiver contribution policy;
- invalid or unpayable amounts;
- forced network/protocol/cancellation failures;
- cancellation of an in-flight session.

If a change alters a policy or trace, update the relevant assertion rather than weakening the test. If dependencies are missing, say so and report the check as not run.

Do not run `PAYJOIN_LIVE_E2E=1 npm test` implicitly. It sends public relay traffic and belongs only in an explicitly requested, one-off integration check after the solution path is complete.

## Good direct evaluation prompts

Use realistic student prompts. The skill should answer questions directly and implement only when the request asks for a change:

1. “What does step 3 protect against, and where is it implemented?”
2. “Can you fill the receiver checks in step 3 and run the relevant tests?”
3. “Can you make the receiver contribute the smallest available coin?”
4. “Why must the Original PSBT be broadcastable before Payjoin?”
5. “What is the difference between the directory server, OHTTP relay, and HPKE?”
6. “Can you make a malformed URI become a readable protocol error?”
7. “Review this proposal-signing callback. Could it sign a sender input?”
8. “Why does mock mode pass while a real counterparty cannot broadcast the finished transaction?”
9. “Can you add a test for an empty receiver wallet without changing the production policy?”
10. “I fell behind. Find the first unfinished checkpoint and tell me what it should do.”

## Expected response qualities

A strong response should:

- accept ordinary student language rather than requiring checkpoint names;
- state the relevant checkpoint or source location before making a change;
- name the sender/receiver role and checkpoint;
- connect the concept to the actual function and existing helper;
- preserve the distinction between mock simulation and live PDK behavior;
- identify relevant tests and run or explicitly decline live E2E;
- call out assumptions and unverified security claims;
- avoid asking for secrets or suggesting mainnet testing.

A weak response usually copies a large PDK example without inspecting the repository, changes `mockDriver.ts` to hide a broken live implementation, treats a passing mock test as cryptographic proof, or skips the sender's final Proposal verification.

## Customization acceptance checklist

Before accepting a workshop customization, confirm:

- the change has a named policy or teaching objective;
- the receiver still contributes only its own selected input;
- the sender's required outputs and fee protections remain understood;
- trace IDs remain compatible unless the UI and tests were intentionally updated;
- tests cover the changed behavior and at least one negative path;
- no real keys, mainnet fixtures, or live relay loops were introduced;
- the final report distinguishes implemented, tested, and unverified behavior.
