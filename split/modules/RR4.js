// Module: RR4
// Dependencies: P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RR4 = v(CR4 => {
  Object.defineProperty(CR4, "__esModule", {
    value: !0
  });
  CR4.MultiLogRecordProcessor = void 0;
  var o_9 = __$.P9();
  class kR4 {
    processors;
    forceFlushTimeoutMillis;
    constructor(A, K) {
      this.processors = A, this.forceFlushTimeoutMillis = K;
    }
    async forceFlush() {
      let A = this.forceFlushTimeoutMillis;
      await Promise.all(this.processors.map(K => (0, o_9.callWithTimeout)(K.forceFlush(), A)));
    }
    onEmit(A, K) {
      this.processors.forEach(q => q.onEmit(A, K));
    }
    async shutdown() {
      await Promise.all(this.processors.map(A => A.shutdown()));
    }
  }
  CR4.MultiLogRecordProcessor = kR4;
});

// Register to shared state
__$.RR4 = RR4;
