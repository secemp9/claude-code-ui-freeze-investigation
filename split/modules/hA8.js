// Module: hA8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hA8 = v((RGz, SA8) => {
  SA8.exports = function (A, K) {
    return Object.keys(K).forEach(function (q) {
      A[q] = A[q] || K[q];
    }), A;
  };
});

// Register to shared state
__$.hA8 = hA8;
