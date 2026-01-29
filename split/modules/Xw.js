// Module: Xw
// Dependencies: C1, R28, p7, b1, P3, z6, SwA, KA, I28

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xw = k(() => {
  __$.C1();
  __$.R28();
  __$.p7();
  __$.b1();
  __$.P3 = __$.z6((A, K = !0) => {
    if (!A) return null;
    try {
      return JSON.parse(__$.SwA(A));
    } catch (q) {
      if (K) __$.KA(q);
      return null;
    }
  });
  __$.I28 = (() => {
    if (typeof Bun > "u") return !1;
    let K = Bun.JSONL;
    if (!K?.parseChunk) return !1;
    return K.parseChunk;
  })();
});

// Register to shared state
__$.Xw = Xw;
