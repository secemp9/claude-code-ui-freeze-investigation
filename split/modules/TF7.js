// Module: TF7
// Dependencies: ZD1, jE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TF7 = v(fF7 => {
  Object.defineProperty(fF7, "__esModule", {
    value: !0
  });
  fF7.ProtobufTraceSerializer = void 0;
  var VF7 = __$.ZD1(),
    p82 = __$.jE6(),
    d82 = VF7.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse,
    c82 = VF7.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
  fF7.ProtobufTraceSerializer = {
    serializeRequest: A => {
      let K = (0, p82.createExportTraceServiceRequest)(A);
      return c82.encode(K).finish();
    },
    deserializeResponse: A => {
      return d82.decode(A);
    }
  };
});

// Register to shared state
__$.TF7 = TF7;
