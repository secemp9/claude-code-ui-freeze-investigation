// Module: MB7
// Dependencies: Cv6, yv6, Iv6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MB7 = v(DB7 => {
  Object.defineProperty(DB7, "__esModule", {
    value: !0
  });
  DB7.SyncMetricStorage = void 0;
  var _12 = __$.Cv6(),
    G12 = __$.yv6(),
    Z12 = __$.Iv6();
  class WB7 extends _12.MetricStorage {
    _attributesProcessor;
    _aggregationCardinalityLimit;
    _deltaMetricStorage;
    _temporalMetricStorage;
    constructor(A, K, q, Y, z) {
      super(A);
      this._attributesProcessor = q, this._aggregationCardinalityLimit = z, this._deltaMetricStorage = new G12.DeltaMetricProcessor(K, this._aggregationCardinalityLimit), this._temporalMetricStorage = new Z12.TemporalMetricProcessor(K, Y);
    }
    record(A, K, q, Y) {
      K = this._attributesProcessor.process(K, q), this._deltaMetricStorage.record(A, K, q, Y);
    }
    collect(A, K) {
      let q = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(A, this._instrumentDescriptor, q, K);
    }
  }
  DB7.SyncMetricStorage = WB7;
});

// Register to shared state
__$.MB7 = MB7;
