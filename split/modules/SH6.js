// Module: SH6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SH6 = v(Os9 => {
  Os9.byteLength = qs9;
  Os9.toByteArray = zs9;
  Os9.fromByteArray = Js9;
  var Gu = [],
    _C = [],
    Ks9 = typeof Uint8Array < "u" ? Uint8Array : Array,
    yH6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (Xo = 0, IH6 = yH6.length; Xo < IH6; ++Xo) Gu[Xo] = yH6[Xo], _C[yH6.charCodeAt(Xo)] = Xo;
  var Xo, IH6;
  _C[45] = 62;
  _C[95] = 63;
  function sr4(A) {
    var K = A.length;
    if (K % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var q = A.indexOf("=");
    if (q === -1) q = K;
    var Y = q === K ? 0 : 4 - q % 4;
    return [q, Y];
  }
  function qs9(A) {
    var K = sr4(A),
      q = K[0],
      Y = K[1];
    return (q + Y) * 3 / 4 - Y;
  }
  function Ys9(A, K, q) {
    return (K + q) * 3 / 4 - q;
  }
  function zs9(A) {
    var K,
      q = sr4(A),
      Y = q[0],
      z = q[1],
      w = new Ks9(Ys9(A, Y, z)),
      H = 0,
      J = z > 0 ? Y - 4 : Y,
      O;
    for (O = 0; O < J; O += 4) K = _C[A.charCodeAt(O)] << 18 | _C[A.charCodeAt(O + 1)] << 12 | _C[A.charCodeAt(O + 2)] << 6 | _C[A.charCodeAt(O + 3)], w[H++] = K >> 16 & 255, w[H++] = K >> 8 & 255, w[H++] = K & 255;
    if (z === 2) K = _C[A.charCodeAt(O)] << 2 | _C[A.charCodeAt(O + 1)] >> 4, w[H++] = K & 255;
    if (z === 1) K = _C[A.charCodeAt(O)] << 10 | _C[A.charCodeAt(O + 1)] << 4 | _C[A.charCodeAt(O + 2)] >> 2, w[H++] = K >> 8 & 255, w[H++] = K & 255;
    return w;
  }
  function ws9(A) {
    return Gu[A >> 18 & 63] + Gu[A >> 12 & 63] + Gu[A >> 6 & 63] + Gu[A & 63];
  }
  function Hs9(A, K, q) {
    var Y,
      z = [];
    for (var w = K; w < q; w += 3) Y = (A[w] << 16 & 16711680) + (A[w + 1] << 8 & 65280) + (A[w + 2] & 255), z.push(ws9(Y));
    return z.join("");
  }
  function Js9(A) {
    var K,
      q = A.length,
      Y = q % 3,
      z = [],
      w = 16383;
    for (var H = 0, J = q - Y; H < J; H += w) z.push(Hs9(A, H, H + w > J ? J : H + w));
    if (Y === 1) K = A[q - 1], z.push(Gu[K >> 2] + Gu[K << 4 & 63] + "==");else if (Y === 2) K = (A[q - 2] << 8) + A[q - 1], z.push(Gu[K >> 10] + Gu[K >> 4 & 63] + Gu[K << 2 & 63] + "=");
    return z.join("");
  }
});

// Register to shared state
__$.SH6 = SH6;
