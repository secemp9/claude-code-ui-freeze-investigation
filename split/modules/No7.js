// Module: No7
// Dependencies: EB, LB, sp

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var No7 = v(Vo7 => {
  Object.defineProperty(Vo7, "__esModule", {
    value: !0
  });
  Vo7.OTLPLogExporter = void 0;
  var S02 = __$.EB(),
    h02 = __$.LB(),
    Mo7 = __$.sp();
  class Po7 extends S02.OTLPExporterBase {
    constructor(A = {}) {
      super((0, Mo7.createOtlpHttpExportDelegate)((0, Mo7.convertLegacyHttpOptions)(A, "LOGS", "v1/logs", {
        "Content-Type": "application/x-protobuf"
      }), h02.ProtobufLogsSerializer));
    }
  }
  Vo7.OTLPLogExporter = Po7;
});

// Register to shared state
__$.No7 = No7;
