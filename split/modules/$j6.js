// Module: $j6
// Dependencies: m3, xI, LZA, ba, Hj6, wj6, uC, fBA, SZA, bY
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $j6 = v((S4H, PG7) => {
  var OH = __$.m3();
  __$.xI();
  __$.LZA();
  __$.ba();
  __$.Hj6();
  __$.wj6();
  __$.uC();
  __$.fBA();
  __$.SZA();
  __$.bY();
  __$.z$1();
  var {
      asn1: L1,
      pki: F9
    } = OH,
    TBA = PG7.exports = OH.pkcs12 = OH.pkcs12 || {},
    MG7 = {
      name: "ContentInfo",
      tagClass: L1.Class.UNIVERSAL,
      type: L1.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "ContentInfo.contentType",
        tagClass: L1.Class.UNIVERSAL,
        type: L1.Type.OID,
        constructed: !1,
        capture: "contentType"
      }, {
        name: "ContentInfo.content",
        tagClass: L1.Class.CONTEXT_SPECIFIC,
        constructed: !0,
        captureAsn1: "content"
      }]
    },
    lvY = {
      name: "PFX",
      tagClass: L1.Class.UNIVERSAL,
      type: L1.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "PFX.version",
        tagClass: L1.Class.UNIVERSAL,
        type: L1.Type.INTEGER,
        constructed: !1,
        capture: "version"
      }, MG7, {
        name: "PFX.macData",
        tagClass: L1.Class.UNIVERSAL,
        type: L1.Type.SEQUENCE,
        constructed: !0,
        optional: !0,
        captureAsn1: "mac",
        value: [{
          name: "PFX.macData.mac",
          tagClass: L1.Class.UNIVERSAL,
          type: L1.Type.SEQUENCE,
          constructed: !0,
          value: [{
            name: "PFX.macData.mac.digestAlgorithm",
            tagClass: L1.Class.UNIVERSAL,
            type: L1.Type.SEQUENCE,
            constructed: !0,
            value: [{
              name: "PFX.macData.mac.digestAlgorithm.algorithm",
              tagClass: L1.Class.UNIVERSAL,
              type: L1.Type.OID,
              constructed: !1,
              capture: "macAlgorithm"
            }, {
              name: "PFX.macData.mac.digestAlgorithm.parameters",
              tagClass: L1.Class.UNIVERSAL,
              captureAsn1: "macAlgorithmParameters"
            }]
          }, {
            name: "PFX.macData.mac.digest",
            tagClass: L1.Class.UNIVERSAL,
            type: L1.Type.OCTETSTRING,
            constructed: !1,
            capture: "macDigest"
          }]
        }, {
          name: "PFX.macData.macSalt",
          tagClass: L1.Class.UNIVERSAL,
          type: L1.Type.OCTETSTRING,
          constructed: !1,
          capture: "macSalt"
        }, {
          name: "PFX.macData.iterations",
          tagClass: L1.Class.UNIVERSAL,
          type: L1.Type.INTEGER,
          constructed: !1,
          optional: !0,
          capture: "macIterations"
        }]
      }]
    },
    ivY = {
      name: "SafeBag",
      tagClass: L1.Class.UNIVERSAL,
      type: L1.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "SafeBag.bagId",
        tagClass: L1.Class.UNIVERSAL,
        type: L1.Type.OID,
        constructed: !1,
        capture: "bagId"
      }, {
        name: "SafeBag.bagValue",
        tagClass: L1.Class.CONTEXT_SPECIFIC,
        constructed: !0,
        captureAsn1: "bagValue"
      }, {
        name: "SafeBag.bagAttributes",
        tagClass: L1.Class.UNIVERSAL,
        type: L1.Type.SET,
        constructed: !0,
        optional: !0,
        capture: "bagAttributes"
      }]
    },
    nvY = {
      name: "Attribute",
      tagClass: L1.Class.UNIVERSAL,
      type: L1.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "Attribute.attrId",
        tagClass: L1.Class.UNIVERSAL,
        type: L1.Type.OID,
        constructed: !1,
        capture: "oid"
      }, {
        name: "Attribute.attrValues",
        tagClass: L1.Class.UNIVERSAL,
        type: L1.Type.SET,
        constructed: !0,
        capture: "values"
      }]
    },
    rvY = {
      name: "CertBag",
      tagClass: L1.Class.UNIVERSAL,
      type: L1.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "CertBag.certId",
        tagClass: L1.Class.UNIVERSAL,
        type: L1.Type.OID,
        constructed: !1,
        capture: "certId"
      }, {
        name: "CertBag.certValue",
        tagClass: L1.Class.CONTEXT_SPECIFIC,
        constructed: !0,
        value: [{
          name: "CertBag.certValue[0]",
          tagClass: L1.Class.UNIVERSAL,
          type: L1.Class.OCTETSTRING,
          constructed: !1,
          capture: "cert"
        }]
      }]
    };
  function NBA(A, K, q, Y) {
    var z = [];
    for (var w = 0; w < A.length; w++) for (var H = 0; H < A[w].safeBags.length; H++) {
      var J = A[w].safeBags[H];
      if (Y !== void 0 && J.type !== Y) continue;
      if (K === null) {
        z.push(J);
        continue;
      }
      if (J.attributes[K] !== void 0 && J.attributes[K].indexOf(q) >= 0) z.push(J);
    }
    return z;
  }
  TBA.pkcs12FromAsn1 = function (A, K, q) {
    if (typeof K === "string") q = K, K = !0;else if (K === void 0) K = !0;
    var Y = {},
      z = [];
    if (!L1.validate(A, lvY, Y, z)) {
      var w = Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.");
      throw w.errors = w, w;
    }
    var H = {
      version: Y.version.charCodeAt(0),
      safeContents: [],
      getBags: function (j) {
        var M = {},
          P;
        if ("localKeyId" in j) P = j.localKeyId;else if ("localKeyIdHex" in j) P = OH.util.hexToBytes(j.localKeyIdHex);
        if (P === void 0 && !("friendlyName" in j) && "bagType" in j) M[j.bagType] = NBA(H.safeContents, null, null, j.bagType);
        if (P !== void 0) M.localKeyId = NBA(H.safeContents, "localKeyId", P, j.bagType);
        if ("friendlyName" in j) M.friendlyName = NBA(H.safeContents, "friendlyName", j.friendlyName, j.bagType);
        return M;
      },
      getBagsByFriendlyName: function (j, M) {
        return NBA(H.safeContents, "friendlyName", j, M);
      },
      getBagsByLocalKeyId: function (j, M) {
        return NBA(H.safeContents, "localKeyId", j, M);
      }
    };
    if (Y.version.charCodeAt(0) !== 3) {
      var w = Error("PKCS#12 PFX of version other than 3 not supported.");
      throw w.version = Y.version.charCodeAt(0), w;
    }
    if (L1.derToOid(Y.contentType) !== F9.oids.data) {
      var w = Error("Only PKCS#12 PFX in password integrity mode supported.");
      throw w.oid = L1.derToOid(Y.contentType), w;
    }
    var J = Y.content.value[0];
    if (J.tagClass !== L1.Class.UNIVERSAL || J.type !== L1.Type.OCTETSTRING) throw Error("PKCS#12 authSafe content data is not an OCTET STRING.");
    if (J = Xj6(J), Y.mac) {
      var O = null,
        X = 0,
        $ = L1.derToOid(Y.macAlgorithm);
      switch ($) {
        case F9.oids.sha1:
          O = OH.md.sha1.create(), X = 20;
          break;
        case F9.oids.sha256:
          O = OH.md.sha256.create(), X = 32;
          break;
        case F9.oids.sha384:
          O = OH.md.sha384.create(), X = 48;
          break;
        case F9.oids.sha512:
          O = OH.md.sha512.create(), X = 64;
          break;
        case F9.oids.md5:
          O = OH.md.md5.create(), X = 16;
          break;
      }
      if (O === null) throw Error("PKCS#12 uses unsupported MAC algorithm: " + $);
      var _ = new OH.util.ByteBuffer(Y.macSalt),
        G = "macIterations" in Y ? parseInt(OH.util.bytesToHex(Y.macIterations), 16) : 1,
        Z = TBA.generateKey(q, _, 3, G, X, O),
        W = OH.hmac.create();
      W.start(O, Z), W.update(J.value);
      var D = W.getMac();
      if (D.getBytes() !== Y.macDigest) throw Error("PKCS#12 MAC could not be verified. Invalid password?");
    }
    return ovY(H, J.value, K, q), H;
  };
  function Xj6(A) {
    if (A.composed || A.constructed) {
      var K = OH.util.createBuffer();
      for (var q = 0; q < A.value.length; ++q) K.putBytes(A.value[q].value);
      A.composed = A.constructed = !1, A.value = K.getBytes();
    }
    return A;
  }
  function ovY(A, K, q, Y) {
    if (K = L1.fromDer(K, q), K.tagClass !== L1.Class.UNIVERSAL || K.type !== L1.Type.SEQUENCE || K.constructed !== !0) throw Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");
    for (var z = 0; z < K.value.length; z++) {
      var w = K.value[z],
        H = {},
        J = [];
      if (!L1.validate(w, MG7, H, J)) {
        var O = Error("Cannot read ContentInfo.");
        throw O.errors = J, O;
      }
      var X = {
          encrypted: !1
        },
        $ = null,
        _ = H.content.value[0];
      switch (L1.derToOid(H.contentType)) {
        case F9.oids.data:
          if (_.tagClass !== L1.Class.UNIVERSAL || _.type !== L1.Type.OCTETSTRING) throw Error("PKCS#12 SafeContents Data is not an OCTET STRING.");
          $ = Xj6(_).value;
          break;
        case F9.oids.encryptedData:
          $ = avY(_, Y), X.encrypted = !0;
          break;
        default:
          var O = Error("Unsupported PKCS#12 contentType.");
          throw O.contentType = L1.derToOid(H.contentType), O;
      }
      X.safeBags = svY($, q, Y), A.safeContents.push(X);
    }
  }
  function avY(A, K) {
    var q = {},
      Y = [];
    if (!L1.validate(A, OH.pkcs7.asn1.encryptedDataValidator, q, Y)) {
      var z = Error("Cannot read EncryptedContentInfo.");
      throw z.errors = Y, z;
    }
    var w = L1.derToOid(q.contentType);
    if (w !== F9.oids.data) {
      var z = Error("PKCS#12 EncryptedContentInfo ContentType is not Data.");
      throw z.oid = w, z;
    }
    w = L1.derToOid(q.encAlgorithm);
    var H = F9.pbe.getCipher(w, q.encParameter, K),
      J = Xj6(q.encryptedContentAsn1),
      O = OH.util.createBuffer(J.value);
    if (H.update(O), !H.finish()) throw Error("Failed to decrypt PKCS#12 SafeContents.");
    return H.output.getBytes();
  }
  function svY(A, K, q) {
    if (!K && A.length === 0) return [];
    if (A = L1.fromDer(A, K), A.tagClass !== L1.Class.UNIVERSAL || A.type !== L1.Type.SEQUENCE || A.constructed !== !0) throw Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");
    var Y = [];
    for (var z = 0; z < A.value.length; z++) {
      var w = A.value[z],
        H = {},
        J = [];
      if (!L1.validate(w, ivY, H, J)) {
        var O = Error("Cannot read SafeBag.");
        throw O.errors = J, O;
      }
      var X = {
        type: L1.derToOid(H.bagId),
        attributes: tvY(H.bagAttributes)
      };
      Y.push(X);
      var $,
        _,
        G = H.bagValue.value[0];
      switch (X.type) {
        case F9.oids.pkcs8ShroudedKeyBag:
          if (G = F9.decryptPrivateKeyInfo(G, q), G === null) throw Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");
        case F9.oids.keyBag:
          try {
            X.key = F9.privateKeyFromAsn1(G);
          } catch (W) {
            X.key = null, X.asn1 = G;
          }
          continue;
        case F9.oids.certBag:
          $ = rvY, _ = function () {
            if (L1.derToOid(H.certId) !== F9.oids.x509Certificate) {
              var W = Error("Unsupported certificate type, only X.509 supported.");
              throw W.oid = L1.derToOid(H.certId), W;
            }
            var D = L1.fromDer(H.cert, K);
            try {
              X.cert = F9.certificateFromAsn1(D, !0);
            } catch (j) {
              X.cert = null, X.asn1 = D;
            }
          };
          break;
        default:
          var O = Error("Unsupported PKCS#12 SafeBag type.");
          throw O.oid = X.type, O;
      }
      if ($ !== void 0 && !L1.validate(G, $, H, J)) {
        var O = Error("Cannot read PKCS#12 " + $.name);
        throw O.errors = J, O;
      }
      _();
    }
    return Y;
  }
  function tvY(A) {
    var K = {};
    if (A !== void 0) for (var q = 0; q < A.length; ++q) {
      var Y = {},
        z = [];
      if (!L1.validate(A[q], nvY, Y, z)) {
        var w = Error("Cannot read PKCS#12 BagAttribute.");
        throw w.errors = z, w;
      }
      var H = L1.derToOid(Y.oid);
      if (F9.oids[H] === void 0) continue;
      K[F9.oids[H]] = [];
      for (var J = 0; J < Y.values.length; ++J) K[F9.oids[H]].push(Y.values[J].value);
    }
    return K;
  }
  TBA.toPkcs12Asn1 = function (A, K, q, Y) {
    if (Y = Y || {}, Y.saltSize = Y.saltSize || 8, Y.count = Y.count || 2048, Y.algorithm = Y.algorithm || Y.encAlgorithm || "aes128", !("useMac" in Y)) Y.useMac = !0;
    if (!("localKeyId" in Y)) Y.localKeyId = null;
    if (!("generateLocalKeyId" in Y)) Y.generateLocalKeyId = !0;
    var z = Y.localKeyId,
      w;
    if (z !== null) z = OH.util.hexToBytes(z);else if (Y.generateLocalKeyId) if (K) {
      var H = OH.util.isArray(K) ? K[0] : K;
      if (typeof H === "string") H = F9.certificateFromPem(H);
      var J = OH.md.sha1.create();
      J.update(L1.toDer(F9.certificateToAsn1(H)).getBytes()), z = J.digest().getBytes();
    } else z = OH.random.getBytes(20);
    var O = [];
    if (z !== null) O.push(L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OID, !1, L1.oidToDer(F9.oids.localKeyId).getBytes()), L1.create(L1.Class.UNIVERSAL, L1.Type.SET, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OCTETSTRING, !1, z)])]));
    if ("friendlyName" in Y) O.push(L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OID, !1, L1.oidToDer(F9.oids.friendlyName).getBytes()), L1.create(L1.Class.UNIVERSAL, L1.Type.SET, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.BMPSTRING, !1, Y.friendlyName)])]));
    if (O.length > 0) w = L1.create(L1.Class.UNIVERSAL, L1.Type.SET, !0, O);
    var X = [],
      $ = [];
    if (K !== null) if (OH.util.isArray(K)) $ = K;else $ = [K];
    var _ = [];
    for (var G = 0; G < $.length; ++G) {
      if (K = $[G], typeof K === "string") K = F9.certificateFromPem(K);
      var Z = G === 0 ? w : void 0,
        W = F9.certificateToAsn1(K),
        D = L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OID, !1, L1.oidToDer(F9.oids.certBag).getBytes()), L1.create(L1.Class.CONTEXT_SPECIFIC, 0, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OID, !1, L1.oidToDer(F9.oids.x509Certificate).getBytes()), L1.create(L1.Class.CONTEXT_SPECIFIC, 0, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OCTETSTRING, !1, L1.toDer(W).getBytes())])])]), Z]);
      _.push(D);
    }
    if (_.length > 0) {
      var j = L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, _),
        M = L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OID, !1, L1.oidToDer(F9.oids.data).getBytes()), L1.create(L1.Class.CONTEXT_SPECIFIC, 0, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OCTETSTRING, !1, L1.toDer(j).getBytes())])]);
      X.push(M);
    }
    var P = null;
    if (A !== null) {
      var f = F9.wrapRsaPrivateKey(F9.privateKeyToAsn1(A));
      if (q === null) P = L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OID, !1, L1.oidToDer(F9.oids.keyBag).getBytes()), L1.create(L1.Class.CONTEXT_SPECIFIC, 0, !0, [f]), w]);else P = L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OID, !1, L1.oidToDer(F9.oids.pkcs8ShroudedKeyBag).getBytes()), L1.create(L1.Class.CONTEXT_SPECIFIC, 0, !0, [F9.encryptPrivateKeyInfo(f, q, Y)]), w]);
      var N = L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [P]),
        T = L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OID, !1, L1.oidToDer(F9.oids.data).getBytes()), L1.create(L1.Class.CONTEXT_SPECIFIC, 0, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OCTETSTRING, !1, L1.toDer(N).getBytes())])]);
      X.push(T);
    }
    var C = L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, X),
      R;
    if (Y.useMac) {
      var J = OH.md.sha1.create(),
        x = new OH.util.ByteBuffer(OH.random.getBytes(Y.saltSize)),
        y = Y.count,
        A = TBA.generateKey(q, x, 3, y, 20),
        B = OH.hmac.create();
      B.start(J, A), B.update(L1.toDer(C).getBytes());
      var b = B.getMac();
      R = L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OID, !1, L1.oidToDer(F9.oids.sha1).getBytes()), L1.create(L1.Class.UNIVERSAL, L1.Type.NULL, !1, "")]), L1.create(L1.Class.UNIVERSAL, L1.Type.OCTETSTRING, !1, b.getBytes())]), L1.create(L1.Class.UNIVERSAL, L1.Type.OCTETSTRING, !1, x.getBytes()), L1.create(L1.Class.UNIVERSAL, L1.Type.INTEGER, !1, L1.integerToDer(y).getBytes())]);
    }
    return L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.INTEGER, !1, L1.integerToDer(3).getBytes()), L1.create(L1.Class.UNIVERSAL, L1.Type.SEQUENCE, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OID, !1, L1.oidToDer(F9.oids.data).getBytes()), L1.create(L1.Class.CONTEXT_SPECIFIC, 0, !0, [L1.create(L1.Class.UNIVERSAL, L1.Type.OCTETSTRING, !1, L1.toDer(C).getBytes())])]), R]);
  };
  TBA.generateKey = OH.pbe.generatePkcs12Key;
});

// Register to shared state
__$.$j6 = $j6;
