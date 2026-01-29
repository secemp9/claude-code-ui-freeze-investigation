// Module: pY4
// Dependencies: MJ, E0A, S0A, U86, d86, BRA, _2, YRA, uY4, mY4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pY4 = v((l6w, UY4) => {
  var {
      kClients: U8A
    } = __$.MJ(),
    xd3 = __$.E0A(),
    {
      kAgent: c86,
      kMockAgentSet: LK1,
      kMockAgentGet: gY4,
      kDispatches: l86,
      kIsMockActive: RK1,
      kNetConnect: p8A,
      kGetNetConnect: ud3,
      kOptions: yK1,
      kFactory: IK1
    } = __$.S0A(),
    Bd3 = __$.U86(),
    md3 = __$.d86(),
    {
      matchValue: gd3,
      buildMockOptions: Fd3
    } = __$.BRA(),
    {
      InvalidArgumentError: FY4,
      UndiciError: Qd3
    } = __$._2(),
    Ud3 = __$.YRA(),
    pd3 = __$.uY4(),
    dd3 = __$.mY4();
  class QY4 extends Ud3 {
    constructor(A) {
      super(A);
      if (this[p8A] = !0, this[RK1] = !0, A?.agent && typeof A.agent.dispatch !== "function") throw new FY4("Argument opts.agent must implement Agent");
      let K = A?.agent ? A.agent : new xd3(A);
      this[c86] = K, this[U8A] = K[U8A], this[yK1] = Fd3(A);
    }
    get(A) {
      let K = this[gY4](A);
      if (!K) K = this[IK1](A), this[LK1](A, K);
      return K;
    }
    dispatch(A, K) {
      return this.get(A.origin), this[c86].dispatch(A, K);
    }
    async close() {
      await this[c86].close(), this[U8A].clear();
    }
    deactivate() {
      this[RK1] = !1;
    }
    activate() {
      this[RK1] = !0;
    }
    enableNetConnect(A) {
      if (typeof A === "string" || typeof A === "function" || A instanceof RegExp) {
        if (Array.isArray(this[p8A])) this[p8A].push(A);else this[p8A] = [A];
      } else if (typeof A > "u") this[p8A] = !0;else throw new FY4("Unsupported matcher. Must be one of String|Function|RegExp.");
    }
    disableNetConnect() {
      this[p8A] = !1;
    }
    get isMockActive() {
      return this[RK1];
    }
    [LK1](A, K) {
      this[U8A].set(A, K);
    }
    [IK1](A) {
      let K = Object.assign({
        agent: this
      }, this[yK1]);
      return this[yK1] && this[yK1].connections === 1 ? new Bd3(A, K) : new md3(A, K);
    }
    [gY4](A) {
      let K = this[U8A].get(A);
      if (K) return K;
      if (typeof A !== "string") {
        let q = this[IK1]("http://localhost:9999");
        return this[LK1](A, q), q;
      }
      for (let [q, Y] of Array.from(this[U8A])) if (Y && typeof q !== "string" && gd3(q, A)) {
        let z = this[IK1](A);
        return this[LK1](A, z), z[l86] = Y[l86], z;
      }
    }
    [ud3]() {
      return this[p8A];
    }
    pendingInterceptors() {
      let A = this[U8A];
      return Array.from(A.entries()).flatMap(([K, q]) => q[l86].map(Y => ({
        ...Y,
        origin: K
      }))).filter(({
        pending: K
      }) => K);
    }
    assertNoPendingInterceptors({
      pendingInterceptorsFormatter: A = new dd3()
    } = {}) {
      let K = this.pendingInterceptors();
      if (K.length === 0) return;
      let q = new pd3("interceptor", "interceptors").pluralize(K.length);
      throw new Qd3(`
${q.count} ${q.noun} ${q.is} pending:

${A.format(K)}
`.trim());
    }
  }
  UY4.exports = QY4;
});

// Register to shared state
__$.pY4 = pY4;
