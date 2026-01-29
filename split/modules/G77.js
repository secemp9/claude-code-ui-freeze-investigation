// Module: G77
// Dependencies: QD, NC

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var G77 = v((tmw, _77) => {
  var cqY = __$.QD(),
    lqY = __$.NC(),
    iqY = (A, K, q) => {
      let Y = null,
        z = null,
        w = null;
      try {
        w = new lqY(K, q);
      } catch (H) {
        return null;
      }
      return A.forEach(H => {
        if (w.test(H)) {
          if (!Y || z.compare(H) === 1) Y = H, z = new cqY(Y, q);
        }
      }), Y;
    };
  _77.exports = iqY;
});

// Register to shared state
__$.G77 = G77;
