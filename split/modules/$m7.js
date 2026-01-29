// Module: $m7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $m7 = v(Om7 => {
  Object.defineProperty(Om7, "__esModule", {
    value: !0
  });
  Om7.OTLPExporterBase = void 0;
  class Jm7 {
    _delegate;
    constructor(A) {
      this._delegate = A;
    }
    export(A, K) {
      this._delegate.export(A, K);
    }
    forceFlush() {
      return this._delegate.forceFlush();
    }
    shutdown() {
      return this._delegate.shutdown();
    }
  }
  Om7.OTLPExporterBase = Jm7;
});

// Register to shared state
__$.$m7 = $m7;
