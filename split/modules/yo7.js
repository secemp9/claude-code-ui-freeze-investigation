// Module: yo7
// Dependencies: ij1, LB, EB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yo7 = v(Lo7 => {
  Object.defineProperty(Lo7, "__esModule", {
    value: !0
  });
  Lo7.OTLPLogExporter = void 0;
  var ko7 = __$.ij1(),
    F02 = __$.LB(),
    Q02 = __$.EB();
  class Co7 extends Q02.OTLPExporterBase {
    constructor(A = {}) {
      super((0, ko7.createOtlpGrpcExportDelegate)((0, ko7.convertLegacyOtlpGrpcOptions)(A, "LOGS"), F02.ProtobufLogsSerializer, "LogsExportService", "/opentelemetry.proto.collector.logs.v1.LogsService/Export"));
    }
  }
  Lo7.OTLPLogExporter = Co7;
});

// Register to shared state
__$.yo7 = yo7;
