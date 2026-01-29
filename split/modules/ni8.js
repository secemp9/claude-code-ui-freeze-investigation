// Module: ni8
// Dependencies: Ui8, ci8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ni8 = v(OLA => {
  var li8 = __$.Ui8(),
    ii8 = __$.ci8();
  Object.keys(li8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(OLA, A)) Object.defineProperty(OLA, A, {
      enumerable: !0,
      get: function () {
        return li8[A];
      }
    });
  });
  Object.keys(ii8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(OLA, A)) Object.defineProperty(OLA, A, {
      enumerable: !0,
      get: function () {
        return ii8[A];
      }
    });
  });
});

// Register to shared state
__$.ni8 = ni8;
