// Module: R26
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var R26 = v((AVw, Dg4) => {
  var {
      defineProperty: T21,
      getOwnPropertyDescriptor: $S9,
      getOwnPropertyNames: _S9
    } = Object,
    GS9 = Object.prototype.hasOwnProperty,
    ZS9 = (A, K) => T21(A, "name", {
      value: K,
      configurable: !0
    }),
    WS9 = (A, K) => {
      for (var q in K) T21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    DS9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of _S9(K)) if (!GS9.call(A, z) && z !== q) T21(A, z, {
          get: () => K[z],
          enumerable: !(Y = $S9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    jS9 = A => DS9(T21({}, "__esModule", {
      value: !0
    }), A),
    Wg4 = {};
  WS9(Wg4, {
    isArrayBuffer: () => MS9
  });
  Dg4.exports = jS9(Wg4);
  var MS9 = ZS9(A => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer");
});

// Register to shared state
__$.R26 = R26;
