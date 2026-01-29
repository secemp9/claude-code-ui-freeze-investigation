// Module: X$K
// Dependencies: cA, mA, QB6, of, YC, TR6, aO, Jz, Bw, $A
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var X$K = k(() => {
  __$.cA();
  __$.mA();
  __$.QB6();
  __$.of();
  __$.YC();
  __$.TR6();
  __$.aO();
  __$.Jz();
  __$.Bw = o(__$.$A(), 1), __$.hPA = o(__$.$A(), 1);
  __$.Fh2 = {
    type: "local-jsx",
    name: "btw",
    description: "Ask a quick side question without interrupting the main conversation",
    isEnabled: () => !1,
    isHidden: !1,
    immediate: !0,
    argumentHint: "<question>",
    async call(A, K, q) {
      let Y = q?.trim();
      if (!Y) return A("Usage: /btw <your question>", {
        display: "system"
      }), null;
      return __$.Bw.createElement(__$.mh2, {
        question: Y,
        context: K,
        onDone: A
      });
    },
    userFacingName() {
      return "btw";
    }
  }, __$.O$K = __$.Fh2;
});

// Register to shared state
__$.X$K = X$K;
