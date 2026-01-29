// Module: d86
// Dependencies: v0A, BRA, S0A, F86, MJ, _2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var d86 = v((p6w, bY4) => {
  var {
      promisify: Td3
    } = CA("node:util"),
    vd3 = __$.v0A(),
    {
      buildMockDispatch: Ed3
    } = __$.BRA(),
    {
      kDispatches: CY4,
      kMockAgent: LY4,
      kClose: RY4,
      kOriginalClose: yY4,
      kOrigin: IY4,
      kOriginalDispatch: kd3,
      kConnected: p86
    } = __$.S0A(),
    {
      MockInterceptor: Cd3
    } = __$.F86(),
    SY4 = __$.MJ(),
    {
      InvalidArgumentError: Ld3
    } = __$._2();
  class hY4 extends vd3 {
    constructor(A, K) {
      super(A, K);
      if (!K || !K.agent || typeof K.agent.dispatch !== "function") throw new Ld3("Argument opts.agent must implement Agent");
      this[LY4] = K.agent, this[IY4] = A, this[CY4] = [], this[p86] = 1, this[kd3] = this.dispatch, this[yY4] = this.close.bind(this), this.dispatch = Ed3.call(this), this.close = this[RY4];
    }
    get [SY4.kConnected]() {
      return this[p86];
    }
    intercept(A) {
      return new Cd3(A, this[CY4]);
    }
    async [RY4]() {
      await Td3(this[yY4])(), this[p86] = 0, this[LY4][SY4.kClients].delete(this[IY4]);
    }
  }
  bY4.exports = hY4;
});

// Register to shared state
__$.d86 = d86;
