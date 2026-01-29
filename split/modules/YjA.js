// Module: YjA
// Dependencies: K9, Lw

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YjA = v(BU7 => {
  Object.defineProperty(BU7, "__esModule", {
    value: !0
  });
  BU7.BackoffTimeout = void 0;
  var Cq2 = __$.K9(),
    Lq2 = __$.Lw(),
    Rq2 = "backoff",
    yq2 = 1000,
    Iq2 = 1.6,
    Sq2 = 120000,
    hq2 = 0.2;
  function bq2(A, K) {
    return Math.random() * (K - A) + A;
  }
  class hD1 {
    constructor(A, K) {
      if (this.callback = A, this.initialDelay = yq2, this.multiplier = Iq2, this.maxDelay = Sq2, this.jitter = hq2, this.running = !1, this.hasRef = !0, this.startTime = new Date(), this.endTime = new Date(), this.id = hD1.getNextId(), K) {
        if (K.initialDelay) this.initialDelay = K.initialDelay;
        if (K.multiplier) this.multiplier = K.multiplier;
        if (K.jitter) this.jitter = K.jitter;
        if (K.maxDelay) this.maxDelay = K.maxDelay;
      }
      this.trace("constructed initialDelay=" + this.initialDelay + " multiplier=" + this.multiplier + " jitter=" + this.jitter + " maxDelay=" + this.maxDelay), this.nextDelay = this.initialDelay, this.timerId = setTimeout(() => {}, 0), clearTimeout(this.timerId);
    }
    static getNextId() {
      return this.nextId++;
    }
    trace(A) {
      Lq2.trace(Cq2.LogVerbosity.DEBUG, Rq2, "{" + this.id + "} " + A);
    }
    runTimer(A) {
      var K, q;
      if (this.trace("runTimer(delay=" + A + ")"), this.endTime = this.startTime, this.endTime.setMilliseconds(this.endTime.getMilliseconds() + A), clearTimeout(this.timerId), this.timerId = setTimeout(() => {
        this.trace("timer fired"), this.running = !1, this.callback();
      }, A), !this.hasRef) (q = (K = this.timerId).unref) === null || q === void 0 || q.call(K);
    }
    runOnce() {
      this.trace("runOnce()"), this.running = !0, this.startTime = new Date(), this.runTimer(this.nextDelay);
      let A = Math.min(this.nextDelay * this.multiplier, this.maxDelay),
        K = A * this.jitter;
      this.nextDelay = A + bq2(-K, K);
    }
    stop() {
      this.trace("stop()"), clearTimeout(this.timerId), this.running = !1;
    }
    reset() {
      if (this.trace("reset() running=" + this.running), this.nextDelay = this.initialDelay, this.running) {
        let A = new Date(),
          K = this.startTime;
        if (K.setMilliseconds(K.getMilliseconds() + this.nextDelay), clearTimeout(this.timerId), A < K) this.runTimer(K.getTime() - A.getTime());else this.running = !1;
      }
    }
    isRunning() {
      return this.running;
    }
    ref() {
      var A, K;
      this.hasRef = !0, (K = (A = this.timerId).ref) === null || K === void 0 || K.call(A);
    }
    unref() {
      var A, K;
      this.hasRef = !1, (K = (A = this.timerId).unref) === null || K === void 0 || K.call(A);
    }
    getEndTime() {
      return this.endTime;
    }
  }
  BU7.BackoffTimeout = hD1;
  hD1.nextId = 0;
});

// Register to shared state
__$.YjA = YjA;
