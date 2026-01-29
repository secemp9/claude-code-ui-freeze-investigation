// Module: IC4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IC4 = v(RC4 => {
  Object.defineProperty(RC4, "__esModule", {
    value: !0
  });
  RC4.Deferred = void 0;
  class LC4 {
    _promise;
    _resolve;
    _reject;
    constructor() {
      this._promise = new Promise((A, K) => {
        this._resolve = A, this._reject = K;
      });
    }
    get promise() {
      return this._promise;
    }
    resolve(A) {
      this._resolve(A);
    }
    reject(A) {
      this._reject(A);
    }
  }
  RC4.Deferred = LC4;
});

// Register to shared state
__$.IC4 = IC4;
