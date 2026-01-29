// Module: mv6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mv6 = v(fm7 => {
  Object.defineProperty(fm7, "__esModule", {
    value: !0
  });
  fm7.createBoundedQueueExportPromiseHandler = void 0;
  class Vm7 {
    _concurrencyLimit;
    _sendingPromises = [];
    constructor(A) {
      this._concurrencyLimit = A;
    }
    pushPromise(A) {
      if (this.hasReachedLimit()) throw Error("Concurrency Limit reached");
      this._sendingPromises.push(A);
      let K = () => {
        let q = this._sendingPromises.indexOf(A);
        this._sendingPromises.splice(q, 1);
      };
      A.then(K, K);
    }
    hasReachedLimit() {
      return this._sendingPromises.length >= this._concurrencyLimit;
    }
    async awaitAll() {
      await Promise.all(this._sendingPromises);
    }
  }
  function $62(A) {
    return new Vm7(A.concurrencyLimit);
  }
  fm7.createBoundedQueueExportPromiseHandler = $62;
});

// Register to shared state
__$.mv6 = mv6;
