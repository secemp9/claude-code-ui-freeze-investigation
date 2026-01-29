// Module: cM1
// Dependencies: DX, HQA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cM1 = v((yAK, IAK) => {
  (function () {
    var A, K, q;
    A = __$.DX(), K = __$.HQA(), IAK.exports = q = class extends K {
      constructor(z, w, H) {
        super(z);
        if (w == null) throw Error("Missing instruction target. " + this.debugInfo());
        if (this.type = A.ProcessingInstruction, this.target = this.stringify.insTarget(w), this.name = this.target, H) this.value = this.stringify.insValue(H);
      }
      clone() {
        return Object.create(this);
      }
      toString(z) {
        return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(z));
      }
      isEqualNode(z) {
        if (!super.isEqualNode(z)) return !1;
        if (z.target !== this.target) return !1;
        return !0;
      }
    };
  }).call(yAK);
});

// Register to shared state
__$.cM1 = cM1;
