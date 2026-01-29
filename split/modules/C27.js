// Module: C27
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var C27 = v((lew, k27) => {
  var Ga = k27.exports = function (A, K, q) {
    if (typeof K == "function") q = K, K = {};
    q = K.cb || q;
    var Y = typeof q == "function" ? q : q.pre || function () {},
      z = q.post || function () {};
    O01(K, Y, z, A, "", A);
  };
  Ga.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
  };
  Ga.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  };
  Ga.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  };
  Ga.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function O01(A, K, q, Y, z, w, H, J, O, X) {
    if (Y && typeof Y == "object" && !Array.isArray(Y)) {
      K(Y, z, w, H, J, O, X);
      for (var $ in Y) {
        var _ = Y[$];
        if (Array.isArray(_)) {
          if ($ in Ga.arrayKeywords) for (var G = 0; G < _.length; G++) O01(A, K, q, _[G], z + "/" + $ + "/" + G, w, z, $, Y, G);
        } else if ($ in Ga.propsKeywords) {
          if (_ && typeof _ == "object") for (var Z in _) O01(A, K, q, _[Z], z + "/" + $ + "/" + mXY(Z), w, z, $, Y, Z);
        } else if ($ in Ga.keywords || A.allKeys && !($ in Ga.skipKeywords)) O01(A, K, q, _, z + "/" + $, w, z, $, Y);
      }
      q(Y, z, w, H, J, O, X);
    }
  }
  function mXY(A) {
    return A.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});

// Register to shared state
__$.C27 = C27;
