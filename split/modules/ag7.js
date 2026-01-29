// Module: ag7
// Dependencies: ZD1, _E6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ag7 = v(rg7 => {
  Object.defineProperty(rg7, "__esModule", {
    value: !0
  });
  rg7.ProtobufLogsSerializer = void 0;
  var ng7 = __$.ZD1(),
    Z82 = __$._E6(),
    W82 = ng7.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse,
    D82 = ng7.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
  rg7.ProtobufLogsSerializer = {
    serializeRequest: A => {
      let K = (0, Z82.createExportLogsServiceRequest)(A);
      return D82.encode(K).finish();
    },
    deserializeResponse: A => {
      return W82.decode(A);
    }
  };
});

// Register to shared state
__$.ag7 = ag7;
