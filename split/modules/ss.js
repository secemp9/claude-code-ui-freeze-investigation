// Module: ss
// Dependencies: cW1, as, vv6, ox7, Au7, zu7, Ym7, SgA, qD1, GS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ss = v(xf => {
  Object.defineProperty(xf, "__esModule", {
    value: !0
  });
  xf.TimeoutError = xf.createDenyListAttributesProcessor = xf.createAllowListAttributesProcessor = xf.AggregationType = xf.MeterProvider = xf.ConsoleMetricExporter = xf.InMemoryMetricExporter = xf.PeriodicExportingMetricReader = xf.MetricReader = xf.InstrumentType = xf.DataPointType = xf.AggregationTemporality = void 0;
  var n12 = __$.cW1();
  Object.defineProperty(xf, "AggregationTemporality", {
    enumerable: !0,
    get: function () {
      return n12.AggregationTemporality;
    }
  });
  var zm7 = __$.as();
  Object.defineProperty(xf, "DataPointType", {
    enumerable: !0,
    get: function () {
      return zm7.DataPointType;
    }
  });
  Object.defineProperty(xf, "InstrumentType", {
    enumerable: !0,
    get: function () {
      return zm7.InstrumentType;
    }
  });
  var r12 = __$.vv6();
  Object.defineProperty(xf, "MetricReader", {
    enumerable: !0,
    get: function () {
      return r12.MetricReader;
    }
  });
  var o12 = __$.ox7();
  Object.defineProperty(xf, "PeriodicExportingMetricReader", {
    enumerable: !0,
    get: function () {
      return o12.PeriodicExportingMetricReader;
    }
  });
  var a12 = __$.Au7();
  Object.defineProperty(xf, "InMemoryMetricExporter", {
    enumerable: !0,
    get: function () {
      return a12.InMemoryMetricExporter;
    }
  });
  var s12 = __$.zu7();
  Object.defineProperty(xf, "ConsoleMetricExporter", {
    enumerable: !0,
    get: function () {
      return s12.ConsoleMetricExporter;
    }
  });
  var t12 = __$.Ym7();
  Object.defineProperty(xf, "MeterProvider", {
    enumerable: !0,
    get: function () {
      return t12.MeterProvider;
    }
  });
  var e12 = __$.SgA();
  Object.defineProperty(xf, "AggregationType", {
    enumerable: !0,
    get: function () {
      return e12.AggregationType;
    }
  });
  var wm7 = __$.qD1();
  Object.defineProperty(xf, "createAllowListAttributesProcessor", {
    enumerable: !0,
    get: function () {
      return wm7.createAllowListAttributesProcessor;
    }
  });
  Object.defineProperty(xf, "createDenyListAttributesProcessor", {
    enumerable: !0,
    get: function () {
      return wm7.createDenyListAttributesProcessor;
    }
  });
  var A62 = __$.GS();
  Object.defineProperty(xf, "TimeoutError", {
    enumerable: !0,
    get: function () {
      return A62.TimeoutError;
    }
  });
});

// Register to shared state
__$.ss = ss;
