// Module: Ua7
// Dependencies: P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ua7 = v(Fa7 => {
  Object.defineProperty(Fa7, "__esModule", {
    value: !0
  });
  Fa7.MultiSpanProcessor = void 0;
  var MX2 = __$.P9();
  class ga7 {
    _spanProcessors;
    constructor(A) {
      this._spanProcessors = A;
    }
    forceFlush() {
      let A = [];
      for (let K of this._spanProcessors) A.push(K.forceFlush());
      return new Promise(K => {
        Promise.all(A).then(() => {
          K();
        }).catch(q => {
          (0, MX2.globalErrorHandler)(q || Error("MultiSpanProcessor: forceFlush failed")), K();
        });
      });
    }
    onStart(A, K) {
      for (let q of this._spanProcessors) q.onStart(A, K);
    }
    onEnd(A) {
      for (let K of this._spanProcessors) K.onEnd(A);
    }
    shutdown() {
      let A = [];
      for (let K of this._spanProcessors) A.push(K.shutdown());
      return new Promise((K, q) => {
        Promise.all(A).then(() => {
          K();
        }, q);
      });
    }
  }
  Fa7.MultiSpanProcessor = ga7;
});

// Register to shared state
__$.Ua7 = Ua7;
