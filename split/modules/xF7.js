// Module: xF7
// Dependencies: jE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xF7 = v(hF7 => {
  Object.defineProperty(hF7, "__esModule", {
    value: !0
  });
  hF7.JsonTraceSerializer = void 0;
  var e82 = __$.jE6();
  hF7.JsonTraceSerializer = {
    serializeRequest: A => {
      let K = (0, e82.createExportTraceServiceRequest)(A, {
        useHex: !0,
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
__$.xF7 = xF7;
