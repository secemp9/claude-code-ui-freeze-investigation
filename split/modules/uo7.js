// Module: uo7
// Dependencies: EB, LB, sp

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uo7 = v(bo7 => {
  Object.defineProperty(bo7, "__esModule", {
    value: !0
  });
  bo7.OTLPLogExporter = void 0;
  var d02 = __$.EB(),
    c02 = __$.LB(),
    So7 = __$.sp();
  class ho7 extends d02.OTLPExporterBase {
    constructor(A = {}) {
      super((0, So7.createOtlpHttpExportDelegate)((0, So7.convertLegacyHttpOptions)(A, "LOGS", "v1/logs", {
        "Content-Type": "application/json"
      }), c02.JsonLogsSerializer));
    }
  }
  bo7.OTLPLogExporter = ho7;
});

// Register to shared state
__$.uo7 = uo7;
