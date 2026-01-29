// Module: iW1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iW1 = v(pb7 => {
  Object.defineProperty(pb7, "__esModule", {
    value: !0
  });
  pb7.nextGreaterSquare = pb7.ldexp = void 0;
  function geY(A, K) {
    if (A === 0 || A === Number.POSITIVE_INFINITY || A === Number.NEGATIVE_INFINITY || Number.isNaN(A)) return A;
    return A * Math.pow(2, K);
  }
  pb7.ldexp = geY;
  function FeY(A) {
    return A--, A |= A >> 1, A |= A >> 2, A |= A >> 4, A |= A >> 8, A |= A >> 16, A++, A;
  }
  pb7.nextGreaterSquare = FeY;
});

// Register to shared state
__$.iW1 = iW1;
