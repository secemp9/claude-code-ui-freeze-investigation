// Module: N4A
// Dependencies: LD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var N4A = v((XYw, oX4) => {
  var rX4 = __$.LD(),
    Me3 = (A, K, q = !1) => {
      if (A instanceof rX4) return A;
      try {
        return new rX4(A, K);
      } catch (Y) {
        if (!q) return null;
        throw Y;
      }
    };
  oX4.exports = Me3;
});

// Register to shared state
__$.N4A = N4A;
