// Module: Na7
// Dependencies: RK, P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Na7 = v(Va7 => {
  Object.defineProperty(Va7, "__esModule", {
    value: !0
  });
  Va7.BatchSpanProcessorBase = void 0;
  var SjA = __$.RK(),
    Xd = __$.P9();
  class Pa7 {
    _exporter;
    _maxExportBatchSize;
    _maxQueueSize;
    _scheduledDelayMillis;
    _exportTimeoutMillis;
    _isExporting = !1;
    _finishedSpans = [];
    _timer;
    _shutdownOnce;
    _droppedSpansCount = 0;
    constructor(A, K) {
      if (this._exporter = A, this._maxExportBatchSize = typeof K?.maxExportBatchSize === "number" ? K.maxExportBatchSize : (0, Xd.getNumberFromEnv)("OTEL_BSP_MAX_EXPORT_BATCH_SIZE") ?? 512, this._maxQueueSize = typeof K?.maxQueueSize === "number" ? K.maxQueueSize : (0, Xd.getNumberFromEnv)("OTEL_BSP_MAX_QUEUE_SIZE") ?? 2048, this._scheduledDelayMillis = typeof K?.scheduledDelayMillis === "number" ? K.scheduledDelayMillis : (0, Xd.getNumberFromEnv)("OTEL_BSP_SCHEDULE_DELAY") ?? 5000, this._exportTimeoutMillis = typeof K?.exportTimeoutMillis === "number" ? K.exportTimeoutMillis : (0, Xd.getNumberFromEnv)("OTEL_BSP_EXPORT_TIMEOUT") ?? 30000, this._shutdownOnce = new Xd.BindOnceFuture(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize) SjA.diag.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize;
    }
    forceFlush() {
      if (this._shutdownOnce.isCalled) return this._shutdownOnce.promise;
      return this._flushAll();
    }
    onStart(A, K) {}
    onEnd(A) {
      if (this._shutdownOnce.isCalled) return;
      if ((A.spanContext().traceFlags & SjA.TraceFlags.SAMPLED) === 0) return;
      this._addToBuffer(A);
    }
    shutdown() {
      return this._shutdownOnce.call();
    }
    _shutdown() {
      return Promise.resolve().then(() => {
        return this.onShutdown();
      }).then(() => {
        return this._flushAll();
      }).then(() => {
        return this._exporter.shutdown();
      });
    }
    _addToBuffer(A) {
      if (this._finishedSpans.length >= this._maxQueueSize) {
        if (this._droppedSpansCount === 0) SjA.diag.debug("maxQueueSize reached, dropping spans");
        this._droppedSpansCount++;
        return;
      }
      if (this._droppedSpansCount > 0) SjA.diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`), this._droppedSpansCount = 0;
      this._finishedSpans.push(A), this._maybeStartTimer();
    }
    _flushAll() {
      return new Promise((A, K) => {
        let q = [],
          Y = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
        for (let z = 0, w = Y; z < w; z++) q.push(this._flushOneBatch());
        Promise.all(q).then(() => {
          A();
        }).catch(K);
      });
    }
    _flushOneBatch() {
      if (this._clearTimer(), this._finishedSpans.length === 0) return Promise.resolve();
      return new Promise((A, K) => {
        let q = setTimeout(() => {
          K(Error("Timeout"));
        }, this._exportTimeoutMillis);
        SjA.context.with((0, Xd.suppressTracing)(SjA.context.active()), () => {
          let Y;
          if (this._finishedSpans.length <= this._maxExportBatchSize) Y = this._finishedSpans, this._finishedSpans = [];else Y = this._finishedSpans.splice(0, this._maxExportBatchSize);
          let z = () => this._exporter.export(Y, H => {
              if (clearTimeout(q), H.code === Xd.ExportResultCode.SUCCESS) A();else K(H.error ?? Error("BatchSpanProcessor: span export failed"));
            }),
            w = null;
          for (let H = 0, J = Y.length; H < J; H++) {
            let O = Y[H];
            if (O.resource.asyncAttributesPending && O.resource.waitForAsyncAttributes) w ??= [], w.push(O.resource.waitForAsyncAttributes());
          }
          if (w === null) z();else Promise.all(w).then(z, H => {
            (0, Xd.globalErrorHandler)(H), K(H);
          });
        });
      });
    }
    _maybeStartTimer() {
      if (this._isExporting) return;
      let A = () => {
        this._isExporting = !0, this._flushOneBatch().finally(() => {
          if (this._isExporting = !1, this._finishedSpans.length > 0) this._clearTimer(), this._maybeStartTimer();
        }).catch(K => {
          this._isExporting = !1, (0, Xd.globalErrorHandler)(K);
        });
      };
      if (this._finishedSpans.length >= this._maxExportBatchSize) return A();
      if (this._timer !== void 0) return;
      if (this._timer = setTimeout(() => A(), this._scheduledDelayMillis), typeof this._timer !== "number") this._timer.unref();
    }
    _clearTimer() {
      if (this._timer !== void 0) clearTimeout(this._timer), this._timer = void 0;
    }
  }
  Va7.BatchSpanProcessorBase = Pa7;
});

// Register to shared state
__$.Na7 = Na7;
