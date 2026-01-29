// Module: bMA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bMA = v((NtH, A3K) => {
  A3K.exports = s3A;
  s3A.CAPTURING_PHASE = 1;
  s3A.AT_TARGET = 2;
  s3A.BUBBLING_PHASE = 3;
  function s3A(A, K) {
    if (this.type = "", this.target = null, this.currentTarget = null, this.eventPhase = s3A.AT_TARGET, this.bubbles = !1, this.cancelable = !1, this.isTrusted = !1, this.defaultPrevented = !1, this.timeStamp = Date.now(), this._propagationStopped = !1, this._immediatePropagationStopped = !1, this._initialized = !0, this._dispatching = !1, A) this.type = A;
    if (K) for (var q in K) this[q] = K[q];
  }
  s3A.prototype = Object.create(Object.prototype, {
    constructor: {
      value: s3A
    },
    stopPropagation: {
      value: function () {
        this._propagationStopped = !0;
      }
    },
    stopImmediatePropagation: {
      value: function () {
        this._propagationStopped = !0, this._immediatePropagationStopped = !0;
      }
    },
    preventDefault: {
      value: function () {
        if (this.cancelable) this.defaultPrevented = !0;
      }
    },
    initEvent: {
      value: function (K, q, Y) {
        if (this._initialized = !0, this._dispatching) return;
        this._propagationStopped = !1, this._immediatePropagationStopped = !1, this.defaultPrevented = !1, this.isTrusted = !1, this.target = null, this.type = K, this.bubbles = q, this.cancelable = Y;
      }
    }
  });
});

// Register to shared state
__$.bMA = bMA;
