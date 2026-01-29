// Module: xx7
// Dependencies: RK, Lx7, as

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xx7 = v(Rx7 => {
  Object.defineProperty(Rx7, "__esModule", {
    value: !0
  });
  Rx7.DEFAULT_AGGREGATION = Rx7.EXPONENTIAL_HISTOGRAM_AGGREGATION = Rx7.HISTOGRAM_AGGREGATION = Rx7.LAST_VALUE_AGGREGATION = Rx7.SUM_AGGREGATION = Rx7.DROP_AGGREGATION = Rx7.DefaultAggregation = Rx7.ExponentialHistogramAggregation = Rx7.ExplicitBucketHistogramAggregation = Rx7.HistogramAggregation = Rx7.LastValueAggregation = Rx7.SumAggregation = Rx7.DropAggregation = void 0;
  var JA2 = __$.RK(),
    m5A = __$.Lx7(),
    vB = __$.as();
  class oW1 {
    static DEFAULT_INSTANCE = new m5A.DropAggregator();
    createAggregator(A) {
      return oW1.DEFAULT_INSTANCE;
    }
  }
  Rx7.DropAggregation = oW1;
  class IgA {
    static MONOTONIC_INSTANCE = new m5A.SumAggregator(!0);
    static NON_MONOTONIC_INSTANCE = new m5A.SumAggregator(!1);
    createAggregator(A) {
      switch (A.type) {
        case vB.InstrumentType.COUNTER:
        case vB.InstrumentType.OBSERVABLE_COUNTER:
        case vB.InstrumentType.HISTOGRAM:
          return IgA.MONOTONIC_INSTANCE;
        default:
          return IgA.NON_MONOTONIC_INSTANCE;
      }
    }
  }
  Rx7.SumAggregation = IgA;
  class aW1 {
    static DEFAULT_INSTANCE = new m5A.LastValueAggregator();
    createAggregator(A) {
      return aW1.DEFAULT_INSTANCE;
    }
  }
  Rx7.LastValueAggregation = aW1;
  class sW1 {
    static DEFAULT_INSTANCE = new m5A.HistogramAggregator([0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 1e4], !0);
    createAggregator(A) {
      return sW1.DEFAULT_INSTANCE;
    }
  }
  Rx7.HistogramAggregation = sW1;
  class Vv6 {
    _recordMinMax;
    _boundaries;
    constructor(A, K = !0) {
      if (this._recordMinMax = K, A == null) throw Error("ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array");
      A = A.concat(), A = A.sort((z, w) => z - w);
      let q = A.lastIndexOf(-1 / 0),
        Y = A.indexOf(1 / 0);
      if (Y === -1) Y = void 0;
      this._boundaries = A.slice(q + 1, Y);
    }
    createAggregator(A) {
      return new m5A.HistogramAggregator(this._boundaries, this._recordMinMax);
    }
  }
  Rx7.ExplicitBucketHistogramAggregation = Vv6;
  class fv6 {
    _maxSize;
    _recordMinMax;
    constructor(A = 160, K = !0) {
      this._maxSize = A, this._recordMinMax = K;
    }
    createAggregator(A) {
      return new m5A.ExponentialHistogramAggregator(this._maxSize, this._recordMinMax);
    }
  }
  Rx7.ExponentialHistogramAggregation = fv6;
  class Nv6 {
    _resolve(A) {
      switch (A.type) {
        case vB.InstrumentType.COUNTER:
        case vB.InstrumentType.UP_DOWN_COUNTER:
        case vB.InstrumentType.OBSERVABLE_COUNTER:
        case vB.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
          return Rx7.SUM_AGGREGATION;
        case vB.InstrumentType.GAUGE:
        case vB.InstrumentType.OBSERVABLE_GAUGE:
          return Rx7.LAST_VALUE_AGGREGATION;
        case vB.InstrumentType.HISTOGRAM:
          {
            if (A.advice.explicitBucketBoundaries) return new Vv6(A.advice.explicitBucketBoundaries);
            return Rx7.HISTOGRAM_AGGREGATION;
          }
      }
      return JA2.diag.warn(`Unable to recognize instrument type: ${A.type}`), Rx7.DROP_AGGREGATION;
    }
    createAggregator(A) {
      return this._resolve(A).createAggregator(A);
    }
  }
  Rx7.DefaultAggregation = Nv6;
  Rx7.DROP_AGGREGATION = new oW1();
  Rx7.SUM_AGGREGATION = new IgA();
  Rx7.LAST_VALUE_AGGREGATION = new aW1();
  Rx7.HISTOGRAM_AGGREGATION = new sW1();
  Rx7.EXPONENTIAL_HISTOGRAM_AGGREGATION = new fv6();
  Rx7.DEFAULT_AGGREGATION = new Nv6();
});

// Register to shared state
__$.xx7 = xx7;
