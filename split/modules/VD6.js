// Module: VD6
// Dependencies: I2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VD6 = v((C8H, r07) => {
  var TZA = __$.I2();
  function WVY(A, K, q, Y) {
    TZA.open(A, "r+", (z, w) => {
      if (z) return Y(z);
      TZA.futimes(w, K, q, H => {
        TZA.close(w, J => {
          if (Y) Y(H || J);
        });
      });
    });
  }
  function DVY(A, K, q) {
    let Y = TZA.openSync(A, "r+");
    return TZA.futimesSync(Y, K, q), TZA.closeSync(Y);
  }
  r07.exports = {
    utimesMillis: WVY,
    utimesMillisSync: DVY
  };
});

// Register to shared state
__$.VD6 = VD6;
