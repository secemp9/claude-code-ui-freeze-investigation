// Module: Wa6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Wa6 = v((T0z, mR1) => {
  var Za6 = (A = {}) => {
    let K = A.env || process.env;
    if ((A.platform || process.platform) !== "win32") return "PATH";
    return Object.keys(K).reverse().find(Y => Y.toUpperCase() === "PATH") || "Path";
  };
  mR1.exports = Za6;
  mR1.exports.default = Za6;
});

// Register to shared state
__$.Wa6 = Wa6;
