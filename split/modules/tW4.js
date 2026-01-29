// Module: tW4
// Dependencies: j56

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tW4 = v(aW4 => {
  Object.defineProperty(aW4, "__esModule", {
    value: !0
  });
  aW4.NoopTracerProvider = void 0;
  var v79 = __$.j56();
  class oW4 {
    getTracer(A, K, q) {
      return new v79.NoopTracer();
    }
  }
  aW4.NoopTracerProvider = oW4;
});

// Register to shared state
__$.tW4 = tW4;
