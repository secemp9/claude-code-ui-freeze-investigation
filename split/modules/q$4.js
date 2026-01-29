// Module: q$4
// Dependencies: LD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q$4 = v((GYw, K$4) => {
  var A$4 = __$.LD(),
    Te3 = (A, K, q, Y, z) => {
      if (typeof q === "string") z = Y, Y = q, q = void 0;
      try {
        return new A$4(A instanceof A$4 ? A.version : A, q).inc(K, Y, z).version;
      } catch (w) {
        return null;
      }
    };
  K$4.exports = Te3;
});

// Register to shared state
__$.q$4 = q$4;
