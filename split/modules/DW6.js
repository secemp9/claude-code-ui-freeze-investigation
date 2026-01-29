// Module: DW6
// Dependencies: WW6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DW6 = k(() => {
  __$.WW6 = class WW6 extends Error {
    constructor(A, K) {
      super(A), this.name = "ParseError", this.type = K.type, this.field = K.field, this.value = K.value, this.line = K.line;
    }
  };
});

// Register to shared state
__$.DW6 = DW6;
