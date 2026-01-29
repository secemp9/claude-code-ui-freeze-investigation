// Module: IF7
// Dependencies: WE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IF7 = v(RF7 => {
  Object.defineProperty(RF7, "__esModule", {
    value: !0
  });
  RF7.JsonMetricsSerializer = void 0;
  var a82 = __$.WE6();
  RF7.JsonMetricsSerializer = {
    serializeRequest: A => {
      let K = (0, a82.createExportMetricsServiceRequest)([A], {
        useLongBits: !1
      });
      return new TextEncoder().encode(JSON.stringify(K));
    },
    deserializeResponse: A => {
      if (A.length === 0) return {};
      return JSON.parse(new TextDecoder().decode(A));
    }
  };
});

// Register to shared state
__$.IF7 = IF7;
