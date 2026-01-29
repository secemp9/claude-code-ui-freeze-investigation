// Module: zf8
// Dependencies: H8, yvA, dB1, kvA, RvA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zf8 = v(Yf8 => {
  Object.defineProperty(Yf8, "__esModule", {
    value: !0
  });
  var Xdq = __$.H8(),
    Kf8 = __$.yvA(),
    $dq = __$.dB1(),
    _dq = __$.kvA(),
    wtA = __$.RvA();
  class qf8 {
    constructor(A) {
      this._client = A, this._buckets = new Map(), this._interval = setInterval(() => this.flush(), Kf8.DEFAULT_BROWSER_FLUSH_INTERVAL);
    }
    add(A, K, q, Y = "none", z = {}, w = Xdq.timestampInSeconds()) {
      let H = Math.floor(w),
        J = wtA.sanitizeMetricKey(K),
        O = wtA.sanitizeTags(z),
        X = wtA.sanitizeUnit(Y),
        $ = wtA.getBucketKey(A, J, X, O),
        _ = this._buckets.get($),
        G = _ && A === Kf8.SET_METRIC_TYPE ? _.metric.weight : 0;
      if (_) {
        if (_.metric.add(q), _.timestamp < H) _.timestamp = H;
      } else _ = {
        metric: new $dq.METRIC_MAP[A](q),
        timestamp: H,
        metricType: A,
        name: J,
        unit: X,
        tags: O
      }, this._buckets.set($, _);
      let Z = typeof q === "string" ? _.metric.weight - G : q;
      _dq.updateMetricSummaryOnActiveSpan(A, J, Z, X, z, $);
    }
    flush() {
      if (this._buckets.size === 0) return;
      if (this._client.captureAggregateMetrics) {
        let A = Array.from(this._buckets).map(([, K]) => K);
        this._client.captureAggregateMetrics(A);
      }
      this._buckets.clear();
    }
    close() {
      clearInterval(this._interval), this.flush();
    }
  }
  Yf8.BrowserMetricsAggregator = qf8;
});

// Register to shared state
__$.zf8 = zf8;
