// Module: yG4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yG4 = v((Eww, RG4) => {
  var A89 = "Expected a function",
    CG4 = NaN,
    K89 = "[object Symbol]",
    q89 = /^\s+|\s+$/g,
    Y89 = /^[-+]0x[0-9a-f]+$/i,
    z89 = /^0b[01]+$/i,
    w89 = /^0o[0-7]+$/i,
    H89 = parseInt,
    J89 = typeof global == "object" && global && global.Object === Object && global,
    O89 = typeof self == "object" && self && self.Object === Object && self,
    X89 = J89 || O89 || Function("return this")(),
    $89 = Object.prototype,
    _89 = $89.toString,
    G89 = Math.max,
    Z89 = Math.min,
    Tq6 = function () {
      return X89.Date.now();
    };
  function W89(A, K, q) {
    var Y,
      z,
      w,
      H,
      J,
      O,
      X = 0,
      $ = !1,
      _ = !1,
      G = !0;
    if (typeof A != "function") throw TypeError(A89);
    if (K = LG4(K) || 0, vq6(q)) $ = !!q.leading, _ = "maxWait" in q, w = _ ? G89(LG4(q.maxWait) || 0, K) : w, G = "trailing" in q ? !!q.trailing : G;
    function Z(C) {
      var R = Y,
        x = z;
      return Y = z = void 0, X = C, H = A.apply(x, R), H;
    }
    function W(C) {
      return X = C, J = setTimeout(M, K), $ ? Z(C) : H;
    }
    function D(C) {
      var R = C - O,
        x = C - X,
        y = K - R;
      return _ ? Z89(y, w - x) : y;
    }
    function j(C) {
      var R = C - O,
        x = C - X;
      return O === void 0 || R >= K || R < 0 || _ && x >= w;
    }
    function M() {
      var C = Tq6();
      if (j(C)) return P(C);
      J = setTimeout(M, D(C));
    }
    function P(C) {
      if (J = void 0, G && Y) return Z(C);
      return Y = z = void 0, H;
    }
    function f() {
      if (J !== void 0) clearTimeout(J);
      X = 0, Y = O = z = J = void 0;
    }
    function N() {
      return J === void 0 ? H : P(Tq6());
    }
    function T() {
      var C = Tq6(),
        R = j(C);
      if (Y = arguments, z = this, O = C, R) {
        if (J === void 0) return W(O);
        if (_) return J = setTimeout(M, K), Z(O);
      }
      if (J === void 0) J = setTimeout(M, K);
      return H;
    }
    return T.cancel = f, T.flush = N, T;
  }
  function vq6(A) {
    var K = typeof A;
    return !!A && (K == "object" || K == "function");
  }
  function D89(A) {
    return !!A && typeof A == "object";
  }
  function j89(A) {
    return typeof A == "symbol" || D89(A) && _89.call(A) == K89;
  }
  function LG4(A) {
    if (typeof A == "number") return A;
    if (j89(A)) return CG4;
    if (vq6(A)) {
      var K = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = vq6(K) ? K + "" : K;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(q89, "");
    var q = z89.test(A);
    return q || w89.test(A) ? H89(A.slice(2), q ? 2 : 8) : Y89.test(A) ? CG4 : +A;
  }
  RG4.exports = W89;
});

// Register to shared state
__$.yG4 = yG4;
