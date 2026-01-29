// Module: U56
// Dependencies: Q56, Ej4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var U56 = v(Cj4 => {
  Object.defineProperty(Cj4, "__esModule", {
    value: !0
  });
  Cj4.ProxyLoggerProvider = void 0;
  var kK9 = __$.Q56(),
    CK9 = __$.Ej4();
  class kj4 {
    getLogger(A, K, q) {
      var Y;
      return (Y = this._getDelegateLogger(A, K, q)) !== null && Y !== void 0 ? Y : new CK9.ProxyLogger(this, A, K, q);
    }
    _getDelegate() {
      var A;
      return (A = this._delegate) !== null && A !== void 0 ? A : kK9.NOOP_LOGGER_PROVIDER;
    }
    _setDelegate(A) {
      this._delegate = A;
    }
    _getDelegateLogger(A, K, q) {
      var Y;
      return (Y = this._delegate) === null || Y === void 0 ? void 0 : Y.getLogger(A, K, q);
    }
  }
  Cj4.ProxyLoggerProvider = kj4;
});

// Register to shared state
__$.U56 = U56;
