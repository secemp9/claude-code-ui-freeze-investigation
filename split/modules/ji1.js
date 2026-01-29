// Module: ji1
// Dependencies: Wg8, Mg8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ji1 = v(RCA => {
  var Pg8 = __$.Wg8(),
    Vg8 = __$.Mg8();
  Object.keys(Pg8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(RCA, A)) Object.defineProperty(RCA, A, {
      enumerable: !0,
      get: function () {
        return Pg8[A];
      }
    });
  });
  Object.keys(Vg8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(RCA, A)) Object.defineProperty(RCA, A, {
      enumerable: !0,
      get: function () {
        return Vg8[A];
      }
    });
  });
});

// Register to shared state
__$.ji1 = ji1;
