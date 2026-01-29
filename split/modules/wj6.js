// Module: wj6
// Dependencies: m3, ha, xI, MBA, ru, ba, rX1, vqA, uC, oD6
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wj6 = v((k4H, zG7) => {
  var M7 = __$.m3();
  __$.ha();
  __$.xI();
  __$.MBA();
  __$.ru();
  __$.ba();
  __$.rX1();
  __$.vqA();
  __$.uC();
  __$.oD6();
  __$.fBA();
  __$.bY();
  if (typeof zj6 > "u") zj6 = M7.jsbn.BigInteger;
  var zj6,
    a6 = M7.asn1,
    k3 = M7.pki = M7.pki || {};
  zG7.exports = k3.pbe = M7.pbe = M7.pbe || {};
  var CqA = k3.oids,
    SvY = {
      name: "EncryptedPrivateKeyInfo",
      tagClass: a6.Class.UNIVERSAL,
      type: a6.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
        tagClass: a6.Class.UNIVERSAL,
        type: a6.Type.SEQUENCE,
        constructed: !0,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: a6.Class.UNIVERSAL,
          type: a6.Type.OID,
          constructed: !1,
          capture: "encryptionOid"
        }, {
          name: "AlgorithmIdentifier.parameters",
          tagClass: a6.Class.UNIVERSAL,
          type: a6.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "encryptionParams"
        }]
      }, {
        name: "EncryptedPrivateKeyInfo.encryptedData",
        tagClass: a6.Class.UNIVERSAL,
        type: a6.Type.OCTETSTRING,
        constructed: !1,
        capture: "encryptedData"
      }]
    },
    hvY = {
      name: "PBES2Algorithms",
      tagClass: a6.Class.UNIVERSAL,
      type: a6.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "PBES2Algorithms.keyDerivationFunc",
        tagClass: a6.Class.UNIVERSAL,
        type: a6.Type.SEQUENCE,
        constructed: !0,
        value: [{
          name: "PBES2Algorithms.keyDerivationFunc.oid",
          tagClass: a6.Class.UNIVERSAL,
          type: a6.Type.OID,
          constructed: !1,
          capture: "kdfOid"
        }, {
          name: "PBES2Algorithms.params",
          tagClass: a6.Class.UNIVERSAL,
          type: a6.Type.SEQUENCE,
          constructed: !0,
          value: [{
            name: "PBES2Algorithms.params.salt",
            tagClass: a6.Class.UNIVERSAL,
            type: a6.Type.OCTETSTRING,
            constructed: !1,
            capture: "kdfSalt"
          }, {
            name: "PBES2Algorithms.params.iterationCount",
            tagClass: a6.Class.UNIVERSAL,
            type: a6.Type.INTEGER,
            constructed: !1,
            capture: "kdfIterationCount"
          }, {
            name: "PBES2Algorithms.params.keyLength",
            tagClass: a6.Class.UNIVERSAL,
            type: a6.Type.INTEGER,
            constructed: !1,
            optional: !0,
            capture: "keyLength"
          }, {
            name: "PBES2Algorithms.params.prf",
            tagClass: a6.Class.UNIVERSAL,
            type: a6.Type.SEQUENCE,
            constructed: !0,
            optional: !0,
            value: [{
              name: "PBES2Algorithms.params.prf.algorithm",
              tagClass: a6.Class.UNIVERSAL,
              type: a6.Type.OID,
              constructed: !1,
              capture: "prfOid"
            }]
          }]
        }]
      }, {
        name: "PBES2Algorithms.encryptionScheme",
        tagClass: a6.Class.UNIVERSAL,
        type: a6.Type.SEQUENCE,
        constructed: !0,
        value: [{
          name: "PBES2Algorithms.encryptionScheme.oid",
          tagClass: a6.Class.UNIVERSAL,
          type: a6.Type.OID,
          constructed: !1,
          capture: "encOid"
        }, {
          name: "PBES2Algorithms.encryptionScheme.iv",
          tagClass: a6.Class.UNIVERSAL,
          type: a6.Type.OCTETSTRING,
          constructed: !1,
          capture: "encIv"
        }]
      }]
    },
    bvY = {
      name: "pkcs-12PbeParams",
      tagClass: a6.Class.UNIVERSAL,
      type: a6.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "pkcs-12PbeParams.salt",
        tagClass: a6.Class.UNIVERSAL,
        type: a6.Type.OCTETSTRING,
        constructed: !1,
        capture: "salt"
      }, {
        name: "pkcs-12PbeParams.iterations",
        tagClass: a6.Class.UNIVERSAL,
        type: a6.Type.INTEGER,
        constructed: !1,
        capture: "iterations"
      }]
    };
  k3.encryptPrivateKeyInfo = function (A, K, q) {
    q = q || {}, q.saltSize = q.saltSize || 8, q.count = q.count || 2048, q.algorithm = q.algorithm || "aes128", q.prfAlgorithm = q.prfAlgorithm || "sha1";
    var Y = M7.random.getBytesSync(q.saltSize),
      z = q.count,
      w = a6.integerToDer(z),
      H,
      J,
      O;
    if (q.algorithm.indexOf("aes") === 0 || q.algorithm === "des") {
      var X, $, _;
      switch (q.algorithm) {
        case "aes128":
          H = 16, X = 16, $ = CqA["aes128-CBC"], _ = M7.aes.createEncryptionCipher;
          break;
        case "aes192":
          H = 24, X = 16, $ = CqA["aes192-CBC"], _ = M7.aes.createEncryptionCipher;
          break;
        case "aes256":
          H = 32, X = 16, $ = CqA["aes256-CBC"], _ = M7.aes.createEncryptionCipher;
          break;
        case "des":
          H = 8, X = 8, $ = CqA.desCBC, _ = M7.des.createEncryptionCipher;
          break;
        default:
          var G = Error("Cannot encrypt private key. Unknown encryption algorithm.");
          throw G.algorithm = q.algorithm, G;
      }
      var Z = "hmacWith" + q.prfAlgorithm.toUpperCase(),
        W = YG7(Z),
        D = M7.pkcs5.pbkdf2(K, Y, z, H, W),
        j = M7.random.getBytesSync(X),
        M = _(D);
      M.start(j), M.update(a6.toDer(A)), M.finish(), O = M.output.getBytes();
      var P = xvY(Y, w, H, Z);
      J = a6.create(a6.Class.UNIVERSAL, a6.Type.SEQUENCE, !0, [a6.create(a6.Class.UNIVERSAL, a6.Type.OID, !1, a6.oidToDer(CqA.pkcs5PBES2).getBytes()), a6.create(a6.Class.UNIVERSAL, a6.Type.SEQUENCE, !0, [a6.create(a6.Class.UNIVERSAL, a6.Type.SEQUENCE, !0, [a6.create(a6.Class.UNIVERSAL, a6.Type.OID, !1, a6.oidToDer(CqA.pkcs5PBKDF2).getBytes()), P]), a6.create(a6.Class.UNIVERSAL, a6.Type.SEQUENCE, !0, [a6.create(a6.Class.UNIVERSAL, a6.Type.OID, !1, a6.oidToDer($).getBytes()), a6.create(a6.Class.UNIVERSAL, a6.Type.OCTETSTRING, !1, j)])])]);
    } else if (q.algorithm === "3des") {
      H = 24;
      var f = new M7.util.ByteBuffer(Y),
        D = k3.pbe.generatePkcs12Key(K, f, 1, z, H),
        j = k3.pbe.generatePkcs12Key(K, f, 2, z, H),
        M = M7.des.createEncryptionCipher(D);
      M.start(j), M.update(a6.toDer(A)), M.finish(), O = M.output.getBytes(), J = a6.create(a6.Class.UNIVERSAL, a6.Type.SEQUENCE, !0, [a6.create(a6.Class.UNIVERSAL, a6.Type.OID, !1, a6.oidToDer(CqA["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()), a6.create(a6.Class.UNIVERSAL, a6.Type.SEQUENCE, !0, [a6.create(a6.Class.UNIVERSAL, a6.Type.OCTETSTRING, !1, Y), a6.create(a6.Class.UNIVERSAL, a6.Type.INTEGER, !1, w.getBytes())])]);
    } else {
      var G = Error("Cannot encrypt private key. Unknown encryption algorithm.");
      throw G.algorithm = q.algorithm, G;
    }
    var N = a6.create(a6.Class.UNIVERSAL, a6.Type.SEQUENCE, !0, [J, a6.create(a6.Class.UNIVERSAL, a6.Type.OCTETSTRING, !1, O)]);
    return N;
  };
  k3.decryptPrivateKeyInfo = function (A, K) {
    var q = null,
      Y = {},
      z = [];
    if (!a6.validate(A, SvY, Y, z)) {
      var w = Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
      throw w.errors = z, w;
    }
    var H = a6.derToOid(Y.encryptionOid),
      J = k3.pbe.getCipher(H, Y.encryptionParams, K),
      O = M7.util.createBuffer(Y.encryptedData);
    if (J.update(O), J.finish()) q = a6.fromDer(J.output);
    return q;
  };
  k3.encryptedPrivateKeyToPem = function (A, K) {
    var q = {
      type: "ENCRYPTED PRIVATE KEY",
      body: a6.toDer(A).getBytes()
    };
    return M7.pem.encode(q, {
      maxline: K
    });
  };
  k3.encryptedPrivateKeyFromPem = function (A) {
    var K = M7.pem.decode(A)[0];
    if (K.type !== "ENCRYPTED PRIVATE KEY") {
      var q = Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');
      throw q.headerType = K.type, q;
    }
    if (K.procType && K.procType.type === "ENCRYPTED") throw Error("Could not convert encrypted private key from PEM; PEM is encrypted.");
    return a6.fromDer(K.body);
  };
  k3.encryptRsaPrivateKey = function (A, K, q) {
    if (q = q || {}, !q.legacy) {
      var Y = k3.wrapRsaPrivateKey(k3.privateKeyToAsn1(A));
      return Y = k3.encryptPrivateKeyInfo(Y, K, q), k3.encryptedPrivateKeyToPem(Y);
    }
    var z, w, H, J;
    switch (q.algorithm) {
      case "aes128":
        z = "AES-128-CBC", H = 16, w = M7.random.getBytesSync(16), J = M7.aes.createEncryptionCipher;
        break;
      case "aes192":
        z = "AES-192-CBC", H = 24, w = M7.random.getBytesSync(16), J = M7.aes.createEncryptionCipher;
        break;
      case "aes256":
        z = "AES-256-CBC", H = 32, w = M7.random.getBytesSync(16), J = M7.aes.createEncryptionCipher;
        break;
      case "3des":
        z = "DES-EDE3-CBC", H = 24, w = M7.random.getBytesSync(8), J = M7.des.createEncryptionCipher;
        break;
      case "des":
        z = "DES-CBC", H = 8, w = M7.random.getBytesSync(8), J = M7.des.createEncryptionCipher;
        break;
      default:
        var O = Error('Could not encrypt RSA private key; unsupported encryption algorithm "' + q.algorithm + '".');
        throw O.algorithm = q.algorithm, O;
    }
    var X = M7.pbe.opensslDeriveBytes(K, w.substr(0, 8), H),
      $ = J(X);
    $.start(w), $.update(a6.toDer(k3.privateKeyToAsn1(A))), $.finish();
    var _ = {
      type: "RSA PRIVATE KEY",
      procType: {
        version: "4",
        type: "ENCRYPTED"
      },
      dekInfo: {
        algorithm: z,
        parameters: M7.util.bytesToHex(w).toUpperCase()
      },
      body: $.output.getBytes()
    };
    return M7.pem.encode(_);
  };
  k3.decryptRsaPrivateKey = function (A, K) {
    var q = null,
      Y = M7.pem.decode(A)[0];
    if (Y.type !== "ENCRYPTED PRIVATE KEY" && Y.type !== "PRIVATE KEY" && Y.type !== "RSA PRIVATE KEY") {
      var z = Error('Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".');
      throw z.headerType = z, z;
    }
    if (Y.procType && Y.procType.type === "ENCRYPTED") {
      var w, H;
      switch (Y.dekInfo.algorithm) {
        case "DES-CBC":
          w = 8, H = M7.des.createDecryptionCipher;
          break;
        case "DES-EDE3-CBC":
          w = 24, H = M7.des.createDecryptionCipher;
          break;
        case "AES-128-CBC":
          w = 16, H = M7.aes.createDecryptionCipher;
          break;
        case "AES-192-CBC":
          w = 24, H = M7.aes.createDecryptionCipher;
          break;
        case "AES-256-CBC":
          w = 32, H = M7.aes.createDecryptionCipher;
          break;
        case "RC2-40-CBC":
          w = 5, H = function (_) {
            return M7.rc2.createDecryptionCipher(_, 40);
          };
          break;
        case "RC2-64-CBC":
          w = 8, H = function (_) {
            return M7.rc2.createDecryptionCipher(_, 64);
          };
          break;
        case "RC2-128-CBC":
          w = 16, H = function (_) {
            return M7.rc2.createDecryptionCipher(_, 128);
          };
          break;
        default:
          var z = Error('Could not decrypt private key; unsupported encryption algorithm "' + Y.dekInfo.algorithm + '".');
          throw z.algorithm = Y.dekInfo.algorithm, z;
      }
      var J = M7.util.hexToBytes(Y.dekInfo.parameters),
        O = M7.pbe.opensslDeriveBytes(K, J.substr(0, 8), w),
        X = H(O);
      if (X.start(J), X.update(M7.util.createBuffer(Y.body)), X.finish()) q = X.output.getBytes();else return q;
    } else q = Y.body;
    if (Y.type === "ENCRYPTED PRIVATE KEY") q = k3.decryptPrivateKeyInfo(a6.fromDer(q), K);else q = a6.fromDer(q);
    if (q !== null) q = k3.privateKeyFromAsn1(q);
    return q;
  };
  k3.pbe.generatePkcs12Key = function (A, K, q, Y, z, w) {
    var H, J;
    if (typeof w > "u" || w === null) {
      if (!("sha1" in M7.md)) throw Error('"sha1" hash algorithm unavailable.');
      w = M7.md.sha1.create();
    }
    var {
        digestLength: O,
        blockLength: X
      } = w,
      $ = new M7.util.ByteBuffer(),
      _ = new M7.util.ByteBuffer();
    if (A !== null && A !== void 0) {
      for (J = 0; J < A.length; J++) _.putInt16(A.charCodeAt(J));
      _.putInt16(0);
    }
    var G = _.length(),
      Z = K.length(),
      W = new M7.util.ByteBuffer();
    W.fillWithByte(q, X);
    var D = X * Math.ceil(Z / X),
      j = new M7.util.ByteBuffer();
    for (J = 0; J < D; J++) j.putByte(K.at(J % Z));
    var M = X * Math.ceil(G / X),
      P = new M7.util.ByteBuffer();
    for (J = 0; J < M; J++) P.putByte(_.at(J % G));
    var f = j;
    f.putBuffer(P);
    var N = Math.ceil(z / O);
    for (var T = 1; T <= N; T++) {
      var C = new M7.util.ByteBuffer();
      C.putBytes(W.bytes()), C.putBytes(f.bytes());
      for (var R = 0; R < Y; R++) w.start(), w.update(C.getBytes()), C = w.digest();
      var x = new M7.util.ByteBuffer();
      for (J = 0; J < X; J++) x.putByte(C.at(J % O));
      var y = Math.ceil(Z / X) + Math.ceil(G / X),
        B = new M7.util.ByteBuffer();
      for (H = 0; H < y; H++) {
        var b = new M7.util.ByteBuffer(f.getBytes(X)),
          F = 511;
        for (J = x.length() - 1; J >= 0; J--) F = F >> 8, F += x.at(J) + b.at(J), b.setAt(J, F & 255);
        B.putBuffer(b);
      }
      f = B, $.putBuffer(C);
    }
    return $.truncate($.length() - z), $;
  };
  k3.pbe.getCipher = function (A, K, q) {
    switch (A) {
      case k3.oids.pkcs5PBES2:
        return k3.pbe.getCipherForPBES2(A, K, q);
      case k3.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
      case k3.oids["pbewithSHAAnd40BitRC2-CBC"]:
        return k3.pbe.getCipherForPKCS12PBE(A, K, q);
      default:
        var Y = Error("Cannot read encrypted PBE data block. Unsupported OID.");
        throw Y.oid = A, Y.supportedOids = ["pkcs5PBES2", "pbeWithSHAAnd3-KeyTripleDES-CBC", "pbewithSHAAnd40BitRC2-CBC"], Y;
    }
  };
  k3.pbe.getCipherForPBES2 = function (A, K, q) {
    var Y = {},
      z = [];
    if (!a6.validate(K, hvY, Y, z)) {
      var w = Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
      throw w.errors = z, w;
    }
    if (A = a6.derToOid(Y.kdfOid), A !== k3.oids.pkcs5PBKDF2) {
      var w = Error("Cannot read encrypted private key. Unsupported key derivation function OID.");
      throw w.oid = A, w.supportedOids = ["pkcs5PBKDF2"], w;
    }
    if (A = a6.derToOid(Y.encOid), A !== k3.oids["aes128-CBC"] && A !== k3.oids["aes192-CBC"] && A !== k3.oids["aes256-CBC"] && A !== k3.oids["des-EDE3-CBC"] && A !== k3.oids.desCBC) {
      var w = Error("Cannot read encrypted private key. Unsupported encryption scheme OID.");
      throw w.oid = A, w.supportedOids = ["aes128-CBC", "aes192-CBC", "aes256-CBC", "des-EDE3-CBC", "desCBC"], w;
    }
    var H = Y.kdfSalt,
      J = M7.util.createBuffer(Y.kdfIterationCount);
    J = J.getInt(J.length() << 3);
    var O, X;
    switch (k3.oids[A]) {
      case "aes128-CBC":
        O = 16, X = M7.aes.createDecryptionCipher;
        break;
      case "aes192-CBC":
        O = 24, X = M7.aes.createDecryptionCipher;
        break;
      case "aes256-CBC":
        O = 32, X = M7.aes.createDecryptionCipher;
        break;
      case "des-EDE3-CBC":
        O = 24, X = M7.des.createDecryptionCipher;
        break;
      case "desCBC":
        O = 8, X = M7.des.createDecryptionCipher;
        break;
    }
    var $ = qG7(Y.prfOid),
      _ = M7.pkcs5.pbkdf2(q, H, J, O, $),
      G = Y.encIv,
      Z = X(_);
    return Z.start(G), Z;
  };
  k3.pbe.getCipherForPKCS12PBE = function (A, K, q) {
    var Y = {},
      z = [];
    if (!a6.validate(K, bvY, Y, z)) {
      var w = Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
      throw w.errors = z, w;
    }
    var H = M7.util.createBuffer(Y.salt),
      J = M7.util.createBuffer(Y.iterations);
    J = J.getInt(J.length() << 3);
    var O, X, $;
    switch (A) {
      case k3.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
        O = 24, X = 8, $ = M7.des.startDecrypting;
        break;
      case k3.oids["pbewithSHAAnd40BitRC2-CBC"]:
        O = 5, X = 8, $ = function (D, j) {
          var M = M7.rc2.createDecryptionCipher(D, 40);
          return M.start(j, null), M;
        };
        break;
      default:
        var w = Error("Cannot read PKCS #12 PBE data block. Unsupported OID.");
        throw w.oid = A, w;
    }
    var _ = qG7(Y.prfOid),
      G = k3.pbe.generatePkcs12Key(q, H, 1, J, O, _);
    _.start();
    var Z = k3.pbe.generatePkcs12Key(q, H, 2, J, X, _);
    return $(G, Z);
  };
  k3.pbe.opensslDeriveBytes = function (A, K, q, Y) {
    if (typeof Y > "u" || Y === null) {
      if (!("md5" in M7.md)) throw Error('"md5" hash algorithm unavailable.');
      Y = M7.md.md5.create();
    }
    if (K === null) K = "";
    var z = [KG7(Y, A + K)];
    for (var w = 16, H = 1; w < q; ++H, w += 16) z.push(KG7(Y, z[H - 1] + A + K));
    return z.join("").substr(0, q);
  };
  function KG7(A, K) {
    return A.start().update(K).digest().getBytes();
  }
  function qG7(A) {
    var K;
    if (!A) K = "hmacWithSHA1";else if (K = k3.oids[a6.derToOid(A)], !K) {
      var q = Error("Unsupported PRF OID.");
      throw q.oid = A, q.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"], q;
    }
    return YG7(K);
  }
  function YG7(A) {
    var K = M7.md;
    switch (A) {
      case "hmacWithSHA224":
        K = M7.md.sha512;
      case "hmacWithSHA1":
      case "hmacWithSHA256":
      case "hmacWithSHA384":
      case "hmacWithSHA512":
        A = A.substr(8).toLowerCase();
        break;
      default:
        var q = Error("Unsupported PRF algorithm.");
        throw q.algorithm = A, q.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"], q;
    }
    if (!K || !(A in K)) throw Error("Unknown hash algorithm: " + A);
    return K[A].create();
  }
  function xvY(A, K, q, Y) {
    var z = a6.create(a6.Class.UNIVERSAL, a6.Type.SEQUENCE, !0, [a6.create(a6.Class.UNIVERSAL, a6.Type.OCTETSTRING, !1, A), a6.create(a6.Class.UNIVERSAL, a6.Type.INTEGER, !1, K.getBytes())]);
    if (Y !== "hmacWithSHA1") z.value.push(a6.create(a6.Class.UNIVERSAL, a6.Type.INTEGER, !1, M7.util.hexToBytes(q.toString(16))), a6.create(a6.Class.UNIVERSAL, a6.Type.SEQUENCE, !0, [a6.create(a6.Class.UNIVERSAL, a6.Type.OID, !1, a6.oidToDer(k3.oids[Y]).getBytes()), a6.create(a6.Class.UNIVERSAL, a6.Type.NULL, !1, "")]));
    return z;
  }
});

// Register to shared state
__$.wj6 = wj6;
