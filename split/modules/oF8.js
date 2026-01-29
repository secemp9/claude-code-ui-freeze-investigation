// Module: oF8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oF8 = v(Pf5 => {
  var rF8 = typeof TextEncoder == "function" ? new TextEncoder() : null,
    Mf5 = A => {
      if (typeof A === "string") {
        if (rF8) return rF8.encode(A).byteLength;
        let K = A.length;
        for (let q = K - 1; q >= 0; q--) {
          let Y = A.charCodeAt(q);
          if (Y > 127 && Y <= 2047) K++;else if (Y > 2047 && Y <= 65535) K += 2;
          if (Y >= 56320 && Y <= 57343) q--;
        }
        return K;
      } else if (typeof A.byteLength === "number") return A.byteLength;else if (typeof A.size === "number") return A.size;
      throw Error(`Body Length computation failed for ${A}`);
    };
  Pf5.calculateBodyLength = Mf5;
});

// Register to shared state
__$.oF8 = oF8;
