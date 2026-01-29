// Module: PA8
// Dependencies: ny1, ry1, ZA8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PA8 = v((vGz, MA8) => {
  var WA8 = __$.ny1(),
    DA8 = __$.ry1(),
    jA8 = __$.ZA8();
  MA8.exports = WA8 ? function (K) {
    return WA8(K);
  } : DA8 ? function (K) {
    if (!K || typeof K !== "object" && typeof K !== "function") throw TypeError("getProto: not an object");
    return DA8(K);
  } : jA8 ? function (K) {
    return jA8(K);
  } : null;
});

// Register to shared state
__$.PA8 = PA8;
