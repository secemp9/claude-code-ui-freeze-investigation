// Module: tp
// Dependencies: UG, K9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tp = v(xU7 => {
  Object.defineProperty(xU7, "__esModule", {
    value: !0
  });
  xU7.QueuePicker = xU7.UnavailablePicker = xU7.PickResultType = void 0;
  var Tq2 = __$.UG(),
    vq2 = __$.K9(),
    SD1;
  (function (A) {
    A[A.COMPLETE = 0] = "COMPLETE", A[A.QUEUE = 1] = "QUEUE", A[A.TRANSIENT_FAILURE = 2] = "TRANSIENT_FAILURE", A[A.DROP = 3] = "DROP";
  })(SD1 || (xU7.PickResultType = SD1 = {}));
  class hU7 {
    constructor(A) {
      this.status = Object.assign({
        code: vq2.Status.UNAVAILABLE,
        details: "No connection established",
        metadata: new Tq2.Metadata()
      }, A);
    }
    pick(A) {
      return {
        pickResultType: SD1.TRANSIENT_FAILURE,
        subchannel: null,
        status: this.status,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  xU7.UnavailablePicker = hU7;
  class bU7 {
    constructor(A, K) {
      this.loadBalancer = A, this.childPicker = K, this.calledExitIdle = !1;
    }
    pick(A) {
      if (!this.calledExitIdle) process.nextTick(() => {
        this.loadBalancer.exitIdle();
      }), this.calledExitIdle = !0;
      if (this.childPicker) return this.childPicker.pick(A);else return {
        pickResultType: SD1.QUEUE,
        subchannel: null,
        status: null,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  xU7.QueuePicker = bU7;
});

// Register to shared state
__$.tp = tp;
