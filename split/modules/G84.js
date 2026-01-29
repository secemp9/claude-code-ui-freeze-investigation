// Module: G84
// Dependencies: H84, X84

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var G84 = v(lLA => {
  var $84 = __$.H84(),
    _84 = __$.X84();
  Object.keys($84).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(lLA, A)) Object.defineProperty(lLA, A, {
      enumerable: !0,
      get: function () {
        return $84[A];
      }
    });
  });
  Object.keys(_84).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(lLA, A)) Object.defineProperty(lLA, A, {
      enumerable: !0,
      get: function () {
        return _84[A];
      }
    });
  });
});

// Register to shared state
__$.G84 = G84;
