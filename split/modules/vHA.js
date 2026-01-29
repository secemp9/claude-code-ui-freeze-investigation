// Module: vHA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vHA = v(GN8 => {
  Object.defineProperty(GN8, "__esModule", {
    value: !0
  });
  var ciq = (A, K, q) => {
    let Y, z;
    return w => {
      if (K.value >= 0) {
        if (w || q) {
          if (z = K.value - (Y || 0), z || Y === void 0) Y = K.value, K.delta = z, A(K);
        }
      }
    };
  };
  GN8.bindReporter = ciq;
});

// Register to shared state
__$.vHA = vHA;
