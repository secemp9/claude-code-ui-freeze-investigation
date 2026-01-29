// Module: M56
// Dependencies: j56

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var M56 = v(nW4 => {
  Object.defineProperty(nW4, "__esModule", {
    value: !0
  });
  nW4.ProxyTracer = void 0;
  var N79 = __$.j56(),
    T79 = new N79.NoopTracer();
  class iW4 {
    constructor(A, K, q, Y) {
      this._provider = A, this.name = K, this.version = q, this.options = Y;
    }
    startSpan(A, K, q) {
      return this._getTracer().startSpan(A, K, q);
    }
    startActiveSpan(A, K, q, Y) {
      let z = this._getTracer();
      return Reflect.apply(z.startActiveSpan, z, arguments);
    }
    _getTracer() {
      if (this._delegate) return this._delegate;
      let A = this._provider.getDelegateTracer(this.name, this.version, this.options);
      if (!A) return T79;
      return this._delegate = A, this._delegate;
    }
  }
  nW4.ProxyTracer = iW4;
});

// Register to shared state
__$.M56 = M56;
