// Module: gM1
// Dependencies: rB, Dv, DX

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gM1 = v((MAK, PAK) => {
  (function () {
    var A, K, q, Y;
    ({
      isObject: Y
    } = __$.rB()), q = __$.Dv(), A = __$.DX(), PAK.exports = K = function () {
      class z extends q {
        constructor(w, H, J, O) {
          super(w);
          if (J == null) throw Error("Missing DTD entity name. " + this.debugInfo(J));
          if (O == null) throw Error("Missing DTD entity value. " + this.debugInfo(J));
          if (this.pe = !!H, this.name = this.stringify.name(J), this.type = A.EntityDeclaration, !Y(O)) this.value = this.stringify.dtdEntityValue(O), this.internal = !0;else {
            if (!O.pubID && !O.sysID) throw Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(J));
            if (O.pubID && !O.sysID) throw Error("System identifier is required for a public external entity. " + this.debugInfo(J));
            if (this.internal = !1, O.pubID != null) this.pubID = this.stringify.dtdPubID(O.pubID);
            if (O.sysID != null) this.sysID = this.stringify.dtdSysID(O.sysID);
            if (O.nData != null) this.nData = this.stringify.dtdNData(O.nData);
            if (this.pe && this.nData) throw Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(J));
          }
        }
        toString(w) {
          return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(w));
        }
      }
      return Object.defineProperty(z.prototype, "publicId", {
        get: function () {
          return this.pubID;
        }
      }), Object.defineProperty(z.prototype, "systemId", {
        get: function () {
          return this.sysID;
        }
      }), Object.defineProperty(z.prototype, "notationName", {
        get: function () {
          return this.nData || null;
        }
      }), Object.defineProperty(z.prototype, "inputEncoding", {
        get: function () {
          return null;
        }
      }), Object.defineProperty(z.prototype, "xmlEncoding", {
        get: function () {
          return null;
        }
      }), Object.defineProperty(z.prototype, "xmlVersion", {
        get: function () {
          return null;
        }
      }), z;
    }.call(this);
  }).call(MAK);
});

// Register to shared state
__$.gM1 = gM1;
