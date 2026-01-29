// Module: lD6
// Dependencies: m3, ru, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lD6 = v((j4H, y_7) => {
  var su = __$.m3();
  __$.ru();
  __$.bY();
  var C_7 = y_7.exports = su.sha256 = su.sha256 || {};
  su.md.sha256 = su.md.algorithms.sha256 = C_7;
  C_7.create = function () {
    if (!L_7) SNY();
    var A = null,
      K = su.util.createBuffer(),
      q = Array(64),
      Y = {
        algorithm: "sha256",
        blockLength: 64,
        digestLength: 32,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8
      };
    return Y.start = function () {
      Y.messageLength = 0, Y.fullMessageLength = Y.messageLength64 = [];
      var z = Y.messageLengthSize / 4;
      for (var w = 0; w < z; ++w) Y.fullMessageLength.push(0);
      return K = su.util.createBuffer(), A = {
        h0: 1779033703,
        h1: 3144134277,
        h2: 1013904242,
        h3: 2773480762,
        h4: 1359893119,
        h5: 2600822924,
        h6: 528734635,
        h7: 1541459225
      }, Y;
    }, Y.start(), Y.update = function (z, w) {
      if (w === "utf8") z = su.util.encodeUtf8(z);
      var H = z.length;
      Y.messageLength += H, H = [H / 4294967296 >>> 0, H >>> 0];
      for (var J = Y.fullMessageLength.length - 1; J >= 0; --J) Y.fullMessageLength[J] += H[1], H[1] = H[0] + (Y.fullMessageLength[J] / 4294967296 >>> 0), Y.fullMessageLength[J] = Y.fullMessageLength[J] >>> 0, H[0] = H[1] / 4294967296 >>> 0;
      if (K.putBytes(z), k_7(A, q, K), K.read > 2048 || K.length() === 0) K.compact();
      return Y;
    }, Y.digest = function () {
      var z = su.util.createBuffer();
      z.putBytes(K.bytes());
      var w = Y.fullMessageLength[Y.fullMessageLength.length - 1] + Y.messageLengthSize,
        H = w & Y.blockLength - 1;
      z.putBytes(cD6.substr(0, Y.blockLength - H));
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
        h4: A.h4,
        h5: A.h5,
        h6: A.h6,
        h7: A.h7
      };
      k_7(_, q, z);
      var G = su.util.createBuffer();
      return G.putInt32(_.h0), G.putInt32(_.h1), G.putInt32(_.h2), G.putInt32(_.h3), G.putInt32(_.h4), G.putInt32(_.h5), G.putInt32(_.h6), G.putInt32(_.h7), G;
    }, Y;
  };
  var cD6 = null,
    L_7 = !1,
    R_7 = null;
  function SNY() {
    cD6 = String.fromCharCode(128), cD6 += su.util.fillString(String.fromCharCode(0), 64), R_7 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], L_7 = !0;
  }
  function k_7(A, K, q) {
    var Y,
      z,
      w,
      H,
      J,
      O,
      X,
      $,
      _,
      G,
      Z,
      W,
      D,
      j,
      M,
      P = q.length();
    while (P >= 64) {
      for (X = 0; X < 16; ++X) K[X] = q.getInt32();
      for (; X < 64; ++X) Y = K[X - 2], Y = (Y >>> 17 | Y << 15) ^ (Y >>> 19 | Y << 13) ^ Y >>> 10, z = K[X - 15], z = (z >>> 7 | z << 25) ^ (z >>> 18 | z << 14) ^ z >>> 3, K[X] = Y + K[X - 7] + z + K[X - 16] | 0;
      $ = A.h0, _ = A.h1, G = A.h2, Z = A.h3, W = A.h4, D = A.h5, j = A.h6, M = A.h7;
      for (X = 0; X < 64; ++X) H = (W >>> 6 | W << 26) ^ (W >>> 11 | W << 21) ^ (W >>> 25 | W << 7), J = j ^ W & (D ^ j), w = ($ >>> 2 | $ << 30) ^ ($ >>> 13 | $ << 19) ^ ($ >>> 22 | $ << 10), O = $ & _ | G & ($ ^ _), Y = M + H + J + R_7[X] + K[X], z = w + O, M = j, j = D, D = W, W = Z + Y >>> 0, Z = G, G = _, _ = $, $ = Y + z >>> 0;
      A.h0 = A.h0 + $ | 0, A.h1 = A.h1 + _ | 0, A.h2 = A.h2 + G | 0, A.h3 = A.h3 + Z | 0, A.h4 = A.h4 + W | 0, A.h5 = A.h5 + D | 0, A.h6 = A.h6 + j | 0, A.h7 = A.h7 + M | 0, P -= 64;
    }
  }
});

// Register to shared state
__$.lD6 = lD6;
