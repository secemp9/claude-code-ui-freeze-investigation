// Module: p8K
// Dependencies: sjA, fy6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var p8K = v(Q8K => {
  Object.defineProperty(Q8K, "__esModule", {
    value: !0
  });
  Q8K.abortSignalAfterTimeout = Q8K.AbortSignal = void 0;
  var IW2 = __$.sjA(),
    SW2 = __$.fy6();
  class Ny6 {
    constructor() {
      this.onabort = null, this.aborted = !1, this.eventEmitter = new IW2.Emitter();
    }
    toString() {
      return "[object AbortSignal]";
    }
    get [Symbol.toStringTag]() {
      return "AbortSignal";
    }
    removeEventListener(...A) {
      this.eventEmitter.off(...A);
    }
    addEventListener(...A) {
      this.eventEmitter.on(...A);
    }
    dispatchEvent(A) {
      let K = {
          type: A,
          target: this
        },
        q = `on${A}`;
      if (typeof this[q] === "function") this[q](K);
      this.eventEmitter.emit(A, K);
    }
  }
  Q8K.AbortSignal = Ny6;
  class F8K {
    constructor() {
      this.signal = new Ny6();
    }
    abort() {
      if (this.signal.aborted) return;
      this.signal.aborted = !0, this.signal.dispatchEvent("abort");
    }
    toString() {
      return "[object AbortController]";
    }
    get [Symbol.toStringTag]() {
      return "AbortController";
    }
  }
  var hW2 = A => {
    if ((0, SW2.detectRuntime)() === "cloudflare-worker") return [];
    let K = new (globalThis.AbortController || F8K)(),
      q = setTimeout(() => {
        K.abort();
      }, A);
    return q?.unref?.(), [K.signal, q];
  };
  Q8K.abortSignalAfterTimeout = hW2;
});

// Register to shared state
__$.p8K = p8K;
