// Module: WE6
// Dependencies: RK, ss, eg7, WD1, DD1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WE6 = v(HF7 => {
  Object.defineProperty(HF7, "__esModule", {
    value: !0
  });
  HF7.createExportMetricsServiceRequest = HF7.toMetric = HF7.toScopeMetrics = HF7.toResourceMetrics = void 0;
  var AF7 = __$.RK(),
    aDA = __$.ss(),
    KF7 = __$.eg7(),
    V82 = __$.WD1(),
    UgA = __$.DD1();
  function YF7(A, K) {
    let q = (0, V82.getOtlpEncoder)(K),
      Y = (0, UgA.createResource)(A.resource);
    return {
      resource: Y,
      schemaUrl: Y.schemaUrl,
      scopeMetrics: zF7(A.scopeMetrics, q)
    };
  }
  HF7.toResourceMetrics = YF7;
  function zF7(A, K) {
    return Array.from(A.map(q => ({
      scope: (0, UgA.createInstrumentationScope)(q.scope),
      metrics: q.metrics.map(Y => wF7(Y, K)),
      schemaUrl: q.scope.schemaUrl
    })));
  }
  HF7.toScopeMetrics = zF7;
  function wF7(A, K) {
    let q = {
        name: A.descriptor.name,
        description: A.descriptor.description,
        unit: A.descriptor.unit
      },
      Y = v82(A.aggregationTemporality);
    switch (A.dataPointType) {
      case aDA.DataPointType.SUM:
        q.sum = {
          aggregationTemporality: Y,
          isMonotonic: A.isMonotonic,
          dataPoints: qF7(A, K)
        };
        break;
      case aDA.DataPointType.GAUGE:
        q.gauge = {
          dataPoints: qF7(A, K)
        };
        break;
      case aDA.DataPointType.HISTOGRAM:
        q.histogram = {
          aggregationTemporality: Y,
          dataPoints: N82(A, K)
        };
        break;
      case aDA.DataPointType.EXPONENTIAL_HISTOGRAM:
        q.exponentialHistogram = {
          aggregationTemporality: Y,
          dataPoints: T82(A, K)
        };
        break;
    }
    return q;
  }
  HF7.toMetric = wF7;
  function f82(A, K, q) {
    let Y = {
      attributes: (0, UgA.toAttributes)(A.attributes),
      startTimeUnixNano: q.encodeHrTime(A.startTime),
      timeUnixNano: q.encodeHrTime(A.endTime)
    };
    switch (K) {
      case AF7.ValueType.INT:
        Y.asInt = A.value;
        break;
      case AF7.ValueType.DOUBLE:
        Y.asDouble = A.value;
        break;
    }
    return Y;
  }
  function qF7(A, K) {
    return A.dataPoints.map(q => {
      return f82(q, A.descriptor.valueType, K);
    });
  }
  function N82(A, K) {
    return A.dataPoints.map(q => {
      let Y = q.value;
      return {
        attributes: (0, UgA.toAttributes)(q.attributes),
        bucketCounts: Y.buckets.counts,
        explicitBounds: Y.buckets.boundaries,
        count: Y.count,
        sum: Y.sum,
        min: Y.min,
        max: Y.max,
        startTimeUnixNano: K.encodeHrTime(q.startTime),
        timeUnixNano: K.encodeHrTime(q.endTime)
      };
    });
  }
  function T82(A, K) {
    return A.dataPoints.map(q => {
      let Y = q.value;
      return {
        attributes: (0, UgA.toAttributes)(q.attributes),
        count: Y.count,
        min: Y.min,
        max: Y.max,
        sum: Y.sum,
        positive: {
          offset: Y.positive.offset,
          bucketCounts: Y.positive.bucketCounts
        },
        negative: {
          offset: Y.negative.offset,
          bucketCounts: Y.negative.bucketCounts
        },
        scale: Y.scale,
        zeroCount: Y.zeroCount,
        startTimeUnixNano: K.encodeHrTime(q.startTime),
        timeUnixNano: K.encodeHrTime(q.endTime)
      };
    });
  }
  function v82(A) {
    switch (A) {
      case aDA.AggregationTemporality.DELTA:
        return KF7.EAggregationTemporality.AGGREGATION_TEMPORALITY_DELTA;
      case aDA.AggregationTemporality.CUMULATIVE:
        return KF7.EAggregationTemporality.AGGREGATION_TEMPORALITY_CUMULATIVE;
    }
  }
  function E82(A, K) {
    return {
      resourceMetrics: A.map(q => YF7(q, K))
    };
  }
  HF7.createExportMetricsServiceRequest = E82;
});

// Register to shared state
__$.WE6 = WE6;
