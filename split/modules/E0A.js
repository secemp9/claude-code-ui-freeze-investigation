// Module: E0A
// Dependencies: _2, MJ, J0A, v0A, ERA, j9, ZK1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var E0A = v((k6w, l34) => {
  var {
      InvalidArgumentError: PK1
    } = __$._2(),
    {
      kClients: bn,
      kRunning: g34,
      kClose: kU3,
      kDestroy: CU3,
      kDispatch: LU3,
      kInterceptors: RU3
    } = __$.MJ(),
    yU3 = __$.J0A(),
    IU3 = __$.v0A(),
    SU3 = __$.ERA(),
    hU3 = __$.j9(),
    bU3 = __$.ZK1(),
    F34 = Symbol("onConnect"),
    Q34 = Symbol("onDisconnect"),
    U34 = Symbol("onConnectionError"),
    xU3 = Symbol("maxRedirections"),
    p34 = Symbol("onDrain"),
    d34 = Symbol("factory"),
    W86 = Symbol("options");
  function uU3(A, K) {
    return K && K.connections === 1 ? new SU3(A, K) : new IU3(A, K);
  }
  class c34 extends yU3 {
    constructor({
      factory: A = uU3,
      maxRedirections: K = 0,
      connect: q,
      ...Y
    } = {}) {
      super();
      if (typeof A !== "function") throw new PK1("factory must be a function.");
      if (q != null && typeof q !== "function" && typeof q !== "object") throw new PK1("connect must be a function or an object");
      if (!Number.isInteger(K) || K < 0) throw new PK1("maxRedirections must be a positive number");
      if (q && typeof q !== "function") q = {
        ...q
      };
      this[RU3] = Y.interceptors?.Agent && Array.isArray(Y.interceptors.Agent) ? Y.interceptors.Agent : [bU3({
        maxRedirections: K
      })], this[W86] = {
        ...hU3.deepClone(Y),
        connect: q
      }, this[W86].interceptors = Y.interceptors ? {
        ...Y.interceptors
      } : void 0, this[xU3] = K, this[d34] = A, this[bn] = new Map(), this[p34] = (z, w) => {
        this.emit("drain", z, [this, ...w]);
      }, this[F34] = (z, w) => {
        this.emit("connect", z, [this, ...w]);
      }, this[Q34] = (z, w, H) => {
        this.emit("disconnect", z, [this, ...w], H);
      }, this[U34] = (z, w, H) => {
        this.emit("connectionError", z, [this, ...w], H);
      };
    }
    get [g34]() {
      let A = 0;
      for (let K of this[bn].values()) A += K[g34];
      return A;
    }
    [LU3](A, K) {
      let q;
      if (A.origin && (typeof A.origin === "string" || A.origin instanceof URL)) q = String(A.origin);else throw new PK1("opts.origin must be a non-empty string or URL.");
      let Y = this[bn].get(q);
      if (!Y) Y = this[d34](A.origin, this[W86]).on("drain", this[p34]).on("connect", this[F34]).on("disconnect", this[Q34]).on("connectionError", this[U34]), this[bn].set(q, Y);
      return Y.dispatch(A, K);
    }
    async [kU3]() {
      let A = [];
      for (let K of this[bn].values()) A.push(K.close());
      this[bn].clear(), await Promise.all(A);
    }
    async [CU3](A) {
      let K = [];
      for (let q of this[bn].values()) K.push(q.destroy(A));
      this[bn].clear(), await Promise.all(K);
    }
  }
  l34.exports = c34;
});

// Register to shared state
__$.E0A = E0A;
