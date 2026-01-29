// Module: K$6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var K$6 = v((Xmw, E87) => {
  var B7Y = CA("buffer").Buffer;
  E87.exports = function (K) {
    if (typeof K === "string") return K;
    if (typeof K === "number" || B7Y.isBuffer(K)) return K.toString();
    return JSON.stringify(K);
  };
});

// Register to shared state
__$.K$6 = K$6;
