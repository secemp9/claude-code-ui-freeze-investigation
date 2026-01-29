// Module: U86
// Dependencies: ERA, BRA, S0A, F86, MJ, _2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var U86 = v((U6w, kY4) => {
  var {
      promisify: jd3
    } = CA("node:util"),
    Md3 = __$.ERA(),
    {
      buildMockDispatch: Pd3
    } = __$.BRA(),
    {
      kDispatches: PY4,
      kMockAgent: VY4,
      kClose: fY4,
      kOriginalClose: NY4,
      kOrigin: TY4,
      kOriginalDispatch: Vd3,
      kConnected: Q86
    } = __$.S0A(),
    {
      MockInterceptor: fd3
    } = __$.F86(),
    vY4 = __$.MJ(),
    {
      InvalidArgumentError: Nd3
    } = __$._2();
  class EY4 extends Md3 {
    constructor(A, K) {
      super(A, K);
      if (!K || !K.agent || typeof K.agent.dispatch !== "function") throw new Nd3("Argument opts.agent must implement Agent");
      this[VY4] = K.agent, this[TY4] = A, this[PY4] = [], this[Q86] = 1, this[Vd3] = this.dispatch, this[NY4] = this.close.bind(this), this.dispatch = Pd3.call(this), this.close = this[fY4];
    }
    get [vY4.kConnected]() {
      return this[Q86];
    }
    intercept(A) {
      return new fd3(A, this[PY4]);
    }
    async [fY4]() {
      await jd3(this[NY4])(), this[Q86] = 0, this[VY4][vY4.kClients].delete(this[TY4]);
    }
  }
  kY4.exports = EY4;
});

// Register to shared state
__$.U86 = U86;
