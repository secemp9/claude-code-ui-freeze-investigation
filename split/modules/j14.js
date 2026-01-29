// Module: j14
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var j14 = v((pAw, D14) => {
  var {
      defineProperty: o41,
      getOwnPropertyDescriptor: wP3,
      getOwnPropertyNames: HP3
    } = Object,
    JP3 = Object.prototype.hasOwnProperty,
    OP3 = (A, K) => o41(A, "name", {
      value: K,
      configurable: !0
    }),
    XP3 = (A, K) => {
      for (var q in K) o41(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    $P3 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of HP3(K)) if (!JP3.call(A, z) && z !== q) o41(A, z, {
          get: () => K[z],
          enumerable: !(Y = wP3(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    _P3 = A => $P3(o41({}, "__esModule", {
      value: !0
    }), A),
    W14 = {};
  XP3(W14, {
    isArrayBuffer: () => GP3
  });
  D14.exports = _P3(W14);
  var GP3 = OP3(A => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer");
});

// Register to shared state
__$.j14 = j14;
