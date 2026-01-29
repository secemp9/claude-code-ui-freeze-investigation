// Module: uG7
// Dependencies: m3, xI

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uG7 = v(CEY => {
  var kEY = __$.m3();
  __$.xI();
  var yG = kEY.asn1;
  CEY.privateKeyValidator = {
    name: "PrivateKeyInfo",
    tagClass: yG.Class.UNIVERSAL,
    type: yG.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "PrivateKeyInfo.version",
      tagClass: yG.Class.UNIVERSAL,
      type: yG.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyVersion"
    }, {
      name: "PrivateKeyInfo.privateKeyAlgorithm",
      tagClass: yG.Class.UNIVERSAL,
      type: yG.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "AlgorithmIdentifier.algorithm",
        tagClass: yG.Class.UNIVERSAL,
        type: yG.Type.OID,
        constructed: !1,
        capture: "privateKeyOid"
      }]
    }, {
      name: "PrivateKeyInfo",
      tagClass: yG.Class.UNIVERSAL,
      type: yG.Type.OCTETSTRING,
      constructed: !1,
      capture: "privateKey"
    }]
  };
  CEY.publicKeyValidator = {
    name: "SubjectPublicKeyInfo",
    tagClass: yG.Class.UNIVERSAL,
    type: yG.Type.SEQUENCE,
    constructed: !0,
    captureAsn1: "subjectPublicKeyInfo",
    value: [{
      name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
      tagClass: yG.Class.UNIVERSAL,
      type: yG.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "AlgorithmIdentifier.algorithm",
        tagClass: yG.Class.UNIVERSAL,
        type: yG.Type.OID,
        constructed: !1,
        capture: "publicKeyOid"
      }]
    }, {
      tagClass: yG.Class.UNIVERSAL,
      type: yG.Type.BITSTRING,
      constructed: !1,
      composed: !0,
      captureBitStringValue: "ed25519PublicKey"
    }]
  };
});

// Register to shared state
__$.uG7 = uG7;
