// Module: JK7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JK7 = v((Dgw, HK7) => {
  var YK7 = 1 / 0,
    w9Y = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
    zK7 = NaN,
    H9Y = "[object Symbol]",
    J9Y = /^\s+|\s+$/g,
    O9Y = /^[-+]0x[0-9a-f]+$/i,
    X9Y = /^0b[01]+$/i,
    $9Y = /^0o[0-7]+$/i,
    _9Y = parseInt,
    G9Y = Object.prototype,
    Z9Y = G9Y.toString;
  function W9Y(A) {
    return typeof A == "number" && A == P9Y(A);
  }
  function wK7(A) {
    var K = typeof A;
    return !!A && (K == "object" || K == "function");
  }
  function D9Y(A) {
    return !!A && typeof A == "object";
  }
  function j9Y(A) {
    return typeof A == "symbol" || D9Y(A) && Z9Y.call(A) == H9Y;
  }
  function M9Y(A) {
    if (!A) return A === 0 ? A : 0;
    if (A = V9Y(A), A === YK7 || A === -YK7) {
      var K = A < 0 ? -1 : 1;
      return K * w9Y;
    }
    return A === A ? A : 0;
  }
  function P9Y(A) {
    var K = M9Y(A),
      q = K % 1;
    return K === K ? q ? K - q : K : 0;
  }
  function V9Y(A) {
    if (typeof A == "number") return A;
    if (j9Y(A)) return zK7;
    if (wK7(A)) {
      var K = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = wK7(K) ? K + "" : K;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(J9Y, "");
    var q = X9Y.test(A);
    return q || $9Y.test(A) ? _9Y(A.slice(2), q ? 2 : 8) : O9Y.test(A) ? zK7 : +A;
  }
  HK7.exports = W9Y;
});

// Register to shared state
__$.JK7 = JK7;
