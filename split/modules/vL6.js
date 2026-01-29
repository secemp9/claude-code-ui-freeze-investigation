// Module: vL6
// Dependencies: RK, gFA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vL6 = v(wa7 => {
  Object.defineProperty(wa7, "__esModule", {
    value: !0
  });
  wa7.TraceIdRatioBasedSampler = void 0;
  var qX2 = __$.RK(),
    Ya7 = __$.gFA();
  class za7 {
    _ratio;
    _upperBound;
    constructor(A = 0) {
      this._ratio = A, this._ratio = this._normalize(A), this._upperBound = Math.floor(this._ratio * 4294967295);
    }
    shouldSample(A, K) {
      return {
        decision: (0, qX2.isValidTraceId)(K) && this._accumulate(K) < this._upperBound ? Ya7.SamplingDecision.RECORD_AND_SAMPLED : Ya7.SamplingDecision.NOT_RECORD
      };
    }
    toString() {
      return `TraceIdRatioBased{${this._ratio}}`;
    }
    _normalize(A) {
      if (typeof A !== "number" || isNaN(A)) return 0;
      return A >= 1 ? 1 : A <= 0 ? 0 : A;
    }
    _accumulate(A) {
      let K = 0;
      for (let q = 0; q < A.length / 8; q++) {
        let Y = q * 8,
          z = parseInt(A.slice(Y, Y + 8), 16);
        K = (K ^ z) >>> 0;
      }
      return K;
    }
  }
  wa7.TraceIdRatioBasedSampler = za7;
});

// Register to shared state
__$.vL6 = vL6;
