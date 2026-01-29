// Module: dT6
// Dependencies: jgA, CDA, Xj, MgA, I5A, uT6, rp, gT6, vW1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dT6 = v(IDA => {
  var RDA = IDA && IDA.__awaiter || function (A, K, q, Y) {
    function z(w) {
      return w instanceof q ? w : new q(function (H) {
        H(w);
      });
    }
    return new (q || (q = Promise))(function (w, H) {
      function J($) {
        try {
          X(Y.next($));
        } catch (_) {
          H(_);
        }
      }
      function O($) {
        try {
          X(Y.throw($));
        } catch (_) {
          H(_);
        }
      }
      function X($) {
        $.done ? w($.value) : z($.value).then(J, O);
      }
      X((Y = Y.apply(A, K || [])).next());
    });
  };
  Object.defineProperty(IDA, "__esModule", {
    value: !0
  });
  IDA.EventLogger = void 0;
  var haY = __$.jgA(),
    baY = __$.CDA(),
    VgA = __$.Xj(),
    _S7 = __$.MgA(),
    pT6 = __$.I5A(),
    xaY = __$.uT6(),
    yDA = __$.rp(),
    uaY = __$.gT6(),
    GS7 = __$.vW1(),
    BaY = 100,
    maY = 1e4,
    gaY = 1000,
    FaY = 600000,
    QaY = 500,
    ZS7 = 200,
    fgA = {},
    EW1 = {
      Startup: "startup",
      GainedFocus: "gained_focus"
    };
  class S5A {
    static _safeFlushAndForget(A) {
      var K;
      (K = fgA[A]) === null || K === void 0 || K.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(A) {
      var K;
      (K = fgA[A]) === null || K === void 0 || K._retryFailedLogs(EW1.GainedFocus);
    }
    constructor(A, K, q, Y) {
      var z;
      this._sdkKey = A, this._emitter = K, this._network = q, this._options = Y, this._queue = [], this._lastExposureTimeMap = {}, this._nonExposedChecks = {}, this._hasRunQuickFlush = !1, this._creationTime = Date.now(), this._isLoggingDisabled = (Y === null || Y === void 0 ? void 0 : Y.disableLogging) === !0, this._maxQueueSize = (z = Y === null || Y === void 0 ? void 0 : Y.loggingBufferMaxSize) !== null && z !== void 0 ? z : BaY;
      let w = Y === null || Y === void 0 ? void 0 : Y.networkConfig;
      this._logEventUrlConfig = new uaY.UrlConfiguration(_S7.Endpoint._rgstr, w === null || w === void 0 ? void 0 : w.logEventUrl, w === null || w === void 0 ? void 0 : w.api, w === null || w === void 0 ? void 0 : w.logEventFallbackUrls);
    }
    setLoggingDisabled(A) {
      this._isLoggingDisabled = A;
    }
    enqueue(A) {
      if (!this._shouldLogEvent(A)) return;
      if (this._normalizeAndAppendEvent(A), this._quickFlushIfNeeded(), this._queue.length > this._maxQueueSize) S5A._safeFlushAndForget(this._sdkKey);
    }
    incrementNonExposureCount(A) {
      var K;
      let q = (K = this._nonExposedChecks[A]) !== null && K !== void 0 ? K : 0;
      this._nonExposedChecks[A] = q + 1;
    }
    reset() {
      this._lastExposureTimeMap = {};
    }
    start() {
      if ((0, pT6._isServerEnv)()) return;
      fgA[this._sdkKey] = this, (0, GS7._subscribeToVisiblityChanged)(A => {
        if (A === "background") S5A._safeFlushAndForget(this._sdkKey);else if (A === "foreground") S5A._safeRetryFailedLogs(this._sdkKey);
      }), this._retryFailedLogs(EW1.Startup), this._startBackgroundFlushInterval();
    }
    stop() {
      return RDA(this, void 0, void 0, function* () {
        if (this._flushIntervalId) clearInterval(this._flushIntervalId), this._flushIntervalId = null;
        delete fgA[this._sdkKey], yield this.flush();
      });
    }
    flush() {
      return RDA(this, void 0, void 0, function* () {
        if (this._appendAndResetNonExposedChecks(), this._queue.length === 0) return;
        let A = this._queue;
        this._queue = [], yield this._sendEvents(A);
      });
    }
    _quickFlushIfNeeded() {
      if (this._hasRunQuickFlush) return;
      if (this._hasRunQuickFlush = !0, Date.now() - this._creationTime > ZS7) return;
      setTimeout(() => S5A._safeFlushAndForget(this._sdkKey), ZS7);
    }
    _shouldLogEvent(A) {
      if ((0, pT6._isServerEnv)()) return !1;
      if (!(0, xaY._isExposureEvent)(A)) return !0;
      let K = A.user ? A.user : {
          statsigEnvironment: void 0
        },
        q = (0, haY._getUserStorageKey)(this._sdkKey, K),
        Y = A.metadata ? A.metadata : {},
        z = [A.eventName, q, Y.gate, Y.config, Y.ruleID, Y.allocatedExperiment, Y.parameterName, String(Y.isExplicitParameter), Y.reason].join("|"),
        w = this._lastExposureTimeMap[z],
        H = Date.now();
      if (w && H - w < FaY) return !1;
      if (Object.keys(this._lastExposureTimeMap).length > gaY) this._lastExposureTimeMap = {};
      return this._lastExposureTimeMap[z] = H, !0;
    }
    _sendEvents(A) {
      var K, q;
      return RDA(this, void 0, void 0, function* () {
        if (this._isLoggingDisabled) return this._saveFailedLogsToStorage(A), !1;
        try {
          let z = (0, GS7._isUnloading)() && this._network.isBeaconSupported() && ((q = (K = this._options) === null || K === void 0 ? void 0 : K.networkConfig) === null || q === void 0 ? void 0 : q.networkOverrideFunc) == null;
          if (this._emitter({
            name: "pre_logs_flushed",
            events: A
          }), (z ? yield this._sendEventsViaBeacon(A) : yield this._sendEventsViaPost(A)).success) return this._emitter({
            name: "logs_flushed",
            events: A
          }), !0;else return VgA.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(A), !1;
        } catch (Y) {
          return VgA.Log.warn("Failed to flush events."), !1;
        }
      });
    }
    _sendEventsViaPost(A) {
      var K;
      return RDA(this, void 0, void 0, function* () {
        let q = yield this._network.post(this._getRequestData(A)),
          Y = (K = q === null || q === void 0 ? void 0 : q.code) !== null && K !== void 0 ? K : -1;
        return {
          success: Y >= 200 && Y < 300
        };
      });
    }
    _sendEventsViaBeacon(A) {
      return RDA(this, void 0, void 0, function* () {
        return {
          success: yield this._network.beacon(this._getRequestData(A))
        };
      });
    }
    _getRequestData(A) {
      return {
        sdkKey: this._sdkKey,
        data: {
          events: A
        },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: {
          [_S7.NetworkParam.EventCount]: String(A.length)
        }
      };
    }
    _saveFailedLogsToStorage(A) {
      while (A.length > QaY) A.shift();
      let K = this._getStorageKey();
      try {
        (0, yDA._setObjectInStorage)(K, A);
      } catch (q) {
        VgA.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(A) {
      let K = this._getStorageKey();
      (() => RDA(this, void 0, void 0, function* () {
        if (!yDA.Storage.isReady()) yield yDA.Storage.isReadyResolver();
        let q = (0, yDA._getObjectFromStorage)(K);
        if (!q) return;
        if (A === EW1.Startup) yDA.Storage.removeItem(K);
        if ((yield this._sendEvents(q)) && A === EW1.GainedFocus) yDA.Storage.removeItem(K);
      }))().catch(() => {
        VgA.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, baY._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(A) {
      if (A.user) A.user = Object.assign({}, A.user), delete A.user.privateAttributes;
      let K = {},
        q = this._getCurrentPageUrl();
      if (q) K.statsigMetadata = {
        currentPage: q
      };
      let Y = Object.assign(Object.assign({}, A), K);
      VgA.Log.debug("Enqueued Event:", Y), this._queue.push(Y);
    }
    _appendAndResetNonExposedChecks() {
      if (Object.keys(this._nonExposedChecks).length === 0) return;
      this._normalizeAndAppendEvent({
        eventName: "statsig::non_exposed_checks",
        user: null,
        time: Date.now(),
        metadata: {
          checks: Object.assign({}, this._nonExposedChecks)
        }
      }), this._nonExposedChecks = {};
    }
    _getCurrentPageUrl() {
      var A;
      if (((A = this._options) === null || A === void 0 ? void 0 : A.includeCurrentPageUrlWithEvents) === !1) return;
      return (0, pT6._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var A, K;
      let q = (K = (A = this._options) === null || A === void 0 ? void 0 : A.loggingIntervalMs) !== null && K !== void 0 ? K : maY,
        Y = setInterval(() => {
          let z = fgA[this._sdkKey];
          if (!z || z._flushIntervalId !== Y) clearInterval(Y);else S5A._safeFlushAndForget(this._sdkKey);
        }, q);
      this._flushIntervalId = Y;
    }
  }
  IDA.EventLogger = S5A;
});

// Register to shared state
__$.dT6 = dT6;
