// Module: t28
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var t28 = v((DEz, s28) => {
  s28.exports = yWq;
  var RWq = Object.getPrototypeOf || function (A) {
    return A.__proto__;
  };
  function yWq(A) {
    if (A === null || typeof A !== "object") return A;
    if (A instanceof Object) var K = {
      __proto__: RWq(A)
    };else var K = Object.create(null);
    return Object.getOwnPropertyNames(A).forEach(function (q) {
      Object.defineProperty(K, q, Object.getOwnPropertyDescriptor(A, q));
    }), K;
  }
});

// Register to shared state
__$.t28 = t28;
