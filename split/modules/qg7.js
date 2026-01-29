// Module: qg7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qg7 = v((_TH, Kg7) => {
  Kg7.exports = m62;
  function m62(A, K, q) {
    var Y = q || 8192,
      z = Y >>> 1,
      w = null,
      H = Y;
    return function (O) {
      if (O < 1 || O > z) return A(O);
      if (H + O > Y) w = A(Y), H = 0;
      var X = K.call(w, H, H += O);
      if (H & 7) H = (H | 7) + 1;
      return X;
    };
  }
});

// Register to shared state
__$.qg7 = qg7;
