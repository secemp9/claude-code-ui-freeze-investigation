// Module: bn1
// Dependencies: CQ8, yQ8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bn1 = v(gCA => {
  var IQ8 = __$.CQ8(),
    SQ8 = __$.yQ8();
  Object.keys(IQ8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(gCA, A)) Object.defineProperty(gCA, A, {
      enumerable: !0,
      get: function () {
        return IQ8[A];
      }
    });
  });
  Object.keys(SQ8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(gCA, A)) Object.defineProperty(gCA, A, {
      enumerable: !0,
      get: function () {
        return SQ8[A];
      }
    });
  });
});

// Register to shared state
__$.bn1 = bn1;
