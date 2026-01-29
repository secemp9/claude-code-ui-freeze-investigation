// Module: CF7
// Dependencies: _E6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CF7 = v(EF7 => {
  Object.defineProperty(EF7, "__esModule", {
    value: !0
  });
  EF7.JsonLogsSerializer = void 0;
  var n82 = __$._E6();
  EF7.JsonLogsSerializer = {
    serializeRequest: A => {
      let K = (0, n82.createExportLogsServiceRequest)(A, {
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
__$.CF7 = CF7;
