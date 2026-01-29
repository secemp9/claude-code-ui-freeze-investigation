// Module: t$4
// Dependencies: LD, uk

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var t$4 = v((mYw, s$4) => {
  var uA9 = __$.LD(),
    BA9 = __$.uk(),
    mA9 = (A, K, q) => {
      let Y = null,
        z = null,
        w = null;
      try {
        w = new BA9(K, q);
      } catch (H) {
        return null;
      }
      return A.forEach(H => {
        if (w.test(H)) {
          if (!Y || z.compare(H) === -1) Y = H, z = new uA9(Y, q);
        }
      }), Y;
    };
  s$4.exports = mA9;
});

// Register to shared state
__$.t$4 = t$4;
