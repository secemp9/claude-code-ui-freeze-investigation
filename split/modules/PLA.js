// Module: PLA
// Dependencies: ga8, vs1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PLA = v(MLA => {
  var Fa8 = __$.ga8(),
    Qa8 = __$.vs1();
  Object.keys(Fa8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(MLA, A)) Object.defineProperty(MLA, A, {
      enumerable: !0,
      get: function () {
        return Fa8[A];
      }
    });
  });
  Object.keys(Qa8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(MLA, A)) Object.defineProperty(MLA, A, {
      enumerable: !0,
      get: function () {
        return Qa8[A];
      }
    });
  });
});

// Register to shared state
__$.PLA = PLA;
