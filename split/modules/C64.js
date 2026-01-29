// Module: C64
// Dependencies: f64, v64

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var C64 = v(ULA => {
  var E64 = __$.f64(),
    k64 = __$.v64();
  Object.keys(E64).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(ULA, A)) Object.defineProperty(ULA, A, {
      enumerable: !0,
      get: function () {
        return E64[A];
      }
    });
  });
  Object.keys(k64).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(ULA, A)) Object.defineProperty(ULA, A, {
      enumerable: !0,
      get: function () {
        return k64[A];
      }
    });
  });
});

// Register to shared state
__$.C64 = C64;
