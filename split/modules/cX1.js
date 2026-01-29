// Module: cX1
// Dependencies: m3, ru, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cX1 = v((G4H, V_7) => {
  var ou = __$.m3();
  __$.ru();
  __$.bY();
  var M_7 = V_7.exports = ou.md5 = ou.md5 || {};
  ou.md.md5 = ou.md.algorithms.md5 = M_7;
  M_7.create = function () {
    if (!P_7) VNY();
    var A = null,
      K = ou.util.createBuffer(),
      q = Array(16),
      Y = {
        algorithm: "md5",
        blockLength: 64,
        digestLength: 16,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8
      };
    return Y.start = function () {
      Y.messageLength = 0, Y.fullMessageLength = Y.messageLength64 = [];
      var z = Y.messageLengthSize / 4;
      for (var w = 0; w < z; ++w) Y.fullMessageLength.push(0);
      return K = ou.util.createBuffer(), A = {
        h0: 1732584193,
        h1: 4023233417,
        h2: 2562383102,
        h3: 271733878
      }, Y;
    }, Y.start(), Y.update = function (z, w) {
      if (w === "utf8") z = ou.util.encodeUtf8(z);
      var H = z.length;
      Y.messageLength += H, H = [H / 4294967296 >>> 0, H >>> 0];
      for (var J = Y.fullMessageLength.length - 1; J >= 0; --J) Y.fullMessageLength[J] += H[1], H[1] = H[0] + (Y.fullMessageLength[J] / 4294967296 >>> 0), Y.fullMessageLength[J] = Y.fullMessageLength[J] >>> 0, H[0] = H[1] / 4294967296 >>> 0;
      if (K.putBytes(z), j_7(A, q, K), K.read > 2048 || K.length() === 0) K.compact();
      return Y;
    }, Y.digest = function () {
      var z = ou.util.createBuffer();
      z.putBytes(K.bytes());
      var w = Y.fullMessageLength[Y.fullMessageLength.length - 1] + Y.messageLengthSize,
        H = w & Y.blockLength - 1;
      z.putBytes(dD6.substr(0, Y.blockLength - H));
      var J,
        O = 0;
      for (var X = Y.fullMessageLength.length - 1; X >= 0; --X) J = Y.fullMessageLength[X] * 8 + O, O = J / 4294967296 >>> 0, z.putInt32Le(J >>> 0);
      var $ = {
        h0: A.h0,
        h1: A.h1,
        h2: A.h2,
        h3: A.h3
      };
      j_7($, q, z);
      var _ = ou.util.createBuffer();
      return _.putInt32Le($.h0), _.putInt32Le($.h1), _.putInt32Le($.h2), _.putInt32Le($.h3), _;
    }, Y;
  };
  var dD6 = null,
    dX1 = null,
    jBA = null,
    RZA = null,
    P_7 = !1;
  function VNY() {
    dD6 = String.fromCharCode(128), dD6 += ou.util.fillString(String.fromCharCode(0), 64), dX1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 6, 11, 0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 5, 8, 11, 14, 1, 4, 7, 10, 13, 0, 3, 6, 9, 12, 15, 2, 0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 4, 11, 2, 9], jBA = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21], RZA = Array(64);
    for (var A = 0; A < 64; ++A) RZA[A] = Math.floor(Math.abs(Math.sin(A + 1)) * 4294967296);
    P_7 = !0;
  }
  function j_7(A, K, q) {
    var Y,
      z,
      w,
      H,
      J,
      O,
      X,
      $,
      _ = q.length();
    while (_ >= 64) {
      z = A.h0, w = A.h1, H = A.h2, J = A.h3;
      for ($ = 0; $ < 16; ++$) K[$] = q.getInt32Le(), O = J ^ w & (H ^ J), Y = z + O + RZA[$] + K[$], X = jBA[$], z = J, J = H, H = w, w += Y << X | Y >>> 32 - X;
      for (; $ < 32; ++$) O = H ^ J & (w ^ H), Y = z + O + RZA[$] + K[dX1[$]], X = jBA[$], z = J, J = H, H = w, w += Y << X | Y >>> 32 - X;
      for (; $ < 48; ++$) O = w ^ H ^ J, Y = z + O + RZA[$] + K[dX1[$]], X = jBA[$], z = J, J = H, H = w, w += Y << X | Y >>> 32 - X;
      for (; $ < 64; ++$) O = H ^ (w | ~J), Y = z + O + RZA[$] + K[dX1[$]], X = jBA[$], z = J, J = H, H = w, w += Y << X | Y >>> 32 - X;
      A.h0 = A.h0 + z | 0, A.h1 = A.h1 + w | 0, A.h2 = A.h2 + H | 0, A.h3 = A.h3 + J | 0, _ -= 64;
    }
  }
});

// Register to shared state
__$.cX1 = cX1;
