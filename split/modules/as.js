// Module: as
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var as = v(kb7 => {
  Object.defineProperty(kb7, "__esModule", {
    value: !0
  });
  kb7.DataPointType = kb7.InstrumentType = void 0;
  var KeY;
  (function (A) {
    A.COUNTER = "COUNTER", A.GAUGE = "GAUGE", A.HISTOGRAM = "HISTOGRAM", A.UP_DOWN_COUNTER = "UP_DOWN_COUNTER", A.OBSERVABLE_COUNTER = "OBSERVABLE_COUNTER", A.OBSERVABLE_GAUGE = "OBSERVABLE_GAUGE", A.OBSERVABLE_UP_DOWN_COUNTER = "OBSERVABLE_UP_DOWN_COUNTER";
  })(KeY = kb7.InstrumentType || (kb7.InstrumentType = {}));
  var qeY;
  (function (A) {
    A[A.HISTOGRAM = 0] = "HISTOGRAM", A[A.EXPONENTIAL_HISTOGRAM = 1] = "EXPONENTIAL_HISTOGRAM", A[A.GAUGE = 2] = "GAUGE", A[A.SUM = 3] = "SUM";
  })(qeY = kb7.DataPointType || (kb7.DataPointType = {}));
});

// Register to shared state
__$.as = as;
