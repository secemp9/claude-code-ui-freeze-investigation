// Module: SZA
// Dependencies: m3, ru, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SZA = v((N4H, l_7) => {
  var eu = __$.m3();
  __$.ru();
  __$.bY();
  var d_7 = l_7.exports = eu.sha1 = eu.sha1 || {};
  eu.md.sha1 = eu.md.algorithms.sha1 = d_7;
  d_7.create = function () {
    if (!c_7) NvY();
    var A = null,
      K = eu.util.createBuffer(),
      q = Array(80),
      Y = {
        algorithm: "sha1",
        blockLength: 64,
        digestLength: 20,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8
      };
    return Y.start = function () {
      Y.messageLength = 0, Y.fullMessageLength = Y.messageLength64 = [];
      var z = Y.messageLengthSize / 4;
      for (var w = 0; w < z; ++w) Y.fullMessageLength.push(0);
      return K = eu.util.createBuffer(), A = {
        h0: 1732584193,
        h1: 4023233417,
        h2: 2562383102,
        h3: 271733878,
        h4: 3285377520
      }, Y;
    }, Y.start(), Y.update = function (z, w) {
      if (w === "utf8") z = eu.util.encodeUtf8(z);
      var H = z.length;
      Y.messageLength += H, H = [H / 4294967296 >>> 0, H >>> 0];
      for (var J = Y.fullMessageLength.length - 1; J >= 0; --J) Y.fullMessageLength[J] += H[1], H[1] = H[0] + (Y.fullMessageLength[J] / 4294967296 >>> 0), Y.fullMessageLength[J] = Y.fullMessageLength[J] >>> 0, H[0] = H[1] / 4294967296 >>> 0;
      if (K.putBytes(z), p_7(A, q, K), K.read > 2048 || K.length() === 0) K.compact();
      return Y;
    }, Y.digest = function () {
      var z = eu.util.createBuffer();
      z.putBytes(K.bytes());
      var w = Y.fullMessageLength[Y.fullMessageLength.length - 1] + Y.messageLengthSize,
        H = w & Y.blockLength - 1;
      z.putBytes(eD6.substr(0, Y.blockLength - H));
      var J,
        O,
        X = Y.fullMessageLength[0] * 8;
      for (var $ = 0; $ < Y.fullMessageLength.length - 1; ++$) J = Y.fullMessageLength[$ + 1] * 8, O = J / 4294967296 >>> 0, X += O, z.putInt32(X >>> 0), X = J >>> 0;
      z.putInt32(X);
      var _ = {
        h0: A.h0,
        h1: A.h1,
        h2: A.h2,
        h3: A.h3,
        h4: A.h4
      };
      p_7(_, q, z);
      var G = eu.util.createBuffer();
      return G.putInt32(_.h0), G.putInt32(_.h1), G.putInt32(_.h2), G.putInt32(_.h3), G.putInt32(_.h4), G;
    }, Y;
  };
  var eD6 = null,
    c_7 = !1;
  function NvY() {
    eD6 = String.fromCharCode(128), eD6 += eu.util.fillString(String.fromCharCode(0), 64), c_7 = !0;
  }
  function p_7(A, K, q) {
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
      z = A.h0, w = A.h1, H = A.h2, J = A.h3, O = A.h4;
      for ($ = 0; $ < 16; ++$) Y = q.getInt32(), K[$] = Y, X = J ^ w & (H ^ J), Y = (z << 5 | z >>> 27) + X + O + 1518500249 + Y, O = J, J = H, H = (w << 30 | w >>> 2) >>> 0, w = z, z = Y;
      for (; $ < 20; ++$) Y = K[$ - 3] ^ K[$ - 8] ^ K[$ - 14] ^ K[$ - 16], Y = Y << 1 | Y >>> 31, K[$] = Y, X = J ^ w & (H ^ J), Y = (z << 5 | z >>> 27) + X + O + 1518500249 + Y, O = J, J = H, H = (w << 30 | w >>> 2) >>> 0, w = z, z = Y;
      for (; $ < 32; ++$) Y = K[$ - 3] ^ K[$ - 8] ^ K[$ - 14] ^ K[$ - 16], Y = Y << 1 | Y >>> 31, K[$] = Y, X = w ^ H ^ J, Y = (z << 5 | z >>> 27) + X + O + 1859775393 + Y, O = J, J = H, H = (w << 30 | w >>> 2) >>> 0, w = z, z = Y;
      for (; $ < 40; ++$) Y = K[$ - 6] ^ K[$ - 16] ^ K[$ - 28] ^ K[$ - 32], Y = Y << 2 | Y >>> 30, K[$] = Y, X = w ^ H ^ J, Y = (z << 5 | z >>> 27) + X + O + 1859775393 + Y, O = J, J = H, H = (w << 30 | w >>> 2) >>> 0, w = z, z = Y;
      for (; $ < 60; ++$) Y = K[$ - 6] ^ K[$ - 16] ^ K[$ - 28] ^ K[$ - 32], Y = Y << 2 | Y >>> 30, K[$] = Y, X = w & H | J & (w ^ H), Y = (z << 5 | z >>> 27) + X + O + 2400959708 + Y, O = J, J = H, H = (w << 30 | w >>> 2) >>> 0, w = z, z = Y;
      for (; $ < 80; ++$) Y = K[$ - 6] ^ K[$ - 16] ^ K[$ - 28] ^ K[$ - 32], Y = Y << 2 | Y >>> 30, K[$] = Y, X = w ^ H ^ J, Y = (z << 5 | z >>> 27) + X + O + 3395469782 + Y, O = J, J = H, H = (w << 30 | w >>> 2) >>> 0, w = z, z = Y;
      A.h0 = A.h0 + z | 0, A.h1 = A.h1 + w | 0, A.h2 = A.h2 + H | 0, A.h3 = A.h3 + J | 0, A.h4 = A.h4 + O | 0, _ -= 64;
    }
  }
});

// Register to shared state
__$.SZA = SZA;
