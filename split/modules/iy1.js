// Module: iy1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iy1 = v((_Gz, ce6) => {
  ce6.exports = function () {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return !1;
    if (typeof Symbol.iterator === "symbol") return !0;
    var K = {},
      q = Symbol("test"),
      Y = Object(q);
    if (typeof q === "string") return !1;
    if (Object.prototype.toString.call(q) !== "[object Symbol]") return !1;
    if (Object.prototype.toString.call(Y) !== "[object Symbol]") return !1;
    var z = 42;
    K[q] = z;
    for (var w in K) return !1;
    if (typeof Object.keys === "function" && Object.keys(K).length !== 0) return !1;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(K).length !== 0) return !1;
    var H = Object.getOwnPropertySymbols(K);
    if (H.length !== 1 || H[0] !== q) return !1;
    if (!Object.prototype.propertyIsEnumerable.call(K, q)) return !1;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var J = Object.getOwnPropertyDescriptor(K, q);
      if (J.value !== z || J.enumerable !== !0) return !1;
    }
    return !0;
  };
});

// Register to shared state
__$.iy1 = iy1;
