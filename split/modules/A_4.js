// Module: A_4
// Dependencies: LD, uk

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var A_4 = v((gYw, e$4) => {
  var gA9 = __$.LD(),
    FA9 = __$.uk(),
    QA9 = (A, K, q) => {
      let Y = null,
        z = null,
        w = null;
      try {
        w = new FA9(K, q);
      } catch (H) {
        return null;
      }
      return A.forEach(H => {
        if (w.test(H)) {
          if (!Y || z.compare(H) === 1) Y = H, z = new gA9(Y, q);
        }
      }), Y;
    };
  e$4.exports = QA9;
});

// Register to shared state
__$.A_4 = A_4;
