// Module: MM6
// Dependencies: F$1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MM6 = v(XLY => {
  var ia = __$.F$1();
  function ALY(A) {
    var K = ia.spaceIndex(A),
      q;
    if (K === -1) q = A.slice(1, -1);else q = A.slice(1, K + 1);
    if (q = ia.trim(q).toLowerCase(), q.slice(0, 1) === "/") q = q.slice(1);
    if (q.slice(-1) === "/") q = q.slice(0, -1);
    return q;
  }
  function KLY(A) {
    return A.slice(0, 2) === "</";
  }
  function qLY(A, K, q) {
    var Y = "",
      z = 0,
      w = !1,
      H = !1,
      J = 0,
      O = A.length,
      X = "",
      $ = "";
    A: for (J = 0; J < O; J++) {
      var _ = A.charAt(J);
      if (w === !1) {
        if (_ === "<") {
          w = J;
          continue;
        }
      } else if (H === !1) {
        if (_ === "<") {
          Y += q(A.slice(z, J)), w = J, z = J;
          continue;
        }
        if (_ === ">" || J === O - 1) {
          Y += q(A.slice(z, w)), $ = A.slice(w, J + 1), X = ALY($), Y += K(w, Y.length, X, $, KLY($)), z = J + 1, w = !1;
          continue;
        }
        if (_ === '"' || _ === "'") {
          var G = 1,
            Z = A.charAt(J - G);
          while (Z.trim() === "" || Z === "=") {
            if (Z === "=") {
              H = _;
              continue A;
            }
            Z = A.charAt(J - ++G);
          }
        }
      } else if (_ === H) {
        H = !1;
        continue;
      }
    }
    if (z < O) Y += q(A.substr(z));
    return Y;
  }
  var YLY = /[^a-zA-Z0-9\\_:.-]/gim;
  function zLY(A, K) {
    var q = 0,
      Y = 0,
      z = [],
      w = !1,
      H = A.length;
    function J(G, Z) {
      if (G = ia.trim(G), G = G.replace(YLY, "").toLowerCase(), G.length < 1) return;
      var W = K(G, Z || "");
      if (W) z.push(W);
    }
    for (var O = 0; O < H; O++) {
      var X = A.charAt(O),
        $,
        _;
      if (w === !1 && X === "=") {
        w = A.slice(q, O), q = O + 1, Y = A.charAt(q) === '"' || A.charAt(q) === "'" ? q : HLY(A, O + 1);
        continue;
      }
      if (w !== !1) {
        if (O === Y) if (_ = A.indexOf(X, O + 1), _ === -1) break;else {
          $ = ia.trim(A.slice(Y + 1, _)), J(w, $), w = !1, O = _, q = O + 1;
          continue;
        }
      }
      if (/\s|\n|\t/.test(X)) if (A = A.replace(/\s|\n|\t/g, " "), w === !1) {
        if (_ = wLY(A, O), _ === -1) {
          $ = ia.trim(A.slice(q, O)), J($), w = !1, q = O + 1;
          continue;
        } else {
          O = _ - 1;
          continue;
        }
      } else if (_ = JLY(A, O - 1), _ === -1) {
        $ = ia.trim(A.slice(q, O)), $ = tW7($), J(w, $), w = !1, q = O + 1;
        continue;
      } else continue;
    }
    if (q < A.length) if (w === !1) J(A.slice(q));else J(w, tW7(ia.trim(A.slice(q))));
    return ia.trim(z.join(" "));
  }
  function wLY(A, K) {
    for (; K < A.length; K++) {
      var q = A[K];
      if (q === " ") continue;
      if (q === "=") return K;
      return -1;
    }
  }
  function HLY(A, K) {
    for (; K < A.length; K++) {
      var q = A[K];
      if (q === " ") continue;
      if (q === "'" || q === '"') return K;
      return -1;
    }
  }
  function JLY(A, K) {
    for (; K > 0; K--) {
      var q = A[K];
      if (q === " ") continue;
      if (q === "=") return K;
      return -1;
    }
  }
  function OLY(A) {
    if (A[0] === '"' && A[A.length - 1] === '"' || A[0] === "'" && A[A.length - 1] === "'") return !0;else return !1;
  }
  function tW7(A) {
    if (OLY(A)) return A.substr(1, A.length - 2);else return A;
  }
  XLY.parseTag = qLY;
  XLY.parseAttr = zLY;
});

// Register to shared state
__$.MM6 = MM6;
