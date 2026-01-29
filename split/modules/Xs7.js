// Module: Xs7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xs7 = v(Js7 => {
  Object.defineProperty(Js7, "__esModule", {
    value: !0
  });
  Js7.NoopSpanProcessor = void 0;
  class Hs7 {
    onStart(A, K) {}
    onEnd(A) {}
    shutdown() {
      return Promise.resolve();
    }
    forceFlush() {
      return Promise.resolve();
    }
  }
  Js7.NoopSpanProcessor = Hs7;
});

// Register to shared state
__$.Xs7 = Xs7;
