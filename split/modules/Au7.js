// Module: Au7
// Dependencies: P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Au7 = v(tx7 => {
  Object.defineProperty(tx7, "__esModule", {
    value: !0
  });
  tx7.InMemoryMetricExporter = void 0;
  var ax7 = __$.P9();
  class sx7 {
    _shutdown = !1;
    _aggregationTemporality;
    _metrics = [];
    constructor(A) {
      this._aggregationTemporality = A;
    }
    export(A, K) {
      if (this._shutdown) {
        setTimeout(() => K({
          code: ax7.ExportResultCode.FAILED
        }), 0);
        return;
      }
      this._metrics.push(A), setTimeout(() => K({
        code: ax7.ExportResultCode.SUCCESS
      }), 0);
    }
    getMetrics() {
      return this._metrics;
    }
    forceFlush() {
      return Promise.resolve();
    }
    reset() {
      this._metrics = [];
    }
    selectAggregationTemporality(A) {
      return this._aggregationTemporality;
    }
    shutdown() {
      return this._shutdown = !0, Promise.resolve();
    }
  }
  tx7.InMemoryMetricExporter = sx7;
});

// Register to shared state
__$.Au7 = Au7;
