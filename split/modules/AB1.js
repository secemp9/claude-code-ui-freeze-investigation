// Module: AB1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AB1 = v(ej8 => {
  Object.defineProperty(ej8, "__esModule", {
    value: !0
  });
  async function USq(A) {
    let K = void 0,
      q = A[0],
      Y = 1;
    while (Y < A.length) {
      let z = A[Y],
        w = A[Y + 1];
      if (Y += 2, (z === "optionalAccess" || z === "optionalCall") && q == null) return;
      if (z === "access" || z === "optionalAccess") K = q, q = await w(q);else if (z === "call" || z === "optionalCall") q = await w((...H) => q.call(K, ...H)), K = void 0;
    }
    return q;
  }
  ej8._asyncOptionalChain = USq;
});

// Register to shared state
__$.AB1 = AB1;
