// Module: D81
// Dependencies: zl8, Jl8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var D81 = v(qLA => {
  var Ol8 = __$.zl8(),
    Xl8 = __$.Jl8();
  Object.keys(Ol8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(qLA, A)) Object.defineProperty(qLA, A, {
      enumerable: !0,
      get: function () {
        return Ol8[A];
      }
    });
  });
  Object.keys(Xl8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(qLA, A)) Object.defineProperty(qLA, A, {
      enumerable: !0,
      get: function () {
        return Xl8[A];
      }
    });
  });
});

// Register to shared state
__$.D81 = D81;
