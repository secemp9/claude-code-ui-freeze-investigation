// Module: nZ4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nZ4 = v(lZ4 => {
  Object.defineProperty(lZ4, "__esModule", {
    value: !0
  });
  lZ4.BaggageImpl = void 0;
  class nXA {
    constructor(A) {
      this._entries = A ? new Map(A) : new Map();
    }
    getEntry(A) {
      let K = this._entries.get(A);
      if (!K) return;
      return Object.assign({}, K);
    }
    getAllEntries() {
      return Array.from(this._entries.entries()).map(([A, K]) => [A, K]);
    }
    setEntry(A, K) {
      let q = new nXA(this._entries);
      return q._entries.set(A, K), q;
    }
    removeEntry(A) {
      let K = new nXA(this._entries);
      return K._entries.delete(A), K;
    }
    removeEntries(...A) {
      let K = new nXA(this._entries);
      for (let q of A) K._entries.delete(q);
      return K;
    }
    clear() {
      return new nXA();
    }
  }
  lZ4.BaggageImpl = nXA;
});

// Register to shared state
__$.nZ4 = nZ4;
