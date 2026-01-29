// Module: Lb4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Lb4 = v((fjw, Cb4) => {
  class kb4 {
    constructor() {
      this.max = 1000, this.map = new Map();
    }
    get(A) {
      let K = this.map.get(A);
      if (K === void 0) return;else return this.map.delete(A), this.map.set(A, K), K;
    }
    delete(A) {
      return this.map.delete(A);
    }
    set(A, K) {
      if (!this.delete(A) && K !== void 0) {
        if (this.map.size >= this.max) {
          let Y = this.map.keys().next().value;
          this.delete(Y);
        }
        this.map.set(A, K);
      }
      return this;
    }
  }
  Cb4.exports = kb4;
});

// Register to shared state
__$.Lb4 = Lb4;
