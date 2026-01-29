// Module: Tn7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tn7 = v(fn7 => {
  Object.defineProperty(fn7, "__esModule", {
    value: !0
  });
  fn7.StatusBuilder = void 0;
  class Vn7 {
    constructor() {
      this.code = null, this.details = null, this.metadata = null;
    }
    withCode(A) {
      return this.code = A, this;
    }
    withDetails(A) {
      return this.details = A, this;
    }
    withMetadata(A) {
      return this.metadata = A, this;
    }
    build() {
      let A = {};
      if (this.code !== null) A.code = this.code;
      if (this.details !== null) A.details = this.details;
      if (this.metadata !== null) A.metadata = this.metadata;
      return A;
    }
  }
  fn7.StatusBuilder = Vn7;
});

// Register to shared state
__$.Tn7 = Tn7;
