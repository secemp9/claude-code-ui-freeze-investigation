// Module: fBA
// Dependencies: m3, xI, VBA, ba, Aj6, qj6, uC, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fBA = v((E4H, AG7) => {
  var lK = __$.m3();
  __$.xI();
  __$.VBA();
  __$.ba();
  __$.Aj6();
  __$.qj6();
  __$.uC();
  __$.bY();
  if (typeof OY > "u") OY = lK.jsbn.BigInteger;
  var OY,
    Yj6 = lK.util.isNodejs ? CA("crypto") : null,
    P6 = lK.asn1,
    mC = lK.util;
  lK.pki = lK.pki || {};
  AG7.exports = lK.pki.rsa = lK.rsa = lK.rsa || {};
  var c5 = lK.pki,
    TvY = [6, 4, 2, 4, 2, 4, 6, 2],
    vvY = {
      name: "PrivateKeyInfo",
      tagClass: P6.Class.UNIVERSAL,
      type: P6.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "PrivateKeyInfo.version",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "privateKeyVersion"
      }, {
        name: "PrivateKeyInfo.privateKeyAlgorithm",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.SEQUENCE,
        constructed: !0,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: P6.Class.UNIVERSAL,
          type: P6.Type.OID,
          constructed: !1,
          capture: "privateKeyOid"
        }]
      }, {
        name: "PrivateKeyInfo",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.OCTETSTRING,
        constructed: !1,
        capture: "privateKey"
      }]
    },
    EvY = {
      name: "RSAPrivateKey",
      tagClass: P6.Class.UNIVERSAL,
      type: P6.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "RSAPrivateKey.version",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "privateKeyVersion"
      }, {
        name: "RSAPrivateKey.modulus",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "privateKeyModulus"
      }, {
        name: "RSAPrivateKey.publicExponent",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "privateKeyPublicExponent"
      }, {
        name: "RSAPrivateKey.privateExponent",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "privateKeyPrivateExponent"
      }, {
        name: "RSAPrivateKey.prime1",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "privateKeyPrime1"
      }, {
        name: "RSAPrivateKey.prime2",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "privateKeyPrime2"
      }, {
        name: "RSAPrivateKey.exponent1",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "privateKeyExponent1"
      }, {
        name: "RSAPrivateKey.exponent2",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "privateKeyExponent2"
      }, {
        name: "RSAPrivateKey.coefficient",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "privateKeyCoefficient"
      }]
    },
    kvY = {
      name: "RSAPublicKey",
      tagClass: P6.Class.UNIVERSAL,
      type: P6.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "RSAPublicKey.modulus",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "publicKeyModulus"
      }, {
        name: "RSAPublicKey.exponent",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.INTEGER,
        constructed: !1,
        capture: "publicKeyExponent"
      }]
    },
    CvY = lK.pki.rsa.publicKeyValidator = {
      name: "SubjectPublicKeyInfo",
      tagClass: P6.Class.UNIVERSAL,
      type: P6.Type.SEQUENCE,
      constructed: !0,
      captureAsn1: "subjectPublicKeyInfo",
      value: [{
        name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.SEQUENCE,
        constructed: !0,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: P6.Class.UNIVERSAL,
          type: P6.Type.OID,
          constructed: !1,
          capture: "publicKeyOid"
        }]
      }, {
        name: "SubjectPublicKeyInfo.subjectPublicKey",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.BITSTRING,
        constructed: !1,
        value: [{
          name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
          tagClass: P6.Class.UNIVERSAL,
          type: P6.Type.SEQUENCE,
          constructed: !0,
          optional: !0,
          captureAsn1: "rsaPublicKey"
        }]
      }]
    },
    LvY = {
      name: "DigestInfo",
      tagClass: P6.Class.UNIVERSAL,
      type: P6.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "DigestInfo.DigestAlgorithm",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.SEQUENCE,
        constructed: !0,
        value: [{
          name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
          tagClass: P6.Class.UNIVERSAL,
          type: P6.Type.OID,
          constructed: !1,
          capture: "algorithmIdentifier"
        }, {
          name: "DigestInfo.DigestAlgorithm.parameters",
          tagClass: P6.Class.UNIVERSAL,
          type: P6.Type.NULL,
          capture: "parameters",
          optional: !0,
          constructed: !1
        }]
      }, {
        name: "DigestInfo.digest",
        tagClass: P6.Class.UNIVERSAL,
        type: P6.Type.OCTETSTRING,
        constructed: !1,
        capture: "digest"
      }]
    },
    RvY = function (A) {
      var K;
      if (A.algorithm in c5.oids) K = c5.oids[A.algorithm];else {
        var q = Error("Unknown message digest algorithm.");
        throw q.algorithm = A.algorithm, q;
      }
      var Y = P6.oidToDer(K).getBytes(),
        z = P6.create(P6.Class.UNIVERSAL, P6.Type.SEQUENCE, !0, []),
        w = P6.create(P6.Class.UNIVERSAL, P6.Type.SEQUENCE, !0, []);
      w.value.push(P6.create(P6.Class.UNIVERSAL, P6.Type.OID, !1, Y)), w.value.push(P6.create(P6.Class.UNIVERSAL, P6.Type.NULL, !1, ""));
      var H = P6.create(P6.Class.UNIVERSAL, P6.Type.OCTETSTRING, !1, A.digest().getBytes());
      return z.value.push(w), z.value.push(H), P6.toDer(z).getBytes();
    },
    t_7 = function (A, K, q) {
      if (q) return A.modPow(K.e, K.n);
      if (!K.p || !K.q) return A.modPow(K.d, K.n);
      if (!K.dP) K.dP = K.d.mod(K.p.subtract(OY.ONE));
      if (!K.dQ) K.dQ = K.d.mod(K.q.subtract(OY.ONE));
      if (!K.qInv) K.qInv = K.q.modInverse(K.p);
      var Y;
      do Y = new OY(lK.util.bytesToHex(lK.random.getBytes(K.n.bitLength() / 8)), 16); while (Y.compareTo(K.n) >= 0 || !Y.gcd(K.n).equals(OY.ONE));
      A = A.multiply(Y.modPow(K.e, K.n)).mod(K.n);
      var z = A.mod(K.p).modPow(K.dP, K.p),
        w = A.mod(K.q).modPow(K.dQ, K.q);
      while (z.compareTo(w) < 0) z = z.add(K.p);
      var H = z.subtract(w).multiply(K.qInv).mod(K.p).multiply(K.q).add(w);
      return H = H.multiply(Y.modInverse(K.n)).mod(K.n), H;
    };
  c5.rsa.encrypt = function (A, K, q) {
    var Y = q,
      z,
      w = Math.ceil(K.n.bitLength() / 8);
    if (q !== !1 && q !== !0) Y = q === 2, z = e_7(A, K, q);else z = lK.util.createBuffer(), z.putBytes(A);
    var H = new OY(z.toHex(), 16),
      J = t_7(H, K, Y),
      O = J.toString(16),
      X = lK.util.createBuffer(),
      $ = w - Math.ceil(O.length / 2);
    while ($ > 0) X.putByte(0), --$;
    return X.putBytes(lK.util.hexToBytes(O)), X.getBytes();
  };
  c5.rsa.decrypt = function (A, K, q, Y) {
    var z = Math.ceil(K.n.bitLength() / 8);
    if (A.length !== z) {
      var w = Error("Encrypted message length is invalid.");
      throw w.length = A.length, w.expected = z, w;
    }
    var H = new OY(lK.util.createBuffer(A).toHex(), 16);
    if (H.compareTo(K.n) >= 0) throw Error("Encrypted message is invalid.");
    var J = t_7(H, K, q),
      O = J.toString(16),
      X = lK.util.createBuffer(),
      $ = z - Math.ceil(O.length / 2);
    while ($ > 0) X.putByte(0), --$;
    if (X.putBytes(lK.util.hexToBytes(O)), Y !== !1) return eX1(X.getBytes(), K, q);
    return X.getBytes();
  };
  c5.rsa.createKeyPairGenerationState = function (A, K, q) {
    if (typeof A === "string") A = parseInt(A, 10);
    A = A || 2048, q = q || {};
    var Y = q.prng || lK.random,
      z = {
        nextBytes: function (J) {
          var O = Y.getBytesSync(J.length);
          for (var X = 0; X < J.length; ++X) J[X] = O.charCodeAt(X);
        }
      },
      w = q.algorithm || "PRIMEINC",
      H;
    if (w === "PRIMEINC") H = {
      algorithm: w,
      state: 0,
      bits: A,
      rng: z,
      eInt: K || 65537,
      e: new OY(null),
      p: null,
      q: null,
      qBits: A >> 1,
      pBits: A - (A >> 1),
      pqState: 0,
      num: null,
      keys: null
    }, H.e.fromInt(H.eInt);else throw Error("Invalid key generation algorithm: " + w);
    return H;
  };
  c5.rsa.stepKeyPairGenerationState = function (A, K) {
    if (!("algorithm" in A)) A.algorithm = "PRIMEINC";
    var q = new OY(null);
    q.fromInt(30);
    var Y = 0,
      z = function (_, G) {
        return _ | G;
      },
      w = +new Date(),
      H,
      J = 0;
    while (A.keys === null && (K <= 0 || J < K)) {
      if (A.state === 0) {
        var O = A.p === null ? A.pBits : A.qBits,
          X = O - 1;
        if (A.pqState === 0) {
          if (A.num = new OY(O, A.rng), !A.num.testBit(X)) A.num.bitwiseTo(OY.ONE.shiftLeft(X), z, A.num);
          A.num.dAddOffset(31 - A.num.mod(q).byteValue(), 0), Y = 0, ++A.pqState;
        } else if (A.pqState === 1) {
          if (A.num.bitLength() > O) A.pqState = 0;else if (A.num.isProbablePrime(IvY(A.num.bitLength()))) ++A.pqState;else A.num.dAddOffset(TvY[Y++ % 8], 0);
        } else if (A.pqState === 2) A.pqState = A.num.subtract(OY.ONE).gcd(A.e).compareTo(OY.ONE) === 0 ? 3 : 0;else if (A.pqState === 3) {
          if (A.pqState = 0, A.p === null) A.p = A.num;else A.q = A.num;
          if (A.p !== null && A.q !== null) ++A.state;
          A.num = null;
        }
      } else if (A.state === 1) {
        if (A.p.compareTo(A.q) < 0) A.num = A.p, A.p = A.q, A.q = A.num;
        ++A.state;
      } else if (A.state === 2) A.p1 = A.p.subtract(OY.ONE), A.q1 = A.q.subtract(OY.ONE), A.phi = A.p1.multiply(A.q1), ++A.state;else if (A.state === 3) {
        if (A.phi.gcd(A.e).compareTo(OY.ONE) === 0) ++A.state;else A.p = null, A.q = null, A.state = 0;
      } else if (A.state === 4) {
        if (A.n = A.p.multiply(A.q), A.n.bitLength() === A.bits) ++A.state;else A.q = null, A.state = 0;
      } else if (A.state === 5) {
        var $ = A.e.modInverse(A.phi);
        A.keys = {
          privateKey: c5.rsa.setPrivateKey(A.n, A.e, $, A.p, A.q, $.mod(A.p1), $.mod(A.q1), A.q.modInverse(A.p)),
          publicKey: c5.rsa.setPublicKey(A.n, A.e)
        };
      }
      H = +new Date(), J += H - w, w = H;
    }
    return A.keys !== null;
  };
  c5.rsa.generateKeyPair = function (A, K, q, Y) {
    if (arguments.length === 1) {
      if (typeof A === "object") q = A, A = void 0;else if (typeof A === "function") Y = A, A = void 0;
    } else if (arguments.length === 2) {
      if (typeof A === "number") {
        if (typeof K === "function") Y = K, K = void 0;else if (typeof K !== "number") q = K, K = void 0;
      } else q = A, Y = K, A = void 0, K = void 0;
    } else if (arguments.length === 3) if (typeof K === "number") {
      if (typeof q === "function") Y = q, q = void 0;
    } else Y = q, q = K, K = void 0;
    if (q = q || {}, A === void 0) A = q.bits || 2048;
    if (K === void 0) K = q.e || 65537;
    if (!lK.options.usePureJavaScript && !q.prng && A >= 256 && A <= 16384 && (K === 65537 || K === 3)) {
      if (Y) {
        if (r_7("generateKeyPair")) return Yj6.generateKeyPair("rsa", {
          modulusLength: A,
          publicExponent: K,
          publicKeyEncoding: {
            type: "spki",
            format: "pem"
          },
          privateKeyEncoding: {
            type: "pkcs8",
            format: "pem"
          }
        }, function (J, O, X) {
          if (J) return Y(J);
          Y(null, {
            privateKey: c5.privateKeyFromPem(X),
            publicKey: c5.publicKeyFromPem(O)
          });
        });
        if (o_7("generateKey") && o_7("exportKey")) return mC.globalScope.crypto.subtle.generateKey({
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: A,
          publicExponent: s_7(K),
          hash: {
            name: "SHA-256"
          }
        }, !0, ["sign", "verify"]).then(function (J) {
          return mC.globalScope.crypto.subtle.exportKey("pkcs8", J.privateKey);
        }).then(void 0, function (J) {
          Y(J);
        }).then(function (J) {
          if (J) {
            var O = c5.privateKeyFromAsn1(P6.fromDer(lK.util.createBuffer(J)));
            Y(null, {
              privateKey: O,
              publicKey: c5.setRsaPublicKey(O.n, O.e)
            });
          }
        });
        if (a_7("generateKey") && a_7("exportKey")) {
          var z = mC.globalScope.msCrypto.subtle.generateKey({
            name: "RSASSA-PKCS1-v1_5",
            modulusLength: A,
            publicExponent: s_7(K),
            hash: {
              name: "SHA-256"
            }
          }, !0, ["sign", "verify"]);
          z.oncomplete = function (J) {
            var O = J.target.result,
              X = mC.globalScope.msCrypto.subtle.exportKey("pkcs8", O.privateKey);
            X.oncomplete = function ($) {
              var _ = $.target.result,
                G = c5.privateKeyFromAsn1(P6.fromDer(lK.util.createBuffer(_)));
              Y(null, {
                privateKey: G,
                publicKey: c5.setRsaPublicKey(G.n, G.e)
              });
            }, X.onerror = function ($) {
              Y($);
            };
          }, z.onerror = function (J) {
            Y(J);
          };
          return;
        }
      } else if (r_7("generateKeyPairSync")) {
        var w = Yj6.generateKeyPairSync("rsa", {
          modulusLength: A,
          publicExponent: K,
          publicKeyEncoding: {
            type: "spki",
            format: "pem"
          },
          privateKeyEncoding: {
            type: "pkcs8",
            format: "pem"
          }
        });
        return {
          privateKey: c5.privateKeyFromPem(w.privateKey),
          publicKey: c5.publicKeyFromPem(w.publicKey)
        };
      }
    }
    var H = c5.rsa.createKeyPairGenerationState(A, K, q);
    if (!Y) return c5.rsa.stepKeyPairGenerationState(H, 0), H.keys;
    yvY(H, q, Y);
  };
  c5.setRsaPublicKey = c5.rsa.setPublicKey = function (A, K) {
    var q = {
      n: A,
      e: K
    };
    return q.encrypt = function (Y, z, w) {
      if (typeof z === "string") z = z.toUpperCase();else if (z === void 0) z = "RSAES-PKCS1-V1_5";
      if (z === "RSAES-PKCS1-V1_5") z = {
        encode: function (J, O, X) {
          return e_7(J, O, 2).getBytes();
        }
      };else if (z === "RSA-OAEP" || z === "RSAES-OAEP") z = {
        encode: function (J, O) {
          return lK.pkcs1.encode_rsa_oaep(O, J, w);
        }
      };else if (["RAW", "NONE", "NULL", null].indexOf(z) !== -1) z = {
        encode: function (J) {
          return J;
        }
      };else if (typeof z === "string") throw Error('Unsupported encryption scheme: "' + z + '".');
      var H = z.encode(Y, q, !0);
      return c5.rsa.encrypt(H, q, !0);
    }, q.verify = function (Y, z, w, H) {
      if (typeof w === "string") w = w.toUpperCase();else if (w === void 0) w = "RSASSA-PKCS1-V1_5";
      if (H === void 0) H = {
        _parseAllDigestBytes: !0
      };
      if (!("_parseAllDigestBytes" in H)) H._parseAllDigestBytes = !0;
      if (w === "RSASSA-PKCS1-V1_5") w = {
        verify: function (O, X) {
          X = eX1(X, q, !0);
          var $ = P6.fromDer(X, {
              parseAllBytes: H._parseAllDigestBytes
            }),
            _ = {},
            G = [];
          if (!P6.validate($, LvY, _, G)) {
            var Z = Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.");
            throw Z.errors = G, Z;
          }
          var W = P6.derToOid(_.algorithmIdentifier);
          if (!(W === lK.oids.md2 || W === lK.oids.md5 || W === lK.oids.sha1 || W === lK.oids.sha224 || W === lK.oids.sha256 || W === lK.oids.sha384 || W === lK.oids.sha512 || W === lK.oids["sha512-224"] || W === lK.oids["sha512-256"])) {
            var Z = Error("Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.");
            throw Z.oid = W, Z;
          }
          if (W === lK.oids.md2 || W === lK.oids.md5) {
            if (!("parameters" in _)) throw Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters.");
          }
          return O === _.digest;
        }
      };else if (w === "NONE" || w === "NULL" || w === null) w = {
        verify: function (O, X) {
          return X = eX1(X, q, !0), O === X;
        }
      };
      var J = c5.rsa.decrypt(z, q, !0, !1);
      return w.verify(Y, J, q.n.bitLength());
    }, q;
  };
  c5.setRsaPrivateKey = c5.rsa.setPrivateKey = function (A, K, q, Y, z, w, H, J) {
    var O = {
      n: A,
      e: K,
      d: q,
      p: Y,
      q: z,
      dP: w,
      dQ: H,
      qInv: J
    };
    return O.decrypt = function (X, $, _) {
      if (typeof $ === "string") $ = $.toUpperCase();else if ($ === void 0) $ = "RSAES-PKCS1-V1_5";
      var G = c5.rsa.decrypt(X, O, !1, !1);
      if ($ === "RSAES-PKCS1-V1_5") $ = {
        decode: eX1
      };else if ($ === "RSA-OAEP" || $ === "RSAES-OAEP") $ = {
        decode: function (Z, W) {
          return lK.pkcs1.decode_rsa_oaep(W, Z, _);
        }
      };else if (["RAW", "NONE", "NULL", null].indexOf($) !== -1) $ = {
        decode: function (Z) {
          return Z;
        }
      };else throw Error('Unsupported encryption scheme: "' + $ + '".');
      return $.decode(G, O, !1);
    }, O.sign = function (X, $) {
      var _ = !1;
      if (typeof $ === "string") $ = $.toUpperCase();
      if ($ === void 0 || $ === "RSASSA-PKCS1-V1_5") $ = {
        encode: RvY
      }, _ = 1;else if ($ === "NONE" || $ === "NULL" || $ === null) $ = {
        encode: function () {
          return X;
        }
      }, _ = 1;
      var G = $.encode(X, O.n.bitLength());
      return c5.rsa.encrypt(G, O, _);
    }, O;
  };
  c5.wrapRsaPrivateKey = function (A) {
    return P6.create(P6.Class.UNIVERSAL, P6.Type.SEQUENCE, !0, [P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, P6.integerToDer(0).getBytes()), P6.create(P6.Class.UNIVERSAL, P6.Type.SEQUENCE, !0, [P6.create(P6.Class.UNIVERSAL, P6.Type.OID, !1, P6.oidToDer(c5.oids.rsaEncryption).getBytes()), P6.create(P6.Class.UNIVERSAL, P6.Type.NULL, !1, "")]), P6.create(P6.Class.UNIVERSAL, P6.Type.OCTETSTRING, !1, P6.toDer(A).getBytes())]);
  };
  c5.privateKeyFromAsn1 = function (A) {
    var K = {},
      q = [];
    if (P6.validate(A, vvY, K, q)) A = P6.fromDer(lK.util.createBuffer(K.privateKey));
    if (K = {}, q = [], !P6.validate(A, EvY, K, q)) {
      var Y = Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");
      throw Y.errors = q, Y;
    }
    var z, w, H, J, O, X, $, _;
    return z = lK.util.createBuffer(K.privateKeyModulus).toHex(), w = lK.util.createBuffer(K.privateKeyPublicExponent).toHex(), H = lK.util.createBuffer(K.privateKeyPrivateExponent).toHex(), J = lK.util.createBuffer(K.privateKeyPrime1).toHex(), O = lK.util.createBuffer(K.privateKeyPrime2).toHex(), X = lK.util.createBuffer(K.privateKeyExponent1).toHex(), $ = lK.util.createBuffer(K.privateKeyExponent2).toHex(), _ = lK.util.createBuffer(K.privateKeyCoefficient).toHex(), c5.setRsaPrivateKey(new OY(z, 16), new OY(w, 16), new OY(H, 16), new OY(J, 16), new OY(O, 16), new OY(X, 16), new OY($, 16), new OY(_, 16));
  };
  c5.privateKeyToAsn1 = c5.privateKeyToRSAPrivateKey = function (A) {
    return P6.create(P6.Class.UNIVERSAL, P6.Type.SEQUENCE, !0, [P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, P6.integerToDer(0).getBytes()), P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, KB(A.n)), P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, KB(A.e)), P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, KB(A.d)), P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, KB(A.p)), P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, KB(A.q)), P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, KB(A.dP)), P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, KB(A.dQ)), P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, KB(A.qInv))]);
  };
  c5.publicKeyFromAsn1 = function (A) {
    var K = {},
      q = [];
    if (P6.validate(A, CvY, K, q)) {
      var Y = P6.derToOid(K.publicKeyOid);
      if (Y !== c5.oids.rsaEncryption) {
        var z = Error("Cannot read public key. Unknown OID.");
        throw z.oid = Y, z;
      }
      A = K.rsaPublicKey;
    }
    if (q = [], !P6.validate(A, kvY, K, q)) {
      var z = Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.");
      throw z.errors = q, z;
    }
    var w = lK.util.createBuffer(K.publicKeyModulus).toHex(),
      H = lK.util.createBuffer(K.publicKeyExponent).toHex();
    return c5.setRsaPublicKey(new OY(w, 16), new OY(H, 16));
  };
  c5.publicKeyToAsn1 = c5.publicKeyToSubjectPublicKeyInfo = function (A) {
    return P6.create(P6.Class.UNIVERSAL, P6.Type.SEQUENCE, !0, [P6.create(P6.Class.UNIVERSAL, P6.Type.SEQUENCE, !0, [P6.create(P6.Class.UNIVERSAL, P6.Type.OID, !1, P6.oidToDer(c5.oids.rsaEncryption).getBytes()), P6.create(P6.Class.UNIVERSAL, P6.Type.NULL, !1, "")]), P6.create(P6.Class.UNIVERSAL, P6.Type.BITSTRING, !1, [c5.publicKeyToRSAPublicKey(A)])]);
  };
  c5.publicKeyToRSAPublicKey = function (A) {
    return P6.create(P6.Class.UNIVERSAL, P6.Type.SEQUENCE, !0, [P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, KB(A.n)), P6.create(P6.Class.UNIVERSAL, P6.Type.INTEGER, !1, KB(A.e))]);
  };
  function e_7(A, K, q) {
    var Y = lK.util.createBuffer(),
      z = Math.ceil(K.n.bitLength() / 8);
    if (A.length > z - 11) {
      var w = Error("Message is too long for PKCS#1 v1.5 padding.");
      throw w.length = A.length, w.max = z - 11, w;
    }
    Y.putByte(0), Y.putByte(q);
    var H = z - 3 - A.length,
      J;
    if (q === 0 || q === 1) {
      J = q === 0 ? 0 : 255;
      for (var O = 0; O < H; ++O) Y.putByte(J);
    } else while (H > 0) {
      var X = 0,
        $ = lK.random.getBytes(H);
      for (var O = 0; O < H; ++O) if (J = $.charCodeAt(O), J === 0) ++X;else Y.putByte(J);
      H = X;
    }
    return Y.putByte(0), Y.putBytes(A), Y;
  }
  function eX1(A, K, q, Y) {
    var z = Math.ceil(K.n.bitLength() / 8),
      w = lK.util.createBuffer(A),
      H = w.getByte(),
      J = w.getByte();
    if (H !== 0 || q && J !== 0 && J !== 1 || !q && J != 2 || q && J === 0 && typeof Y > "u") throw Error("Encryption block is invalid.");
    var O = 0;
    if (J === 0) {
      O = z - 3 - Y;
      for (var X = 0; X < O; ++X) if (w.getByte() !== 0) throw Error("Encryption block is invalid.");
    } else if (J === 1) {
      O = 0;
      while (w.length() > 1) {
        if (w.getByte() !== 255) {
          --w.read;
          break;
        }
        ++O;
      }
    } else if (J === 2) {
      O = 0;
      while (w.length() > 1) {
        if (w.getByte() === 0) {
          --w.read;
          break;
        }
        ++O;
      }
    }
    var $ = w.getByte();
    if ($ !== 0 || O !== z - 3 - w.length()) throw Error("Encryption block is invalid.");
    return w.getBytes();
  }
  function yvY(A, K, q) {
    if (typeof K === "function") q = K, K = {};
    K = K || {};
    var Y = {
      algorithm: {
        name: K.algorithm || "PRIMEINC",
        options: {
          workers: K.workers || 2,
          workLoad: K.workLoad || 100,
          workerScript: K.workerScript
        }
      }
    };
    if ("prng" in K) Y.prng = K.prng;
    z();
    function z() {
      w(A.pBits, function (J, O) {
        if (J) return q(J);
        if (A.p = O, A.q !== null) return H(J, A.q);
        w(A.qBits, H);
      });
    }
    function w(J, O) {
      lK.prime.generateProbablePrime(J, Y, O);
    }
    function H(J, O) {
      if (J) return q(J);
      if (A.q = O, A.p.compareTo(A.q) < 0) {
        var X = A.p;
        A.p = A.q, A.q = X;
      }
      if (A.p.subtract(OY.ONE).gcd(A.e).compareTo(OY.ONE) !== 0) {
        A.p = null, z();
        return;
      }
      if (A.q.subtract(OY.ONE).gcd(A.e).compareTo(OY.ONE) !== 0) {
        A.q = null, w(A.qBits, H);
        return;
      }
      if (A.p1 = A.p.subtract(OY.ONE), A.q1 = A.q.subtract(OY.ONE), A.phi = A.p1.multiply(A.q1), A.phi.gcd(A.e).compareTo(OY.ONE) !== 0) {
        A.p = A.q = null, z();
        return;
      }
      if (A.n = A.p.multiply(A.q), A.n.bitLength() !== A.bits) {
        A.q = null, w(A.qBits, H);
        return;
      }
      var $ = A.e.modInverse(A.phi);
      A.keys = {
        privateKey: c5.rsa.setPrivateKey(A.n, A.e, $, A.p, A.q, $.mod(A.p1), $.mod(A.q1), A.q.modInverse(A.p)),
        publicKey: c5.rsa.setPublicKey(A.n, A.e)
      }, q(null, A.keys);
    }
  }
  function KB(A) {
    var K = A.toString(16);
    if (K[0] >= "8") K = "00" + K;
    var q = lK.util.hexToBytes(K);
    if (q.length > 1 && (q.charCodeAt(0) === 0 && (q.charCodeAt(1) & 128) === 0 || q.charCodeAt(0) === 255 && (q.charCodeAt(1) & 128) === 128)) return q.substr(1);
    return q;
  }
  function IvY(A) {
    if (A <= 100) return 27;
    if (A <= 150) return 18;
    if (A <= 200) return 15;
    if (A <= 250) return 12;
    if (A <= 300) return 9;
    if (A <= 350) return 8;
    if (A <= 400) return 7;
    if (A <= 500) return 6;
    if (A <= 600) return 5;
    if (A <= 800) return 4;
    if (A <= 1250) return 3;
    return 2;
  }
  function r_7(A) {
    return lK.util.isNodejs && typeof Yj6[A] === "function";
  }
  function o_7(A) {
    return typeof mC.globalScope < "u" && typeof mC.globalScope.crypto === "object" && typeof mC.globalScope.crypto.subtle === "object" && typeof mC.globalScope.crypto.subtle[A] === "function";
  }
  function a_7(A) {
    return typeof mC.globalScope < "u" && typeof mC.globalScope.msCrypto === "object" && typeof mC.globalScope.msCrypto.subtle === "object" && typeof mC.globalScope.msCrypto.subtle[A] === "function";
  }
  function s_7(A) {
    var K = lK.util.hexToBytes(A.toString(16)),
      q = new Uint8Array(K.length);
    for (var Y = 0; Y < K.length; ++Y) q[Y] = K.charCodeAt(Y);
    return q;
  }
});

// Register to shared state
__$.fBA = fBA;
