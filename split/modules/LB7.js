// Module: LB7
// Dependencies: hgA, ku7, GS, Qu7, su7, KB7, ZB7, MB7, qD1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LB7 = v(kB7 => {
  Object.defineProperty(kB7, "__esModule", {
    value: !0
  });
  kB7.MeterSharedState = void 0;
  var T12 = __$.hgA(),
    v12 = __$.ku7(),
    E12 = __$.GS(),
    k12 = __$.Qu7(),
    C12 = __$.su7(),
    L12 = __$.KB7(),
    R12 = __$.ZB7(),
    y12 = __$.MB7(),
    I12 = __$.qD1();
  class EB7 {
    _meterProviderSharedState;
    _instrumentationScope;
    metricStorageRegistry = new C12.MetricStorageRegistry();
    observableRegistry = new R12.ObservableRegistry();
    meter;
    constructor(A, K) {
      this._meterProviderSharedState = A, this._instrumentationScope = K, this.meter = new v12.Meter(this);
    }
    registerMetricStorage(A) {
      let K = this._registerMetricStorage(A, y12.SyncMetricStorage);
      if (K.length === 1) return K[0];
      return new L12.MultiMetricStorage(K);
    }
    registerAsyncMetricStorage(A) {
      return this._registerMetricStorage(A, k12.AsyncMetricStorage);
    }
    async collect(A, K, q) {
      let Y = await this.observableRegistry.observe(K, q?.timeoutMillis),
        z = this.metricStorageRegistry.getStorages(A);
      if (z.length === 0) return null;
      let w = z.map(H => {
        return H.collect(A, K);
      }).filter(E12.isNotNullish);
      if (w.length === 0) return {
        errors: Y
      };
      return {
        scopeMetrics: {
          scope: this._instrumentationScope,
          metrics: w
        },
        errors: Y
      };
    }
    _registerMetricStorage(A, K) {
      let Y = this._meterProviderSharedState.viewRegistry.findViews(A, this._instrumentationScope).map(z => {
        let w = (0, T12.createInstrumentDescriptorWithView)(z, A),
          H = this.metricStorageRegistry.findOrUpdateCompatibleStorage(w);
        if (H != null) return H;
        let J = z.aggregation.createAggregator(w),
          O = new K(w, J, z.attributesProcessor, this._meterProviderSharedState.metricCollectors, z.aggregationCardinalityLimit);
        return this.metricStorageRegistry.register(O), O;
      });
      if (Y.length === 0) {
        let w = this._meterProviderSharedState.selectAggregations(A.type).map(([H, J]) => {
          let O = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(H, A);
          if (O != null) return O;
          let X = J.createAggregator(A),
            $ = H.selectCardinalityLimit(A.type),
            _ = new K(A, X, (0, I12.createNoopAttributesProcessor)(), [H], $);
          return this.metricStorageRegistry.registerForCollector(H, _), _;
        });
        Y = Y.concat(w);
      }
      return Y;
    }
  }
  kB7.MeterSharedState = EB7;
});

// Register to shared state
__$.LB7 = LB7;
