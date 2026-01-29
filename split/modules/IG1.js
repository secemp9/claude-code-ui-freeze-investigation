// Module: IG1
// Dependencies: $s, SWA, hWA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IG1 = v(tN7 => {
  Object.defineProperty(tN7, "__esModule", {
    value: !0
  });
  tN7.CancellationTokenSource = tN7.CancellationToken = void 0;
  var EBY = __$.$s(),
    kBY = __$.SWA(),
    dV6 = __$.hWA(),
    yG1;
  (function (A) {
    A.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: dV6.Event.None
    }), A.Cancelled = Object.freeze({
      isCancellationRequested: !0,
      onCancellationRequested: dV6.Event.None
    });
    function K(q) {
      let Y = q;
      return Y && (Y === A.None || Y === A.Cancelled || kBY.boolean(Y.isCancellationRequested) && !!Y.onCancellationRequested);
    }
    A.is = K;
  })(yG1 || (tN7.CancellationToken = yG1 = {}));
  var CBY = Object.freeze(function (A, K) {
    let q = (0, EBY.default)().timer.setTimeout(A.bind(K), 0);
    return {
      dispose() {
        q.dispose();
      }
    };
  });
  class cV6 {
    constructor() {
      this._isCancelled = !1;
    }
    cancel() {
      if (!this._isCancelled) {
        if (this._isCancelled = !0, this._emitter) this._emitter.fire(void 0), this.dispose();
      }
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      if (this._isCancelled) return CBY;
      if (!this._emitter) this._emitter = new dV6.Emitter();
      return this._emitter.event;
    }
    dispose() {
      if (this._emitter) this._emitter.dispose(), this._emitter = void 0;
    }
  }
  class sN7 {
    get token() {
      if (!this._token) this._token = new cV6();
      return this._token;
    }
    cancel() {
      if (!this._token) this._token = yG1.Cancelled;else this._token.cancel();
    }
    dispose() {
      if (!this._token) this._token = yG1.None;else if (this._token instanceof cV6) this._token.dispose();
    }
  }
  tN7.CancellationTokenSource = sN7;
});

// Register to shared state
__$.IG1 = IG1;
