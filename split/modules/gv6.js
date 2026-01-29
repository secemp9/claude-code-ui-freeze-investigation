// Module: gv6
// Dependencies: P9, wD1, Em7, RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gv6 = v(Lm7 => {
  Object.defineProperty(Lm7, "__esModule", {
    value: !0
  });
  Lm7.createOtlpExportDelegate = void 0;
  var d5A = __$.P9(),
    km7 = __$.wD1(),
    W62 = __$.Em7(),
    D62 = __$.RK();
  class Cm7 {
    _transport;
    _serializer;
    _responseHandler;
    _promiseQueue;
    _timeout;
    _diagLogger;
    constructor(A, K, q, Y, z) {
      this._transport = A, this._serializer = K, this._responseHandler = q, this._promiseQueue = Y, this._timeout = z, this._diagLogger = D62.diag.createComponentLogger({
        namespace: "OTLPExportDelegate"
      });
    }
    export(A, K) {
      if (this._diagLogger.debug("items to be sent", A), this._promiseQueue.hasReachedLimit()) {
        K({
          code: d5A.ExportResultCode.FAILED,
          error: Error("Concurrent export limit reached")
        });
        return;
      }
      let q = this._serializer.serializeRequest(A);
      if (q == null) {
        K({
          code: d5A.ExportResultCode.FAILED,
          error: Error("Nothing to send")
        });
        return;
      }
      this._promiseQueue.pushPromise(this._transport.send(q, this._timeout).then(Y => {
        if (Y.status === "success") {
          if (Y.data != null) try {
            this._responseHandler.handleResponse(this._serializer.deserializeResponse(Y.data));
          } catch (z) {
            this._diagLogger.warn("Export succeeded but could not deserialize response - is the response specification compliant?", z, Y.data);
          }
          K({
            code: d5A.ExportResultCode.SUCCESS
          });
          return;
        } else if (Y.status === "failure" && Y.error) {
          K({
            code: d5A.ExportResultCode.FAILED,
            error: Y.error
          });
          return;
        } else if (Y.status === "retryable") K({
          code: d5A.ExportResultCode.FAILED,
          error: new km7.OTLPExporterError("Export failed with retryable status")
        });else K({
          code: d5A.ExportResultCode.FAILED,
          error: new km7.OTLPExporterError("Export failed with unknown error")
        });
      }, Y => K({
        code: d5A.ExportResultCode.FAILED,
        error: Y
      })));
    }
    forceFlush() {
      return this._promiseQueue.awaitAll();
    }
    async shutdown() {
      this._diagLogger.debug("shutdown started"), await this.forceFlush(), this._transport.shutdown();
    }
  }
  function j62(A, K) {
    return new Cm7(A.transport, A.serializer, (0, W62.createLoggingPartialSuccessResponseHandler)(), A.promiseHandler, K.timeout);
  }
  Lm7.createOtlpExportDelegate = j62;
});

// Register to shared state
__$.gv6 = gv6;
