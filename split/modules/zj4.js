// Module: zj4
// Dependencies: b4A, P56, n31, Z56, x4A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zj4 = v(qj4 => {
  Object.defineProperty(qj4, "__esModule", {
    value: !0
  });
  qj4.TraceAPI = void 0;
  var h56 = __$.b4A(),
    eD4 = __$.P56(),
    Aj4 = __$.n31(),
    oXA = __$.Z56(),
    Kj4 = __$.x4A(),
    b56 = "trace";
  class x56 {
    constructor() {
      this._proxyTracerProvider = new eD4.ProxyTracerProvider(), this.wrapSpanContext = Aj4.wrapSpanContext, this.isSpanContextValid = Aj4.isSpanContextValid, this.deleteSpan = oXA.deleteSpan, this.getSpan = oXA.getSpan, this.getActiveSpan = oXA.getActiveSpan, this.getSpanContext = oXA.getSpanContext, this.setSpan = oXA.setSpan, this.setSpanContext = oXA.setSpanContext;
    }
    static getInstance() {
      if (!this._instance) this._instance = new x56();
      return this._instance;
    }
    setGlobalTracerProvider(A) {
      let K = (0, h56.registerGlobal)(b56, this._proxyTracerProvider, Kj4.DiagAPI.instance());
      if (K) this._proxyTracerProvider.setDelegate(A);
      return K;
    }
    getTracerProvider() {
      return (0, h56.getGlobal)(b56) || this._proxyTracerProvider;
    }
    getTracer(A, K) {
      return this.getTracerProvider().getTracer(A, K);
    }
    disable() {
      (0, h56.unregisterGlobal)(b56, Kj4.DiagAPI.instance()), this._proxyTracerProvider = new eD4.ProxyTracerProvider();
    }
  }
  qj4.TraceAPI = x56;
});

// Register to shared state
__$.zj4 = zj4;
