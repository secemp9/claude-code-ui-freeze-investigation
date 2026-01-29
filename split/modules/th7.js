// Module: th7
// Dependencies: is

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var th7 = v(sh7 => {
  Object.defineProperty(sh7, "__esModule", {
    value: !0
  });
  var b5A = __$.is();
  class ah7 {
    constructor(A) {
      this._sdkKey = A, this._rawValues = null, this._values = null, this._source = "Uninitialized", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null, this._warnings = new Set();
    }
    reset() {
      this._values = null, this._rawValues = null, this._source = "Loading", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null;
    }
    finalize() {
      if (this._values) return;
      this._source = "NoValues";
    }
    getValues() {
      return this._rawValues ? (0, b5A._typedJsonParse)(this._rawValues, "has_updates", "EvaluationStoreValues") : null;
    }
    setValues(A, K) {
      var q;
      if (!A) return !1;
      let Y = (0, b5A._typedJsonParse)(A.data, "has_updates", "EvaluationResponse");
      if (Y == null) return !1;
      if (this._source = A.source, (Y === null || Y === void 0 ? void 0 : Y.has_updates) !== !0) return !0;
      if (this._rawValues = A.data, this._lcut = Y.time, this._receivedAt = A.receivedAt, this._values = Y, this._bootstrapMetadata = this._extractBootstrapMetadata(A.source, Y), A.source && Y.user) this._setWarningState(K, Y);
      return b5A.SDKFlags.setFlags(this._sdkKey, (q = Y.sdk_flags) !== null && q !== void 0 ? q : {}), !0;
    }
    getWarnings() {
      if (this._warnings.size === 0) return;
      return Array.from(this._warnings);
    }
    getGate(A) {
      var K;
      return this._getDetailedStoreResult((K = this._values) === null || K === void 0 ? void 0 : K.feature_gates, A);
    }
    getConfig(A) {
      var K;
      return this._getDetailedStoreResult((K = this._values) === null || K === void 0 ? void 0 : K.dynamic_configs, A);
    }
    getLayer(A) {
      var K;
      return this._getDetailedStoreResult((K = this._values) === null || K === void 0 ? void 0 : K.layer_configs, A);
    }
    getParamStore(A) {
      var K;
      return this._getDetailedStoreResult((K = this._values) === null || K === void 0 ? void 0 : K.param_stores, A);
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var A;
      return (A = this._values) === null || A === void 0 ? void 0 : A.exposures;
    }
    _extractBootstrapMetadata(A, K) {
      if (A !== "Bootstrap") return null;
      let q = {};
      if (K.user) q.user = K.user;
      if (K.sdkInfo) q.generatorSDKInfo = K.sdkInfo;
      return q.lcut = K.time, q;
    }
    _getDetailedStoreResult(A, K) {
      let q = null;
      if (A) q = A[K] ? A[K] : A[(0, b5A._DJB2)(K)];
      return {
        result: q,
        details: this._getDetails(q == null)
      };
    }
    _setWarningState(A, K) {
      var q;
      let Y = b5A.StableID.get(this._sdkKey);
      if (((q = A.customIDs) === null || q === void 0 ? void 0 : q.stableID) !== Y) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in K) {
        let z = K.user;
        if ((0, b5A._getFullUserHash)(A) !== (0, b5A._getFullUserHash)(z)) this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues") return {
        reason: this._source
      };
      let A = {
        reason: this._source,
        lcut: this._lcut,
        receivedAt: this._receivedAt
      };
      if (this._warnings.size > 0) A.warnings = Array.from(this._warnings);
      return A;
    }
    _getDetails(A) {
      var K, q;
      let Y = this.getCurrentSourceDetails(),
        z = Y.reason,
        w = (K = Y.warnings) !== null && K !== void 0 ? K : [];
      if (this._source === "Bootstrap" && w.length > 0) z = z + w[0];
      if (z !== "Uninitialized" && z !== "NoValues") z = `${z}:${A ? "Unrecognized" : "Recognized"}`;
      let H = this._source === "Bootstrap" ? (q = this._bootstrapMetadata) !== null && q !== void 0 ? q : void 0 : void 0;
      if (H) Y.bootstrapMetadata = H;
      return Object.assign(Object.assign({}, Y), {
        reason: z
      });
    }
  }
  sh7.default = ah7;
});

// Register to shared state
__$.th7 = th7;
