// Module: tb4
// Dependencies: CY6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tb4 = v((yjw, sb4) => {
  var UE9 = __$.CY6(),
    pE9 = (A, K, q) => {
      try {
        K = new UE9(K, q);
      } catch (Y) {
        return !1;
      }
      return K.test(A);
    };
  sb4.exports = pE9;
});

// Register to shared state
__$.tb4 = tb4;
