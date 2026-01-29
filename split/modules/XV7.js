// Module: XV7
// Dependencies: YV7, HV7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XV7 = v(NmA => {
  var JV7 = __$.YV7(),
    OV7 = __$.HV7();
  Object.keys(JV7).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(NmA, A)) Object.defineProperty(NmA, A, {
      enumerable: !0,
      get: function () {
        return JV7[A];
      }
    });
  });
  Object.keys(OV7).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(NmA, A)) Object.defineProperty(NmA, A, {
      enumerable: !0,
      get: function () {
        return OV7[A];
      }
    });
  });
});

// Register to shared state
__$.XV7 = XV7;
