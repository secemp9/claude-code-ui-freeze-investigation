// Module: ChA
// Dependencies: gt4, Rw1, X1Y

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ChA = k(() => {
  __$.gt4 = class gt4 {
    constructor(A) {
      if (this._headersMap = new Map(), A) for (let K of Object.keys(A)) this.set(K, A[K]);
    }
    set(A, K) {
      this._headersMap.set(__$.Rw1(A), {
        name: A,
        value: String(K).trim()
      });
    }
    get(A) {
      var K;
      return (K = this._headersMap.get(__$.Rw1(A))) === null || K === void 0 ? void 0 : K.value;
    }
    has(A) {
      return this._headersMap.has(__$.Rw1(A));
    }
    delete(A) {
      this._headersMap.delete(__$.Rw1(A));
    }
    toJSON(A = {}) {
      let K = {};
      if (A.preserveCase) for (let q of this._headersMap.values()) K[q.name] = q.value;else for (let [q, Y] of this._headersMap) K[q] = Y.value;
      return K;
    }
    toString() {
      return JSON.stringify(this.toJSON({
        preserveCase: !0
      }));
    }
    [Symbol.iterator]() {
      return __$.X1Y(this._headersMap);
    }
  };
});

// Register to shared state
__$.ChA = ChA;
