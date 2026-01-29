// Module: LF4
// Dependencies: NF4, EF4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LF4 = v(FSA => {
  var kF4 = __$.NF4(),
    CF4 = __$.EF4();
  Object.keys(kF4).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(FSA, A)) Object.defineProperty(FSA, A, {
      enumerable: !0,
      get: function () {
        return kF4[A];
      }
    });
  });
  Object.keys(CF4).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(FSA, A)) Object.defineProperty(FSA, A, {
      enumerable: !0,
      get: function () {
        return CF4[A];
      }
    });
  });
});

// Register to shared state
__$.LF4 = LF4;
