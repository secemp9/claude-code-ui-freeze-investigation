// Module: hB1
// Dependencies: H8, xE

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hB1 = v(vP8 => {
  Object.defineProperty(vP8, "__esModule", {
    value: !0
  });
  var dFq = __$.H8(),
    cFq = __$.xE();
  class TP8 {
    constructor(A, K) {
      if (this._client = A, this.flushTimeout = 60, this._pendingAggregates = {}, this._isEnabled = !0, this._intervalId = setInterval(() => this.flush(), this.flushTimeout * 1000), this._intervalId.unref) this._intervalId.unref();
      this._sessionAttrs = K;
    }
    flush() {
      let A = this.getSessionAggregates();
      if (A.aggregates.length === 0) return;
      this._pendingAggregates = {}, this._client.sendSession(A);
    }
    getSessionAggregates() {
      let A = Object.keys(this._pendingAggregates).map(q => {
          return this._pendingAggregates[parseInt(q)];
        }),
        K = {
          attrs: this._sessionAttrs,
          aggregates: A
        };
      return dFq.dropUndefinedKeys(K);
    }
    close() {
      clearInterval(this._intervalId), this._isEnabled = !1, this.flush();
    }
    incrementSessionStatusCount() {
      if (!this._isEnabled) return;
      let A = cFq.getCurrentScope(),
        K = A.getRequestSession();
      if (K && K.status) this._incrementSessionStatusCount(K.status, new Date()), A.setRequestSession(void 0);
    }
    _incrementSessionStatusCount(A, K) {
      let q = new Date(K).setSeconds(0, 0);
      this._pendingAggregates[q] = this._pendingAggregates[q] || {};
      let Y = this._pendingAggregates[q];
      if (!Y.started) Y.started = new Date(q).toISOString();
      switch (A) {
        case "errored":
          return Y.errored = (Y.errored || 0) + 1, Y.errored;
        case "ok":
          return Y.exited = (Y.exited || 0) + 1, Y.exited;
        default:
          return Y.crashed = (Y.crashed || 0) + 1, Y.crashed;
      }
    }
  }
  vP8.SessionFlusher = TP8;
});

// Register to shared state
__$.hB1 = hB1;
