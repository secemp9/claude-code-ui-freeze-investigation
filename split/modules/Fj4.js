// Module: Fj4
// Dependencies: uj4, Q56, U56

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fj4 = v(mj4 => {
  Object.defineProperty(mj4, "__esModule", {
    value: !0
  });
  mj4.LogsAPI = void 0;
  var ck = __$.uj4(),
    BK9 = __$.Q56(),
    Bj4 = __$.U56();
  class c56 {
    constructor() {
      this._proxyLoggerProvider = new Bj4.ProxyLoggerProvider();
    }
    static getInstance() {
      if (!this._instance) this._instance = new c56();
      return this._instance;
    }
    setGlobalLoggerProvider(A) {
      if (ck._global[ck.GLOBAL_LOGS_API_KEY]) return this.getLoggerProvider();
      return ck._global[ck.GLOBAL_LOGS_API_KEY] = (0, ck.makeGetter)(ck.API_BACKWARDS_COMPATIBILITY_VERSION, A, BK9.NOOP_LOGGER_PROVIDER), this._proxyLoggerProvider._setDelegate(A), A;
    }
    getLoggerProvider() {
      var A, K;
      return (K = (A = ck._global[ck.GLOBAL_LOGS_API_KEY]) === null || A === void 0 ? void 0 : A.call(ck._global, ck.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && K !== void 0 ? K : this._proxyLoggerProvider;
    }
    getLogger(A, K, q) {
      return this.getLoggerProvider().getLogger(A, K, q);
    }
    disable() {
      delete ck._global[ck.GLOBAL_LOGS_API_KEY], this._proxyLoggerProvider = new Bj4.ProxyLoggerProvider();
    }
  }
  mj4.LogsAPI = c56;
});

// Register to shared state
__$.Fj4 = Fj4;
