// Module: Vf8
// Dependencies: H8, FX, xE, qV, yvA, Xf8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vf8 = v(Pf8 => {
  Object.defineProperty(Pf8, "__esModule", {
    value: !0
  });
  var $f8 = __$.H8(),
    _f8 = __$.FX(),
    Gf8 = __$.xE(),
    Pdq = __$.qV(),
    HtA = __$.yvA(),
    Zf8 = __$.Xf8();
  function JtA(A, K, q, Y = {}) {
    let z = Gf8.getClient(),
      w = Gf8.getCurrentScope();
    if (z) {
      if (!z.metricsAggregator) {
        _f8.DEBUG_BUILD && $f8.logger.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs");
        return;
      }
      let {
          unit: H,
          tags: J,
          timestamp: O
        } = Y,
        {
          release: X,
          environment: $
        } = z.getOptions(),
        _ = w.getTransaction(),
        G = {};
      if (X) G.release = X;
      if ($) G.environment = $;
      if (_) G.transaction = Pdq.spanToJSON(_).description || "";
      _f8.DEBUG_BUILD && $f8.logger.log(`Adding value of ${q} to ${A} metric ${K}`), z.metricsAggregator.add(A, K, q, H, {
        ...G,
        ...J
      }, O);
    }
  }
  function Wf8(A, K = 1, q) {
    JtA(HtA.COUNTER_METRIC_TYPE, A, K, q);
  }
  function Df8(A, K, q) {
    JtA(HtA.DISTRIBUTION_METRIC_TYPE, A, K, q);
  }
  function jf8(A, K, q) {
    JtA(HtA.SET_METRIC_TYPE, A, K, q);
  }
  function Mf8(A, K, q) {
    JtA(HtA.GAUGE_METRIC_TYPE, A, K, q);
  }
  var Vdq = {
    increment: Wf8,
    distribution: Df8,
    set: jf8,
    gauge: Mf8,
    MetricsAggregator: Zf8.MetricsAggregator,
    metricsAggregatorIntegration: Zf8.metricsAggregatorIntegration
  };
  Pf8.distribution = Df8;
  Pf8.gauge = Mf8;
  Pf8.increment = Wf8;
  Pf8.metrics = Vdq;
  Pf8.set = jf8;
});

// Register to shared state
__$.Vf8 = Vf8;
