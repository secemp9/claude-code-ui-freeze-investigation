// Module: YRA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YRA = v((s1w, nK4) => {
  var vB3 = CA("node:events");
  class X66 extends vB3 {
    dispatch() {
      throw Error("not implemented");
    }
    close() {
      throw Error("not implemented");
    }
    destroy() {
      throw Error("not implemented");
    }
    compose(...A) {
      let K = Array.isArray(A[0]) ? A[0] : A,
        q = this.dispatch.bind(this);
      for (let Y of K) {
        if (Y == null) continue;
        if (typeof Y !== "function") throw TypeError(`invalid interceptor, expected function received ${typeof Y}`);
        if (q = Y(q), q == null || typeof q !== "function" || q.length !== 2) throw TypeError("invalid interceptor");
      }
      return new iK4(this, q);
    }
  }
  class iK4 extends X66 {
    #A = null;
    #K = null;
    constructor(A, K) {
      super();
      this.#A = A, this.#K = K;
    }
    dispatch(...A) {
      this.#K(...A);
    }
    close(...A) {
      return this.#A.close(...A);
    }
    destroy(...A) {
      return this.#A.destroy(...A);
    }
  }
  nK4.exports = X66;
});

// Register to shared state
__$.YRA = YRA;
