// Module: DxA
// Dependencies: NC

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DxA = v((omw, H77) => {
  var mqY = __$.NC(),
    gqY = (A, K, q) => {
      try {
        K = new mqY(K, q);
      } catch (Y) {
        return !1;
      }
      return K.test(A);
    };
  H77.exports = gqY;
});

// Register to shared state
__$.DxA = DxA;
