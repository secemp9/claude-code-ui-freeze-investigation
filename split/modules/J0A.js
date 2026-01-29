// Module: J0A
// Dependencies: YRA, _2, MJ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var J0A = v((t1w, oK4) => {
  var EB3 = __$.YRA(),
    {
      ClientDestroyedError: $66,
      ClientClosedError: kB3,
      InvalidArgumentError: z0A
    } = __$._2(),
    {
      kDestroy: CB3,
      kClose: LB3,
      kClosed: zRA,
      kDestroyed: w0A,
      kDispatch: _66,
      kInterceptors: I8A
    } = __$.MJ(),
    $Q = Symbol("onDestroyed"),
    H0A = Symbol("onClosed"),
    U71 = Symbol("Intercepted Dispatch");
  class rK4 extends EB3 {
    constructor() {
      super();
      this[w0A] = !1, this[$Q] = null, this[zRA] = !1, this[H0A] = [];
    }
    get destroyed() {
      return this[w0A];
    }
    get closed() {
      return this[zRA];
    }
    get interceptors() {
      return this[I8A];
    }
    set interceptors(A) {
      if (A) {
        for (let K = A.length - 1; K >= 0; K--) if (typeof this[I8A][K] !== "function") throw new z0A("interceptor must be an function");
      }
      this[I8A] = A;
    }
    close(A) {
      if (A === void 0) return new Promise((q, Y) => {
        this.close((z, w) => {
          return z ? Y(z) : q(w);
        });
      });
      if (typeof A !== "function") throw new z0A("invalid callback");
      if (this[w0A]) {
        queueMicrotask(() => A(new $66(), null));
        return;
      }
      if (this[zRA]) {
        if (this[H0A]) this[H0A].push(A);else queueMicrotask(() => A(null, null));
        return;
      }
      this[zRA] = !0, this[H0A].push(A);
      let K = () => {
        let q = this[H0A];
        this[H0A] = null;
        for (let Y = 0; Y < q.length; Y++) q[Y](null, null);
      };
      this[LB3]().then(() => this.destroy()).then(() => {
        queueMicrotask(K);
      });
    }
    destroy(A, K) {
      if (typeof A === "function") K = A, A = null;
      if (K === void 0) return new Promise((Y, z) => {
        this.destroy(A, (w, H) => {
          return w ? z(w) : Y(H);
        });
      });
      if (typeof K !== "function") throw new z0A("invalid callback");
      if (this[w0A]) {
        if (this[$Q]) this[$Q].push(K);else queueMicrotask(() => K(null, null));
        return;
      }
      if (!A) A = new $66();
      this[w0A] = !0, this[$Q] = this[$Q] || [], this[$Q].push(K);
      let q = () => {
        let Y = this[$Q];
        this[$Q] = null;
        for (let z = 0; z < Y.length; z++) Y[z](null, null);
      };
      this[CB3](A).then(() => {
        queueMicrotask(q);
      });
    }
    [U71](A, K) {
      if (!this[I8A] || this[I8A].length === 0) return this[U71] = this[_66], this[_66](A, K);
      let q = this[_66].bind(this);
      for (let Y = this[I8A].length - 1; Y >= 0; Y--) q = this[I8A][Y](q);
      return this[U71] = q, q(A, K);
    }
    dispatch(A, K) {
      if (!K || typeof K !== "object") throw new z0A("handler must be an object");
      try {
        if (!A || typeof A !== "object") throw new z0A("opts must be an object.");
        if (this[w0A] || this[$Q]) throw new $66();
        if (this[zRA]) throw new kB3();
        return this[U71](A, K);
      } catch (q) {
        if (typeof K.onError !== "function") throw new z0A("invalid onError method");
        return K.onError(q), !1;
      }
    }
  }
  oK4.exports = rK4;
});

// Register to shared state
__$.J0A = J0A;
