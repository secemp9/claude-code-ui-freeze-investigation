// Module: Qu7
// Dependencies: Cv6, yv6, Iv6, bgA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qu7 = v(gu7 => {
  Object.defineProperty(gu7, "__esModule", {
    value: !0
  });
  gu7.AsyncMetricStorage = void 0;
  var aA2 = __$.Cv6(),
    sA2 = __$.yv6(),
    tA2 = __$.Iv6(),
    eA2 = __$.bgA();
  class mu7 extends aA2.MetricStorage {
    _attributesProcessor;
    _aggregationCardinalityLimit;
    _deltaMetricStorage;
    _temporalMetricStorage;
    constructor(A, K, q, Y, z) {
      super(A);
      this._attributesProcessor = q, this._aggregationCardinalityLimit = z, this._deltaMetricStorage = new sA2.DeltaMetricProcessor(K, this._aggregationCardinalityLimit), this._temporalMetricStorage = new tA2.TemporalMetricProcessor(K, Y);
    }
    record(A, K) {
      let q = new eA2.AttributeHashMap();
      Array.from(A.entries()).forEach(([Y, z]) => {
        q.set(this._attributesProcessor.process(Y), z);
      }), this._deltaMetricStorage.batchCumulate(q, K);
    }
    collect(A, K) {
      let q = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(A, this._instrumentDescriptor, q, K);
    }
  }
  gu7.AsyncMetricStorage = mu7;
});

// Register to shared state
__$.Qu7 = Qu7;
