// Module: js7
// Dependencies: EB, LB, sp

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var js7 = v(Ws7 => {
  Object.defineProperty(Ws7, "__esModule", {
    value: !0
  });
  Ws7.OTLPTraceExporter = void 0;
  var BX2 = __$.EB(),
    mX2 = __$.LB(),
    Gs7 = __$.sp();
  class Zs7 extends BX2.OTLPExporterBase {
    constructor(A = {}) {
      super((0, Gs7.createOtlpHttpExportDelegate)((0, Gs7.convertLegacyHttpOptions)(A, "TRACES", "v1/traces", {
        "Content-Type": "application/x-protobuf"
      }), mX2.ProtobufTraceSerializer));
    }
  }
  Ws7.OTLPTraceExporter = Zs7;
});

// Register to shared state
__$.js7 = js7;
