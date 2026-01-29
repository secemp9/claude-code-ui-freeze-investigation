// Module: Jx6
// Dependencies: rUA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jx6 = k(() => {
  __$.rUA = class rUA {
    returned;
    queue = [];
    readResolve;
    readReject;
    isDone = !1;
    hasError;
    started = !1;
    constructor(A) {
      this.returned = A;
    }
    [Symbol.asyncIterator]() {
      if (this.started) throw Error("Stream can only be iterated once");
      return this.started = !0, this;
    }
    next() {
      if (this.queue.length > 0) return Promise.resolve({
        done: !1,
        value: this.queue.shift()
      });
      if (this.isDone) return Promise.resolve({
        done: !0,
        value: void 0
      });
      if (this.hasError) return Promise.reject(this.hasError);
      return new Promise((A, K) => {
        this.readResolve = A, this.readReject = K;
      });
    }
    enqueue(A) {
      if (this.readResolve) {
        let K = this.readResolve;
        this.readResolve = void 0, this.readReject = void 0, K({
          done: !1,
          value: A
        });
      } else this.queue.push(A);
    }
    done() {
      if (this.isDone = !0, this.readResolve) {
        let A = this.readResolve;
        this.readResolve = void 0, this.readReject = void 0, A({
          done: !0,
          value: void 0
        });
      }
    }
    error(A) {
      if (this.hasError = A, this.readReject) {
        let K = this.readReject;
        this.readResolve = void 0, this.readReject = void 0, K(A);
      }
    }
    return() {
      if (this.isDone = !0, this.returned) this.returned();
      return Promise.resolve({
        done: !0,
        value: void 0
      });
    }
  };
});

// Register to shared state
__$.Jx6 = Jx6;
