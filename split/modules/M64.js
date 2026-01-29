// Module: M64
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var M64 = v(yf3 => {
  var Rf3 = A => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]";
  yf3.isArrayBuffer = Rf3;
});

// Register to shared state
__$.M64 = M64;
