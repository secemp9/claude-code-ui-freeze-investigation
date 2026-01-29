// Module: oD8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oD8 = v(rD8 => {
  Object.defineProperty(rD8, "__esModule", {
    value: !0
  });
  function cD8(A, K) {
    let q = 0;
    for (let Y = A.length - 1; Y >= 0; Y--) {
      let z = A[Y];
      if (z === ".") A.splice(Y, 1);else if (z === "..") A.splice(Y, 1), q++;else if (q) A.splice(Y, 1), q--;
    }
    if (K) for (; q--; q) A.unshift("..");
    return A;
  }
  var Jyq = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
  function lD8(A) {
    let K = A.length > 1024 ? `<truncated>${A.slice(-1024)}` : A,
      q = Jyq.exec(K);
    return q ? q.slice(1) : [];
  }
  function Qu1(...A) {
    let K = "",
      q = !1;
    for (let Y = A.length - 1; Y >= -1 && !q; Y--) {
      let z = Y >= 0 ? A[Y] : "/";
      if (!z) continue;
      K = `${z}/${K}`, q = z.charAt(0) === "/";
    }
    return K = cD8(K.split("/").filter(Y => !!Y), !q).join("/"), (q ? "/" : "") + K || ".";
  }
  function dD8(A) {
    let K = 0;
    for (; K < A.length; K++) if (A[K] !== "") break;
    let q = A.length - 1;
    for (; q >= 0; q--) if (A[q] !== "") break;
    if (K > q) return [];
    return A.slice(K, q - K + 1);
  }
  function Oyq(A, K) {
    A = Qu1(A).slice(1), K = Qu1(K).slice(1);
    let q = dD8(A.split("/")),
      Y = dD8(K.split("/")),
      z = Math.min(q.length, Y.length),
      w = z;
    for (let J = 0; J < z; J++) if (q[J] !== Y[J]) {
      w = J;
      break;
    }
    let H = [];
    for (let J = w; J < q.length; J++) H.push("..");
    return H = H.concat(Y.slice(w)), H.join("/");
  }
  function iD8(A) {
    let K = nD8(A),
      q = A.slice(-1) === "/",
      Y = cD8(A.split("/").filter(z => !!z), !K).join("/");
    if (!Y && !K) Y = ".";
    if (Y && q) Y += "/";
    return (K ? "/" : "") + Y;
  }
  function nD8(A) {
    return A.charAt(0) === "/";
  }
  function Xyq(...A) {
    return iD8(A.join("/"));
  }
  function $yq(A) {
    let K = lD8(A),
      q = K[0],
      Y = K[1];
    if (!q && !Y) return ".";
    if (Y) Y = Y.slice(0, Y.length - 1);
    return q + Y;
  }
  function _yq(A, K) {
    let q = lD8(A)[2];
    if (K && q.slice(K.length * -1) === K) q = q.slice(0, q.length - K.length);
    return q;
  }
  rD8.basename = _yq;
  rD8.dirname = $yq;
  rD8.isAbsolute = nD8;
  rD8.join = Xyq;
  rD8.normalizePath = iD8;
  rD8.relative = Oyq;
  rD8.resolve = Qu1;
});

// Register to shared state
__$.oD8 = oD8;
