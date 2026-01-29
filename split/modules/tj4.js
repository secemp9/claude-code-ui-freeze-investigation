// Module: tj4
// Dependencies: RK, TIA, n56, r56

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tj4 = v(aj4 => {
  Object.defineProperty(aj4, "__esModule", {
    value: !0
  });
  aj4.W3CBaggagePropagator = void 0;
  var o56 = __$.RK(),
    wq9 = __$.TIA(),
    B4A = __$.n56(),
    a56 = __$.r56();
  class oj4 {
    inject(A, K, q) {
      let Y = o56.propagation.getBaggage(A);
      if (!Y || (0, wq9.isTracingSuppressed)(A)) return;
      let z = (0, a56.getKeyPairs)(Y).filter(H => {
          return H.length <= B4A.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
        }).slice(0, B4A.BAGGAGE_MAX_NAME_VALUE_PAIRS),
        w = (0, a56.serializeKeyPairs)(z);
      if (w.length > 0) q.set(K, B4A.BAGGAGE_HEADER, w);
    }
    extract(A, K, q) {
      let Y = q.get(K, B4A.BAGGAGE_HEADER),
        z = Array.isArray(Y) ? Y.join(B4A.BAGGAGE_ITEMS_SEPARATOR) : Y;
      if (!z) return A;
      let w = {};
      if (z.length === 0) return A;
      if (z.split(B4A.BAGGAGE_ITEMS_SEPARATOR).forEach(J => {
        let O = (0, a56.parsePairKeyValue)(J);
        if (O) {
          let X = {
            value: O.value
          };
          if (O.metadata) X.metadata = O.metadata;
          w[O.key] = X;
        }
      }), Object.entries(w).length === 0) return A;
      return o56.propagation.setBaggage(A, o56.propagation.createBaggage(w));
    }
    fields() {
      return [B4A.BAGGAGE_HEADER];
    }
  }
  aj4.W3CBaggagePropagator = oj4;
});

// Register to shared state
__$.tj4 = tj4;
