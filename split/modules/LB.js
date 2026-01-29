// Module: LB
// Dependencies: sg7, GF7, vF7, LF7, SF7, uF7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LB = v(Kt => {
  Object.defineProperty(Kt, "__esModule", {
    value: !0
  });
  Kt.JsonTraceSerializer = Kt.JsonMetricsSerializer = Kt.JsonLogsSerializer = Kt.ProtobufTraceSerializer = Kt.ProtobufMetricsSerializer = Kt.ProtobufLogsSerializer = void 0;
  var q42 = __$.sg7();
  Object.defineProperty(Kt, "ProtobufLogsSerializer", {
    enumerable: !0,
    get: function () {
      return q42.ProtobufLogsSerializer;
    }
  });
  var Y42 = __$.GF7();
  Object.defineProperty(Kt, "ProtobufMetricsSerializer", {
    enumerable: !0,
    get: function () {
      return Y42.ProtobufMetricsSerializer;
    }
  });
  var z42 = __$.vF7();
  Object.defineProperty(Kt, "ProtobufTraceSerializer", {
    enumerable: !0,
    get: function () {
      return z42.ProtobufTraceSerializer;
    }
  });
  var w42 = __$.LF7();
  Object.defineProperty(Kt, "JsonLogsSerializer", {
    enumerable: !0,
    get: function () {
      return w42.JsonLogsSerializer;
    }
  });
  var H42 = __$.SF7();
  Object.defineProperty(Kt, "JsonMetricsSerializer", {
    enumerable: !0,
    get: function () {
      return H42.JsonMetricsSerializer;
    }
  });
  var J42 = __$.uF7();
  Object.defineProperty(Kt, "JsonTraceSerializer", {
    enumerable: !0,
    get: function () {
      return J42.JsonTraceSerializer;
    }
  });
});

// Register to shared state
__$.LB = LB;
