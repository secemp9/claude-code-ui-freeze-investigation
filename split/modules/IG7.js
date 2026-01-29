// Module: IG7
// Dependencies: m3, ha, Pj6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IG7 = v((x4H, yG7) => {
  var Fa = __$.m3();
  __$.ha();
  __$.Pj6();
  var QC = yG7.exports = Fa.tls;
  QC.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA = {
    id: [0, 47],
    name: "TLS_RSA_WITH_AES_128_CBC_SHA",
    initSecurityParameters: function (A) {
      A.bulk_cipher_algorithm = QC.BulkCipherAlgorithm.aes, A.cipher_type = QC.CipherType.block, A.enc_key_length = 16, A.block_length = 16, A.fixed_iv_length = 16, A.record_iv_length = 16, A.mac_algorithm = QC.MACAlgorithm.hmac_sha1, A.mac_length = 20, A.mac_key_length = 20;
    },
    initConnectionState: RG7
  };
  QC.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA = {
    id: [0, 53],
    name: "TLS_RSA_WITH_AES_256_CBC_SHA",
    initSecurityParameters: function (A) {
      A.bulk_cipher_algorithm = QC.BulkCipherAlgorithm.aes, A.cipher_type = QC.CipherType.block, A.enc_key_length = 32, A.block_length = 16, A.fixed_iv_length = 16, A.record_iv_length = 16, A.mac_algorithm = QC.MACAlgorithm.hmac_sha1, A.mac_length = 20, A.mac_key_length = 20;
    },
    initConnectionState: RG7
  };
  function RG7(A, K, q) {
    var Y = K.entity === Fa.tls.ConnectionEnd.client;
    A.read.cipherState = {
      init: !1,
      cipher: Fa.cipher.createDecipher("AES-CBC", Y ? q.keys.server_write_key : q.keys.client_write_key),
      iv: Y ? q.keys.server_write_IV : q.keys.client_write_IV
    }, A.write.cipherState = {
      init: !1,
      cipher: Fa.cipher.createCipher("AES-CBC", Y ? q.keys.client_write_key : q.keys.server_write_key),
      iv: Y ? q.keys.client_write_IV : q.keys.server_write_IV
    }, A.read.cipherFunction = TEY, A.write.cipherFunction = VEY, A.read.macLength = A.write.macLength = q.mac_length, A.read.macFunction = A.write.macFunction = QC.hmac_sha1;
  }
  function VEY(A, K) {
    var q = !1,
      Y = K.macFunction(K.macKey, K.sequenceNumber, A);
    A.fragment.putBytes(Y), K.updateSequenceNumber();
    var z;
    if (A.version.minor === QC.Versions.TLS_1_0.minor) z = K.cipherState.init ? null : K.cipherState.iv;else z = Fa.random.getBytesSync(16);
    K.cipherState.init = !0;
    var w = K.cipherState.cipher;
    if (w.start({
      iv: z
    }), A.version.minor >= QC.Versions.TLS_1_1.minor) w.output.putBytes(z);
    if (w.update(A.fragment), w.finish(fEY)) A.fragment = w.output, A.length = A.fragment.length(), q = !0;
    return q;
  }
  function fEY(A, K, q) {
    if (!q) {
      var Y = A - K.length() % A;
      K.fillWithByte(Y - 1, Y);
    }
    return !0;
  }
  function NEY(A, K, q) {
    var Y = !0;
    if (q) {
      var z = K.length(),
        w = K.last();
      for (var H = z - 1 - w; H < z - 1; ++H) Y = Y && K.at(H) == w;
      if (Y) K.truncate(w + 1);
    }
    return Y;
  }
  function TEY(A, K) {
    var q = !1,
      Y;
    if (A.version.minor === QC.Versions.TLS_1_0.minor) Y = K.cipherState.init ? null : K.cipherState.iv;else Y = A.fragment.getBytes(16);
    K.cipherState.init = !0;
    var z = K.cipherState.cipher;
    z.start({
      iv: Y
    }), z.update(A.fragment), q = z.finish(NEY);
    var w = K.macLength,
      H = Fa.random.getBytesSync(w),
      J = z.output.length();
    if (J >= w) A.fragment = z.output.getBytes(J - w), H = z.output.getBytes(w);else A.fragment = z.output.getBytes();
    A.fragment = Fa.util.createBuffer(A.fragment), A.length = A.fragment.length();
    var O = K.macFunction(K.macKey, K.sequenceNumber, A);
    return K.updateSequenceNumber(), q = vEY(K.macKey, H, O) && q, q;
  }
  function vEY(A, K, q) {
    var Y = Fa.hmac.create();
    return Y.start("SHA1", A), Y.update(K), K = Y.digest().getBytes(), Y.start(null, null), Y.update(q), q = Y.digest().getBytes(), K === q;
  }
});

// Register to shared state
__$.IG7 = IG7;
