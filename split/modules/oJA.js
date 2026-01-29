// Module: oJA
// Dependencies: Eu8, Su8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oJA = v(jCA => {
  var hu8 = __$.Eu8(),
    bu8 = __$.Su8();
  Object.keys(hu8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(jCA, A)) Object.defineProperty(jCA, A, {
      enumerable: !0,
      get: function () {
        return hu8[A];
      }
    });
  });
  Object.keys(bu8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(jCA, A)) Object.defineProperty(jCA, A, {
      enumerable: !0,
      get: function () {
        return bu8[A];
      }
    });
  });
});

// Register to shared state
__$.oJA = oJA;
