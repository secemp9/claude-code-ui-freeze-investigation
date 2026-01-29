// Module: uM1
// Dependencies: DX, HQA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uM1 = v((_AK, GAK) => {
  (function () {
    var A, K, q;
    A = __$.DX(), K = __$.HQA(), GAK.exports = q = class extends K {
      constructor(z, w) {
        super(z);
        if (w == null) throw Error("Missing comment text. " + this.debugInfo());
        this.name = "#comment", this.type = A.Comment, this.value = this.stringify.comment(w);
      }
      clone() {
        return Object.create(this);
      }
      toString(z) {
        return this.options.writer.comment(this, this.options.writer.filterOptions(z));
      }
    };
  }).call(_AK);
});

// Register to shared state
__$.uM1 = uM1;
