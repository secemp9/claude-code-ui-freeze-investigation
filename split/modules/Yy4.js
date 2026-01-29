// Module: Yy4
// Dependencies: RK, P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Yy4 = v(Ky4 => {
  Object.defineProperty(Ky4, "__esModule", {
    value: !0
  });
  Ky4.BatchLogRecordProcessorBase = void 0;
  var qG9 = __$.RK(),
    rk = __$.P9();
  class Ay4 {
    _exporter;
    _maxExportBatchSize;
    _maxQueueSize;
    _scheduledDelayMillis;
    _exportTimeoutMillis;
    _isExporting = !1;
    _finishedLogRecords = [];
    _timer;
    _shutdownOnce;
    constructor(A, K) {
      if (this._exporter = A, this._maxExportBatchSize = K?.maxExportBatchSize ?? (0, rk.getNumberFromEnv)("OTEL_BLRP_MAX_EXPORT_BATCH_SIZE") ?? 512, this._maxQueueSize = K?.maxQueueSize ?? (0, rk.getNumberFromEnv)("OTEL_BLRP_MAX_QUEUE_SIZE") ?? 2048, this._scheduledDelayMillis = K?.scheduledDelayMillis ?? (0, rk.getNumberFromEnv)("OTEL_BLRP_SCHEDULE_DELAY") ?? 5000, this._exportTimeoutMillis = K?.exportTimeoutMillis ?? (0, rk.getNumberFromEnv)("OTEL_BLRP_EXPORT_TIMEOUT") ?? 30000, this._shutdownOnce = new rk.BindOnceFuture(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize) qG9.diag.warn("BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize;
    }
    onEmit(A) {
      if (this._shutdownOnce.isCalled) return;
      this._addToBuffer(A);
    }
    forceFlush() {
      if (this._shutdownOnce.isCalled) return this._shutdownOnce.promise;
      return this._flushAll();
    }
    shutdown() {
      return this._shutdownOnce.call();
    }
    async _shutdown() {
      this.onShutdown(), await this._flushAll(), await this._exporter.shutdown();
    }
    _addToBuffer(A) {
      if (this._finishedLogRecords.length >= this._maxQueueSize) return;
      this._finishedLogRecords.push(A), this._maybeStartTimer();
    }
    _flushAll() {
      return new Promise((A, K) => {
        let q = [],
          Y = Math.ceil(this._finishedLogRecords.length / this._maxExportBatchSize);
        for (let z = 0; z < Y; z++) q.push(this._flushOneBatch());
        Promise.all(q).then(() => {
          A();
        }).catch(K);
      });
    }
    _flushOneBatch() {
      if (this._clearTimer(), this._finishedLogRecords.length === 0) return Promise.resolve();
      return new Promise((A, K) => {
        (0, rk.callWithTimeout)(this._export(this._finishedLogRecords.splice(0, this._maxExportBatchSize)), this._exportTimeoutMillis).then(() => A()).catch(K);
      });
    }
    _maybeStartTimer() {
      if (this._isExporting) return;
      let A = () => {
        this._isExporting = !0, this._flushOneBatch().then(() => {
          if (this._isExporting = !1, this._finishedLogRecords.length > 0) this._clearTimer(), this._maybeStartTimer();
        }).catch(K => {
          this._isExporting = !1, (0, rk.globalErrorHandler)(K);
        });
      };
      if (this._finishedLogRecords.length >= this._maxExportBatchSize) return A();
      if (this._timer !== void 0) return;
      if (this._timer = setTimeout(() => A(), this._scheduledDelayMillis), typeof this._timer !== "number") this._timer.unref();
    }
    _clearTimer() {
      if (this._timer !== void 0) clearTimeout(this._timer), this._timer = void 0;
    }
    _export(A) {
      let K = () => rk.internal._export(this._exporter, A).then(Y => {
          if (Y.code !== rk.ExportResultCode.SUCCESS) (0, rk.globalErrorHandler)(Y.error ?? Error(`BatchLogRecordProcessor: log record export failed (status ${Y})`));
        }).catch(rk.globalErrorHandler),
        q = A.map(Y => Y.resource).filter(Y => Y.asyncAttributesPending);
      if (q.length === 0) return K();else return Promise.all(q.map(Y => Y.waitForAsyncAttributes?.())).then(K, rk.globalErrorHandler);
    }
  }
  Ky4.BatchLogRecordProcessorBase = Ay4;
});

// Register to shared state
__$.Yy4 = Yy4;
