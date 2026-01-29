// Module: sH6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sH6 = v((cTw, Ya4) => {
  var Tt9 = CA("buffer").Buffer;
  Ya4.exports = function (K) {
    if (typeof K === "string") return K;
    if (typeof K === "number" || Tt9.isBuffer(K)) return K.toString();
    return JSON.stringify(K);
  };
});

// Register to shared state
__$.sH6 = sH6;
