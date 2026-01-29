// Module: eR4
// Dependencies: P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eR4 = v(sR4 => {
  Object.defineProperty(sR4, "__esModule", {
    value: !0
  });
  sR4.InMemoryLogRecordExporter = void 0;
  var oR4 = __$.P9();
  class aR4 {
    _finishedLogRecords = [];
    _stopped = !1;
    export(A, K) {
      if (this._stopped) return K({
        code: oR4.ExportResultCode.FAILED,
        error: Error("Exporter has been stopped")
      });
      this._finishedLogRecords.push(...A), K({
        code: oR4.ExportResultCode.SUCCESS
      });
    }
    shutdown() {
      return this._stopped = !0, this.reset(), Promise.resolve();
    }
    getFinishedLogRecords() {
      return this._finishedLogRecords;
    }
    reset() {
      this._finishedLogRecords = [];
    }
  }
  sR4.InMemoryLogRecordExporter = aR4;
});

// Register to shared state
__$.eR4 = eR4;
