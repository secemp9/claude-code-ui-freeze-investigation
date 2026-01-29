// Module: QM1
// Dependencies: Dv, DX

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QM1 = v((NAK, TAK) => {
  (function () {
    var A, K, q;
    q = __$.Dv(), A = __$.DX(), TAK.exports = K = function () {
      class Y extends q {
        constructor(z, w, H) {
          super(z);
          if (w == null) throw Error("Missing DTD notation name. " + this.debugInfo(w));
          if (!H.pubID && !H.sysID) throw Error("Public or system identifiers are required for an external entity. " + this.debugInfo(w));
          if (this.name = this.stringify.name(w), this.type = A.NotationDeclaration, H.pubID != null) this.pubID = this.stringify.dtdPubID(H.pubID);
          if (H.sysID != null) this.sysID = this.stringify.dtdSysID(H.sysID);
        }
        toString(z) {
          return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(z));
        }
      }
      return Object.defineProperty(Y.prototype, "publicId", {
        get: function () {
          return this.pubID;
        }
      }), Object.defineProperty(Y.prototype, "systemId", {
        get: function () {
          return this.sysID;
        }
      }), Y;
    }.call(this);
  }).call(NAK);
});

// Register to shared state
__$.QM1 = QM1;
