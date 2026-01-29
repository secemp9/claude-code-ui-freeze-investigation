// Module: vv6
// Dependencies: RK, GS, Tv6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vv6 = v(dx7 => {
  Object.defineProperty(dx7, "__esModule", {
    value: !0
  });
  dx7.MetricReader = void 0;
  var Qx7 = __$.RK(),
    tW1 = __$.GS(),
    Ux7 = __$.Tv6();
  class px7 {
    _shutdown = !1;
    _metricProducers;
    _sdkMetricProducer;
    _aggregationTemporalitySelector;
    _aggregationSelector;
    _cardinalitySelector;
    constructor(A) {
      this._aggregationSelector = A?.aggregationSelector ?? Ux7.DEFAULT_AGGREGATION_SELECTOR, this._aggregationTemporalitySelector = A?.aggregationTemporalitySelector ?? Ux7.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR, this._metricProducers = A?.metricProducers ?? [], this._cardinalitySelector = A?.cardinalitySelector;
    }
    setMetricProducer(A) {
      if (this._sdkMetricProducer) throw Error("MetricReader can not be bound to a MeterProvider again.");
      this._sdkMetricProducer = A, this.onInitialized();
    }
    selectAggregation(A) {
      return this._aggregationSelector(A);
    }
    selectAggregationTemporality(A) {
      return this._aggregationTemporalitySelector(A);
    }
    selectCardinalityLimit(A) {
      return this._cardinalitySelector ? this._cardinalitySelector(A) : 2000;
    }
    onInitialized() {}
    async collect(A) {
      if (this._sdkMetricProducer === void 0) throw Error("MetricReader is not bound to a MetricProducer");
      if (this._shutdown) throw Error("MetricReader is shutdown");
      let [K, ...q] = await Promise.all([this._sdkMetricProducer.collect({
          timeoutMillis: A?.timeoutMillis
        }), ...this._metricProducers.map(H => H.collect({
          timeoutMillis: A?.timeoutMillis
        }))]),
        Y = K.errors.concat((0, tW1.FlatMap)(q, H => H.errors)),
        z = K.resourceMetrics.resource,
        w = K.resourceMetrics.scopeMetrics.concat((0, tW1.FlatMap)(q, H => H.resourceMetrics.scopeMetrics));
      return {
        resourceMetrics: {
          resource: z,
          scopeMetrics: w
        },
        errors: Y
      };
    }
    async shutdown(A) {
      if (this._shutdown) {
        Qx7.diag.error("Cannot call shutdown twice.");
        return;
      }
      if (A?.timeoutMillis == null) await this.onShutdown();else await (0, tW1.callWithTimeout)(this.onShutdown(), A.timeoutMillis);
      this._shutdown = !0;
    }
    async forceFlush(A) {
      if (this._shutdown) {
        Qx7.diag.warn("Cannot forceFlush on already shutdown MetricReader.");
        return;
      }
      if (A?.timeoutMillis == null) {
        await this.onForceFlush();
        return;
      }
      await (0, tW1.callWithTimeout)(this.onForceFlush(), A.timeoutMillis);
    }
  }
  dx7.MetricReader = px7;
});

// Register to shared state
__$.vv6 = vv6;
