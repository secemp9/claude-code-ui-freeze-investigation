// Module: KB1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KB1 = v(qM8 => {
  Object.defineProperty(qM8, "__esModule", {
    value: !0
  });
  function iSq(A) {
    let K = void 0,
      q = A[0],
      Y = 1;
    while (Y < A.length) {
      let z = A[Y],
        w = A[Y + 1];
      if (Y += 2, (z === "optionalAccess" || z === "optionalCall") && q == null) return;
      if (z === "access" || z === "optionalAccess") K = q, q = w(q);else if (z === "call" || z === "optionalCall") q = w((...H) => q.call(K, ...H)), K = void 0;
    }
    return q;
  }
  qM8._optionalChain = iSq;
});

// Register to shared state
__$.KB1 = KB1;
