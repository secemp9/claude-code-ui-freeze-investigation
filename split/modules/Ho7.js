// Module: Ho7
// Dependencies: fD1, ij1, LB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ho7 = v(zo7 => {
  Object.defineProperty(zo7, "__esModule", {
    value: !0
  });
  zo7.OTLPMetricExporter = void 0;
  var W02 = __$.fD1(),
    qo7 = __$.ij1(),
    D02 = __$.LB();
  class Yo7 extends W02.OTLPMetricExporterBase {
    constructor(A) {
      super((0, qo7.createOtlpGrpcExportDelegate)((0, qo7.convertLegacyOtlpGrpcOptions)(A ?? {}, "METRICS"), D02.ProtobufMetricsSerializer, "MetricsExportService", "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"), A);
    }
  }
  zo7.OTLPMetricExporter = Yo7;
});

// Register to shared state
__$.Ho7 = Ho7;
