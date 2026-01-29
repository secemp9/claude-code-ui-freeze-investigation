// Module: mN6
// Dependencies: zj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mN6 = v((ODH, zR7) => {
  var SiY = __$.zj(),
    BN6 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
  function hiY(A) {
    if (A === null) return !1;
    var K,
      q,
      Y = 0,
      z = A.length,
      w = BN6;
    for (q = 0; q < z; q++) {
      if (K = w.indexOf(A.charAt(q)), K > 64) continue;
      if (K < 0) return !1;
      Y += 6;
    }
    return Y % 8 === 0;
  }
  function biY(A) {
    var K,
      q,
      Y = A.replace(/[\r\n=]/g, ""),
      z = Y.length,
      w = BN6,
      H = 0,
      J = [];
    for (K = 0; K < z; K++) {
      if (K % 4 === 0 && K) J.push(H >> 16 & 255), J.push(H >> 8 & 255), J.push(H & 255);
      H = H << 6 | w.indexOf(Y.charAt(K));
    }
    if (q = z % 4 * 6, q === 0) J.push(H >> 16 & 255), J.push(H >> 8 & 255), J.push(H & 255);else if (q === 18) J.push(H >> 10 & 255), J.push(H >> 2 & 255);else if (q === 12) J.push(H >> 4 & 255);
    return new Uint8Array(J);
  }
  function xiY(A) {
    var K = "",
      q = 0,
      Y,
      z,
      w = A.length,
      H = BN6;
    for (Y = 0; Y < w; Y++) {
      if (Y % 3 === 0 && Y) K += H[q >> 18 & 63], K += H[q >> 12 & 63], K += H[q >> 6 & 63], K += H[q & 63];
      q = (q << 8) + A[Y];
    }
    if (z = w % 3, z === 0) K += H[q >> 18 & 63], K += H[q >> 12 & 63], K += H[q >> 6 & 63], K += H[q & 63];else if (z === 2) K += H[q >> 10 & 63], K += H[q >> 4 & 63], K += H[q << 2 & 63], K += H[64];else if (z === 1) K += H[q >> 2 & 63], K += H[q << 4 & 63], K += H[64], K += H[64];
    return K;
  }
  function uiY(A) {
    return Object.prototype.toString.call(A) === "[object Uint8Array]";
  }
  zR7.exports = new SiY("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: hiY,
    construct: biY,
    predicate: uiY,
    represent: xiY
  });
});

// Register to shared state
__$.mN6 = mN6;
