// Module: Ks7
// Dependencies: P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ks7 = v(ea7 => {
  Object.defineProperty(ea7, "__esModule", {
    value: !0
  });
  ea7.InMemorySpanExporter = void 0;
  var sa7 = __$.P9();
  class ta7 {
    _finishedSpans = [];
    _stopped = !1;
    export(A, K) {
      if (this._stopped) return K({
        code: sa7.ExportResultCode.FAILED,
        error: Error("Exporter has been stopped")
      });
      this._finishedSpans.push(...A), setTimeout(() => K({
        code: sa7.ExportResultCode.SUCCESS
      }), 0);
    }
    shutdown() {
      return this._stopped = !0, this._finishedSpans = [], this.forceFlush();
    }
    forceFlush() {
      return Promise.resolve();
    }
    reset() {
      this._finishedSpans = [];
    }
    getFinishedSpans() {
      return this._finishedSpans;
    }
  }
  ea7.InMemorySpanExporter = ta7;
});

// Register to shared state
__$.Ks7 = Ks7;
