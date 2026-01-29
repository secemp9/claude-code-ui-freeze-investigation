// Module: Qg6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qg6 = v((bFJ, aDK) => {
  aDK.exports = function (K, q, Y) {
    let z = K + q - Y,
      w = Math.abs(z - K),
      H = Math.abs(z - q),
      J = Math.abs(z - Y);
    if (w <= H && w <= J) return K;
    if (H <= J) return q;
    return Y;
  };
});

// Register to shared state
__$.Qg6 = Qg6;
