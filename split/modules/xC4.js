// Module: xC4
// Dependencies: IC4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xC4 = v(hC4 => {
  Object.defineProperty(hC4, "__esModule", {
    value: !0
  });
  hC4.BindOnceFuture = void 0;
  var UX9 = __$.IC4();
  class SC4 {
    _callback;
    _that;
    _isCalled = !1;
    _deferred = new UX9.Deferred();
    constructor(A, K) {
      this._callback = A, this._that = K;
    }
    get isCalled() {
      return this._isCalled;
    }
    get promise() {
      return this._deferred.promise;
    }
    call(...A) {
      if (!this._isCalled) {
        this._isCalled = !0;
        try {
          Promise.resolve(this._callback.call(this._that, ...A)).then(K => this._deferred.resolve(K), K => this._deferred.reject(K));
        } catch (K) {
          this._deferred.reject(K);
        }
      }
      return this._deferred.promise;
    }
  }
  hC4.BindOnceFuture = SC4;
});

// Register to shared state
__$.xC4 = xC4;
