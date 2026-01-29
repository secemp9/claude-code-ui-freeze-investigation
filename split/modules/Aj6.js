// Module: Aj6
// Dependencies: m3, bY, uC, SZA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Aj6 = v((T4H, n_7) => {
  var AB = __$.m3();
  __$.bY();
  __$.uC();
  __$.SZA();
  var i_7 = n_7.exports = AB.pkcs1 = AB.pkcs1 || {};
  i_7.encode_rsa_oaep = function (A, K, q) {
    var Y, z, w, H;
    if (typeof q === "string") Y = q, z = arguments[3] || void 0, w = arguments[4] || void 0;else if (q) {
      if (Y = q.label || void 0, z = q.seed || void 0, w = q.md || void 0, q.mgf1 && q.mgf1.md) H = q.mgf1.md;
    }
    if (!w) w = AB.md.sha1.create();else w.start();
    if (!H) H = w;
    var J = Math.ceil(A.n.bitLength() / 8),
      O = J - 2 * w.digestLength - 2;
    if (K.length > O) {
      var X = Error("RSAES-OAEP input message length is too long.");
      throw X.length = K.length, X.maxLength = O, X;
    }
    if (!Y) Y = "";
    w.update(Y, "raw");
    var $ = w.digest(),
      _ = "",
      G = O - K.length;
    for (var Z = 0; Z < G; Z++) _ += "\x00";
    var W = $.getBytes() + _ + "\x01" + K;
    if (!z) z = AB.random.getBytes(w.digestLength);else if (z.length !== w.digestLength) {
      var X = Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.");
      throw X.seedLength = z.length, X.digestLength = w.digestLength, X;
    }
    var D = tX1(z, J - w.digestLength - 1, H),
      j = AB.util.xorBytes(W, D, W.length),
      M = tX1(j, w.digestLength, H),
      P = AB.util.xorBytes(z, M, z.length);
    return "\x00" + P + j;
  };
  i_7.decode_rsa_oaep = function (A, K, q) {
    var Y, z, w;
    if (typeof q === "string") Y = q, z = arguments[3] || void 0;else if (q) {
      if (Y = q.label || void 0, z = q.md || void 0, q.mgf1 && q.mgf1.md) w = q.mgf1.md;
    }
    var H = Math.ceil(A.n.bitLength() / 8);
    if (K.length !== H) {
      var j = Error("RSAES-OAEP encoded message length is invalid.");
      throw j.length = K.length, j.expectedLength = H, j;
    }
    if (z === void 0) z = AB.md.sha1.create();else z.start();
    if (!w) w = z;
    if (H < 2 * z.digestLength + 2) throw Error("RSAES-OAEP key is too short for the hash function.");
    if (!Y) Y = "";
    z.update(Y, "raw");
    var J = z.digest().getBytes(),
      O = K.charAt(0),
      X = K.substring(1, z.digestLength + 1),
      $ = K.substring(1 + z.digestLength),
      _ = tX1($, z.digestLength, w),
      G = AB.util.xorBytes(X, _, X.length),
      Z = tX1(G, H - z.digestLength - 1, w),
      W = AB.util.xorBytes($, Z, $.length),
      D = W.substring(0, z.digestLength),
      j = O !== "\x00";
    for (var M = 0; M < z.digestLength; ++M) j |= J.charAt(M) !== D.charAt(M);
    var P = 1,
      f = z.digestLength;
    for (var N = z.digestLength; N < W.length; N++) {
      var T = W.charCodeAt(N),
        C = T & 1 ^ 1,
        R = P ? 65534 : 0;
      j |= T & R, P = P & C, f += P;
    }
    if (j || W.charCodeAt(f) !== 1) throw Error("Invalid RSAES-OAEP padding.");
    return W.substring(f + 1);
  };
  function tX1(A, K, q) {
    if (!q) q = AB.md.sha1.create();
    var Y = "",
      z = Math.ceil(K / q.digestLength);
    for (var w = 0; w < z; ++w) {
      var H = String.fromCharCode(w >> 24 & 255, w >> 16 & 255, w >> 8 & 255, w & 255);
      q.start(), q.update(A + H), Y += q.digest().getBytes();
    }
    return Y.substring(0, K);
  }
});

// Register to shared state
__$.Aj6 = Aj6;
