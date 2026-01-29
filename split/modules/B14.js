// Module: B14
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B14 = v(x14 => {
  Object.defineProperty(x14, "__esModule", {
    value: !0
  });
  x14.uint32ArrayFrom = void 0;
  function uP3(A) {
    if (!Uint32Array.from) {
      var K = new Uint32Array(A.length),
        q = 0;
      while (q < A.length) K[q] = A[q], q += 1;
      return K;
    }
    return Uint32Array.from(A);
  }
  x14.uint32ArrayFrom = uP3;
});

// Register to shared state
__$.B14 = B14;
