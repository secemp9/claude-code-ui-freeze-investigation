// Module: fK7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fK7 = v((Vgw, VK7) => {
  var U9Y = "Expected a function",
    jK7 = 1 / 0,
    p9Y = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
    MK7 = NaN,
    d9Y = "[object Symbol]",
    c9Y = /^\s+|\s+$/g,
    l9Y = /^[-+]0x[0-9a-f]+$/i,
    i9Y = /^0b[01]+$/i,
    n9Y = /^0o[0-7]+$/i,
    r9Y = parseInt,
    o9Y = Object.prototype,
    a9Y = o9Y.toString;
  function s9Y(A, K) {
    var q;
    if (typeof K != "function") throw TypeError(U9Y);
    return A = qYY(A), function () {
      if (--A > 0) q = K.apply(this, arguments);
      if (A <= 1) K = void 0;
      return q;
    };
  }
  function t9Y(A) {
    return s9Y(2, A);
  }
  function PK7(A) {
    var K = typeof A;
    return !!A && (K == "object" || K == "function");
  }
  function e9Y(A) {
    return !!A && typeof A == "object";
  }
  function AYY(A) {
    return typeof A == "symbol" || e9Y(A) && a9Y.call(A) == d9Y;
  }
  function KYY(A) {
    if (!A) return A === 0 ? A : 0;
    if (A = YYY(A), A === jK7 || A === -jK7) {
      var K = A < 0 ? -1 : 1;
      return K * p9Y;
    }
    return A === A ? A : 0;
  }
  function qYY(A) {
    var K = KYY(A),
      q = K % 1;
    return K === K ? q ? K - q : K : 0;
  }
  function YYY(A) {
    if (typeof A == "number") return A;
    if (AYY(A)) return MK7;
    if (PK7(A)) {
      var K = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = PK7(K) ? K + "" : K;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(c9Y, "");
    var q = i9Y.test(A);
    return q || n9Y.test(A) ? r9Y(A.slice(2), q ? 2 : 8) : l9Y.test(A) ? MK7 : +A;
  }
  VK7.exports = t9Y;
});

// Register to shared state
__$.fK7 = fK7;
