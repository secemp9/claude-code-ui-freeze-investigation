// Module: vVK
// Dependencies: B7, UF6, mZ, AE1, vl2, aY, SD, Tl2, NVK, Nl2
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vVK = k(() => {
  __$.B7();
  __$.UF6();
  __$.mZ();
  __$.AE1();
  __$.vl2 = {
    type: "local",
    name: "thinkback-play",
    description: "Play the thinkback animation",
    isEnabled: () => __$.aY("tengu_thinkback"),
    isHidden: !0,
    supportsNonInteractive: !1,
    async call() {
      let A = __$.SD(),
        K = __$.Tl2(),
        q = A.plugins[K];
      if (!q || q.length === 0) return {
        type: "text",
        value: "Thinkback plugin not installed. Run /think-back first to install it."
      };
      let Y = q[0];
      if (!Y?.installPath) return {
        type: "text",
        value: "Thinkback plugin installation path not found."
      };
      let z = __$.NVK(Y.installPath, "skills", __$.Nl2),
        w = __$.NVK(z, "year_in_review.js");
      if (!__$.fl2(w)) return {
        type: "text",
        value: "No animation found. Run /think-back first to generate one."
      };
      return {
        type: "text",
        value: __$.QF6(z).message
      };
    },
    userFacingName() {
      return "thinkback-play";
    }
  }, __$.TVK = __$.vl2;
});

// Register to shared state
__$.vVK = vVK;
