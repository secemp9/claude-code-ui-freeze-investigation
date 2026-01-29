// Module: $01
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $01 = v(o27 => {
  Object.defineProperty(o27, "__esModule", {
    value: !0
  });
  class r27 extends Error {
    constructor(A) {
      super("validation failed");
      this.errors = A, this.ajv = this.validation = !0;
    }
  }
  o27.default = r27;
});

// Register to shared state
__$.$01 = $01;
