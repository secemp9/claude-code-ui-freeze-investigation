// Module: HD6
// Dependencies: I2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HD6 = v((a6H, aJ7) => {
  var PZA = __$.I2();
  function HMY(A, K, q, Y) {
    PZA.open(A, "r+", (z, w) => {
      if (z) return Y(z);
      PZA.futimes(w, K, q, H => {
        PZA.close(w, J => {
          if (Y) Y(H || J);
        });
      });
    });
  }
  function JMY(A, K, q) {
    let Y = PZA.openSync(A, "r+");
    return PZA.futimesSync(Y, K, q), PZA.closeSync(Y);
  }
  aJ7.exports = {
    utimesMillis: HMY,
    utimesMillisSync: JMY
  };
});

// Register to shared state
__$.HD6 = HD6;
