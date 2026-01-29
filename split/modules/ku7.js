// Module: ku7
// Dependencies: hgA, AD1, as

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ku7 = v(vu7 => {
  Object.defineProperty(vu7, "__esModule", {
    value: !0
  });
  vu7.Meter = void 0;
  var Q5A = __$.hgA(),
    U5A = __$.AD1(),
    p5A = __$.as();
  class Tu7 {
    _meterSharedState;
    constructor(A) {
      this._meterSharedState = A;
    }
    createGauge(A, K) {
      let q = (0, Q5A.createInstrumentDescriptor)(A, p5A.InstrumentType.GAUGE, K),
        Y = this._meterSharedState.registerMetricStorage(q);
      return new U5A.GaugeInstrument(Y, q);
    }
    createHistogram(A, K) {
      let q = (0, Q5A.createInstrumentDescriptor)(A, p5A.InstrumentType.HISTOGRAM, K),
        Y = this._meterSharedState.registerMetricStorage(q);
      return new U5A.HistogramInstrument(Y, q);
    }
    createCounter(A, K) {
      let q = (0, Q5A.createInstrumentDescriptor)(A, p5A.InstrumentType.COUNTER, K),
        Y = this._meterSharedState.registerMetricStorage(q);
      return new U5A.CounterInstrument(Y, q);
    }
    createUpDownCounter(A, K) {
      let q = (0, Q5A.createInstrumentDescriptor)(A, p5A.InstrumentType.UP_DOWN_COUNTER, K),
        Y = this._meterSharedState.registerMetricStorage(q);
      return new U5A.UpDownCounterInstrument(Y, q);
    }
    createObservableGauge(A, K) {
      let q = (0, Q5A.createInstrumentDescriptor)(A, p5A.InstrumentType.OBSERVABLE_GAUGE, K),
        Y = this._meterSharedState.registerAsyncMetricStorage(q);
      return new U5A.ObservableGaugeInstrument(q, Y, this._meterSharedState.observableRegistry);
    }
    createObservableCounter(A, K) {
      let q = (0, Q5A.createInstrumentDescriptor)(A, p5A.InstrumentType.OBSERVABLE_COUNTER, K),
        Y = this._meterSharedState.registerAsyncMetricStorage(q);
      return new U5A.ObservableCounterInstrument(q, Y, this._meterSharedState.observableRegistry);
    }
    createObservableUpDownCounter(A, K) {
      let q = (0, Q5A.createInstrumentDescriptor)(A, p5A.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, K),
        Y = this._meterSharedState.registerAsyncMetricStorage(q);
      return new U5A.ObservableUpDownCounterInstrument(q, Y, this._meterSharedState.observableRegistry);
    }
    addBatchObservableCallback(A, K) {
      this._meterSharedState.observableRegistry.addBatchCallback(A, K);
    }
    removeBatchObservableCallback(A, K) {
      this._meterSharedState.observableRegistry.removeBatchCallback(A, K);
    }
  }
  vu7.Meter = Tu7;
});

// Register to shared state
__$.ku7 = ku7;
