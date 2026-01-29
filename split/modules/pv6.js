// Module: pv6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pv6 = v((HTH, mm7) => {
  mm7.exports = u62;
  function u62(A, K) {
    var q = Array(arguments.length - 1),
      Y = 0,
      z = 2,
      w = !0;
    while (z < arguments.length) q[Y++] = arguments[z++];
    return new Promise(function (J, O) {
      q[Y] = function ($) {
        if (w) if (w = !1, $) O($);else {
          var _ = Array(arguments.length - 1),
            G = 0;
          while (G < _.length) _[G++] = arguments[G];
          J.apply(null, _);
        }
      };
      try {
        A.apply(K || null, q);
      } catch (X) {
        if (w) w = !1, O(X);
      }
    });
  }
});

// Register to shared state
__$.pv6 = pv6;
