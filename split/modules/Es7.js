// Module: Es7
// Dependencies: ij1, LB, EB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Es7 = v(Ts7 => {
  Object.defineProperty(Ts7, "__esModule", {
    value: !0
  });
  Ts7.OTLPTraceExporter = void 0;
  var fs7 = __$.ij1(),
    cX2 = __$.LB(),
    lX2 = __$.EB();
  class Ns7 extends lX2.OTLPExporterBase {
    constructor(A = {}) {
      super((0, fs7.createOtlpGrpcExportDelegate)((0, fs7.convertLegacyOtlpGrpcOptions)(A, "TRACES"), cX2.ProtobufTraceSerializer, "TraceExportService", "/opentelemetry.proto.collector.trace.v1.TraceService/Export"));
    }
  }
  Ts7.OTLPTraceExporter = Ns7;
});

// Register to shared state
__$.Es7 = Es7;
