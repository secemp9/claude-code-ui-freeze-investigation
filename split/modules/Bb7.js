// Module: Bb7
// Dependencies: UDA, as, GS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Bb7 = v(xb7 => {
  Object.defineProperty(xb7, "__esModule", {
    value: !0
  });
  xb7.HistogramAggregator = xb7.HistogramAccumulation = void 0;
  var keY = __$.UDA(),
    kgA = __$.as(),
    CeY = __$.GS();
  function LeY(A) {
    let K = A.map(() => 0);
    return K.push(0), {
      buckets: {
        boundaries: A,
        counts: K
      },
      sum: 0,
      count: 0,
      hasMinMax: !1,
      min: 1 / 0,
      max: -1 / 0
    };
  }
  class CgA {
    startTime;
    _boundaries;
    _recordMinMax;
    _current;
    constructor(A, K, q = !0, Y = LeY(K)) {
      this.startTime = A, this._boundaries = K, this._recordMinMax = q, this._current = Y;
    }
    record(A) {
      if (Number.isNaN(A)) return;
      if (this._current.count += 1, this._current.sum += A, this._recordMinMax) this._current.min = Math.min(A, this._current.min), this._current.max = Math.max(A, this._current.max), this._current.hasMinMax = !0;
      let K = (0, CeY.binarySearchUB)(this._boundaries, A);
      this._current.buckets.counts[K] += 1;
    }
    setStartTime(A) {
      this.startTime = A;
    }
    toPointValue() {
      return this._current;
    }
  }
  xb7.HistogramAccumulation = CgA;
  class bb7 {
    _boundaries;
    _recordMinMax;
    kind = keY.AggregatorKind.HISTOGRAM;
    constructor(A, K) {
      this._boundaries = A, this._recordMinMax = K;
    }
    createAccumulation(A) {
      return new CgA(A, this._boundaries, this._recordMinMax);
    }
    merge(A, K) {
      let q = A.toPointValue(),
        Y = K.toPointValue(),
        z = q.buckets.counts,
        w = Y.buckets.counts,
        H = Array(z.length);
      for (let X = 0; X < z.length; X++) H[X] = z[X] + w[X];
      let J = 1 / 0,
        O = -1 / 0;
      if (this._recordMinMax) {
        if (q.hasMinMax && Y.hasMinMax) J = Math.min(q.min, Y.min), O = Math.max(q.max, Y.max);else if (q.hasMinMax) J = q.min, O = q.max;else if (Y.hasMinMax) J = Y.min, O = Y.max;
      }
      return new CgA(A.startTime, q.buckets.boundaries, this._recordMinMax, {
        buckets: {
          boundaries: q.buckets.boundaries,
          counts: H
        },
        count: q.count + Y.count,
        sum: q.sum + Y.sum,
        hasMinMax: this._recordMinMax && (q.hasMinMax || Y.hasMinMax),
        min: J,
        max: O
      });
    }
    diff(A, K) {
      let q = A.toPointValue(),
        Y = K.toPointValue(),
        z = q.buckets.counts,
        w = Y.buckets.counts,
        H = Array(z.length);
      for (let J = 0; J < z.length; J++) H[J] = w[J] - z[J];
      return new CgA(K.startTime, q.buckets.boundaries, this._recordMinMax, {
        buckets: {
          boundaries: q.buckets.boundaries,
          counts: H
        },
        count: Y.count - q.count,
        sum: Y.sum - q.sum,
        hasMinMax: !1,
        min: 1 / 0,
        max: -1 / 0
      });
    }
    toMetricData(A, K, q, Y) {
      return {
        descriptor: A,
        aggregationTemporality: K,
        dataPointType: kgA.DataPointType.HISTOGRAM,
        dataPoints: q.map(([z, w]) => {
          let H = w.toPointValue(),
            J = A.type === kgA.InstrumentType.GAUGE || A.type === kgA.InstrumentType.UP_DOWN_COUNTER || A.type === kgA.InstrumentType.OBSERVABLE_GAUGE || A.type === kgA.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes: z,
            startTime: w.startTime,
            endTime: Y,
            value: {
              min: H.hasMinMax ? H.min : void 0,
              max: H.hasMinMax ? H.max : void 0,
              sum: !J ? H.sum : void 0,
              buckets: H.buckets,
              count: H.count
            }
          };
        })
      };
    }
  }
  xb7.HistogramAggregator = bb7;
});

// Register to shared state
__$.Bb7 = Bb7;
