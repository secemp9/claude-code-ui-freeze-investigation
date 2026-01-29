// Module: _F7
// Dependencies: ZD1, WE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _F7 = v(XF7 => {
  Object.defineProperty(XF7, "__esModule", {
    value: !0
  });
  XF7.ProtobufMetricsSerializer = void 0;
  var OF7 = __$.ZD1(),
    R82 = __$.WE6(),
    y82 = OF7.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse,
    I82 = OF7.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
  XF7.ProtobufMetricsSerializer = {
    serializeRequest: A => {
      let K = (0, R82.createExportMetricsServiceRequest)([A]);
      return I82.encode(K).finish();
    },
    deserializeResponse: A => {
      return y82.decode(A);
    }
  };
});

// Register to shared state
__$._F7 = _F7;
