// Module: lV6
// Dependencies: $s

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lV6 = v(OT7 => {
  Object.defineProperty(OT7, "__esModule", {
    value: !0
  });
  OT7.Semaphore = void 0;
  var IBY = __$.$s();
  class JT7 {
    constructor(A = 1) {
      if (A <= 0) throw Error("Capacity must be greater than 0");
      this._capacity = A, this._active = 0, this._waiting = [];
    }
    lock(A) {
      return new Promise((K, q) => {
        this._waiting.push({
          thunk: A,
          resolve: K,
          reject: q
        }), this.runNext();
      });
    }
    get active() {
      return this._active;
    }
    runNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) return;
      (0, IBY.default)().timer.setImmediate(() => this.doRunNext());
    }
    doRunNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) return;
      let A = this._waiting.shift();
      if (this._active++, this._active > this._capacity) throw Error("To many thunks active");
      try {
        let K = A.thunk();
        if (K instanceof Promise) K.then(q => {
          this._active--, A.resolve(q), this.runNext();
        }, q => {
          this._active--, A.reject(q), this.runNext();
        });else this._active--, A.resolve(K), this.runNext();
      } catch (K) {
        this._active--, A.reject(K), this.runNext();
      }
    }
  }
  OT7.Semaphore = JT7;
});

// Register to shared state
__$.lV6 = lV6;
