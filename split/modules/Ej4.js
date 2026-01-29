// Module: Ej4
// Dependencies: o31

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ej4 = v(Tj4 => {
  Object.defineProperty(Tj4, "__esModule", {
    value: !0
  });
  Tj4.ProxyLogger = void 0;
  var EK9 = __$.o31();
  class Nj4 {
    constructor(A, K, q, Y) {
      this._provider = A, this.name = K, this.version = q, this.options = Y;
    }
    emit(A) {
      this._getLogger().emit(A);
    }
    _getLogger() {
      if (this._delegate) return this._delegate;
      let A = this._provider._getDelegateLogger(this.name, this.version, this.options);
      if (!A) return EK9.NOOP_LOGGER;
      return this._delegate = A, this._delegate;
    }
  }
  Tj4.ProxyLogger = Nj4;
});

// Register to shared state
__$.Ej4 = Ej4;
