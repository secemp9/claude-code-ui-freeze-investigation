// Module: Ym7
// Dependencies: RK, eXA, SB7, uB7, eB7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ym7 = v(Km7 => {
  Object.defineProperty(Km7, "__esModule", {
    value: !0
  });
  Km7.MeterProvider = void 0;
  var zD1 = __$.RK(),
    d12 = __$.eXA(),
    c12 = __$.SB7(),
    l12 = __$.uB7(),
    i12 = __$.eB7();
  class Am7 {
    _sharedState;
    _shutdown = !1;
    constructor(A) {
      if (this._sharedState = new c12.MeterProviderSharedState(A?.resource ?? (0, d12.defaultResource)()), A?.views != null && A.views.length > 0) for (let K of A.views) this._sharedState.viewRegistry.addView(new i12.View(K));
      if (A?.readers != null && A.readers.length > 0) for (let K of A.readers) {
        let q = new l12.MetricCollector(this._sharedState, K);
        K.setMetricProducer(q), this._sharedState.metricCollectors.push(q);
      }
    }
    getMeter(A, K = "", q = {}) {
      if (this._shutdown) return zD1.diag.warn("A shutdown MeterProvider cannot provide a Meter"), (0, zD1.createNoopMeter)();
      return this._sharedState.getMeterSharedState({
        name: A,
        version: K,
        schemaUrl: q.schemaUrl
      }).meter;
    }
    async shutdown(A) {
      if (this._shutdown) {
        zD1.diag.warn("shutdown may only be called once per MeterProvider");
        return;
      }
      this._shutdown = !0, await Promise.all(this._sharedState.metricCollectors.map(K => {
        return K.shutdown(A);
      }));
    }
    async forceFlush(A) {
      if (this._shutdown) {
        zD1.diag.warn("invalid attempt to force flush after MeterProvider shutdown");
        return;
      }
      await Promise.all(this._sharedState.metricCollectors.map(K => {
        return K.forceFlush(A);
      }));
    }
  }
  Km7.MeterProvider = Am7;
});

// Register to shared state
__$.Ym7 = Ym7;
