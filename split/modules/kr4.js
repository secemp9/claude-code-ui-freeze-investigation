// Module: kr4
// Dependencies: NH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kr4 = v((MTw, Er4) => {
  var Tr4 = __$.NH6(),
    vr4 = MTw;
  (function () {
    function A(X) {
      return X < 10 ? "0" + X : X;
    }
    var K = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      q = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      Y,
      z,
      w = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\\"",
        "\\": "\\\\"
      },
      H;
    function J(X) {
      return q.lastIndex = 0, q.test(X) ? '"' + X.replace(q, function ($) {
        var _ = w[$];
        return typeof _ === "string" ? _ : "\\u" + ("0000" + $.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + X + '"';
    }
    function O(X, $) {
      var _,
        G,
        Z,
        W,
        D = Y,
        j,
        M = $[X],
        P = M != null && (M instanceof Tr4 || Tr4.isBigNumber(M));
      if (M && typeof M === "object" && typeof M.toJSON === "function") M = M.toJSON(X);
      if (typeof H === "function") M = H.call($, X, M);
      switch (typeof M) {
        case "string":
          if (P) return M;else return J(M);
        case "number":
          return isFinite(M) ? String(M) : "null";
        case "boolean":
        case "null":
        case "bigint":
          return String(M);
        case "object":
          if (!M) return "null";
          if (Y += z, j = [], Object.prototype.toString.apply(M) === "[object Array]") {
            W = M.length;
            for (_ = 0; _ < W; _ += 1) j[_] = O(_, M) || "null";
            return Z = j.length === 0 ? "[]" : Y ? `[
` + Y + j.join(`,
` + Y) + `
` + D + "]" : "[" + j.join(",") + "]", Y = D, Z;
          }
          if (H && typeof H === "object") {
            W = H.length;
            for (_ = 0; _ < W; _ += 1) if (typeof H[_] === "string") {
              if (G = H[_], Z = O(G, M), Z) j.push(J(G) + (Y ? ": " : ":") + Z);
            }
          } else Object.keys(M).forEach(function (f) {
            var N = O(f, M);
            if (N) j.push(J(f) + (Y ? ": " : ":") + N);
          });
          return Z = j.length === 0 ? "{}" : Y ? `{
` + Y + j.join(`,
` + Y) + `
` + D + "}" : "{" + j.join(",") + "}", Y = D, Z;
      }
    }
    if (typeof vr4.stringify !== "function") vr4.stringify = function (X, $, _) {
      var G;
      if (Y = "", z = "", typeof _ === "number") for (G = 0; G < _; G += 1) z += " ";else if (typeof _ === "string") z = _;
      if (H = $, $ && typeof $ !== "function" && (typeof $ !== "object" || typeof $.length !== "number")) throw Error("JSON.stringify");
      return O("", {
        "": X
      });
    };
  })();
});

// Register to shared state
__$.kr4 = kr4;
