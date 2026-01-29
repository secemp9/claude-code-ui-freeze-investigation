// Module: P56
// Dependencies: M56, tW4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var P56 = v(AD4 => {
  Object.defineProperty(AD4, "__esModule", {
    value: !0
  });
  AD4.ProxyTracerProvider = void 0;
  var E79 = __$.M56(),
    k79 = __$.tW4(),
    C79 = new k79.NoopTracerProvider();
  class eW4 {
    getTracer(A, K, q) {
      var Y;
      return (Y = this.getDelegateTracer(A, K, q)) !== null && Y !== void 0 ? Y : new E79.ProxyTracer(this, A, K, q);
    }
    getDelegate() {
      var A;
      return (A = this._delegate) !== null && A !== void 0 ? A : C79;
    }
    setDelegate(A) {
      this._delegate = A;
    }
    getDelegateTracer(A, K, q) {
      var Y;
      return (Y = this._delegate) === null || Y === void 0 ? void 0 : Y.getTracer(A, K, q);
    }
  }
  AD4.ProxyTracerProvider = eW4;
});

// Register to shared state
__$.P56 = P56;
