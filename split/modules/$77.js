// Module: $77
// Dependencies: QD, NC

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $77 = v((smw, X77) => {
  var UqY = __$.QD(),
    pqY = __$.NC(),
    dqY = (A, K, q) => {
      let Y = null,
        z = null,
        w = null;
      try {
        w = new pqY(K, q);
      } catch (H) {
        return null;
      }
      return A.forEach(H => {
        if (w.test(H)) {
          if (!Y || z.compare(H) === -1) Y = H, z = new UqY(Y, q);
        }
      }), Y;
    };
  X77.exports = dqY;
});

// Register to shared state
__$.$77 = $77;
