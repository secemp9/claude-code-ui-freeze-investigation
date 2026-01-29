// Module: $p7
// Dependencies: S, U

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $p7 = v(Xp7 => {
  Object.defineProperty(Xp7, "t", {
    value: !0
  });
  class nE6 {
    constructor(A, K, q = 1) {
      this.i = void 0, this.h = void 0, this.o = void 0, this.u = A, this.l = K, this.p = q;
    }
    I() {
      let A = this,
        K = A.o.o === A;
      if (K && A.p === 1) A = A.h;else if (A.i) {
        A = A.i;
        while (A.h) A = A.h;
      } else {
        if (K) return A.o;
        let q = A.o;
        while (q.i === A) A = q, q = A.o;
        A = q;
      }
      return A;
    }
    B() {
      let A = this;
      if (A.h) {
        A = A.h;
        while (A.i) A = A.i;
        return A;
      } else {
        let K = A.o;
        while (K.h === A) A = K, K = A.o;
        if (A.h !== K) return K;else return A;
      }
    }
    _() {
      let A = this.o,
        K = this.h,
        q = K.i;
      if (A.o === this) A.o = K;else if (A.i === this) A.i = K;else A.h = K;
      if (K.o = A, K.i = this, this.o = K, this.h = q, q) q.o = this;
      return K;
    }
    g() {
      let A = this.o,
        K = this.i,
        q = K.h;
      if (A.o === this) A.o = K;else if (A.i === this) A.i = K;else A.h = K;
      if (K.o = A, K.h = this, this.o = K, this.i = q, q) q.o = this;
      return K;
    }
  }
  class qp7 extends nE6 {
    constructor() {
      super(...arguments);
      this.M = 1;
    }
    _() {
      let A = super._();
      return this.O(), A.O(), A;
    }
    g() {
      let A = super.g();
      return this.O(), A.O(), A;
    }
    O() {
      if (this.M = 1, this.i) this.M += this.i.M;
      if (this.h) this.M += this.h.M;
    }
  }
  class Yp7 {
    constructor(A = 0) {
      this.iteratorType = A;
    }
    equals(A) {
      return this.T === A.T;
    }
  }
  class zp7 {
    constructor() {
      this.m = 0;
    }
    get length() {
      return this.m;
    }
    size() {
      return this.m;
    }
    empty() {
      return this.m === 0;
    }
  }
  class wp7 extends zp7 {}
  function n5A() {
    throw RangeError("Iterator access denied!");
  }
  class Hp7 extends wp7 {
    constructor(A = function (q, Y) {
      if (q < Y) return -1;
      if (q > Y) return 1;
      return 0;
    }, K = !1) {
      super();
      this.v = void 0, this.A = A, this.enableIndex = K, this.N = K ? qp7 : nE6, this.C = new this.N();
    }
    R(A, K) {
      let q = this.C;
      while (A) {
        let Y = this.A(A.u, K);
        if (Y < 0) A = A.h;else if (Y > 0) q = A, A = A.i;else return A;
      }
      return q;
    }
    K(A, K) {
      let q = this.C;
      while (A) if (this.A(A.u, K) <= 0) A = A.h;else q = A, A = A.i;
      return q;
    }
    L(A, K) {
      let q = this.C;
      while (A) {
        let Y = this.A(A.u, K);
        if (Y < 0) q = A, A = A.h;else if (Y > 0) A = A.i;else return A;
      }
      return q;
    }
    k(A, K) {
      let q = this.C;
      while (A) if (this.A(A.u, K) < 0) q = A, A = A.h;else A = A.i;
      return q;
    }
    P(A) {
      while (!0) {
        let K = A.o;
        if (K === this.C) return;
        if (A.p === 1) {
          A.p = 0;
          return;
        }
        if (A === K.i) {
          let q = K.h;
          if (q.p === 1) {
            if (q.p = 0, K.p = 1, K === this.v) this.v = K._();else K._();
          } else if (q.h && q.h.p === 1) {
            if (q.p = K.p, K.p = 0, q.h.p = 0, K === this.v) this.v = K._();else K._();
            return;
          } else if (q.i && q.i.p === 1) q.p = 1, q.i.p = 0, q.g();else q.p = 1, A = K;
        } else {
          let q = K.i;
          if (q.p === 1) {
            if (q.p = 0, K.p = 1, K === this.v) this.v = K.g();else K.g();
          } else if (q.i && q.i.p === 1) {
            if (q.p = K.p, K.p = 0, q.i.p = 0, K === this.v) this.v = K.g();else K.g();
            return;
          } else if (q.h && q.h.p === 1) q.p = 1, q.h.p = 0, q._();else q.p = 1, A = K;
        }
      }
    }
    S(A) {
      if (this.m === 1) {
        this.clear();
        return;
      }
      let K = A;
      while (K.i || K.h) {
        if (K.h) {
          K = K.h;
          while (K.i) K = K.i;
        } else K = K.i;
        let Y = A.u;
        A.u = K.u, K.u = Y;
        let z = A.l;
        A.l = K.l, K.l = z, A = K;
      }
      if (this.C.i === K) this.C.i = K.o;else if (this.C.h === K) this.C.h = K.o;
      this.P(K);
      let q = K.o;
      if (K === q.i) q.i = void 0;else q.h = void 0;
      if (this.m -= 1, this.v.p = 0, this.enableIndex) while (q !== this.C) q.M -= 1, q = q.o;
    }
    U(A) {
      let K = typeof A === "number" ? A : void 0,
        q = typeof A === "function" ? A : void 0,
        Y = typeof A > "u" ? [] : void 0,
        z = 0,
        w = this.v,
        H = [];
      while (H.length || w) if (w) H.push(w), w = w.i;else {
        if (w = H.pop(), z === K) return w;
        Y && Y.push(w), q && q(w, z, this), z += 1, w = w.h;
      }
      return Y;
    }
    j(A) {
      while (!0) {
        let K = A.o;
        if (K.p === 0) return;
        let q = K.o;
        if (K === q.i) {
          let Y = q.h;
          if (Y && Y.p === 1) {
            if (Y.p = K.p = 0, q === this.v) return;
            q.p = 1, A = q;
            continue;
          } else if (A === K.h) {
            if (A.p = 0, A.i) A.i.o = K;
            if (A.h) A.h.o = q;
            if (K.h = A.i, q.i = A.h, A.i = K, A.h = q, q === this.v) this.v = A, this.C.o = A;else {
              let z = q.o;
              if (z.i === q) z.i = A;else z.h = A;
            }
            A.o = q.o, K.o = A, q.o = A, q.p = 1;
          } else {
            if (K.p = 0, q === this.v) this.v = q.g();else q.g();
            q.p = 1;
            return;
          }
        } else {
          let Y = q.i;
          if (Y && Y.p === 1) {
            if (Y.p = K.p = 0, q === this.v) return;
            q.p = 1, A = q;
            continue;
          } else if (A === K.i) {
            if (A.p = 0, A.i) A.i.o = q;
            if (A.h) A.h.o = K;
            if (q.h = A.i, K.i = A.h, A.i = q, A.h = K, q === this.v) this.v = A, this.C.o = A;else {
              let z = q.o;
              if (z.i === q) z.i = A;else z.h = A;
            }
            A.o = q.o, K.o = A, q.o = A, q.p = 1;
          } else {
            if (K.p = 0, q === this.v) this.v = q._();else q._();
            q.p = 1;
            return;
          }
        }
        if (this.enableIndex) K.O(), q.O(), A.O();
        return;
      }
    }
    q(A, K, q) {
      if (this.v === void 0) return this.m += 1, this.v = new this.N(A, K, 0), this.v.o = this.C, this.C.o = this.C.i = this.C.h = this.v, this.m;
      let Y,
        z = this.C.i,
        w = this.A(z.u, A);
      if (w === 0) return z.l = K, this.m;else if (w > 0) z.i = new this.N(A, K), z.i.o = z, Y = z.i, this.C.i = Y;else {
        let H = this.C.h,
          J = this.A(H.u, A);
        if (J === 0) return H.l = K, this.m;else if (J < 0) H.h = new this.N(A, K), H.h.o = H, Y = H.h, this.C.h = Y;else {
          if (q !== void 0) {
            let O = q.T;
            if (O !== this.C) {
              let X = this.A(O.u, A);
              if (X === 0) return O.l = K, this.m;else if (X > 0) {
                let $ = O.I(),
                  _ = this.A($.u, A);
                if (_ === 0) return $.l = K, this.m;else if (_ < 0) if (Y = new this.N(A, K), $.h === void 0) $.h = Y, Y.o = $;else O.i = Y, Y.o = O;
              }
            }
          }
          if (Y === void 0) {
            Y = this.v;
            while (!0) {
              let O = this.A(Y.u, A);
              if (O > 0) {
                if (Y.i === void 0) {
                  Y.i = new this.N(A, K), Y.i.o = Y, Y = Y.i;
                  break;
                }
                Y = Y.i;
              } else if (O < 0) {
                if (Y.h === void 0) {
                  Y.h = new this.N(A, K), Y.h.o = Y, Y = Y.h;
                  break;
                }
                Y = Y.h;
              } else return Y.l = K, this.m;
            }
          }
        }
      }
      if (this.enableIndex) {
        let H = Y.o;
        while (H !== this.C) H.M += 1, H = H.o;
      }
      return this.j(Y), this.m += 1, this.m;
    }
    H(A, K) {
      while (A) {
        let q = this.A(A.u, K);
        if (q < 0) A = A.h;else if (q > 0) A = A.i;else return A;
      }
      return A || this.C;
    }
    clear() {
      this.m = 0, this.v = void 0, this.C.o = void 0, this.C.i = this.C.h = void 0;
    }
    updateKeyByIterator(A, K) {
      let q = A.T;
      if (q === this.C) n5A();
      if (this.m === 1) return q.u = K, !0;
      let Y = q.B().u;
      if (q === this.C.i) {
        if (this.A(Y, K) > 0) return q.u = K, !0;
        return !1;
      }
      let z = q.I().u;
      if (q === this.C.h) {
        if (this.A(z, K) < 0) return q.u = K, !0;
        return !1;
      }
      if (this.A(z, K) >= 0 || this.A(Y, K) <= 0) return !1;
      return q.u = K, !0;
    }
    eraseElementByPos(A) {
      if (A < 0 || A > this.m - 1) throw RangeError();
      let K = this.U(A);
      return this.S(K), this.m;
    }
    eraseElementByKey(A) {
      if (this.m === 0) return !1;
      let K = this.H(this.v, A);
      if (K === this.C) return !1;
      return this.S(K), !0;
    }
    eraseElementByIterator(A) {
      let K = A.T;
      if (K === this.C) n5A();
      let q = K.h === void 0;
      if (A.iteratorType === 0) {
        if (q) A.next();
      } else if (!q || K.i === void 0) A.next();
      return this.S(K), A;
    }
    getHeight() {
      if (this.m === 0) return 0;
      function A(K) {
        if (!K) return 0;
        return Math.max(A(K.i), A(K.h)) + 1;
      }
      return A(this.v);
    }
  }
  class Jp7 extends Yp7 {
    constructor(A, K, q) {
      super(q);
      if (this.T = A, this.C = K, this.iteratorType === 0) this.pre = function () {
        if (this.T === this.C.i) n5A();
        return this.T = this.T.I(), this;
      }, this.next = function () {
        if (this.T === this.C) n5A();
        return this.T = this.T.B(), this;
      };else this.pre = function () {
        if (this.T === this.C.h) n5A();
        return this.T = this.T.B(), this;
      }, this.next = function () {
        if (this.T === this.C) n5A();
        return this.T = this.T.I(), this;
      };
    }
    get index() {
      let A = this.T,
        K = this.C.o;
      if (A === this.C) {
        if (K) return K.M - 1;
        return 0;
      }
      let q = 0;
      if (A.i) q += A.i.M;
      while (A !== K) {
        let Y = A.o;
        if (A === Y.h) {
          if (q += 1, Y.i) q += Y.i.M;
        }
        A = Y;
      }
      return q;
    }
    isAccessible() {
      return this.T !== this.C;
    }
  }
  class MS extends Jp7 {
    constructor(A, K, q, Y) {
      super(A, K, Y);
      this.container = q;
    }
    get pointer() {
      if (this.T === this.C) n5A();
      let A = this;
      return new Proxy([], {
        get(K, q) {
          if (q === "0") return A.T.u;else if (q === "1") return A.T.l;
          return K[0] = A.T.u, K[1] = A.T.l, K[q];
        },
        set(K, q, Y) {
          if (q !== "1") throw TypeError("prop must be 1");
          return A.T.l = Y, !0;
        }
      });
    }
    copy() {
      return new MS(this.T, this.C, this.container, this.iteratorType);
    }
  }
  class Op7 extends Hp7 {
    constructor(A = [], K, q) {
      super(K, q);
      let Y = this;
      A.forEach(function (z) {
        Y.setElement(z[0], z[1]);
      });
    }
    begin() {
      return new MS(this.C.i || this.C, this.C, this);
    }
    end() {
      return new MS(this.C, this.C, this);
    }
    rBegin() {
      return new MS(this.C.h || this.C, this.C, this, 1);
    }
    rEnd() {
      return new MS(this.C, this.C, this, 1);
    }
    front() {
      if (this.m === 0) return;
      let A = this.C.i;
      return [A.u, A.l];
    }
    back() {
      if (this.m === 0) return;
      let A = this.C.h;
      return [A.u, A.l];
    }
    lowerBound(A) {
      let K = this.R(this.v, A);
      return new MS(K, this.C, this);
    }
    upperBound(A) {
      let K = this.K(this.v, A);
      return new MS(K, this.C, this);
    }
    reverseLowerBound(A) {
      let K = this.L(this.v, A);
      return new MS(K, this.C, this);
    }
    reverseUpperBound(A) {
      let K = this.k(this.v, A);
      return new MS(K, this.C, this);
    }
    forEach(A) {
      this.U(function (K, q, Y) {
        A([K.u, K.l], q, Y);
      });
    }
    setElement(A, K, q) {
      return this.q(A, K, q);
    }
    getElementByPos(A) {
      if (A < 0 || A > this.m - 1) throw RangeError();
      let K = this.U(A);
      return [K.u, K.l];
    }
    find(A) {
      let K = this.H(this.v, A);
      return new MS(K, this.C, this);
    }
    getElementByKey(A) {
      return this.H(this.v, A).l;
    }
    union(A) {
      let K = this;
      return A.forEach(function (q) {
        K.setElement(q[0], q[1]);
      }), this.m;
    }
    *[Symbol.iterator]() {
      let A = this.m,
        K = this.U();
      for (let q = 0; q < A; ++q) {
        let Y = K[q];
        yield [Y.u, Y.l];
      }
    }
  }
  Xp7.OrderedMap = Op7;
});

// Register to shared state
__$.$p7 = $p7;
