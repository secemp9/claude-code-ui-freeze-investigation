// Module: hb7
// Dependencies: UDA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hb7 = v(Ib7 => {
  Object.defineProperty(Ib7, "__esModule", {
    value: !0
  });
  Ib7.DropAggregator = void 0;
  var EeY = __$.UDA();
  class yb7 {
    kind = EeY.AggregatorKind.DROP;
    createAccumulation() {
      return;
    }
    merge(A, K) {
      return;
    }
    diff(A, K) {
      return;
    }
    toMetricData(A, K, q, Y) {
      return;
    }
  }
  Ib7.DropAggregator = yb7;
});

// Register to shared state
__$.hb7 = hb7;
