// Module: z$1
// Dependencies: m3, ha, xI, MBA, ru, $G7, ba, vqA, K$1, fBA
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var z$1 = v((I4H, jG7) => {
  var iK = __$.m3();
  __$.ha();
  __$.xI();
  __$.MBA();
  __$.ru();
  __$.$G7();
  __$.ba();
  __$.vqA();
  __$.K$1();
  __$.fBA();
  __$.bY();
  var nA = iK.asn1,
    C4 = jG7.exports = iK.pki = iK.pki || {},
    jY = C4.oids,
    w0 = {};
  w0.CN = jY.commonName;
  w0.commonName = "CN";
  w0.C = jY.countryName;
  w0.countryName = "C";
  w0.L = jY.localityName;
  w0.localityName = "L";
  w0.ST = jY.stateOrProvinceName;
  w0.stateOrProvinceName = "ST";
  w0.O = jY.organizationName;
  w0.organizationName = "O";
  w0.OU = jY.organizationalUnitName;
  w0.organizationalUnitName = "OU";
  w0.E = jY.emailAddress;
  w0.emailAddress = "E";
  var ZG7 = iK.pki.rsa.publicKeyValidator,
    gvY = {
      name: "Certificate",
      tagClass: nA.Class.UNIVERSAL,
      type: nA.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "Certificate.TBSCertificate",
        tagClass: nA.Class.UNIVERSAL,
        type: nA.Type.SEQUENCE,
        constructed: !0,
        captureAsn1: "tbsCertificate",
        value: [{
          name: "Certificate.TBSCertificate.version",
          tagClass: nA.Class.CONTEXT_SPECIFIC,
          type: 0,
          constructed: !0,
          optional: !0,
          value: [{
            name: "Certificate.TBSCertificate.version.integer",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.INTEGER,
            constructed: !1,
            capture: "certVersion"
          }]
        }, {
          name: "Certificate.TBSCertificate.serialNumber",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Type.INTEGER,
          constructed: !1,
          capture: "certSerialNumber"
        }, {
          name: "Certificate.TBSCertificate.signature",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Type.SEQUENCE,
          constructed: !0,
          value: [{
            name: "Certificate.TBSCertificate.signature.algorithm",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.OID,
            constructed: !1,
            capture: "certinfoSignatureOid"
          }, {
            name: "Certificate.TBSCertificate.signature.parameters",
            tagClass: nA.Class.UNIVERSAL,
            optional: !0,
            captureAsn1: "certinfoSignatureParams"
          }]
        }, {
          name: "Certificate.TBSCertificate.issuer",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "certIssuer"
        }, {
          name: "Certificate.TBSCertificate.validity",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Type.SEQUENCE,
          constructed: !0,
          value: [{
            name: "Certificate.TBSCertificate.validity.notBefore (utc)",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.UTCTIME,
            constructed: !1,
            optional: !0,
            capture: "certValidity1UTCTime"
          }, {
            name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.GENERALIZEDTIME,
            constructed: !1,
            optional: !0,
            capture: "certValidity2GeneralizedTime"
          }, {
            name: "Certificate.TBSCertificate.validity.notAfter (utc)",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.UTCTIME,
            constructed: !1,
            optional: !0,
            capture: "certValidity3UTCTime"
          }, {
            name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.GENERALIZEDTIME,
            constructed: !1,
            optional: !0,
            capture: "certValidity4GeneralizedTime"
          }]
        }, {
          name: "Certificate.TBSCertificate.subject",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "certSubject"
        }, ZG7, {
          name: "Certificate.TBSCertificate.issuerUniqueID",
          tagClass: nA.Class.CONTEXT_SPECIFIC,
          type: 1,
          constructed: !0,
          optional: !0,
          value: [{
            name: "Certificate.TBSCertificate.issuerUniqueID.id",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.BITSTRING,
            constructed: !1,
            captureBitStringValue: "certIssuerUniqueId"
          }]
        }, {
          name: "Certificate.TBSCertificate.subjectUniqueID",
          tagClass: nA.Class.CONTEXT_SPECIFIC,
          type: 2,
          constructed: !0,
          optional: !0,
          value: [{
            name: "Certificate.TBSCertificate.subjectUniqueID.id",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.BITSTRING,
            constructed: !1,
            captureBitStringValue: "certSubjectUniqueId"
          }]
        }, {
          name: "Certificate.TBSCertificate.extensions",
          tagClass: nA.Class.CONTEXT_SPECIFIC,
          type: 3,
          constructed: !0,
          captureAsn1: "certExtensions",
          optional: !0
        }]
      }, {
        name: "Certificate.signatureAlgorithm",
        tagClass: nA.Class.UNIVERSAL,
        type: nA.Type.SEQUENCE,
        constructed: !0,
        value: [{
          name: "Certificate.signatureAlgorithm.algorithm",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Type.OID,
          constructed: !1,
          capture: "certSignatureOid"
        }, {
          name: "Certificate.TBSCertificate.signature.parameters",
          tagClass: nA.Class.UNIVERSAL,
          optional: !0,
          captureAsn1: "certSignatureParams"
        }]
      }, {
        name: "Certificate.signatureValue",
        tagClass: nA.Class.UNIVERSAL,
        type: nA.Type.BITSTRING,
        constructed: !1,
        captureBitStringValue: "certSignature"
      }]
    },
    FvY = {
      name: "rsapss",
      tagClass: nA.Class.UNIVERSAL,
      type: nA.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "rsapss.hashAlgorithm",
        tagClass: nA.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: !0,
        value: [{
          name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Class.SEQUENCE,
          constructed: !0,
          optional: !0,
          value: [{
            name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.OID,
            constructed: !1,
            capture: "hashOid"
          }]
        }]
      }, {
        name: "rsapss.maskGenAlgorithm",
        tagClass: nA.Class.CONTEXT_SPECIFIC,
        type: 1,
        constructed: !0,
        value: [{
          name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Class.SEQUENCE,
          constructed: !0,
          optional: !0,
          value: [{
            name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.OID,
            constructed: !1,
            capture: "maskGenOid"
          }, {
            name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.SEQUENCE,
            constructed: !0,
            value: [{
              name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
              tagClass: nA.Class.UNIVERSAL,
              type: nA.Type.OID,
              constructed: !1,
              capture: "maskGenHashOid"
            }]
          }]
        }]
      }, {
        name: "rsapss.saltLength",
        tagClass: nA.Class.CONTEXT_SPECIFIC,
        type: 2,
        optional: !0,
        value: [{
          name: "rsapss.saltLength.saltLength",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Class.INTEGER,
          constructed: !1,
          capture: "saltLength"
        }]
      }, {
        name: "rsapss.trailerField",
        tagClass: nA.Class.CONTEXT_SPECIFIC,
        type: 3,
        optional: !0,
        value: [{
          name: "rsapss.trailer.trailer",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Class.INTEGER,
          constructed: !1,
          capture: "trailer"
        }]
      }]
    },
    QvY = {
      name: "CertificationRequestInfo",
      tagClass: nA.Class.UNIVERSAL,
      type: nA.Type.SEQUENCE,
      constructed: !0,
      captureAsn1: "certificationRequestInfo",
      value: [{
        name: "CertificationRequestInfo.integer",
        tagClass: nA.Class.UNIVERSAL,
        type: nA.Type.INTEGER,
        constructed: !1,
        capture: "certificationRequestInfoVersion"
      }, {
        name: "CertificationRequestInfo.subject",
        tagClass: nA.Class.UNIVERSAL,
        type: nA.Type.SEQUENCE,
        constructed: !0,
        captureAsn1: "certificationRequestInfoSubject"
      }, ZG7, {
        name: "CertificationRequestInfo.attributes",
        tagClass: nA.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: !0,
        optional: !0,
        capture: "certificationRequestInfoAttributes",
        value: [{
          name: "CertificationRequestInfo.attributes",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Type.SEQUENCE,
          constructed: !0,
          value: [{
            name: "CertificationRequestInfo.attributes.type",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.OID,
            constructed: !1
          }, {
            name: "CertificationRequestInfo.attributes.value",
            tagClass: nA.Class.UNIVERSAL,
            type: nA.Type.SET,
            constructed: !0
          }]
        }]
      }]
    },
    UvY = {
      name: "CertificationRequest",
      tagClass: nA.Class.UNIVERSAL,
      type: nA.Type.SEQUENCE,
      constructed: !0,
      captureAsn1: "csr",
      value: [QvY, {
        name: "CertificationRequest.signatureAlgorithm",
        tagClass: nA.Class.UNIVERSAL,
        type: nA.Type.SEQUENCE,
        constructed: !0,
        value: [{
          name: "CertificationRequest.signatureAlgorithm.algorithm",
          tagClass: nA.Class.UNIVERSAL,
          type: nA.Type.OID,
          constructed: !1,
          capture: "csrSignatureOid"
        }, {
          name: "CertificationRequest.signatureAlgorithm.parameters",
          tagClass: nA.Class.UNIVERSAL,
          optional: !0,
          captureAsn1: "csrSignatureParams"
        }]
      }, {
        name: "CertificationRequest.signature",
        tagClass: nA.Class.UNIVERSAL,
        type: nA.Type.BITSTRING,
        constructed: !1,
        captureBitStringValue: "csrSignature"
      }]
    };
  C4.RDNAttributesAsArray = function (A, K) {
    var q = [],
      Y,
      z,
      w;
    for (var H = 0; H < A.value.length; ++H) {
      Y = A.value[H];
      for (var J = 0; J < Y.value.length; ++J) {
        if (w = {}, z = Y.value[J], w.type = nA.derToOid(z.value[0].value), w.value = z.value[1].value, w.valueTagClass = z.value[1].type, w.type in jY) {
          if (w.name = jY[w.type], w.name in w0) w.shortName = w0[w.name];
        }
        if (K) K.update(w.type), K.update(w.value);
        q.push(w);
      }
    }
    return q;
  };
  C4.CRIAttributesAsArray = function (A) {
    var K = [];
    for (var q = 0; q < A.length; ++q) {
      var Y = A[q],
        z = nA.derToOid(Y.value[0].value),
        w = Y.value[1].value;
      for (var H = 0; H < w.length; ++H) {
        var J = {};
        if (J.type = z, J.value = w[H].value, J.valueTagClass = w[H].type, J.type in jY) {
          if (J.name = jY[J.type], J.name in w0) J.shortName = w0[J.name];
        }
        if (J.type === jY.extensionRequest) {
          J.extensions = [];
          for (var O = 0; O < J.value.length; ++O) J.extensions.push(C4.certificateExtensionFromAsn1(J.value[O]));
        }
        K.push(J);
      }
    }
    return K;
  };
  function Ba(A, K) {
    if (typeof K === "string") K = {
      shortName: K
    };
    var q = null,
      Y;
    for (var z = 0; q === null && z < A.attributes.length; ++z) if (Y = A.attributes[z], K.type && K.type === Y.type) q = Y;else if (K.name && K.name === Y.name) q = Y;else if (K.shortName && K.shortName === Y.shortName) q = Y;
    return q;
  }
  var q$1 = function (A, K, q) {
      var Y = {};
      if (A !== jY["RSASSA-PSS"]) return Y;
      if (q) Y = {
        hash: {
          algorithmOid: jY.sha1
        },
        mgf: {
          algorithmOid: jY.mgf1,
          hash: {
            algorithmOid: jY.sha1
          }
        },
        saltLength: 20
      };
      var z = {},
        w = [];
      if (!nA.validate(K, FvY, z, w)) {
        var H = Error("Cannot read RSASSA-PSS parameter block.");
        throw H.errors = w, H;
      }
      if (z.hashOid !== void 0) Y.hash = Y.hash || {}, Y.hash.algorithmOid = nA.derToOid(z.hashOid);
      if (z.maskGenOid !== void 0) Y.mgf = Y.mgf || {}, Y.mgf.algorithmOid = nA.derToOid(z.maskGenOid), Y.mgf.hash = Y.mgf.hash || {}, Y.mgf.hash.algorithmOid = nA.derToOid(z.maskGenHashOid);
      if (z.saltLength !== void 0) Y.saltLength = z.saltLength.charCodeAt(0);
      return Y;
    },
    Y$1 = function (A) {
      switch (jY[A.signatureOid]) {
        case "sha1WithRSAEncryption":
        case "sha1WithRSASignature":
          return iK.md.sha1.create();
        case "md5WithRSAEncryption":
          return iK.md.md5.create();
        case "sha256WithRSAEncryption":
          return iK.md.sha256.create();
        case "sha384WithRSAEncryption":
          return iK.md.sha384.create();
        case "sha512WithRSAEncryption":
          return iK.md.sha512.create();
        case "RSASSA-PSS":
          return iK.md.sha256.create();
        default:
          var K = Error("Could not compute " + A.type + " digest. Unknown signature OID.");
          throw K.signatureOid = A.signatureOid, K;
      }
    },
    WG7 = function (A) {
      var K = A.certificate,
        q;
      switch (K.signatureOid) {
        case jY.sha1WithRSAEncryption:
        case jY.sha1WithRSASignature:
          break;
        case jY["RSASSA-PSS"]:
          var Y, z;
          if (Y = jY[K.signatureParameters.mgf.hash.algorithmOid], Y === void 0 || iK.md[Y] === void 0) {
            var w = Error("Unsupported MGF hash function.");
            throw w.oid = K.signatureParameters.mgf.hash.algorithmOid, w.name = Y, w;
          }
          if (z = jY[K.signatureParameters.mgf.algorithmOid], z === void 0 || iK.mgf[z] === void 0) {
            var w = Error("Unsupported MGF function.");
            throw w.oid = K.signatureParameters.mgf.algorithmOid, w.name = z, w;
          }
          if (z = iK.mgf[z].create(iK.md[Y].create()), Y = jY[K.signatureParameters.hash.algorithmOid], Y === void 0 || iK.md[Y] === void 0) {
            var w = Error("Unsupported RSASSA-PSS hash function.");
            throw w.oid = K.signatureParameters.hash.algorithmOid, w.name = Y, w;
          }
          q = iK.pss.create(iK.md[Y].create(), z, K.signatureParameters.saltLength);
          break;
      }
      return K.publicKey.verify(A.md.digest().getBytes(), A.signature, q);
    };
  C4.certificateFromPem = function (A, K, q) {
    var Y = iK.pem.decode(A)[0];
    if (Y.type !== "CERTIFICATE" && Y.type !== "X509 CERTIFICATE" && Y.type !== "TRUSTED CERTIFICATE") {
      var z = Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');
      throw z.headerType = Y.type, z;
    }
    if (Y.procType && Y.procType.type === "ENCRYPTED") throw Error("Could not convert certificate from PEM; PEM is encrypted.");
    var w = nA.fromDer(Y.body, q);
    return C4.certificateFromAsn1(w, K);
  };
  C4.certificateToPem = function (A, K) {
    var q = {
      type: "CERTIFICATE",
      body: nA.toDer(C4.certificateToAsn1(A)).getBytes()
    };
    return iK.pem.encode(q, {
      maxline: K
    });
  };
  C4.publicKeyFromPem = function (A) {
    var K = iK.pem.decode(A)[0];
    if (K.type !== "PUBLIC KEY" && K.type !== "RSA PUBLIC KEY") {
      var q = Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');
      throw q.headerType = K.type, q;
    }
    if (K.procType && K.procType.type === "ENCRYPTED") throw Error("Could not convert public key from PEM; PEM is encrypted.");
    var Y = nA.fromDer(K.body);
    return C4.publicKeyFromAsn1(Y);
  };
  C4.publicKeyToPem = function (A, K) {
    var q = {
      type: "PUBLIC KEY",
      body: nA.toDer(C4.publicKeyToAsn1(A)).getBytes()
    };
    return iK.pem.encode(q, {
      maxline: K
    });
  };
  C4.publicKeyToRSAPublicKeyPem = function (A, K) {
    var q = {
      type: "RSA PUBLIC KEY",
      body: nA.toDer(C4.publicKeyToRSAPublicKey(A)).getBytes()
    };
    return iK.pem.encode(q, {
      maxline: K
    });
  };
  C4.getPublicKeyFingerprint = function (A, K) {
    K = K || {};
    var q = K.md || iK.md.sha1.create(),
      Y = K.type || "RSAPublicKey",
      z;
    switch (Y) {
      case "RSAPublicKey":
        z = nA.toDer(C4.publicKeyToRSAPublicKey(A)).getBytes();
        break;
      case "SubjectPublicKeyInfo":
        z = nA.toDer(C4.publicKeyToAsn1(A)).getBytes();
        break;
      default:
        throw Error('Unknown fingerprint type "' + K.type + '".');
    }
    q.start(), q.update(z);
    var w = q.digest();
    if (K.encoding === "hex") {
      var H = w.toHex();
      if (K.delimiter) return H.match(/.{2}/g).join(K.delimiter);
      return H;
    } else if (K.encoding === "binary") return w.getBytes();else if (K.encoding) throw Error('Unknown encoding "' + K.encoding + '".');
    return w;
  };
  C4.certificationRequestFromPem = function (A, K, q) {
    var Y = iK.pem.decode(A)[0];
    if (Y.type !== "CERTIFICATE REQUEST") {
      var z = Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');
      throw z.headerType = Y.type, z;
    }
    if (Y.procType && Y.procType.type === "ENCRYPTED") throw Error("Could not convert certification request from PEM; PEM is encrypted.");
    var w = nA.fromDer(Y.body, q);
    return C4.certificationRequestFromAsn1(w, K);
  };
  C4.certificationRequestToPem = function (A, K) {
    var q = {
      type: "CERTIFICATE REQUEST",
      body: nA.toDer(C4.certificationRequestToAsn1(A)).getBytes()
    };
    return iK.pem.encode(q, {
      maxline: K
    });
  };
  C4.createCertificate = function () {
    var A = {};
    return A.version = 2, A.serialNumber = "00", A.signatureOid = null, A.signature = null, A.siginfo = {}, A.siginfo.algorithmOid = null, A.validity = {}, A.validity.notBefore = new Date(), A.validity.notAfter = new Date(), A.issuer = {}, A.issuer.getField = function (K) {
      return Ba(A.issuer, K);
    }, A.issuer.addField = function (K) {
      gC([K]), A.issuer.attributes.push(K);
    }, A.issuer.attributes = [], A.issuer.hash = null, A.subject = {}, A.subject.getField = function (K) {
      return Ba(A.subject, K);
    }, A.subject.addField = function (K) {
      gC([K]), A.subject.attributes.push(K);
    }, A.subject.attributes = [], A.subject.hash = null, A.extensions = [], A.publicKey = null, A.md = null, A.setSubject = function (K, q) {
      if (gC(K), A.subject.attributes = K, delete A.subject.uniqueId, q) A.subject.uniqueId = q;
      A.subject.hash = null;
    }, A.setIssuer = function (K, q) {
      if (gC(K), A.issuer.attributes = K, delete A.issuer.uniqueId, q) A.issuer.uniqueId = q;
      A.issuer.hash = null;
    }, A.setExtensions = function (K) {
      for (var q = 0; q < K.length; ++q) DG7(K[q], {
        cert: A
      });
      A.extensions = K;
    }, A.getExtension = function (K) {
      if (typeof K === "string") K = {
        name: K
      };
      var q = null,
        Y;
      for (var z = 0; q === null && z < A.extensions.length; ++z) if (Y = A.extensions[z], K.id && Y.id === K.id) q = Y;else if (K.name && Y.name === K.name) q = Y;
      return q;
    }, A.sign = function (K, q) {
      A.md = q || iK.md.sha1.create();
      var Y = jY[A.md.algorithm + "WithRSAEncryption"];
      if (!Y) {
        var z = Error("Could not compute certificate digest. Unknown message digest algorithm OID.");
        throw z.algorithm = A.md.algorithm, z;
      }
      A.signatureOid = A.siginfo.algorithmOid = Y, A.tbsCertificate = C4.getTBSCertificate(A);
      var w = nA.toDer(A.tbsCertificate);
      A.md.update(w.getBytes()), A.signature = K.sign(A.md);
    }, A.verify = function (K) {
      var q = !1;
      if (!A.issued(K)) {
        var Y = K.issuer,
          z = A.subject,
          w = Error("The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.");
        throw w.expectedIssuer = z.attributes, w.actualIssuer = Y.attributes, w;
      }
      var H = K.md;
      if (H === null) {
        H = Y$1({
          signatureOid: K.signatureOid,
          type: "certificate"
        });
        var J = K.tbsCertificate || C4.getTBSCertificate(K),
          O = nA.toDer(J);
        H.update(O.getBytes());
      }
      if (H !== null) q = WG7({
        certificate: A,
        md: H,
        signature: K.signature
      });
      return q;
    }, A.isIssuer = function (K) {
      var q = !1,
        Y = A.issuer,
        z = K.subject;
      if (Y.hash && z.hash) q = Y.hash === z.hash;else if (Y.attributes.length === z.attributes.length) {
        q = !0;
        var w, H;
        for (var J = 0; q && J < Y.attributes.length; ++J) if (w = Y.attributes[J], H = z.attributes[J], w.type !== H.type || w.value !== H.value) q = !1;
      }
      return q;
    }, A.issued = function (K) {
      return K.isIssuer(A);
    }, A.generateSubjectKeyIdentifier = function () {
      return C4.getPublicKeyFingerprint(A.publicKey, {
        type: "RSAPublicKey"
      });
    }, A.verifySubjectKeyIdentifier = function () {
      var K = jY.subjectKeyIdentifier;
      for (var q = 0; q < A.extensions.length; ++q) {
        var Y = A.extensions[q];
        if (Y.id === K) {
          var z = A.generateSubjectKeyIdentifier().getBytes();
          return iK.util.hexToBytes(Y.subjectKeyIdentifier) === z;
        }
      }
      return !1;
    }, A;
  };
  C4.certificateFromAsn1 = function (A, K) {
    var q = {},
      Y = [];
    if (!nA.validate(A, gvY, q, Y)) {
      var z = Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");
      throw z.errors = Y, z;
    }
    var w = nA.derToOid(q.publicKeyOid);
    if (w !== C4.oids.rsaEncryption) throw Error("Cannot read public key. OID is not RSA.");
    var H = C4.createCertificate();
    H.version = q.certVersion ? q.certVersion.charCodeAt(0) : 0;
    var J = iK.util.createBuffer(q.certSerialNumber);
    H.serialNumber = J.toHex(), H.signatureOid = iK.asn1.derToOid(q.certSignatureOid), H.signatureParameters = q$1(H.signatureOid, q.certSignatureParams, !0), H.siginfo.algorithmOid = iK.asn1.derToOid(q.certinfoSignatureOid), H.siginfo.parameters = q$1(H.siginfo.algorithmOid, q.certinfoSignatureParams, !1), H.signature = q.certSignature;
    var O = [];
    if (q.certValidity1UTCTime !== void 0) O.push(nA.utcTimeToDate(q.certValidity1UTCTime));
    if (q.certValidity2GeneralizedTime !== void 0) O.push(nA.generalizedTimeToDate(q.certValidity2GeneralizedTime));
    if (q.certValidity3UTCTime !== void 0) O.push(nA.utcTimeToDate(q.certValidity3UTCTime));
    if (q.certValidity4GeneralizedTime !== void 0) O.push(nA.generalizedTimeToDate(q.certValidity4GeneralizedTime));
    if (O.length > 2) throw Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");
    if (O.length < 2) throw Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");
    if (H.validity.notBefore = O[0], H.validity.notAfter = O[1], H.tbsCertificate = q.tbsCertificate, K) {
      H.md = Y$1({
        signatureOid: H.signatureOid,
        type: "certificate"
      });
      var X = nA.toDer(H.tbsCertificate);
      H.md.update(X.getBytes());
    }
    var $ = iK.md.sha1.create(),
      _ = nA.toDer(q.certIssuer);
    if ($.update(_.getBytes()), H.issuer.getField = function (W) {
      return Ba(H.issuer, W);
    }, H.issuer.addField = function (W) {
      gC([W]), H.issuer.attributes.push(W);
    }, H.issuer.attributes = C4.RDNAttributesAsArray(q.certIssuer), q.certIssuerUniqueId) H.issuer.uniqueId = q.certIssuerUniqueId;
    H.issuer.hash = $.digest().toHex();
    var G = iK.md.sha1.create(),
      Z = nA.toDer(q.certSubject);
    if (G.update(Z.getBytes()), H.subject.getField = function (W) {
      return Ba(H.subject, W);
    }, H.subject.addField = function (W) {
      gC([W]), H.subject.attributes.push(W);
    }, H.subject.attributes = C4.RDNAttributesAsArray(q.certSubject), q.certSubjectUniqueId) H.subject.uniqueId = q.certSubjectUniqueId;
    if (H.subject.hash = G.digest().toHex(), q.certExtensions) H.extensions = C4.certificateExtensionsFromAsn1(q.certExtensions);else H.extensions = [];
    return H.publicKey = C4.publicKeyFromAsn1(q.subjectPublicKeyInfo), H;
  };
  C4.certificateExtensionsFromAsn1 = function (A) {
    var K = [];
    for (var q = 0; q < A.value.length; ++q) {
      var Y = A.value[q];
      for (var z = 0; z < Y.value.length; ++z) K.push(C4.certificateExtensionFromAsn1(Y.value[z]));
    }
    return K;
  };
  C4.certificateExtensionFromAsn1 = function (A) {
    var K = {};
    if (K.id = nA.derToOid(A.value[0].value), K.critical = !1, A.value[1].type === nA.Type.BOOLEAN) K.critical = A.value[1].value.charCodeAt(0) !== 0, K.value = A.value[2].value;else K.value = A.value[1].value;
    if (K.id in jY) {
      if (K.name = jY[K.id], K.name === "keyUsage") {
        var q = nA.fromDer(K.value),
          Y = 0,
          z = 0;
        if (q.value.length > 1) Y = q.value.charCodeAt(1), z = q.value.length > 2 ? q.value.charCodeAt(2) : 0;
        K.digitalSignature = (Y & 128) === 128, K.nonRepudiation = (Y & 64) === 64, K.keyEncipherment = (Y & 32) === 32, K.dataEncipherment = (Y & 16) === 16, K.keyAgreement = (Y & 8) === 8, K.keyCertSign = (Y & 4) === 4, K.cRLSign = (Y & 2) === 2, K.encipherOnly = (Y & 1) === 1, K.decipherOnly = (z & 128) === 128;
      } else if (K.name === "basicConstraints") {
        var q = nA.fromDer(K.value);
        if (q.value.length > 0 && q.value[0].type === nA.Type.BOOLEAN) K.cA = q.value[0].value.charCodeAt(0) !== 0;else K.cA = !1;
        var w = null;
        if (q.value.length > 0 && q.value[0].type === nA.Type.INTEGER) w = q.value[0].value;else if (q.value.length > 1) w = q.value[1].value;
        if (w !== null) K.pathLenConstraint = nA.derToInteger(w);
      } else if (K.name === "extKeyUsage") {
        var q = nA.fromDer(K.value);
        for (var H = 0; H < q.value.length; ++H) {
          var J = nA.derToOid(q.value[H].value);
          if (J in jY) K[jY[J]] = !0;else K[J] = !0;
        }
      } else if (K.name === "nsCertType") {
        var q = nA.fromDer(K.value),
          Y = 0;
        if (q.value.length > 1) Y = q.value.charCodeAt(1);
        K.client = (Y & 128) === 128, K.server = (Y & 64) === 64, K.email = (Y & 32) === 32, K.objsign = (Y & 16) === 16, K.reserved = (Y & 8) === 8, K.sslCA = (Y & 4) === 4, K.emailCA = (Y & 2) === 2, K.objCA = (Y & 1) === 1;
      } else if (K.name === "subjectAltName" || K.name === "issuerAltName") {
        K.altNames = [];
        var O,
          q = nA.fromDer(K.value);
        for (var X = 0; X < q.value.length; ++X) {
          O = q.value[X];
          var $ = {
            type: O.type,
            value: O.value
          };
          switch (K.altNames.push($), O.type) {
            case 1:
            case 2:
            case 6:
              break;
            case 7:
              $.ip = iK.util.bytesToIP(O.value);
              break;
            case 8:
              $.oid = nA.derToOid(O.value);
              break;
            default:
          }
        }
      } else if (K.name === "subjectKeyIdentifier") {
        var q = nA.fromDer(K.value);
        K.subjectKeyIdentifier = iK.util.bytesToHex(q.value);
      }
    }
    return K;
  };
  C4.certificationRequestFromAsn1 = function (A, K) {
    var q = {},
      Y = [];
    if (!nA.validate(A, UvY, q, Y)) {
      var z = Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");
      throw z.errors = Y, z;
    }
    var w = nA.derToOid(q.publicKeyOid);
    if (w !== C4.oids.rsaEncryption) throw Error("Cannot read public key. OID is not RSA.");
    var H = C4.createCertificationRequest();
    if (H.version = q.csrVersion ? q.csrVersion.charCodeAt(0) : 0, H.signatureOid = iK.asn1.derToOid(q.csrSignatureOid), H.signatureParameters = q$1(H.signatureOid, q.csrSignatureParams, !0), H.siginfo.algorithmOid = iK.asn1.derToOid(q.csrSignatureOid), H.siginfo.parameters = q$1(H.siginfo.algorithmOid, q.csrSignatureParams, !1), H.signature = q.csrSignature, H.certificationRequestInfo = q.certificationRequestInfo, K) {
      H.md = Y$1({
        signatureOid: H.signatureOid,
        type: "certification request"
      });
      var J = nA.toDer(H.certificationRequestInfo);
      H.md.update(J.getBytes());
    }
    var O = iK.md.sha1.create();
    return H.subject.getField = function (X) {
      return Ba(H.subject, X);
    }, H.subject.addField = function (X) {
      gC([X]), H.subject.attributes.push(X);
    }, H.subject.attributes = C4.RDNAttributesAsArray(q.certificationRequestInfoSubject, O), H.subject.hash = O.digest().toHex(), H.publicKey = C4.publicKeyFromAsn1(q.subjectPublicKeyInfo), H.getAttribute = function (X) {
      return Ba(H, X);
    }, H.addAttribute = function (X) {
      gC([X]), H.attributes.push(X);
    }, H.attributes = C4.CRIAttributesAsArray(q.certificationRequestInfoAttributes || []), H;
  };
  C4.createCertificationRequest = function () {
    var A = {};
    return A.version = 0, A.signatureOid = null, A.signature = null, A.siginfo = {}, A.siginfo.algorithmOid = null, A.subject = {}, A.subject.getField = function (K) {
      return Ba(A.subject, K);
    }, A.subject.addField = function (K) {
      gC([K]), A.subject.attributes.push(K);
    }, A.subject.attributes = [], A.subject.hash = null, A.publicKey = null, A.attributes = [], A.getAttribute = function (K) {
      return Ba(A, K);
    }, A.addAttribute = function (K) {
      gC([K]), A.attributes.push(K);
    }, A.md = null, A.setSubject = function (K) {
      gC(K), A.subject.attributes = K, A.subject.hash = null;
    }, A.setAttributes = function (K) {
      gC(K), A.attributes = K;
    }, A.sign = function (K, q) {
      A.md = q || iK.md.sha1.create();
      var Y = jY[A.md.algorithm + "WithRSAEncryption"];
      if (!Y) {
        var z = Error("Could not compute certification request digest. Unknown message digest algorithm OID.");
        throw z.algorithm = A.md.algorithm, z;
      }
      A.signatureOid = A.siginfo.algorithmOid = Y, A.certificationRequestInfo = C4.getCertificationRequestInfo(A);
      var w = nA.toDer(A.certificationRequestInfo);
      A.md.update(w.getBytes()), A.signature = K.sign(A.md);
    }, A.verify = function () {
      var K = !1,
        q = A.md;
      if (q === null) {
        q = Y$1({
          signatureOid: A.signatureOid,
          type: "certification request"
        });
        var Y = A.certificationRequestInfo || C4.getCertificationRequestInfo(A),
          z = nA.toDer(Y);
        q.update(z.getBytes());
      }
      if (q !== null) K = WG7({
        certificate: A,
        md: q,
        signature: A.signature
      });
      return K;
    }, A;
  };
  function xZA(A) {
    var K = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, []),
      q,
      Y,
      z = A.attributes;
    for (var w = 0; w < z.length; ++w) {
      q = z[w];
      var H = q.value,
        J = nA.Type.PRINTABLESTRING;
      if ("valueTagClass" in q) {
        if (J = q.valueTagClass, J === nA.Type.UTF8) H = iK.util.encodeUtf8(H);
      }
      Y = nA.create(nA.Class.UNIVERSAL, nA.Type.SET, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.OID, !1, nA.oidToDer(q.type).getBytes()), nA.create(nA.Class.UNIVERSAL, J, !1, H)])]), K.value.push(Y);
    }
    return K;
  }
  function gC(A) {
    var K;
    for (var q = 0; q < A.length; ++q) {
      if (K = A[q], typeof K.name > "u") {
        if (K.type && K.type in C4.oids) K.name = C4.oids[K.type];else if (K.shortName && K.shortName in w0) K.name = C4.oids[w0[K.shortName]];
      }
      if (typeof K.type > "u") if (K.name && K.name in C4.oids) K.type = C4.oids[K.name];else {
        var Y = Error("Attribute type not specified.");
        throw Y.attribute = K, Y;
      }
      if (typeof K.shortName > "u") {
        if (K.name && K.name in w0) K.shortName = w0[K.name];
      }
      if (K.type === jY.extensionRequest) {
        if (K.valueConstructed = !0, K.valueTagClass = nA.Type.SEQUENCE, !K.value && K.extensions) {
          K.value = [];
          for (var z = 0; z < K.extensions.length; ++z) K.value.push(C4.certificateExtensionToAsn1(DG7(K.extensions[z])));
        }
      }
      if (typeof K.value > "u") {
        var Y = Error("Attribute value not specified.");
        throw Y.attribute = K, Y;
      }
    }
  }
  function DG7(A, K) {
    if (K = K || {}, typeof A.name > "u") {
      if (A.id && A.id in C4.oids) A.name = C4.oids[A.id];
    }
    if (typeof A.id > "u") if (A.name && A.name in C4.oids) A.id = C4.oids[A.name];else {
      var q = Error("Extension ID not specified.");
      throw q.extension = A, q;
    }
    if (typeof A.value < "u") return A;
    if (A.name === "keyUsage") {
      var Y = 0,
        z = 0,
        w = 0;
      if (A.digitalSignature) z |= 128, Y = 7;
      if (A.nonRepudiation) z |= 64, Y = 6;
      if (A.keyEncipherment) z |= 32, Y = 5;
      if (A.dataEncipherment) z |= 16, Y = 4;
      if (A.keyAgreement) z |= 8, Y = 3;
      if (A.keyCertSign) z |= 4, Y = 2;
      if (A.cRLSign) z |= 2, Y = 1;
      if (A.encipherOnly) z |= 1, Y = 0;
      if (A.decipherOnly) w |= 128, Y = 7;
      var H = String.fromCharCode(Y);
      if (w !== 0) H += String.fromCharCode(z) + String.fromCharCode(w);else if (z !== 0) H += String.fromCharCode(z);
      A.value = nA.create(nA.Class.UNIVERSAL, nA.Type.BITSTRING, !1, H);
    } else if (A.name === "basicConstraints") {
      if (A.value = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, []), A.cA) A.value.value.push(nA.create(nA.Class.UNIVERSAL, nA.Type.BOOLEAN, !1, String.fromCharCode(255)));
      if ("pathLenConstraint" in A) A.value.value.push(nA.create(nA.Class.UNIVERSAL, nA.Type.INTEGER, !1, nA.integerToDer(A.pathLenConstraint).getBytes()));
    } else if (A.name === "extKeyUsage") {
      A.value = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, []);
      var J = A.value.value;
      for (var O in A) {
        if (A[O] !== !0) continue;
        if (O in jY) J.push(nA.create(nA.Class.UNIVERSAL, nA.Type.OID, !1, nA.oidToDer(jY[O]).getBytes()));else if (O.indexOf(".") !== -1) J.push(nA.create(nA.Class.UNIVERSAL, nA.Type.OID, !1, nA.oidToDer(O).getBytes()));
      }
    } else if (A.name === "nsCertType") {
      var Y = 0,
        z = 0;
      if (A.client) z |= 128, Y = 7;
      if (A.server) z |= 64, Y = 6;
      if (A.email) z |= 32, Y = 5;
      if (A.objsign) z |= 16, Y = 4;
      if (A.reserved) z |= 8, Y = 3;
      if (A.sslCA) z |= 4, Y = 2;
      if (A.emailCA) z |= 2, Y = 1;
      if (A.objCA) z |= 1, Y = 0;
      var H = String.fromCharCode(Y);
      if (z !== 0) H += String.fromCharCode(z);
      A.value = nA.create(nA.Class.UNIVERSAL, nA.Type.BITSTRING, !1, H);
    } else if (A.name === "subjectAltName" || A.name === "issuerAltName") {
      A.value = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, []);
      var X;
      for (var $ = 0; $ < A.altNames.length; ++$) {
        X = A.altNames[$];
        var H = X.value;
        if (X.type === 7 && X.ip) {
          if (H = iK.util.bytesFromIP(X.ip), H === null) {
            var q = Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');
            throw q.extension = A, q;
          }
        } else if (X.type === 8) if (X.oid) H = nA.oidToDer(nA.oidToDer(X.oid));else H = nA.oidToDer(H);
        A.value.value.push(nA.create(nA.Class.CONTEXT_SPECIFIC, X.type, !1, H));
      }
    } else if (A.name === "nsComment" && K.cert) {
      if (!/^[\x00-\x7F]*$/.test(A.comment) || A.comment.length < 1 || A.comment.length > 128) throw Error('Invalid "nsComment" content.');
      A.value = nA.create(nA.Class.UNIVERSAL, nA.Type.IA5STRING, !1, A.comment);
    } else if (A.name === "subjectKeyIdentifier" && K.cert) {
      var _ = K.cert.generateSubjectKeyIdentifier();
      A.subjectKeyIdentifier = _.toHex(), A.value = nA.create(nA.Class.UNIVERSAL, nA.Type.OCTETSTRING, !1, _.getBytes());
    } else if (A.name === "authorityKeyIdentifier" && K.cert) {
      A.value = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, []);
      var J = A.value.value;
      if (A.keyIdentifier) {
        var G = A.keyIdentifier === !0 ? K.cert.generateSubjectKeyIdentifier().getBytes() : A.keyIdentifier;
        J.push(nA.create(nA.Class.CONTEXT_SPECIFIC, 0, !1, G));
      }
      if (A.authorityCertIssuer) {
        var Z = [nA.create(nA.Class.CONTEXT_SPECIFIC, 4, !0, [xZA(A.authorityCertIssuer === !0 ? K.cert.issuer : A.authorityCertIssuer)])];
        J.push(nA.create(nA.Class.CONTEXT_SPECIFIC, 1, !0, Z));
      }
      if (A.serialNumber) {
        var W = iK.util.hexToBytes(A.serialNumber === !0 ? K.cert.serialNumber : A.serialNumber);
        J.push(nA.create(nA.Class.CONTEXT_SPECIFIC, 2, !1, W));
      }
    } else if (A.name === "cRLDistributionPoints") {
      A.value = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, []);
      var J = A.value.value,
        D = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, []),
        j = nA.create(nA.Class.CONTEXT_SPECIFIC, 0, !0, []),
        X;
      for (var $ = 0; $ < A.altNames.length; ++$) {
        X = A.altNames[$];
        var H = X.value;
        if (X.type === 7 && X.ip) {
          if (H = iK.util.bytesFromIP(X.ip), H === null) {
            var q = Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');
            throw q.extension = A, q;
          }
        } else if (X.type === 8) if (X.oid) H = nA.oidToDer(nA.oidToDer(X.oid));else H = nA.oidToDer(H);
        j.value.push(nA.create(nA.Class.CONTEXT_SPECIFIC, X.type, !1, H));
      }
      D.value.push(nA.create(nA.Class.CONTEXT_SPECIFIC, 0, !0, [j])), J.push(D);
    }
    if (typeof A.value > "u") {
      var q = Error("Extension value not specified.");
      throw q.extension = A, q;
    }
    return A;
  }
  function Oj6(A, K) {
    switch (A) {
      case jY["RSASSA-PSS"]:
        var q = [];
        if (K.hash.algorithmOid !== void 0) q.push(nA.create(nA.Class.CONTEXT_SPECIFIC, 0, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.OID, !1, nA.oidToDer(K.hash.algorithmOid).getBytes()), nA.create(nA.Class.UNIVERSAL, nA.Type.NULL, !1, "")])]));
        if (K.mgf.algorithmOid !== void 0) q.push(nA.create(nA.Class.CONTEXT_SPECIFIC, 1, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.OID, !1, nA.oidToDer(K.mgf.algorithmOid).getBytes()), nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.OID, !1, nA.oidToDer(K.mgf.hash.algorithmOid).getBytes()), nA.create(nA.Class.UNIVERSAL, nA.Type.NULL, !1, "")])])]));
        if (K.saltLength !== void 0) q.push(nA.create(nA.Class.CONTEXT_SPECIFIC, 2, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.INTEGER, !1, nA.integerToDer(K.saltLength).getBytes())]));
        return nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, q);
      default:
        return nA.create(nA.Class.UNIVERSAL, nA.Type.NULL, !1, "");
    }
  }
  function pvY(A) {
    var K = nA.create(nA.Class.CONTEXT_SPECIFIC, 0, !0, []);
    if (A.attributes.length === 0) return K;
    var q = A.attributes;
    for (var Y = 0; Y < q.length; ++Y) {
      var z = q[Y],
        w = z.value,
        H = nA.Type.UTF8;
      if ("valueTagClass" in z) H = z.valueTagClass;
      if (H === nA.Type.UTF8) w = iK.util.encodeUtf8(w);
      var J = !1;
      if ("valueConstructed" in z) J = z.valueConstructed;
      var O = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.OID, !1, nA.oidToDer(z.type).getBytes()), nA.create(nA.Class.UNIVERSAL, nA.Type.SET, !0, [nA.create(nA.Class.UNIVERSAL, H, J, w)])]);
      K.value.push(O);
    }
    return K;
  }
  var dvY = new Date("1950-01-01T00:00:00Z"),
    cvY = new Date("2050-01-01T00:00:00Z");
  function GG7(A) {
    if (A >= dvY && A < cvY) return nA.create(nA.Class.UNIVERSAL, nA.Type.UTCTIME, !1, nA.dateToUtcTime(A));else return nA.create(nA.Class.UNIVERSAL, nA.Type.GENERALIZEDTIME, !1, nA.dateToGeneralizedTime(A));
  }
  C4.getTBSCertificate = function (A) {
    var K = GG7(A.validity.notBefore),
      q = GG7(A.validity.notAfter),
      Y = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [nA.create(nA.Class.CONTEXT_SPECIFIC, 0, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.INTEGER, !1, nA.integerToDer(A.version).getBytes())]), nA.create(nA.Class.UNIVERSAL, nA.Type.INTEGER, !1, iK.util.hexToBytes(A.serialNumber)), nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.OID, !1, nA.oidToDer(A.siginfo.algorithmOid).getBytes()), Oj6(A.siginfo.algorithmOid, A.siginfo.parameters)]), xZA(A.issuer), nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [K, q]), xZA(A.subject), C4.publicKeyToAsn1(A.publicKey)]);
    if (A.issuer.uniqueId) Y.value.push(nA.create(nA.Class.CONTEXT_SPECIFIC, 1, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.BITSTRING, !1, String.fromCharCode(0) + A.issuer.uniqueId)]));
    if (A.subject.uniqueId) Y.value.push(nA.create(nA.Class.CONTEXT_SPECIFIC, 2, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.BITSTRING, !1, String.fromCharCode(0) + A.subject.uniqueId)]));
    if (A.extensions.length > 0) Y.value.push(C4.certificateExtensionsToAsn1(A.extensions));
    return Y;
  };
  C4.getCertificationRequestInfo = function (A) {
    var K = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.INTEGER, !1, nA.integerToDer(A.version).getBytes()), xZA(A.subject), C4.publicKeyToAsn1(A.publicKey), pvY(A)]);
    return K;
  };
  C4.distinguishedNameToAsn1 = function (A) {
    return xZA(A);
  };
  C4.certificateToAsn1 = function (A) {
    var K = A.tbsCertificate || C4.getTBSCertificate(A);
    return nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [K, nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.OID, !1, nA.oidToDer(A.signatureOid).getBytes()), Oj6(A.signatureOid, A.signatureParameters)]), nA.create(nA.Class.UNIVERSAL, nA.Type.BITSTRING, !1, String.fromCharCode(0) + A.signature)]);
  };
  C4.certificateExtensionsToAsn1 = function (A) {
    var K = nA.create(nA.Class.CONTEXT_SPECIFIC, 3, !0, []),
      q = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, []);
    K.value.push(q);
    for (var Y = 0; Y < A.length; ++Y) q.value.push(C4.certificateExtensionToAsn1(A[Y]));
    return K;
  };
  C4.certificateExtensionToAsn1 = function (A) {
    var K = nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, []);
    if (K.value.push(nA.create(nA.Class.UNIVERSAL, nA.Type.OID, !1, nA.oidToDer(A.id).getBytes())), A.critical) K.value.push(nA.create(nA.Class.UNIVERSAL, nA.Type.BOOLEAN, !1, String.fromCharCode(255)));
    var q = A.value;
    if (typeof A.value !== "string") q = nA.toDer(q).getBytes();
    return K.value.push(nA.create(nA.Class.UNIVERSAL, nA.Type.OCTETSTRING, !1, q)), K;
  };
  C4.certificationRequestToAsn1 = function (A) {
    var K = A.certificationRequestInfo || C4.getCertificationRequestInfo(A);
    return nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [K, nA.create(nA.Class.UNIVERSAL, nA.Type.SEQUENCE, !0, [nA.create(nA.Class.UNIVERSAL, nA.Type.OID, !1, nA.oidToDer(A.signatureOid).getBytes()), Oj6(A.signatureOid, A.signatureParameters)]), nA.create(nA.Class.UNIVERSAL, nA.Type.BITSTRING, !1, String.fromCharCode(0) + A.signature)]);
  };
  C4.createCaStore = function (A) {
    var K = {
      certs: {}
    };
    K.getIssuer = function (H) {
      var J = q(H.issuer);
      return J;
    }, K.addCertificate = function (H) {
      if (typeof H === "string") H = iK.pki.certificateFromPem(H);
      if (Y(H.subject), !K.hasCertificate(H)) if (H.subject.hash in K.certs) {
        var J = K.certs[H.subject.hash];
        if (!iK.util.isArray(J)) J = [J];
        J.push(H), K.certs[H.subject.hash] = J;
      } else K.certs[H.subject.hash] = H;
    }, K.hasCertificate = function (H) {
      if (typeof H === "string") H = iK.pki.certificateFromPem(H);
      var J = q(H.subject);
      if (!J) return !1;
      if (!iK.util.isArray(J)) J = [J];
      var O = nA.toDer(C4.certificateToAsn1(H)).getBytes();
      for (var X = 0; X < J.length; ++X) {
        var $ = nA.toDer(C4.certificateToAsn1(J[X])).getBytes();
        if (O === $) return !0;
      }
      return !1;
    }, K.listAllCertificates = function () {
      var H = [];
      for (var J in K.certs) if (K.certs.hasOwnProperty(J)) {
        var O = K.certs[J];
        if (!iK.util.isArray(O)) H.push(O);else for (var X = 0; X < O.length; ++X) H.push(O[X]);
      }
      return H;
    }, K.removeCertificate = function (H) {
      var J;
      if (typeof H === "string") H = iK.pki.certificateFromPem(H);
      if (Y(H.subject), !K.hasCertificate(H)) return null;
      var O = q(H.subject);
      if (!iK.util.isArray(O)) return J = K.certs[H.subject.hash], delete K.certs[H.subject.hash], J;
      var X = nA.toDer(C4.certificateToAsn1(H)).getBytes();
      for (var $ = 0; $ < O.length; ++$) {
        var _ = nA.toDer(C4.certificateToAsn1(O[$])).getBytes();
        if (X === _) J = O[$], O.splice($, 1);
      }
      if (O.length === 0) delete K.certs[H.subject.hash];
      return J;
    };
    function q(H) {
      return Y(H), K.certs[H.hash] || null;
    }
    function Y(H) {
      if (!H.hash) {
        var J = iK.md.sha1.create();
        H.attributes = C4.RDNAttributesAsArray(xZA(H), J), H.hash = J.digest().toHex();
      }
    }
    if (A) for (var z = 0; z < A.length; ++z) {
      var w = A[z];
      K.addCertificate(w);
    }
    return K;
  };
  C4.certificateError = {
    bad_certificate: "forge.pki.BadCertificate",
    unsupported_certificate: "forge.pki.UnsupportedCertificate",
    certificate_revoked: "forge.pki.CertificateRevoked",
    certificate_expired: "forge.pki.CertificateExpired",
    certificate_unknown: "forge.pki.CertificateUnknown",
    unknown_ca: "forge.pki.UnknownCertificateAuthority"
  };
  C4.verifyCertificateChain = function (A, K, q) {
    if (typeof q === "function") q = {
      verify: q
    };
    q = q || {}, K = K.slice(0);
    var Y = K.slice(0),
      z = q.validityCheckDate;
    if (typeof z > "u") z = new Date();
    var w = !0,
      H = null,
      J = 0;
    do {
      var O = K.shift(),
        X = null,
        $ = !1;
      if (z) {
        if (z < O.validity.notBefore || z > O.validity.notAfter) H = {
          message: "Certificate is not valid yet or has expired.",
          error: C4.certificateError.certificate_expired,
          notBefore: O.validity.notBefore,
          notAfter: O.validity.notAfter,
          now: z
        };
      }
      if (H === null) {
        if (X = K[0] || A.getIssuer(O), X === null) {
          if (O.isIssuer(O)) $ = !0, X = O;
        }
        if (X) {
          var _ = X;
          if (!iK.util.isArray(_)) _ = [_];
          var G = !1;
          while (!G && _.length > 0) {
            X = _.shift();
            try {
              G = X.verify(O);
            } catch (T) {}
          }
          if (!G) H = {
            message: "Certificate signature is invalid.",
            error: C4.certificateError.bad_certificate
          };
        }
        if (H === null && (!X || $) && !A.hasCertificate(O)) H = {
          message: "Certificate is not trusted.",
          error: C4.certificateError.unknown_ca
        };
      }
      if (H === null && X && !O.isIssuer(X)) H = {
        message: "Certificate issuer is invalid.",
        error: C4.certificateError.bad_certificate
      };
      if (H === null) {
        var Z = {
          keyUsage: !0,
          basicConstraints: !0
        };
        for (var W = 0; H === null && W < O.extensions.length; ++W) {
          var D = O.extensions[W];
          if (D.critical && !(D.name in Z)) H = {
            message: "Certificate has an unsupported critical extension.",
            error: C4.certificateError.unsupported_certificate
          };
        }
      }
      if (H === null && (!w || K.length === 0 && (!X || $))) {
        var j = O.getExtension("basicConstraints"),
          M = O.getExtension("keyUsage");
        if (M !== null) {
          if (!M.keyCertSign || j === null) H = {
            message: "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
            error: C4.certificateError.bad_certificate
          };
        }
        if (H === null && j !== null && !j.cA) H = {
          message: "Certificate basicConstraints indicates the certificate is not a CA.",
          error: C4.certificateError.bad_certificate
        };
        if (H === null && M !== null && "pathLenConstraint" in j) {
          var P = J - 1;
          if (P > j.pathLenConstraint) H = {
            message: "Certificate basicConstraints pathLenConstraint violated.",
            error: C4.certificateError.bad_certificate
          };
        }
      }
      var f = H === null ? !0 : H.error,
        N = q.verify ? q.verify(f, J, Y) : f;
      if (N === !0) H = null;else {
        if (f === !0) H = {
          message: "The application rejected the certificate.",
          error: C4.certificateError.bad_certificate
        };
        if (N || N === 0) {
          if (typeof N === "object" && !iK.util.isArray(N)) {
            if (N.message) H.message = N.message;
            if (N.error) H.error = N.error;
          } else if (typeof N === "string") H.error = N;
        }
        throw H;
      }
      w = !1, ++J;
    } while (K.length > 0);
    return !0;
  };
});

// Register to shared state
__$.z$1 = z$1;
