// Module: pB4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pB4 = v(QB4 => {
  Object.defineProperty(QB4, "__esModule", {
    value: !0
  });
  QB4.uint32ArrayFrom = void 0;
  function eR9(A) {
    if (!Uint32Array.from) {
      var K = new Uint32Array(A.length),
        q = 0;
      while (q < A.length) K[q] = A[q], q += 1;
      return K;
    }
    return Uint32Array.from(A);
  }
  QB4.uint32ArrayFrom = eR9;
});

// Register to shared state
__$.pB4 = pB4;
