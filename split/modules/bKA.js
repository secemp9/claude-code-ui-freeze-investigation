// Module: bKA
// Dependencies: QD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bKA = v((vmw, J47) => {
  var H47 = __$.QD(),
    vKY = (A, K, q = !1) => {
      if (A instanceof H47) return A;
      try {
        return new H47(A, K);
      } catch (Y) {
        if (!q) return null;
        throw Y;
      }
    };
  J47.exports = vKY;
});

// Register to shared state
__$.bKA = bKA;
