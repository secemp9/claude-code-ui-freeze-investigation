// Module: NIA
// Dependencies: TW4, b4A, x4A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NIA = v(EW4 => {
  Object.defineProperty(EW4, "__esModule", {
    value: !0
  });
  EW4.ContextAPI = void 0;
  var n49 = __$.TW4(),
    H56 = __$.b4A(),
    vW4 = __$.x4A(),
    J56 = "context",
    r49 = new n49.NoopContextManager();
  class O56 {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new O56();
      return this._instance;
    }
    setGlobalContextManager(A) {
      return (0, H56.registerGlobal)(J56, A, vW4.DiagAPI.instance());
    }
    active() {
      return this._getContextManager().active();
    }
    with(A, K, q, ...Y) {
      return this._getContextManager().with(A, K, q, ...Y);
    }
    bind(A, K) {
      return this._getContextManager().bind(A, K);
    }
    _getContextManager() {
      return (0, H56.getGlobal)(J56) || r49;
    }
    disable() {
      this._getContextManager().disable(), (0, H56.unregisterGlobal)(J56, vW4.DiagAPI.instance());
    }
  }
  EW4.ContextAPI = O56;
});

// Register to shared state
__$.NIA = NIA;
