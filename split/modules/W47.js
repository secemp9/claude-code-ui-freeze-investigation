// Module: W47
// Dependencies: QD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var W47 = v((Cmw, Z47) => {
  var G47 = __$.QD(),
    RKY = (A, K, q, Y, z) => {
      if (typeof q === "string") z = Y, Y = q, q = void 0;
      try {
        return new G47(A instanceof G47 ? A.version : A, q).inc(K, Y, z).version;
      } catch (w) {
        return null;
      }
    };
  Z47.exports = RKY;
});

// Register to shared state
__$.W47 = W47;
