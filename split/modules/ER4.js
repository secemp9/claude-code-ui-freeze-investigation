// Module: ER4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ER4 = v(TR4 => {
  Object.defineProperty(TR4, "__esModule", {
    value: !0
  });
  TR4.NoopLogRecordProcessor = void 0;
  class NR4 {
    forceFlush() {
      return Promise.resolve();
    }
    onEmit(A, K) {}
    shutdown() {
      return Promise.resolve();
    }
  }
  TR4.NoopLogRecordProcessor = NR4;
});

// Register to shared state
__$.ER4 = ER4;
