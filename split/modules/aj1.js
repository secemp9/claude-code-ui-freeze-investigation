// Module: aj1
// Dependencies: gFA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aj1 = v(ro7 => {
  Object.defineProperty(ro7, "__esModule", {
    value: !0
  });
  ro7.AlwaysOffSampler = void 0;
  var e02 = __$.gFA();
  class no7 {
    shouldSample() {
      return {
        decision: e02.SamplingDecision.NOT_RECORD
      };
    }
    toString() {
      return "AlwaysOffSampler";
    }
  }
  ro7.AlwaysOffSampler = no7;
});

// Register to shared state
__$.aj1 = aj1;
