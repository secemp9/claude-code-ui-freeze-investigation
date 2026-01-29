// Module: fuA
// Dependencies: juA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fuA = v(s27 => {
  Object.defineProperty(s27, "__esModule", {
    value: !0
  });
  var uZ6 = __$.juA();
  class a27 extends Error {
    constructor(A, K, q, Y) {
      super(Y || `can't resolve reference ${q} from id ${K}`);
      this.missingRef = (0, uZ6.resolveUrl)(A, K, q), this.missingSchema = (0, uZ6.normalizeId)((0, uZ6.getFullPath)(A, this.missingRef));
    }
  }
  s27.default = a27;
});

// Register to shared state
__$.fuA = fuA;
