// Module: ox7
// Dependencies: RK, P9, vv6, GS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ox7 = v(nx7 => {
  Object.defineProperty(nx7, "__esModule", {
    value: !0
  });
  nx7.PeriodicExportingMetricReader = void 0;
  var Ev6 = __$.RK(),
    eW1 = __$.P9(),
    TA2 = __$.vv6(),
    lx7 = __$.GS();
  class ix7 extends TA2.MetricReader {
    _interval;
    _exporter;
    _exportInterval;
    _exportTimeout;
    constructor(A) {
      super({
        aggregationSelector: A.exporter.selectAggregation?.bind(A.exporter),
        aggregationTemporalitySelector: A.exporter.selectAggregationTemporality?.bind(A.exporter),
        metricProducers: A.metricProducers
      });
      if (A.exportIntervalMillis !== void 0 && A.exportIntervalMillis <= 0) throw Error("exportIntervalMillis must be greater than 0");
      if (A.exportTimeoutMillis !== void 0 && A.exportTimeoutMillis <= 0) throw Error("exportTimeoutMillis must be greater than 0");
      if (A.exportTimeoutMillis !== void 0 && A.exportIntervalMillis !== void 0 && A.exportIntervalMillis < A.exportTimeoutMillis) throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");
      this._exportInterval = A.exportIntervalMillis ?? 60000, this._exportTimeout = A.exportTimeoutMillis ?? 30000, this._exporter = A.exporter;
    }
    async _runOnce() {
      try {
        await (0, lx7.callWithTimeout)(this._doRun(), this._exportTimeout);
      } catch (A) {
        if (A instanceof lx7.TimeoutError) {
          Ev6.diag.error("Export took longer than %s milliseconds and timed out.", this._exportTimeout);
          return;
        }
        (0, eW1.globalErrorHandler)(A);
      }
    }
    async _doRun() {
      let {
        resourceMetrics: A,
        errors: K
      } = await this.collect({
        timeoutMillis: this._exportTimeout
      });
      if (K.length > 0) Ev6.diag.error("PeriodicExportingMetricReader: metrics collection errors", ...K);
      if (A.resource.asyncAttributesPending) try {
        await A.resource.waitForAsyncAttributes?.();
      } catch (Y) {
        Ev6.diag.debug("Error while resolving async portion of resource: ", Y), (0, eW1.globalErrorHandler)(Y);
      }
      if (A.scopeMetrics.length === 0) return;
      let q = await eW1.internal._export(this._exporter, A);
      if (q.code !== eW1.ExportResultCode.SUCCESS) throw Error(`PeriodicExportingMetricReader: metrics export failed (error ${q.error})`);
    }
    onInitialized() {
      if (this._interval = setInterval(() => {
        this._runOnce();
      }, this._exportInterval), typeof this._interval !== "number") this._interval.unref();
    }
    async onForceFlush() {
      await this._runOnce(), await this._exporter.forceFlush();
    }
    async onShutdown() {
      if (this._interval) clearInterval(this._interval);
      await this.onForceFlush(), await this._exporter.shutdown();
    }
  }
  nx7.PeriodicExportingMetricReader = ix7;
});

// Register to shared state
__$.ox7 = ox7;
