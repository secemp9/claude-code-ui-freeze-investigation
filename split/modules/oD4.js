// Module: oD4
// Dependencies: b4A, QD4, w56, cD4, nq6, x4A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oD4 = v(nD4 => {
  Object.defineProperty(nD4, "__esModule", {
    value: !0
  });
  nD4.PropagationAPI = void 0;
  var y56 = __$.b4A(),
    KK9 = __$.QD4(),
    lD4 = __$.w56(),
    r31 = __$.cD4(),
    qK9 = __$.nq6(),
    iD4 = __$.x4A(),
    I56 = "propagation",
    YK9 = new KK9.NoopTextMapPropagator();
  class S56 {
    constructor() {
      this.createBaggage = qK9.createBaggage, this.getBaggage = r31.getBaggage, this.getActiveBaggage = r31.getActiveBaggage, this.setBaggage = r31.setBaggage, this.deleteBaggage = r31.deleteBaggage;
    }
    static getInstance() {
      if (!this._instance) this._instance = new S56();
      return this._instance;
    }
    setGlobalPropagator(A) {
      return (0, y56.registerGlobal)(I56, A, iD4.DiagAPI.instance());
    }
    inject(A, K, q = lD4.defaultTextMapSetter) {
      return this._getGlobalPropagator().inject(A, K, q);
    }
    extract(A, K, q = lD4.defaultTextMapGetter) {
      return this._getGlobalPropagator().extract(A, K, q);
    }
    fields() {
      return this._getGlobalPropagator().fields();
    }
    disable() {
      (0, y56.unregisterGlobal)(I56, iD4.DiagAPI.instance());
    }
    _getGlobalPropagator() {
      return (0, y56.getGlobal)(I56) || YK9;
    }
  }
  nD4.PropagationAPI = S56;
});

// Register to shared state
__$.oD4 = oD4;
