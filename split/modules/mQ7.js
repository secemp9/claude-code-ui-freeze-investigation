// Module: mQ7
// Dependencies: Uv6, LB, sp

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mQ7 = v(uQ7 => {
  Object.defineProperty(uQ7, "__esModule", {
    value: !0
  });
  uQ7.OTLPMetricExporter = void 0;
  var N72 = __$.Uv6(),
    T72 = __$.LB(),
    bQ7 = __$.sp();
  class xQ7 extends N72.OTLPMetricExporterBase {
    constructor(A) {
      super((0, bQ7.createOtlpHttpExportDelegate)((0, bQ7.convertLegacyHttpOptions)(A ?? {}, "METRICS", "v1/metrics", {
        "Content-Type": "application/json"
      }), T72.JsonMetricsSerializer), A);
    }
  }
  uQ7.OTLPMetricExporter = xQ7;
});

// Register to shared state
__$.mQ7 = mQ7;
