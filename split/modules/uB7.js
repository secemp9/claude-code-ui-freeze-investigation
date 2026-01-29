// Module: uB7
// Dependencies: P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uB7 = v(bB7 => {
  Object.defineProperty(bB7, "__esModule", {
    value: !0
  });
  bB7.MetricCollector = void 0;
  var u12 = __$.P9();
  class hB7 {
    _sharedState;
    _metricReader;
    constructor(A, K) {
      this._sharedState = A, this._metricReader = K;
    }
    async collect(A) {
      let K = (0, u12.millisToHrTime)(Date.now()),
        q = [],
        Y = [],
        z = Array.from(this._sharedState.meterSharedStates.values()).map(async w => {
          let H = await w.collect(this, K, A);
          if (H?.scopeMetrics != null) q.push(H.scopeMetrics);
          if (H?.errors != null) Y.push(...H.errors);
        });
      return await Promise.all(z), {
        resourceMetrics: {
          resource: this._sharedState.resource,
          scopeMetrics: q
        },
        errors: Y
      };
    }
    async forceFlush(A) {
      await this._metricReader.forceFlush(A);
    }
    async shutdown(A) {
      await this._metricReader.shutdown(A);
    }
    selectAggregationTemporality(A) {
      return this._metricReader.selectAggregationTemporality(A);
    }
    selectAggregation(A) {
      return this._metricReader.selectAggregation(A);
    }
    selectCardinalityLimit(A) {
      return this._metricReader.selectCardinalityLimit?.(A) ?? 2000;
    }
  }
  bB7.MetricCollector = hB7;
});

// Register to shared state
__$.uB7 = uB7;
