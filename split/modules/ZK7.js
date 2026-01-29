// Module: ZK7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZK7 = v((Mgw, GK7) => {
  var k9Y = "[object Object]";
  function C9Y(A) {
    var K = !1;
    if (A != null && typeof A.toString != "function") try {
      K = !!(A + "");
    } catch (q) {}
    return K;
  }
  function L9Y(A, K) {
    return function (q) {
      return A(K(q));
    };
  }
  var R9Y = Function.prototype,
    $K7 = Object.prototype,
    _K7 = R9Y.toString,
    y9Y = $K7.hasOwnProperty,
    I9Y = _K7.call(Object),
    S9Y = $K7.toString,
    h9Y = L9Y(Object.getPrototypeOf, Object);
  function b9Y(A) {
    return !!A && typeof A == "object";
  }
  function x9Y(A) {
    if (!b9Y(A) || S9Y.call(A) != k9Y || C9Y(A)) return !1;
    var K = h9Y(A);
    if (K === null) return !0;
    var q = y9Y.call(K, "constructor") && K.constructor;
    return typeof q == "function" && q instanceof q && _K7.call(q) == I9Y;
  }
  GK7.exports = x9Y;
});

// Register to shared state
__$.ZK7 = ZK7;
