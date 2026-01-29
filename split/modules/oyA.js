// Module: oyA
// Dependencies: uk

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oyA = v((uYw, r$4) => {
  var SA9 = __$.uk(),
    hA9 = (A, K, q) => {
      try {
        K = new SA9(K, q);
      } catch (Y) {
        return !1;
      }
      return K.test(A);
    };
  r$4.exports = hA9;
});

// Register to shared state
__$.oyA = oyA;
