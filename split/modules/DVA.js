// Module: DVA
// Dependencies: cA, mA, $8, XB, yMK, uK, j$, u5, OPK, qI6
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DVA = k(() => {
  __$.cA();
  __$.mA();
  __$.$8();
  __$.XB();
  __$.yMK();
  __$.uK();
  __$.j$();
  __$.u5();
  __$.OPK();
  __$.qI6();
  __$.Vz();
  __$.T4A();
  __$.i6();
  __$.WPK();
  __$.gJ = o(__$.$A(), 1), __$.cdA = o(__$.$A(), 1);
  __$.ue = __$.gJ.memo(__$.ad2, (A, K) => {
    let q = Object.keys(A);
    for (let Y of q) {
      if (Y === "onOpenRateLimitOptions") continue;
      if (A[Y] !== K[Y]) {
        if (Y === "streamingToolUses") {
          let z = A.streamingToolUses,
            w = K.streamingToolUses;
          if (z.length === w.length && z.every((H, J) => H.contentBlock === w[J]?.contentBlock)) continue;
        }
        if (Y === "inProgressToolUseIDs") {
          if (__$.sd2(A.inProgressToolUseIDs, K.inProgressToolUseIDs)) continue;
        }
        if (Y === "tools") {
          let z = A.tools,
            w = K.tools;
          if (z.length === w.length && z.every((H, J) => H.name === w[J]?.name)) continue;
        }
        return !1;
      }
    }
    return !0;
  });
});

// Register to shared state
__$.DVA = DVA;
