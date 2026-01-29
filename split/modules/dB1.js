// Module: dB1
// Dependencies: yvA, RvA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dB1 = v(UP8 => {
  Object.defineProperty(UP8, "__esModule", {
    value: !0
  });
  var KtA = __$.yvA(),
    ZUq = __$.RvA();
  class FB1 {
    constructor(A) {
      this._value = A;
    }
    get weight() {
      return 1;
    }
    add(A) {
      this._value += A;
    }
    toString() {
      return `${this._value}`;
    }
  }
  class QB1 {
    constructor(A) {
      this._last = A, this._min = A, this._max = A, this._sum = A, this._count = 1;
    }
    get weight() {
      return 5;
    }
    add(A) {
      if (this._last = A, A < this._min) this._min = A;
      if (A > this._max) this._max = A;
      this._sum += A, this._count++;
    }
    toString() {
      return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
    }
  }
  class UB1 {
    constructor(A) {
      this._value = [A];
    }
    get weight() {
      return this._value.length;
    }
    add(A) {
      this._value.push(A);
    }
    toString() {
      return this._value.join(":");
    }
  }
  class pB1 {
    constructor(A) {
      this.first = A, this._value = new Set([A]);
    }
    get weight() {
      return this._value.size;
    }
    add(A) {
      this._value.add(A);
    }
    toString() {
      return Array.from(this._value).map(A => typeof A === "string" ? ZUq.simpleHash(A) : A).join(":");
    }
  }
  var WUq = {
    [KtA.COUNTER_METRIC_TYPE]: FB1,
    [KtA.GAUGE_METRIC_TYPE]: QB1,
    [KtA.DISTRIBUTION_METRIC_TYPE]: UB1,
    [KtA.SET_METRIC_TYPE]: pB1
  };
  UP8.CounterMetric = FB1;
  UP8.DistributionMetric = UB1;
  UP8.GaugeMetric = QB1;
  UP8.METRIC_MAP = WUq;
  UP8.SetMetric = pB1;
});

// Register to shared state
__$.dB1 = dB1;
