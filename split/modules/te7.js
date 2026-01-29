// Module: te7
// Dependencies: ie7, oe7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var te7 = v((ae7, se7) => {
  (function () {
    var A, K, q;
    K = __$.ie7(), q = __$.oe7(), se7.exports = A = function () {
      class Y {
        constructor() {
          var z;
          this.defaultParams = {
            "canonical-form": !1,
            "cdata-sections": !1,
            comments: !1,
            "datatype-normalization": !1,
            "element-content-whitespace": !0,
            entities: !0,
            "error-handler": new K(),
            infoset: !0,
            "validate-if-schema": !1,
            namespaces: !0,
            "namespace-declarations": !0,
            "normalize-characters": !1,
            "schema-location": "",
            "schema-type": "",
            "split-cdata-sections": !0,
            validate: !1,
            "well-formed": !0
          }, this.params = z = Object.create(this.defaultParams);
        }
        getParameter(z) {
          if (this.params.hasOwnProperty(z)) return this.params[z];else return null;
        }
        canSetParameter(z, w) {
          return !0;
        }
        setParameter(z, w) {
          if (w != null) return this.params[z] = w;else return delete this.params[z];
        }
      }
      return Object.defineProperty(Y.prototype, "parameterNames", {
        get: function () {
          return new q(Object.keys(this.defaultParams));
        }
      }), Y;
    }.call(this);
  }).call(ae7);
});

// Register to shared state
__$.te7 = te7;
