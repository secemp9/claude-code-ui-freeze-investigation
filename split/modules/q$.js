// Module: q$
// Dependencies: WY, I91, Sr

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q$ = v(MW9 => {
  var ZW9 = __$.WY(),
    WW9 = __$.I91(),
    DW9 = __$.Sr(),
    jW9 = A => !A || typeof A !== "function" && typeof A !== "object";
  class t4A extends WW9.NodeBase {
    constructor(A) {
      super(ZW9.SCALAR);
      this.value = A;
    }
    toJSON(A, K) {
      return K?.keep ? this.value : DW9.toJS(this.value, A, K);
    }
    toString() {
      return String(this.value);
    }
  }
  t4A.BLOCK_FOLDED = "BLOCK_FOLDED";
  t4A.BLOCK_LITERAL = "BLOCK_LITERAL";
  t4A.PLAIN = "PLAIN";
  t4A.QUOTE_DOUBLE = "QUOTE_DOUBLE";
  t4A.QUOTE_SINGLE = "QUOTE_SINGLE";
  MW9.Scalar = t4A;
  MW9.isScalarValue = jW9;
});

// Register to shared state
__$.q$ = q$;
