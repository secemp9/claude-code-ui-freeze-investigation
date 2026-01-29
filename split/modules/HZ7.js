// Module: HZ7
// Dependencies: m3, ha, LZA, cX1, SZA, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HZ7 = v((p4H, wZ7) => {
  var Z$ = __$.m3();
  __$.ha();
  __$.LZA();
  __$.cX1();
  __$.SZA();
  __$.bY();
  var W$1 = wZ7.exports = Z$.ssh = Z$.ssh || {};
  W$1.privateKeyToPutty = function (A, K, q) {
    q = q || "", K = K || "";
    var Y = "ssh-rsa",
      z = K === "" ? "none" : "aes256-cbc",
      w = "PuTTY-User-Key-File-2: " + Y + `\r
`;
    w += "Encryption: " + z + `\r
`, w += "Comment: " + q + `\r
`;
    var H = Z$.util.createBuffer();
    QZA(H, Y), qB(H, A.e), qB(H, A.n);
    var J = Z$.util.encode64(H.bytes(), 64),
      O = Math.floor(J.length / 66) + 1;
    w += "Public-Lines: " + O + `\r
`, w += J;
    var X = Z$.util.createBuffer();
    qB(X, A.d), qB(X, A.p), qB(X, A.q), qB(X, A.qInv);
    var $;
    if (!K) $ = Z$.util.encode64(X.bytes(), 64);else {
      var _ = X.length() + 16 - 1;
      _ -= _ % 16;
      var G = Z$1(X.bytes());
      G.truncate(G.length() - _ + X.length()), X.putBuffer(G);
      var Z = Z$.util.createBuffer();
      Z.putBuffer(Z$1("\x00\x00\x00\x00", K)), Z.putBuffer(Z$1("\x00\x00\x00\x01", K));
      var W = Z$.aes.createEncryptionCipher(Z.truncate(8), "CBC");
      W.start(Z$.util.createBuffer().fillWithByte(0, 16)), W.update(X.copy()), W.finish();
      var D = W.output;
      D.truncate(16), $ = Z$.util.encode64(D.bytes(), 64);
    }
    O = Math.floor($.length / 66) + 1, w += `\r
Private-Lines: ` + O + `\r
`, w += $;
    var j = Z$1("putty-private-key-file-mac-key", K),
      M = Z$.util.createBuffer();
    QZA(M, Y), QZA(M, z), QZA(M, q), M.putInt32(H.length()), M.putBuffer(H), M.putInt32(X.length()), M.putBuffer(X);
    var P = Z$.hmac.create();
    return P.start("sha1", j), P.update(M.bytes()), w += `\r
Private-MAC: ` + P.digest().toHex() + `\r
`, w;
  };
  W$1.publicKeyToOpenSSH = function (A, K) {
    var q = "ssh-rsa";
    K = K || "";
    var Y = Z$.util.createBuffer();
    return QZA(Y, q), qB(Y, A.e), qB(Y, A.n), q + " " + Z$.util.encode64(Y.bytes()) + " " + K;
  };
  W$1.privateKeyToOpenSSH = function (A, K) {
    if (!K) return Z$.pki.privateKeyToPem(A);
    return Z$.pki.encryptRsaPrivateKey(A, K, {
      legacy: !0,
      algorithm: "aes128"
    });
  };
  W$1.getPublicKeyFingerprint = function (A, K) {
    K = K || {};
    var q = K.md || Z$.md.md5.create(),
      Y = "ssh-rsa",
      z = Z$.util.createBuffer();
    QZA(z, Y), qB(z, A.e), qB(z, A.n), q.start(), q.update(z.getBytes());
    var w = q.digest();
    if (K.encoding === "hex") {
      var H = w.toHex();
      if (K.delimiter) return H.match(/.{2}/g).join(K.delimiter);
      return H;
    } else if (K.encoding === "binary") return w.getBytes();else if (K.encoding) throw Error('Unknown encoding "' + K.encoding + '".');
    return w;
  };
  function qB(A, K) {
    var q = K.toString(16);
    if (q[0] >= "8") q = "00" + q;
    var Y = Z$.util.hexToBytes(q);
    A.putInt32(Y.length), A.putBytes(Y);
  }
  function QZA(A, K) {
    A.putInt32(K.length), A.putString(K);
  }
  function Z$1() {
    var A = Z$.md.sha1.create(),
      K = arguments.length;
    for (var q = 0; q < K; ++q) A.update(arguments[q]);
    return A.digest();
  }
});

// Register to shared state
__$.HZ7 = HZ7;
