// Module: oD6
// Dependencies: m3, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oD6 = v((V4H, b_7) => {
  var Mf = __$.m3();
  __$.bY();
  var rD6 = [217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160, 216, 157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136, 68, 139, 251, 162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141, 9, 129, 125, 50, 189, 143, 64, 235, 134, 183, 123, 11, 240, 149, 33, 34, 92, 107, 78, 130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86, 192, 20, 167, 140, 241, 220, 18, 117, 202, 31, 59, 190, 228, 209, 66, 61, 212, 48, 163, 60, 182, 38, 111, 191, 14, 218, 70, 105, 7, 87, 39, 242, 29, 155, 188, 148, 67, 3, 248, 17, 199, 246, 144, 239, 62, 231, 6, 195, 213, 47, 200, 102, 30, 215, 8, 232, 234, 222, 128, 82, 238, 247, 132, 170, 114, 172, 53, 77, 106, 42, 150, 26, 210, 113, 90, 21, 73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65, 110, 15, 81, 203, 204, 36, 145, 175, 80, 161, 244, 112, 57, 153, 124, 58, 133, 35, 184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152, 227, 138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207, 225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56, 52, 27, 171, 51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219, 71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173],
    S_7 = [1, 2, 3, 5],
    bNY = function (A, K) {
      return A << K & 65535 | (A & 65535) >> 16 - K;
    },
    xNY = function (A, K) {
      return (A & 65535) >> K | A << 16 - K & 65535;
    };
  b_7.exports = Mf.rc2 = Mf.rc2 || {};
  Mf.rc2.expandKey = function (A, K) {
    if (typeof A === "string") A = Mf.util.createBuffer(A);
    K = K || 128;
    var q = A,
      Y = A.length(),
      z = K,
      w = Math.ceil(z / 8),
      H = 255 >> (z & 7),
      J;
    for (J = Y; J < 128; J++) q.putByte(rD6[q.at(J - 1) + q.at(J - Y) & 255]);
    q.setAt(128 - w, rD6[q.at(128 - w) & H]);
    for (J = 127 - w; J >= 0; J--) q.setAt(J, rD6[q.at(J + 1) ^ q.at(J + w)]);
    return q;
  };
  var h_7 = function (A, K, q) {
    var Y = !1,
      z = null,
      w = null,
      H = null,
      J,
      O,
      X,
      $,
      _ = [];
    A = Mf.rc2.expandKey(A, K);
    for (X = 0; X < 64; X++) _.push(A.getInt16Le());
    if (q) J = function (W) {
      for (X = 0; X < 4; X++) W[X] += _[$] + (W[(X + 3) % 4] & W[(X + 2) % 4]) + (~W[(X + 3) % 4] & W[(X + 1) % 4]), W[X] = bNY(W[X], S_7[X]), $++;
    }, O = function (W) {
      for (X = 0; X < 4; X++) W[X] += _[W[(X + 3) % 4] & 63];
    };else J = function (W) {
      for (X = 3; X >= 0; X--) W[X] = xNY(W[X], S_7[X]), W[X] -= _[$] + (W[(X + 3) % 4] & W[(X + 2) % 4]) + (~W[(X + 3) % 4] & W[(X + 1) % 4]), $--;
    }, O = function (W) {
      for (X = 3; X >= 0; X--) W[X] -= _[W[(X + 3) % 4] & 63];
    };
    var G = function (W) {
        var D = [];
        for (X = 0; X < 4; X++) {
          var j = z.getInt16Le();
          if (H !== null) if (q) j ^= H.getInt16Le();else H.putInt16Le(j);
          D.push(j & 65535);
        }
        $ = q ? 0 : 63;
        for (var M = 0; M < W.length; M++) for (var P = 0; P < W[M][0]; P++) W[M][1](D);
        for (X = 0; X < 4; X++) {
          if (H !== null) if (q) H.putInt16Le(D[X]);else D[X] ^= H.getInt16Le();
          w.putInt16Le(D[X]);
        }
      },
      Z = null;
    return Z = {
      start: function (W, D) {
        if (W) {
          if (typeof W === "string") W = Mf.util.createBuffer(W);
        }
        Y = !1, z = Mf.util.createBuffer(), w = D || new Mf.util.createBuffer(), H = W, Z.output = w;
      },
      update: function (W) {
        if (!Y) z.putBuffer(W);
        while (z.length() >= 8) G([[5, J], [1, O], [6, J], [1, O], [5, J]]);
      },
      finish: function (W) {
        var D = !0;
        if (q) if (W) D = W(8, z, !q);else {
          var j = z.length() === 8 ? 8 : 8 - z.length();
          z.fillWithByte(j, j);
        }
        if (D) Y = !0, Z.update();
        if (!q) {
          if (D = z.length() === 0, D) if (W) D = W(8, w, !q);else {
            var M = w.length(),
              P = w.at(M - 1);
            if (P > M) D = !1;else w.truncate(P);
          }
        }
        return D;
      }
    }, Z;
  };
  Mf.rc2.startEncrypting = function (A, K, q) {
    var Y = Mf.rc2.createEncryptionCipher(A, 128);
    return Y.start(K, q), Y;
  };
  Mf.rc2.createEncryptionCipher = function (A, K) {
    return h_7(A, K, !0);
  };
  Mf.rc2.startDecrypting = function (A, K, q) {
    var Y = Mf.rc2.createDecryptionCipher(A, 128);
    return Y.start(K, q), Y;
  };
  Mf.rc2.createDecryptionCipher = function (A, K) {
    return h_7(A, K, !1);
  };
});

// Register to shared state
__$.oD6 = oD6;
