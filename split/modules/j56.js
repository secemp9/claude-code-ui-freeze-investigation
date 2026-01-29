// Module: j56
// Dependencies: NIA, Z56, i31, n31

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var j56 = v(cW4 => {
  Object.defineProperty(cW4, "__esModule", {
    value: !0
  });
  cW4.NoopTracer = void 0;
  var P79 = __$.NIA(),
    pW4 = __$.Z56(),
    W56 = __$.i31(),
    V79 = __$.n31(),
    D56 = P79.ContextAPI.getInstance();
  class dW4 {
    startSpan(A, K, q = D56.active()) {
      if (Boolean(K === null || K === void 0 ? void 0 : K.root)) return new W56.NonRecordingSpan();
      let z = q && (0, pW4.getSpanContext)(q);
      if (f79(z) && (0, V79.isSpanContextValid)(z)) return new W56.NonRecordingSpan(z);else return new W56.NonRecordingSpan();
    }
    startActiveSpan(A, K, q, Y) {
      let z, w, H;
      if (arguments.length < 2) return;else if (arguments.length === 2) H = K;else if (arguments.length === 3) z = K, H = q;else z = K, w = q, H = Y;
      let J = w !== null && w !== void 0 ? w : D56.active(),
        O = this.startSpan(A, z, J),
        X = (0, pW4.setSpan)(J, O);
      return D56.with(X, H, void 0, O);
    }
  }
  cW4.NoopTracer = dW4;
  function f79(A) {
    return typeof A === "object" && typeof A.spanId === "string" && typeof A.traceId === "string" && typeof A.traceFlags === "number";
  }
});

// Register to shared state
__$.j56 = j56;
