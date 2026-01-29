// Module: U$K
// Dependencies: sB6, l6, CS, eB6, $A, bb2, P1, HP, hb2, Q$K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var U$K = k(() => {
  __$.sB6();
  __$.l6();
  __$.CS();
  __$.eB6 = o(__$.$A(), 1);
  __$.bb2 = {
    aliases: ["bug"],
    type: "local-jsx",
    name: "feedback",
    description: "Submit feedback about Claude Code",
    argumentHint: "[report]",
    isEnabled: () => !(__$.P1(process.env.CLAUDE_CODE_USE_BEDROCK) || __$.P1(process.env.CLAUDE_CODE_USE_VERTEX) || __$.P1(process.env.CLAUDE_CODE_USE_FOUNDRY) || process.env.DISABLE_FEEDBACK_COMMAND || process.env.DISABLE_BUG_COMMAND || process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC || !1 || !__$.HP("allow_product_feedback")),
    isHidden: !1,
    async call(A, {
      abortController: K,
      messages: q
    }, Y) {
      let z = Y || "";
      return __$.hb2(A, K.signal, q, z);
    },
    userFacingName() {
      return "feedback";
    }
  }, __$.Q$K = __$.bb2;
});

// Register to shared state
__$.U$K = U$K;
