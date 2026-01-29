// Module: bD4
// Dependencies: yD4, b4A, x4A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bD4 = v(SD4 => {
  Object.defineProperty(SD4, "__esModule", {
    value: !0
  });
  SD4.MetricsAPI = void 0;
  var l79 = __$.yD4(),
    k56 = __$.b4A(),
    ID4 = __$.x4A(),
    C56 = "metrics";
  class L56 {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new L56();
      return this._instance;
    }
    setGlobalMeterProvider(A) {
      return (0, k56.registerGlobal)(C56, A, ID4.DiagAPI.instance());
    }
    getMeterProvider() {
      return (0, k56.getGlobal)(C56) || l79.NOOP_METER_PROVIDER;
    }
    getMeter(A, K, q) {
      return this.getMeterProvider().getMeter(A, K, q);
    }
    disable() {
      (0, k56.unregisterGlobal)(C56, ID4.DiagAPI.instance());
    }
  }
  SD4.MetricsAPI = L56;
});

// Register to shared state
__$.bD4 = bD4;
