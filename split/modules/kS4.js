// Module: kS4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kS4 = v(nV9 => {
  function iV9(A, K, q) {
    if (K) {
      q ?? (q = K.length);
      for (let Y = q - 1; Y >= 0; --Y) {
        let z = K[Y];
        switch (z.type) {
          case "space":
          case "comment":
          case "newline":
            A -= z.source.length;
            continue;
        }
        z = K[++Y];
        while (z?.type === "space") A += z.source.length, z = K[++Y];
        break;
      }
    }
    return A;
  }
  nV9.emptyScalarPosition = iV9;
});

// Register to shared state
__$.kS4 = kS4;
