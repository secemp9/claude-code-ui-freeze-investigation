// Module: Y94
// Dependencies: J0A, MJ, j86, E0A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Y94 = v((L6w, q94) => {
  var aU3 = __$.J0A(),
    {
      kClose: sU3,
      kDestroy: tU3,
      kClosed: s34,
      kDestroyed: t34,
      kDispatch: eU3,
      kNoProxyAgent: IRA,
      kHttpProxyAgent: xn,
      kHttpsProxyAgent: F8A
    } = __$.MJ(),
    e34 = __$.j86(),
    Ap3 = __$.E0A(),
    Kp3 = {
      "http:": 80,
      "https:": 443
    },
    A94 = !1;
  class K94 extends aU3 {
    #A = null;
    #K = null;
    #q = null;
    constructor(A = {}) {
      super();
      if (this.#q = A, !A94) A94 = !0, process.emitWarning("EnvHttpProxyAgent is experimental, expect them to change at any time.", {
        code: "UNDICI-EHPA"
      });
      let {
        httpProxy: K,
        httpsProxy: q,
        noProxy: Y,
        ...z
      } = A;
      this[IRA] = new Ap3(z);
      let w = K ?? process.env.http_proxy ?? process.env.HTTP_PROXY;
      if (w) this[xn] = new e34({
        ...z,
        uri: w
      });else this[xn] = this[IRA];
      let H = q ?? process.env.https_proxy ?? process.env.HTTPS_PROXY;
      if (H) this[F8A] = new e34({
        ...z,
        uri: H
      });else this[F8A] = this[xn];
      this.#J();
    }
    [eU3](A, K) {
      let q = new URL(A.origin);
      return this.#z(q).dispatch(A, K);
    }
    async [sU3]() {
      if (await this[IRA].close(), !this[xn][s34]) await this[xn].close();
      if (!this[F8A][s34]) await this[F8A].close();
    }
    async [tU3](A) {
      if (await this[IRA].destroy(A), !this[xn][t34]) await this[xn].destroy(A);
      if (!this[F8A][t34]) await this[F8A].destroy(A);
    }
    #z(A) {
      let {
        protocol: K,
        host: q,
        port: Y
      } = A;
      if (q = q.replace(/:\d*$/, "").toLowerCase(), Y = Number.parseInt(Y, 10) || Kp3[K] || 0, !this.#Y(q, Y)) return this[IRA];
      if (K === "https:") return this[F8A];
      return this[xn];
    }
    #Y(A, K) {
      if (this.#w) this.#J();
      if (this.#K.length === 0) return !0;
      if (this.#A === "*") return !1;
      for (let q = 0; q < this.#K.length; q++) {
        let Y = this.#K[q];
        if (Y.port && Y.port !== K) continue;
        if (!/^[.*]/.test(Y.hostname)) {
          if (A === Y.hostname) return !1;
        } else if (A.endsWith(Y.hostname.replace(/^\*/, ""))) return !1;
      }
      return !0;
    }
    #J() {
      let A = this.#q.noProxy ?? this.#X,
        K = A.split(/[,\s]/),
        q = [];
      for (let Y = 0; Y < K.length; Y++) {
        let z = K[Y];
        if (!z) continue;
        let w = z.match(/^(.+):(\d+)$/);
        q.push({
          hostname: (w ? w[1] : z).toLowerCase(),
          port: w ? Number.parseInt(w[2], 10) : 0
        });
      }
      this.#A = A, this.#K = q;
    }
    get #w() {
      if (this.#q.noProxy !== void 0) return !1;
      return this.#A !== this.#X;
    }
    get #X() {
      return process.env.no_proxy ?? process.env.NO_PROXY ?? "";
    }
  }
  q94.exports = K94;
});

// Register to shared state
__$.Y94 = Y94;
