// Module: SgA
// Dependencies: xx7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SgA = v(Bx7 => {
  Object.defineProperty(Bx7, "__esModule", {
    value: !0
  });
  Bx7.toAggregation = Bx7.AggregationType = void 0;
  var g5A = __$.xx7(),
    F5A;
  (function (A) {
    A[A.DEFAULT = 0] = "DEFAULT", A[A.DROP = 1] = "DROP", A[A.SUM = 2] = "SUM", A[A.LAST_VALUE = 3] = "LAST_VALUE", A[A.EXPLICIT_BUCKET_HISTOGRAM = 4] = "EXPLICIT_BUCKET_HISTOGRAM", A[A.EXPONENTIAL_HISTOGRAM = 5] = "EXPONENTIAL_HISTOGRAM";
  })(F5A = Bx7.AggregationType || (Bx7.AggregationType = {}));
  function jA2(A) {
    switch (A.type) {
      case F5A.DEFAULT:
        return g5A.DEFAULT_AGGREGATION;
      case F5A.DROP:
        return g5A.DROP_AGGREGATION;
      case F5A.SUM:
        return g5A.SUM_AGGREGATION;
      case F5A.LAST_VALUE:
        return g5A.LAST_VALUE_AGGREGATION;
      case F5A.EXPONENTIAL_HISTOGRAM:
        {
          let K = A;
          return new g5A.ExponentialHistogramAggregation(K.options?.maxSize, K.options?.recordMinMax);
        }
      case F5A.EXPLICIT_BUCKET_HISTOGRAM:
        {
          let K = A;
          if (K.options == null) return g5A.HISTOGRAM_AGGREGATION;else return new g5A.ExplicitBucketHistogramAggregation(K.options?.boundaries, K.options?.recordMinMax);
        }
      default:
        throw Error("Unsupported Aggregation");
    }
  }
  Bx7.toAggregation = jA2;
});

// Register to shared state
__$.SgA = SgA;
