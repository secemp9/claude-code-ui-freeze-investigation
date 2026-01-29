// Module: pM1
// Dependencies: DX, Dv

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pM1 = v((kAK, CAK) => {
  (function () {
    var A, K, q;
    A = __$.DX(), K = __$.Dv(), CAK.exports = q = class extends K {
      constructor(z, w) {
        super(z);
        if (w == null) throw Error("Missing raw text. " + this.debugInfo());
        this.type = A.Raw, this.value = this.stringify.raw(w);
      }
      clone() {
        return Object.create(this);
      }
      toString(z) {
        return this.options.writer.raw(this, this.options.writer.filterOptions(z));
      }
    };
  }).call(kAK);
});

// Register to shared state
__$.pM1 = pM1;
