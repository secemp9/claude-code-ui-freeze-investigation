// Module: Hj6
// Dependencies: m3, xI, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Hj6 = v((C4H, JG7) => {
  var hZA = __$.m3();
  __$.xI();
  __$.bY();
  var w7 = hZA.asn1,
    bZA = JG7.exports = hZA.pkcs7asn1 = hZA.pkcs7asn1 || {};
  hZA.pkcs7 = hZA.pkcs7 || {};
  hZA.pkcs7.asn1 = bZA;
  var wG7 = {
    name: "ContentInfo",
    tagClass: w7.Class.UNIVERSAL,
    type: w7.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "ContentInfo.ContentType",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.OID,
      constructed: !1,
      capture: "contentType"
    }, {
      name: "ContentInfo.content",
      tagClass: w7.Class.CONTEXT_SPECIFIC,
      type: 0,
      constructed: !0,
      optional: !0,
      captureAsn1: "content"
    }]
  };
  bZA.contentInfoValidator = wG7;
  var HG7 = {
    name: "EncryptedContentInfo",
    tagClass: w7.Class.UNIVERSAL,
    type: w7.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "EncryptedContentInfo.contentType",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.OID,
      constructed: !1,
      capture: "contentType"
    }, {
      name: "EncryptedContentInfo.contentEncryptionAlgorithm",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
        tagClass: w7.Class.UNIVERSAL,
        type: w7.Type.OID,
        constructed: !1,
        capture: "encAlgorithm"
      }, {
        name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
        tagClass: w7.Class.UNIVERSAL,
        captureAsn1: "encParameter"
      }]
    }, {
      name: "EncryptedContentInfo.encryptedContent",
      tagClass: w7.Class.CONTEXT_SPECIFIC,
      type: 0,
      capture: "encryptedContent",
      captureAsn1: "encryptedContentAsn1"
    }]
  };
  bZA.envelopedDataValidator = {
    name: "EnvelopedData",
    tagClass: w7.Class.UNIVERSAL,
    type: w7.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "EnvelopedData.Version",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.INTEGER,
      constructed: !1,
      capture: "version"
    }, {
      name: "EnvelopedData.RecipientInfos",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.SET,
      constructed: !0,
      captureAsn1: "recipientInfos"
    }].concat(HG7)
  };
  bZA.encryptedDataValidator = {
    name: "EncryptedData",
    tagClass: w7.Class.UNIVERSAL,
    type: w7.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "EncryptedData.Version",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.INTEGER,
      constructed: !1,
      capture: "version"
    }].concat(HG7)
  };
  var uvY = {
    name: "SignerInfo",
    tagClass: w7.Class.UNIVERSAL,
    type: w7.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "SignerInfo.version",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.INTEGER,
      constructed: !1
    }, {
      name: "SignerInfo.issuerAndSerialNumber",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "SignerInfo.issuerAndSerialNumber.issuer",
        tagClass: w7.Class.UNIVERSAL,
        type: w7.Type.SEQUENCE,
        constructed: !0,
        captureAsn1: "issuer"
      }, {
        name: "SignerInfo.issuerAndSerialNumber.serialNumber",
        tagClass: w7.Class.UNIVERSAL,
        type: w7.Type.INTEGER,
        constructed: !1,
        capture: "serial"
      }]
    }, {
      name: "SignerInfo.digestAlgorithm",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "SignerInfo.digestAlgorithm.algorithm",
        tagClass: w7.Class.UNIVERSAL,
        type: w7.Type.OID,
        constructed: !1,
        capture: "digestAlgorithm"
      }, {
        name: "SignerInfo.digestAlgorithm.parameter",
        tagClass: w7.Class.UNIVERSAL,
        constructed: !1,
        captureAsn1: "digestParameter",
        optional: !0
      }]
    }, {
      name: "SignerInfo.authenticatedAttributes",
      tagClass: w7.Class.CONTEXT_SPECIFIC,
      type: 0,
      constructed: !0,
      optional: !0,
      capture: "authenticatedAttributes"
    }, {
      name: "SignerInfo.digestEncryptionAlgorithm",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.SEQUENCE,
      constructed: !0,
      capture: "signatureAlgorithm"
    }, {
      name: "SignerInfo.encryptedDigest",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.OCTETSTRING,
      constructed: !1,
      capture: "signature"
    }, {
      name: "SignerInfo.unauthenticatedAttributes",
      tagClass: w7.Class.CONTEXT_SPECIFIC,
      type: 1,
      constructed: !0,
      optional: !0,
      capture: "unauthenticatedAttributes"
    }]
  };
  bZA.signedDataValidator = {
    name: "SignedData",
    tagClass: w7.Class.UNIVERSAL,
    type: w7.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "SignedData.Version",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.INTEGER,
      constructed: !1,
      capture: "version"
    }, {
      name: "SignedData.DigestAlgorithms",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.SET,
      constructed: !0,
      captureAsn1: "digestAlgorithms"
    }, wG7, {
      name: "SignedData.Certificates",
      tagClass: w7.Class.CONTEXT_SPECIFIC,
      type: 0,
      optional: !0,
      captureAsn1: "certificates"
    }, {
      name: "SignedData.CertificateRevocationLists",
      tagClass: w7.Class.CONTEXT_SPECIFIC,
      type: 1,
      optional: !0,
      captureAsn1: "crls"
    }, {
      name: "SignedData.SignerInfos",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.SET,
      capture: "signerInfos",
      optional: !0,
      value: [uvY]
    }]
  };
  bZA.recipientInfoValidator = {
    name: "RecipientInfo",
    tagClass: w7.Class.UNIVERSAL,
    type: w7.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "RecipientInfo.version",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.INTEGER,
      constructed: !1,
      capture: "version"
    }, {
      name: "RecipientInfo.issuerAndSerial",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "RecipientInfo.issuerAndSerial.issuer",
        tagClass: w7.Class.UNIVERSAL,
        type: w7.Type.SEQUENCE,
        constructed: !0,
        captureAsn1: "issuer"
      }, {
        name: "RecipientInfo.issuerAndSerial.serialNumber",
        tagClass: w7.Class.UNIVERSAL,
        type: w7.Type.INTEGER,
        constructed: !1,
        capture: "serial"
      }]
    }, {
      name: "RecipientInfo.keyEncryptionAlgorithm",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
        tagClass: w7.Class.UNIVERSAL,
        type: w7.Type.OID,
        constructed: !1,
        capture: "encAlgorithm"
      }, {
        name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
        tagClass: w7.Class.UNIVERSAL,
        constructed: !1,
        captureAsn1: "encParameter",
        optional: !0
      }]
    }, {
      name: "RecipientInfo.encryptedKey",
      tagClass: w7.Class.UNIVERSAL,
      type: w7.Type.OCTETSTRING,
      constructed: !1,
      capture: "encKey"
    }]
  };
});

// Register to shared state
__$.Hj6 = Hj6;
