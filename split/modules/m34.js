// Module: m34
// Dependencies: _2, X86, v0A, MJ, j9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var m34 = v((E6w, B34) => {
  var {
      BalancedPoolMissingUpstreamError: DU3,
      InvalidArgumentError: jU3
    } = __$._2(),
    {
      PoolBase: MU3,
      kClients: vD,
      kNeedDrain: LRA,
      kAddClient: PU3,
      kRemoveClient: VU3,
      kGetDispatcher: fU3
    } = __$.X86(),
    NU3 = __$.v0A(),
    {
      kUrl: Z86,
      kInterceptors: TU3
    } = __$.MJ(),
    {
      parseOrigin: h34
    } = __$.j9(),
    b34 = Symbol("factory"),
    DK1 = Symbol("options"),
    x34 = Symbol("kGreatestCommonDivisor"),
    m8A = Symbol("kCurrentWeight"),
    g8A = Symbol("kIndex"),
    Tk = Symbol("kWeight"),
    jK1 = Symbol("kMaxWeightPerServer"),
    MK1 = Symbol("kErrorPenalty");
  function vU3(A, K) {
    if (A === 0) return K;
    while (K !== 0) {
      let q = K;
      K = A % K, A = q;
    }
    return A;
  }
  function EU3(A, K) {
    return new NU3(A, K);
  }
  class u34 extends MU3 {
    constructor(A = [], {
      factory: K = EU3,
      ...q
    } = {}) {
      super();
      if (this[DK1] = q, this[g8A] = -1, this[m8A] = 0, this[jK1] = this[DK1].maxWeightPerServer || 100, this[MK1] = this[DK1].errorPenalty || 15, !Array.isArray(A)) A = [A];
      if (typeof K !== "function") throw new jU3("factory must be a function.");
      this[TU3] = q.interceptors?.BalancedPool && Array.isArray(q.interceptors.BalancedPool) ? q.interceptors.BalancedPool : [], this[b34] = K;
      for (let Y of A) this.addUpstream(Y);
      this._updateBalancedPoolStats();
    }
    addUpstream(A) {
      let K = h34(A).origin;
      if (this[vD].find(Y => Y[Z86].origin === K && Y.closed !== !0 && Y.destroyed !== !0)) return this;
      let q = this[b34](K, Object.assign({}, this[DK1]));
      this[PU3](q), q.on("connect", () => {
        q[Tk] = Math.min(this[jK1], q[Tk] + this[MK1]);
      }), q.on("connectionError", () => {
        q[Tk] = Math.max(1, q[Tk] - this[MK1]), this._updateBalancedPoolStats();
      }), q.on("disconnect", (...Y) => {
        let z = Y[2];
        if (z && z.code === "UND_ERR_SOCKET") q[Tk] = Math.max(1, q[Tk] - this[MK1]), this._updateBalancedPoolStats();
      });
      for (let Y of this[vD]) Y[Tk] = this[jK1];
      return this._updateBalancedPoolStats(), this;
    }
    _updateBalancedPoolStats() {
      let A = 0;
      for (let K = 0; K < this[vD].length; K++) A = vU3(this[vD][K][Tk], A);
      this[x34] = A;
    }
    removeUpstream(A) {
      let K = h34(A).origin,
        q = this[vD].find(Y => Y[Z86].origin === K && Y.closed !== !0 && Y.destroyed !== !0);
      if (q) this[VU3](q);
      return this;
    }
    get upstreams() {
      return this[vD].filter(A => A.closed !== !0 && A.destroyed !== !0).map(A => A[Z86].origin);
    }
    [fU3]() {
      if (this[vD].length === 0) throw new DU3();
      if (!this[vD].find(z => !z[LRA] && z.closed !== !0 && z.destroyed !== !0)) return;
      if (this[vD].map(z => z[LRA]).reduce((z, w) => z && w, !0)) return;
      let q = 0,
        Y = this[vD].findIndex(z => !z[LRA]);
      while (q++ < this[vD].length) {
        this[g8A] = (this[g8A] + 1) % this[vD].length;
        let z = this[vD][this[g8A]];
        if (z[Tk] > this[vD][Y][Tk] && !z[LRA]) Y = this[g8A];
        if (this[g8A] === 0) {
          if (this[m8A] = this[m8A] - this[x34], this[m8A] <= 0) this[m8A] = this[jK1];
        }
        if (z[Tk] >= this[m8A] && !z[LRA]) return z;
      }
      return this[m8A] = this[vD][Y][Tk], this[g8A] = Y, this[vD][Y];
    }
  }
  B34.exports = u34;
});

// Register to shared state
__$.m34 = m34;
