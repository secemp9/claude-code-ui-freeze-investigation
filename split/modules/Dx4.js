// Module: Dx4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Dx4 = v((mjw, Wx4) => {
  Wx4.exports = function (K) {
    if (!K || typeof K === "string") return !1;
    return K instanceof Array || Array.isArray(K) || K.length >= 0 && (K.splice instanceof Function || Object.getOwnPropertyDescriptor(K, K.length - 1) && K.constructor.name !== "String");
  };
});

// Register to shared state
__$.Dx4 = Dx4;
