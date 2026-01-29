// Module: ws7
// Dependencies: RK, P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ws7 = v(Ys7 => {
  Object.defineProperty(Ys7, "__esModule", {
    value: !0
  });
  Ys7.SimpleSpanProcessor = void 0;
  var EX2 = __$.RK(),
    HM1 = __$.P9();
  class qs7 {
    _exporter;
    _shutdownOnce;
    _pendingExports;
    constructor(A) {
      this._exporter = A, this._shutdownOnce = new HM1.BindOnceFuture(this._shutdown, this), this._pendingExports = new Set();
    }
    async forceFlush() {
      if (await Promise.all(Array.from(this._pendingExports)), this._exporter.forceFlush) await this._exporter.forceFlush();
    }
    onStart(A, K) {}
    onEnd(A) {
      if (this._shutdownOnce.isCalled) return;
      if ((A.spanContext().traceFlags & EX2.TraceFlags.SAMPLED) === 0) return;
      let K = this._doExport(A).catch(q => (0, HM1.globalErrorHandler)(q));
      this._pendingExports.add(K), K.finally(() => this._pendingExports.delete(K));
    }
    async _doExport(A) {
      if (A.resource.asyncAttributesPending) await A.resource.waitForAsyncAttributes?.();
      let K = await HM1.internal._export(this._exporter, [A]);
      if (K.code !== HM1.ExportResultCode.SUCCESS) throw K.error ?? Error(`SimpleSpanProcessor: span export failed (status ${K})`);
    }
    shutdown() {
      return this._shutdownOnce.call();
    }
    _shutdown() {
      return this._exporter.shutdown();
    }
  }
  Ys7.SimpleSpanProcessor = qs7;
});

// Register to shared state
__$.ws7 = ws7;
