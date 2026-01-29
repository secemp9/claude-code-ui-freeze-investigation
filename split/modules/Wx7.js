// Module: Wx7
// Dependencies: UDA, as, RK, Fb7, Ox7, iW1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Wx7 = v(Gx7 => {
  Object.defineProperty(Gx7, "__esModule", {
    value: !0
  });
  Gx7.ExponentialHistogramAggregator = Gx7.ExponentialHistogramAccumulation = void 0;
  var neY = __$.UDA(),
    LgA = __$.as(),
    reY = __$.RK(),
    Xx7 = __$.Fb7(),
    $x7 = __$.Ox7(),
    oeY = __$.iW1();
  class cDA {
    low;
    high;
    static combine(A, K) {
      return new cDA(Math.min(A.low, K.low), Math.max(A.high, K.high));
    }
    constructor(A, K) {
      this.low = A, this.high = K;
    }
  }
  var aeY = 20,
    seY = 160,
    Pv6 = 2;
  class rW1 {
    startTime;
    _maxSize;
    _recordMinMax;
    _sum;
    _count;
    _zeroCount;
    _min;
    _max;
    _positive;
    _negative;
    _mapping;
    constructor(A, K = seY, q = !0, Y = 0, z = 0, w = 0, H = Number.POSITIVE_INFINITY, J = Number.NEGATIVE_INFINITY, O = new Xx7.Buckets(), X = new Xx7.Buckets(), $ = (0, $x7.getMapping)(aeY)) {
      if (this.startTime = A, this._maxSize = K, this._recordMinMax = q, this._sum = Y, this._count = z, this._zeroCount = w, this._min = H, this._max = J, this._positive = O, this._negative = X, this._mapping = $, this._maxSize < Pv6) reY.diag.warn(`Exponential Histogram Max Size set to ${this._maxSize},                 changing to the minimum size of: ${Pv6}`), this._maxSize = Pv6;
    }
    record(A) {
      this.updateByIncrement(A, 1);
    }
    setStartTime(A) {
      this.startTime = A;
    }
    toPointValue() {
      return {
        hasMinMax: this._recordMinMax,
        min: this.min,
        max: this.max,
        sum: this.sum,
        positive: {
          offset: this.positive.offset,
          bucketCounts: this.positive.counts()
        },
        negative: {
          offset: this.negative.offset,
          bucketCounts: this.negative.counts()
        },
        count: this.count,
        scale: this.scale,
        zeroCount: this.zeroCount
      };
    }
    get sum() {
      return this._sum;
    }
    get min() {
      return this._min;
    }
    get max() {
      return this._max;
    }
    get count() {
      return this._count;
    }
    get zeroCount() {
      return this._zeroCount;
    }
    get scale() {
      if (this._count === this._zeroCount) return 0;
      return this._mapping.scale;
    }
    get positive() {
      return this._positive;
    }
    get negative() {
      return this._negative;
    }
    updateByIncrement(A, K) {
      if (Number.isNaN(A)) return;
      if (A > this._max) this._max = A;
      if (A < this._min) this._min = A;
      if (this._count += K, A === 0) {
        this._zeroCount += K;
        return;
      }
      if (this._sum += A * K, A > 0) this._updateBuckets(this._positive, A, K);else this._updateBuckets(this._negative, -A, K);
    }
    merge(A) {
      if (this._count === 0) this._min = A.min, this._max = A.max;else if (A.count !== 0) {
        if (A.min < this.min) this._min = A.min;
        if (A.max > this.max) this._max = A.max;
      }
      this.startTime = A.startTime, this._sum += A.sum, this._count += A.count, this._zeroCount += A.zeroCount;
      let K = this._minScale(A);
      this._downscale(this.scale - K), this._mergeBuckets(this.positive, A, A.positive, K), this._mergeBuckets(this.negative, A, A.negative, K);
    }
    diff(A) {
      this._min = 1 / 0, this._max = -1 / 0, this._sum -= A.sum, this._count -= A.count, this._zeroCount -= A.zeroCount;
      let K = this._minScale(A);
      this._downscale(this.scale - K), this._diffBuckets(this.positive, A, A.positive, K), this._diffBuckets(this.negative, A, A.negative, K);
    }
    clone() {
      return new rW1(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping);
    }
    _updateBuckets(A, K, q) {
      let Y = this._mapping.mapToIndex(K),
        z = !1,
        w = 0,
        H = 0;
      if (A.length === 0) A.indexStart = Y, A.indexEnd = A.indexStart, A.indexBase = A.indexStart;else if (Y < A.indexStart && A.indexEnd - Y >= this._maxSize) z = !0, H = Y, w = A.indexEnd;else if (Y > A.indexEnd && Y - A.indexStart >= this._maxSize) z = !0, H = A.indexStart, w = Y;
      if (z) {
        let J = this._changeScale(w, H);
        this._downscale(J), Y = this._mapping.mapToIndex(K);
      }
      this._incrementIndexBy(A, Y, q);
    }
    _incrementIndexBy(A, K, q) {
      if (q === 0) return;
      if (A.length === 0) A.indexStart = A.indexEnd = A.indexBase = K;
      if (K < A.indexStart) {
        let z = A.indexEnd - K;
        if (z >= A.backing.length) this._grow(A, z + 1);
        A.indexStart = K;
      } else if (K > A.indexEnd) {
        let z = K - A.indexStart;
        if (z >= A.backing.length) this._grow(A, z + 1);
        A.indexEnd = K;
      }
      let Y = K - A.indexBase;
      if (Y < 0) Y += A.backing.length;
      A.incrementBucket(Y, q);
    }
    _grow(A, K) {
      let q = A.backing.length,
        Y = A.indexBase - A.indexStart,
        z = q - Y,
        w = (0, oeY.nextGreaterSquare)(K);
      if (w > this._maxSize) w = this._maxSize;
      let H = w - Y;
      A.backing.growTo(w, z, H);
    }
    _changeScale(A, K) {
      let q = 0;
      while (A - K >= this._maxSize) A >>= 1, K >>= 1, q++;
      return q;
    }
    _downscale(A) {
      if (A === 0) return;
      if (A < 0) throw Error(`impossible change of scale: ${this.scale}`);
      let K = this._mapping.scale - A;
      this._positive.downscale(A), this._negative.downscale(A), this._mapping = (0, $x7.getMapping)(K);
    }
    _minScale(A) {
      let K = Math.min(this.scale, A.scale),
        q = cDA.combine(this._highLowAtScale(this.positive, this.scale, K), this._highLowAtScale(A.positive, A.scale, K)),
        Y = cDA.combine(this._highLowAtScale(this.negative, this.scale, K), this._highLowAtScale(A.negative, A.scale, K));
      return Math.min(K - this._changeScale(q.high, q.low), K - this._changeScale(Y.high, Y.low));
    }
    _highLowAtScale(A, K, q) {
      if (A.length === 0) return new cDA(0, -1);
      let Y = K - q;
      return new cDA(A.indexStart >> Y, A.indexEnd >> Y);
    }
    _mergeBuckets(A, K, q, Y) {
      let z = q.offset,
        w = K.scale - Y;
      for (let H = 0; H < q.length; H++) this._incrementIndexBy(A, z + H >> w, q.at(H));
    }
    _diffBuckets(A, K, q, Y) {
      let z = q.offset,
        w = K.scale - Y;
      for (let H = 0; H < q.length; H++) {
        let O = (z + H >> w) - A.indexBase;
        if (O < 0) O += A.backing.length;
        A.decrementBucket(O, q.at(H));
      }
      A.trim();
    }
  }
  Gx7.ExponentialHistogramAccumulation = rW1;
  class _x7 {
    _maxSize;
    _recordMinMax;
    kind = neY.AggregatorKind.EXPONENTIAL_HISTOGRAM;
    constructor(A, K) {
      this._maxSize = A, this._recordMinMax = K;
    }
    createAccumulation(A) {
      return new rW1(A, this._maxSize, this._recordMinMax);
    }
    merge(A, K) {
      let q = K.clone();
      return q.merge(A), q;
    }
    diff(A, K) {
      let q = K.clone();
      return q.diff(A), q;
    }
    toMetricData(A, K, q, Y) {
      return {
        descriptor: A,
        aggregationTemporality: K,
        dataPointType: LgA.DataPointType.EXPONENTIAL_HISTOGRAM,
        dataPoints: q.map(([z, w]) => {
          let H = w.toPointValue(),
            J = A.type === LgA.InstrumentType.GAUGE || A.type === LgA.InstrumentType.UP_DOWN_COUNTER || A.type === LgA.InstrumentType.OBSERVABLE_GAUGE || A.type === LgA.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes: z,
            startTime: w.startTime,
            endTime: Y,
            value: {
              min: H.hasMinMax ? H.min : void 0,
              max: H.hasMinMax ? H.max : void 0,
              sum: !J ? H.sum : void 0,
              positive: {
                offset: H.positive.offset,
                bucketCounts: H.positive.bucketCounts
              },
              negative: {
                offset: H.negative.offset,
                bucketCounts: H.negative.bucketCounts
              },
              count: H.count,
              scale: H.scale,
              zeroCount: H.zeroCount
            }
          };
        })
      };
    }
  }
  Gx7.ExponentialHistogramAggregator = _x7;
});

// Register to shared state
__$.Wx7 = Wx7;
