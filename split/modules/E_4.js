// Module: E_4
// Dependencies: uk, nyA, oyA, xk

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var E_4 = v((iYw, v_4) => {
  var V_4 = __$.uk(),
    wq6 = __$.nyA(),
    {
      ANY: zq6
    } = wq6,
    ayA = __$.oyA(),
    Hq6 = __$.xk(),
    w19 = (A, K, q = {}) => {
      if (A === K) return !0;
      A = new V_4(A, q), K = new V_4(K, q);
      let Y = !1;
      A: for (let z of A.set) {
        for (let w of K.set) {
          let H = J19(z, w, q);
          if (Y = Y || H !== null, H) continue A;
        }
        if (Y) return !1;
      }
      return !0;
    },
    H19 = [new wq6(">=0.0.0-0")],
    f_4 = [new wq6(">=0.0.0")],
    J19 = (A, K, q) => {
      if (A === K) return !0;
      if (A.length === 1 && A[0].semver === zq6) if (K.length === 1 && K[0].semver === zq6) return !0;else if (q.includePrerelease) A = H19;else A = f_4;
      if (K.length === 1 && K[0].semver === zq6) if (q.includePrerelease) return !0;else K = f_4;
      let Y = new Set(),
        z,
        w;
      for (let Z of A) if (Z.operator === ">" || Z.operator === ">=") z = N_4(z, Z, q);else if (Z.operator === "<" || Z.operator === "<=") w = T_4(w, Z, q);else Y.add(Z.semver);
      if (Y.size > 1) return null;
      let H;
      if (z && w) {
        if (H = Hq6(z.semver, w.semver, q), H > 0) return null;else if (H === 0 && (z.operator !== ">=" || w.operator !== "<=")) return null;
      }
      for (let Z of Y) {
        if (z && !ayA(Z, String(z), q)) return null;
        if (w && !ayA(Z, String(w), q)) return null;
        for (let W of K) if (!ayA(Z, String(W), q)) return !1;
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
            if (J = N_4(z, Z, q), J === Z && J !== z) return !1;
          } else if (z.operator === ">=" && !ayA(z.semver, String(Z), q)) return !1;
        }
        if (w) {
          if (_) {
            if (Z.semver.prerelease && Z.semver.prerelease.length && Z.semver.major === _.major && Z.semver.minor === _.minor && Z.semver.patch === _.patch) _ = !1;
          }
          if (Z.operator === "<" || Z.operator === "<=") {
            if (O = T_4(w, Z, q), O === Z && O !== w) return !1;
          } else if (w.operator === "<=" && !ayA(w.semver, String(Z), q)) return !1;
        }
        if (!Z.operator && (w || z) && H !== 0) return !1;
      }
      if (z && X && !w && H !== 0) return !1;
      if (w && $ && !z && H !== 0) return !1;
      if (G || _) return !1;
      return !0;
    },
    N_4 = (A, K, q) => {
      if (!A) return K;
      let Y = Hq6(A.semver, K.semver, q);
      return Y > 0 ? A : Y < 0 ? K : K.operator === ">" && A.operator === ">=" ? K : A;
    },
    T_4 = (A, K, q) => {
      if (!A) return K;
      let Y = Hq6(A.semver, K.semver, q);
      return Y < 0 ? A : Y > 0 ? K : K.operator === "<" && A.operator === "<=" ? K : A;
    };
  v_4.exports = w19;
});

// Register to shared state
__$.E_4 = E_4;
