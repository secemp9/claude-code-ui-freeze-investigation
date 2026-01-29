// Module: xS1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xS1 = v(OK8 => {
  Object.defineProperty(OK8, "__esModule", {
    value: !0
  });
  OK8.argsArgArrayOrObject = void 0;
  var N5q = Array.isArray,
    T5q = Object.getPrototypeOf,
    v5q = Object.prototype,
    E5q = Object.keys;
  function k5q(A) {
    if (A.length === 1) {
      var K = A[0];
      if (N5q(K)) return {
        args: K,
        keys: null
      };
      if (C5q(K)) {
        var q = E5q(K);
        return {
          args: q.map(function (Y) {
            return K[Y];
          }),
          keys: q
        };
      }
    }
    return {
      args: A,
      keys: null
    };
  }
  OK8.argsArgArrayOrObject = k5q;
  function C5q(A) {
    return A && typeof A === "object" && T5q(A) === v5q;
  }
});

// Register to shared state
__$.xS1 = xS1;
