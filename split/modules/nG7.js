// Module: nG7
// Dependencies: m3, VBA, uC, Nj6, bY, uG7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nG7 = v((m4H, iG7) => {
  var wW = __$.m3();
  __$.VBA();
  __$.uC();
  __$.Nj6();
  __$.bY();
  var QG7 = __$.uG7(),
    yEY = QG7.publicKeyValidator,
    IEY = QG7.privateKeyValidator;
  if (typeof Ej6 > "u") Ej6 = wW.jsbn.BigInteger;
  var Ej6,
    kj6 = wW.util.ByteBuffer,
    Pf = typeof Buffer > "u" ? Uint8Array : Buffer;
  wW.pki = wW.pki || {};
  iG7.exports = wW.pki.ed25519 = wW.ed25519 = wW.ed25519 || {};
  var Q9 = wW.ed25519;
  Q9.constants = {};
  Q9.constants.PUBLIC_KEY_BYTE_LENGTH = 32;
  Q9.constants.PRIVATE_KEY_BYTE_LENGTH = 64;
  Q9.constants.SEED_BYTE_LENGTH = 32;
  Q9.constants.SIGN_BYTE_LENGTH = 64;
  Q9.constants.HASH_BYTE_LENGTH = 64;
  Q9.generateKeyPair = function (A) {
    A = A || {};
    var K = A.seed;
    if (K === void 0) K = wW.random.getBytesSync(Q9.constants.SEED_BYTE_LENGTH);else if (typeof K === "string") {
      if (K.length !== Q9.constants.SEED_BYTE_LENGTH) throw TypeError('"seed" must be ' + Q9.constants.SEED_BYTE_LENGTH + " bytes in length.");
    } else if (!(K instanceof Uint8Array)) throw TypeError('"seed" must be a node.js Buffer, Uint8Array, or a binary string.');
    K = Dp({
      message: K,
      encoding: "binary"
    });
    var q = new Pf(Q9.constants.PUBLIC_KEY_BYTE_LENGTH),
      Y = new Pf(Q9.constants.PRIVATE_KEY_BYTE_LENGTH);
    for (var z = 0; z < 32; ++z) Y[z] = K[z];
    return xEY(q, Y), {
      publicKey: q,
      privateKey: Y
    };
  };
  Q9.privateKeyFromAsn1 = function (A) {
    var K = {},
      q = [],
      Y = wW.asn1.validate(A, IEY, K, q);
    if (!Y) {
      var z = Error("Invalid Key.");
      throw z.errors = q, z;
    }
    var w = wW.asn1.derToOid(K.privateKeyOid),
      H = wW.oids.EdDSA25519;
    if (w !== H) throw Error('Invalid OID "' + w + '"; OID must be "' + H + '".');
    var J = K.privateKey,
      O = Dp({
        message: wW.asn1.fromDer(J).value,
        encoding: "binary"
      });
    return {
      privateKeyBytes: O
    };
  };
  Q9.publicKeyFromAsn1 = function (A) {
    var K = {},
      q = [],
      Y = wW.asn1.validate(A, yEY, K, q);
    if (!Y) {
      var z = Error("Invalid Key.");
      throw z.errors = q, z;
    }
    var w = wW.asn1.derToOid(K.publicKeyOid),
      H = wW.oids.EdDSA25519;
    if (w !== H) throw Error('Invalid OID "' + w + '"; OID must be "' + H + '".');
    var J = K.ed25519PublicKey;
    if (J.length !== Q9.constants.PUBLIC_KEY_BYTE_LENGTH) throw Error("Key length is invalid.");
    return Dp({
      message: J,
      encoding: "binary"
    });
  };
  Q9.publicKeyFromPrivateKey = function (A) {
    A = A || {};
    var K = Dp({
      message: A.privateKey,
      encoding: "binary"
    });
    if (K.length !== Q9.constants.PRIVATE_KEY_BYTE_LENGTH) throw TypeError('"options.privateKey" must have a byte length of ' + Q9.constants.PRIVATE_KEY_BYTE_LENGTH);
    var q = new Pf(Q9.constants.PUBLIC_KEY_BYTE_LENGTH);
    for (var Y = 0; Y < q.length; ++Y) q[Y] = K[32 + Y];
    return q;
  };
  Q9.sign = function (A) {
    A = A || {};
    var K = Dp(A),
      q = Dp({
        message: A.privateKey,
        encoding: "binary"
      });
    if (q.length === Q9.constants.SEED_BYTE_LENGTH) {
      var Y = Q9.generateKeyPair({
        seed: q
      });
      q = Y.privateKey;
    } else if (q.length !== Q9.constants.PRIVATE_KEY_BYTE_LENGTH) throw TypeError('"options.privateKey" must have a byte length of ' + Q9.constants.SEED_BYTE_LENGTH + " or " + Q9.constants.PRIVATE_KEY_BYTE_LENGTH);
    var z = new Pf(Q9.constants.SIGN_BYTE_LENGTH + K.length);
    uEY(z, K, K.length, q);
    var w = new Pf(Q9.constants.SIGN_BYTE_LENGTH);
    for (var H = 0; H < w.length; ++H) w[H] = z[H];
    return w;
  };
  Q9.verify = function (A) {
    A = A || {};
    var K = Dp(A);
    if (A.signature === void 0) throw TypeError('"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.');
    var q = Dp({
      message: A.signature,
      encoding: "binary"
    });
    if (q.length !== Q9.constants.SIGN_BYTE_LENGTH) throw TypeError('"options.signature" must have a byte length of ' + Q9.constants.SIGN_BYTE_LENGTH);
    var Y = Dp({
      message: A.publicKey,
      encoding: "binary"
    });
    if (Y.length !== Q9.constants.PUBLIC_KEY_BYTE_LENGTH) throw TypeError('"options.publicKey" must have a byte length of ' + Q9.constants.PUBLIC_KEY_BYTE_LENGTH);
    var z = new Pf(Q9.constants.SIGN_BYTE_LENGTH + K.length),
      w = new Pf(Q9.constants.SIGN_BYTE_LENGTH + K.length),
      H;
    for (H = 0; H < Q9.constants.SIGN_BYTE_LENGTH; ++H) z[H] = q[H];
    for (H = 0; H < K.length; ++H) z[H + Q9.constants.SIGN_BYTE_LENGTH] = K[H];
    return BEY(w, z, z.length, Y) >= 0;
  };
  function Dp(A) {
    var K = A.message;
    if (K instanceof Uint8Array || K instanceof Pf) return K;
    var q = A.encoding;
    if (K === void 0) if (A.md) K = A.md.digest().getBytes(), q = "binary";else throw TypeError('"options.message" or "options.md" not specified.');
    if (typeof K === "string" && !q) throw TypeError('"options.encoding" must be "binary" or "utf8".');
    if (typeof K === "string") {
      if (typeof Buffer < "u") return Buffer.from(K, q);
      K = new kj6(K, q);
    } else if (!(K instanceof kj6)) throw TypeError('"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.');
    var Y = new Pf(K.length());
    for (var z = 0; z < Y.length; ++z) Y[z] = K.at(z);
    return Y;
  }
  var Cj6 = kq(),
    O$1 = kq([1]),
    SEY = kq([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
    hEY = kq([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
    BG7 = kq([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
    mG7 = kq([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
    Tj6 = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]),
    bEY = kq([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
  function kBA(A, K) {
    var q = wW.md.sha512.create(),
      Y = new kj6(A);
    q.update(Y.getBytes(K), "binary");
    var z = q.digest().getBytes();
    if (typeof Buffer < "u") return Buffer.from(z, "binary");
    var w = new Pf(Q9.constants.HASH_BYTE_LENGTH);
    for (var H = 0; H < 64; ++H) w[H] = z.charCodeAt(H);
    return w;
  }
  function xEY(A, K) {
    var q = [kq(), kq(), kq(), kq()],
      Y,
      z = kBA(K, 32);
    z[0] &= 248, z[31] &= 127, z[31] |= 64, Ij6(q, z), yj6(A, q);
    for (Y = 0; Y < 32; ++Y) K[Y + 32] = A[Y];
    return 0;
  }
  function uEY(A, K, q, Y) {
    var z,
      w,
      H = new Float64Array(64),
      J = [kq(), kq(), kq(), kq()],
      O = kBA(Y, 32);
    O[0] &= 248, O[31] &= 127, O[31] |= 64;
    var X = q + 64;
    for (z = 0; z < q; ++z) A[64 + z] = K[z];
    for (z = 0; z < 32; ++z) A[32 + z] = O[32 + z];
    var $ = kBA(A.subarray(32), q + 32);
    Lj6($), Ij6(J, $), yj6(A, J);
    for (z = 32; z < 64; ++z) A[z] = Y[z];
    var _ = kBA(A, q + 64);
    Lj6(_);
    for (z = 32; z < 64; ++z) H[z] = 0;
    for (z = 0; z < 32; ++z) H[z] = $[z];
    for (z = 0; z < 32; ++z) for (w = 0; w < 32; w++) H[z + w] += _[z] * O[w];
    return UG7(A.subarray(32), H), X;
  }
  function BEY(A, K, q, Y) {
    var z,
      w,
      H = new Pf(32),
      J = [kq(), kq(), kq(), kq()],
      O = [kq(), kq(), kq(), kq()];
    if (w = -1, q < 64) return -1;
    if (mEY(O, Y)) return -1;
    for (z = 0; z < q; ++z) A[z] = K[z];
    for (z = 0; z < 32; ++z) A[z + 32] = Y[z];
    var X = kBA(A, q);
    if (Lj6(X), cG7(J, O, X), Ij6(O, K.subarray(32)), Rj6(J, O), yj6(H, J), q -= 64, pG7(K, 0, H, 0)) {
      for (z = 0; z < q; ++z) A[z] = 0;
      return -1;
    }
    for (z = 0; z < q; ++z) A[z] = K[z + 64];
    return w = q, w;
  }
  function UG7(A, K) {
    var q, Y, z, w;
    for (Y = 63; Y >= 32; --Y) {
      q = 0;
      for (z = Y - 32, w = Y - 12; z < w; ++z) K[z] += q - 16 * K[Y] * Tj6[z - (Y - 32)], q = K[z] + 128 >> 8, K[z] -= q * 256;
      K[z] += q, K[Y] = 0;
    }
    q = 0;
    for (z = 0; z < 32; ++z) K[z] += q - (K[31] >> 4) * Tj6[z], q = K[z] >> 8, K[z] &= 255;
    for (z = 0; z < 32; ++z) K[z] -= q * Tj6[z];
    for (Y = 0; Y < 32; ++Y) K[Y + 1] += K[Y] >> 8, A[Y] = K[Y] & 255;
  }
  function Lj6(A) {
    var K = new Float64Array(64);
    for (var q = 0; q < 64; ++q) K[q] = A[q], A[q] = 0;
    UG7(A, K);
  }
  function Rj6(A, K) {
    var q = kq(),
      Y = kq(),
      z = kq(),
      w = kq(),
      H = kq(),
      J = kq(),
      O = kq(),
      X = kq(),
      $ = kq();
    mZA(q, A[1], A[0]), mZA($, K[1], K[0]), vw(q, q, $), BZA(Y, A[0], A[1]), BZA($, K[0], K[1]), vw(Y, Y, $), vw(z, A[3], K[3]), vw(z, z, hEY), vw(w, A[2], K[2]), BZA(w, w, w), mZA(H, Y, q), mZA(J, w, z), BZA(O, w, z), BZA(X, Y, q), vw(A[0], H, J), vw(A[1], X, O), vw(A[2], O, J), vw(A[3], H, X);
  }
  function gG7(A, K, q) {
    for (var Y = 0; Y < 4; ++Y) lG7(A[Y], K[Y], q);
  }
  function yj6(A, K) {
    var q = kq(),
      Y = kq(),
      z = kq();
    UEY(z, K[2]), vw(q, K[0], z), vw(Y, K[1], z), X$1(A, Y), A[31] ^= dG7(q) << 7;
  }
  function X$1(A, K) {
    var q,
      Y,
      z,
      w = kq(),
      H = kq();
    for (q = 0; q < 16; ++q) H[q] = K[q];
    vj6(H), vj6(H), vj6(H);
    for (Y = 0; Y < 2; ++Y) {
      w[0] = H[0] - 65517;
      for (q = 1; q < 15; ++q) w[q] = H[q] - 65535 - (w[q - 1] >> 16 & 1), w[q - 1] &= 65535;
      w[15] = H[15] - 32767 - (w[14] >> 16 & 1), z = w[15] >> 16 & 1, w[14] &= 65535, lG7(H, w, 1 - z);
    }
    for (q = 0; q < 16; q++) A[2 * q] = H[q] & 255, A[2 * q + 1] = H[q] >> 8;
  }
  function mEY(A, K) {
    var q = kq(),
      Y = kq(),
      z = kq(),
      w = kq(),
      H = kq(),
      J = kq(),
      O = kq();
    if (Qa(A[2], O$1), gEY(A[1], K), IqA(z, A[1]), vw(w, z, SEY), mZA(z, z, A[2]), BZA(w, A[2], w), IqA(H, w), IqA(J, H), vw(O, J, H), vw(q, O, z), vw(q, q, w), FEY(q, q), vw(q, q, z), vw(q, q, w), vw(q, q, w), vw(A[0], q, w), IqA(Y, A[0]), vw(Y, Y, w), FG7(Y, z)) vw(A[0], A[0], bEY);
    if (IqA(Y, A[0]), vw(Y, Y, w), FG7(Y, z)) return -1;
    if (dG7(A[0]) === K[31] >> 7) mZA(A[0], Cj6, A[0]);
    return vw(A[3], A[0], A[1]), 0;
  }
  function gEY(A, K) {
    var q;
    for (q = 0; q < 16; ++q) A[q] = K[2 * q] + (K[2 * q + 1] << 8);
    A[15] &= 32767;
  }
  function FEY(A, K) {
    var q = kq(),
      Y;
    for (Y = 0; Y < 16; ++Y) q[Y] = K[Y];
    for (Y = 250; Y >= 0; --Y) if (IqA(q, q), Y !== 1) vw(q, q, K);
    for (Y = 0; Y < 16; ++Y) A[Y] = q[Y];
  }
  function FG7(A, K) {
    var q = new Pf(32),
      Y = new Pf(32);
    return X$1(q, A), X$1(Y, K), pG7(q, 0, Y, 0);
  }
  function pG7(A, K, q, Y) {
    return QEY(A, K, q, Y, 32);
  }
  function QEY(A, K, q, Y, z) {
    var w,
      H = 0;
    for (w = 0; w < z; ++w) H |= A[K + w] ^ q[Y + w];
    return (1 & H - 1 >>> 8) - 1;
  }
  function dG7(A) {
    var K = new Pf(32);
    return X$1(K, A), K[0] & 1;
  }
  function cG7(A, K, q) {
    var Y, z;
    Qa(A[0], Cj6), Qa(A[1], O$1), Qa(A[2], O$1), Qa(A[3], Cj6);
    for (z = 255; z >= 0; --z) Y = q[z / 8 | 0] >> (z & 7) & 1, gG7(A, K, Y), Rj6(K, A), Rj6(A, A), gG7(A, K, Y);
  }
  function Ij6(A, K) {
    var q = [kq(), kq(), kq(), kq()];
    Qa(q[0], BG7), Qa(q[1], mG7), Qa(q[2], O$1), vw(q[3], BG7, mG7), cG7(A, q, K);
  }
  function Qa(A, K) {
    var q;
    for (q = 0; q < 16; q++) A[q] = K[q] | 0;
  }
  function UEY(A, K) {
    var q = kq(),
      Y;
    for (Y = 0; Y < 16; ++Y) q[Y] = K[Y];
    for (Y = 253; Y >= 0; --Y) if (IqA(q, q), Y !== 2 && Y !== 4) vw(q, q, K);
    for (Y = 0; Y < 16; ++Y) A[Y] = q[Y];
  }
  function vj6(A) {
    var K,
      q,
      Y = 1;
    for (K = 0; K < 16; ++K) q = A[K] + Y + 65535, Y = Math.floor(q / 65536), A[K] = q - Y * 65536;
    A[0] += Y - 1 + 37 * (Y - 1);
  }
  function lG7(A, K, q) {
    var Y,
      z = ~(q - 1);
    for (var w = 0; w < 16; ++w) Y = z & (A[w] ^ K[w]), A[w] ^= Y, K[w] ^= Y;
  }
  function kq(A) {
    var K,
      q = new Float64Array(16);
    if (A) for (K = 0; K < A.length; ++K) q[K] = A[K];
    return q;
  }
  function BZA(A, K, q) {
    for (var Y = 0; Y < 16; ++Y) A[Y] = K[Y] + q[Y];
  }
  function mZA(A, K, q) {
    for (var Y = 0; Y < 16; ++Y) A[Y] = K[Y] - q[Y];
  }
  function IqA(A, K) {
    vw(A, K, K);
  }
  function vw(A, K, q) {
    var Y,
      z,
      w = 0,
      H = 0,
      J = 0,
      O = 0,
      X = 0,
      $ = 0,
      _ = 0,
      G = 0,
      Z = 0,
      W = 0,
      D = 0,
      j = 0,
      M = 0,
      P = 0,
      f = 0,
      N = 0,
      T = 0,
      C = 0,
      R = 0,
      x = 0,
      y = 0,
      B = 0,
      b = 0,
      F = 0,
      Q = 0,
      u = 0,
      d = 0,
      r = 0,
      c = 0,
      YA = 0,
      e = 0,
      qA = q[0],
      HA = q[1],
      _A = q[2],
      a = q[3],
      JA = q[4],
      jA = q[5],
      MA = q[6],
      hA = q[7],
      yA = q[8],
      AA = q[9],
      wA = q[10],
      GA = q[11],
      OA = q[12],
      t = q[13],
      XA = q[14],
      VA = q[15];
    Y = K[0], w += Y * qA, H += Y * HA, J += Y * _A, O += Y * a, X += Y * JA, $ += Y * jA, _ += Y * MA, G += Y * hA, Z += Y * yA, W += Y * AA, D += Y * wA, j += Y * GA, M += Y * OA, P += Y * t, f += Y * XA, N += Y * VA, Y = K[1], H += Y * qA, J += Y * HA, O += Y * _A, X += Y * a, $ += Y * JA, _ += Y * jA, G += Y * MA, Z += Y * hA, W += Y * yA, D += Y * AA, j += Y * wA, M += Y * GA, P += Y * OA, f += Y * t, N += Y * XA, T += Y * VA, Y = K[2], J += Y * qA, O += Y * HA, X += Y * _A, $ += Y * a, _ += Y * JA, G += Y * jA, Z += Y * MA, W += Y * hA, D += Y * yA, j += Y * AA, M += Y * wA, P += Y * GA, f += Y * OA, N += Y * t, T += Y * XA, C += Y * VA, Y = K[3], O += Y * qA, X += Y * HA, $ += Y * _A, _ += Y * a, G += Y * JA, Z += Y * jA, W += Y * MA, D += Y * hA, j += Y * yA, M += Y * AA, P += Y * wA, f += Y * GA, N += Y * OA, T += Y * t, C += Y * XA, R += Y * VA, Y = K[4], X += Y * qA, $ += Y * HA, _ += Y * _A, G += Y * a, Z += Y * JA, W += Y * jA, D += Y * MA, j += Y * hA, M += Y * yA, P += Y * AA, f += Y * wA, N += Y * GA, T += Y * OA, C += Y * t, R += Y * XA, x += Y * VA, Y = K[5], $ += Y * qA, _ += Y * HA, G += Y * _A, Z += Y * a, W += Y * JA, D += Y * jA, j += Y * MA, M += Y * hA, P += Y * yA, f += Y * AA, N += Y * wA, T += Y * GA, C += Y * OA, R += Y * t, x += Y * XA, y += Y * VA, Y = K[6], _ += Y * qA, G += Y * HA, Z += Y * _A, W += Y * a, D += Y * JA, j += Y * jA, M += Y * MA, P += Y * hA, f += Y * yA, N += Y * AA, T += Y * wA, C += Y * GA, R += Y * OA, x += Y * t, y += Y * XA, B += Y * VA, Y = K[7], G += Y * qA, Z += Y * HA, W += Y * _A, D += Y * a, j += Y * JA, M += Y * jA, P += Y * MA, f += Y * hA, N += Y * yA, T += Y * AA, C += Y * wA, R += Y * GA, x += Y * OA, y += Y * t, B += Y * XA, b += Y * VA, Y = K[8], Z += Y * qA, W += Y * HA, D += Y * _A, j += Y * a, M += Y * JA, P += Y * jA, f += Y * MA, N += Y * hA, T += Y * yA, C += Y * AA, R += Y * wA, x += Y * GA, y += Y * OA, B += Y * t, b += Y * XA, F += Y * VA, Y = K[9], W += Y * qA, D += Y * HA, j += Y * _A, M += Y * a, P += Y * JA, f += Y * jA, N += Y * MA, T += Y * hA, C += Y * yA, R += Y * AA, x += Y * wA, y += Y * GA, B += Y * OA, b += Y * t, F += Y * XA, Q += Y * VA, Y = K[10], D += Y * qA, j += Y * HA, M += Y * _A, P += Y * a, f += Y * JA, N += Y * jA, T += Y * MA, C += Y * hA, R += Y * yA, x += Y * AA, y += Y * wA, B += Y * GA, b += Y * OA, F += Y * t, Q += Y * XA, u += Y * VA, Y = K[11], j += Y * qA, M += Y * HA, P += Y * _A, f += Y * a, N += Y * JA, T += Y * jA, C += Y * MA, R += Y * hA, x += Y * yA, y += Y * AA, B += Y * wA, b += Y * GA, F += Y * OA, Q += Y * t, u += Y * XA, d += Y * VA, Y = K[12], M += Y * qA, P += Y * HA, f += Y * _A, N += Y * a, T += Y * JA, C += Y * jA, R += Y * MA, x += Y * hA, y += Y * yA, B += Y * AA, b += Y * wA, F += Y * GA, Q += Y * OA, u += Y * t, d += Y * XA, r += Y * VA, Y = K[13], P += Y * qA, f += Y * HA, N += Y * _A, T += Y * a, C += Y * JA, R += Y * jA, x += Y * MA, y += Y * hA, B += Y * yA, b += Y * AA, F += Y * wA, Q += Y * GA, u += Y * OA, d += Y * t, r += Y * XA, c += Y * VA, Y = K[14], f += Y * qA, N += Y * HA, T += Y * _A, C += Y * a, R += Y * JA, x += Y * jA, y += Y * MA, B += Y * hA, b += Y * yA, F += Y * AA, Q += Y * wA, u += Y * GA, d += Y * OA, r += Y * t, c += Y * XA, YA += Y * VA, Y = K[15], N += Y * qA, T += Y * HA, C += Y * _A, R += Y * a, x += Y * JA, y += Y * jA, B += Y * MA, b += Y * hA, F += Y * yA, Q += Y * AA, u += Y * wA, d += Y * GA, r += Y * OA, c += Y * t, YA += Y * XA, e += Y * VA, w += 38 * T, H += 38 * C, J += 38 * R, O += 38 * x, X += 38 * y, $ += 38 * B, _ += 38 * b, G += 38 * F, Z += 38 * Q, W += 38 * u, D += 38 * d, j += 38 * r, M += 38 * c, P += 38 * YA, f += 38 * e, z = 1, Y = w + z + 65535, z = Math.floor(Y / 65536), w = Y - z * 65536, Y = H + z + 65535, z = Math.floor(Y / 65536), H = Y - z * 65536, Y = J + z + 65535, z = Math.floor(Y / 65536), J = Y - z * 65536, Y = O + z + 65535, z = Math.floor(Y / 65536), O = Y - z * 65536, Y = X + z + 65535, z = Math.floor(Y / 65536), X = Y - z * 65536, Y = $ + z + 65535, z = Math.floor(Y / 65536), $ = Y - z * 65536, Y = _ + z + 65535, z = Math.floor(Y / 65536), _ = Y - z * 65536, Y = G + z + 65535, z = Math.floor(Y / 65536), G = Y - z * 65536, Y = Z + z + 65535, z = Math.floor(Y / 65536), Z = Y - z * 65536, Y = W + z + 65535, z = Math.floor(Y / 65536), W = Y - z * 65536, Y = D + z + 65535, z = Math.floor(Y / 65536), D = Y - z * 65536, Y = j + z + 65535, z = Math.floor(Y / 65536), j = Y - z * 65536, Y = M + z + 65535, z = Math.floor(Y / 65536), M = Y - z * 65536, Y = P + z + 65535, z = Math.floor(Y / 65536), P = Y - z * 65536, Y = f + z + 65535, z = Math.floor(Y / 65536), f = Y - z * 65536, Y = N + z + 65535, z = Math.floor(Y / 65536), N = Y - z * 65536, w += z - 1 + 37 * (z - 1), z = 1, Y = w + z + 65535, z = Math.floor(Y / 65536), w = Y - z * 65536, Y = H + z + 65535, z = Math.floor(Y / 65536), H = Y - z * 65536, Y = J + z + 65535, z = Math.floor(Y / 65536), J = Y - z * 65536, Y = O + z + 65535, z = Math.floor(Y / 65536), O = Y - z * 65536, Y = X + z + 65535, z = Math.floor(Y / 65536), X = Y - z * 65536, Y = $ + z + 65535, z = Math.floor(Y / 65536), $ = Y - z * 65536, Y = _ + z + 65535, z = Math.floor(Y / 65536), _ = Y - z * 65536, Y = G + z + 65535, z = Math.floor(Y / 65536), G = Y - z * 65536, Y = Z + z + 65535, z = Math.floor(Y / 65536), Z = Y - z * 65536, Y = W + z + 65535, z = Math.floor(Y / 65536), W = Y - z * 65536, Y = D + z + 65535, z = Math.floor(Y / 65536), D = Y - z * 65536, Y = j + z + 65535, z = Math.floor(Y / 65536), j = Y - z * 65536, Y = M + z + 65535, z = Math.floor(Y / 65536), M = Y - z * 65536, Y = P + z + 65535, z = Math.floor(Y / 65536), P = Y - z * 65536, Y = f + z + 65535, z = Math.floor(Y / 65536), f = Y - z * 65536, Y = N + z + 65535, z = Math.floor(Y / 65536), N = Y - z * 65536, w += z - 1 + 37 * (z - 1), A[0] = w, A[1] = H, A[2] = J, A[3] = O, A[4] = X, A[5] = $, A[6] = _, A[7] = G, A[8] = Z, A[9] = W, A[10] = D, A[11] = j, A[12] = M, A[13] = P, A[14] = f, A[15] = N;
  }
});

// Register to shared state
__$.nG7 = nG7;
