// Module: aa7
// Dependencies: P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aa7 = v(ra7 => {
  Object.defineProperty(ra7, "__esModule", {
    value: !0
  });
  ra7.ConsoleSpanExporter = void 0;
  var yL6 = __$.P9();
  class na7 {
    export(A, K) {
      return this._sendSpans(A, K);
    }
    shutdown() {
      return this._sendSpans([]), this.forceFlush();
    }
    forceFlush() {
      return Promise.resolve();
    }
    _exportInfo(A) {
      return {
        resource: {
          attributes: A.resource.attributes
        },
        instrumentationScope: A.instrumentationScope,
        traceId: A.spanContext().traceId,
        parentSpanContext: A.parentSpanContext,
        traceState: A.spanContext().traceState?.serialize(),
        name: A.name,
        id: A.spanContext().spanId,
        kind: A.kind,
        timestamp: (0, yL6.hrTimeToMicroseconds)(A.startTime),
        duration: (0, yL6.hrTimeToMicroseconds)(A.duration),
        attributes: A.attributes,
        status: A.status,
        events: A.events,
        links: A.links
      };
    }
    _sendSpans(A, K) {
      for (let q of A) console.dir(this._exportInfo(q), {
        depth: 3
      });
      if (K) return K({
        code: yL6.ExportResultCode.SUCCESS
      });
    }
  }
  ra7.ConsoleSpanExporter = na7;
});

// Register to shared state
__$.aa7 = aa7;
