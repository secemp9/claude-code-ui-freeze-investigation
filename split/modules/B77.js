// Module: B77
// Dependencies: NC, ZxA, DxA, fC

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B77 = v((Hgw, u77) => {
  var S77 = __$.NC(),
    P$6 = __$.ZxA(),
    {
      ANY: M$6
    } = P$6,
    jxA = __$.DxA(),
    V$6 = __$.fC(),
    _5Y = (A, K, q = {}) => {
      if (A === K) return !0;
      A = new S77(A, q), K = new S77(K, q);
      let Y = !1;
      A: for (let z of A.set) {
        for (let w of K.set) {
          let H = Z5Y(z, w, q);
          if (Y = Y || H !== null, H) continue A;
        }
        if (Y) return !1;
      }
      return !0;
    },
    G5Y = [new P$6(">=0.0.0-0")],
    h77 = [new P$6(">=0.0.0")],
    Z5Y = (A, K, q) => {
      if (A === K) return !0;
      if (A.length === 1 && A[0].semver === M$6) if (K.length === 1 && K[0].semver === M$6) return !0;else if (q.includePrerelease) A = G5Y;else A = h77;
      if (K.length === 1 && K[0].semver === M$6) if (q.includePrerelease) return !0;else K = h77;
      let Y = new Set(),
        z,
        w;
      for (let Z of A) if (Z.operator === ">" || Z.operator === ">=") z = b77(z, Z, q);else if (Z.operator === "<" || Z.operator === "<=") w = x77(w, Z, q);else Y.add(Z.semver);
      if (Y.size > 1) return null;
      let H;
      if (z && w) {
        if (H = V$6(z.semver, w.semver, q), H > 0) return null;else if (H === 0 && (z.operator !== ">=" || w.operator !== "<=")) return null;
      }
      for (let Z of Y) {
        if (z && !jxA(Z, String(z), q)) return null;
        if (w && !jxA(Z, String(w), q)) return null;
        for (let W of K) if (!jxA(Z, String(W), q)) return !1;
        return !0;
      }
      let J,
        O,
        X,
        $,
        _ = w && !q.includePrerelease && w.semver.prerelease.length ? w.semver : !1,
        G = z && !q.includePrerelease && z.semver.prerelease.length ? z.semver : !1;
      if (_ && _.prerelease.length === 1 && w.operator === "<" && _.prerelease[0] === 0) _ = !1;
      for (let Z of K) {
        if ($ = $ || Z.operator === ">" || Z.operator === ">=", X = X || Z.operator === "<" || Z.operator === "<=", z) {
          if (G) {
            if (Z.semver.prerelease && Z.semver.prerelease.length && Z.semver.major === G.major && Z.semver.minor === G.minor && Z.semver.patch === G.patch) G = !1;
          }
          if (Z.operator === ">" || Z.operator === ">=") {
            if (J = b77(z, Z, q), J === Z && J !== z) return !1;
          } else if (z.operator === ">=" && !jxA(z.semver, String(Z), q)) return !1;
        }
        if (w) {
          if (_) {
            if (Z.semver.prerelease && Z.semver.prerelease.length && Z.semver.major === _.major && Z.semver.minor === _.minor && Z.semver.patch === _.patch) _ = !1;
          }
          if (Z.operator === "<" || Z.operator === "<=") {
            if (O = x77(w, Z, q), O === Z && O !== w) return !1;
          } else if (w.operator === "<=" && !jxA(w.semver, String(Z), q)) return !1;
        }
        if (!Z.operator && (w || z) && H !== 0) return !1;
      }
      if (z && X && !w && H !== 0) return !1;
      if (w && $ && !z && H !== 0) return !1;
      if (G || _) return !1;
      return !0;
    },
    b77 = (A, K, q) => {
      if (!A) return K;
      let Y = V$6(A.semver, K.semver, q);
      return Y > 0 ? A : Y < 0 ? K : K.operator === ">" && A.operator === ">=" ? K : A;
    },
    x77 = (A, K, q) => {
      if (!A) return K;
      let Y = V$6(A.semver, K.semver, q);
      return Y < 0 ? A : Y > 0 ? K : K.operator === "<" && A.operator === "<=" ? K : A;
    };
  u77.exports = _5Y;
});

// Register to shared state
__$.B77 = B77;
