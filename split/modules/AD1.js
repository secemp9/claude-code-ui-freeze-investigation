// Module: AD1
// Dependencies: RK, P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AD1 = v(fu7 => {
  Object.defineProperty(fu7, "__esModule", {
    value: !0
  });
  fu7.isObservableInstrument = fu7.ObservableUpDownCounterInstrument = fu7.ObservableGaugeInstrument = fu7.ObservableCounterInstrument = fu7.ObservableInstrument = fu7.HistogramInstrument = fu7.GaugeInstrument = fu7.CounterInstrument = fu7.UpDownCounterInstrument = fu7.SyncInstrument = void 0;
  var lDA = __$.RK(),
    hA2 = __$.P9();
  class iDA {
    _writableMetricStorage;
    _descriptor;
    constructor(A, K) {
      this._writableMetricStorage = A, this._descriptor = K;
    }
    _record(A, K = {}, q = lDA.context.active()) {
      if (typeof A !== "number") {
        lDA.diag.warn(`non-number value provided to metric ${this._descriptor.name}: ${A}`);
        return;
      }
      if (this._descriptor.valueType === lDA.ValueType.INT && !Number.isInteger(A)) {
        if (lDA.diag.warn(`INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`), A = Math.trunc(A), !Number.isInteger(A)) return;
      }
      this._writableMetricStorage.record(A, K, q, (0, hA2.millisToHrTime)(Date.now()));
    }
  }
  fu7.SyncInstrument = iDA;
  class Zu7 extends iDA {
    add(A, K, q) {
      this._record(A, K, q);
    }
  }
  fu7.UpDownCounterInstrument = Zu7;
  class Wu7 extends iDA {
    add(A, K, q) {
      if (A < 0) {
        lDA.diag.warn(`negative value provided to counter ${this._descriptor.name}: ${A}`);
        return;
      }
      this._record(A, K, q);
    }
  }
  fu7.CounterInstrument = Wu7;
  class Du7 extends iDA {
    record(A, K, q) {
      this._record(A, K, q);
    }
  }
  fu7.GaugeInstrument = Du7;
  class ju7 extends iDA {
    record(A, K, q) {
      if (A < 0) {
        lDA.diag.warn(`negative value provided to histogram ${this._descriptor.name}: ${A}`);
        return;
      }
      this._record(A, K, q);
    }
  }
  fu7.HistogramInstrument = ju7;
  class nDA {
    _observableRegistry;
    _metricStorages;
    _descriptor;
    constructor(A, K, q) {
      this._observableRegistry = q, this._descriptor = A, this._metricStorages = K;
    }
    addCallback(A) {
      this._observableRegistry.addCallback(A, this);
    }
    removeCallback(A) {
      this._observableRegistry.removeCallback(A, this);
    }
  }
  fu7.ObservableInstrument = nDA;
  class Mu7 extends nDA {}
  fu7.ObservableCounterInstrument = Mu7;
  class Pu7 extends nDA {}
  fu7.ObservableGaugeInstrument = Pu7;
  class Vu7 extends nDA {}
  fu7.ObservableUpDownCounterInstrument = Vu7;
  function bA2(A) {
    return A instanceof nDA;
  }
  fu7.isObservableInstrument = bA2;
});

// Register to shared state
__$.AD1 = AD1;
