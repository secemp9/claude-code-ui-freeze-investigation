// Module: cQ7
// Dependencies: fD1, LB, sp

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cQ7 = v(pQ7 => {
  Object.defineProperty(pQ7, "__esModule", {
    value: !0
  });
  pQ7.OTLPMetricExporter = void 0;
  var I72 = __$.fD1(),
    S72 = __$.LB(),
    QQ7 = __$.sp();
  class UQ7 extends I72.OTLPMetricExporterBase {
    constructor(A) {
      super((0, QQ7.createOtlpHttpExportDelegate)((0, QQ7.convertLegacyHttpOptions)(A ?? {}, "METRICS", "v1/metrics", {
        "Content-Type": "application/x-protobuf"
      }), S72.ProtobufMetricsSerializer), A);
    }
  }
  pQ7.OTLPMetricExporter = UQ7;
});

// Register to shared state
__$.cQ7 = cQ7;
