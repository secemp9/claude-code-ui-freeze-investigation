// Module: Is7
// Dependencies: EB, LB, sp

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Is7 = v(Rs7 => {
  Object.defineProperty(Rs7, "__esModule", {
    value: !0
  });
  Rs7.OTLPTraceExporter = void 0;
  var rX2 = __$.EB(),
    oX2 = __$.LB(),
    Cs7 = __$.sp();
  class Ls7 extends rX2.OTLPExporterBase {
    constructor(A = {}) {
      super((0, Cs7.createOtlpHttpExportDelegate)((0, Cs7.convertLegacyHttpOptions)(A, "TRACES", "v1/traces", {
        "Content-Type": "application/json"
      }), oX2.JsonTraceSerializer));
    }
  }
  Rs7.OTLPTraceExporter = Ls7;
});

// Register to shared state
__$.Is7 = Is7;
