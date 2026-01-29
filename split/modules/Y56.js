// Module: Y56
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Y56 = v(wW4 => {
  Object.defineProperty(wW4, "__esModule", {
    value: !0
  });
  wW4.createNoopMeter = wW4.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = wW4.NOOP_OBSERVABLE_GAUGE_METRIC = wW4.NOOP_OBSERVABLE_COUNTER_METRIC = wW4.NOOP_UP_DOWN_COUNTER_METRIC = wW4.NOOP_HISTOGRAM_METRIC = wW4.NOOP_GAUGE_METRIC = wW4.NOOP_COUNTER_METRIC = wW4.NOOP_METER = wW4.NoopObservableUpDownCounterMetric = wW4.NoopObservableGaugeMetric = wW4.NoopObservableCounterMetric = wW4.NoopObservableMetric = wW4.NoopHistogramMetric = wW4.NoopGaugeMetric = wW4.NoopUpDownCounterMetric = wW4.NoopCounterMetric = wW4.NoopMetric = wW4.NoopMeter = void 0;
  class oq6 {
    constructor() {}
    createGauge(A, K) {
      return wW4.NOOP_GAUGE_METRIC;
    }
    createHistogram(A, K) {
      return wW4.NOOP_HISTOGRAM_METRIC;
    }
    createCounter(A, K) {
      return wW4.NOOP_COUNTER_METRIC;
    }
    createUpDownCounter(A, K) {
      return wW4.NOOP_UP_DOWN_COUNTER_METRIC;
    }
    createObservableGauge(A, K) {
      return wW4.NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    createObservableCounter(A, K) {
      return wW4.NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    createObservableUpDownCounter(A, K) {
      return wW4.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    addBatchObservableCallback(A, K) {}
    removeBatchObservableCallback(A) {}
  }
  wW4.NoopMeter = oq6;
  class rXA {}
  wW4.NoopMetric = rXA;
  class aq6 extends rXA {
    add(A, K) {}
  }
  wW4.NoopCounterMetric = aq6;
  class sq6 extends rXA {
    add(A, K) {}
  }
  wW4.NoopUpDownCounterMetric = sq6;
  class tq6 extends rXA {
    record(A, K) {}
  }
  wW4.NoopGaugeMetric = tq6;
  class eq6 extends rXA {
    record(A, K) {}
  }
  wW4.NoopHistogramMetric = eq6;
  class fIA {
    addCallback(A) {}
    removeCallback(A) {}
  }
  wW4.NoopObservableMetric = fIA;
  class A56 extends fIA {}
  wW4.NoopObservableCounterMetric = A56;
  class K56 extends fIA {}
  wW4.NoopObservableGaugeMetric = K56;
  class q56 extends fIA {}
  wW4.NoopObservableUpDownCounterMetric = q56;
  wW4.NOOP_METER = new oq6();
  wW4.NOOP_COUNTER_METRIC = new aq6();
  wW4.NOOP_GAUGE_METRIC = new tq6();
  wW4.NOOP_HISTOGRAM_METRIC = new eq6();
  wW4.NOOP_UP_DOWN_COUNTER_METRIC = new sq6();
  wW4.NOOP_OBSERVABLE_COUNTER_METRIC = new A56();
  wW4.NOOP_OBSERVABLE_GAUGE_METRIC = new K56();
  wW4.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new q56();
  function b49() {
    return wW4.NOOP_METER;
  }
  wW4.createNoopMeter = b49;
});

// Register to shared state
__$.Y56 = Y56;
