// Module: fD1
// Dependencies: FQ7, uv6, Uv6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fD1 = v(qt => {
  Object.defineProperty(qt, "__esModule", {
    value: !0
  });
  qt.OTLPMetricExporterBase = qt.LowMemoryTemporalitySelector = qt.DeltaTemporalitySelector = qt.CumulativeTemporalitySelector = qt.AggregationTemporalityPreference = qt.OTLPMetricExporter = void 0;
  var L72 = __$.FQ7();
  Object.defineProperty(qt, "OTLPMetricExporter", {
    enumerable: !0,
    get: function () {
      return L72.OTLPMetricExporter;
    }
  });
  var R72 = __$.uv6();
  Object.defineProperty(qt, "AggregationTemporalityPreference", {
    enumerable: !0,
    get: function () {
      return R72.AggregationTemporalityPreference;
    }
  });
  var VD1 = __$.Uv6();
  Object.defineProperty(qt, "CumulativeTemporalitySelector", {
    enumerable: !0,
    get: function () {
      return VD1.CumulativeTemporalitySelector;
    }
  });
  Object.defineProperty(qt, "DeltaTemporalitySelector", {
    enumerable: !0,
    get: function () {
      return VD1.DeltaTemporalitySelector;
    }
  });
  Object.defineProperty(qt, "LowMemoryTemporalitySelector", {
    enumerable: !0,
    get: function () {
      return VD1.LowMemoryTemporalitySelector;
    }
  });
  Object.defineProperty(qt, "OTLPMetricExporterBase", {
    enumerable: !0,
    get: function () {
      return VD1.OTLPMetricExporterBase;
    }
  });
});

// Register to shared state
__$.fD1 = fD1;
