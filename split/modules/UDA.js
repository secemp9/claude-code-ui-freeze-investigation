// Module: UDA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UDA = v(Rb7 => {
  Object.defineProperty(Rb7, "__esModule", {
    value: !0
  });
  Rb7.AggregatorKind = void 0;
  var veY;
  (function (A) {
    A[A.DROP = 0] = "DROP", A[A.SUM = 1] = "SUM", A[A.LAST_VALUE = 2] = "LAST_VALUE", A[A.HISTOGRAM = 3] = "HISTOGRAM", A[A.EXPONENTIAL_HISTOGRAM = 4] = "EXPONENTIAL_HISTOGRAM";
  })(veY = Rb7.AggregatorKind || (Rb7.AggregatorKind = {}));
});

// Register to shared state
__$.UDA = UDA;
