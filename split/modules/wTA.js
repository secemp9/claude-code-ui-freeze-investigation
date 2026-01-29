// Module: wTA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wTA = v((uZz, X18) => {
  X18.exports = (A, K = process.argv) => {
    let q = A.startsWith("-") ? "" : A.length === 1 ? "-" : "--",
      Y = K.indexOf(q + A),
      z = K.indexOf("--");
    return Y !== -1 && (z === -1 || Y < z);
  };
});

// Register to shared state
__$.wTA = wTA;
