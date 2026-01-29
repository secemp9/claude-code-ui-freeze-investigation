// Module: Vb4
// Dependencies: R$A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vb4 = v((jjw, Pb4) => {
  var Mb4 = __$.R$A(),
    av9 = (A, K, q = !1) => {
      if (A instanceof Mb4) return A;
      try {
        return new Mb4(A, K);
      } catch (Y) {
        if (!q) return null;
        throw Y;
      }
    };
  Pb4.exports = av9;
});

// Register to shared state
__$.Vb4 = Vb4;
