// Module: zu7
// Dependencies: P9, Tv6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zu7 = v(qu7 => {
  Object.defineProperty(qu7, "__esModule", {
    value: !0
  });
  qu7.ConsoleMetricExporter = void 0;
  var Ku7 = __$.P9(),
    vA2 = __$.Tv6();
  class kv6 {
    _shutdown = !1;
    _temporalitySelector;
    constructor(A) {
      this._temporalitySelector = A?.temporalitySelector ?? vA2.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
    }
    export(A, K) {
      if (this._shutdown) {
        setImmediate(K, {
          code: Ku7.ExportResultCode.FAILED
        });
        return;
      }
      return kv6._sendMetrics(A, K);
    }
    forceFlush() {
      return Promise.resolve();
    }
    selectAggregationTemporality(A) {
      return this._temporalitySelector(A);
    }
    shutdown() {
      return this._shutdown = !0, Promise.resolve();
    }
    static _sendMetrics(A, K) {
      for (let q of A.scopeMetrics) for (let Y of q.metrics) console.dir({
        descriptor: Y.descriptor,
        dataPointType: Y.dataPointType,
        dataPoints: Y.dataPoints
      }, {
        depth: null
      });
      K({
        code: Ku7.ExportResultCode.SUCCESS
      });
    }
  }
  qu7.ConsoleMetricExporter = kv6;
});

// Register to shared state
__$.zu7 = zu7;
