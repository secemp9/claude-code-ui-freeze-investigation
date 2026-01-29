// Module: FM1
// Dependencies: Dv, DX

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FM1 = v((VAK, fAK) => {
  (function () {
    var A, K, q;
    q = __$.Dv(), A = __$.DX(), fAK.exports = K = class extends q {
      constructor(z, w, H) {
        super(z);
        if (w == null) throw Error("Missing DTD element name. " + this.debugInfo());
        if (!H) H = "(#PCDATA)";
        if (Array.isArray(H)) H = "(" + H.join(",") + ")";
        this.name = this.stringify.name(w), this.type = A.ElementDeclaration, this.value = this.stringify.dtdElementValue(H);
      }
      toString(z) {
        return this.options.writer.dtdElement(this, this.options.writer.filterOptions(z));
      }
    };
  }).call(VAK);
});

// Register to shared state
__$.FM1 = FM1;
