// Module: SB7
// Dependencies: GS, Ou7, LB7, SgA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SB7 = v(yB7 => {
  Object.defineProperty(yB7, "__esModule", {
    value: !0
  });
  yB7.MeterProviderSharedState = void 0;
  var S12 = __$.GS(),
    h12 = __$.Ou7(),
    b12 = __$.LB7(),
    x12 = __$.SgA();
  class RB7 {
    resource;
    viewRegistry = new h12.ViewRegistry();
    metricCollectors = [];
    meterSharedStates = new Map();
    constructor(A) {
      this.resource = A;
    }
    getMeterSharedState(A) {
      let K = (0, S12.instrumentationScopeId)(A),
        q = this.meterSharedStates.get(K);
      if (q == null) q = new b12.MeterSharedState(this, A), this.meterSharedStates.set(K, q);
      return q;
    }
    selectAggregations(A) {
      let K = [];
      for (let q of this.metricCollectors) K.push([q, (0, x12.toAggregation)(q.selectAggregation(A))]);
      return K;
    }
  }
  yB7.MeterProviderSharedState = RB7;
});

// Register to shared state
__$.SB7 = SB7;
