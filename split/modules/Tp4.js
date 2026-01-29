// Module: Tp4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tp4 = v(fp4 => {
  Object.defineProperty(fp4, "__esModule", {
    value: !0
  });
  fp4.uint32ArrayFrom = void 0;
  function xQ9(A) {
    if (!Uint32Array.from) {
      var K = new Uint32Array(A.length),
        q = 0;
      while (q < A.length) K[q] = A[q], q += 1;
      return K;
    }
    return Uint32Array.from(A);
  }
  fp4.uint32ArrayFrom = xQ9;
});

// Register to shared state
__$.Tp4 = Tp4;
