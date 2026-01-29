// Module: sG7
// Dependencies: m3, bY, uC, VBA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sG7 = v((g4H, aG7) => {
  var oT = __$.m3();
  __$.bY();
  __$.uC();
  __$.VBA();
  aG7.exports = oT.kem = oT.kem || {};
  var rG7 = oT.jsbn.BigInteger;
  oT.kem.rsa = {};
  oT.kem.rsa.create = function (A, K) {
    K = K || {};
    var q = K.prng || oT.random,
      Y = {};
    return Y.encrypt = function (z, w) {
      var H = Math.ceil(z.n.bitLength() / 8),
        J;
      do J = new rG7(oT.util.bytesToHex(q.getBytesSync(H)), 16).mod(z.n); while (J.compareTo(rG7.ONE) <= 0);
      J = oT.util.hexToBytes(J.toString(16));
      var O = H - J.length;
      if (O > 0) J = oT.util.fillString(String.fromCharCode(0), O) + J;
      var X = z.encrypt(J, "NONE"),
        $ = A.generate(J, w);
      return {
        encapsulation: X,
        key: $
      };
    }, Y.decrypt = function (z, w, H) {
      var J = z.decrypt(w, "NONE");
      return A.generate(J, H);
    }, Y;
  };
  oT.kem.kdf1 = function (A, K) {
    oG7(this, A, 0, K || A.digestLength);
  };
  oT.kem.kdf2 = function (A, K) {
    oG7(this, A, 1, K || A.digestLength);
  };
  function oG7(A, K, q, Y) {
    A.generate = function (z, w) {
      var H = new oT.util.ByteBuffer(),
        J = Math.ceil(w / Y) + q,
        O = new oT.util.ByteBuffer();
      for (var X = q; X < J; ++X) {
        O.putInt32(X), K.start(), K.update(z + O.getBytes());
        var $ = K.digest();
        H.putBytes($.getBytes(Y));
      }
      return H.truncate(H.length() - w), H.getBytes();
    };
  }
});

// Register to shared state
__$.sG7 = sG7;
