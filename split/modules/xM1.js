// Module: xM1
// Dependencies: DX, HQA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xM1 = v((XAK, $AK) => {
  (function () {
    var A, K, q;
    A = __$.DX(), q = __$.HQA(), $AK.exports = K = class extends q {
      constructor(z, w) {
        super(z);
        if (w == null) throw Error("Missing CDATA text. " + this.debugInfo());
        this.name = "#cdata-section", this.type = A.CData, this.value = this.stringify.cdata(w);
      }
      clone() {
        return Object.create(this);
      }
      toString(z) {
        return this.options.writer.cdata(this, this.options.writer.filterOptions(z));
      }
    };
  }).call(XAK);
});

// Register to shared state
__$.xM1 = xM1;
