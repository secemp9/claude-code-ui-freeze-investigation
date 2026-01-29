// Module: lh
// Dependencies: Ow, A18, K18, qTA, KTA, i1, arA, o1q, eA8, r1q
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lh = k(() => {
  __$.Ow();
  __$.A18();
  __$.K18 = Symbol("internals");
  __$.qTA = class qTA {
    constructor(A) {
      A && this.set(A);
    }
    set(A, K, q) {
      let Y = this;
      function z(H, J, O) {
        let X = __$.KTA(J);
        if (!X) throw Error("header name must be a non-empty string");
        let $ = __$.i1.findKey(Y, X);
        if (!$ || Y[$] === void 0 || O === !0 || O === void 0 && Y[$] !== !1) Y[$ || J] = __$.arA(H);
      }
      let w = (H, J) => __$.i1.forEach(H, (O, X) => z(O, X, J));
      if (__$.i1.isPlainObject(A) || A instanceof this.constructor) w(A, K);else if (__$.i1.isString(A) && (A = A.trim()) && !__$.o1q(A)) w(__$.eA8(A), K);else if (__$.i1.isHeaders(A)) for (let [H, J] of A.entries()) z(J, H, q);else A != null && z(K, A, q);
      return this;
    }
    get(A, K) {
      if (A = __$.KTA(A), A) {
        let q = __$.i1.findKey(this, A);
        if (q) {
          let Y = this[q];
          if (!K) return Y;
          if (K === !0) return __$.r1q(Y);
          if (__$.i1.isFunction(K)) return K.call(this, Y, q);
          if (__$.i1.isRegExp(K)) return K.exec(Y);
          throw TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(A, K) {
      if (A = __$.KTA(A), A) {
        let q = __$.i1.findKey(this, A);
        return !!(q && this[q] !== void 0 && (!K || __$.DI1(this, this[q], q, K)));
      }
      return !1;
    }
    delete(A, K) {
      let q = this,
        Y = !1;
      function z(w) {
        if (w = __$.KTA(w), w) {
          let H = __$.i1.findKey(q, w);
          if (H && (!K || __$.DI1(q, q[H], H, K))) delete q[H], Y = !0;
        }
      }
      if (__$.i1.isArray(A)) A.forEach(z);else z(A);
      return Y;
    }
    clear(A) {
      let K = Object.keys(this),
        q = K.length,
        Y = !1;
      while (q--) {
        let z = K[q];
        if (!A || __$.DI1(this, this[z], z, A, !0)) delete this[z], Y = !0;
      }
      return Y;
    }
    normalize(A) {
      let K = this,
        q = {};
      return __$.i1.forEach(this, (Y, z) => {
        let w = __$.i1.findKey(q, z);
        if (w) {
          K[w] = __$.arA(Y), delete K[z];
          return;
        }
        let H = A ? __$.a1q(z) : String(z).trim();
        if (H !== z) delete K[z];
        K[H] = __$.arA(Y), q[H] = !0;
      }), this;
    }
    concat(...A) {
      return this.constructor.concat(this, ...A);
    }
    toJSON(A) {
      let K = Object.create(null);
      return __$.i1.forEach(this, (q, Y) => {
        q != null && q !== !1 && (K[Y] = A && __$.i1.isArray(q) ? q.join(", ") : q);
      }), K;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([A, K]) => A + ": " + K).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(A) {
      return A instanceof this ? A : new this(A);
    }
    static concat(A, ...K) {
      let q = new this(A);
      return K.forEach(Y => q.set(Y)), q;
    }
    static accessor(A) {
      let q = (this[__$.K18] = this[__$.K18] = {
          accessors: {}
        }).accessors,
        Y = this.prototype;
      function z(w) {
        let H = __$.KTA(w);
        if (!q[H]) __$.s1q(Y, w), q[H] = !0;
      }
      return __$.i1.isArray(A) ? A.forEach(z) : z(A), this;
    }
  };
  __$.qTA.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  __$.i1.reduceDescriptors(__$.qTA.prototype, ({
    value: A
  }, K) => {
    let q = K[0].toUpperCase() + K.slice(1);
    return {
      get: () => A,
      set(Y) {
        this[q] = Y;
      }
    };
  });
  __$.i1.freezeMethods(__$.qTA);
  __$.eJ = __$.qTA;
});

// Register to shared state
__$.lh = lh;
