// Module: BM1
// Dependencies: rB, Dv, DX

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BM1 = v((ZAK, WAK) => {
  (function () {
    var A, K, q, Y;
    ({
      isObject: Y
    } = __$.rB()), q = __$.Dv(), A = __$.DX(), WAK.exports = K = class extends q {
      constructor(w, H, J, O) {
        super(w);
        if (Y(H)) ({
          version: H,
          encoding: J,
          standalone: O
        } = H);
        if (!H) H = "1.0";
        if (this.type = A.Declaration, this.version = this.stringify.xmlVersion(H), J != null) this.encoding = this.stringify.xmlEncoding(J);
        if (O != null) this.standalone = this.stringify.xmlStandalone(O);
      }
      toString(w) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(w));
      }
    };
  }).call(ZAK);
});

// Register to shared state
__$.BM1 = BM1;
