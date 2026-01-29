// Module: Gb7
// Dependencies: is, th7, wv6, Ob7, $b7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gb7 = v(vgA => {
  var Jv6 = vgA && vgA.__awaiter || function (A, K, q, Y) {
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
  Object.defineProperty(vgA, "__esModule", {
    value: !0
  });
  var V9 = __$.is(),
    mtY = __$.th7(),
    gtY = __$.wv6(),
    _b7 = __$.Ob7(),
    FtY = __$.$b7();
  class FW1 extends V9.StatsigClientBase {
    static instance(A) {
      let K = (0, V9._getStatsigGlobal)().instance(A);
      if (K instanceof FW1) return K;
      return V9.Log.warn((0, V9._isServerEnv)() ? "StatsigClient.instance is not supported in server environments" : "Unable to find StatsigClient instance"), new FW1(A !== null && A !== void 0 ? A : "", {});
    }
    constructor(A, K, q = null) {
      var Y, z;
      V9.SDKType._setClientType(A, "javascript-client");
      let w = new gtY.default(q, J => {
        this.$emt(J);
      });
      super(A, (Y = q === null || q === void 0 ? void 0 : q.dataAdapter) !== null && Y !== void 0 ? Y : new FtY.StatsigEvaluationsDataAdapter(), w, q);
      this.getFeatureGate = this._memoize(V9.MemoPrefix._gate, this._getFeatureGateImpl.bind(this)), this.getDynamicConfig = this._memoize(V9.MemoPrefix._dynamicConfig, this._getDynamicConfigImpl.bind(this)), this.getExperiment = this._memoize(V9.MemoPrefix._experiment, this._getExperimentImpl.bind(this)), this.getLayer = this._memoize(V9.MemoPrefix._layer, this._getLayerImpl.bind(this)), this.getParameterStore = this._memoize(V9.MemoPrefix._paramStore, this._getParameterStoreImpl.bind(this)), this._store = new mtY.default(A), this._network = w, this._user = this._configureUser(K, q);
      let H = (z = q === null || q === void 0 ? void 0 : q.plugins) !== null && z !== void 0 ? z : [];
      for (let J of H) J.bind(this);
    }
    initializeSync(A) {
      var K;
      if (this.loadingStatus !== "Uninitialized") return (0, V9.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, ["MultipleInitializations", ...((K = this._store.getWarnings()) !== null && K !== void 0 ? K : [])]);
      return this._logger.start(), this.updateUserSync(this._user, A);
    }
    initializeAsync(A) {
      return Jv6(this, void 0, void 0, function* () {
        if (this._initializePromise) return this._initializePromise;
        return this._initializePromise = this._initializeAsyncImpl(A), this._initializePromise;
      });
    }
    updateUserSync(A, K) {
      var q;
      let Y = performance.now(),
        z = [...((q = this._store.getWarnings()) !== null && q !== void 0 ? q : [])];
      this._resetForUser(A);
      let w = this.dataAdapter.getDataSync(this._user);
      if (w == null) z.push("NoCachedValues");
      this._store.setValues(w, this._user), this._finalizeUpdate(w);
      let H = K === null || K === void 0 ? void 0 : K.disableBackgroundCacheRefresh;
      if (H === !0 || H == null && (w === null || w === void 0 ? void 0 : w.source) === "Bootstrap") return (0, V9.createUpdateDetails)(!0, this._store.getSource(), performance.now() - Y, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), z);
      return this._runPostUpdate(w !== null && w !== void 0 ? w : null, this._user), (0, V9.createUpdateDetails)(!0, this._store.getSource(), performance.now() - Y, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), z);
    }
    updateUserAsync(A, K) {
      return Jv6(this, void 0, void 0, function* () {
        this._resetForUser(A);
        let q = this._user;
        V9.Diagnostics._markInitOverallStart(this._sdkKey);
        let Y = this.dataAdapter.getDataSync(q);
        if (this._store.setValues(Y, this._user), this._setStatus("Loading", Y), Y = yield this.dataAdapter.getDataAsync(Y, q, K), q !== this._user) return (0, V9.createUpdateDetails)(!1, this._store.getSource(), -1, Error("User changed during update"), this._network.getLastUsedInitUrlAndReset());
        let z = !1;
        if (Y != null) V9.Diagnostics._markInitProcessStart(this._sdkKey), z = this._store.setValues(Y, this._user), V9.Diagnostics._markInitProcessEnd(this._sdkKey, {
          success: z
        });
        if (this._finalizeUpdate(Y), !z) this._errorBoundary.attachErrorIfNoneExists(V9.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA), this.$emt({
          name: "initialization_failure"
        });
        V9.Diagnostics._markInitOverallEnd(this._sdkKey, z, this._store.getCurrentSourceDetails());
        let w = V9.Diagnostics._enqueueDiagnosticsEvent(this._user, this._logger, this._sdkKey, this._options);
        return (0, V9.createUpdateDetails)(z, this._store.getSource(), w, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), this._store.getWarnings());
      });
    }
    getContext() {
      return {
        sdkKey: this._sdkKey,
        options: this._options,
        values: this._store.getValues(),
        user: JSON.parse(JSON.stringify(this._user)),
        errorBoundary: this._errorBoundary,
        session: V9.StatsigSession.get(this._sdkKey),
        stableID: V9.StableID.get(this._sdkKey)
      };
    }
    checkGate(A, K) {
      return this.getFeatureGate(A, K).value;
    }
    logEvent(A, K, q) {
      let Y = typeof A === "string" ? {
        eventName: A,
        value: K,
        metadata: q
      } : A;
      this._logger.enqueue(Object.assign(Object.assign({}, Y), {
        user: this._user,
        time: Date.now()
      }));
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null);
      });
    }
    _initializeAsyncImpl(A) {
      return Jv6(this, void 0, void 0, function* () {
        if (!V9.Storage.isReady()) yield V9.Storage.isReadyResolver();
        return this._logger.start(), this.updateUserAsync(this._user, A);
      });
    }
    _finalizeUpdate(A) {
      this._store.finalize(), this._setStatus("Ready", A);
    }
    _runPostUpdate(A, K) {
      this.dataAdapter.getDataAsync(A, K, {
        priority: "low"
      }).catch(q => {
        V9.Log.error("An error occurred after update.", q);
      });
    }
    _resetForUser(A) {
      this._logger.reset(), this._store.reset(), this._user = this._configureUser(A, this._options);
    }
    _configureUser(A, K) {
      var q;
      let Y = (0, V9._normalizeUser)(A, K),
        z = (q = Y.customIDs) === null || q === void 0 ? void 0 : q.stableID;
      if (z) V9.StableID.setOverride(z, this._sdkKey);
      return Y;
    }
    _getFeatureGateImpl(A, K) {
      var q, Y;
      let {
          result: z,
          details: w
        } = this._store.getGate(A),
        H = (0, V9._makeFeatureGate)(A, w, z),
        J = (Y = (q = this.overrideAdapter) === null || q === void 0 ? void 0 : q.getGateOverride) === null || Y === void 0 ? void 0 : Y.call(q, H, this._user, K),
        O = J !== null && J !== void 0 ? J : H;
      return this._enqueueExposure(A, (0, V9._createGateExposure)(this._user, O, this._store.getExposureMapping()), K), this.$emt({
        name: "gate_evaluation",
        gate: O
      }), O;
    }
    _getDynamicConfigImpl(A, K) {
      var q, Y;
      let {
          result: z,
          details: w
        } = this._store.getConfig(A),
        H = (0, V9._makeDynamicConfig)(A, w, z),
        J = (Y = (q = this.overrideAdapter) === null || q === void 0 ? void 0 : q.getDynamicConfigOverride) === null || Y === void 0 ? void 0 : Y.call(q, H, this._user, K),
        O = J !== null && J !== void 0 ? J : H;
      return this._enqueueExposure(A, (0, V9._createConfigExposure)(this._user, O, this._store.getExposureMapping()), K), this.$emt({
        name: "dynamic_config_evaluation",
        dynamicConfig: O
      }), O;
    }
    _getExperimentImpl(A, K) {
      var q, Y, z, w;
      let {
          result: H,
          details: J
        } = this._store.getConfig(A),
        O = (0, V9._makeExperiment)(A, J, H);
      if (O.__evaluation != null) O.__evaluation.secondary_exposures = (0, V9._mapExposures)((Y = (q = O.__evaluation) === null || q === void 0 ? void 0 : q.secondary_exposures) !== null && Y !== void 0 ? Y : [], this._store.getExposureMapping());
      let X = (w = (z = this.overrideAdapter) === null || z === void 0 ? void 0 : z.getExperimentOverride) === null || w === void 0 ? void 0 : w.call(z, O, this._user, K),
        $ = X !== null && X !== void 0 ? X : O;
      return this._enqueueExposure(A, (0, V9._createConfigExposure)(this._user, $, this._store.getExposureMapping()), K), this.$emt({
        name: "experiment_evaluation",
        experiment: $
      }), $;
    }
    _getLayerImpl(A, K) {
      var q, Y, z;
      let {
          result: w,
          details: H
        } = this._store.getLayer(A),
        J = (0, V9._makeLayer)(A, H, w),
        O = (Y = (q = this.overrideAdapter) === null || q === void 0 ? void 0 : q.getLayerOverride) === null || Y === void 0 ? void 0 : Y.call(q, J, this._user, K);
      if (K === null || K === void 0 ? void 0 : K.disableExposureLog) this._logger.incrementNonExposureCount(A);
      let X = (0, V9._mergeOverride)(J, O, (z = O === null || O === void 0 ? void 0 : O.__value) !== null && z !== void 0 ? z : J.__value, $ => {
        if (K === null || K === void 0 ? void 0 : K.disableExposureLog) return;
        this._enqueueExposure(A, (0, V9._createLayerParameterExposure)(this._user, X, $, this._store.getExposureMapping()), K);
      });
      return this.$emt({
        name: "layer_evaluation",
        layer: X
      }), X;
    }
    _getParameterStoreImpl(A, K) {
      var q, Y;
      let {
        result: z,
        details: w
      } = this._store.getParamStore(A);
      this._logger.incrementNonExposureCount(A);
      let H = {
          name: A,
          details: w,
          __configuration: z,
          get: (0, _b7._makeParamStoreGetter)(this, z, K)
        },
        J = (Y = (q = this.overrideAdapter) === null || q === void 0 ? void 0 : q.getParamStoreOverride) === null || Y === void 0 ? void 0 : Y.call(q, H, K);
      if (J != null) H.__configuration = J.config, H.details = J.details, H.get = (0, _b7._makeParamStoreGetter)(this, J.config, K);
      return H;
    }
  }
  vgA.default = FW1;
});

// Register to shared state
__$.Gb7 = Gb7;
