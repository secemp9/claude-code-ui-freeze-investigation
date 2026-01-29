// Module: zZ7
// Dependencies: m3, ha, xI, MBA, ba, vqA, Hj6, uC, bY, z$1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zZ7 = v((U4H, YZ7) => {
  var U4 = __$.m3();
  __$.ha();
  __$.xI();
  __$.MBA();
  __$.ba();
  __$.vqA();
  __$.Hj6();
  __$.uC();
  __$.bY();
  __$.z$1();
  var p1 = U4.asn1,
    lM = YZ7.exports = U4.pkcs7 = U4.pkcs7 || {};
  lM.messageFromPem = function (A) {
    var K = U4.pem.decode(A)[0];
    if (K.type !== "PKCS7") {
      var q = Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');
      throw q.headerType = K.type, q;
    }
    if (K.procType && K.procType.type === "ENCRYPTED") throw Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");
    var Y = p1.fromDer(K.body);
    return lM.messageFromAsn1(Y);
  };
  lM.messageToPem = function (A, K) {
    var q = {
      type: "PKCS7",
      body: p1.toDer(A.toAsn1()).getBytes()
    };
    return U4.pem.encode(q, {
      maxline: K
    });
  };
  lM.messageFromAsn1 = function (A) {
    var K = {},
      q = [];
    if (!p1.validate(A, lM.asn1.contentInfoValidator, K, q)) {
      var Y = Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");
      throw Y.errors = q, Y;
    }
    var z = p1.derToOid(K.contentType),
      w;
    switch (z) {
      case U4.pki.oids.envelopedData:
        w = lM.createEnvelopedData();
        break;
      case U4.pki.oids.encryptedData:
        w = lM.createEncryptedData();
        break;
      case U4.pki.oids.signedData:
        w = lM.createSignedData();
        break;
      default:
        throw Error("Cannot read PKCS#7 message. ContentType with OID " + z + " is not (yet) supported.");
    }
    return w.fromAsn1(K.content.value[0]), w;
  };
  lM.createSignedData = function () {
    var A = null;
    return A = {
      type: U4.pki.oids.signedData,
      version: 1,
      certificates: [],
      crls: [],
      signers: [],
      digestAlgorithmIdentifiers: [],
      contentInfo: null,
      signerInfos: [],
      fromAsn1: function (Y) {
        if (uj6(A, Y, lM.asn1.signedDataValidator), A.certificates = [], A.crls = [], A.digestAlgorithmIdentifiers = [], A.contentInfo = null, A.signerInfos = [], A.rawCapture.certificates) {
          var z = A.rawCapture.certificates.value;
          for (var w = 0; w < z.length; ++w) A.certificates.push(U4.pki.certificateFromAsn1(z[w]));
        }
      },
      toAsn1: function () {
        if (!A.contentInfo) A.sign();
        var Y = [];
        for (var z = 0; z < A.certificates.length; ++z) Y.push(U4.pki.certificateToAsn1(A.certificates[z]));
        var w = [],
          H = p1.create(p1.Class.CONTEXT_SPECIFIC, 0, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.INTEGER, !1, p1.integerToDer(A.version).getBytes()), p1.create(p1.Class.UNIVERSAL, p1.Type.SET, !0, A.digestAlgorithmIdentifiers), A.contentInfo])]);
        if (Y.length > 0) H.value[0].value.push(p1.create(p1.Class.CONTEXT_SPECIFIC, 0, !0, Y));
        if (w.length > 0) H.value[0].value.push(p1.create(p1.Class.CONTEXT_SPECIFIC, 1, !0, w));
        return H.value[0].value.push(p1.create(p1.Class.UNIVERSAL, p1.Type.SET, !0, A.signerInfos)), p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.OID, !1, p1.oidToDer(A.type).getBytes()), H]);
      },
      addSigner: function (Y) {
        var {
          issuer: z,
          serialNumber: w
        } = Y;
        if (Y.certificate) {
          var H = Y.certificate;
          if (typeof H === "string") H = U4.pki.certificateFromPem(H);
          z = H.issuer.attributes, w = H.serialNumber;
        }
        var J = Y.key;
        if (!J) throw Error("Could not add PKCS#7 signer; no private key specified.");
        if (typeof J === "string") J = U4.pki.privateKeyFromPem(J);
        var O = Y.digestAlgorithm || U4.pki.oids.sha1;
        switch (O) {
          case U4.pki.oids.sha1:
          case U4.pki.oids.sha256:
          case U4.pki.oids.sha384:
          case U4.pki.oids.sha512:
          case U4.pki.oids.md5:
            break;
          default:
            throw Error("Could not add PKCS#7 signer; unknown message digest algorithm: " + O);
        }
        var X = Y.authenticatedAttributes || [];
        if (X.length > 0) {
          var $ = !1,
            _ = !1;
          for (var G = 0; G < X.length; ++G) {
            var Z = X[G];
            if (!$ && Z.type === U4.pki.oids.contentType) {
              if ($ = !0, _) break;
              continue;
            }
            if (!_ && Z.type === U4.pki.oids.messageDigest) {
              if (_ = !0, $) break;
              continue;
            }
          }
          if (!$ || !_) throw Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.");
        }
        A.signers.push({
          key: J,
          version: 1,
          issuer: z,
          serialNumber: w,
          digestAlgorithm: O,
          signatureAlgorithm: U4.pki.oids.rsaEncryption,
          signature: null,
          authenticatedAttributes: X,
          unauthenticatedAttributes: []
        });
      },
      sign: function (Y) {
        if (Y = Y || {}, typeof A.content !== "object" || A.contentInfo === null) {
          if (A.contentInfo = p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.OID, !1, p1.oidToDer(U4.pki.oids.data).getBytes())]), "content" in A) {
            var z;
            if (A.content instanceof U4.util.ByteBuffer) z = A.content.bytes();else if (typeof A.content === "string") z = U4.util.encodeUtf8(A.content);
            if (Y.detached) A.detachedContent = p1.create(p1.Class.UNIVERSAL, p1.Type.OCTETSTRING, !1, z);else A.contentInfo.value.push(p1.create(p1.Class.CONTEXT_SPECIFIC, 0, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.OCTETSTRING, !1, z)]));
          }
        }
        if (A.signers.length === 0) return;
        var w = K();
        q(w);
      },
      verify: function () {
        throw Error("PKCS#7 signature verification not yet implemented.");
      },
      addCertificate: function (Y) {
        if (typeof Y === "string") Y = U4.pki.certificateFromPem(Y);
        A.certificates.push(Y);
      },
      addCertificateRevokationList: function (Y) {
        throw Error("PKCS#7 CRL support not yet implemented.");
      }
    }, A;
    function K() {
      var Y = {};
      for (var z = 0; z < A.signers.length; ++z) {
        var w = A.signers[z],
          H = w.digestAlgorithm;
        if (!(H in Y)) Y[H] = U4.md[U4.pki.oids[H]].create();
        if (w.authenticatedAttributes.length === 0) w.md = Y[H];else w.md = U4.md[U4.pki.oids[H]].create();
      }
      A.digestAlgorithmIdentifiers = [];
      for (var H in Y) A.digestAlgorithmIdentifiers.push(p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.OID, !1, p1.oidToDer(H).getBytes()), p1.create(p1.Class.UNIVERSAL, p1.Type.NULL, !1, "")]));
      return Y;
    }
    function q(Y) {
      var z;
      if (A.detachedContent) z = A.detachedContent;else z = A.contentInfo.value[1], z = z.value[0];
      if (!z) throw Error("Could not sign PKCS#7 message; there is no content to sign.");
      var w = p1.derToOid(A.contentInfo.value[0].value),
        H = p1.toDer(z);
      H.getByte(), p1.getBerValueLength(H), H = H.getBytes();
      for (var J in Y) Y[J].start().update(H);
      var O = new Date();
      for (var X = 0; X < A.signers.length; ++X) {
        var $ = A.signers[X];
        if ($.authenticatedAttributes.length === 0) {
          if (w !== U4.pki.oids.data) throw Error("Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.");
        } else {
          $.authenticatedAttributesAsn1 = p1.create(p1.Class.CONTEXT_SPECIFIC, 0, !0, []);
          var _ = p1.create(p1.Class.UNIVERSAL, p1.Type.SET, !0, []);
          for (var G = 0; G < $.authenticatedAttributes.length; ++G) {
            var Z = $.authenticatedAttributes[G];
            if (Z.type === U4.pki.oids.messageDigest) Z.value = Y[$.digestAlgorithm].digest();else if (Z.type === U4.pki.oids.signingTime) {
              if (!Z.value) Z.value = O;
            }
            _.value.push(xj6(Z)), $.authenticatedAttributesAsn1.value.push(xj6(Z));
          }
          H = p1.toDer(_).getBytes(), $.md.start().update(H);
        }
        $.signature = $.key.sign($.md, "RSASSA-PKCS1-V1_5");
      }
      A.signerInfos = nEY(A.signers);
    }
  };
  lM.createEncryptedData = function () {
    var A = null;
    return A = {
      type: U4.pki.oids.encryptedData,
      version: 0,
      encryptedContent: {
        algorithm: U4.pki.oids["aes256-CBC"]
      },
      fromAsn1: function (K) {
        uj6(A, K, lM.asn1.encryptedDataValidator);
      },
      decrypt: function (K) {
        if (K !== void 0) A.encryptedContent.key = K;
        qZ7(A);
      }
    }, A;
  };
  lM.createEnvelopedData = function () {
    var A = null;
    return A = {
      type: U4.pki.oids.envelopedData,
      version: 0,
      recipients: [],
      encryptedContent: {
        algorithm: U4.pki.oids["aes256-CBC"]
      },
      fromAsn1: function (K) {
        var q = uj6(A, K, lM.asn1.envelopedDataValidator);
        A.recipients = cEY(q.recipientInfos.value);
      },
      toAsn1: function () {
        return p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.OID, !1, p1.oidToDer(A.type).getBytes()), p1.create(p1.Class.CONTEXT_SPECIFIC, 0, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.INTEGER, !1, p1.integerToDer(A.version).getBytes()), p1.create(p1.Class.UNIVERSAL, p1.Type.SET, !0, lEY(A.recipients)), p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, rEY(A.encryptedContent))])])]);
      },
      findRecipient: function (K) {
        var q = K.issuer.attributes;
        for (var Y = 0; Y < A.recipients.length; ++Y) {
          var z = A.recipients[Y],
            w = z.issuer;
          if (z.serialNumber !== K.serialNumber) continue;
          if (w.length !== q.length) continue;
          var H = !0;
          for (var J = 0; J < q.length; ++J) if (w[J].type !== q[J].type || w[J].value !== q[J].value) {
            H = !1;
            break;
          }
          if (H) return z;
        }
        return null;
      },
      decrypt: function (K, q) {
        if (A.encryptedContent.key === void 0 && K !== void 0 && q !== void 0) switch (K.encryptedContent.algorithm) {
          case U4.pki.oids.rsaEncryption:
          case U4.pki.oids.desCBC:
            var Y = q.decrypt(K.encryptedContent.content);
            A.encryptedContent.key = U4.util.createBuffer(Y);
            break;
          default:
            throw Error("Unsupported asymmetric cipher, OID " + K.encryptedContent.algorithm);
        }
        qZ7(A);
      },
      addRecipient: function (K) {
        A.recipients.push({
          version: 0,
          issuer: K.issuer.attributes,
          serialNumber: K.serialNumber,
          encryptedContent: {
            algorithm: U4.pki.oids.rsaEncryption,
            key: K.publicKey
          }
        });
      },
      encrypt: function (K, q) {
        if (A.encryptedContent.content === void 0) {
          q = q || A.encryptedContent.algorithm, K = K || A.encryptedContent.key;
          var Y, z, w;
          switch (q) {
            case U4.pki.oids["aes128-CBC"]:
              Y = 16, z = 16, w = U4.aes.createEncryptionCipher;
              break;
            case U4.pki.oids["aes192-CBC"]:
              Y = 24, z = 16, w = U4.aes.createEncryptionCipher;
              break;
            case U4.pki.oids["aes256-CBC"]:
              Y = 32, z = 16, w = U4.aes.createEncryptionCipher;
              break;
            case U4.pki.oids["des-EDE3-CBC"]:
              Y = 24, z = 8, w = U4.des.createEncryptionCipher;
              break;
            default:
              throw Error("Unsupported symmetric cipher, OID " + q);
          }
          if (K === void 0) K = U4.util.createBuffer(U4.random.getBytes(Y));else if (K.length() != Y) throw Error("Symmetric key has wrong length; got " + K.length() + " bytes, expected " + Y + ".");
          A.encryptedContent.algorithm = q, A.encryptedContent.key = K, A.encryptedContent.parameter = U4.util.createBuffer(U4.random.getBytes(z));
          var H = w(K);
          if (H.start(A.encryptedContent.parameter.copy()), H.update(A.content), !H.finish()) throw Error("Symmetric encryption failed.");
          A.encryptedContent.content = H.output;
        }
        for (var J = 0; J < A.recipients.length; ++J) {
          var O = A.recipients[J];
          if (O.encryptedContent.content !== void 0) continue;
          switch (O.encryptedContent.algorithm) {
            case U4.pki.oids.rsaEncryption:
              O.encryptedContent.content = O.encryptedContent.key.encrypt(A.encryptedContent.key.data);
              break;
            default:
              throw Error("Unsupported asymmetric cipher, OID " + O.encryptedContent.algorithm);
          }
        }
      }
    }, A;
  };
  function pEY(A) {
    var K = {},
      q = [];
    if (!p1.validate(A, lM.asn1.recipientInfoValidator, K, q)) {
      var Y = Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");
      throw Y.errors = q, Y;
    }
    return {
      version: K.version.charCodeAt(0),
      issuer: U4.pki.RDNAttributesAsArray(K.issuer),
      serialNumber: U4.util.createBuffer(K.serial).toHex(),
      encryptedContent: {
        algorithm: p1.derToOid(K.encAlgorithm),
        parameter: K.encParameter ? K.encParameter.value : void 0,
        content: K.encKey
      }
    };
  }
  function dEY(A) {
    return p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.INTEGER, !1, p1.integerToDer(A.version).getBytes()), p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [U4.pki.distinguishedNameToAsn1({
      attributes: A.issuer
    }), p1.create(p1.Class.UNIVERSAL, p1.Type.INTEGER, !1, U4.util.hexToBytes(A.serialNumber))]), p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.OID, !1, p1.oidToDer(A.encryptedContent.algorithm).getBytes()), p1.create(p1.Class.UNIVERSAL, p1.Type.NULL, !1, "")]), p1.create(p1.Class.UNIVERSAL, p1.Type.OCTETSTRING, !1, A.encryptedContent.content)]);
  }
  function cEY(A) {
    var K = [];
    for (var q = 0; q < A.length; ++q) K.push(pEY(A[q]));
    return K;
  }
  function lEY(A) {
    var K = [];
    for (var q = 0; q < A.length; ++q) K.push(dEY(A[q]));
    return K;
  }
  function iEY(A) {
    var K = p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.INTEGER, !1, p1.integerToDer(A.version).getBytes()), p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [U4.pki.distinguishedNameToAsn1({
      attributes: A.issuer
    }), p1.create(p1.Class.UNIVERSAL, p1.Type.INTEGER, !1, U4.util.hexToBytes(A.serialNumber))]), p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.OID, !1, p1.oidToDer(A.digestAlgorithm).getBytes()), p1.create(p1.Class.UNIVERSAL, p1.Type.NULL, !1, "")])]);
    if (A.authenticatedAttributesAsn1) K.value.push(A.authenticatedAttributesAsn1);
    if (K.value.push(p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.OID, !1, p1.oidToDer(A.signatureAlgorithm).getBytes()), p1.create(p1.Class.UNIVERSAL, p1.Type.NULL, !1, "")])), K.value.push(p1.create(p1.Class.UNIVERSAL, p1.Type.OCTETSTRING, !1, A.signature)), A.unauthenticatedAttributes.length > 0) {
      var q = p1.create(p1.Class.CONTEXT_SPECIFIC, 1, !0, []);
      for (var Y = 0; Y < A.unauthenticatedAttributes.length; ++Y) {
        var z = A.unauthenticatedAttributes[Y];
        q.values.push(xj6(z));
      }
      K.value.push(q);
    }
    return K;
  }
  function nEY(A) {
    var K = [];
    for (var q = 0; q < A.length; ++q) K.push(iEY(A[q]));
    return K;
  }
  function xj6(A) {
    var K;
    if (A.type === U4.pki.oids.contentType) K = p1.create(p1.Class.UNIVERSAL, p1.Type.OID, !1, p1.oidToDer(A.value).getBytes());else if (A.type === U4.pki.oids.messageDigest) K = p1.create(p1.Class.UNIVERSAL, p1.Type.OCTETSTRING, !1, A.value.bytes());else if (A.type === U4.pki.oids.signingTime) {
      var q = new Date("1950-01-01T00:00:00Z"),
        Y = new Date("2050-01-01T00:00:00Z"),
        z = A.value;
      if (typeof z === "string") {
        var w = Date.parse(z);
        if (!isNaN(w)) z = new Date(w);else if (z.length === 13) z = p1.utcTimeToDate(z);else z = p1.generalizedTimeToDate(z);
      }
      if (z >= q && z < Y) K = p1.create(p1.Class.UNIVERSAL, p1.Type.UTCTIME, !1, p1.dateToUtcTime(z));else K = p1.create(p1.Class.UNIVERSAL, p1.Type.GENERALIZEDTIME, !1, p1.dateToGeneralizedTime(z));
    }
    return p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.OID, !1, p1.oidToDer(A.type).getBytes()), p1.create(p1.Class.UNIVERSAL, p1.Type.SET, !0, [K])]);
  }
  function rEY(A) {
    return [p1.create(p1.Class.UNIVERSAL, p1.Type.OID, !1, p1.oidToDer(U4.pki.oids.data).getBytes()), p1.create(p1.Class.UNIVERSAL, p1.Type.SEQUENCE, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.OID, !1, p1.oidToDer(A.algorithm).getBytes()), !A.parameter ? void 0 : p1.create(p1.Class.UNIVERSAL, p1.Type.OCTETSTRING, !1, A.parameter.getBytes())]), p1.create(p1.Class.CONTEXT_SPECIFIC, 0, !0, [p1.create(p1.Class.UNIVERSAL, p1.Type.OCTETSTRING, !1, A.content.getBytes())])];
  }
  function uj6(A, K, q) {
    var Y = {},
      z = [];
    if (!p1.validate(K, q, Y, z)) {
      var w = Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");
      throw w.errors = w, w;
    }
    var H = p1.derToOid(Y.contentType);
    if (H !== U4.pki.oids.data) throw Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");
    if (Y.encryptedContent) {
      var J = "";
      if (U4.util.isArray(Y.encryptedContent)) for (var O = 0; O < Y.encryptedContent.length; ++O) {
        if (Y.encryptedContent[O].type !== p1.Type.OCTETSTRING) throw Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");
        J += Y.encryptedContent[O].value;
      } else J = Y.encryptedContent;
      A.encryptedContent = {
        algorithm: p1.derToOid(Y.encAlgorithm),
        parameter: U4.util.createBuffer(Y.encParameter.value),
        content: U4.util.createBuffer(J)
      };
    }
    if (Y.content) {
      var J = "";
      if (U4.util.isArray(Y.content)) for (var O = 0; O < Y.content.length; ++O) {
        if (Y.content[O].type !== p1.Type.OCTETSTRING) throw Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");
        J += Y.content[O].value;
      } else J = Y.content;
      A.content = U4.util.createBuffer(J);
    }
    return A.version = Y.version.charCodeAt(0), A.rawCapture = Y, Y;
  }
  function qZ7(A) {
    if (A.encryptedContent.key === void 0) throw Error("Symmetric key not available.");
    if (A.content === void 0) {
      var K;
      switch (A.encryptedContent.algorithm) {
        case U4.pki.oids["aes128-CBC"]:
        case U4.pki.oids["aes192-CBC"]:
        case U4.pki.oids["aes256-CBC"]:
          K = U4.aes.createDecryptionCipher(A.encryptedContent.key);
          break;
        case U4.pki.oids.desCBC:
        case U4.pki.oids["des-EDE3-CBC"]:
          K = U4.des.createDecryptionCipher(A.encryptedContent.key);
          break;
        default:
          throw Error("Unsupported symmetric cipher, OID " + A.encryptedContent.algorithm);
      }
      if (K.start(A.encryptedContent.parameter), K.update(A.encryptedContent.content), !K.finish()) throw Error("Symmetric decryption failed.");
      A.content = K.output;
    }
  }
});

// Register to shared state
__$.zZ7 = zZ7;
