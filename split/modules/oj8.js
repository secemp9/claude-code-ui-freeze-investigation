// Module: oj8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oj8 = v(rj8 => {
  Object.defineProperty(rj8, "__esModule", {
    value: !0
  });
  class nj8 {
    constructor(A) {
      this._maxSize = A, this._cache = new Map();
    }
    get size() {
      return this._cache.size;
    }
    get(A) {
      let K = this._cache.get(A);
      if (K === void 0) return;
      return this._cache.delete(A), this._cache.set(A, K), K;
    }
    set(A, K) {
      if (this._cache.size >= this._maxSize) this._cache.delete(this._cache.keys().next().value);
      this._cache.set(A, K);
    }
    remove(A) {
      let K = this._cache.get(A);
      if (K) this._cache.delete(A);
      return K;
    }
    clear() {
      this._cache.clear();
    }
    keys() {
      return Array.from(this._cache.keys());
    }
    values() {
      let A = [];
      return this._cache.forEach(K => A.push(K)), A;
    }
  }
  rj8.LRUMap = nj8;
});

// Register to shared state
__$.oj8 = oj8;
