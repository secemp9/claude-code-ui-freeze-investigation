// Module: lP8
// Dependencies: H8, yvA, dB1, kvA, RvA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lP8 = v(cP8 => {
  Object.defineProperty(cP8, "__esModule", {
    value: !0
  });
  var pP8 = __$.H8(),
    IvA = __$.yvA(),
    fUq = __$.dB1(),
    NUq = __$.kvA(),
    qtA = __$.RvA();
  class dP8 {
    constructor(A) {
      if (this._client = A, this._buckets = new Map(), this._bucketsTotalWeight = 0, this._interval = setInterval(() => this._flush(), IvA.DEFAULT_FLUSH_INTERVAL), this._interval.unref) this._interval.unref();
      this._flushShift = Math.floor(Math.random() * IvA.DEFAULT_FLUSH_INTERVAL / 1000), this._forceFlush = !1;
    }
    add(A, K, q, Y = "none", z = {}, w = pP8.timestampInSeconds()) {
      let H = Math.floor(w),
        J = qtA.sanitizeMetricKey(K),
        O = qtA.sanitizeTags(z),
        X = qtA.sanitizeUnit(Y),
        $ = qtA.getBucketKey(A, J, X, O),
        _ = this._buckets.get($),
        G = _ && A === IvA.SET_METRIC_TYPE ? _.metric.weight : 0;
      if (_) {
        if (_.metric.add(q), _.timestamp < H) _.timestamp = H;
      } else _ = {
        metric: new fUq.METRIC_MAP[A](q),
        timestamp: H,
        metricType: A,
        name: J,
        unit: X,
        tags: O
      }, this._buckets.set($, _);
      let Z = typeof q === "string" ? _.metric.weight - G : q;
      if (NUq.updateMetricSummaryOnActiveSpan(A, J, Z, X, z, $), this._bucketsTotalWeight += _.metric.weight, this._bucketsTotalWeight >= IvA.MAX_WEIGHT) this.flush();
    }
    flush() {
      this._forceFlush = !0, this._flush();
    }
    close() {
      this._forceFlush = !0, clearInterval(this._interval), this._flush();
    }
    _flush() {
      if (this._forceFlush) {
        this._forceFlush = !1, this._bucketsTotalWeight = 0, this._captureMetrics(this._buckets), this._buckets.clear();
        return;
      }
      let A = Math.floor(pP8.timestampInSeconds()) - IvA.DEFAULT_FLUSH_INTERVAL / 1000 - this._flushShift,
        K = new Map();
      for (let [q, Y] of this._buckets) if (Y.timestamp <= A) K.set(q, Y), this._bucketsTotalWeight -= Y.metric.weight;
      for (let [q] of K) this._buckets.delete(q);
      this._captureMetrics(K);
    }
    _captureMetrics(A) {
      if (A.size > 0 && this._client.captureAggregateMetrics) {
        let K = Array.from(A).map(([, q]) => q);
        this._client.captureAggregateMetrics(K);
      }
    }
  }
  cP8.MetricsAggregator = dP8;
});

// Register to shared state
__$.lP8 = lP8;
