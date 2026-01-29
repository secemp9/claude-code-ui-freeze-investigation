// Module: U28
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var U28 = v((nvz, Q28) => {
  var F28 = "(?:" + ["\\|\\|", "\\&\\&", ";;", "\\|\\&", "\\<\\(", "\\<\\<\\<", ">>", ">\\&", "<\\&", "[&;()|<>]"].join("|") + ")",
    u28 = new RegExp("^" + F28 + "$"),
    B28 = "|&;()<> \\t",
    JWq = '"((\\\\"|[^"])*?)"',
    OWq = "'((\\\\'|[^'])*?)'",
    XWq = /^#$/,
    m28 = "'",
    g28 = '"',
    xb1 = "$",
    b1A = "",
    $Wq = 4294967296;
  for (aoA = 0; aoA < 4; aoA++) b1A += ($Wq * Math.random()).toString(16);
  var aoA,
    _Wq = new RegExp("^" + b1A);
  function GWq(A, K) {
    var q = K.lastIndex,
      Y = [],
      z;
    while (z = K.exec(A)) if (Y.push(z), K.lastIndex === z.index) K.lastIndex += 1;
    return K.lastIndex = q, Y;
  }
  function ZWq(A, K, q) {
    var Y = typeof A === "function" ? A(q) : A[q];
    if (typeof Y > "u" && q != "") Y = "";else if (typeof Y > "u") Y = "$";
    if (typeof Y === "object") return K + b1A + JSON.stringify(Y) + b1A;
    return K + Y;
  }
  function WWq(A, K, q) {
    if (!q) q = {};
    var Y = q.escape || "\\",
      z = "(\\" + Y + `['"` + B28 + `]|[^\\s'"` + B28 + "])+",
      w = new RegExp(["(" + F28 + ")", "(" + z + "|" + JWq + "|" + OWq + ")+"].join("|"), "g"),
      H = GWq(A, w);
    if (H.length === 0) return [];
    if (!K) K = {};
    var J = !1;
    return H.map(function (O) {
      var X = O[0];
      if (!X || J) return;
      if (u28.test(X)) return {
        op: X
      };
      var $ = !1,
        _ = !1,
        G = "",
        Z = !1,
        W;
      function D() {
        W += 1;
        var P,
          f,
          N = X.charAt(W);
        if (N === "{") {
          if (W += 1, X.charAt(W) === "}") throw Error("Bad substitution: " + X.slice(W - 2, W + 1));
          if (P = X.indexOf("}", W), P < 0) throw Error("Bad substitution: " + X.slice(W));
          f = X.slice(W, P), W = P;
        } else if (/[*@#?$!_-]/.test(N)) f = N, W += 1;else {
          var T = X.slice(W);
          if (P = T.match(/[^\w\d_]/), !P) f = T, W = X.length;else f = T.slice(0, P.index), W += P.index - 1;
        }
        return ZWq(K, "", f);
      }
      for (W = 0; W < X.length; W++) {
        var j = X.charAt(W);
        if (Z = Z || !$ && (j === "*" || j === "?"), _) G += j, _ = !1;else if ($) {
          if (j === $) $ = !1;else if ($ == m28) G += j;else if (j === Y) {
            if (W += 1, j = X.charAt(W), j === g28 || j === Y || j === xb1) G += j;else G += Y + j;
          } else if (j === xb1) G += D();else G += j;
        } else if (j === g28 || j === m28) $ = j;else if (u28.test(j)) return {
          op: X
        };else if (XWq.test(j)) {
          J = !0;
          var M = {
            comment: A.slice(O.index + W + 1)
          };
          if (G.length) return [G, M];
          return [M];
        } else if (j === Y) _ = !0;else if (j === xb1) G += D();else G += j;
      }
      if (Z) return {
        op: "glob",
        pattern: G
      };
      return G;
    }).reduce(function (O, X) {
      return typeof X > "u" ? O : O.concat(X);
    }, []);
  }
  Q28.exports = function (K, q, Y) {
    var z = WWq(K, q, Y);
    if (typeof q !== "function") return z;
    return z.reduce(function (w, H) {
      if (typeof H === "object") return w.concat(H);
      var J = H.split(RegExp("(" + b1A + ".*?" + b1A + ")", "g"));
      if (J.length === 1) return w.concat(J[0]);
      return w.concat(J.filter(Boolean).map(function (O) {
        if (_Wq.test(O)) return JSON.parse(O.split(b1A)[1]);
        return O;
      }));
    }, []);
  };
});

// Register to shared state
__$.U28 = U28;
