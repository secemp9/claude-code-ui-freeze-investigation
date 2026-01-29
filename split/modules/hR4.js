// Module: hR4
// Dependencies: ER4, RR4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hR4 = v(IR4 => {
  Object.defineProperty(IR4, "__esModule", {
    value: !0
  });
  IR4.LoggerProviderSharedState = void 0;
  var a_9 = __$.ER4(),
    s_9 = __$.RR4();
  class yR4 {
    resource;
    forceFlushTimeoutMillis;
    logRecordLimits;
    processors;
    loggers = new Map();
    activeProcessor;
    registeredLogRecordProcessors = [];
    constructor(A, K, q, Y) {
      if (this.resource = A, this.forceFlushTimeoutMillis = K, this.logRecordLimits = q, this.processors = Y, Y.length > 0) this.registeredLogRecordProcessors = Y, this.activeProcessor = new s_9.MultiLogRecordProcessor(this.registeredLogRecordProcessors, this.forceFlushTimeoutMillis);else this.activeProcessor = new a_9.NoopLogRecordProcessor();
    }
  }
  IR4.LoggerProviderSharedState = yR4;
});

// Register to shared state
__$.hR4 = hR4;
