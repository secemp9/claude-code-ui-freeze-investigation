// Module: m$4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var m$4 = v((hYw, B$4) => {
  class u$4 {
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
  B$4.exports = u$4;
});

// Register to shared state
__$.m$4 = m$4;
