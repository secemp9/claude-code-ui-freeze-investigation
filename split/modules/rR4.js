// Module: rR4
// Dependencies: P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rR4 = v(iR4 => {
  Object.defineProperty(iR4, "__esModule", {
    value: !0
  });
  iR4.SimpleLogRecordProcessor = void 0;
  var K$A = __$.P9();
  class lR4 {
    _exporter;
    _shutdownOnce;
    _unresolvedExports;
    constructor(A) {
      this._exporter = A, this._shutdownOnce = new K$A.BindOnceFuture(this._shutdown, this), this._unresolvedExports = new Set();
    }
    onEmit(A) {
      if (this._shutdownOnce.isCalled) return;
      let K = () => K$A.internal._export(this._exporter, [A]).then(q => {
        if (q.code !== K$A.ExportResultCode.SUCCESS) (0, K$A.globalErrorHandler)(q.error ?? Error(`SimpleLogRecordProcessor: log record export failed (status ${q})`));
      }).catch(K$A.globalErrorHandler);
      if (A.resource.asyncAttributesPending) {
        let q = A.resource.waitForAsyncAttributes?.().then(() => {
          return this._unresolvedExports.delete(q), K();
        }, K$A.globalErrorHandler);
        if (q != null) this._unresolvedExports.add(q);
      } else K();
    }
    async forceFlush() {
      await Promise.all(Array.from(this._unresolvedExports));
    }
    shutdown() {
      return this._shutdownOnce.call();
    }
    _shutdown() {
      return this._exporter.shutdown();
    }
  }
  iR4.SimpleLogRecordProcessor = lR4;
});

// Register to shared state
__$.rR4 = rR4;
