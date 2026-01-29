// Module: Px7
// Dependencies: UDA, P9, as

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Px7 = v(jx7 => {
  Object.defineProperty(jx7, "__esModule", {
    value: !0
  });
  jx7.LastValueAggregator = jx7.LastValueAccumulation = void 0;
  var eeY = __$.UDA(),
    RgA = __$.P9(),
    AA2 = __$.as();
  class ygA {
    startTime;
    _current;
    sampleTime;
    constructor(A, K = 0, q = [0, 0]) {
      this.startTime = A, this._current = K, this.sampleTime = q;
    }
    record(A) {
      this._current = A, this.sampleTime = (0, RgA.millisToHrTime)(Date.now());
    }
    setStartTime(A) {
      this.startTime = A;
    }
    toPointValue() {
      return this._current;
    }
  }
  jx7.LastValueAccumulation = ygA;
  class Dx7 {
    kind = eeY.AggregatorKind.LAST_VALUE;
    createAccumulation(A) {
      return new ygA(A);
    }
    merge(A, K) {
      let q = (0, RgA.hrTimeToMicroseconds)(K.sampleTime) >= (0, RgA.hrTimeToMicroseconds)(A.sampleTime) ? K : A;
      return new ygA(A.startTime, q.toPointValue(), q.sampleTime);
    }
    diff(A, K) {
      let q = (0, RgA.hrTimeToMicroseconds)(K.sampleTime) >= (0, RgA.hrTimeToMicroseconds)(A.sampleTime) ? K : A;
      return new ygA(K.startTime, q.toPointValue(), q.sampleTime);
    }
    toMetricData(A, K, q, Y) {
      return {
        descriptor: A,
        aggregationTemporality: K,
        dataPointType: AA2.DataPointType.GAUGE,
        dataPoints: q.map(([z, w]) => {
          return {
            attributes: z,
            startTime: w.startTime,
            endTime: Y,
            value: w.toPointValue()
          };
        })
      };
    }
  }
  jx7.LastValueAggregator = Dx7;
});

// Register to shared state
__$.Px7 = Px7;
