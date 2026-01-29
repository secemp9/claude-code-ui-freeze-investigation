// Module: rB
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rB = v((Ue7, kt) => {
  (function () {
    var A,
      K,
      q,
      Y,
      z,
      w,
      H,
      J = {}.hasOwnProperty;
    A = function (O, ...X) {
      var $, _, G, Z;
      if (z(Object.assign)) Object.assign.apply(null, arguments);else for ($ = 0, G = X.length; $ < G; $++) if (Z = X[$], Z != null) for (_ in Z) {
        if (!J.call(Z, _)) continue;
        O[_] = Z[_];
      }
      return O;
    }, z = function (O) {
      return !!O && Object.prototype.toString.call(O) === "[object Function]";
    }, w = function (O) {
      var X;
      return !!O && ((X = typeof O) === "function" || X === "object");
    }, q = function (O) {
      if (z(Array.isArray)) return Array.isArray(O);else return Object.prototype.toString.call(O) === "[object Array]";
    }, Y = function (O) {
      var X;
      if (q(O)) return !O.length;else {
        for (X in O) {
          if (!J.call(O, X)) continue;
          return !1;
        }
        return !0;
      }
    }, H = function (O) {
      var X, $;
      return w(O) && ($ = Object.getPrototypeOf(O)) && (X = $.constructor) && typeof X === "function" && X instanceof X && Function.prototype.toString.call(X) === Function.prototype.toString.call(Object);
    }, K = function (O) {
      if (z(O.valueOf)) return O.valueOf();else return O;
    }, Ue7.assign = A, Ue7.isFunction = z, Ue7.isObject = w, Ue7.isArray = q, Ue7.isEmpty = Y, Ue7.isPlainObject = H, Ue7.getValue = K;
  }).call(Ue7);
});

// Register to shared state
__$.rB = rB;
