// Module: Tx7
// Dependencies: UDA, as

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tx7 = v(fx7 => {
  Object.defineProperty(fx7, "__esModule", {
    value: !0
  });
  fx7.SumAggregator = fx7.SumAccumulation = void 0;
  var qA2 = __$.UDA(),
    YA2 = __$.as();
  class B5A {
    startTime;
    monotonic;
    _current;
    reset;
    constructor(A, K, q = 0, Y = !1) {
      this.startTime = A, this.monotonic = K, this._current = q, this.reset = Y;
    }
    record(A) {
      if (this.monotonic && A < 0) return;
      this._current += A;
    }
    setStartTime(A) {
      this.startTime = A;
    }
    toPointValue() {
      return this._current;
    }
  }
  fx7.SumAccumulation = B5A;
  class Vx7 {
    monotonic;
    kind = qA2.AggregatorKind.SUM;
    constructor(A) {
      this.monotonic = A;
    }
    createAccumulation(A) {
      return new B5A(A, this.monotonic);
    }
    merge(A, K) {
      let q = A.toPointValue(),
        Y = K.toPointValue();
      if (K.reset) return new B5A(K.startTime, this.monotonic, Y, K.reset);
      return new B5A(A.startTime, this.monotonic, q + Y);
    }
    diff(A, K) {
      let q = A.toPointValue(),
        Y = K.toPointValue();
      if (this.monotonic && q > Y) return new B5A(K.startTime, this.monotonic, Y, !0);
      return new B5A(K.startTime, this.monotonic, Y - q);
    }
    toMetricData(A, K, q, Y) {
      return {
        descriptor: A,
        aggregationTemporality: K,
        dataPointType: YA2.DataPointType.SUM,
        dataPoints: q.map(([z, w]) => {
          return {
            attributes: z,
            startTime: w.startTime,
            endTime: Y,
            value: w.toPointValue()
          };
        }),
        isMonotonic: this.monotonic
      };
    }
  }
  fx7.SumAggregator = Vx7;
});

// Register to shared state
__$.Tx7 = Tx7;
