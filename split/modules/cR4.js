// Module: cR4
// Dependencies: P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cR4 = v(pR4 => {
  Object.defineProperty(pR4, "__esModule", {
    value: !0
  });
  pR4.ConsoleLogRecordExporter = void 0;
  var QR4 = __$.P9();
  class UR4 {
    export(A, K) {
      this._sendLogRecords(A, K);
    }
    shutdown() {
      return Promise.resolve();
    }
    _exportInfo(A) {
      return {
        resource: {
          attributes: A.resource.attributes
        },
        instrumentationScope: A.instrumentationScope,
        timestamp: (0, QR4.hrTimeToMicroseconds)(A.hrTime),
        traceId: A.spanContext?.traceId,
        spanId: A.spanContext?.spanId,
        traceFlags: A.spanContext?.traceFlags,
        severityText: A.severityText,
        severityNumber: A.severityNumber,
        body: A.body,
        attributes: A.attributes
      };
    }
    _sendLogRecords(A, K) {
      for (let q of A) console.dir(this._exportInfo(q), {
        depth: 3
      });
      K?.({
        code: QR4.ExportResultCode.SUCCESS
      });
    }
  }
  pR4.ConsoleLogRecordExporter = UR4;
});

// Register to shared state
__$.cR4 = cR4;
