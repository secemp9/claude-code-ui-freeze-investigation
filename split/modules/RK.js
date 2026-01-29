// Module: RK
// Dependencies: nq6, VIA, zW4, p31, Y56, jW4, w56, M56, P56, YD4
//   ... and 11 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RK = v(fz => {
  Object.defineProperty(fz, "__esModule", {
    value: !0
  });
  fz.trace = fz.propagation = fz.metrics = fz.diag = fz.context = fz.INVALID_SPAN_CONTEXT = fz.INVALID_TRACEID = fz.INVALID_SPANID = fz.isValidSpanId = fz.isValidTraceId = fz.isSpanContextValid = fz.createTraceState = fz.TraceFlags = fz.SpanStatusCode = fz.SpanKind = fz.SamplingDecision = fz.ProxyTracerProvider = fz.ProxyTracer = fz.defaultTextMapSetter = fz.defaultTextMapGetter = fz.ValueType = fz.createNoopMeter = fz.DiagLogLevel = fz.DiagConsoleLogger = fz.ROOT_CONTEXT = fz.createContextKey = fz.baggageEntryMetadataFromString = void 0;
  var HK9 = __$.nq6();
  Object.defineProperty(fz, "baggageEntryMetadataFromString", {
    enumerable: !0,
    get: function () {
      return HK9.baggageEntryMetadataFromString;
    }
  });
  var Oj4 = __$.VIA();
  Object.defineProperty(fz, "createContextKey", {
    enumerable: !0,
    get: function () {
      return Oj4.createContextKey;
    }
  });
  Object.defineProperty(fz, "ROOT_CONTEXT", {
    enumerable: !0,
    get: function () {
      return Oj4.ROOT_CONTEXT;
    }
  });
  var JK9 = __$.zW4();
  Object.defineProperty(fz, "DiagConsoleLogger", {
    enumerable: !0,
    get: function () {
      return JK9.DiagConsoleLogger;
    }
  });
  var OK9 = __$.p31();
  Object.defineProperty(fz, "DiagLogLevel", {
    enumerable: !0,
    get: function () {
      return OK9.DiagLogLevel;
    }
  });
  var XK9 = __$.Y56();
  Object.defineProperty(fz, "createNoopMeter", {
    enumerable: !0,
    get: function () {
      return XK9.createNoopMeter;
    }
  });
  var $K9 = __$.jW4();
  Object.defineProperty(fz, "ValueType", {
    enumerable: !0,
    get: function () {
      return $K9.ValueType;
    }
  });
  var Xj4 = __$.w56();
  Object.defineProperty(fz, "defaultTextMapGetter", {
    enumerable: !0,
    get: function () {
      return Xj4.defaultTextMapGetter;
    }
  });
  Object.defineProperty(fz, "defaultTextMapSetter", {
    enumerable: !0,
    get: function () {
      return Xj4.defaultTextMapSetter;
    }
  });
  var _K9 = __$.M56();
  Object.defineProperty(fz, "ProxyTracer", {
    enumerable: !0,
    get: function () {
      return _K9.ProxyTracer;
    }
  });
  var GK9 = __$.P56();
  Object.defineProperty(fz, "ProxyTracerProvider", {
    enumerable: !0,
    get: function () {
      return GK9.ProxyTracerProvider;
    }
  });
  var ZK9 = __$.YD4();
  Object.defineProperty(fz, "SamplingDecision", {
    enumerable: !0,
    get: function () {
      return ZK9.SamplingDecision;
    }
  });
  var WK9 = __$.wD4();
  Object.defineProperty(fz, "SpanKind", {
    enumerable: !0,
    get: function () {
      return WK9.SpanKind;
    }
  });
  var DK9 = __$.JD4();
  Object.defineProperty(fz, "SpanStatusCode", {
    enumerable: !0,
    get: function () {
      return DK9.SpanStatusCode;
    }
  });
  var jK9 = __$.$56();
  Object.defineProperty(fz, "TraceFlags", {
    enumerable: !0,
    get: function () {
      return jK9.TraceFlags;
    }
  });
  var MK9 = __$.fD4();
  Object.defineProperty(fz, "createTraceState", {
    enumerable: !0,
    get: function () {
      return MK9.createTraceState;
    }
  });
  var u56 = __$.n31();
  Object.defineProperty(fz, "isSpanContextValid", {
    enumerable: !0,
    get: function () {
      return u56.isSpanContextValid;
    }
  });
  Object.defineProperty(fz, "isValidTraceId", {
    enumerable: !0,
    get: function () {
      return u56.isValidTraceId;
    }
  });
  Object.defineProperty(fz, "isValidSpanId", {
    enumerable: !0,
    get: function () {
      return u56.isValidSpanId;
    }
  });
  var B56 = __$.l31();
  Object.defineProperty(fz, "INVALID_SPANID", {
    enumerable: !0,
    get: function () {
      return B56.INVALID_SPANID;
    }
  });
  Object.defineProperty(fz, "INVALID_TRACEID", {
    enumerable: !0,
    get: function () {
      return B56.INVALID_TRACEID;
    }
  });
  Object.defineProperty(fz, "INVALID_SPAN_CONTEXT", {
    enumerable: !0,
    get: function () {
      return B56.INVALID_SPAN_CONTEXT;
    }
  });
  var $j4 = __$.vD4();
  Object.defineProperty(fz, "context", {
    enumerable: !0,
    get: function () {
      return $j4.context;
    }
  });
  var _j4 = __$.CD4();
  Object.defineProperty(fz, "diag", {
    enumerable: !0,
    get: function () {
      return _j4.diag;
    }
  });
  var Gj4 = __$.BD4();
  Object.defineProperty(fz, "metrics", {
    enumerable: !0,
    get: function () {
      return Gj4.metrics;
    }
  });
  var Zj4 = __$.tD4();
  Object.defineProperty(fz, "propagation", {
    enumerable: !0,
    get: function () {
      return Zj4.propagation;
    }
  });
  var Wj4 = __$.Jj4();
  Object.defineProperty(fz, "trace", {
    enumerable: !0,
    get: function () {
      return Wj4.trace;
    }
  });
  fz.default = {
    context: $j4.context,
    diag: _j4.diag,
    metrics: Gj4.metrics,
    propagation: Zj4.propagation,
    trace: Wj4.trace
  };
});

// Register to shared state
__$.RK = RK;
