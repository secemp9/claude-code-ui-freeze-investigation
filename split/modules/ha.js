// Module: ha
// Dependencies: m3, mX1, gD6, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ha = v((J4H, $_7) => {
  var JH = __$.m3();
  __$.mX1();
  __$.gD6();
  __$.bY();
  $_7.exports = JH.aes = JH.aes || {};
  JH.aes.startEncrypting = function (A, K, q, Y) {
    var z = QX1({
      key: A,
      output: q,
      decrypt: !1,
      mode: Y
    });
    return z.start(K), z;
  };
  JH.aes.createEncryptionCipher = function (A, K) {
    return QX1({
      key: A,
      output: null,
      decrypt: !1,
      mode: K
    });
  };
  JH.aes.startDecrypting = function (A, K, q, Y) {
    var z = QX1({
      key: A,
      output: q,
      decrypt: !0,
      mode: Y
    });
    return z.start(K), z;
  };
  JH.aes.createDecryptionCipher = function (A, K) {
    return QX1({
      key: A,
      output: null,
      decrypt: !0,
      mode: K
    });
  };
  JH.aes.Algorithm = function (A, K) {
    if (!UD6) O_7();
    var q = this;
    q.name = A, q.mode = new K({
      blockSize: 16,
      cipher: {
        encrypt: function (Y, z) {
          return QD6(q._w, Y, z, !1);
        },
        decrypt: function (Y, z) {
          return QD6(q._w, Y, z, !0);
        }
      }
    }), q._init = !1;
  };
  JH.aes.Algorithm.prototype.initialize = function (A) {
    if (this._init) return;
    var K = A.key,
      q;
    if (typeof K === "string" && (K.length === 16 || K.length === 24 || K.length === 32)) K = JH.util.createBuffer(K);else if (JH.util.isArray(K) && (K.length === 16 || K.length === 24 || K.length === 32)) {
      q = K, K = JH.util.createBuffer();
      for (var Y = 0; Y < q.length; ++Y) K.putByte(q[Y]);
    }
    if (!JH.util.isArray(K)) {
      q = K, K = [];
      var z = q.length();
      if (z === 16 || z === 24 || z === 32) {
        z = z >>> 2;
        for (var Y = 0; Y < z; ++Y) K.push(q.getInt32());
      }
    }
    if (!JH.util.isArray(K) || !(K.length === 4 || K.length === 6 || K.length === 8)) throw Error("Invalid key parameter.");
    var w = this.mode.name,
      H = ["CFB", "OFB", "CTR", "GCM"].indexOf(w) !== -1;
    this._w = X_7(K, A.decrypt && !H), this._init = !0;
  };
  JH.aes._expandKey = function (A, K) {
    if (!UD6) O_7();
    return X_7(A, K);
  };
  JH.aes._updateBlock = QD6;
  CZA("AES-ECB", JH.cipher.modes.ecb);
  CZA("AES-CBC", JH.cipher.modes.cbc);
  CZA("AES-CFB", JH.cipher.modes.cfb);
  CZA("AES-OFB", JH.cipher.modes.ofb);
  CZA("AES-CTR", JH.cipher.modes.ctr);
  CZA("AES-GCM", JH.cipher.modes.gcm);
  function CZA(A, K) {
    var q = function () {
      return new JH.aes.Algorithm(A, K);
    };
    JH.cipher.registerAlgorithm(A, q);
  }
  var UD6 = !1,
    kZA = 4,
    pM,
    FD6,
    J_7,
    TqA,
    bI;
  function O_7() {
    UD6 = !0, J_7 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    var A = Array(256);
    for (var K = 0; K < 128; ++K) A[K] = K << 1, A[K + 128] = K + 128 << 1 ^ 283;
    pM = Array(256), FD6 = Array(256), TqA = [,,,,], bI = [,,,,];
    for (var K = 0; K < 4; ++K) TqA[K] = Array(256), bI[K] = Array(256);
    var q = 0,
      Y = 0,
      z,
      w,
      H,
      J,
      O,
      X,
      $;
    for (var K = 0; K < 256; ++K) {
      J = Y ^ Y << 1 ^ Y << 2 ^ Y << 3 ^ Y << 4, J = J >> 8 ^ J & 255 ^ 99, pM[q] = J, FD6[J] = q, O = A[J], z = A[q], w = A[z], H = A[w], X = O << 24 ^ J << 16 ^ J << 8 ^ (J ^ O), $ = (z ^ w ^ H) << 24 ^ (q ^ H) << 16 ^ (q ^ w ^ H) << 8 ^ (q ^ z ^ H);
      for (var _ = 0; _ < 4; ++_) TqA[_][q] = X, bI[_][J] = $, X = X << 24 | X >>> 8, $ = $ << 24 | $ >>> 8;
      if (q === 0) q = Y = 1;else q = z ^ A[A[A[z ^ H]]], Y ^= A[A[Y]];
    }
  }
  function X_7(A, K) {
    var q = A.slice(0),
      Y,
      z = 1,
      w = q.length,
      H = w + 6 + 1,
      J = kZA * H;
    for (var O = w; O < J; ++O) {
      if (Y = q[O - 1], O % w === 0) Y = pM[Y >>> 16 & 255] << 24 ^ pM[Y >>> 8 & 255] << 16 ^ pM[Y & 255] << 8 ^ pM[Y >>> 24] ^ J_7[z] << 24, z++;else if (w > 6 && O % w === 4) Y = pM[Y >>> 24] << 24 ^ pM[Y >>> 16 & 255] << 16 ^ pM[Y >>> 8 & 255] << 8 ^ pM[Y & 255];
      q[O] = q[O - w] ^ Y;
    }
    if (K) {
      var X,
        $ = bI[0],
        _ = bI[1],
        G = bI[2],
        Z = bI[3],
        W = q.slice(0);
      J = q.length;
      for (var O = 0, D = J - kZA; O < J; O += kZA, D -= kZA) if (O === 0 || O === J - kZA) W[O] = q[D], W[O + 1] = q[D + 3], W[O + 2] = q[D + 2], W[O + 3] = q[D + 1];else for (var j = 0; j < kZA; ++j) X = q[D + j], W[O + (3 & -j)] = $[pM[X >>> 24]] ^ _[pM[X >>> 16 & 255]] ^ G[pM[X >>> 8 & 255]] ^ Z[pM[X & 255]];
      q = W;
    }
    return q;
  }
  function QD6(A, K, q, Y) {
    var z = A.length / 4 - 1,
      w,
      H,
      J,
      O,
      X;
    if (Y) w = bI[0], H = bI[1], J = bI[2], O = bI[3], X = FD6;else w = TqA[0], H = TqA[1], J = TqA[2], O = TqA[3], X = pM;
    var $, _, G, Z, W, D, j;
    $ = K[0] ^ A[0], _ = K[Y ? 3 : 1] ^ A[1], G = K[2] ^ A[2], Z = K[Y ? 1 : 3] ^ A[3];
    var M = 3;
    for (var P = 1; P < z; ++P) W = w[$ >>> 24] ^ H[_ >>> 16 & 255] ^ J[G >>> 8 & 255] ^ O[Z & 255] ^ A[++M], D = w[_ >>> 24] ^ H[G >>> 16 & 255] ^ J[Z >>> 8 & 255] ^ O[$ & 255] ^ A[++M], j = w[G >>> 24] ^ H[Z >>> 16 & 255] ^ J[$ >>> 8 & 255] ^ O[_ & 255] ^ A[++M], Z = w[Z >>> 24] ^ H[$ >>> 16 & 255] ^ J[_ >>> 8 & 255] ^ O[G & 255] ^ A[++M], $ = W, _ = D, G = j;
    q[0] = X[$ >>> 24] << 24 ^ X[_ >>> 16 & 255] << 16 ^ X[G >>> 8 & 255] << 8 ^ X[Z & 255] ^ A[++M], q[Y ? 3 : 1] = X[_ >>> 24] << 24 ^ X[G >>> 16 & 255] << 16 ^ X[Z >>> 8 & 255] << 8 ^ X[$ & 255] ^ A[++M], q[2] = X[G >>> 24] << 24 ^ X[Z >>> 16 & 255] << 16 ^ X[$ >>> 8 & 255] << 8 ^ X[_ & 255] ^ A[++M], q[Y ? 1 : 3] = X[Z >>> 24] << 24 ^ X[$ >>> 16 & 255] << 16 ^ X[_ >>> 8 & 255] << 8 ^ X[G & 255] ^ A[++M];
  }
  function QX1(A) {
    A = A || {};
    var K = (A.mode || "CBC").toUpperCase(),
      q = "AES-" + K,
      Y;
    if (A.decrypt) Y = JH.cipher.createDecipher(q, A.key);else Y = JH.cipher.createCipher(q, A.key);
    var z = Y.start;
    return Y.start = function (w, H) {
      var J = null;
      if (H instanceof JH.util.ByteBuffer) J = H, H = {};
      H = H || {}, H.output = J, H.iv = w, z.call(Y, H);
    }, Y;
  }
});

// Register to shared state
__$.ha = ha;
