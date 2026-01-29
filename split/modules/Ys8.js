// Module: Ys8
// Dependencies: sa8, As8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ys8 = v(NLA => {
  var Ks8 = __$.sa8(),
    qs8 = __$.As8();
  Object.keys(Ks8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(NLA, A)) Object.defineProperty(NLA, A, {
      enumerable: !0,
      get: function () {
        return Ks8[A];
      }
    });
  });
  Object.keys(qs8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(NLA, A)) Object.defineProperty(NLA, A, {
      enumerable: !0,
      get: function () {
        return qs8[A];
      }
    });
  });
});

// Register to shared state
__$.Ys8 = Ys8;
