// Module: yD4
// Dependencies: Y56

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yD4 = v(LD4 => {
  Object.defineProperty(LD4, "__esModule", {
    value: !0
  });
  LD4.NOOP_METER_PROVIDER = LD4.NoopMeterProvider = void 0;
  var d79 = __$.Y56();
  class E56 {
    getMeter(A, K, q) {
      return d79.NOOP_METER;
    }
  }
  LD4.NoopMeterProvider = E56;
  LD4.NOOP_METER_PROVIDER = new E56();
});

// Register to shared state
__$.yD4 = yD4;
