// Module: Uv6
// Dependencies: P9, ss, uv6, EB, RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Uv6 = v(um7 => {
  Object.defineProperty(um7, "__esModule", {
    value: !0
  });
  um7.OTLPMetricExporterBase = um7.LowMemoryTemporalitySelector = um7.DeltaTemporalitySelector = um7.CumulativeTemporalitySelector = void 0;
  var k62 = __$.P9(),
    E$ = __$.ss(),
    bm7 = __$.uv6(),
    C62 = __$.EB(),
    L62 = __$.RK(),
    R62 = () => E$.AggregationTemporality.CUMULATIVE;
  um7.CumulativeTemporalitySelector = R62;
  var y62 = A => {
    switch (A) {
      case E$.InstrumentType.COUNTER:
      case E$.InstrumentType.OBSERVABLE_COUNTER:
      case E$.InstrumentType.GAUGE:
      case E$.InstrumentType.HISTOGRAM:
      case E$.InstrumentType.OBSERVABLE_GAUGE:
        return E$.AggregationTemporality.DELTA;
      case E$.InstrumentType.UP_DOWN_COUNTER:
      case E$.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
        return E$.AggregationTemporality.CUMULATIVE;
    }
  };
  um7.DeltaTemporalitySelector = y62;
  var I62 = A => {
    switch (A) {
      case E$.InstrumentType.COUNTER:
      case E$.InstrumentType.HISTOGRAM:
        return E$.AggregationTemporality.DELTA;
      case E$.InstrumentType.GAUGE:
      case E$.InstrumentType.UP_DOWN_COUNTER:
      case E$.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
      case E$.InstrumentType.OBSERVABLE_COUNTER:
      case E$.InstrumentType.OBSERVABLE_GAUGE:
        return E$.AggregationTemporality.CUMULATIVE;
    }
  };
  um7.LowMemoryTemporalitySelector = I62;
  function S62() {
    let A = ((0, k62.getStringFromEnv)("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE") ?? "cumulative").toLowerCase();
    if (A === "cumulative") return um7.CumulativeTemporalitySelector;
    if (A === "delta") return um7.DeltaTemporalitySelector;
    if (A === "lowmemory") return um7.LowMemoryTemporalitySelector;
    return L62.diag.warn(`OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${A}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`), um7.CumulativeTemporalitySelector;
  }
  function h62(A) {
    if (A != null) {
      if (A === bm7.AggregationTemporalityPreference.DELTA) return um7.DeltaTemporalitySelector;else if (A === bm7.AggregationTemporalityPreference.LOWMEMORY) return um7.LowMemoryTemporalitySelector;
      return um7.CumulativeTemporalitySelector;
    }
    return S62();
  }
  var b62 = Object.freeze({
    type: E$.AggregationType.DEFAULT
  });
  function x62(A) {
    return A?.aggregationPreference ?? (() => b62);
  }
  class xm7 extends C62.OTLPExporterBase {
    _aggregationTemporalitySelector;
    _aggregationSelector;
    constructor(A, K) {
      super(A);
      this._aggregationSelector = x62(K), this._aggregationTemporalitySelector = h62(K?.temporalityPreference);
    }
    selectAggregation(A) {
      return this._aggregationSelector(A);
    }
    selectAggregationTemporality(A) {
      return this._aggregationTemporalitySelector(A);
    }
  }
  um7.OTLPMetricExporterBase = xm7;
});

// Register to shared state
__$.Uv6 = Uv6;
