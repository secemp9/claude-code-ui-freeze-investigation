// Module: hh7
// Dependencies: y5A, rT6, dT6, Xj, oT6, I5A, bW1, rp, on

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hh7 = v(uDA => {
  var osY = uDA && uDA.__awaiter || function (A, K, q, Y) {
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
  Object.defineProperty(uDA, "__esModule", {
    value: !0
  });
  uDA.StatsigClientBase = void 0;
  __$.y5A();
  var asY = __$.y5A(),
    ssY = __$.rT6(),
    tsY = __$.dT6(),
    qv6 = __$.Xj(),
    esY = __$.oT6(),
    AtY = __$.I5A(),
    KtY = __$.bW1(),
    xW1 = __$.rp(),
    qtY = 3000;
  class Sh7 {
    constructor(A, K, q, Y) {
      var z;
      this.loadingStatus = "Uninitialized", this._initializePromise = null, this._listeners = {};
      let w = this.$emt.bind(this);
      (Y === null || Y === void 0 ? void 0 : Y.logLevel) != null && (qv6.Log.level = Y.logLevel), (Y === null || Y === void 0 ? void 0 : Y.disableStorage) && xW1.Storage._setDisabled(!0), (Y === null || Y === void 0 ? void 0 : Y.initialSessionID) && KtY.StatsigSession.overrideInitialSessionID(Y.initialSessionID, A), (Y === null || Y === void 0 ? void 0 : Y.storageProvider) && xW1.Storage._setProvider(Y.storageProvider), this._sdkKey = A, this._options = Y !== null && Y !== void 0 ? Y : {}, this._memoCache = {}, this.overrideAdapter = (z = Y === null || Y === void 0 ? void 0 : Y.overrideAdapter) !== null && z !== void 0 ? z : null, this._logger = new tsY.EventLogger(A, w, q, Y), this._errorBoundary = new ssY.ErrorBoundary(A, Y, w), this._errorBoundary.wrap(this), this._errorBoundary.wrap(K), this._errorBoundary.wrap(this._logger), q.setErrorBoundary(this._errorBoundary), this.dataAdapter = K, this.dataAdapter.attach(A, Y), this.storageProvider = xW1.Storage, this._primeReadyRipcord(), YtY(A, this);
    }
    updateRuntimeOptions(A) {
      if (A.disableLogging != null) this._options.disableLogging = A.disableLogging, this._logger.setLoggingDisabled(A.disableLogging);
      if (A.disableStorage != null) this._options.disableStorage = A.disableStorage, xW1.Storage._setDisabled(A.disableStorage);
    }
    flush() {
      return this._logger.flush();
    }
    shutdown() {
      return osY(this, void 0, void 0, function* () {
        this.$emt({
          name: "pre_shutdown"
        }), this._setStatus("Uninitialized", null), this._initializePromise = null, yield this._logger.stop();
      });
    }
    on(A, K) {
      if (!this._listeners[A]) this._listeners[A] = [];
      this._listeners[A].push(K);
    }
    off(A, K) {
      if (this._listeners[A]) {
        let q = this._listeners[A].indexOf(K);
        if (q !== -1) this._listeners[A].splice(q, 1);
      }
    }
    $on(A, K) {
      K.__isInternal = !0, this.on(A, K);
    }
    $emt(A) {
      var K;
      let q = Y => {
        try {
          Y(A);
        } catch (z) {
          if (Y.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${A.name}`, z);
            return;
          }
          qv6.Log.error("An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.", A);
        }
      };
      if (this._listeners[A.name]) this._listeners[A.name].forEach(Y => q(Y));
      (K = this._listeners["*"]) === null || K === void 0 || K.forEach(q);
    }
    _setStatus(A, K) {
      this.loadingStatus = A, this._memoCache = {}, this.$emt({
        name: "values_updated",
        status: A,
        values: K
      });
    }
    _enqueueExposure(A, K, q) {
      if ((q === null || q === void 0 ? void 0 : q.disableExposureLog) === !0) {
        this._logger.incrementNonExposureCount(A);
        return;
      }
      this._logger.enqueue(K);
    }
    _memoize(A, K) {
      return (q, Y) => {
        if (this._options.disableEvaluationMemoization) return K(q, Y);
        let z = (0, esY.createMemoKey)(A, q, Y);
        if (!z) return K(q, Y);
        if (!(z in this._memoCache)) {
          if (Object.keys(this._memoCache).length >= qtY) this._memoCache = {};
          this._memoCache[z] = K(q, Y);
        }
        return this._memoCache[z];
      };
    }
  }
  uDA.StatsigClientBase = Sh7;
  function YtY(A, K) {
    var q;
    if ((0, AtY._isServerEnv)()) return;
    let Y = (0, asY._getStatsigGlobal)(),
      z = (q = Y.instances) !== null && q !== void 0 ? q : {},
      w = K;
    if (z[A] != null) qv6.Log.warn("Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.");
    if (z[A] = w, !Y.firstInstance) Y.firstInstance = w;
    Y.instances = z, __STATSIG__ = Y;
  }
});

// Register to shared state
__$.hh7 = hh7;
