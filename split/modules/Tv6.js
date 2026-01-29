// Module: Tv6
// Dependencies: cW1, SgA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tv6 = v(gx7 => {
  Object.defineProperty(gx7, "__esModule", {
    value: !0
  });
  gx7.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = gx7.DEFAULT_AGGREGATION_SELECTOR = void 0;
  var MA2 = __$.cW1(),
    PA2 = __$.SgA(),
    VA2 = A => {
      return {
        type: PA2.AggregationType.DEFAULT
      };
    };
  gx7.DEFAULT_AGGREGATION_SELECTOR = VA2;
  var fA2 = A => MA2.AggregationTemporality.CUMULATIVE;
  gx7.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = fA2;
});

// Register to shared state
__$.Tv6 = Tv6;
