// Module: sj1
// Dependencies: gFA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sj1 = v(so7 => {
  Object.defineProperty(so7, "__esModule", {
    value: !0
  });
  so7.AlwaysOnSampler = void 0;
  var AX2 = __$.gFA();
  class ao7 {
    shouldSample() {
      return {
        decision: AX2.SamplingDecision.RECORD_AND_SAMPLED
      };
    }
    toString() {
      return "AlwaysOnSampler";
    }
  }
  so7.AlwaysOnSampler = ao7;
});

// Register to shared state
__$.sj1 = sj1;
