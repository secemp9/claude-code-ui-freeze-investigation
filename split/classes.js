// Class declarations
import { __$ } from "./state.js";

class ea6 {
  emitted = {
    afterExit: !1,
    exit: !1
  };
  listeners = {
    afterExit: [],
    exit: []
  };
  count = 0;
  id = Math.random();
  constructor() {
    if (sR1[aR1]) return sR1[aR1];
    BsK(sR1, aR1, {
      value: this,
      writable: !1,
      enumerable: !1,
      configurable: !1
    });
  }
  on(A, K) {
    this.listeners[A].push(K);
  }
  removeListener(A, K) {
    let q = this.listeners[A],
      Y = q.indexOf(K);
    if (Y === -1) return;
    if (Y === 0 && q.length === 1) q.length = 0;else q.splice(Y, 1);
  }
  emit(A, K, q) {
    if (this.emitted[A]) return !1;
    this.emitted[A] = !0;
    let Y = !1;
    for (let z of this.listeners[A]) Y = z(K, q) === !0 || Y;
    if (A === "exit") Y = this.emit("afterExit", K, q) || Y;
    return Y;
  }
}
__$.ea6 = ea6;

class eR1 {}
__$.eR1 = eR1;

class Iy1 {
  constructor(A) {
    return Gt6(A);
  }
}
__$.Iy1 = Iy1;

class dA8 {
  constructor() {
    this.handlers = [];
  }
  use(A, K, q) {
    return this.handlers.push({
      fulfilled: A,
      rejected: K,
      synchronous: q ? q.synchronous : !1,
      runWhen: q ? q.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(A) {
    if (this.handlers[A]) this.handlers[A] = null;
  }
  clear() {
    if (this.handlers) this.handlers = [];
  }
  forEach(A) {
    i1.forEach(this.handlers, function (q) {
      if (q !== null) A(q);
    });
  }
}
__$.dA8 = dA8;

class R18 {
  constructor(A, K) {
    let {
        escapeName: q
      } = this.constructor,
      Y = i1.isString(K),
      z = `Content-Disposition: form-data; name="${q(A)}"${!Y && K.name ? `; filename="${q(K.name)}"` : ""}${Il}`;
    if (Y) K = _TA.encode(String(K).replace(/\r?\n|\r\n?/g, Il));else z += `Content-Type: ${K.type || "application/octet-stream"}${Il}`;
    this.headers = _TA.encode(z + Il), this.contentLength = Y ? K.byteLength : K.size, this.size = this.headers.byteLength + this.contentLength + J8q, this.name = A, this.value = K;
  }
  async *encode() {
    yield this.headers;
    let {
      value: A
    } = this;
    if (i1.isTypedArray(A)) yield A;else yield* woA(A);
    yield H8q;
  }
  static escapeName(A) {
    return String(A).replace(/[\r\n"]/g, K => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[K]);
  }
}
__$.R18 = R18;

class ZTA {
  constructor(A) {
    this.defaults = A, this.interceptors = {
      request: new JI1(),
      response: new JI1()
    };
  }
  async request(A, K) {
    try {
      return await this._request(A, K);
    } catch (q) {
      if (q instanceof Error) {
        let Y = {};
        Error.captureStackTrace ? Error.captureStackTrace(Y) : Y = Error();
        let z = Y.stack ? Y.stack.replace(/^.+\n/, "") : "";
        try {
          if (!q.stack) q.stack = z;else if (z && !String(q.stack).endsWith(z.replace(/^.+\n.+\n/, ""))) q.stack += `
` + z;
        } catch (w) {}
      }
      throw q;
    }
  }
  _request(A, K) {
    if (typeof A === "string") K = K || {}, K.url = A;else K = A || {};
    K = yR(this.defaults, K);
    let {
      transitional: q,
      paramsSerializer: Y,
      headers: z
    } = K;
    if (q !== void 0) GTA.assertOptions(q, {
      silentJSONParsing: nh.transitional(nh.boolean),
      forcedJSONParsing: nh.transitional(nh.boolean),
      clarifyTimeoutError: nh.transitional(nh.boolean)
    }, !1);
    if (Y != null) if (i1.isFunction(Y)) K.paramsSerializer = {
      serialize: Y
    };else GTA.assertOptions(Y, {
      encode: nh.function,
      serialize: nh.function
    }, !0);
    if (K.allowAbsoluteUrls !== void 0) ;else if (this.defaults.allowAbsoluteUrls !== void 0) K.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;else K.allowAbsoluteUrls = !0;
    GTA.assertOptions(K, {
      baseUrl: nh.spelling("baseURL"),
      withXsrfToken: nh.spelling("withXSRFToken")
    }, !0), K.method = (K.method || this.defaults.method || "get").toLowerCase();
    let w = z && i1.merge(z.common, z[K.method]);
    z && i1.forEach(["delete", "get", "head", "post", "put", "patch", "common"], Z => {
      delete z[Z];
    }), K.headers = eJ.concat(w, z);
    let H = [],
      J = !0;
    this.interceptors.request.forEach(function (W) {
      if (typeof W.runWhen === "function" && W.runWhen(K) === !1) return;
      J = J && W.synchronous, H.unshift(W.fulfilled, W.rejected);
    });
    let O = [];
    this.interceptors.response.forEach(function (W) {
      O.push(W.fulfilled, W.rejected);
    });
    let X,
      $ = 0,
      _;
    if (!J) {
      let Z = [GoA.bind(this), void 0];
      Z.unshift.apply(Z, H), Z.push.apply(Z, O), _ = Z.length, X = Promise.resolve(K);
      while ($ < _) X = X.then(Z[$++], Z[$++]);
      return X;
    }
    _ = H.length;
    let G = K;
    $ = 0;
    while ($ < _) {
      let Z = H[$++],
        W = H[$++];
      try {
        G = Z(G);
      } catch (D) {
        W.call(this, D);
        break;
      }
    }
    try {
      X = GoA.call(this, G);
    } catch (Z) {
      return Promise.reject(Z);
    }
    $ = 0, _ = O.length;
    while ($ < _) X = X.then(O[$++], O[$++]);
    return X;
  }
  getUri(A) {
    A = yR(this.defaults, A);
    let K = j1A(A.baseURL, A.url, A.allowAbsoluteUrls);
    return W1A(K, A.params, A.paramsSerializer);
  }
}
__$.ZTA = ZTA;

class cI1 {
  constructor(A) {
    if (typeof A !== "function") throw TypeError("executor must be a function.");
    let K;
    this.promise = new Promise(function (z) {
      K = z;
    });
    let q = this;
    this.promise.then(Y => {
      if (!q._listeners) return;
      let z = q._listeners.length;
      while (z-- > 0) q._listeners[z](Y);
      q._listeners = null;
    }), this.promise.then = Y => {
      let z,
        w = new Promise(H => {
          q.subscribe(H), z = H;
        }).then(Y);
      return w.cancel = function () {
        q.unsubscribe(z);
      }, w;
    }, A(function (z, w, H) {
      if (q.reason) return;
      q.reason = new BN(z, w, H), K(q.reason);
    });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(A) {
    if (this.reason) {
      A(this.reason);
      return;
    }
    if (this._listeners) this._listeners.push(A);else this._listeners = [A];
  }
  unsubscribe(A) {
    if (!this._listeners) return;
    let K = this._listeners.indexOf(A);
    if (K !== -1) this._listeners.splice(K, 1);
  }
  toAbortSignal() {
    let A = new AbortController(),
      K = q => {
        A.abort(q);
      };
    return this.subscribe(K), A.signal.unsubscribe = () => this.unsubscribe(K), A.signal;
  }
  static source() {
    let A;
    return {
      token: new cI1(function (Y) {
        A = Y;
      }),
      cancel: A
    };
  }
}
__$.cI1 = cI1;

class C_8 {
  cache = new Map();
  maxCacheSize = 1000;
  readFile(A) {
    let K = BA(),
      q;
    try {
      q = K.statSync(A);
    } catch (J) {
      throw this.cache.delete(A), J;
    }
    let Y = A,
      z = this.cache.get(Y);
    if (z && z.mtime === q.mtimeMs) return {
      content: z.content,
      encoding: z.encoding
    };
    let w = gX(A),
      H = K.readFileSync(A, {
        encoding: w
      }).replaceAll(`\r
`, `
`);
    if (this.cache.set(Y, {
      content: H,
      encoding: w,
      mtime: q.mtimeMs
    }), this.cache.size > this.maxCacheSize) {
      let J = this.cache.keys().next().value;
      if (J) this.cache.delete(J);
    }
    return {
      content: H,
      encoding: w
    };
  }
  clear() {
    this.cache.clear();
  }
  invalidate(A) {
    this.cache.delete(A);
  }
  getStats() {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys())
    };
  }
}
__$.C_8 = C_8;

class qsA {
  constructor(A) {
    if (A = A || {}, this.version = FEq, this._options = this.context = A, this._renderer = A.renderer || null, this._trackedExperiments = new Set(), this._completedChangeIds = new Set(), this._trackedFeatures = {}, this.debug = !!A.debug, this._subscriptions = new Set(), this.ready = !1, this._assigned = new Map(), this._activeAutoExperiments = new Map(), this._triggeredExpKeys = new Set(), this._initialized = !1, this._redirectedUrl = "", this._deferredTrackingCalls = new Map(), this._autoExperimentsAllowed = !A.disableExperimentsOnLoad, this._destroyCallbacks = [], this.logs = [], this.log = this.log.bind(this), this._saveDeferredTrack = this._saveDeferredTrack.bind(this), this._fireSubscriptions = this._fireSubscriptions.bind(this), this._recordChangedId = this._recordChangedId.bind(this), A.remoteEval) {
      if (A.decryptionKey) throw Error("Encryption is not available for remoteEval");
      if (!A.clientKey) throw Error("Missing clientKey");
      let K = !1;
      try {
        K = !!new URL(A.apiHost || "").hostname.match(/growthbook\.io$/i);
      } catch (q) {}
      if (K) throw Error("Cannot use remoteEval on GrowthBook Cloud");
    } else if (A.cacheKeyAttributes) throw Error("cacheKeyAttributes are only used for remoteEval");
    if (A.stickyBucketService) {
      let K = A.stickyBucketService;
      this._saveStickyBucketAssignmentDoc = q => {
        return K.saveAssignments(q);
      };
    }
    if (A.plugins) for (let K of A.plugins) K(this);
    if (A.features) this.ready = !0;
    if (KHA && A.enableDevMode) window._growthbook = this, document.dispatchEvent(new Event("gbloaded"));
    if (A.experiments) this.ready = !0, this._updateAllAutoExperiments();
    if (this._options.stickyBucketService && this._options.stickyBucketAssignmentDocs) for (let K in this._options.stickyBucketAssignmentDocs) {
      let q = this._options.stickyBucketAssignmentDocs[K];
      if (q) this._options.stickyBucketService.saveAssignments(q).catch(() => {});
    }
    if (this.ready) this.refreshStickyBuckets(this.getPayload());
  }
  async setPayload(A) {
    this._payload = A;
    let K = await WW8(A, this._options.decryptionKey);
    if (this._decryptedPayload = K, await this.refreshStickyBuckets(K), K.features) this._options.features = K.features;
    if (K.savedGroups) this._options.savedGroups = K.savedGroups;
    if (K.experiments) this._options.experiments = K.experiments, this._updateAllAutoExperiments();
    this.ready = !0, this._render();
  }
  initSync(A) {
    this._initialized = !0;
    let K = A.payload;
    if (K.encryptedExperiments || K.encryptedFeatures) throw Error("initSync does not support encrypted payloads");
    if (this._options.stickyBucketService && !this._options.stickyBucketAssignmentDocs) this._options.stickyBucketAssignmentDocs = this.generateStickyBucketAssignmentDocsSync(this._options.stickyBucketService, K);
    if (this._payload = K, this._decryptedPayload = K, K.features) this._options.features = K.features;
    if (K.experiments) this._options.experiments = K.experiments, this._updateAllAutoExperiments();
    return this.ready = !0, daA(this, A), this;
  }
  async init(A) {
    if (this._initialized = !0, A = A || {}, A.cacheSettings) UZ8(A.cacheSettings);
    if (A.payload) return await this.setPayload(A.payload), daA(this, A), {
      success: !0,
      source: "init"
    };else {
      let {
        data: K,
        ...q
      } = await this._refresh({
        ...A,
        allowStale: !0
      });
      return daA(this, A), await this.setPayload(K || {}), q;
    }
  }
  async loadFeatures(A) {
    A = A || {}, await this.init({
      skipCache: A.skipCache,
      timeout: A.timeout,
      streaming: (this._options.backgroundSync ?? !0) && (A.autoRefresh || this._options.subscribeToChanges)
    });
  }
  async refreshFeatures(A) {
    let K = await this._refresh({
      ...(A || {}),
      allowStale: !1
    });
    if (K.data) await this.setPayload(K.data);
  }
  getApiInfo() {
    return [this.getApiHosts().apiHost, this.getClientKey()];
  }
  getApiHosts() {
    return DW8(this._options);
  }
  getClientKey() {
    return this._options.clientKey || "";
  }
  getPayload() {
    return this._payload || {
      features: this.getFeatures(),
      experiments: this.getExperiments()
    };
  }
  getDecryptedPayload() {
    return this._decryptedPayload || this.getPayload();
  }
  isRemoteEval() {
    return this._options.remoteEval || !1;
  }
  getCacheKeyAttributes() {
    return this._options.cacheKeyAttributes;
  }
  async _refresh(A) {
    let {
      timeout: K,
      skipCache: q,
      allowStale: Y,
      streaming: z
    } = A;
    if (!this._options.clientKey) throw Error("Missing clientKey");
    return pZ8({
      instance: this,
      timeout: K,
      skipCache: q || this._options.disableCache,
      allowStale: Y,
      backgroundSync: z ?? this._options.backgroundSync ?? !0
    });
  }
  _render() {
    if (this._renderer) try {
      this._renderer();
    } catch (A) {
      console.error("Failed to render", A);
    }
  }
  setFeatures(A) {
    this._options.features = A, this.ready = !0, this._render();
  }
  async setEncryptedFeatures(A, K, q) {
    let Y = await p1A(A, K || this._options.decryptionKey, q);
    this.setFeatures(JSON.parse(Y));
  }
  setExperiments(A) {
    this._options.experiments = A, this.ready = !0, this._updateAllAutoExperiments();
  }
  async setEncryptedExperiments(A, K, q) {
    let Y = await p1A(A, K || this._options.decryptionKey, q);
    this.setExperiments(JSON.parse(Y));
  }
  async setAttributes(A) {
    if (this._options.attributes = A, this._options.stickyBucketService) await this.refreshStickyBuckets();
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render(), this._updateAllAutoExperiments();
  }
  async updateAttributes(A) {
    return this.setAttributes({
      ...this._options.attributes,
      ...A
    });
  }
  async setAttributeOverrides(A) {
    if (this._options.attributeOverrides = A, this._options.stickyBucketService) await this.refreshStickyBuckets();
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render(), this._updateAllAutoExperiments();
  }
  async setForcedVariations(A) {
    if (this._options.forcedVariations = A || {}, this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render(), this._updateAllAutoExperiments();
  }
  setForcedFeatures(A) {
    this._options.forcedFeatureValues = A, this._render();
  }
  async setURL(A) {
    if (A === this._options.url) return;
    if (this._options.url = A, this._redirectedUrl = "", this._options.remoteEval) {
      await this._refreshForRemoteEval(), this._updateAllAutoExperiments(!0);
      return;
    }
    this._updateAllAutoExperiments(!0);
  }
  getAttributes() {
    return {
      ...this._options.attributes,
      ...this._options.attributeOverrides
    };
  }
  getForcedVariations() {
    return this._options.forcedVariations || {};
  }
  getForcedFeatures() {
    return this._options.forcedFeatureValues || new Map();
  }
  getStickyBucketAssignmentDocs() {
    return this._options.stickyBucketAssignmentDocs || {};
  }
  getUrl() {
    return this._options.url || "";
  }
  getFeatures() {
    return this._options.features || {};
  }
  getExperiments() {
    return this._options.experiments || [];
  }
  getCompletedChangeIds() {
    return Array.from(this._completedChangeIds);
  }
  subscribe(A) {
    return this._subscriptions.add(A), () => {
      this._subscriptions.delete(A);
    };
  }
  async _refreshForRemoteEval() {
    if (!this._options.remoteEval) return;
    if (!this._initialized) return;
    let A = await this._refresh({
      allowStale: !1
    });
    if (A.data) await this.setPayload(A.data);
  }
  getAllResults() {
    return new Map(this._assigned);
  }
  onDestroy(A) {
    this._destroyCallbacks.push(A);
  }
  isDestroyed() {
    return !!this._destroyed;
  }
  destroy() {
    if (this._destroyed = !0, this._destroyCallbacks.forEach(A => {
      try {
        A();
      } catch (K) {
        console.error(K);
      }
    }), this._subscriptions.clear(), this._assigned.clear(), this._trackedExperiments.clear(), this._completedChangeIds.clear(), this._deferredTrackingCalls.clear(), this._trackedFeatures = {}, this._destroyCallbacks = [], this._payload = void 0, this._saveStickyBucketAssignmentDoc = void 0, dZ8(this), this.logs = [], KHA && window._growthbook === this) delete window._growthbook;
    this._activeAutoExperiments.forEach(A => {
      A.undo();
    }), this._activeAutoExperiments.clear(), this._triggeredExpKeys.clear();
  }
  setRenderer(A) {
    this._renderer = A;
  }
  forceVariation(A, K) {
    if (this._options.forcedVariations = this._options.forcedVariations || {}, this._options.forcedVariations[A] = K, this._options.remoteEval) {
      this._refreshForRemoteEval();
      return;
    }
    this._updateAllAutoExperiments(), this._render();
  }
  run(A) {
    let {
      result: K
    } = AsA(A, null, this._getEvalContext());
    return this._fireSubscriptions(A, K), K;
  }
  triggerExperiment(A) {
    if (this._triggeredExpKeys.add(A), !this._options.experiments) return null;
    return this._options.experiments.filter(q => q.key === A).map(q => {
      return this._runAutoExperiment(q);
    }).filter(q => q !== null);
  }
  triggerAutoExperiments() {
    this._autoExperimentsAllowed = !0, this._updateAllAutoExperiments(!0);
  }
  _getEvalContext() {
    return {
      user: this._getUserContext(),
      global: this._getGlobalContext(),
      stack: {
        evaluatedFeatures: new Set()
      }
    };
  }
  _getUserContext() {
    return {
      attributes: this._options.user ? {
        ...this._options.user,
        ...this._options.attributes
      } : this._options.attributes,
      enableDevMode: this._options.enableDevMode,
      blockedChangeIds: this._options.blockedChangeIds,
      stickyBucketAssignmentDocs: this._options.stickyBucketAssignmentDocs,
      url: this._getContextUrl(),
      forcedVariations: this._options.forcedVariations,
      forcedFeatureValues: this._options.forcedFeatureValues,
      attributeOverrides: this._options.attributeOverrides,
      saveStickyBucketAssignmentDoc: this._saveStickyBucketAssignmentDoc,
      trackingCallback: this._options.trackingCallback,
      onFeatureUsage: this._options.onFeatureUsage,
      devLogs: this.logs,
      trackedExperiments: this._trackedExperiments,
      trackedFeatureUsage: this._trackedFeatures
    };
  }
  _getGlobalContext() {
    return {
      features: this._options.features,
      experiments: this._options.experiments,
      log: this.log,
      enabled: this._options.enabled,
      qaMode: this._options.qaMode,
      savedGroups: this._options.savedGroups,
      groups: this._options.groups,
      overrides: this._options.overrides,
      onExperimentEval: this._subscriptions.size > 0 ? this._fireSubscriptions : void 0,
      recordChangeId: this._recordChangedId,
      saveDeferredTrack: this._saveDeferredTrack,
      eventLogger: this._options.eventLogger
    };
  }
  _runAutoExperiment(A, K) {
    let q = this._activeAutoExperiments.get(A);
    if (A.manual && !this._triggeredExpKeys.has(A.key) && !q) return null;
    let Y = this._isAutoExperimentBlockedByContext(A),
      z,
      w;
    if (Y) z = _J(this._getEvalContext(), A, -1, !1, "");else ({
      result: z,
      trackingCall: w
    } = AsA(A, null, this._getEvalContext())), this._fireSubscriptions(A, z);
    let H = JSON.stringify(z.value);
    if (!K && z.inExperiment && q && q.valueHash === H) return z;
    if (q) this._undoActiveAutoExperiment(A);
    if (z.inExperiment) {
      let J = QaA(A);
      if (J === "redirect" && z.value.urlRedirect && A.urlPatterns) {
        let O = A.persistQueryString ? gZ8(this._getContextUrl(), z.value.urlRedirect) : z.value.urlRedirect;
        if (FaA(O, A.urlPatterns)) return this.log("Skipping redirect because original URL matches redirect URL", {
          id: A.key
        }), z;
        this._redirectedUrl = O;
        let {
          navigate: X,
          delay: $
        } = this._getNavigateFunction();
        if (X) if (KHA) Promise.all([...(w ? [UaA(w, this._options.maxNavigateDelay ?? 1000)] : []), new Promise(_ => window.setTimeout(_, this._options.navigateDelay ?? $))]).then(() => {
          try {
            X(O);
          } catch (_) {
            console.error(_);
          }
        });else try {
          X(O);
        } catch (_) {
          console.error(_);
        }
      } else if (J === "visual") {
        let O = this._options.applyDomChangesCallback ? this._options.applyDomChangesCallback(z.value) : this._applyDOMChanges(z.value);
        if (O) this._activeAutoExperiments.set(A, {
          undo: O,
          valueHash: H
        });
      }
    }
    return z;
  }
  _undoActiveAutoExperiment(A) {
    let K = this._activeAutoExperiments.get(A);
    if (K) K.undo(), this._activeAutoExperiments.delete(A);
  }
  _updateAllAutoExperiments(A) {
    if (!this._autoExperimentsAllowed) return;
    let K = this._options.experiments || [],
      q = new Set(K);
    this._activeAutoExperiments.forEach((Y, z) => {
      if (!q.has(z)) Y.undo(), this._activeAutoExperiments.delete(z);
    });
    for (let Y of K) {
      let z = this._runAutoExperiment(Y, A);
      if (z !== null && z !== void 0 && z.inExperiment && QaA(Y) === "redirect") break;
    }
  }
  _fireSubscriptions(A, K) {
    let q = A.key,
      Y = this._assigned.get(q);
    if (!Y || Y.result.inExperiment !== K.inExperiment || Y.result.variationId !== K.variationId) this._assigned.set(q, {
      experiment: A,
      result: K
    }), this._subscriptions.forEach(z => {
      try {
        z(A, K);
      } catch (w) {
        console.error(w);
      }
    });
  }
  _recordChangedId(A) {
    this._completedChangeIds.add(A);
  }
  isOn(A) {
    return this.evalFeature(A).on;
  }
  isOff(A) {
    return this.evalFeature(A).off;
  }
  getFeatureValue(A, K) {
    let q = this.evalFeature(A).value;
    return q === null ? K : q;
  }
  feature(A) {
    return this.evalFeature(A);
  }
  evalFeature(A) {
    return eaA(A, this._getEvalContext());
  }
  log(A, K) {
    if (!this.debug) return;
    if (this._options.log) this._options.log(A, K);else console.log(A, K);
  }
  getDeferredTrackingCalls() {
    return Array.from(this._deferredTrackingCalls.values());
  }
  setDeferredTrackingCalls(A) {
    this._deferredTrackingCalls = new Map(A.filter(K => K && K.experiment && K.result).map(K => {
      return [KsA(K.experiment, K.result), K];
    }));
  }
  async fireDeferredTrackingCalls() {
    if (!this._options.trackingCallback) return;
    let A = [];
    this._deferredTrackingCalls.forEach(K => {
      if (!K || !K.experiment || !K.result) console.error("Invalid deferred tracking call", {
        call: K
      });else A.push(this._options.trackingCallback(K.experiment, K.result));
    }), this._deferredTrackingCalls.clear(), await Promise.all(A);
  }
  setTrackingCallback(A) {
    this._options.trackingCallback = A, this.fireDeferredTrackingCalls();
  }
  setEventLogger(A) {
    this._options.eventLogger = A;
  }
  async logEvent(A, K) {
    if (this._destroyed) {
      console.error("Cannot log event to destroyed GrowthBook instance");
      return;
    }
    if (this._options.enableDevMode) this.logs.push({
      eventName: A,
      properties: K,
      timestamp: Date.now().toString(),
      logType: "event"
    });
    if (this._options.eventLogger) try {
      await this._options.eventLogger(A, K || {}, this._getUserContext());
    } catch (q) {
      console.error(q);
    } else console.error("No event logger configured");
  }
  _saveDeferredTrack(A) {
    this._deferredTrackingCalls.set(KsA(A.experiment, A.result), A);
  }
  _getContextUrl() {
    return this._options.url || (KHA ? window.location.href : "");
  }
  _isAutoExperimentBlockedByContext(A) {
    let K = QaA(A);
    if (K === "visual") {
      if (this._options.disableVisualExperiments) return !0;
      if (this._options.disableJsInjection) {
        if (A.variations.some(q => q.js)) return !0;
      }
    } else if (K === "redirect") {
      if (this._options.disableUrlRedirectExperiments) return !0;
      try {
        let q = new URL(this._getContextUrl());
        for (let Y of A.variations) {
          if (!Y || !Y.urlRedirect) continue;
          let z = new URL(Y.urlRedirect);
          if (this._options.disableCrossOriginUrlRedirectExperiments) {
            if (z.protocol !== q.protocol) return !0;
            if (z.host !== q.host) return !0;
          }
        }
      } catch (q) {
        return this.log("Error parsing current or redirect URL", {
          id: A.key,
          error: q
        }), !0;
      }
    } else return !0;
    if (A.changeId && (this._options.blockedChangeIds || []).includes(A.changeId)) return !0;
    return !1;
  }
  getRedirectUrl() {
    return this._redirectedUrl;
  }
  _getNavigateFunction() {
    if (this._options.navigate) return {
      navigate: this._options.navigate,
      delay: 0
    };else if (KHA) return {
      navigate: A => {
        window.location.replace(A);
      },
      delay: 100
    };
    return {
      navigate: null,
      delay: 0
    };
  }
  _applyDOMChanges(A) {
    if (!KHA) return;
    let K = [];
    if (A.css) {
      let q = document.createElement("style");
      q.innerHTML = A.css, document.head.appendChild(q), K.push(() => q.remove());
    }
    if (A.js) {
      let q = document.createElement("script");
      if (q.innerHTML = A.js, this._options.jsInjectionNonce) q.nonce = this._options.jsInjectionNonce;
      document.head.appendChild(q), K.push(() => q.remove());
    }
    if (A.domMutations) A.domMutations.forEach(q => {
      K.push(MW8.default.declarative(q).revert);
    });
    return () => {
      K.forEach(q => q());
    };
  }
  async refreshStickyBuckets(A) {
    if (this._options.stickyBucketService) {
      let K = this._getEvalContext(),
        q = await ZW8(K, this._options.stickyBucketService, A);
      this._options.stickyBucketAssignmentDocs = q;
    }
  }
  generateStickyBucketAssignmentDocsSync(A, K) {
    if (!("getAllAssignmentsSync" in A)) {
      console.error("generating StickyBucketAssignmentDocs docs requires StickyBucketServiceSync");
      return;
    }
    let q = this._getEvalContext(),
      Y = Ku1(q, K);
    return A.getAllAssignmentsSync(Y);
  }
  inDevMode() {
    return !!this._options.enableDevMode;
  }
}
__$.qsA = qsA;

class UC8 {
  constructor(...A) {}
}
__$.UC8 = UC8;

class jeA {
  constructor(A = []) {
    if (this.content = [], this.indent = 0, this) this.args = A;
  }
  indented(A) {
    this.indent += 1, A(this), this.indent -= 1;
  }
  write(A) {
    if (typeof A === "function") {
      A(this, {
        execution: "sync"
      }), A(this, {
        execution: "async"
      });
      return;
    }
    let q = A.split(`
`).filter(w => w),
      Y = Math.min(...q.map(w => w.length - w.trimStart().length)),
      z = q.map(w => w.slice(Y)).map(w => " ".repeat(this.indent * 2) + w);
    for (let w of z) this.content.push(w);
  }
  compile() {
    let A = Function,
      K = this?.args,
      Y = [...(this?.content ?? [""]).map(z => `  ${z}`)];
    return new A(...K, Y.join(`
`));
  }
}
__$.jeA = jeA;

class fEA {
  constructor() {
    this._map = new WeakMap(), this._idmap = new Map();
  }
  add(A, ...K) {
    let q = K[0];
    if (this._map.set(A, q), q && typeof q === "object" && "id" in q) {
      if (this._idmap.has(q.id)) throw Error(`ID ${q.id} already exists in the registry`);
      this._idmap.set(q.id, A);
    }
    return this;
  }
  remove(A) {
    return this._map.delete(A), this;
  }
  get(A) {
    let K = A._zod.parent;
    if (K) {
      let q = {
        ...(this.get(K) ?? {})
      };
      return delete q.id, {
        ...q,
        ...this._map.get(A)
      };
    }
    return this._map.get(A);
  }
  has(A) {
    return this._map.has(A);
  }
}
__$.fEA = fEA;

class mU1 {
  constructor(A) {
    this._def = A, this.def = A;
  }
  implement(A) {
    if (typeof A !== "function") throw Error("implement() must be called with a function");
    let K = (...q) => {
      let Y = this._def.input ? _EA(this._def.input, q, void 0, {
        callee: K
      }) : q;
      if (!Array.isArray(Y)) throw Error("Invalid arguments schema: not an array or tuple schema.");
      let z = A(...Y);
      return this._def.output ? _EA(this._def.output, z, void 0, {
        callee: K
      }) : z;
    };
    return K;
  }
  implementAsync(A) {
    if (typeof A !== "function") throw Error("implement() must be called with a function");
    let K = async (...q) => {
      let Y = this._def.input ? await GEA(this._def.input, q, void 0, {
        callee: K
      }) : q;
      if (!Array.isArray(Y)) throw Error("Invalid arguments schema: not an array or tuple schema.");
      let z = await A(...Y);
      return this._def.output ? GEA(this._def.output, z, void 0, {
        callee: K
      }) : z;
    };
    return K;
  }
  input(...A) {
    let K = this.constructor;
    if (Array.isArray(A[0])) return new K({
      type: "function",
      input: new V6A({
        type: "tuple",
        items: A[0],
        rest: A[1]
      }),
      output: this._def.output
    });
    return new K({
      type: "function",
      input: A[0],
      output: this._def.output
    });
  }
  output(A) {
    return new this.constructor({
      type: "function",
      input: this._def.input,
      output: A
    });
  }
}
__$.mU1 = mU1;

class leA {
  constructor(A) {
    this.counter = 0, this.metadataRegistry = A?.metadata ?? Eb, this.target = A?.target ?? "draft-2020-12", this.unrepresentable = A?.unrepresentable ?? "throw", this.override = A?.override ?? (() => {}), this.io = A?.io ?? "output", this.seen = new Map();
  }
  process(A, K = {
    path: [],
    schemaPath: []
  }) {
    var q;
    let Y = A._zod.def,
      z = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: ""
      },
      w = this.seen.get(A);
    if (w) {
      if (w.count++, K.schemaPath.includes(A)) w.cycle = K.path;
      return w.schema;
    }
    let H = {
      schema: {},
      count: 1,
      cycle: void 0,
      path: K.path
    };
    this.seen.set(A, H);
    let J = A._zod.toJSONSchema?.();
    if (J) H.schema = J;else {
      let $ = {
          ...K,
          schemaPath: [...K.schemaPath, A],
          path: K.path
        },
        _ = A._zod.parent;
      if (_) H.ref = _, this.process(_, $), this.seen.get(_).isParent = !0;else {
        let G = H.schema;
        switch (Y.type) {
          case "string":
            {
              let Z = G;
              Z.type = "string";
              let {
                minimum: W,
                maximum: D,
                format: j,
                patterns: M,
                contentEncoding: P
              } = A._zod.bag;
              if (typeof W === "number") Z.minLength = W;
              if (typeof D === "number") Z.maxLength = D;
              if (j) {
                if (Z.format = z[j] ?? j, Z.format === "") delete Z.format;
              }
              if (P) Z.contentEncoding = P;
              if (M && M.size > 0) {
                let f = [...M];
                if (f.length === 1) Z.pattern = f[0].source;else if (f.length > 1) H.schema.allOf = [...f.map(N => ({
                  ...(this.target === "draft-7" ? {
                    type: "string"
                  } : {}),
                  pattern: N.source
                }))];
              }
              break;
            }
          case "number":
            {
              let Z = G,
                {
                  minimum: W,
                  maximum: D,
                  format: j,
                  multipleOf: M,
                  exclusiveMaximum: P,
                  exclusiveMinimum: f
                } = A._zod.bag;
              if (typeof j === "string" && j.includes("int")) Z.type = "integer";else Z.type = "number";
              if (typeof f === "number") Z.exclusiveMinimum = f;
              if (typeof W === "number") {
                if (Z.minimum = W, typeof f === "number") if (f >= W) delete Z.minimum;else delete Z.exclusiveMinimum;
              }
              if (typeof P === "number") Z.exclusiveMaximum = P;
              if (typeof D === "number") {
                if (Z.maximum = D, typeof P === "number") if (P <= D) delete Z.maximum;else delete Z.exclusiveMaximum;
              }
              if (typeof M === "number") Z.multipleOf = M;
              break;
            }
          case "boolean":
            {
              let Z = G;
              Z.type = "boolean";
              break;
            }
          case "bigint":
            {
              if (this.unrepresentable === "throw") throw Error("BigInt cannot be represented in JSON Schema");
              break;
            }
          case "symbol":
            {
              if (this.unrepresentable === "throw") throw Error("Symbols cannot be represented in JSON Schema");
              break;
            }
          case "null":
            {
              G.type = "null";
              break;
            }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined":
          case "never":
            {
              G.not = {};
              break;
            }
          case "void":
            {
              if (this.unrepresentable === "throw") throw Error("Void cannot be represented in JSON Schema");
              break;
            }
          case "date":
            {
              if (this.unrepresentable === "throw") throw Error("Date cannot be represented in JSON Schema");
              break;
            }
          case "array":
            {
              let Z = G,
                {
                  minimum: W,
                  maximum: D
                } = A._zod.bag;
              if (typeof W === "number") Z.minItems = W;
              if (typeof D === "number") Z.maxItems = D;
              Z.type = "array", Z.items = this.process(Y.element, {
                ...$,
                path: [...$.path, "items"]
              });
              break;
            }
          case "object":
            {
              let Z = G;
              Z.type = "object", Z.properties = {};
              let W = Y.shape;
              for (let M in W) Z.properties[M] = this.process(W[M], {
                ...$,
                path: [...$.path, "properties", M]
              });
              let D = new Set(Object.keys(W)),
                j = new Set([...D].filter(M => {
                  let P = Y.shape[M]._zod;
                  if (this.io === "input") return P.optin === void 0;else return P.optout === void 0;
                }));
              if (j.size > 0) Z.required = Array.from(j);
              if (Y.catchall?._zod.def.type === "never") Z.additionalProperties = !1;else if (!Y.catchall) {
                if (this.io === "output") Z.additionalProperties = !1;
              } else if (Y.catchall) Z.additionalProperties = this.process(Y.catchall, {
                ...$,
                path: [...$.path, "additionalProperties"]
              });
              break;
            }
          case "union":
            {
              let Z = G;
              Z.anyOf = Y.options.map((W, D) => this.process(W, {
                ...$,
                path: [...$.path, "anyOf", D]
              }));
              break;
            }
          case "intersection":
            {
              let Z = G,
                W = this.process(Y.left, {
                  ...$,
                  path: [...$.path, "allOf", 0]
                }),
                D = this.process(Y.right, {
                  ...$,
                  path: [...$.path, "allOf", 1]
                }),
                j = P => "allOf" in P && Object.keys(P).length === 1,
                M = [...(j(W) ? W.allOf : [W]), ...(j(D) ? D.allOf : [D])];
              Z.allOf = M;
              break;
            }
          case "tuple":
            {
              let Z = G;
              Z.type = "array";
              let W = Y.items.map((M, P) => this.process(M, {
                ...$,
                path: [...$.path, "prefixItems", P]
              }));
              if (this.target === "draft-2020-12") Z.prefixItems = W;else Z.items = W;
              if (Y.rest) {
                let M = this.process(Y.rest, {
                  ...$,
                  path: [...$.path, "items"]
                });
                if (this.target === "draft-2020-12") Z.items = M;else Z.additionalItems = M;
              }
              if (Y.rest) Z.items = this.process(Y.rest, {
                ...$,
                path: [...$.path, "items"]
              });
              let {
                minimum: D,
                maximum: j
              } = A._zod.bag;
              if (typeof D === "number") Z.minItems = D;
              if (typeof j === "number") Z.maxItems = j;
              break;
            }
          case "record":
            {
              let Z = G;
              Z.type = "object", Z.propertyNames = this.process(Y.keyType, {
                ...$,
                path: [...$.path, "propertyNames"]
              }), Z.additionalProperties = this.process(Y.valueType, {
                ...$,
                path: [...$.path, "additionalProperties"]
              });
              break;
            }
          case "map":
            {
              if (this.unrepresentable === "throw") throw Error("Map cannot be represented in JSON Schema");
              break;
            }
          case "set":
            {
              if (this.unrepresentable === "throw") throw Error("Set cannot be represented in JSON Schema");
              break;
            }
          case "enum":
            {
              let Z = G,
                W = qEA(Y.entries);
              if (W.every(D => typeof D === "number")) Z.type = "number";
              if (W.every(D => typeof D === "string")) Z.type = "string";
              Z.enum = W;
              break;
            }
          case "literal":
            {
              let Z = G,
                W = [];
              for (let D of Y.values) if (D === void 0) {
                if (this.unrepresentable === "throw") throw Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof D === "bigint") {
                if (this.unrepresentable === "throw") throw Error("BigInt literals cannot be represented in JSON Schema");else W.push(Number(D));
              } else W.push(D);
              if (W.length === 0) ;else if (W.length === 1) {
                let D = W[0];
                Z.type = D === null ? "null" : typeof D, Z.const = D;
              } else {
                if (W.every(D => typeof D === "number")) Z.type = "number";
                if (W.every(D => typeof D === "string")) Z.type = "string";
                if (W.every(D => typeof D === "boolean")) Z.type = "string";
                if (W.every(D => D === null)) Z.type = "null";
                Z.enum = W;
              }
              break;
            }
          case "file":
            {
              let Z = G,
                W = {
                  type: "string",
                  format: "binary",
                  contentEncoding: "binary"
                },
                {
                  minimum: D,
                  maximum: j,
                  mime: M
                } = A._zod.bag;
              if (D !== void 0) W.minLength = D;
              if (j !== void 0) W.maxLength = j;
              if (M) {
                if (M.length === 1) W.contentMediaType = M[0], Object.assign(Z, W);else Z.anyOf = M.map(P => {
                  return {
                    ...W,
                    contentMediaType: P
                  };
                });
              } else Object.assign(Z, W);
              break;
            }
          case "transform":
            {
              if (this.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
              break;
            }
          case "nullable":
            {
              let Z = this.process(Y.innerType, $);
              G.anyOf = [Z, {
                type: "null"
              }];
              break;
            }
          case "nonoptional":
            {
              this.process(Y.innerType, $), H.ref = Y.innerType;
              break;
            }
          case "success":
            {
              let Z = G;
              Z.type = "boolean";
              break;
            }
          case "default":
            {
              this.process(Y.innerType, $), H.ref = Y.innerType, G.default = JSON.parse(JSON.stringify(Y.defaultValue));
              break;
            }
          case "prefault":
            {
              if (this.process(Y.innerType, $), H.ref = Y.innerType, this.io === "input") G._prefault = JSON.parse(JSON.stringify(Y.defaultValue));
              break;
            }
          case "catch":
            {
              this.process(Y.innerType, $), H.ref = Y.innerType;
              let Z;
              try {
                Z = Y.catchValue(void 0);
              } catch {
                throw Error("Dynamic catch values are not supported in JSON Schema");
              }
              G.default = Z;
              break;
            }
          case "nan":
            {
              if (this.unrepresentable === "throw") throw Error("NaN cannot be represented in JSON Schema");
              break;
            }
          case "template_literal":
            {
              let Z = G,
                W = A._zod.pattern;
              if (!W) throw Error("Pattern not found in template literal");
              Z.type = "string", Z.pattern = W.source;
              break;
            }
          case "pipe":
            {
              let Z = this.io === "input" ? Y.in._zod.def.type === "transform" ? Y.out : Y.in : Y.out;
              this.process(Z, $), H.ref = Z;
              break;
            }
          case "readonly":
            {
              this.process(Y.innerType, $), H.ref = Y.innerType, G.readOnly = !0;
              break;
            }
          case "promise":
            {
              this.process(Y.innerType, $), H.ref = Y.innerType;
              break;
            }
          case "optional":
            {
              this.process(Y.innerType, $), H.ref = Y.innerType;
              break;
            }
          case "lazy":
            {
              let Z = A._zod.innerType;
              this.process(Z, $), H.ref = Z;
              break;
            }
          case "custom":
            {
              if (this.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
              break;
            }
          default:
        }
      }
    }
    let O = this.metadataRegistry.get(A);
    if (O) Object.assign(H.schema, O);
    if (this.io === "input" && e$(A)) delete H.schema.examples, delete H.schema.default;
    if (this.io === "input" && H.schema._prefault) (q = H.schema).default ?? (q.default = H.schema._prefault);
    return delete H.schema._prefault, this.seen.get(A).schema;
  }
  emit(A, K) {
    let q = {
        cycles: K?.cycles ?? "ref",
        reused: K?.reused ?? "inline",
        external: K?.external ?? void 0
      },
      Y = this.seen.get(A);
    if (!Y) throw Error("Unprocessed schema. This is a bug in Zod.");
    let z = X => {
        let $ = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (q.external) {
          let W = q.external.registry.get(X[0])?.id;
          if (W) return {
            ref: q.external.uri(W)
          };
          let D = X[1].defId ?? X[1].schema.id ?? `schema${this.counter++}`;
          return X[1].defId = D, {
            defId: D,
            ref: `${q.external.uri("__shared")}#/${$}/${D}`
          };
        }
        if (X[1] === Y) return {
          ref: "#"
        };
        let G = `${"#"}/${$}/`,
          Z = X[1].schema.id ?? `__schema${this.counter++}`;
        return {
          defId: Z,
          ref: G + Z
        };
      },
      w = X => {
        if (X[1].schema.$ref) return;
        let $ = X[1],
          {
            ref: _,
            defId: G
          } = z(X);
        if ($.def = {
          ...$.schema
        }, G) $.defId = G;
        let Z = $.schema;
        for (let W in Z) delete Z[W];
        Z.$ref = _;
      };
    for (let X of this.seen.entries()) {
      let $ = X[1];
      if (A === X[0]) {
        w(X);
        continue;
      }
      if (q.external) {
        let G = q.external.registry.get(X[0])?.id;
        if (A !== X[0] && G) {
          w(X);
          continue;
        }
      }
      if (this.metadataRegistry.get(X[0])?.id) {
        w(X);
        continue;
      }
      if ($.cycle) {
        if (q.cycles === "throw") throw Error(`Cycle detected: #/${$.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);else if (q.cycles === "ref") w(X);
        continue;
      }
      if ($.count > 1) {
        if (q.reused === "ref") {
          w(X);
          continue;
        }
      }
    }
    let H = (X, $) => {
      let _ = this.seen.get(X),
        G = _.def ?? _.schema,
        Z = {
          ...G
        };
      if (_.ref === null) return;
      let W = _.ref;
      if (_.ref = null, W) {
        H(W, $);
        let D = this.seen.get(W).schema;
        if (D.$ref && $.target === "draft-7") G.allOf = G.allOf ?? [], G.allOf.push(D);else Object.assign(G, D), Object.assign(G, Z);
      }
      if (!_.isParent) this.override({
        zodSchema: X,
        jsonSchema: G,
        path: _.path ?? []
      });
    };
    for (let X of [...this.seen.entries()].reverse()) H(X[0], {
      target: this.target
    });
    let J = {};
    if (this.target === "draft-2020-12") J.$schema = "https://json-schema.org/draft/2020-12/schema";else if (this.target === "draft-7") J.$schema = "http://json-schema.org/draft-07/schema#";else console.warn(`Invalid target: ${this.target}`);
    Object.assign(J, Y.def);
    let O = q.external?.defs ?? {};
    for (let X of this.seen.entries()) {
      let $ = X[1];
      if ($.def && $.defId) O[$.defId] = $.def;
    }
    if (!q.external && Object.keys(O).length > 0) if (this.target === "draft-2020-12") J.$defs = O;else J.definitions = O;
    try {
      return JSON.parse(JSON.stringify(J));
    } catch (X) {
      throw Error("Error converting schema to JSON.");
    }
  }
}
__$.leA = leA;

class Ci {
  constructor() {
    rN.set(this, void 0), oN.set(this, void 0), _7(this, rN, new Uint8Array(), "f"), _7(this, oN, null, "f");
  }
  decode(A) {
    if (A == null) return [];
    let K = A instanceof ArrayBuffer ? new Uint8Array(A) : typeof A === "string" ? AkA(A) : A;
    _7(this, rN, Hy8([x6(this, rN, "f"), K]), "f");
    let q = [],
      Y;
    while ((Y = O35(x6(this, rN, "f"), x6(this, oN, "f"))) != null) {
      if (Y.carriage && x6(this, oN, "f") == null) {
        _7(this, oN, Y.index, "f");
        continue;
      }
      if (x6(this, oN, "f") != null && (Y.index !== x6(this, oN, "f") + 1 || Y.carriage)) {
        q.push(xp1(x6(this, rN, "f").subarray(0, x6(this, oN, "f") - 1))), _7(this, rN, x6(this, rN, "f").subarray(x6(this, oN, "f")), "f"), _7(this, oN, null, "f");
        continue;
      }
      let z = x6(this, oN, "f") !== null ? Y.preceding - 1 : Y.preceding,
        w = xp1(x6(this, rN, "f").subarray(0, z));
      q.push(w), _7(this, rN, x6(this, rN, "f").subarray(Y.index), "f"), _7(this, oN, null, "f");
    }
    return q;
  }
  flush() {
    if (!x6(this, rN, "f").length) return [];
    return this.decode(`
`);
  }
}
__$.Ci = Ci;

class Xy8 {
  constructor() {
    this.event = null, this.data = [], this.chunks = [];
  }
  decode(A) {
    if (A.endsWith("\r")) A = A.substring(0, A.length - 1);
    if (!A) {
      if (!this.event && !this.data.length) return null;
      let z = {
        event: this.event,
        data: this.data.join(`
`),
        raw: this.chunks
      };
      return this.event = null, this.data = [], this.chunks = [], z;
    }
    if (this.chunks.push(A), A.startsWith(":")) return null;
    let [K, q, Y] = G35(A, ":");
    if (Y.startsWith(" ")) Y = Y.substring(1);
    if (K === "event") this.event = Y;else if (K === "data") this.data.push(Y);
    return null;
  }
}
__$.Xy8 = Xy8;

class qO {
  constructor(A) {
    this._client = A;
  }
}
__$.qO = qO;

class $z {
  constructor({
    baseURL: A = LkA("ANTHROPIC_BASE_URL"),
    apiKey: K = LkA("ANTHROPIC_API_KEY") ?? null,
    authToken: q = LkA("ANTHROPIC_AUTH_TOKEN") ?? null,
    ...Y
  } = {}) {
    fd1.add(this), QA1.set(this, void 0);
    let z = {
      apiKey: K,
      authToken: q,
      ...Y,
      baseURL: A || "https://api.anthropic.com"
    };
    if (!z.dangerouslyAllowBrowser && eR8()) throw new O7(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);
    this.baseURL = z.baseURL, this.timeout = z.timeout ?? Nd1.DEFAULT_TIMEOUT, this.logger = z.logger ?? console;
    let w = "warn";
    this.logLevel = w, this.logLevel = Bp1(z.logLevel, "ClientOptions.logLevel", this) ?? Bp1(LkA("ANTHROPIC_LOG"), "process.env['ANTHROPIC_LOG']", this) ?? w, this.fetchOptions = z.fetchOptions, this.maxRetries = z.maxRetries ?? 2, this.fetch = z.fetch ?? Ky8(), _7(this, QA1, Yy8, "f"), this._options = z, this.apiKey = typeof K === "string" ? K : null, this.authToken = q;
  }
  withOptions(A) {
    return new this.constructor({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      authToken: this.authToken,
      ...A
    });
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  validateHeaders({
    values: A,
    nulls: K
  }) {
    if (A.get("x-api-key") || A.get("authorization")) return;
    if (this.apiKey && A.get("x-api-key")) return;
    if (K.has("x-api-key")) return;
    if (this.authToken && A.get("authorization")) return;
    if (K.has("authorization")) return;
    throw Error('Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted');
  }
  async authHeaders(A) {
    return j5([await this.apiKeyAuth(A), await this.bearerAuth(A)]);
  }
  async apiKeyAuth(A) {
    if (this.apiKey == null) return;
    return j5([{
      "X-Api-Key": this.apiKey
    }]);
  }
  async bearerAuth(A) {
    if (this.authToken == null) return;
    return j5([{
      Authorization: `Bearer ${this.authToken}`
    }]);
  }
  stringifyQuery(A) {
    return Object.entries(A).filter(([K, q]) => typeof q < "u").map(([K, q]) => {
      if (typeof q === "string" || typeof q === "number" || typeof q === "boolean") return `${encodeURIComponent(K)}=${encodeURIComponent(q)}`;
      if (q === null) return `${encodeURIComponent(K)}=`;
      throw new O7(`Cannot stringify type ${typeof q}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`);
    }).join("&");
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${ki}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${yp1()}`;
  }
  makeStatusError(A, K, q, Y) {
    return r7.generate(A, K, q, Y);
  }
  buildURL(A, K, q) {
    let Y = !x6(this, fd1, "m", hy8).call(this) && q || this.baseURL,
      z = lR8(A) ? new URL(A) : new URL(Y + (Y.endsWith("/") && A.startsWith("/") ? A.slice(1) : A)),
      w = this.defaultQuery();
    if (!iR8(w)) K = {
      ...w,
      ...K
    };
    if (typeof K === "object" && K && !Array.isArray(K)) z.search = this.stringifyQuery(K);
    return z.toString();
  }
  _calculateNonstreamingTimeout(A) {
    if (3600 * A / 128000 > 600) throw new O7("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details");
    return 600000;
  }
  async prepareOptions(A) {}
  async prepareRequest(A, {
    url: K,
    options: q
  }) {}
  get(A, K) {
    return this.methodRequest("get", A, K);
  }
  post(A, K) {
    return this.methodRequest("post", A, K);
  }
  patch(A, K) {
    return this.methodRequest("patch", A, K);
  }
  put(A, K) {
    return this.methodRequest("put", A, K);
  }
  delete(A, K) {
    return this.methodRequest("delete", A, K);
  }
  methodRequest(A, K, q) {
    return this.request(Promise.resolve(q).then(Y => {
      return {
        method: A,
        path: K,
        ...Y
      };
    }));
  }
  request(A, K = null) {
    return new L6A(this, this.makeRequest(A, K, void 0));
  }
  async makeRequest(A, K, q) {
    let Y = await A,
      z = Y.maxRetries ?? this.maxRetries;
    if (K == null) K = z;
    await this.prepareOptions(Y);
    let {
      req: w,
      url: H,
      timeout: J
    } = await this.buildRequest(Y, {
      retryCount: z - K
    });
    await this.prepareRequest(w, {
      url: H,
      options: Y
    });
    let O = "log_" + (Math.random() * 16777216 | 0).toString(16).padStart(6, "0"),
      X = q === void 0 ? "" : `, retryOf: ${q}`,
      $ = Date.now();
    if (r_(this).debug(`[${O}] sending request`, vF({
      retryOfRequestLogID: q,
      method: Y.method,
      url: H,
      options: Y,
      headers: w.headers
    })), Y.signal?.aborted) throw new h2();
    let _ = new AbortController(),
      G = await this.fetchWithTimeout(H, w, J, _).catch(iEA),
      Z = Date.now();
    if (G instanceof globalThis.Error) {
      let j = `retrying, ${K} attempts remaining`;
      if (Y.signal?.aborted) throw new h2();
      let M = TF(G) || /timed? ?out/i.test(String(G) + ("cause" in G ? String(G.cause) : ""));
      if (K) return r_(this).info(`[${O}] connection ${M ? "timed out" : "failed"} - ${j}`), r_(this).debug(`[${O}] connection ${M ? "timed out" : "failed"} (${j})`, vF({
        retryOfRequestLogID: q,
        url: H,
        durationMs: Z - $,
        message: G.message
      })), this.retryRequest(Y, K, q ?? O);
      if (r_(this).info(`[${O}] connection ${M ? "timed out" : "failed"} - error; no more retries left`), r_(this).debug(`[${O}] connection ${M ? "timed out" : "failed"} (error; no more retries left)`, vF({
        retryOfRequestLogID: q,
        url: H,
        durationMs: Z - $,
        message: G.message
      })), M) throw new Rb();
      throw new nj({
        cause: G
      });
    }
    let W = [...G.headers.entries()].filter(([j]) => j === "request-id").map(([j, M]) => ", " + j + ": " + JSON.stringify(M)).join(""),
      D = `[${O}${X}${W}] ${w.method} ${H} ${G.ok ? "succeeded" : "failed"} with status ${G.status} in ${Z - $}ms`;
    if (!G.ok) {
      let j = await this.shouldRetry(G);
      if (K && j) {
        let C = `retrying, ${K} attempts remaining`;
        return await qy8(G.body), r_(this).info(`${D} - ${C}`), r_(this).debug(`[${O}] response error (${C})`, vF({
          retryOfRequestLogID: q,
          url: G.url,
          status: G.status,
          headers: G.headers,
          durationMs: Z - $
        })), this.retryRequest(Y, K, q ?? O, G.headers);
      }
      let M = j ? "error; no more retries left" : "error; not retryable";
      r_(this).info(`${D} - ${M}`);
      let P = await G.text().catch(C => iEA(C).message),
        f = GA1(P),
        N = f ? void 0 : P;
      throw r_(this).debug(`[${O}] response error (${M})`, vF({
        retryOfRequestLogID: q,
        url: G.url,
        status: G.status,
        headers: G.headers,
        message: N,
        durationMs: Date.now() - $
      })), this.makeStatusError(G.status, f, N, G.headers);
    }
    return r_(this).info(D), r_(this).debug(`[${O}] response start`, vF({
      retryOfRequestLogID: q,
      url: G.url,
      status: G.status,
      headers: G.headers,
      durationMs: Z - $
    })), {
      response: G,
      options: Y,
      controller: _,
      requestLogID: O,
      retryOfRequestLogID: q,
      startTime: $
    };
  }
  getAPIList(A, K, q) {
    return this.requestAPIList(K, {
      method: "get",
      path: A,
      ...q
    });
  }
  requestAPIList(A, K) {
    let q = this.makeRequest(K, null, void 0);
    return new fA1(this, q, A);
  }
  async fetchWithTimeout(A, K, q, Y) {
    let {
      signal: z,
      method: w,
      ...H
    } = K || {};
    if (z) z.addEventListener("abort", () => Y.abort());
    let J = setTimeout(() => Y.abort(), q),
      O = globalThis.ReadableStream && H.body instanceof globalThis.ReadableStream || typeof H.body === "object" && H.body !== null && Symbol.asyncIterator in H.body,
      X = {
        signal: Y.signal,
        ...(O ? {
          duplex: "half"
        } : {}),
        method: "GET",
        ...H
      };
    if (w) X.method = w.toUpperCase();
    try {
      return await this.fetch.call(void 0, A, X);
    } finally {
      clearTimeout(J);
    }
  }
  async shouldRetry(A) {
    let K = A.headers.get("x-should-retry");
    if (K === "true") return !0;
    if (K === "false") return !1;
    if (A.status === 408) return !0;
    if (A.status === 409) return !0;
    if (A.status === 429) return !0;
    if (A.status >= 500) return !0;
    return !1;
  }
  async retryRequest(A, K, q, Y) {
    let z,
      w = Y?.get("retry-after-ms");
    if (w) {
      let J = parseFloat(w);
      if (!Number.isNaN(J)) z = J;
    }
    let H = Y?.get("retry-after");
    if (H && !z) {
      let J = parseFloat(H);
      if (!Number.isNaN(J)) z = J * 1000;else z = Date.parse(H) - Date.now();
    }
    if (!(z && 0 <= z && z < 60000)) {
      let J = A.maxRetries ?? this.maxRetries;
      z = this.calculateDefaultRetryTimeoutMillis(K, J);
    }
    return await oR8(z), this.makeRequest(A, K - 1, q);
  }
  calculateDefaultRetryTimeoutMillis(A, K) {
    let z = K - A,
      w = Math.min(0.5 * Math.pow(2, z), 8),
      H = 1 - Math.random() * 0.25;
    return w * H * 1000;
  }
  calculateNonstreamingTimeout(A, K) {
    if (3600000 * A / 128000 > 600000 || K != null && A > K) throw new O7("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details");
    return 600000;
  }
  async buildRequest(A, {
    retryCount: K = 0
  } = {}) {
    let q = {
        ...A
      },
      {
        method: Y,
        path: z,
        query: w,
        defaultBaseURL: H
      } = q,
      J = this.buildURL(z, w, H);
    if ("timeout" in q) rR8("timeout", q.timeout);
    q.timeout = q.timeout ?? this.timeout;
    let {
        bodyHeaders: O,
        body: X
      } = this.buildBody({
        options: q
      }),
      $ = await this.buildHeaders({
        options: A,
        method: Y,
        bodyHeaders: O,
        retryCount: K
      });
    return {
      req: {
        method: Y,
        headers: $,
        ...(q.signal && {
          signal: q.signal
        }),
        ...(globalThis.ReadableStream && X instanceof globalThis.ReadableStream && {
          duplex: "half"
        }),
        ...(X && {
          body: X
        }),
        ...(this.fetchOptions ?? {}),
        ...(q.fetchOptions ?? {})
      },
      url: J,
      timeout: q.timeout
    };
  }
  async buildHeaders({
    options: A,
    method: K,
    bodyHeaders: q,
    retryCount: Y
  }) {
    let z = {};
    if (this.idempotencyHeader && K !== "get") {
      if (!A.idempotencyKey) A.idempotencyKey = this.defaultIdempotencyKey();
      z[this.idempotencyHeader] = A.idempotencyKey;
    }
    let w = j5([z, {
      Accept: "application/json",
      "User-Agent": this.getUserAgent(),
      "X-Stainless-Retry-Count": String(Y),
      ...(A.timeout ? {
        "X-Stainless-Timeout": String(Math.trunc(A.timeout / 1000))
      } : {}),
      ...Ay8(),
      ...(this._options.dangerouslyAllowBrowser ? {
        "anthropic-dangerous-direct-browser-access": "true"
      } : void 0),
      "anthropic-version": "2023-06-01"
    }, await this.authHeaders(A), this._options.defaultHeaders, q, A.headers]);
    return this.validateHeaders(w), w.values;
  }
  buildBody({
    options: {
      body: A,
      headers: K
    }
  }) {
    if (!A) return {
      bodyHeaders: void 0,
      body: void 0
    };
    let q = j5([K]);
    if (ArrayBuffer.isView(A) || A instanceof ArrayBuffer || A instanceof DataView || typeof A === "string" && q.values.has("content-type") || globalThis.Blob && A instanceof globalThis.Blob || A instanceof FormData || A instanceof URLSearchParams || globalThis.ReadableStream && A instanceof globalThis.ReadableStream) return {
      bodyHeaders: void 0,
      body: A
    };else if (typeof A === "object" && (Symbol.asyncIterator in A || Symbol.iterator in A && "next" in A && typeof A.next === "function")) return {
      bodyHeaders: void 0,
      body: ZA1(A)
    };else return x6(this, QA1, "f").call(this, {
      body: A,
      headers: q
    });
  }
}
__$.$z = $z;

class UkA {
  constructor() {
    this.violations = [], this.totalCount = 0, this.maxSize = 100, this.listeners = new Set();
  }
  addViolation(A) {
    if (this.violations.push(A), this.totalCount++, this.violations.length > this.maxSize) this.violations = this.violations.slice(-this.maxSize);
    this.notifyListeners();
  }
  getViolations(A) {
    if (A === void 0) return [...this.violations];
    return this.violations.slice(-A);
  }
  getCount() {
    return this.violations.length;
  }
  getTotalCount() {
    return this.totalCount;
  }
  getViolationsForCommand(A) {
    let K = I11(A);
    return this.violations.filter(q => q.encodedCommand === K);
  }
  clear() {
    this.violations = [], this.notifyListeners();
  }
  subscribe(A) {
    return this.listeners.add(A), A(this.getViolations()), () => {
      this.listeners.delete(A);
    };
  }
  notifyListeners() {
    let A = this.getViolations();
    this.listeners.forEach(K => K(A));
  }
}
__$.UkA = UkA;

class TZ {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted") this.value = "aborted";
  }
  static mergeArray(A, K) {
    let q = [];
    for (let Y of K) {
      if (Y.status === "aborted") return Gq;
      if (Y.status === "dirty") A.dirty();
      q.push(Y.value);
    }
    return {
      status: A.value,
      value: q
    };
  }
  static async mergeObjectAsync(A, K) {
    let q = [];
    for (let Y of K) {
      let z = await Y.key,
        w = await Y.value;
      q.push({
        key: z,
        value: w
      });
    }
    return TZ.mergeObjectSync(A, q);
  }
  static mergeObjectSync(A, K) {
    let q = {};
    for (let Y of K) {
      let {
        key: z,
        value: w
      } = Y;
      if (z.status === "aborted") return Gq;
      if (w.status === "aborted") return Gq;
      if (z.status === "dirty") A.dirty();
      if (w.status === "dirty") A.dirty();
      if (z.value !== "__proto__" && (typeof w.value < "u" || Y.alwaysSet)) q[z.value] = w.value;
    }
    return {
      status: A.value,
      value: q
    };
  }
}
__$.TZ = TZ;

class oR {
  constructor(A, K, q, Y) {
    this._cachedPath = [], this.parent = A, this.data = K, this._path = q, this._key = Y;
  }
  get path() {
    if (!this._cachedPath.length) if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);else this._cachedPath.push(...this._path, this._key);
    return this._cachedPath;
  }
}
__$.oR = oR;

class o3 {
  get description() {
    return this._def.description;
  }
  _getType(A) {
    return bb(A.data);
  }
  _getOrReturnCtx(A, K) {
    return K || {
      common: A.parent.common,
      data: A.data,
      parsedType: bb(A.data),
      schemaErrorMap: this._def.errorMap,
      path: A.path,
      parent: A.parent
    };
  }
  _processInputParams(A) {
    return {
      status: new TZ(),
      ctx: {
        common: A.parent.common,
        data: A.data,
        parsedType: bb(A.data),
        schemaErrorMap: this._def.errorMap,
        path: A.path,
        parent: A.parent
      }
    };
  }
  _parseSync(A) {
    let K = this._parse(A);
    if (EJA(K)) throw Error("Synchronous parse encountered promise.");
    return K;
  }
  _parseAsync(A) {
    let K = this._parse(A);
    return Promise.resolve(K);
  }
  parse(A, K) {
    let q = this.safeParse(A, K);
    if (q.success) return q.data;
    throw q.error;
  }
  safeParse(A, K) {
    let q = {
        common: {
          issues: [],
          async: K?.async ?? !1,
          contextualErrorMap: K?.errorMap
        },
        path: K?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: A,
        parsedType: bb(A)
      },
      Y = this._parseSync({
        data: A,
        path: q.path,
        parent: q
      });
    return ub8(q, Y);
  }
  "~validate"(A) {
    let K = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: A,
      parsedType: bb(A)
    };
    if (!this["~standard"].async) try {
      let q = this._parseSync({
        data: A,
        path: [],
        parent: K
      });
      return Fi(q) ? {
        value: q.value
      } : {
        issues: K.common.issues
      };
    } catch (q) {
      if (q?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = !0;
      K.common = {
        issues: [],
        async: !0
      };
    }
    return this._parseAsync({
      data: A,
      path: [],
      parent: K
    }).then(q => Fi(q) ? {
      value: q.value
    } : {
      issues: K.common.issues
    });
  }
  async parseAsync(A, K) {
    let q = await this.safeParseAsync(A, K);
    if (q.success) return q.data;
    throw q.error;
  }
  async safeParseAsync(A, K) {
    let q = {
        common: {
          issues: [],
          contextualErrorMap: K?.errorMap,
          async: !0
        },
        path: K?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: A,
        parsedType: bb(A)
      },
      Y = this._parse({
        data: A,
        path: q.path,
        parent: q
      }),
      z = await (EJA(Y) ? Y : Promise.resolve(Y));
    return ub8(q, z);
  }
  refine(A, K) {
    let q = Y => {
      if (typeof K === "string" || typeof K > "u") return {
        message: K
      };else if (typeof K === "function") return K(Y);else return K;
    };
    return this._refinement((Y, z) => {
      let w = A(Y),
        H = () => z.addIssue({
          code: d8.custom,
          ...q(Y)
        });
      if (typeof Promise < "u" && w instanceof Promise) return w.then(J => {
        if (!J) return H(), !1;else return !0;
      });
      if (!w) return H(), !1;else return !0;
    });
  }
  refinement(A, K) {
    return this._refinement((q, Y) => {
      if (!A(q)) return Y.addIssue(typeof K === "function" ? K(q, Y) : K), !1;else return !0;
    });
  }
  _refinement(A) {
    return new aR({
      schema: this,
      typeName: Rq.ZodEffects,
      effect: {
        type: "refinement",
        refinement: A
      }
    });
  }
  superRefine(A) {
    return this._refinement(A);
  }
  constructor(A) {
    this.spa = this.safeParseAsync, this._def = A, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: K => this["~validate"](K)
    };
  }
  optional() {
    return rR.create(this, this._def);
  }
  nullable() {
    return uF.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return nR.create(this);
  }
  promise() {
    return Q6A.create(this, this._def);
  }
  or(A) {
    return IJA.create([this, A], this._def);
  }
  and(A) {
    return SJA.create(this, A, this._def);
  }
  transform(A) {
    return new aR({
      ...H3(this._def),
      schema: this,
      typeName: Rq.ZodEffects,
      effect: {
        type: "transform",
        transform: A
      }
    });
  }
  default(A) {
    let K = typeof A === "function" ? A : () => A;
    return new uJA({
      ...H3(this._def),
      innerType: this,
      defaultValue: K,
      typeName: Rq.ZodDefault
    });
  }
  brand() {
    return new F11({
      typeName: Rq.ZodBranded,
      type: this,
      ...H3(this._def)
    });
  }
  catch(A) {
    let K = typeof A === "function" ? A : () => A;
    return new BJA({
      ...H3(this._def),
      innerType: this,
      catchValue: K,
      typeName: Rq.ZodCatch
    });
  }
  describe(A) {
    return new this.constructor({
      ...this._def,
      description: A
    });
  }
  pipe(A) {
    return okA.create(this, A);
  }
  readonly() {
    return mJA.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
__$.o3 = o3;

class Ec1 {
  constructor(A) {
    this.fsw = A, this._boundHandleError = K => A._handleError(K);
  }
  _watchWithNodeFs(A, K) {
    let q = this.fsw.options,
      Y = WJ.dirname(A),
      z = WJ.basename(A);
    this.fsw._getWatchedDir(Y).add(z);
    let H = WJ.resolve(A),
      J = {
        persistent: q.persistent
      };
    if (!K) K = d11;
    let O;
    if (q.usePolling) {
      let X = q.interval !== q.binaryInterval;
      J.interval = X && xJ5(z) ? q.binaryInterval : q.interval, O = mJ5(A, H, J, {
        listener: K,
        rawEmitter: this.fsw._emitRaw
      });
    } else O = BJ5(A, H, J, {
      listener: K,
      errHandler: this._boundHandleError,
      rawEmitter: this.fsw._emitRaw
    });
    return O;
  }
  _handleFile(A, K, q) {
    if (this.fsw.closed) return;
    let Y = WJ.dirname(A),
      z = WJ.basename(A),
      w = this.fsw._getWatchedDir(Y),
      H = K;
    if (w.has(z)) return;
    let J = async (X, $) => {
        if (!this.fsw._throttle(IJ5, A, 5)) return;
        if (!$ || $.mtimeMs === 0) try {
          let _ = await Ox8(A);
          if (this.fsw.closed) return;
          let {
            atimeMs: G,
            mtimeMs: Z
          } = _;
          if (!G || G <= Z || Z !== H.mtimeMs) this.fsw._emit(eR.CHANGE, A, _);
          if ((LJ5 || RJ5 || yJ5) && H.ino !== _.ino) {
            this.fsw._closeFile(X), H = _;
            let W = this._watchWithNodeFs(A, J);
            if (W) this.fsw._addPathCloser(X, W);
          } else H = _;
        } catch (_) {
          this.fsw._remove(Y, z);
        } else if (w.has(z)) {
          let {
            atimeMs: _,
            mtimeMs: G
          } = $;
          if (!_ || _ <= G || G !== H.mtimeMs) this.fsw._emit(eR.CHANGE, A, $);
          H = $;
        }
      },
      O = this._watchWithNodeFs(A, J);
    if (!(q && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(A)) {
      if (!this.fsw._throttle(eR.ADD, A, 0)) return;
      this.fsw._emit(eR.ADD, A, K);
    }
    return O;
  }
  async _handleSymlink(A, K, q, Y) {
    if (this.fsw.closed) return;
    let z = A.fullPath,
      w = this.fsw._getWatchedDir(K);
    if (!this.fsw.options.followSymlinks) {
      this.fsw._incrReadyCount();
      let H;
      try {
        H = await Vc1(q);
      } catch (J) {
        return this.fsw._emitReady(), !0;
      }
      if (this.fsw.closed) return;
      if (w.has(Y)) {
        if (this.fsw._symlinkPaths.get(z) !== H) this.fsw._symlinkPaths.set(z, H), this.fsw._emit(eR.CHANGE, q, A.stats);
      } else w.add(Y), this.fsw._symlinkPaths.set(z, H), this.fsw._emit(eR.ADD, q, A.stats);
      return this.fsw._emitReady(), !0;
    }
    if (this.fsw._symlinkPaths.has(z)) return !0;
    this.fsw._symlinkPaths.set(z, !0);
  }
  _handleRead(A, K, q, Y, z, w, H) {
    if (A = WJ.join(A, ""), H = this.fsw._throttle("readdir", A, 1000), !H) return;
    let J = this.fsw._getWatchedDir(q.path),
      O = new Set(),
      X = this.fsw._readdirp(A, {
        fileFilter: $ => q.filterPath($),
        directoryFilter: $ => q.filterDir($)
      });
    if (!X) return;
    return X.on(CJ5, async $ => {
      if (this.fsw.closed) {
        X = void 0;
        return;
      }
      let _ = $.path,
        G = WJ.join(A, _);
      if (O.add(_), $.stats.isSymbolicLink() && (await this._handleSymlink($, A, G, _))) return;
      if (this.fsw.closed) {
        X = void 0;
        return;
      }
      if (_ === Y || !Y && !J.has(_)) this.fsw._incrReadyCount(), G = WJ.join(z, WJ.relative(z, G)), this._addToNodeFs(G, K, q, w + 1);
    }).on(eR.ERROR, this._boundHandleError), new Promise(($, _) => {
      if (!X) return _();
      X.once(Tc1, () => {
        if (this.fsw.closed) {
          X = void 0;
          return;
        }
        let G = H ? H.clear() : !1;
        if ($(void 0), J.getChildren().filter(Z => {
          return Z !== A && !O.has(Z);
        }).forEach(Z => {
          this.fsw._remove(A, Z);
        }), X = void 0, G) this._handleRead(A, !1, q, Y, z, w, H);
      });
    });
  }
  async _handleDir(A, K, q, Y, z, w, H) {
    let J = this.fsw._getWatchedDir(WJ.dirname(A)),
      O = J.has(WJ.basename(A));
    if (!(q && this.fsw.options.ignoreInitial) && !z && !O) this.fsw._emit(eR.ADD_DIR, A, K);
    J.add(WJ.basename(A)), this.fsw._getWatchedDir(A);
    let X,
      $,
      _ = this.fsw.options.depth;
    if ((_ == null || Y <= _) && !this.fsw._symlinkPaths.has(H)) {
      if (!z) {
        if (await this._handleRead(A, q, w, z, A, Y, X), this.fsw.closed) return;
      }
      $ = this._watchWithNodeFs(A, (G, Z) => {
        if (Z && Z.mtimeMs === 0) return;
        this._handleRead(G, !1, w, z, A, Y, X);
      });
    }
    return $;
  }
  async _addToNodeFs(A, K, q, Y, z) {
    let w = this.fsw._emitReady;
    if (this.fsw._isIgnored(A) || this.fsw.closed) return w(), !1;
    let H = this.fsw._getWatchHelpers(A);
    if (q) H.filterPath = J => q.filterPath(J), H.filterDir = J => q.filterDir(J);
    try {
      let J = await SJ5[H.statMethod](H.watchPath);
      if (this.fsw.closed) return;
      if (this.fsw._isIgnored(H.watchPath, J)) return w(), !1;
      let O = this.fsw.options.followSymlinks,
        X;
      if (J.isDirectory()) {
        let $ = WJ.resolve(A),
          _ = O ? await Vc1(A) : A;
        if (this.fsw.closed) return;
        if (X = await this._handleDir(H.watchPath, J, K, Y, z, H, _), this.fsw.closed) return;
        if ($ !== _ && _ !== void 0) this.fsw._symlinkPaths.set($, _);
      } else if (J.isSymbolicLink()) {
        let $ = O ? await Vc1(A) : A;
        if (this.fsw.closed) return;
        let _ = WJ.dirname(H.watchPath);
        if (this.fsw._getWatchedDir(_).add(H.watchPath), this.fsw._emit(eR.ADD, H.watchPath, J), X = await this._handleDir(_, J, K, Y, A, H, $), this.fsw.closed) return;
        if ($ !== void 0) this.fsw._symlinkPaths.set(WJ.resolve(A), $);
      } else X = this._handleFile(H.watchPath, J, K);
      if (w(), X) this.fsw._addPathCloser(A, X);
      return !1;
    } catch (J) {
      if (this.fsw._handleError(J)) return w(), A;
    }
  }
}
__$.Ec1 = Ec1;

class fx8 {
  constructor(A, K) {
    this.path = A, this._removeWatcher = K, this.items = new Set();
  }
  add(A) {
    let {
      items: K
    } = this;
    if (!K) return;
    if (A !== Px8 && A !== dJ5) K.add(A);
  }
  async remove(A) {
    let {
      items: K
    } = this;
    if (!K) return;
    if (K.delete(A), K.size > 0) return;
    let q = this.path;
    try {
      await QJ5(q);
    } catch (Y) {
      if (this._removeWatcher) this._removeWatcher(h9.dirname(q), h9.basename(q));
    }
  }
  has(A) {
    let {
      items: K
    } = this;
    if (!K) return;
    return K.has(A);
  }
  getChildren() {
    let {
      items: A
    } = this;
    if (!A) return [];
    return [...A.values()];
  }
  dispose() {
    this.items.clear(), this.path = "", this._removeWatcher = d11, this.items = tJ5, Object.freeze(this);
  }
}
__$.fx8 = fx8;

class Nx8 {
  constructor(A, K, q) {
    this.fsw = q;
    let Y = A;
    this.path = A = A.replace(nJ5, ""), this.watchPath = Y, this.fullWatchPath = h9.resolve(Y), this.dirParts = [], this.dirParts.forEach(z => {
      if (z.length > 1) z.pop();
    }), this.followSymlinks = K, this.statMethod = K ? eJ5 : AO5;
  }
  entryPath(A) {
    return h9.join(this.watchPath, h9.relative(this.watchPath, A.fullPath));
  }
  filterPath(A) {
    let {
      stats: K
    } = A;
    if (K && K.isSymbolicLink()) return this.filterDir(A);
    let q = this.entryPath(A);
    return this.fsw._isntIgnored(q, K) && this.fsw._hasReadPermissions(K);
  }
  filterDir(A) {
    return this.fsw._isntIgnored(this.entryPath(A), A.stats);
  }
}
__$.Nx8 = Nx8;

class AXA {
  heap;
  length;
  static #A = !1;
  static create(A) {
    let K = BH4(A);
    if (!K) return [];
    AXA.#A = !0;
    let q = new AXA(A, K);
    return AXA.#A = !1, q;
  }
  constructor(A, K) {
    if (!AXA.#A) throw TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new K(A), this.length = 0;
  }
  push(A) {
    this.heap[this.length++] = A;
  }
  pop() {
    return this.heap[--this.length];
  }
}
__$.AXA = AXA;

class e76 {
  yoga;
  constructor(A) {
    this.yoga = A;
  }
  insertChild(A, K) {
    this.yoga.insertChild(A.yoga, K);
  }
  removeChild(A) {
    this.yoga.removeChild(A.yoga);
  }
  getChildCount() {
    return this.yoga.getChildCount();
  }
  getParent() {
    let A = this.yoga.getParent();
    return A ? new e76(A) : null;
  }
  calculateLayout(A, K) {
    this.yoga.calculateLayout(A, void 0, X4A.LTR);
  }
  setMeasureFunc(A) {
    this.yoga.setMeasureFunc((K, q) => {
      let Y = q === VXA.Exactly ? RQ.Exactly : q === VXA.AtMost ? RQ.AtMost : RQ.Undefined;
      return A(K, Y);
    });
  }
  unsetMeasureFunc() {
    this.yoga.unsetMeasureFunc();
  }
  markDirty() {
    this.yoga.markDirty();
  }
  getComputedLeft() {
    return this.yoga.getComputedLeft();
  }
  getComputedTop() {
    return this.yoga.getComputedTop();
  }
  getComputedWidth() {
    return this.yoga.getComputedWidth();
  }
  getComputedHeight() {
    return this.yoga.getComputedHeight();
  }
  getComputedBorder(A) {
    return this.yoga.getComputedBorder(yyA[A]);
  }
  getComputedPadding(A) {
    return this.yoga.getComputedPadding(yyA[A]);
  }
  setWidth(A) {
    this.yoga.setWidth(A);
  }
  setWidthPercent(A) {
    this.yoga.setWidthPercent(A);
  }
  setWidthAuto() {
    this.yoga.setWidthAuto();
  }
  setHeight(A) {
    this.yoga.setHeight(A);
  }
  setHeightPercent(A) {
    this.yoga.setHeightPercent(A);
  }
  setHeightAuto() {
    this.yoga.setHeightAuto();
  }
  setMinWidth(A) {
    this.yoga.setMinWidth(A);
  }
  setMinWidthPercent(A) {
    this.yoga.setMinWidthPercent(A);
  }
  setMinHeight(A) {
    this.yoga.setMinHeight(A);
  }
  setMinHeightPercent(A) {
    this.yoga.setMinHeightPercent(A);
  }
  setMaxWidth(A) {
    this.yoga.setMaxWidth(A);
  }
  setMaxWidthPercent(A) {
    this.yoga.setMaxWidthPercent(A);
  }
  setMaxHeight(A) {
    this.yoga.setMaxHeight(A);
  }
  setMaxHeightPercent(A) {
    this.yoga.setMaxHeightPercent(A);
  }
  setFlexDirection(A) {
    let K = {
      row: yQ.Row,
      "row-reverse": yQ.RowReverse,
      column: yQ.Column,
      "column-reverse": yQ.ColumnReverse
    };
    this.yoga.setFlexDirection(K[A]);
  }
  setFlexGrow(A) {
    this.yoga.setFlexGrow(A);
  }
  setFlexShrink(A) {
    this.yoga.setFlexShrink(A);
  }
  setFlexBasis(A) {
    this.yoga.setFlexBasis(A);
  }
  setFlexBasisPercent(A) {
    this.yoga.setFlexBasisPercent(A);
  }
  setFlexWrap(A) {
    let K = {
      nowrap: G4A.NoWrap,
      wrap: G4A.Wrap,
      "wrap-reverse": G4A.WrapReverse
    };
    this.yoga.setFlexWrap(K[A]);
  }
  setAlignItems(A) {
    let K = {
      auto: tX.Auto,
      stretch: tX.Stretch,
      "flex-start": tX.FlexStart,
      center: tX.Center,
      "flex-end": tX.FlexEnd
    };
    this.yoga.setAlignItems(K[A]);
  }
  setAlignSelf(A) {
    let K = {
      auto: tX.Auto,
      stretch: tX.Stretch,
      "flex-start": tX.FlexStart,
      center: tX.Center,
      "flex-end": tX.FlexEnd
    };
    this.yoga.setAlignSelf(K[A]);
  }
  setJustifyContent(A) {
    let K = {
      "flex-start": vT.FlexStart,
      center: vT.Center,
      "flex-end": vT.FlexEnd,
      "space-between": vT.SpaceBetween,
      "space-around": vT.SpaceAround,
      "space-evenly": vT.SpaceEvenly
    };
    this.yoga.setJustifyContent(K[A]);
  }
  setDisplay(A) {
    this.yoga.setDisplay(A === "flex" ? $4A.Flex : $4A.None);
  }
  getDisplay() {
    return this.yoga.getDisplay() === $4A.None ? BV.None : BV.Flex;
  }
  setPositionType(A) {
    this.yoga.setPositionType(A === "absolute" ? fXA.Absolute : fXA.Relative);
  }
  setMargin(A, K) {
    this.yoga.setMargin(yyA[A], K);
  }
  setPadding(A, K) {
    this.yoga.setPadding(yyA[A], K);
  }
  setBorder(A, K) {
    this.yoga.setBorder(yyA[A], K);
  }
  setGap(A, K) {
    this.yoga.setGap(Ls3[A], K);
  }
  free() {
    this.yoga.free();
  }
  freeRecursive() {
    this.yoga.freeRecursive();
  }
}
__$.e76 = e76;

class lO4 {
  node;
  mutableStyle = {};
  measureFunc = null;
  parentAdapter = null;
  childAdapters = [];
  constructor() {
    this.node = new Sx({});
  }
  insertChild(A, K) {
    let q = A;
    q.parentAdapter = this, this.childAdapters.splice(K, 0, q), this.node.insertChild(q.node, K);
  }
  removeChild(A) {
    let K = A;
    K.parentAdapter = null;
    let q = this.childAdapters.indexOf(K);
    if (q !== -1) this.childAdapters.splice(q, 1);
    this.node.removeChild(K.node);
  }
  getChildCount() {
    return this.childAdapters.length;
  }
  getParent() {
    return this.parentAdapter;
  }
  calculateLayout(A, K) {
    this.syncStyleTree(), this.node.calculateLayout(A, void 0);
  }
  setMeasureFunc(A) {
    this.measureFunc = A;
  }
  unsetMeasureFunc() {
    this.measureFunc = null;
  }
  markDirty() {
    this.node.markDirty();
  }
  getComputedLeft() {
    let A = this.parentAdapter?.node.layout.x ?? 0;
    return this.node.layout.x - A;
  }
  getComputedTop() {
    let A = this.parentAdapter?.node.layout.y ?? 0;
    return this.node.layout.y - A;
  }
  getComputedWidth() {
    return this.node.layout.width;
  }
  getComputedHeight() {
    return this.node.layout.height;
  }
  getComputedBorder(A) {
    let K = this.mutableStyle.border;
    if (!K) return 0;
    switch (A) {
      case O3.Left:
        return K.left;
      case O3.Right:
        return K.right;
      case O3.Top:
        return K.top;
      case O3.Bottom:
        return K.bottom;
      default:
        return 0;
    }
  }
  getComputedPadding(A) {
    let K = this.mutableStyle.padding;
    if (!K) return 0;
    switch (A) {
      case O3.Left:
        return K.left;
      case O3.Right:
        return K.right;
      case O3.Top:
        return K.top;
      case O3.Bottom:
        return K.bottom;
      default:
        return 0;
    }
  }
  setWidth(A) {
    this.mutableStyle.width = KK6(A);
  }
  setWidthPercent(A) {
    this.mutableStyle.width = qK6(A);
  }
  setWidthAuto() {
    this.mutableStyle.width = void 0;
  }
  setHeight(A) {
    this.mutableStyle.height = KK6(A);
  }
  setHeightPercent(A) {
    this.mutableStyle.height = qK6(A);
  }
  setHeightAuto() {
    this.mutableStyle.height = void 0;
  }
  setMinWidth(A) {
    this.mutableStyle.minWidth = A;
  }
  setMinWidthPercent(A) {}
  setMinHeight(A) {
    this.mutableStyle.minHeight = A;
  }
  setMinHeightPercent(A) {}
  setMaxWidth(A) {
    this.mutableStyle.maxWidth = A;
  }
  setMaxWidthPercent(A) {}
  setMaxHeight(A) {
    this.mutableStyle.maxHeight = A;
  }
  setMaxHeightPercent(A) {}
  setFlexDirection(A) {
    this.mutableStyle.flexDirection = A;
  }
  setFlexGrow(A) {
    this.mutableStyle.flexGrow = A;
  }
  setFlexShrink(A) {
    this.mutableStyle.flexShrink = A;
  }
  setFlexBasis(A) {
    this.mutableStyle.flexBasis = A;
  }
  setFlexBasisPercent(A) {}
  setFlexWrap(A) {
    this.mutableStyle.flexWrap = A;
  }
  setAlignItems(A) {
    this.mutableStyle.alignItems = cO4[A];
  }
  setAlignSelf(A) {
    this.mutableStyle.alignSelf = cO4[A];
  }
  setJustifyContent(A) {
    this.mutableStyle.justifyContent = Rs3[A];
  }
  setDisplay(A) {
    this.mutableStyle.display = A;
  }
  getDisplay() {
    return this.mutableStyle.display === "none" ? BV.None : BV.Flex;
  }
  setPositionType(A) {
    this.mutableStyle.position = A;
  }
  setMargin(A, K) {
    this.mutableStyle.margin = YK6(this.mutableStyle.margin, A, K);
  }
  setPadding(A, K) {
    this.mutableStyle.padding = YK6(this.mutableStyle.padding, A, K);
  }
  setBorder(A, K) {
    this.mutableStyle.border = YK6(this.mutableStyle.border, A, K);
  }
  setGap(A, K) {
    switch (A) {
      case "all":
        this.mutableStyle.gap = K;
        break;
      case "column":
        this.mutableStyle.columnGap = K;
        break;
      case "row":
        this.mutableStyle.rowGap = K;
        break;
    }
  }
  free() {}
  freeRecursive() {}
  syncStyleTree() {
    this.syncStyle();
    for (let A of this.childAdapters) A.syncStyleTree();
  }
  syncStyle() {
    let A = this.measureFunc,
      K = A ? Y => {
        if (Y === void 0) return A(1 / 0, RQ.Undefined);
        return A(Y, RQ.AtMost);
      } : void 0,
      q = new Sx(this.mutableStyle, K);
    q.layout = this.node.layout;
    for (let Y of this.childAdapters) q.appendChild(Y.node);
    if (this.parentAdapter) {
      let Y = this.parentAdapter.node.children.indexOf(this.node);
      if (Y !== -1) this.parentAdapter.node.removeChild(this.node), this.parentAdapter.node.insertChild(q, Y);
    }
    this.node = q;
  }
}
__$.lO4 = lO4;

class C51 {
  strings = [" ", ""];
  stringMap = new Map([[" ", 0], ["", 1]]);
  ascii = Zt3();
  intern(A) {
    if (A.length === 1) {
      let Y = A.charCodeAt(0);
      if (Y < 128) {
        let z = this.ascii[Y];
        if (z !== -1) return z;
        let w = this.strings.length;
        return this.strings.push(A), this.ascii[Y] = w, w;
      }
    }
    let K = this.stringMap.get(A);
    if (K !== void 0) return K;
    let q = this.strings.length;
    return this.strings.push(A), this.stringMap.set(A, q), q;
  }
  get(A) {
    return this.strings[A] ?? " ";
  }
}
__$.C51 = C51;

class L51 {
  strings = [""];
  stringMap = new Map();
  intern(A) {
    if (!A) return 0;
    let K = this.stringMap.get(A);
    if (K === void 0) K = this.strings.length, this.strings.push(A), this.stringMap.set(A, K);
    return K;
  }
  get(A) {
    return A === 0 ? void 0 : this.strings[A];
  }
}
__$.L51 = L51;

class CK6 {
  ids = new Map();
  styles = [];
  none;
  constructor() {
    this.none = this.intern([]);
  }
  intern(A) {
    let K = A.length === 0 ? "" : A.map(Y => Y.code).join("\x00"),
      q = this.ids.get(K);
    if (q === void 0) q = this.styles.length, this.styles.push(A.length === 0 ? [] : A), this.ids.set(K, q);
    return q;
  }
  get(A) {
    return this.styles[A] ?? [];
  }
}
__$.CK6 = CK6;

class S51 {
  width;
  height;
  stylePool;
  screen;
  operations = [];
  charCache = new Map();
  constructor(A) {
    let {
      width: K,
      height: q,
      stylePool: Y,
      screen: z
    } = A;
    this.width = K, this.height = q, this.stylePool = Y, this.screen = z, b04(z, K, q);
  }
  blit(A, K) {
    this.operations.push({
      type: "blit",
      src: A,
      region: K
    });
  }
  clear(A) {
    this.operations.push({
      type: "clear",
      region: A
    });
  }
  write(A, K, q) {
    if (!q) return;
    this.operations.push({
      type: "write",
      x: A,
      y: K,
      text: q
    });
  }
  clip(A) {
    this.operations.push({
      type: "clip",
      clip: A
    });
  }
  unclip() {
    this.operations.push({
      type: "unclip"
    });
  }
  get() {
    let A = Array(this.height);
    for (let H = 0; H < this.height; H++) A[H] = Array(this.width).fill(U04);
    let K = this.screen,
      q = 0,
      Y = 0;
    for (let H of this.operations) if (H.type === "clear") {
      let {
          x: J,
          y: O,
          width: X,
          height: $
        } = H.region,
        _ = Math.min(O + $, this.height),
        G = Math.min(J + X, this.width);
      for (let Z = Math.max(0, O); Z < _; Z++) for (let W = Math.max(0, J); W < G; W++) B04(K, W, Z);
    }
    let z = [];
    for (let H of this.operations) {
      if (H.type === "clip") z.push(H.clip);
      if (H.type === "unclip") z.pop();
      if (H.type === "blit") {
        let {
            src: J,
            region: O
          } = H,
          {
            x: X,
            y: $,
            width: _,
            height: G
          } = O,
          Z = Math.min($ + G, this.height, J.height),
          W = Math.min(X + _, this.width, J.width);
        u04(K, J, X, $, W, Z), q += (Z - $) * (W - X);
      }
      if (H.type === "write") {
        let {
            text: J
          } = H,
          {
            x: O,
            y: X
          } = H,
          $ = J.split(`
`),
          _ = z.at(-1);
        if (_) {
          let Z = typeof _?.x1 === "number" && typeof _?.x2 === "number",
            W = typeof _?.y1 === "number" && typeof _?.y2 === "number";
          if (Z) {
            let D = GXA(J);
            if (O + D < _.x1 || O > _.x2) continue;
          }
          if (W) {
            let D = $.length;
            if (X + D < _.y1 || X > _.y2) continue;
          }
          if (Z) {
            if ($ = $.map(D => {
              let j = O < _.x1 ? _.x1 - O : 0,
                M = j7(D),
                P = O + M > _.x2 ? _.x2 - O : M;
              return myA(D, j, P);
            }), O < _.x1) O = _.x1;
          }
          if (W) {
            let D = X < _.y1 ? _.y1 - X : 0,
              j = $.length,
              M = X + j > _.y2 ? _.y2 - X : j;
            if ($ = $.slice(D, M), X < _.y1) X = _.y1;
          }
        }
        let G = 0;
        for (let Z of $) {
          let W = A[X + G];
          if (!W) continue;
          let D = this.charCache.get(Z);
          if (!D) D = ft3(E04(NXA(Z))), this.charCache.set(Z, D);
          let j = O;
          for (let M = 0; M < D.length; M++) {
            let P = D[M],
              f = P.value.codePointAt(0);
            if (f !== void 0 && f <= 31) {
              if (f === 9) {
                let y = 8 - j % 8;
                for (let B = 0; B < y && j < this.width; B++) W[j] = U04, I51(K, j, X + G, {
                  char: " ",
                  styleId: this.stylePool.none,
                  width: 0,
                  hyperlink: void 0
                }), j++;
              } else if (f === 27) {
                let x = D[M + 1]?.value,
                  y = x?.codePointAt(0);
                if (x === "(" || x === ")" || x === "*" || x === "+") M += 2;else if (x === "[") {
                  M++;
                  while (M < D.length - 1) {
                    M++;
                    let B = D[M]?.value.codePointAt(0);
                    if (B !== void 0 && B >= 64 && B <= 126) break;
                  }
                } else if (x === "]" || x === "P" || x === "_" || x === "^" || x === "X") {
                  M++;
                  while (M < D.length - 1) {
                    M++;
                    let B = D[M]?.value;
                    if (B === "\x07") break;
                    if (B === "\x1B") {
                      if (D[M + 1]?.value === "\\") {
                        M++;
                        break;
                      }
                    }
                  }
                } else if (y !== void 0 && y >= 48 && y <= 126) M++;
              }
              continue;
            }
            let N = j7(P.value);
            if (N === 0) continue;
            let T = N >= 2;
            if (T && j + 2 > this.width) {
              j++;
              continue;
            }
            W[j] = P;
            let C = F04(P.styles),
              R = C ? Q04(P.styles) : P.styles;
            if (I51(K, j, X + G, {
              char: P.value,
              styleId: this.stylePool.intern(R),
              width: T ? 1 : 0,
              hyperlink: C ?? void 0
            }), Y++, T) W[j + 1] = {
              type: "char",
              value: "",
              fullWidth: !1,
              styles: P.styles
            };
            j += T ? 2 : 1;
          }
          G++;
        }
      }
    }
    let w = q + Y;
    if (w > 1000 && Y > q) h(`High write ratio: blit=${q}, write=${Y} (${(Y / w * 100).toFixed(1)}% writes), screen=${this.height}x${this.width}`);
    return K;
  }
}
__$.S51 = S51;

class bK6 {
  options;
  state;
  constructor(A) {
    this.options = A;
    this.state = {
      previousOutput: ""
    };
  }
  renderPreviousOutput_DEPRECATED(A) {
    if (!this.options.isTTY) return [{
      type: "stdout",
      content: `
`
    }];else if (!this.options.debug) return this.getRenderOpsForDone(A);
    return [];
  }
  reset() {
    this.state.previousOutput = "";
  }
  getRenderOpsDebug(A) {
    let {
        screen: K
      } = A,
      q = [],
      Y = [];
    for (let z = 0; z < K.height; z++) {
      let w = "";
      for (let J = 0; J < K.width; J++) {
        let O = RK6(K, J, z);
        if (O && O.width !== 2) {
          let X = this.options.stylePool.get(O.styleId),
            $ = bx(Y, X);
          if ($.length > 0) w += ET($), Y = X;
          w += O.char;
        }
      }
      let H = bx(Y, []);
      if (H.length > 0) w += ET(H), Y = [];
      q.push(w.trimEnd());
    }
    if (q.length === 0) return [];
    return [{
      type: "stdout",
      content: q.join(`
`)
    }];
  }
  getRenderOpsForDone(A) {
    if (this.state.previousOutput = "", !A.cursor.visible) return [{
      type: "cursorShow"
    }];
    return [];
  }
  render(A, K) {
    if (this.options.debug) return this.getRenderOpsDebug(K);
    let q = performance.now();
    if (K.screen.height === 0 || K.screen.width === 0) {
      if (A.screen.height > 0) return kXA(K, "clear", this.options.stylePool);
      return [];
    }
    if (K.viewport.height < A.viewport.height || A.viewport.width !== 0 && K.viewport.width !== A.viewport.width) return kXA(K, "resize", this.options.stylePool);
    let Y = A.cursor.y >= A.screen.height,
      z = K.screen.height > A.screen.height,
      w = A.screen.height > A.viewport.height,
      H = K.screen.height < A.viewport.height;
    if (w && H && !z) return h(`Full reset (shrink->below): prevHeight=${A.screen.height}, nextHeight=${K.screen.height}, viewport=${A.viewport.height}`), kXA(K, "offscreen", this.options.stylePool);
    if (A.screen.height >= A.viewport.height && A.screen.height > 0 && Y && !z) {
      let M = A.screen.height - A.viewport.height + 1,
        P = -1;
      if (IK6(A.screen, K.screen, (f, N) => {
        if (N < M) return P = N, !0;
      }), P >= 0) {
        let f = "";
        for (let T = 0; T < A.screen.width; T++) f += yK6(A.screen, T, P) ?? " ";
        let N = "";
        for (let T = 0; T < K.screen.width; T++) N += yK6(K.screen, T, P) ?? " ";
        return h(`Full reset (scrollback changes): scrollbackRows=${M}, firstChangeY=${P}
  prev: "${f}"
  next: "${N}"`), kXA(K, "offscreen", this.options.stylePool);
      }
    }
    let J = new xK6(A.cursor, K.viewport.width),
      O = Math.max(K.screen.height, 1) - Math.max(A.screen.height, 1),
      X = O < 0,
      $ = O > 0;
    if (X) {
      let j = A.screen.height - K.screen.height;
      if (j > A.viewport.height) return kXA(K, "offscreen", this.options.stylePool);
      J.txn(M => [[{
        type: "clear",
        count: j
      }, {
        type: "cursorMove",
        x: 0,
        y: -1
      }], {
        dx: -M.x,
        dy: -j
      }]);
    }
    let _ = $ ? Math.max(0, A.screen.height - A.viewport.height) : Math.max(A.screen.height, K.screen.height) - K.viewport.height,
      G = [],
      Z = void 0,
      W = !1;
    if (IK6(A.screen, K.screen, (j, M, P, f) => {
      if ($ && M >= A.screen.height) return;
      if (f && (f.width === 2 || f.width === 3)) return;
      if (P && (P.width === 2 || P.width === 3) && !f) return;
      if (f && h04(K.screen, j, M) && !P) return;
      if (M < _) return W = !0, !0;
      if (hK6(J, j, M), f) {
        let N = f.hyperlink;
        Z = l04(J.diff, Z, N);
        let T = this.options.stylePool.get(f.styleId),
          C = bx(G, T);
        n04(J, f, C), G = T;
      } else if (P) {
        let N = G,
          T = Z;
        G = [], Z = void 0, J.txn(() => {
          let C = [];
          if (N.length > 0) {
            let R = bx(N, []);
            if (R.length > 0) C.push({
              type: "style",
              codes: R
            });
          }
          if (T !== void 0) C.push({
            type: "hyperlink",
            uri: ""
          });
          return C.push({
            type: "stdout",
            content: " "
          }), [C, {
            dx: 1,
            dy: 0
          }];
        });
      }
    }), W) return kXA(K, "offscreen", this.options.stylePool);
    if (G.length > 0) {
      let j = bx(G, []);
      if (j.length > 0) J.diff.push({
        type: "style",
        codes: j
      });
      G = [];
    }
    if (Z !== void 0) J.diff.push({
      type: "hyperlink",
      uri: ""
    }), Z = void 0;
    if ($) i04(J, K, A.screen.height, K.screen.height, this.options.stylePool);
    if (K.cursor.y >= K.screen.height) J.txn(j => {
      let M = K.cursor.y - j.y;
      if (M > 0) {
        let f = [{
          type: "carriageReturn"
        }];
        for (let N = 0; N < M; N++) f.push({
          type: "stdout",
          content: `
`
        });
        return [f, {
          dx: -j.x,
          dy: M
        }];
      }
      let P = K.cursor.y - j.y;
      if (P !== 0 || j.x !== K.cursor.x) return [[{
        type: "carriageReturn"
      }, {
        type: "cursorMove",
        x: K.cursor.x,
        y: P
      }], {
        dx: K.cursor.x - j.x,
        dy: P
      }];
      return [[], {
        dx: 0,
        dy: 0
      }];
    });else hK6(J, K.cursor.x, K.cursor.y);
    let D = performance.now() - q;
    if (D > 50) {
      let j = K.screen.damage,
        M = j ? `${j.width}x${j.height} at (${j.x},${j.y})` : "none";
      h(`Slow render: ${D.toFixed(1)}ms, screen: ${K.screen.height}x${K.screen.width}, damage: ${M}, changes: ${J.diff.length}`);
    }
    return J.diff;
  }
}
__$.bK6 = bK6;

class xK6 {
  viewportWidth;
  cursor;
  diff = [];
  constructor(A, K) {
    this.viewportWidth = K;
    this.cursor = {
      ...A
    };
  }
  txn(A) {
    let [K, q] = A(this.cursor);
    for (let Y of K) this.diff.push(Y);
    this.cursor = {
      x: this.cursor.x + q.dx,
      y: this.cursor.y + q.dy
    };
  }
}
__$.xK6 = xK6;

class Gr {
  _didStopImmediatePropagation = !1;
  didStopImmediatePropagation() {
    return this._didStopImmediatePropagation;
  }
  stopImmediatePropagation() {
    this._didStopImmediatePropagation = !0;
  }
}
__$.Gr = Gr;

class f31 {
  options;
  log;
  terminal;
  scheduleRender;
  isUnmounted = !1;
  isPaused = !1;
  container;
  rootNode;
  renderer;
  stylePool;
  charPool;
  hyperlinkPool;
  exitPromise;
  restoreConsole;
  unsubscribeTTYHandlers;
  terminalColumns;
  terminalRows;
  currentNode = null;
  frontFrame;
  backFrame;
  lastPoolResetTime = performance.now();
  constructor(A) {
    this.options = A;
    if (j76(this), this.options.patchConsole) this.restoreConsole = this.patchConsole();
    if (this.terminal = {
      stdout: A.stdout,
      stderr: A.stderr
    }, this.terminalColumns = A.stdout.columns || 80, this.terminalRows = A.stdout.rows || 24, this.stylePool = new CK6(), this.charPool = new C51(), this.hyperlinkPool = new L51(), this.frontFrame = Dr(this.terminalRows, this.terminalColumns, this.stylePool, this.charPool, this.hyperlinkPool), this.backFrame = Dr(this.terminalRows, this.terminalColumns, this.stylePool, this.charPool, this.hyperlinkPool), this.log = new bK6({
      debug: A.debug,
      isTTY: A.stdout.isTTY || !1,
      stylePool: this.stylePool
    }), this.scheduleRender = A.debug ? this.onRender : D76(this.onRender, 32, {
      leading: !0,
      trailing: !0
    }), this.isUnmounted = !1, this.unsubscribeExit = _rA(this.unmount, {
      alwaysLast: !1
    }), A.stdout.isTTY) A.stdout.on("resize", this.handleResize), process.on("SIGCONT", this.handleResume), this.unsubscribeTTYHandlers = () => {
      A.stdout.off("resize", this.handleResize), process.off("SIGCONT", this.handleResume);
    };
    this.rootNode = P51("ink-root"), this.renderer = SK6(this.rootNode, this.stylePool), this.rootNode.onRender = this.scheduleRender, this.rootNode.onImmediateRender = this.onRender, this.rootNode.onComputeLayout = () => {
      if (this.isUnmounted) return;
      if (this.rootNode.yogaNode) this.rootNode.yogaNode.setWidth(this.terminalColumns), this.rootNode.yogaNode.calculateLayout(this.terminalColumns);
    }, this.container = $r.createContainer(this.rootNode, 0, null, !1, null, "id", ig, ig, ig, ig);
  }
  handleResume = () => {
    if (!this.options.stdout.isTTY) return;
    this.frontFrame = Dr(this.frontFrame.viewport.height, this.frontFrame.viewport.width, this.stylePool, this.charPool, this.hyperlinkPool), this.backFrame = Dr(this.backFrame.viewport.height, this.backFrame.viewport.width, this.stylePool, this.charPool, this.hyperlinkPool), this.log.reset();
  };
  handleResize = () => {
    if (this.terminalColumns = this.options.stdout.columns || 80, this.terminalRows = this.options.stdout.rows || 24, this.currentNode !== null) this.render(this.currentNode);
  };
  resolveExitPromise = () => {};
  rejectExitPromise = () => {};
  unsubscribeExit = () => {};
  setTheme(A) {
    this.options.theme = A;
  }
  handleThemeChange = A => {
    this.setTheme(A);
  };
  handleThemeSave = A => {
    l7("theme"), D6(K => ({
      ...K,
      theme: A
    }));
  };
  onRender() {
    if (this.isUnmounted || this.isPaused) return;
    let A = performance.now(),
      K = this.options.stdout.columns || 80,
      q = this.options.stdout.rows || 24,
      Y = this.renderer({
        frontFrame: this.frontFrame,
        backFrame: this.backFrame,
        isTTY: this.options.stdout.isTTY,
        terminalWidth: K,
        terminalRows: q
      }),
      z = this.log.render(this.frontFrame, Y);
    if (this.backFrame = this.frontFrame, this.frontFrame = Y, A - this.lastPoolResetTime > 300000) this.resetPools(), this.lastPoolResetTime = A;
    let w = [];
    for (let H of z) if (H.type === "clearTerminal") w.push({
      desiredHeight: Y.screen.height,
      availableHeight: Y.viewport.height,
      reason: H.reason
    });
    Xq6(this.terminal, $q6(z)), this.options.onFrame?.({
      durationMs: performance.now() - A,
      flickers: w
    });
  }
  pause() {
    $r.flushSyncFromReconciler(), this.onRender(), this.isPaused = !0;
  }
  resume() {
    this.isPaused = !1, this.onRender();
  }
  repaint() {
    this.frontFrame = Dr(this.frontFrame.viewport.height, this.frontFrame.viewport.width, this.stylePool, this.charPool, this.hyperlinkPool), this.backFrame = Dr(this.backFrame.viewport.height, this.backFrame.viewport.width, this.stylePool, this.charPool, this.hyperlinkPool), this.log.reset();
  }
  stdinListeners = [];
  wasRawMode = !1;
  suspendStdin() {
    let A = this.options.stdin;
    if (!A.isTTY) return;
    A.listeners("readable").forEach(Y => {
      this.stdinListeners.push({
        event: "readable",
        listener: Y
      }), A.removeListener("readable", Y);
    });
    let q = A;
    if (q.isRaw && q.setRawMode) q.setRawMode(!1), this.wasRawMode = !0;
  }
  resumeStdin() {
    let A = this.options.stdin;
    if (!A.isTTY) return;
    if (this.stdinListeners.forEach(({
      event: K,
      listener: q
    }) => {
      A.addListener(K, q);
    }), this.stdinListeners = [], this.wasRawMode) {
      let K = A;
      if (K.setRawMode) K.setRawMode(!0);
      this.wasRawMode = !1;
    }
  }
  render(A) {
    this.currentNode = A;
    let K = Mq6.default.createElement(d51, {
      initialTheme: this.options.theme,
      stdin: this.options.stdin,
      stdout: this.options.stdout,
      stderr: this.options.stderr,
      exitOnCtrlC: this.options.exitOnCtrlC,
      onExit: this.unmount,
      terminalColumns: this.terminalColumns,
      terminalRows: this.terminalRows,
      onThemeChange: this.handleThemeChange,
      onThemeSave: this.handleThemeSave
    }, Mq6.default.createElement(S_4, {
      value: q => this.options.stdout.write(q)
    }, A));
    $r.updateContainer(K, this.container, null, ig);
  }
  unmount(A) {
    if (this.isUnmounted) return;
    if (this.onRender(), this.unsubscribeExit(), typeof this.restoreConsole === "function") this.restoreConsole();
    this.unsubscribeTTYHandlers?.();
    let K = this.log.renderPreviousOutput_DEPRECATED(this.frontFrame);
    if (Xq6(this.terminal, $q6(K)), this.options.stdout.isTTY) YIA(1, DXA), YIA(1, M4A), YIA(1, IXA), YIA(1, Iy), YIA(1, c51);
    if (this.isUnmounted = !0, this.scheduleRender.cancel?.(), $r.updateContainer(null, this.container, null, ig), $r.flushPassiveEffects(), yy.delete(this.options.stdout), A instanceof Error) this.rejectExitPromise(A);else this.resolveExitPromise();
  }
  async waitUntilExit() {
    return this.exitPromise ||= new Promise((A, K) => {
      this.resolveExitPromise = A, this.rejectExitPromise = K;
    }), this.exitPromise;
  }
  resetLineCount() {
    if (this.options.stdout.isTTY && !this.options.debug) this.backFrame = this.frontFrame, this.frontFrame = Dr(this.frontFrame.viewport.height, this.frontFrame.viewport.width, this.stylePool, this.charPool, this.hyperlinkPool), this.log.reset();
  }
  resetPools() {
    this.charPool = new C51(), this.hyperlinkPool = new L51(), x04(this.frontFrame.screen, this.charPool, this.hyperlinkPool), this.backFrame.screen.charPool = this.charPool, this.backFrame.screen.hyperlinkPool = this.hyperlinkPool;
  }
  patchConsole() {
    if (this.options.debug) return;
    return LJ4((A, K) => {
      if (A === "stdout") h(`console.log: ${K}`);
      if (A === "stderr") KA(Error(`console.error: ${K}`));
    });
  }
}
__$.f31 = f31;

class v31 {
  tokenizer = jXA();
  style = gXA();
  inLink = !1;
  linkUrl;
  reset() {
    this.tokenizer.reset(), this.style = gXA(), this.inLink = !1, this.linkUrl = void 0;
  }
  feed(A) {
    let K = this.tokenizer.feed(A),
      q = [];
    for (let Y of K) {
      let z = this.processToken(Y);
      q.push(...z);
    }
    return q;
  }
  processToken(A) {
    switch (A.type) {
      case "text":
        return this.processText(A.value);
      case "sequence":
        return this.processSequence(A.value);
    }
  }
  processText(A) {
    let K = [],
      q = "";
    for (let Y of A) if (Y.charCodeAt(0) === yx.BEL) {
      if (q) {
        let z = [...jG4(q)];
        if (z.length > 0) K.push({
          type: "text",
          graphemes: z,
          style: {
            ...this.style
          }
        });
        q = "";
      }
      K.push({
        type: "bell"
      });
    } else q += Y;
    if (q) {
      let Y = [...jG4(q)];
      if (Y.length > 0) K.push({
        type: "text",
        graphemes: Y,
        style: {
          ...this.style
        }
      });
    }
    return K;
  }
  processSequence(A) {
    switch (i69(A)) {
      case "csi":
        {
          let q = l69(A);
          if (!q) return [];
          if (q.type === "sgr") return this.style = GG4(q.params, this.style), [];
          return [q];
        }
      case "osc":
        {
          let q = A.slice(2);
          if (q.endsWith("\x07")) q = q.slice(0, -1);else if (q.endsWith("\x1B\\")) q = q.slice(0, -2);
          let Y = mX4(q);
          if (Y) {
            if (Y.type === "link") if (Y.action.type === "start") this.inLink = !0, this.linkUrl = Y.action.url;else this.inLink = !1, this.linkUrl = void 0;
            return [Y];
          }
          return [];
        }
      case "esc":
        {
          let q = A.slice(1),
            Y = _G4(q);
          return Y ? [Y] : [];
        }
      case "ss3":
        return [{
          type: "unknown",
          sequence: A
        }];
      default:
        return [{
          type: "unknown",
          sequence: A
        }];
    }
  }
}
__$.v31 = v31;

class pq {
  measuredText;
  selection;
  offset;
  constructor(A, K = 0, q = 0) {
    this.measuredText = A;
    this.selection = q;
    this.offset = Math.max(0, Math.min(this.text.length, K));
  }
  static fromText(A, K, q = 0, Y = 0) {
    return new pq(new cG4(A, K - 1), q, Y);
  }
  render(A, K, q, Y) {
    let {
      line: z,
      column: w
    } = this.getPosition();
    return this.measuredText.getWrappedText().map((H, J, O) => {
      let X = H;
      if (K && J === O.length - 1) {
        let M = Math.max(0, H.length - 6);
        X = K.repeat(M) + H.slice(M);
      }
      if (z !== J) return X.trimEnd();
      let $ = this.measuredText.displayWidthToStringIndex(X, w),
        _ = Array.from(Rq6.segment(X)).map(({
          segment: M,
          index: P
        }) => ({
          segment: M,
          index: P
        })),
        G = "",
        Z = A,
        W = "";
      for (let {
        segment: M,
        index: P
      } of _) {
        let f = P + M.length;
        if (f <= $) G += M;else if (P < $ && f > $) Z = M;else if (P === $) Z = M;else W += M;
      }
      let D,
        j = "";
      if (Y && J === O.length - 1 && this.isAtEnd() && Y.text.length > 0) {
        let M = Y.text[0];
        if (D = A ? q(M) : M, Y.text.length > 1) j = Y.dim(Y.text.slice(1));
      } else D = A ? q(Z) : Z;
      return G + D + j + W.trimEnd();
    }).join(`
`);
  }
  left() {
    if (this.offset === 0) return this;
    let A = this.measuredText.prevOffset(this.offset);
    return new pq(this.measuredText, A);
  }
  right() {
    if (this.offset >= this.text.length) return this;
    let A = this.measuredText.nextOffset(this.offset);
    return new pq(this.measuredText, Math.min(A, this.text.length));
  }
  up() {
    let {
      line: A,
      column: K
    } = this.getPosition();
    if (A === 0) return this;
    let q = this.measuredText.getWrappedText()[A - 1];
    if (!q) return this;
    let Y = j7(q);
    if (K > Y) {
      let w = this.getOffset({
        line: A - 1,
        column: Y
      });
      return new pq(this.measuredText, w, 0);
    }
    let z = this.getOffset({
      line: A - 1,
      column: K
    });
    return new pq(this.measuredText, z, 0);
  }
  down() {
    let {
      line: A,
      column: K
    } = this.getPosition();
    if (A >= this.measuredText.lineCount - 1) return this;
    let q = this.measuredText.getWrappedText()[A + 1];
    if (!q) return this;
    let Y = j7(q);
    if (K > Y) {
      let w = this.getOffset({
        line: A + 1,
        column: Y
      });
      return new pq(this.measuredText, w, 0);
    }
    let z = this.getOffset({
      line: A + 1,
      column: K
    });
    return new pq(this.measuredText, z, 0);
  }
  startOfCurrentLine() {
    let {
      line: A
    } = this.getPosition();
    return new pq(this.measuredText, this.getOffset({
      line: A,
      column: 0
    }), 0);
  }
  startOfLine() {
    let {
      line: A,
      column: K
    } = this.getPosition();
    if (K === 0 && A > 0) return new pq(this.measuredText, this.getOffset({
      line: A - 1,
      column: 0
    }), 0);
    return this.startOfCurrentLine();
  }
  firstNonBlankInLine() {
    let {
        line: A
      } = this.getPosition(),
      q = (this.measuredText.getWrappedText()[A] || "").match(/^\s*\S/),
      Y = q?.index ? q.index + q[0].length - 1 : 0,
      z = this.getOffset({
        line: A,
        column: Y
      });
    return new pq(this.measuredText, z, 0);
  }
  endOfLine() {
    let {
        line: A
      } = this.getPosition(),
      K = this.measuredText.getLineLength(A),
      q = this.getOffset({
        line: A,
        column: K
      });
    return new pq(this.measuredText, q, 0);
  }
  findLogicalLineStart(A = this.offset) {
    let K = this.text.lastIndexOf(`
`, A - 1);
    return K === -1 ? 0 : K + 1;
  }
  findLogicalLineEnd(A = this.offset) {
    let K = this.text.indexOf(`
`, A);
    return K === -1 ? this.text.length : K;
  }
  getLogicalLineBounds() {
    return {
      start: this.findLogicalLineStart(),
      end: this.findLogicalLineEnd()
    };
  }
  createCursorWithColumn(A, K, q) {
    let Y = K - A,
      z = Math.min(q, Y);
    return new pq(this.measuredText, A + z, 0);
  }
  endOfLogicalLine() {
    return new pq(this.measuredText, this.findLogicalLineEnd(), 0);
  }
  startOfLogicalLine() {
    return new pq(this.measuredText, this.findLogicalLineStart(), 0);
  }
  firstNonBlankInLogicalLine() {
    let {
        start: A,
        end: K
      } = this.getLogicalLineBounds(),
      Y = this.text.slice(A, K).match(/\S/),
      z = A + (Y?.index ?? 0);
    return new pq(this.measuredText, z, 0);
  }
  upLogicalLine() {
    let {
      start: A
    } = this.getLogicalLineBounds();
    if (A === 0) return new pq(this.measuredText, 0, 0);
    let K = this.offset - A,
      q = A - 1,
      Y = this.findLogicalLineStart(q);
    return this.createCursorWithColumn(Y, q, K);
  }
  downLogicalLine() {
    let {
      start: A,
      end: K
    } = this.getLogicalLineBounds();
    if (K >= this.text.length) return new pq(this.measuredText, this.text.length, 0);
    let q = this.offset - A,
      Y = K + 1,
      z = this.findLogicalLineEnd(Y);
    return this.createCursorWithColumn(Y, z, q);
  }
  nextWord() {
    if (this.isAtEnd()) return this;
    let A = this.measuredText.getWordBoundaries();
    for (let K of A) if (K.isWordLike && K.start > this.offset) return new pq(this.measuredText, K.start);
    return new pq(this.measuredText, this.text.length);
  }
  endOfWord() {
    if (this.isAtEnd()) return this;
    let A = this.measuredText.getWordBoundaries();
    for (let K of A) {
      if (!K.isWordLike) continue;
      if (this.offset >= K.start && this.offset < K.end - 1) return new pq(this.measuredText, K.end - 1);
      if (this.offset === K.end - 1) {
        for (let q of A) if (q.isWordLike && q.start > this.offset) return new pq(this.measuredText, q.end - 1);
        return this;
      }
    }
    for (let K of A) if (K.isWordLike && K.start > this.offset) return new pq(this.measuredText, K.end - 1);
    return this;
  }
  prevWord() {
    if (this.isAtStart()) return this;
    let A = this.measuredText.getWordBoundaries(),
      K = null;
    for (let q of A) {
      if (!q.isWordLike) continue;
      if (q.start < this.offset) {
        if (this.offset > q.start && this.offset <= q.end) return new pq(this.measuredText, q.start);
        K = q.start;
      }
    }
    if (K !== null) return new pq(this.measuredText, K);
    return new pq(this.measuredText, 0);
  }
  nextVimWord() {
    if (this.isAtEnd()) return this;
    let A = this.text,
      K = this.offset,
      q = A[K];
    if (q === void 0) return this;
    if (hQ(q)) while (K < A.length && hQ(A[K])) K++;else if (vr(q)) while (K < A.length && vr(A[K])) K++;
    while (K < A.length && JIA.test(A[K])) K++;
    return new pq(this.measuredText, K);
  }
  endOfVimWord() {
    if (this.isAtEnd()) return this;
    let A = this.text,
      K = this.offset;
    if (A[K] === void 0) return this;
    K++;
    while (K < A.length && JIA.test(A[K])) K++;
    if (K >= A.length) return new pq(this.measuredText, A.length);
    let Y = A[K];
    if (hQ(Y)) while (K < A.length - 1 && hQ(A[K + 1])) K++;else if (vr(Y)) while (K < A.length - 1 && vr(A[K + 1])) K++;
    return new pq(this.measuredText, K);
  }
  prevVimWord() {
    if (this.isAtStart()) return this;
    let A = this.text,
      K = this.offset;
    K--;
    while (K > 0 && JIA.test(A[K])) K--;
    if (K === 0 && JIA.test(A[0])) return new pq(this.measuredText, 0);
    let q = A[K];
    if (hQ(q)) while (K > 0 && hQ(A[K - 1])) K--;else if (vr(q)) while (K > 0 && vr(A[K - 1])) K--;
    return new pq(this.measuredText, K);
  }
  nextWORD() {
    let A = this;
    while (!A.isOverWhitespace() && !A.isAtEnd()) A = A.right();
    while (A.isOverWhitespace() && !A.isAtEnd()) A = A.right();
    return A;
  }
  endOfWORD() {
    if (this.isAtEnd()) return this;
    let A = this;
    if (!A.isOverWhitespace() && (A.right().isOverWhitespace() || A.right().isAtEnd())) return A = A.right(), A.endOfWORD();
    if (A.isOverWhitespace()) A = A.nextWORD();
    while (!A.right().isOverWhitespace() && !A.isAtEnd()) A = A.right();
    return A;
  }
  prevWORD() {
    let A = this;
    if (A.left().isOverWhitespace()) A = A.left();
    while (A.isOverWhitespace() && !A.isAtStart()) A = A.left();
    if (!A.isOverWhitespace()) while (!A.left().isOverWhitespace() && !A.isAtStart()) A = A.left();
    return A;
  }
  modifyText(A, K = "") {
    let q = this.offset,
      Y = A.offset,
      z = this.text.slice(0, q) + K + this.text.slice(Y);
    return pq.fromText(z, this.columns, q + K.normalize("NFC").length);
  }
  insert(A) {
    return this.modifyText(this, A);
  }
  del() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.right());
  }
  backspace() {
    if (this.isAtStart()) return this;
    return this.left().modifyText(this);
  }
  deleteToLineStart() {
    let A = this.startOfCurrentLine(),
      K = this.text.slice(A.offset, this.offset);
    return {
      cursor: A.modifyText(this),
      killed: K
    };
  }
  deleteToLineEnd() {
    if (this.text[this.offset] === `
`) return {
      cursor: this.modifyText(this.right()),
      killed: `
`
    };
    let A = this.endOfLine(),
      K = this.text.slice(this.offset, A.offset);
    return {
      cursor: this.modifyText(A),
      killed: K
    };
  }
  deleteToLogicalLineEnd() {
    if (this.text[this.offset] === `
`) return this.modifyText(this.right());
    return this.modifyText(this.endOfLogicalLine());
  }
  deleteWordBefore() {
    if (this.isAtStart()) return {
      cursor: this,
      killed: ""
    };
    let A = this.prevWord(),
      K = this.text.slice(A.offset, this.offset);
    return {
      cursor: A.modifyText(this),
      killed: K
    };
  }
  deleteTokenBefore() {
    if (this.isAtStart()) return null;
    let A = this.text[this.offset];
    if (A !== void 0 && !/\s/.test(A)) return null;
    let q = this.text.slice(0, this.offset).match(/(^|\s)\[(Pasted text #\d+(?: \+\d+ lines)?|\.\.\.Truncated text #\d+ \+\d+ lines\.\.\.)\]$/);
    if (q) {
      let Y = q.index + q[1].length;
      return new pq(this.measuredText, Y).modifyText(this);
    }
    return null;
  }
  deleteWordAfter() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.nextWord());
  }
  isOverWhitespace() {
    let A = this.text[this.offset] ?? "";
    return /\s/.test(A);
  }
  equals(A) {
    return this.offset === A.offset && this.measuredText === A.measuredText;
  }
  isAtStart() {
    return this.offset === 0;
  }
  isAtEnd() {
    return this.offset >= this.text.length;
  }
  startOfFirstLine() {
    return new pq(this.measuredText, 0, 0);
  }
  startOfLastLine() {
    let A = this.text.lastIndexOf(`
`);
    if (A === -1) return this.startOfLine();
    return new pq(this.measuredText, A + 1, 0);
  }
  goToLine(A) {
    let K = this.text.split(`
`),
      q = Math.min(Math.max(0, A - 1), K.length - 1),
      Y = 0;
    for (let z = 0; z < q; z++) Y += (K[z]?.length ?? 0) + 1;
    return new pq(this.measuredText, Y, 0);
  }
  endOfFile() {
    return new pq(this.measuredText, this.text.length, 0);
  }
  get text() {
    return this.measuredText.text;
  }
  get columns() {
    return this.measuredText.columns + 1;
  }
  getPosition() {
    return this.measuredText.getPositionFromOffset(this.offset);
  }
  getOffset(A) {
    return this.measuredText.getOffsetFromPosition(A);
  }
  findCharacter(A, K, q = 1) {
    let Y = this.text,
      z = K === "f" || K === "t",
      w = K === "t" || K === "T",
      H = 0;
    if (z) {
      for (let J = this.offset + 1; J < Y.length; J++) if (Y[J] === A) {
        if (H++, H === q) return w ? Math.max(this.offset, J - 1) : J;
      }
    } else for (let J = this.offset - 1; J >= 0; J--) if (Y[J] === A) {
      if (H++, H === q) return w ? Math.min(this.offset, J + 1) : J;
    }
    return null;
  }
}
__$.pq = pq;

class R31 {
  text;
  startOffset;
  isPrecededByNewline;
  endsWithNewline;
  constructor(A, K, q, Y = !1) {
    this.text = A;
    this.startOffset = K;
    this.isPrecededByNewline = q;
    this.endsWithNewline = Y;
  }
  equals(A) {
    return this.text === A.text && this.startOffset === A.startOffset;
  }
  get length() {
    return this.text.length + (this.endsWithNewline ? 1 : 0);
  }
}
__$.R31 = R31;

class cG4 {
  columns;
  _wrappedLines;
  text;
  navigationCache;
  graphemeBoundaries;
  constructor(A, K) {
    this.columns = K;
    this.text = A.normalize("NFC"), this.navigationCache = new Map();
  }
  get wrappedLines() {
    if (!this._wrappedLines) this._wrappedLines = this.measureWrappedText();
    return this._wrappedLines;
  }
  getGraphemeBoundaries() {
    if (!this.graphemeBoundaries) {
      this.graphemeBoundaries = [];
      for (let {
        index: A
      } of Rq6.segment(this.text)) this.graphemeBoundaries.push(A);
      this.graphemeBoundaries.push(this.text.length);
    }
    return this.graphemeBoundaries;
  }
  wordBoundariesCache;
  getWordBoundaries() {
    if (!this.wordBoundariesCache) {
      this.wordBoundariesCache = [];
      for (let A of v89.segment(this.text)) this.wordBoundariesCache.push({
        start: A.index,
        end: A.index + A.segment.length,
        isWordLike: A.isWordLike ?? !1
      });
    }
    return this.wordBoundariesCache;
  }
  binarySearchBoundary(A, K, q) {
    let Y = 0,
      z = A.length - 1,
      w = q ? this.text.length : 0;
    while (Y <= z) {
      let H = Math.floor((Y + z) / 2),
        J = A[H];
      if (J === void 0) break;
      if (q) {
        if (J > K) w = J, z = H - 1;else Y = H + 1;
      } else if (J < K) w = J, Y = H + 1;else z = H - 1;
    }
    return w;
  }
  stringIndexToDisplayWidth(A, K) {
    if (K <= 0) return 0;
    if (K >= A.length) return j7(A);
    return j7(A.substring(0, K));
  }
  displayWidthToStringIndex(A, K) {
    if (K <= 0) return 0;
    if (!A) return 0;
    if (A === this.text) return this.offsetAtDisplayWidth(K);
    let q = 0,
      Y = 0;
    for (let {
      segment: z,
      index: w
    } of Rq6.segment(A)) {
      let H = j7(z);
      if (q + H > K) break;
      q += H, Y = w + z.length;
    }
    return Y;
  }
  offsetAtDisplayWidth(A) {
    if (A <= 0) return 0;
    let K = 0,
      q = this.getGraphemeBoundaries();
    for (let Y = 0; Y < q.length - 1; Y++) {
      let z = q[Y],
        w = q[Y + 1];
      if (z === void 0 || w === void 0) continue;
      let H = this.text.substring(z, w),
        J = j7(H);
      if (K + J > A) return z;
      K += J;
    }
    return this.text.length;
  }
  measureWrappedText() {
    let A = zr(this.text, this.columns, {
        hard: !0,
        trim: !1
      }),
      K = [],
      q = 0,
      Y = -1,
      z = A.split(`
`);
    for (let w = 0; w < z.length; w++) {
      let H = z[w],
        J = O => w === 0 || O > 0 && this.text[O - 1] === `
`;
      if (H.length === 0) {
        if (Y = this.text.indexOf(`
`, Y + 1), Y !== -1) {
          let O = Y,
            X = !0;
          K.push(new R31(H, O, J(O), !0));
        } else {
          let O = this.text.length;
          K.push(new R31(H, O, J(O), !1));
        }
      } else {
        let O = this.text.indexOf(H, q);
        if (O === -1) throw Error("Failed to find wrapped line in text");
        q = O + H.length;
        let X = O + H.length,
          $ = X < this.text.length && this.text[X] === `
`;
        if ($) Y = X;
        K.push(new R31(H, O, J(O), $));
      }
    }
    return K;
  }
  getWrappedText() {
    return this.wrappedLines.map(A => A.isPrecededByNewline ? A.text : A.text.trimStart());
  }
  getWrappedLines() {
    return this.wrappedLines;
  }
  getLine(A) {
    let K = this.wrappedLines;
    return K[Math.max(0, Math.min(A, K.length - 1))];
  }
  getOffsetFromPosition(A) {
    let K = this.getLine(A.line);
    if (K.text.length === 0 && K.endsWithNewline) return K.startOffset;
    let q = K.isPrecededByNewline ? 0 : K.text.length - K.text.trimStart().length,
      Y = A.column + q,
      z = this.displayWidthToStringIndex(K.text, Y),
      w = K.startOffset + z,
      H = K.startOffset + K.text.length,
      J = H,
      O = j7(K.text);
    if (K.endsWithNewline && A.column > O) J = H + 1;
    return Math.min(w, J);
  }
  getLineLength(A) {
    let K = this.getLine(A);
    return j7(K.text);
  }
  getPositionFromOffset(A) {
    let K = this.wrappedLines;
    for (let z = 0; z < K.length; z++) {
      let w = K[z],
        H = K[z + 1];
      if (A >= w.startOffset && (!H || A < H.startOffset)) {
        let J = A - w.startOffset,
          O;
        if (w.isPrecededByNewline) O = this.stringIndexToDisplayWidth(w.text, J);else {
          let X = w.text.length - w.text.trimStart().length;
          if (J < X) O = 0;else {
            let $ = w.text.trimStart(),
              _ = J - X;
            O = this.stringIndexToDisplayWidth($, _);
          }
        }
        return {
          line: z,
          column: Math.max(0, O)
        };
      }
    }
    let q = K.length - 1,
      Y = this.wrappedLines[q];
    return {
      line: q,
      column: j7(Y.text)
    };
  }
  get lineCount() {
    return this.wrappedLines.length;
  }
  withCache(A, K) {
    let q = this.navigationCache.get(A);
    if (q !== void 0) return q;
    let Y = K();
    return this.navigationCache.set(A, Y), Y;
  }
  nextOffset(A) {
    return this.withCache(`next:${A}`, () => {
      let K = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(K, A, !0);
    });
  }
  prevOffset(A) {
    if (A <= 0) return 0;
    return this.withCache(`prev:${A}`, () => {
      let K = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(K, A, !1);
    });
  }
}
__$.cG4 = cG4;

class F36 {
  endpoint;
  timeout;
  maxBatchSize;
  batchDelayMs;
  baseBackoffDelayMs;
  maxBackoffDelayMs;
  pendingExports = [];
  isShutdown = !1;
  backoffRetryTimer = null;
  backoffAttempt = 0;
  isRetrying = !1;
  lastExportErrorContext;
  constructor(A = {}) {
    let K = process.env.ANTHROPIC_BASE_URL === "https://api-staging.anthropic.com" ? "https://api-staging.anthropic.com" : "https://api.anthropic.com";
    this.endpoint = `${K}/api/event_logging/batch`, this.timeout = A.timeout || 1e4, this.maxBatchSize = A.maxBatchSize || 200, this.batchDelayMs = A.batchDelayMs || 100, this.baseBackoffDelayMs = A.baseBackoffDelayMs || 500, this.maxBackoffDelayMs = A.maxBackoffDelayMs || 30000, this.retryPreviousBatches();
  }
  async getQueuedEventCount() {
    return (await this.loadEventsFromCurrentBatch()).length;
  }
  getCurrentBatchFilePath() {
    return N91.join(Y$A(), `${uy4}${d1()}.${xy4}.json`);
  }
  async loadEventsFromFile(A) {
    try {
      let K = await rG9(A);
      return I1A(K);
    } catch {
      return [];
    }
  }
  async loadEventsFromCurrentBatch() {
    return this.loadEventsFromFile(this.getCurrentBatchFilePath());
  }
  async saveEventsToFile(A, K) {
    try {
      if (K.length === 0) try {
        await hy4(A);
      } catch {} else {
        await by4(Y$A(), {
          recursive: !0
        });
        let q = K.map(Y => UA(Y)).join(`
`) + `
`;
        await oG9(A, q, "utf8");
      }
    } catch (q) {
      KA(q);
    }
  }
  async appendEventsToFile(A, K) {
    if (K.length === 0) return;
    try {
      await by4(Y$A(), {
        recursive: !0
      });
      let q = K.map(Y => UA(Y)).join(`
`) + `
`;
      await aG9(A, q, "utf8");
    } catch (q) {
      KA(q);
    }
  }
  async deleteFile(A) {
    try {
      await hy4(A);
    } catch {}
  }
  async retryPreviousBatches() {
    try {
      if (!nG9(Y$A())) return;
      let A = `${uy4}${d1()}.`,
        K = (await sG9(Y$A())).filter(q => q.startsWith(A) && q.endsWith(".json")).filter(q => !q.includes(xy4));
      for (let q of K) {
        let Y = N91.join(Y$A(), q);
        this.retryFileInBackground(Y);
      }
    } catch (A) {
      KA(A);
    }
  }
  async retryFileInBackground(A) {
    let K = await this.loadEventsFromFile(A);
    if (K.length === 0) {
      await this.deleteFile(A);
      return;
    }
    let q = await this.sendEventsInBatches(K);
    if (q.length === 0) await this.deleteFile(A);else await this.saveEventsToFile(A, q);
  }
  async export(A, K) {
    if (this.isShutdown) {
      K({
        code: o4A.ExportResultCode.FAILED,
        error: Error("Exporter has been shutdown")
      });
      return;
    }
    let q = this.doExport(A, K);
    this.pendingExports.push(q), q.finally(() => {
      let Y = this.pendingExports.indexOf(q);
      if (Y > -1) this.pendingExports.splice(Y, 1);
    });
  }
  async doExport(A, K) {
    try {
      let q = A.filter(w => w.instrumentationScope?.name === "com.anthropic.claude_code.events");
      if (q.length === 0) {
        K({
          code: o4A.ExportResultCode.SUCCESS
        });
        return;
      }
      let Y = this.transformLogsToEvents(q).events;
      if (Y.length === 0) {
        K({
          code: o4A.ExportResultCode.SUCCESS
        });
        return;
      }
      let z = await this.sendEventsInBatches(Y);
      if (z.length > 0) {
        await this.queueFailedEvents(z), this.scheduleBackoffRetry();
        let w = this.lastExportErrorContext ? ` (${this.lastExportErrorContext})` : "";
        K({
          code: o4A.ExportResultCode.FAILED,
          error: Error(`Failed to export ${z.length} events${w}`)
        });
        return;
      }
      if (this.resetBackoff(), (await this.getQueuedEventCount()) > 0 && !this.isRetrying) this.retryFailedEvents();
      K({
        code: o4A.ExportResultCode.SUCCESS
      });
    } catch (q) {
      KA(q), K({
        code: o4A.ExportResultCode.FAILED,
        error: q instanceof Error ? q : Error("Unknown export error")
      });
    }
  }
  async sendEventsInBatches(A) {
    let K = [];
    for (let z = 0; z < A.length; z += this.maxBatchSize) K.push(A.slice(z, z + this.maxBatchSize));
    let q = [],
      Y;
    for (let z = 0; z < K.length; z++) {
      let w = K[z];
      try {
        await this.sendBatchWithRetry({
          events: w
        });
      } catch (H) {
        q.push(...w), Y = tG9(H);
      }
      if (z < K.length - 1 && this.batchDelayMs > 0) await new Promise(H => setTimeout(H, this.batchDelayMs));
    }
    if (q.length > 0 && Y) this.lastExportErrorContext = Y;
    return q;
  }
  async queueFailedEvents(A) {
    let K = this.getCurrentBatchFilePath();
    await this.appendEventsToFile(K, A);
    let q = this.lastExportErrorContext ? ` (${this.lastExportErrorContext})` : "",
      Y = `1P event logging: ${A.length} events failed to export${q}`;
    KA(Error(Y));
  }
  scheduleBackoffRetry() {
    if (this.backoffRetryTimer || this.isRetrying || this.isShutdown) return;
    let A = this.backoffAttempt + 1,
      K = Math.min(this.baseBackoffDelayMs * A * A, this.maxBackoffDelayMs);
    this.backoffRetryTimer = setTimeout(() => {
      this.backoffRetryTimer = null, this.retryFailedEvents();
    }, K);
  }
  async retryFailedEvents() {
    let A = this.getCurrentBatchFilePath();
    while (!this.isShutdown) {
      let K = await this.loadEventsFromFile(A);
      if (K.length === 0) break;
      this.isRetrying = !0, this.backoffAttempt++, await this.deleteFile(A);
      let q = await this.sendEventsInBatches(K);
      if (this.isRetrying = !1, q.length > 0) {
        await this.saveEventsToFile(A, q), this.scheduleBackoffRetry();
        return;
      }
      this.resetBackoff();
    }
  }
  resetBackoff() {
    if (this.backoffAttempt = 0, this.backoffRetryTimer) clearTimeout(this.backoffRetryTimer), this.backoffRetryTimer = null;
  }
  async sendBatchWithRetry(A) {
    let K = {
        "Content-Type": "application/json",
        "User-Agent": uH(),
        "x-service-name": "claude-code"
      },
      Y = !(Dw(!0) || b7());
    if (!Y && Z4()) {
      let J = LK();
      if (J && dQ(J.expiresAt)) Y = !0;
    }
    let z = Y ? {
        headers: {},
        error: "trust not established or Oauth token expired"
      } : BH(),
      w = !z.error,
      H = w ? {
        ...K,
        ...z.headers
      } : K;
    try {
      let J = await A8.post(this.endpoint, A, {
        timeout: this.timeout,
        headers: H
      });
      this.logSuccess(A.events.length, w, J.data);
      return;
    } catch (J) {
      if (w && A8.isAxiosError(J) && J.response?.status === 401) {
        let O = await A8.post(this.endpoint, A, {
          timeout: this.timeout,
          headers: K
        });
        this.logSuccess(A.events.length, !1, O.data);
        return;
      }
      throw J;
    }
  }
  logSuccess(A, K, q) {}
  hrTimeToDate(A) {
    let [K, q] = A;
    return new Date(K * 1000 + q / 1e6);
  }
  transformLogsToEvents(A) {
    let K = [];
    for (let q of A) {
      let Y = q.attributes || {};
      if (Y.event_type === "GrowthbookExperimentEvent") {
        let $ = this.hrTimeToDate(q.hrTime);
        K.push({
          event_type: "GrowthbookExperimentEvent",
          event_data: g36.toJSON({
            event_id: Y.event_id,
            timestamp: $,
            experiment_id: Y.experiment_id,
            variation_id: Y.variation_id,
            environment: Y.environment,
            user_attributes: Y.user_attributes,
            experiment_metadata: Y.experiment_metadata,
            device_id: Y.device_id
          })
        });
        continue;
      }
      let z = Y.event_name || q.body || "unknown",
        w = Y.core_metadata,
        H = Y.user_metadata,
        J = Y.event_metadata || {};
      if (!w) {
        K.push({
          event_type: "ClaudeCodeInternalEvent",
          event_data: f91.toJSON({
            event_id: Y.event_id,
            event_name: z,
            client_timestamp: this.hrTimeToDate(q.hrTime),
            session_id: d1(),
            additional_metadata: UA({
              transform_error: "core_metadata attribute is missing"
            })
          })
        });
        continue;
      }
      let O = Ly4(w, H, J),
        X = {
          ...O.additional
        };
      K.push({
        event_type: "ClaudeCodeInternalEvent",
        event_data: f91.toJSON({
          event_id: Y.event_id,
          event_name: z,
          client_timestamp: this.hrTimeToDate(q.hrTime),
          device_id: Y.user_id,
          email: H?.email,
          ...O.core,
          env: O.env,
          process: O.process,
          additional_metadata: Object.keys(X).length > 0 ? UA(X) : void 0
        })
      });
    }
    return {
      events: K
    };
  }
  async shutdown() {
    this.isShutdown = !0, this.resetBackoff(), await this.forceFlush();
  }
  async forceFlush() {
    await Promise.all(this.pendingExports);
  }
}
__$.F36 = F36;

class SSA {
  options;
  rules;
  lexer;
  constructor(A) {
    this.options = A || N7A;
  }
  space(A) {
    let K = this.rules.block.newline.exec(A);
    if (K && K[0].length > 0) return {
      type: "space",
      raw: K[0]
    };
  }
  code(A) {
    let K = this.rules.block.code.exec(A);
    if (K) {
      let q = K[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: K[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? RSA(q, `
`) : q
      };
    }
  }
  fences(A) {
    let K = this.rules.block.fences.exec(A);
    if (K) {
      let q = K[0],
        Y = vR9(q, K[3] || "", this.rules);
      return {
        type: "code",
        raw: q,
        lang: K[2] ? K[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : K[2],
        text: Y
      };
    }
  }
  heading(A) {
    let K = this.rules.block.heading.exec(A);
    if (K) {
      let q = K[2].trim();
      if (this.rules.other.endingHash.test(q)) {
        let Y = RSA(q, "#");
        if (this.options.pedantic) q = Y.trim();else if (!Y || this.rules.other.endingSpaceChar.test(Y)) q = Y.trim();
      }
      return {
        type: "heading",
        raw: K[0],
        depth: K[1].length,
        text: q,
        tokens: this.lexer.inline(q)
      };
    }
  }
  hr(A) {
    let K = this.rules.block.hr.exec(A);
    if (K) return {
      type: "hr",
      raw: RSA(K[0], `
`)
    };
  }
  blockquote(A) {
    let K = this.rules.block.blockquote.exec(A);
    if (K) {
      let q = RSA(K[0], `
`).split(`
`),
        Y = "",
        z = "",
        w = [];
      while (q.length > 0) {
        let H = !1,
          J = [],
          O;
        for (O = 0; O < q.length; O++) if (this.rules.other.blockquoteStart.test(q[O])) J.push(q[O]), H = !0;else if (!H) J.push(q[O]);else break;
        q = q.slice(O);
        let X = J.join(`
`),
          $ = X.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        Y = Y ? `${Y}
${X}` : X, z = z ? `${z}
${$}` : $;
        let _ = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens($, w, !0), this.lexer.state.top = _, q.length === 0) break;
        let G = w.at(-1);
        if (G?.type === "code") break;else if (G?.type === "blockquote") {
          let Z = G,
            W = Z.raw + `
` + q.join(`
`),
            D = this.blockquote(W);
          w[w.length - 1] = D, Y = Y.substring(0, Y.length - Z.raw.length) + D.raw, z = z.substring(0, z.length - Z.text.length) + D.text;
          break;
        } else if (G?.type === "list") {
          let Z = G,
            W = Z.raw + `
` + q.join(`
`),
            D = this.list(W);
          w[w.length - 1] = D, Y = Y.substring(0, Y.length - G.raw.length) + D.raw, z = z.substring(0, z.length - Z.raw.length) + D.raw, q = W.substring(w.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: Y,
        tokens: w,
        text: z
      };
    }
  }
  list(A) {
    let K = this.rules.block.list.exec(A);
    if (K) {
      let q = K[1].trim(),
        Y = q.length > 1,
        z = {
          type: "list",
          raw: "",
          ordered: Y,
          start: Y ? +q.slice(0, -1) : "",
          loose: !1,
          items: []
        };
      if (q = Y ? `\\d{1,9}\\${q.slice(-1)}` : `\\${q}`, this.options.pedantic) q = Y ? q : "[*+-]";
      let w = this.rules.other.listItemRegex(q),
        H = !1;
      while (A) {
        let O = !1,
          X = "",
          $ = "";
        if (!(K = w.exec(A))) break;
        if (this.rules.block.hr.test(A)) break;
        X = K[0], A = A.substring(X.length);
        let _ = K[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, M => " ".repeat(3 * M.length)),
          G = A.split(`
`, 1)[0],
          Z = !_.trim(),
          W = 0;
        if (this.options.pedantic) W = 2, $ = _.trimStart();else if (Z) W = K[1].length + 1;else W = K[2].search(this.rules.other.nonSpaceChar), W = W > 4 ? 1 : W, $ = _.slice(W), W += K[1].length;
        if (Z && this.rules.other.blankLine.test(G)) X += G + `
`, A = A.substring(G.length + 1), O = !0;
        if (!O) {
          let M = this.rules.other.nextBulletRegex(W),
            P = this.rules.other.hrRegex(W),
            f = this.rules.other.fencesBeginRegex(W),
            N = this.rules.other.headingBeginRegex(W),
            T = this.rules.other.htmlBeginRegex(W);
          while (A) {
            let C = A.split(`
`, 1)[0],
              R;
            if (G = C, this.options.pedantic) G = G.replace(this.rules.other.listReplaceNesting, "  "), R = G;else R = G.replace(this.rules.other.tabCharGlobal, "    ");
            if (f.test(G)) break;
            if (N.test(G)) break;
            if (T.test(G)) break;
            if (M.test(G)) break;
            if (P.test(G)) break;
            if (R.search(this.rules.other.nonSpaceChar) >= W || !G.trim()) $ += `
` + R.slice(W);else {
              if (Z) break;
              if (_.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) break;
              if (f.test(_)) break;
              if (N.test(_)) break;
              if (P.test(_)) break;
              $ += `
` + G;
            }
            if (!Z && !G.trim()) Z = !0;
            X += C + `
`, A = A.substring(C.length + 1), _ = R.slice(W);
          }
        }
        if (!z.loose) {
          if (H) z.loose = !0;else if (this.rules.other.doubleBlankLine.test(X)) H = !0;
        }
        let D = null,
          j;
        if (this.options.gfm) {
          if (D = this.rules.other.listIsTask.exec($), D) j = D[0] !== "[ ] ", $ = $.replace(this.rules.other.listReplaceTask, "");
        }
        z.items.push({
          type: "list_item",
          raw: X,
          task: !!D,
          checked: j,
          loose: !1,
          text: $,
          tokens: []
        }), z.raw += X;
      }
      let J = z.items.at(-1);
      if (J) J.raw = J.raw.trimEnd(), J.text = J.text.trimEnd();else return;
      z.raw = z.raw.trimEnd();
      for (let O = 0; O < z.items.length; O++) if (this.lexer.state.top = !1, z.items[O].tokens = this.lexer.blockTokens(z.items[O].text, []), !z.loose) {
        let X = z.items[O].tokens.filter(_ => _.type === "space"),
          $ = X.length > 0 && X.some(_ => this.rules.other.anyLine.test(_.raw));
        z.loose = $;
      }
      if (z.loose) for (let O = 0; O < z.items.length; O++) z.items[O].loose = !0;
      return z;
    }
  }
  html(A) {
    let K = this.rules.block.html.exec(A);
    if (K) return {
      type: "html",
      block: !0,
      raw: K[0],
      pre: K[1] === "pre" || K[1] === "script" || K[1] === "style",
      text: K[0]
    };
  }
  def(A) {
    let K = this.rules.block.def.exec(A);
    if (K) {
      let q = K[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
        Y = K[2] ? K[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
        z = K[3] ? K[3].substring(1, K[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : K[3];
      return {
        type: "def",
        tag: q,
        raw: K[0],
        href: Y,
        title: z
      };
    }
  }
  table(A) {
    let K = this.rules.block.table.exec(A);
    if (!K) return;
    if (!this.rules.other.tableDelimiter.test(K[2])) return;
    let q = Lu4(K[1]),
      Y = K[2].replace(this.rules.other.tableAlignChars, "").split("|"),
      z = K[3]?.trim() ? K[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [],
      w = {
        type: "table",
        raw: K[0],
        header: [],
        align: [],
        rows: []
      };
    if (q.length !== Y.length) return;
    for (let H of Y) if (this.rules.other.tableAlignRight.test(H)) w.align.push("right");else if (this.rules.other.tableAlignCenter.test(H)) w.align.push("center");else if (this.rules.other.tableAlignLeft.test(H)) w.align.push("left");else w.align.push(null);
    for (let H = 0; H < q.length; H++) w.header.push({
      text: q[H],
      tokens: this.lexer.inline(q[H]),
      header: !0,
      align: w.align[H]
    });
    for (let H of z) w.rows.push(Lu4(H, w.header.length).map((J, O) => {
      return {
        text: J,
        tokens: this.lexer.inline(J),
        header: !1,
        align: w.align[O]
      };
    }));
    return w;
  }
  lheading(A) {
    let K = this.rules.block.lheading.exec(A);
    if (K) return {
      type: "heading",
      raw: K[0],
      depth: K[2].charAt(0) === "=" ? 1 : 2,
      text: K[1],
      tokens: this.lexer.inline(K[1])
    };
  }
  paragraph(A) {
    let K = this.rules.block.paragraph.exec(A);
    if (K) {
      let q = K[1].charAt(K[1].length - 1) === `
` ? K[1].slice(0, -1) : K[1];
      return {
        type: "paragraph",
        raw: K[0],
        text: q,
        tokens: this.lexer.inline(q)
      };
    }
  }
  text(A) {
    let K = this.rules.block.text.exec(A);
    if (K) return {
      type: "text",
      raw: K[0],
      text: K[0],
      tokens: this.lexer.inline(K[0])
    };
  }
  escape(A) {
    let K = this.rules.inline.escape.exec(A);
    if (K) return {
      type: "escape",
      raw: K[0],
      text: K[1]
    };
  }
  tag(A) {
    let K = this.rules.inline.tag.exec(A);
    if (K) {
      if (!this.lexer.state.inLink && this.rules.other.startATag.test(K[0])) this.lexer.state.inLink = !0;else if (this.lexer.state.inLink && this.rules.other.endATag.test(K[0])) this.lexer.state.inLink = !1;
      if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(K[0])) this.lexer.state.inRawBlock = !0;else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(K[0])) this.lexer.state.inRawBlock = !1;
      return {
        type: "html",
        raw: K[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: K[0]
      };
    }
  }
  link(A) {
    let K = this.rules.inline.link.exec(A);
    if (K) {
      let q = K[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(q)) {
        if (!this.rules.other.endAngleBracket.test(q)) return;
        let w = RSA(q.slice(0, -1), "\\");
        if ((q.length - w.length) % 2 === 0) return;
      } else {
        let w = TR9(K[2], "()");
        if (w > -1) {
          let J = (K[0].indexOf("!") === 0 ? 5 : 4) + K[1].length + w;
          K[2] = K[2].substring(0, w), K[0] = K[0].substring(0, J).trim(), K[3] = "";
        }
      }
      let Y = K[2],
        z = "";
      if (this.options.pedantic) {
        let w = this.rules.other.pedanticHrefTitle.exec(Y);
        if (w) Y = w[1], z = w[3];
      } else z = K[3] ? K[3].slice(1, -1) : "";
      if (Y = Y.trim(), this.rules.other.startAngleBracket.test(Y)) if (this.options.pedantic && !this.rules.other.endAngleBracket.test(q)) Y = Y.slice(1);else Y = Y.slice(1, -1);
      return Ru4(K, {
        href: Y ? Y.replace(this.rules.inline.anyPunctuation, "$1") : Y,
        title: z ? z.replace(this.rules.inline.anyPunctuation, "$1") : z
      }, K[0], this.lexer, this.rules);
    }
  }
  reflink(A, K) {
    let q;
    if ((q = this.rules.inline.reflink.exec(A)) || (q = this.rules.inline.nolink.exec(A))) {
      let Y = (q[2] || q[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
        z = K[Y.toLowerCase()];
      if (!z) {
        let w = q[0].charAt(0);
        return {
          type: "text",
          raw: w,
          text: w
        };
      }
      return Ru4(q, z, q[0], this.lexer, this.rules);
    }
  }
  emStrong(A, K, q = "") {
    let Y = this.rules.inline.emStrongLDelim.exec(A);
    if (!Y) return;
    if (Y[3] && q.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(Y[1] || Y[2]) || !q || this.rules.inline.punctuation.exec(q)) {
      let w = [...Y[0]].length - 1,
        H,
        J,
        O = w,
        X = 0,
        $ = Y[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      $.lastIndex = 0, K = K.slice(-1 * A.length + w);
      while ((Y = $.exec(K)) != null) {
        if (H = Y[1] || Y[2] || Y[3] || Y[4] || Y[5] || Y[6], !H) continue;
        if (J = [...H].length, Y[3] || Y[4]) {
          O += J;
          continue;
        } else if (Y[5] || Y[6]) {
          if (w % 3 && !((w + J) % 3)) {
            X += J;
            continue;
          }
        }
        if (O -= J, O > 0) continue;
        J = Math.min(J, J + O + X);
        let _ = [...Y[0]][0].length,
          G = A.slice(0, w + Y.index + _ + J);
        if (Math.min(w, J) % 2) {
          let W = G.slice(1, -1);
          return {
            type: "em",
            raw: G,
            text: W,
            tokens: this.lexer.inlineTokens(W)
          };
        }
        let Z = G.slice(2, -2);
        return {
          type: "strong",
          raw: G,
          text: Z,
          tokens: this.lexer.inlineTokens(Z)
        };
      }
    }
  }
  codespan(A) {
    let K = this.rules.inline.code.exec(A);
    if (K) {
      let q = K[2].replace(this.rules.other.newLineCharGlobal, " "),
        Y = this.rules.other.nonSpaceChar.test(q),
        z = this.rules.other.startingSpaceChar.test(q) && this.rules.other.endingSpaceChar.test(q);
      if (Y && z) q = q.substring(1, q.length - 1);
      return {
        type: "codespan",
        raw: K[0],
        text: q
      };
    }
  }
  br(A) {
    let K = this.rules.inline.br.exec(A);
    if (K) return {
      type: "br",
      raw: K[0]
    };
  }
  del(A) {
    let K = this.rules.inline.del.exec(A);
    if (K) return {
      type: "del",
      raw: K[0],
      text: K[2],
      tokens: this.lexer.inlineTokens(K[2])
    };
  }
  autolink(A) {
    let K = this.rules.inline.autolink.exec(A);
    if (K) {
      let q, Y;
      if (K[2] === "@") q = K[1], Y = "mailto:" + q;else q = K[1], Y = q;
      return {
        type: "link",
        raw: K[0],
        text: q,
        href: Y,
        tokens: [{
          type: "text",
          raw: q,
          text: q
        }]
      };
    }
  }
  url(A) {
    let K;
    if (K = this.rules.inline.url.exec(A)) {
      let q, Y;
      if (K[2] === "@") q = K[0], Y = "mailto:" + q;else {
        let z;
        do z = K[0], K[0] = this.rules.inline._backpedal.exec(K[0])?.[0] ?? ""; while (z !== K[0]);
        if (q = K[0], K[1] === "www.") Y = "http://" + K[0];else Y = K[0];
      }
      return {
        type: "link",
        raw: K[0],
        text: q,
        href: Y,
        tokens: [{
          type: "text",
          raw: q,
          text: q
        }]
      };
    }
  }
  inlineText(A) {
    let K = this.rules.inline.text.exec(A);
    if (K) {
      let q = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: K[0],
        text: K[0],
        escaped: q
      };
    }
  }
}
__$.SSA = SSA;

class jM {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(A) {
    this.tokens = [], this.tokens.links = Object.create(null), this.options = A || N7A, this.options.tokenizer = this.options.tokenizer || new SSA(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    let K = {
      other: DM,
      block: oY1.normal,
      inline: LSA.normal
    };
    if (this.options.pedantic) K.block = oY1.pedantic, K.inline = LSA.pedantic;else if (this.options.gfm) if (K.block = oY1.gfm, this.options.breaks) K.inline = LSA.breaks;else K.inline = LSA.gfm;
    this.tokenizer.rules = K;
  }
  static get rules() {
    return {
      block: oY1,
      inline: LSA
    };
  }
  static lex(A, K) {
    return new jM(K).lex(A);
  }
  static lexInline(A, K) {
    return new jM(K).inlineTokens(A);
  }
  lex(A) {
    A = A.replace(DM.carriageReturn, `
`), this.blockTokens(A, this.tokens);
    for (let K = 0; K < this.inlineQueue.length; K++) {
      let q = this.inlineQueue[K];
      this.inlineTokens(q.src, q.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(A, K = [], q = !1) {
    if (this.options.pedantic) A = A.replace(DM.tabCharGlobal, "    ").replace(DM.spaceLine, "");
    while (A) {
      let Y;
      if (this.options.extensions?.block?.some(w => {
        if (Y = w.call({
          lexer: this
        }, A, K)) return A = A.substring(Y.raw.length), K.push(Y), !0;
        return !1;
      })) continue;
      if (Y = this.tokenizer.space(A)) {
        A = A.substring(Y.raw.length);
        let w = K.at(-1);
        if (Y.raw.length === 1 && w !== void 0) w.raw += `
`;else K.push(Y);
        continue;
      }
      if (Y = this.tokenizer.code(A)) {
        A = A.substring(Y.raw.length);
        let w = K.at(-1);
        if (w?.type === "paragraph" || w?.type === "text") w.raw += `
` + Y.raw, w.text += `
` + Y.text, this.inlineQueue.at(-1).src = w.text;else K.push(Y);
        continue;
      }
      if (Y = this.tokenizer.fences(A)) {
        A = A.substring(Y.raw.length), K.push(Y);
        continue;
      }
      if (Y = this.tokenizer.heading(A)) {
        A = A.substring(Y.raw.length), K.push(Y);
        continue;
      }
      if (Y = this.tokenizer.hr(A)) {
        A = A.substring(Y.raw.length), K.push(Y);
        continue;
      }
      if (Y = this.tokenizer.blockquote(A)) {
        A = A.substring(Y.raw.length), K.push(Y);
        continue;
      }
      if (Y = this.tokenizer.list(A)) {
        A = A.substring(Y.raw.length), K.push(Y);
        continue;
      }
      if (Y = this.tokenizer.html(A)) {
        A = A.substring(Y.raw.length), K.push(Y);
        continue;
      }
      if (Y = this.tokenizer.def(A)) {
        A = A.substring(Y.raw.length);
        let w = K.at(-1);
        if (w?.type === "paragraph" || w?.type === "text") w.raw += `
` + Y.raw, w.text += `
` + Y.raw, this.inlineQueue.at(-1).src = w.text;else if (!this.tokens.links[Y.tag]) this.tokens.links[Y.tag] = {
          href: Y.href,
          title: Y.title
        };
        continue;
      }
      if (Y = this.tokenizer.table(A)) {
        A = A.substring(Y.raw.length), K.push(Y);
        continue;
      }
      if (Y = this.tokenizer.lheading(A)) {
        A = A.substring(Y.raw.length), K.push(Y);
        continue;
      }
      let z = A;
      if (this.options.extensions?.startBlock) {
        let w = 1 / 0,
          H = A.slice(1),
          J;
        if (this.options.extensions.startBlock.forEach(O => {
          if (J = O.call({
            lexer: this
          }, H), typeof J === "number" && J >= 0) w = Math.min(w, J);
        }), w < 1 / 0 && w >= 0) z = A.substring(0, w + 1);
      }
      if (this.state.top && (Y = this.tokenizer.paragraph(z))) {
        let w = K.at(-1);
        if (q && w?.type === "paragraph") w.raw += `
` + Y.raw, w.text += `
` + Y.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = w.text;else K.push(Y);
        q = z.length !== A.length, A = A.substring(Y.raw.length);
        continue;
      }
      if (Y = this.tokenizer.text(A)) {
        A = A.substring(Y.raw.length);
        let w = K.at(-1);
        if (w?.type === "text") w.raw += `
` + Y.raw, w.text += `
` + Y.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = w.text;else K.push(Y);
        continue;
      }
      if (A) {
        let w = "Infinite loop on byte: " + A.charCodeAt(0);
        if (this.options.silent) {
          console.error(w);
          break;
        } else throw Error(w);
      }
    }
    return this.state.top = !0, K;
  }
  inline(A, K = []) {
    return this.inlineQueue.push({
      src: A,
      tokens: K
    }), K;
  }
  inlineTokens(A, K = []) {
    let q = A,
      Y = null;
    if (this.tokens.links) {
      let H = Object.keys(this.tokens.links);
      if (H.length > 0) {
        while ((Y = this.tokenizer.rules.inline.reflinkSearch.exec(q)) != null) if (H.includes(Y[0].slice(Y[0].lastIndexOf("[") + 1, -1))) q = q.slice(0, Y.index) + "[" + "a".repeat(Y[0].length - 2) + "]" + q.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
      }
    }
    while ((Y = this.tokenizer.rules.inline.blockSkip.exec(q)) != null) q = q.slice(0, Y.index) + "[" + "a".repeat(Y[0].length - 2) + "]" + q.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    while ((Y = this.tokenizer.rules.inline.anyPunctuation.exec(q)) != null) q = q.slice(0, Y.index) + "++" + q.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let z = !1,
      w = "";
    while (A) {
      if (!z) w = "";
      z = !1;
      let H;
      if (this.options.extensions?.inline?.some(O => {
        if (H = O.call({
          lexer: this
        }, A, K)) return A = A.substring(H.raw.length), K.push(H), !0;
        return !1;
      })) continue;
      if (H = this.tokenizer.escape(A)) {
        A = A.substring(H.raw.length), K.push(H);
        continue;
      }
      if (H = this.tokenizer.tag(A)) {
        A = A.substring(H.raw.length), K.push(H);
        continue;
      }
      if (H = this.tokenizer.link(A)) {
        A = A.substring(H.raw.length), K.push(H);
        continue;
      }
      if (H = this.tokenizer.reflink(A, this.tokens.links)) {
        A = A.substring(H.raw.length);
        let O = K.at(-1);
        if (H.type === "text" && O?.type === "text") O.raw += H.raw, O.text += H.text;else K.push(H);
        continue;
      }
      if (H = this.tokenizer.emStrong(A, q, w)) {
        A = A.substring(H.raw.length), K.push(H);
        continue;
      }
      if (H = this.tokenizer.codespan(A)) {
        A = A.substring(H.raw.length), K.push(H);
        continue;
      }
      if (H = this.tokenizer.br(A)) {
        A = A.substring(H.raw.length), K.push(H);
        continue;
      }
      if (H = this.tokenizer.del(A)) {
        A = A.substring(H.raw.length), K.push(H);
        continue;
      }
      if (H = this.tokenizer.autolink(A)) {
        A = A.substring(H.raw.length), K.push(H);
        continue;
      }
      if (!this.state.inLink && (H = this.tokenizer.url(A))) {
        A = A.substring(H.raw.length), K.push(H);
        continue;
      }
      let J = A;
      if (this.options.extensions?.startInline) {
        let O = 1 / 0,
          X = A.slice(1),
          $;
        if (this.options.extensions.startInline.forEach(_ => {
          if ($ = _.call({
            lexer: this
          }, X), typeof $ === "number" && $ >= 0) O = Math.min(O, $);
        }), O < 1 / 0 && O >= 0) J = A.substring(0, O + 1);
      }
      if (H = this.tokenizer.inlineText(J)) {
        if (A = A.substring(H.raw.length), H.raw.slice(-1) !== "_") w = H.raw.slice(-1);
        z = !0;
        let O = K.at(-1);
        if (O?.type === "text") O.raw += H.raw, O.text += H.text;else K.push(H);
        continue;
      }
      if (A) {
        let O = "Infinite loop on byte: " + A.charCodeAt(0);
        if (this.options.silent) {
          console.error(O);
          break;
        } else throw Error(O);
      }
    }
    return K;
  }
}
__$.jM = jM;

class hSA {
  options;
  parser;
  constructor(A) {
    this.options = A || N7A;
  }
  space(A) {
    return "";
  }
  code({
    text: A,
    lang: K,
    escaped: q
  }) {
    let Y = (K || "").match(DM.notSpaceStart)?.[0],
      z = A.replace(DM.endingNewline, "") + `
`;
    if (!Y) return "<pre><code>" + (q ? z : Ku(z, !0)) + `</code></pre>
`;
    return '<pre><code class="language-' + Ku(Y) + '">' + (q ? z : Ku(z, !0)) + `</code></pre>
`;
  }
  blockquote({
    tokens: A
  }) {
    return `<blockquote>
${this.parser.parse(A)}</blockquote>
`;
  }
  html({
    text: A
  }) {
    return A;
  }
  heading({
    tokens: A,
    depth: K
  }) {
    return `<h${K}>${this.parser.parseInline(A)}</h${K}>
`;
  }
  hr(A) {
    return `<hr>
`;
  }
  list(A) {
    let {
        ordered: K,
        start: q
      } = A,
      Y = "";
    for (let H = 0; H < A.items.length; H++) {
      let J = A.items[H];
      Y += this.listitem(J);
    }
    let z = K ? "ol" : "ul",
      w = K && q !== 1 ? ' start="' + q + '"' : "";
    return "<" + z + w + `>
` + Y + "</" + z + `>
`;
  }
  listitem(A) {
    let K = "";
    if (A.task) {
      let q = this.checkbox({
        checked: !!A.checked
      });
      if (A.loose) {
        if (A.tokens[0]?.type === "paragraph") {
          if (A.tokens[0].text = q + " " + A.tokens[0].text, A.tokens[0].tokens && A.tokens[0].tokens.length > 0 && A.tokens[0].tokens[0].type === "text") A.tokens[0].tokens[0].text = q + " " + Ku(A.tokens[0].tokens[0].text), A.tokens[0].tokens[0].escaped = !0;
        } else A.tokens.unshift({
          type: "text",
          raw: q + " ",
          text: q + " ",
          escaped: !0
        });
      } else K += q + " ";
    }
    return K += this.parser.parse(A.tokens, !!A.loose), `<li>${K}</li>
`;
  }
  checkbox({
    checked: A
  }) {
    return "<input " + (A ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({
    tokens: A
  }) {
    return `<p>${this.parser.parseInline(A)}</p>
`;
  }
  table(A) {
    let K = "",
      q = "";
    for (let z = 0; z < A.header.length; z++) q += this.tablecell(A.header[z]);
    K += this.tablerow({
      text: q
    });
    let Y = "";
    for (let z = 0; z < A.rows.length; z++) {
      let w = A.rows[z];
      q = "";
      for (let H = 0; H < w.length; H++) q += this.tablecell(w[H]);
      Y += this.tablerow({
        text: q
      });
    }
    if (Y) Y = `<tbody>${Y}</tbody>`;
    return `<table>
<thead>
` + K + `</thead>
` + Y + `</table>
`;
  }
  tablerow({
    text: A
  }) {
    return `<tr>
${A}</tr>
`;
  }
  tablecell(A) {
    let K = this.parser.parseInline(A.tokens),
      q = A.header ? "th" : "td";
    return (A.align ? `<${q} align="${A.align}">` : `<${q}>`) + K + `</${q}>
`;
  }
  strong({
    tokens: A
  }) {
    return `<strong>${this.parser.parseInline(A)}</strong>`;
  }
  em({
    tokens: A
  }) {
    return `<em>${this.parser.parseInline(A)}</em>`;
  }
  codespan({
    text: A
  }) {
    return `<code>${Ku(A, !0)}</code>`;
  }
  br(A) {
    return "<br>";
  }
  del({
    tokens: A
  }) {
    return `<del>${this.parser.parseInline(A)}</del>`;
  }
  link({
    href: A,
    title: K,
    tokens: q
  }) {
    let Y = this.parser.parseInline(q),
      z = Cu4(A);
    if (z === null) return Y;
    A = z;
    let w = '<a href="' + A + '"';
    if (K) w += ' title="' + Ku(K) + '"';
    return w += ">" + Y + "</a>", w;
  }
  image({
    href: A,
    title: K,
    text: q
  }) {
    let Y = Cu4(A);
    if (Y === null) return Ku(q);
    A = Y;
    let z = `<img src="${A}" alt="${q}"`;
    if (K) z += ` title="${Ku(K)}"`;
    return z += ">", z;
  }
  text(A) {
    return "tokens" in A && A.tokens ? this.parser.parseInline(A.tokens) : "escaped" in A && A.escaped ? A.text : Ku(A.text);
  }
}
__$.hSA = hSA;

class eY1 {
  strong({
    text: A
  }) {
    return A;
  }
  em({
    text: A
  }) {
    return A;
  }
  codespan({
    text: A
  }) {
    return A;
  }
  del({
    text: A
  }) {
    return A;
  }
  html({
    text: A
  }) {
    return A;
  }
  text({
    text: A
  }) {
    return A;
  }
  link({
    text: A
  }) {
    return "" + A;
  }
  image({
    text: A
  }) {
    return "" + A;
  }
  br() {
    return "";
  }
}
__$.eY1 = eY1;

class KC {
  options;
  renderer;
  textRenderer;
  constructor(A) {
    this.options = A || N7A, this.options.renderer = this.options.renderer || new hSA(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new eY1();
  }
  static parse(A, K) {
    return new KC(K).parse(A);
  }
  static parseInline(A, K) {
    return new KC(K).parseInline(A);
  }
  parse(A, K = !0) {
    let q = "";
    for (let Y = 0; Y < A.length; Y++) {
      let z = A[Y];
      if (this.options.extensions?.renderers?.[z.type]) {
        let H = z,
          J = this.options.extensions.renderers[H.type].call({
            parser: this
          }, H);
        if (J !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(H.type)) {
          q += J || "";
          continue;
        }
      }
      let w = z;
      switch (w.type) {
        case "space":
          {
            q += this.renderer.space(w);
            continue;
          }
        case "hr":
          {
            q += this.renderer.hr(w);
            continue;
          }
        case "heading":
          {
            q += this.renderer.heading(w);
            continue;
          }
        case "code":
          {
            q += this.renderer.code(w);
            continue;
          }
        case "table":
          {
            q += this.renderer.table(w);
            continue;
          }
        case "blockquote":
          {
            q += this.renderer.blockquote(w);
            continue;
          }
        case "list":
          {
            q += this.renderer.list(w);
            continue;
          }
        case "html":
          {
            q += this.renderer.html(w);
            continue;
          }
        case "paragraph":
          {
            q += this.renderer.paragraph(w);
            continue;
          }
        case "text":
          {
            let H = w,
              J = this.renderer.text(H);
            while (Y + 1 < A.length && A[Y + 1].type === "text") H = A[++Y], J += `
` + this.renderer.text(H);
            if (K) q += this.renderer.paragraph({
              type: "paragraph",
              raw: J,
              text: J,
              tokens: [{
                type: "text",
                raw: J,
                text: J,
                escaped: !0
              }]
            });else q += J;
            continue;
          }
        default:
          {
            let H = 'Token with "' + w.type + '" type was not found.';
            if (this.options.silent) return console.error(H), "";else throw Error(H);
          }
      }
    }
    return q;
  }
  parseInline(A, K = this.renderer) {
    let q = "";
    for (let Y = 0; Y < A.length; Y++) {
      let z = A[Y];
      if (this.options.extensions?.renderers?.[z.type]) {
        let H = this.options.extensions.renderers[z.type].call({
          parser: this
        }, z);
        if (H !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(z.type)) {
          q += H || "";
          continue;
        }
      }
      let w = z;
      switch (w.type) {
        case "escape":
          {
            q += K.text(w);
            break;
          }
        case "html":
          {
            q += K.html(w);
            break;
          }
        case "link":
          {
            q += K.link(w);
            break;
          }
        case "image":
          {
            q += K.image(w);
            break;
          }
        case "strong":
          {
            q += K.strong(w);
            break;
          }
        case "em":
          {
            q += K.em(w);
            break;
          }
        case "codespan":
          {
            q += K.codespan(w);
            break;
          }
        case "br":
          {
            q += K.br(w);
            break;
          }
        case "del":
          {
            q += K.del(w);
            break;
          }
        case "text":
          {
            q += K.text(w);
            break;
          }
        default:
          {
            let H = 'Token with "' + w.type + '" type was not found.';
            if (this.options.silent) return console.error(H), "";else throw Error(H);
          }
      }
    }
    return q;
  }
}
__$.KC = KC;

class Qu4 {
  defaults = tY6();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = KC;
  Renderer = hSA;
  TextRenderer = eY1;
  Lexer = jM;
  Tokenizer = SSA;
  Hooks = ISA;
  constructor(...A) {
    this.use(...A);
  }
  walkTokens(A, K) {
    let q = [];
    for (let Y of A) switch (q = q.concat(K.call(this, Y)), Y.type) {
      case "table":
        {
          let z = Y;
          for (let w of z.header) q = q.concat(this.walkTokens(w.tokens, K));
          for (let w of z.rows) for (let H of w) q = q.concat(this.walkTokens(H.tokens, K));
          break;
        }
      case "list":
        {
          let z = Y;
          q = q.concat(this.walkTokens(z.items, K));
          break;
        }
      default:
        {
          let z = Y;
          if (this.defaults.extensions?.childTokens?.[z.type]) this.defaults.extensions.childTokens[z.type].forEach(w => {
            let H = z[w].flat(1 / 0);
            q = q.concat(this.walkTokens(H, K));
          });else if (z.tokens) q = q.concat(this.walkTokens(z.tokens, K));
        }
    }
    return q;
  }
  use(...A) {
    let K = this.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    return A.forEach(q => {
      let Y = {
        ...q
      };
      if (Y.async = this.defaults.async || Y.async || !1, q.extensions) q.extensions.forEach(z => {
        if (!z.name) throw Error("extension name required");
        if ("renderer" in z) {
          let w = K.renderers[z.name];
          if (w) K.renderers[z.name] = function (...H) {
            let J = z.renderer.apply(this, H);
            if (J === !1) J = w.apply(this, H);
            return J;
          };else K.renderers[z.name] = z.renderer;
        }
        if ("tokenizer" in z) {
          if (!z.level || z.level !== "block" && z.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
          let w = K[z.level];
          if (w) w.unshift(z.tokenizer);else K[z.level] = [z.tokenizer];
          if (z.start) {
            if (z.level === "block") {
              if (K.startBlock) K.startBlock.push(z.start);else K.startBlock = [z.start];
            } else if (z.level === "inline") if (K.startInline) K.startInline.push(z.start);else K.startInline = [z.start];
          }
        }
        if ("childTokens" in z && z.childTokens) K.childTokens[z.name] = z.childTokens;
      }), Y.extensions = K;
      if (q.renderer) {
        let z = this.defaults.renderer || new hSA(this.defaults);
        for (let w in q.renderer) {
          if (!(w in z)) throw Error(`renderer '${w}' does not exist`);
          if (["options", "parser"].includes(w)) continue;
          let H = w,
            J = q.renderer[H],
            O = z[H];
          z[H] = (...X) => {
            let $ = J.apply(z, X);
            if ($ === !1) $ = O.apply(z, X);
            return $ || "";
          };
        }
        Y.renderer = z;
      }
      if (q.tokenizer) {
        let z = this.defaults.tokenizer || new SSA(this.defaults);
        for (let w in q.tokenizer) {
          if (!(w in z)) throw Error(`tokenizer '${w}' does not exist`);
          if (["options", "rules", "lexer"].includes(w)) continue;
          let H = w,
            J = q.tokenizer[H],
            O = z[H];
          z[H] = (...X) => {
            let $ = J.apply(z, X);
            if ($ === !1) $ = O.apply(z, X);
            return $;
          };
        }
        Y.tokenizer = z;
      }
      if (q.hooks) {
        let z = this.defaults.hooks || new ISA();
        for (let w in q.hooks) {
          if (!(w in z)) throw Error(`hook '${w}' does not exist`);
          if (["options", "block"].includes(w)) continue;
          let H = w,
            J = q.hooks[H],
            O = z[H];
          if (ISA.passThroughHooks.has(w)) z[H] = X => {
            if (this.defaults.async) return Promise.resolve(J.call(z, X)).then(_ => {
              return O.call(z, _);
            });
            let $ = J.call(z, X);
            return O.call(z, $);
          };else z[H] = (...X) => {
            let $ = J.apply(z, X);
            if ($ === !1) $ = O.apply(z, X);
            return $;
          };
        }
        Y.hooks = z;
      }
      if (q.walkTokens) {
        let z = this.defaults.walkTokens,
          w = q.walkTokens;
        Y.walkTokens = function (H) {
          let J = [];
          if (J.push(w.call(this, H)), z) J = J.concat(z.call(this, H));
          return J;
        };
      }
      this.defaults = {
        ...this.defaults,
        ...Y
      };
    }), this;
  }
  setOptions(A) {
    return this.defaults = {
      ...this.defaults,
      ...A
    }, this;
  }
  lexer(A, K) {
    return jM.lex(A, K ?? this.defaults);
  }
  parser(A, K) {
    return KC.parse(A, K ?? this.defaults);
  }
  parseMarkdown(A) {
    return (q, Y) => {
      let z = {
          ...Y
        },
        w = {
          ...this.defaults,
          ...z
        },
        H = this.onError(!!w.silent, !!w.async);
      if (this.defaults.async === !0 && z.async === !1) return H(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof q > "u" || q === null) return H(Error("marked(): input parameter is undefined or null"));
      if (typeof q !== "string") return H(Error("marked(): input parameter is of type " + Object.prototype.toString.call(q) + ", string expected"));
      if (w.hooks) w.hooks.options = w, w.hooks.block = A;
      let J = w.hooks ? w.hooks.provideLexer() : A ? jM.lex : jM.lexInline,
        O = w.hooks ? w.hooks.provideParser() : A ? KC.parse : KC.parseInline;
      if (w.async) return Promise.resolve(w.hooks ? w.hooks.preprocess(q) : q).then(X => J(X, w)).then(X => w.hooks ? w.hooks.processAllTokens(X) : X).then(X => w.walkTokens ? Promise.all(this.walkTokens(X, w.walkTokens)).then(() => X) : X).then(X => O(X, w)).then(X => w.hooks ? w.hooks.postprocess(X) : X).catch(H);
      try {
        if (w.hooks) q = w.hooks.preprocess(q);
        let X = J(q, w);
        if (w.hooks) X = w.hooks.processAllTokens(X);
        if (w.walkTokens) this.walkTokens(X, w.walkTokens);
        let $ = O(X, w);
        if (w.hooks) $ = w.hooks.postprocess($);
        return $;
      } catch (X) {
        return H(X);
      }
    };
  }
  onError(A, K) {
    return q => {
      if (q.message += `
Please report this to https://github.com/markedjs/marked.`, A) {
        let Y = "<p>An error occurred:</p><pre>" + Ku(q.message + "", !0) + "</pre>";
        if (K) return Promise.resolve(Y);
        return Y;
      }
      if (K) return Promise.reject(q);
      throw q;
    };
  }
}
__$.Qu4 = Qu4;

class Uu4 {
  cache;
  constructor(A, K) {
    this.cache = new Ty({
      max: A,
      maxSize: K,
      sizeCalculation: q => Math.max(1, Buffer.byteLength(q.content))
    });
  }
  get(A) {
    return this.cache.get(K21(A));
  }
  set(A, K) {
    return this.cache.set(K21(A), K), this;
  }
  has(A) {
    return this.cache.has(K21(A));
  }
  delete(A) {
    return this.cache.delete(K21(A));
  }
  clear() {
    this.cache.clear();
  }
  get size() {
    return this.cache.size;
  }
  get max() {
    return this.cache.max;
  }
  get maxSize() {
    return this.cache.maxSize;
  }
  get calculatedSize() {
    return this.cache.calculatedSize;
  }
  keys() {
    return this.cache.keys();
  }
  entries() {
    return this.cache.entries();
  }
  dump() {
    return this.cache.dump();
  }
  load(A) {
    this.cache.load(A);
  }
}
__$.Uu4 = Uu4;

class Ut4 {
  constructor(A) {
    var K, q, Y, z, w, H, J;
    this.url = A.url, this.body = A.body, this.headers = (K = A.headers) !== null && K !== void 0 ? K : ju(), this.method = (q = A.method) !== null && q !== void 0 ? q : "GET", this.timeout = (Y = A.timeout) !== null && Y !== void 0 ? Y : 0, this.multipartBody = A.multipartBody, this.formData = A.formData, this.disableKeepAlive = (z = A.disableKeepAlive) !== null && z !== void 0 ? z : !1, this.proxySettings = A.proxySettings, this.streamResponseStatusCodes = A.streamResponseStatusCodes, this.withCredentials = (w = A.withCredentials) !== null && w !== void 0 ? w : !1, this.abortSignal = A.abortSignal, this.onUploadProgress = A.onUploadProgress, this.onDownloadProgress = A.onDownloadProgress, this.requestId = A.requestId || LhA(), this.allowInsecureConnection = (H = A.allowInsecureConnection) !== null && H !== void 0 ? H : !1, this.enableBrowserStreams = (J = A.enableBrowserStreams) !== null && J !== void 0 ? J : !1, this.requestOverrides = A.requestOverrides, this.authSchemes = A.authSchemes;
  }
}
__$.Ut4 = Ut4;

class yw1 {
  constructor(A) {
    var K;
    this._policies = [], this._policies = (K = A === null || A === void 0 ? void 0 : A.slice(0)) !== null && K !== void 0 ? K : [], this._orderedPolicies = void 0;
  }
  addPolicy(A, K = {}) {
    if (K.phase && K.afterPhase) throw Error("Policies inside a phase cannot specify afterPhase.");
    if (K.phase && !dt4.has(K.phase)) throw Error(`Invalid phase name: ${K.phase}`);
    if (K.afterPhase && !dt4.has(K.afterPhase)) throw Error(`Invalid afterPhase name: ${K.afterPhase}`);
    this._policies.push({
      policy: A,
      options: K
    }), this._orderedPolicies = void 0;
  }
  removePolicy(A) {
    let K = [];
    return this._policies = this._policies.filter(q => {
      if (A.name && q.policy.name === A.name || A.phase && q.options.phase === A.phase) return K.push(q.policy), !1;else return !0;
    }), this._orderedPolicies = void 0, K;
  }
  sendRequest(A, K) {
    return this.getOrderedPolicies().reduceRight((z, w) => {
      return H => {
        return w.sendRequest(H, z);
      };
    }, z => A.sendRequest(z))(K);
  }
  getOrderedPolicies() {
    if (!this._orderedPolicies) this._orderedPolicies = this.orderPolicies();
    return this._orderedPolicies;
  }
  clone() {
    return new yw1(this._policies);
  }
  static create() {
    return new yw1();
  }
  orderPolicies() {
    let A = [],
      K = new Map();
    function q(Z) {
      return {
        name: Z,
        policies: new Set(),
        hasRun: !1,
        hasAfterPolicies: !1
      };
    }
    let Y = q("Serialize"),
      z = q("None"),
      w = q("Deserialize"),
      H = q("Retry"),
      J = q("Sign"),
      O = [Y, z, w, H, J];
    function X(Z) {
      if (Z === "Retry") return H;else if (Z === "Serialize") return Y;else if (Z === "Deserialize") return w;else if (Z === "Sign") return J;else return z;
    }
    for (let Z of this._policies) {
      let {
          policy: W,
          options: D
        } = Z,
        j = W.name;
      if (K.has(j)) throw Error("Duplicate policy names not allowed in pipeline");
      let M = {
        policy: W,
        dependsOn: new Set(),
        dependants: new Set()
      };
      if (D.afterPhase) M.afterPhase = X(D.afterPhase), M.afterPhase.hasAfterPolicies = !0;
      K.set(j, M), X(D.phase).policies.add(M);
    }
    for (let Z of this._policies) {
      let {
          policy: W,
          options: D
        } = Z,
        j = W.name,
        M = K.get(j);
      if (!M) throw Error(`Missing node for policy ${j}`);
      if (D.afterPolicies) for (let P of D.afterPolicies) {
        let f = K.get(P);
        if (f) M.dependsOn.add(f), f.dependants.add(M);
      }
      if (D.beforePolicies) for (let P of D.beforePolicies) {
        let f = K.get(P);
        if (f) f.dependsOn.add(M), M.dependants.add(f);
      }
    }
    function $(Z) {
      Z.hasRun = !0;
      for (let W of Z.policies) {
        if (W.afterPhase && (!W.afterPhase.hasRun || W.afterPhase.policies.size)) continue;
        if (W.dependsOn.size === 0) {
          A.push(W.policy);
          for (let D of W.dependants) D.dependsOn.delete(W);
          K.delete(W.policy.name), Z.policies.delete(W);
        }
      }
    }
    function _() {
      for (let Z of O) {
        if ($(Z), Z.policies.size > 0 && Z !== z) {
          if (!z.hasRun) $(z);
          return;
        }
        if (Z.hasAfterPolicies) $(z);
      }
    }
    let G = 0;
    while (K.size > 0) {
      G++;
      let Z = A.length;
      if (_(), A.length <= Z && G > 1) throw Error("Cannot satisfy policy dependencies due to requirements cycle.");
    }
    return A;
  }
}
__$.yw1 = yw1;

class Mu {
  constructor({
    additionalAllowedHeaderNames: A = [],
    additionalAllowedQueryParameters: K = []
  } = {}) {
    A = Z1Y.concat(A), K = W1Y.concat(K), this.allowedHeaderNames = new Set(A.map(q => q.toLowerCase())), this.allowedQueryParameters = new Set(K.map(q => q.toLowerCase()));
  }
  sanitize(A) {
    let K = new Set();
    return JSON.stringify(A, (q, Y) => {
      if (Y instanceof Error) return Object.assign(Object.assign({}, Y), {
        name: Y.name,
        message: Y.message
      });
      if (q === "headers") return this.sanitizeHeaders(Y);else if (q === "url") return this.sanitizeUrl(Y);else if (q === "query") return this.sanitizeQuery(Y);else if (q === "body") return;else if (q === "response") return;else if (q === "operationSpec") return;else if (Array.isArray(Y) || RhA(Y)) {
        if (K.has(Y)) return "[Circular]";
        K.add(Y);
      }
      return Y;
    }, 2);
  }
  sanitizeUrl(A) {
    if (typeof A !== "string" || A === null || A === "") return A;
    let K = new URL(A);
    if (!K.search) return A;
    for (let [q] of K.searchParams) if (!this.allowedQueryParameters.has(q.toLowerCase())) K.searchParams.set(q, DO6);
    return K.toString();
  }
  sanitizeHeaders(A) {
    let K = {};
    for (let q of Object.keys(A)) if (this.allowedHeaderNames.has(q.toLowerCase())) K[q] = A[q];else K[q] = DO6;
    return K;
  }
  sanitizeQuery(A) {
    if (typeof A !== "object" || A === null) return A;
    let K = {};
    for (let q of Object.keys(A)) if (this.allowedQueryParameters.has(q.toLowerCase())) K[q] = A[q];else K[q] = DO6;
    return K;
  }
}
__$.Mu = Mu;

class ot4 {
  constructor() {
    this.cachedHttpsAgents = new WeakMap();
  }
  async sendRequest(A) {
    var K, q, Y;
    let z = new AbortController(),
      w;
    if (A.abortSignal) {
      if (A.abortSignal.aborted) throw new Mo("The operation was aborted. Request has already been canceled.");
      w = _ => {
        if (_.type === "abort") z.abort();
      }, A.abortSignal.addEventListener("abort", w);
    }
    let H;
    if (A.timeout > 0) H = setTimeout(() => {
      let _ = new Mu();
      YI.info(`request to '${_.sanitizeUrl(A.url)}' timed out. canceling...`), z.abort();
    }, A.timeout);
    let J = A.headers.get("Accept-Encoding"),
      O = (J === null || J === void 0 ? void 0 : J.includes("gzip")) || (J === null || J === void 0 ? void 0 : J.includes("deflate")),
      X = typeof A.body === "function" ? A.body() : A.body;
    if (X && !A.headers.has("Content-Length")) {
      let _ = N1Y(X);
      if (_ !== null) A.headers.set("Content-Length", _);
    }
    let $;
    try {
      if (X && A.onUploadProgress) {
        let j = A.onUploadProgress,
          M = new PO6(j);
        if (M.on("error", P => {
          YI.error("Error in upload progress", P);
        }), IhA(X)) X.pipe(M);else M.end(X);
        X = M;
      }
      let _ = await this.makeRequest(A, z, X);
      if (H !== void 0) clearTimeout(H);
      let G = P1Y(_),
        W = {
          status: (K = _.statusCode) !== null && K !== void 0 ? K : 0,
          headers: G,
          request: A
        };
      if (A.method === "HEAD") return _.resume(), W;
      $ = O ? V1Y(_, G) : _;
      let D = A.onDownloadProgress;
      if (D) {
        let j = new PO6(D);
        j.on("error", M => {
          YI.error("Error in download progress", M);
        }), $.pipe(j), $ = j;
      }
      if (((q = A.streamResponseStatusCodes) === null || q === void 0 ? void 0 : q.has(Number.POSITIVE_INFINITY)) || ((Y = A.streamResponseStatusCodes) === null || Y === void 0 ? void 0 : Y.has(W.status))) W.readableStreamBody = $;else W.bodyAsText = await f1Y($);
      return W;
    } finally {
      if (A.abortSignal && w) {
        let _ = Promise.resolve();
        if (IhA(X)) _ = nt4(X);
        let G = Promise.resolve();
        if (IhA($)) G = nt4($);
        Promise.all([_, G]).then(() => {
          var Z;
          if (w) (Z = A.abortSignal) === null || Z === void 0 || Z.removeEventListener("abort", w);
        }).catch(Z => {
          YI.warning("Error when cleaning up abortListener on httpRequest", Z);
        });
      }
    }
  }
  makeRequest(A, K, q) {
    var Y;
    let z = new URL(A.url),
      w = z.protocol !== "https:";
    if (w && !A.allowInsecureConnection) throw Error(`Cannot connect to ${A.url} while allowInsecureConnection is false.`);
    let H = (Y = A.agent) !== null && Y !== void 0 ? Y : this.getOrCreateAgent(A, w),
      J = Object.assign({
        agent: H,
        hostname: z.hostname,
        path: `${z.pathname}${z.search}`,
        port: z.port,
        method: A.method,
        headers: A.headers.toJSON({
          preserveCase: !0
        })
      }, A.requestOverrides);
    return new Promise((O, X) => {
      let $ = w ? S_A.request(J, O) : h_A.request(J, O);
      if ($.once("error", _ => {
        var G;
        X(new rV(_.message, {
          code: (G = _.code) !== null && G !== void 0 ? G : rV.REQUEST_SEND_ERROR,
          request: A
        }));
      }), K.signal.addEventListener("abort", () => {
        let _ = new Mo("The operation was aborted. Rejecting from abort signal callback while making request.");
        $.destroy(_), X(_);
      }), q && IhA(q)) q.pipe($);else if (q) {
        if (typeof q === "string" || Buffer.isBuffer(q)) $.end(q);else if (rt4(q)) $.end(ArrayBuffer.isView(q) ? Buffer.from(q.buffer) : Buffer.from(q));else YI.error("Unrecognized body type", q), X(new rV("Unrecognized body type"));
      } else $.end();
    });
  }
  getOrCreateAgent(A, K) {
    var q;
    let Y = A.disableKeepAlive;
    if (K) {
      if (Y) return S_A.globalAgent;
      if (!this.cachedHttpAgent) this.cachedHttpAgent = new S_A.Agent({
        keepAlive: !0
      });
      return this.cachedHttpAgent;
    } else {
      if (Y && !A.tlsSettings) return h_A.globalAgent;
      let z = (q = A.tlsSettings) !== null && q !== void 0 ? q : M1Y,
        w = this.cachedHttpsAgents.get(z);
      if (w && w.options.keepAlive === !Y) return w;
      return YI.info("No cached TLS Agent exist, creating a new Agent"), w = new h_A.Agent(Object.assign({
        keepAlive: !Y
      }, z)), this.cachedHttpsAgents.set(z, w), w;
    }
  }
}
__$.ot4 = ot4;

class BhA {
  constructor(A) {
    this._contextMap = A instanceof BhA ? new Map(A._contextMap) : new Map();
  }
  setValue(A, K) {
    let q = new BhA(this);
    return q._contextMap.set(A, K), q;
  }
  getValue(A) {
    return this._contextMap.get(A);
  }
  deleteValue(A) {
    let K = new BhA(this);
    return K._contextMap.delete(A), K;
  }
}
__$.BhA = BhA;

class nw1 {
  constructor(A = {}) {
    var K, q;
    if (this._requestContentType = A.requestContentType, this._endpoint = (K = A.endpoint) !== null && K !== void 0 ? K : A.baseUri, A.baseUri) H17.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead.");
    if (this._allowInsecureConnection = A.allowInsecureConnection, this._httpClient = A.httpClient || K17(), this.pipeline = A.pipeline || t6Y(A), (q = A.additionalPolicies) === null || q === void 0 ? void 0 : q.length) for (let {
      policy: Y,
      position: z
    } of A.additionalPolicies) {
      let w = z === "perRetry" ? "Sign" : void 0;
      this.pipeline.addPolicy(Y, {
        afterPhase: w
      });
    }
  }
  async sendRequest(A) {
    return this.pipeline.sendRequest(this._httpClient, A);
  }
  async sendOperationRequest(A, K) {
    let q = K.baseUrl || this._endpoint;
    if (!q) throw Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a endpoint string property that contains the base URL to use.");
    let Y = z17(q, K, A, this),
      z = wI({
        url: Y
      });
    z.method = K.httpMethod;
    let w = TU(z);
    w.operationSpec = K, w.operationArguments = A;
    let H = K.contentType || this._requestContentType;
    if (H && K.requestBody) z.headers.set("Content-Type", H);
    let J = A.options;
    if (J) {
      let O = J.requestOptions;
      if (O) {
        if (O.timeout) z.timeout = O.timeout;
        if (O.onUploadProgress) z.onUploadProgress = O.onUploadProgress;
        if (O.onDownloadProgress) z.onDownloadProgress = O.onDownloadProgress;
        if (O.shouldDeserialize !== void 0) w.shouldDeserialize = O.shouldDeserialize;
        if (O.allowInsecureConnection) z.allowInsecureConnection = !0;
      }
      if (J.abortSignal) z.abortSignal = J.abortSignal;
      if (J.tracingOptions) z.tracingOptions = J.tracingOptions;
    }
    if (this._allowInsecureConnection) z.allowInsecureConnection = !0;
    if (z.streamResponseStatusCodes === void 0) z.streamResponseStatusCodes = aA7(K);
    try {
      let O = await this.sendRequest(z),
        X = XO6(O, K.responses[O.status]);
      if (J === null || J === void 0 ? void 0 : J.onResponse) J.onResponse(O, X);
      return X;
    } catch (O) {
      if (typeof O === "object" && (O === null || O === void 0 ? void 0 : O.response)) {
        let X = O.response,
          $ = XO6(X, K.responses[O.statusCode] || K.responses.default);
        if (O.details = $, J === null || J === void 0 ? void 0 : J.onResponse) J.onResponse(X, $, O);
      }
      throw O;
    }
  }
}
__$.nw1 = nw1;

class p7A {
  static serializeJSONBlob(A) {
    return JSON.stringify(A);
  }
  static serializeAccounts(A) {
    let K = {};
    return Object.keys(A).map(function (q) {
      let Y = A[q];
      K[q] = {
        home_account_id: Y.homeAccountId,
        environment: Y.environment,
        realm: Y.realm,
        local_account_id: Y.localAccountId,
        username: Y.username,
        authority_type: Y.authorityType,
        name: Y.name,
        client_info: Y.clientInfo,
        last_modification_time: Y.lastModificationTime,
        last_modification_app: Y.lastModificationApp,
        tenantProfiles: Y.tenantProfiles?.map(z => {
          return JSON.stringify(z);
        })
      };
    }), K;
  }
  static serializeIdTokens(A) {
    let K = {};
    return Object.keys(A).map(function (q) {
      let Y = A[q];
      K[q] = {
        home_account_id: Y.homeAccountId,
        environment: Y.environment,
        credential_type: Y.credentialType,
        client_id: Y.clientId,
        secret: Y.secret,
        realm: Y.realm
      };
    }), K;
  }
  static serializeAccessTokens(A) {
    let K = {};
    return Object.keys(A).map(function (q) {
      let Y = A[q];
      K[q] = {
        home_account_id: Y.homeAccountId,
        environment: Y.environment,
        credential_type: Y.credentialType,
        client_id: Y.clientId,
        secret: Y.secret,
        realm: Y.realm,
        target: Y.target,
        cached_at: Y.cachedAt,
        expires_on: Y.expiresOn,
        extended_expires_on: Y.extendedExpiresOn,
        refresh_on: Y.refreshOn,
        key_id: Y.keyId,
        token_type: Y.tokenType,
        requestedClaims: Y.requestedClaims,
        requestedClaimsHash: Y.requestedClaimsHash,
        userAssertionHash: Y.userAssertionHash
      };
    }), K;
  }
  static serializeRefreshTokens(A) {
    let K = {};
    return Object.keys(A).map(function (q) {
      let Y = A[q];
      K[q] = {
        home_account_id: Y.homeAccountId,
        environment: Y.environment,
        credential_type: Y.credentialType,
        client_id: Y.clientId,
        secret: Y.secret,
        family_id: Y.familyId,
        target: Y.target,
        realm: Y.realm
      };
    }), K;
  }
  static serializeAppMetadata(A) {
    let K = {};
    return Object.keys(A).map(function (q) {
      let Y = A[q];
      K[q] = {
        client_id: Y.clientId,
        environment: Y.environment,
        family_id: Y.familyId
      };
    }), K;
  }
  static serializeAllCache(A) {
    return {
      Account: this.serializeAccounts(A.accounts),
      IdToken: this.serializeIdTokens(A.idTokens),
      AccessToken: this.serializeAccessTokens(A.accessTokens),
      RefreshToken: this.serializeRefreshTokens(A.refreshTokens),
      AppMetadata: this.serializeAppMetadata(A.appMetadata)
    };
  }
}
__$.p7A = p7A;

class sV {
  constructor(A, K, q) {
    this.level = WO.Info;
    let Y = () => {
        return;
      },
      z = A || sV.createDefaultLoggerOptions();
    this.localCallback = z.loggerCallback || Y, this.piiLoggingEnabled = z.piiLoggingEnabled || !1, this.level = typeof z.logLevel === "number" ? z.logLevel : WO.Info, this.correlationId = z.correlationId || u6.EMPTY_STRING, this.packageName = K || u6.EMPTY_STRING, this.packageVersion = q || u6.EMPTY_STRING;
  }
  static createDefaultLoggerOptions() {
    return {
      loggerCallback: () => {},
      piiLoggingEnabled: !1,
      logLevel: WO.Info
    };
  }
  clone(A, K, q) {
    return new sV({
      loggerCallback: this.localCallback,
      piiLoggingEnabled: this.piiLoggingEnabled,
      logLevel: this.level,
      correlationId: q || this.correlationId
    }, A, K);
  }
  logMessage(A, K) {
    if (K.logLevel > this.level || !this.piiLoggingEnabled && K.containsPii) return;
    let z = `${`[${new Date().toUTCString()}] : [${K.correlationId || this.correlationId || ""}]`} : ${this.packageName}@${this.packageVersion} : ${WO[K.logLevel]} - ${A}`;
    this.executeCallback(K.logLevel, z, K.containsPii || !1);
  }
  executeCallback(A, K, q) {
    if (this.localCallback) this.localCallback(A, K, q);
  }
  error(A, K) {
    this.logMessage(A, {
      logLevel: WO.Error,
      containsPii: !1,
      correlationId: K || u6.EMPTY_STRING
    });
  }
  errorPii(A, K) {
    this.logMessage(A, {
      logLevel: WO.Error,
      containsPii: !0,
      correlationId: K || u6.EMPTY_STRING
    });
  }
  warning(A, K) {
    this.logMessage(A, {
      logLevel: WO.Warning,
      containsPii: !1,
      correlationId: K || u6.EMPTY_STRING
    });
  }
  warningPii(A, K) {
    this.logMessage(A, {
      logLevel: WO.Warning,
      containsPii: !0,
      correlationId: K || u6.EMPTY_STRING
    });
  }
  info(A, K) {
    this.logMessage(A, {
      logLevel: WO.Info,
      containsPii: !1,
      correlationId: K || u6.EMPTY_STRING
    });
  }
  infoPii(A, K) {
    this.logMessage(A, {
      logLevel: WO.Info,
      containsPii: !0,
      correlationId: K || u6.EMPTY_STRING
    });
  }
  verbose(A, K) {
    this.logMessage(A, {
      logLevel: WO.Verbose,
      containsPii: !1,
      correlationId: K || u6.EMPTY_STRING
    });
  }
  verbosePii(A, K) {
    this.logMessage(A, {
      logLevel: WO.Verbose,
      containsPii: !0,
      correlationId: K || u6.EMPTY_STRING
    });
  }
  trace(A, K) {
    this.logMessage(A, {
      logLevel: WO.Trace,
      containsPii: !1,
      correlationId: K || u6.EMPTY_STRING
    });
  }
  tracePii(A, K) {
    this.logMessage(A, {
      logLevel: WO.Trace,
      containsPii: !0,
      correlationId: K || u6.EMPTY_STRING
    });
  }
  isPiiLoggingEnabled() {
    return this.piiLoggingEnabled || !1;
  }
}
__$.sV = sV;

class Vw {
  static isEmptyObj(A) {
    if (A) try {
      let K = JSON.parse(A);
      return Object.keys(K).length === 0;
    } catch (K) {}
    return !0;
  }
  static startsWith(A, K) {
    return A.indexOf(K) === 0;
  }
  static endsWith(A, K) {
    return A.length >= K.length && A.lastIndexOf(K) === A.length - K.length;
  }
  static queryStringToObject(A) {
    let K = {},
      q = A.split("&"),
      Y = z => decodeURIComponent(z.replace(/\+/g, " "));
    return q.forEach(z => {
      if (z.trim()) {
        let [w, H] = z.split(/=(.+)/g, 2);
        if (w && H) K[Y(w)] = Y(H);
      }
    }), K;
  }
  static trimArrayEntries(A) {
    return A.map(K => K.trim());
  }
  static removeEmptyStringsFromArray(A) {
    return A.filter(K => {
      return !!K;
    });
  }
  static jsonParseHelper(A) {
    try {
      return JSON.parse(A);
    } catch (K) {
      return null;
    }
  }
  static matchPattern(A, K) {
    return new RegExp(A.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?")).test(K);
  }
}
__$.Vw = Vw;

class A0 {
  constructor(A) {
    let K = A ? Vw.trimArrayEntries([...A]) : [],
      q = K ? Vw.removeEmptyStringsFromArray(K) : [];
    if (!q || !q.length) throw az(GKA);
    this.scopes = new Set(), q.forEach(Y => this.scopes.add(Y));
  }
  static fromString(A) {
    let q = (A || u6.EMPTY_STRING).split(" ");
    return new A0(q);
  }
  static createSearchScopes(A) {
    let K = A && A.length > 0 ? A : [...mD],
      q = new A0(K);
    if (!q.containsOnlyOIDCScopes()) q.removeOIDCScopes();else q.removeScope(u6.OFFLINE_ACCESS_SCOPE);
    return q;
  }
  containsScope(A) {
    let K = this.printScopesLowerCase().split(" "),
      q = new A0(K);
    return A ? q.scopes.has(A.toLowerCase()) : !1;
  }
  containsScopeSet(A) {
    if (!A || A.scopes.size <= 0) return !1;
    return this.scopes.size >= A.scopes.size && A.asArray().every(K => this.containsScope(K));
  }
  containsOnlyOIDCScopes() {
    let A = 0;
    return J06.forEach(K => {
      if (this.containsScope(K)) A += 1;
    }), this.scopes.size === A;
  }
  appendScope(A) {
    if (A) this.scopes.add(A.trim());
  }
  appendScopes(A) {
    try {
      A.forEach(K => this.appendScope(K));
    } catch (K) {
      throw t6(YKA);
    }
  }
  removeScope(A) {
    if (!A) throw t6(qKA);
    this.scopes.delete(A.trim());
  }
  removeOIDCScopes() {
    J06.forEach(A => {
      this.scopes.delete(A);
    });
  }
  unionScopeSets(A) {
    if (!A) throw t6(ko);
    let K = new Set();
    return A.scopes.forEach(q => K.add(q.toLowerCase())), this.scopes.forEach(q => K.add(q.toLowerCase())), K;
  }
  intersectingScopeSets(A) {
    if (!A) throw t6(ko);
    if (!A.containsOnlyOIDCScopes()) A.removeOIDCScopes();
    let K = this.unionScopeSets(A),
      q = A.getScopeCount(),
      Y = this.getScopeCount();
    return K.size < Y + q;
  }
  getScopeCount() {
    return this.scopes.size;
  }
  asArray() {
    let A = [];
    return this.scopes.forEach(K => A.push(K)), A;
  }
  printScopes() {
    if (this.scopes) return this.asArray().join(" ");
    return u6.EMPTY_STRING;
  }
  printScopesLowerCase() {
    return this.printScopes().toLowerCase();
  }
}
__$.A0 = A0;

class J$ {
  static getAccountInfo(A) {
    return {
      homeAccountId: A.homeAccountId,
      environment: A.environment,
      tenantId: A.realm,
      username: A.username,
      localAccountId: A.localAccountId,
      loginHint: A.loginHint,
      name: A.name,
      nativeAccountId: A.nativeAccountId,
      authorityType: A.authorityType,
      tenantProfiles: new Map((A.tenantProfiles || []).map(K => {
        return [K.tenantId, K];
      })),
      dataBoundary: A.dataBoundary
    };
  }
  isSingleTenant() {
    return !this.tenantProfiles;
  }
  static createAccount(A, K, q) {
    let Y = new J$();
    if (K.authorityType === jC.Adfs) Y.authorityType = c7A.ADFS_ACCOUNT_TYPE;else if (K.protocolMode === gD.OIDC) Y.authorityType = c7A.GENERIC_ACCOUNT_TYPE;else Y.authorityType = c7A.MSSTS_ACCOUNT_TYPE;
    let z;
    if (A.clientInfo && q) {
      if (z = a_A(A.clientInfo, q), z.xms_tdbr) Y.dataBoundary = z.xms_tdbr === "EU" ? "EU" : "None";
    }
    Y.clientInfo = A.clientInfo, Y.homeAccountId = A.homeAccountId, Y.nativeAccountId = A.nativeAccountId;
    let w = A.environment || K && K.getPreferredCache();
    if (!w) throw t6(CU);
    Y.environment = w, Y.realm = z?.utid || zH1(A.idTokenClaims) || "", Y.localAccountId = z?.uid || A.idTokenClaims?.oid || A.idTokenClaims?.sub || "";
    let H = A.idTokenClaims?.preferred_username || A.idTokenClaims?.upn,
      J = A.idTokenClaims?.emails ? A.idTokenClaims.emails[0] : null;
    if (Y.username = H || J || "", Y.loginHint = A.idTokenClaims?.login_hint, Y.name = A.idTokenClaims?.name || "", Y.cloudGraphHostName = A.cloudGraphHostName, Y.msGraphHost = A.msGraphHost, A.tenantProfiles) Y.tenantProfiles = A.tenantProfiles;else {
      let O = NbA(A.homeAccountId, Y.localAccountId, Y.realm, A.idTokenClaims);
      Y.tenantProfiles = [O];
    }
    return Y;
  }
  static createFromAccountInfo(A, K, q) {
    let Y = new J$();
    return Y.authorityType = A.authorityType || c7A.GENERIC_ACCOUNT_TYPE, Y.homeAccountId = A.homeAccountId, Y.localAccountId = A.localAccountId, Y.nativeAccountId = A.nativeAccountId, Y.realm = A.tenantId, Y.environment = A.environment, Y.username = A.username, Y.name = A.name, Y.loginHint = A.loginHint, Y.cloudGraphHostName = K, Y.msGraphHost = q, Y.tenantProfiles = Array.from(A.tenantProfiles?.values() || []), Y.dataBoundary = A.dataBoundary, Y;
  }
  static generateHomeAccountId(A, K, q, Y, z) {
    if (!(K === jC.Adfs || K === jC.Dsts)) {
      if (A) try {
        let w = a_A(A, Y.base64Decode);
        if (w.uid && w.utid) return `${w.uid}.${w.utid}`;
      } catch (w) {}
      q.warning("No client info in response");
    }
    return z?.sub || "";
  }
  static isAccountEntity(A) {
    if (!A) return !1;
    return A.hasOwnProperty("homeAccountId") && A.hasOwnProperty("environment") && A.hasOwnProperty("realm") && A.hasOwnProperty("localAccountId") && A.hasOwnProperty("username") && A.hasOwnProperty("authorityType");
  }
  static accountInfoIsEqual(A, K, q) {
    if (!A || !K) return !1;
    let Y = !0;
    if (q) {
      let z = A.idTokenClaims || {},
        w = K.idTokenClaims || {};
      Y = z.iat === w.iat && z.nonce === w.nonce;
    }
    return A.homeAccountId === K.homeAccountId && A.localAccountId === K.localAccountId && A.username === K.username && A.tenantId === K.tenantId && A.loginHint === K.loginHint && A.environment === K.environment && A.nativeAccountId === K.nativeAccountId && Y;
  }
}
__$.J$ = J$;

class p5 {
  get urlString() {
    return this._urlString;
  }
  constructor(A) {
    if (this._urlString = A, !this._urlString) throw az(_KA);
    if (!A.includes("#")) this._urlString = p5.canonicalizeUri(A);
  }
  static canonicalizeUri(A) {
    if (A) {
      let K = A.toLowerCase();
      if (Vw.endsWith(K, "?")) K = K.slice(0, -1);else if (Vw.endsWith(K, "?/")) K = K.slice(0, -2);
      if (!Vw.endsWith(K, "/")) K += "/";
      return K;
    }
    return A;
  }
  validateAsUri() {
    let A;
    try {
      A = this.getUrlComponents();
    } catch (K) {
      throw az(Tu);
    }
    if (!A.HostNameAndPort || !A.PathSegments) throw az(Tu);
    if (!A.Protocol || A.Protocol.toLowerCase() !== "https:") throw az($KA);
  }
  static appendQueryString(A, K) {
    if (!K) return A;
    return A.indexOf("?") < 0 ? `${A}?${K}` : `${A}&${K}`;
  }
  static removeHashFromUrl(A) {
    return p5.canonicalizeUri(A.split("#")[0]);
  }
  replaceTenantPath(A) {
    let K = this.getUrlComponents(),
      q = K.PathSegments;
    if (A && q.length !== 0 && (q[0] === oV.COMMON || q[0] === oV.ORGANIZATIONS)) q[0] = A;
    return p5.constructAuthorityUriFromObject(K);
  }
  getUrlComponents() {
    let A = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),
      K = this.urlString.match(A);
    if (!K) throw az(Tu);
    let q = {
        Protocol: K[1],
        HostNameAndPort: K[4],
        AbsolutePath: K[5],
        QueryString: K[7]
      },
      Y = q.AbsolutePath.split("/");
    if (Y = Y.filter(z => z && z.length > 0), q.PathSegments = Y, q.QueryString && q.QueryString.endsWith("/")) q.QueryString = q.QueryString.substring(0, q.QueryString.length - 1);
    return q;
  }
  static getDomainFromUrl(A) {
    let K = RegExp("^([^:/?#]+://)?([^/?#]*)"),
      q = A.match(K);
    if (!q) throw az(Tu);
    return q[2];
  }
  static getAbsoluteUrl(A, K) {
    if (A[0] === u6.FORWARD_SLASH) {
      let Y = new p5(K).getUrlComponents();
      return Y.Protocol + "//" + Y.HostNameAndPort + A;
    }
    return A;
  }
  static constructAuthorityUriFromObject(A) {
    return new p5(A.Protocol + "//" + A.HostNameAndPort + "/" + A.PathSegments.join("/"));
  }
  static hashContainsKnownProperties(A) {
    return !!M06(A);
  }
}
__$.p5 = p5;

class VKA {
  constructor(A, K, q, Y, z) {
    this.clientId = A, this.cryptoImpl = K, this.commonLogger = q.clone(ew1, n_A), this.staticAuthorityOptions = z, this.performanceClient = Y;
  }
  getAllAccounts(A, K) {
    return this.buildTenantProfiles(this.getAccountsFilteredBy(A, K), K, A);
  }
  getAccountInfoFilteredBy(A, K) {
    if (Object.keys(A).length === 0 || Object.values(A).every(Y => !Y)) return this.commonLogger.warning("getAccountInfoFilteredBy: Account filter is empty or invalid, returning null"), null;
    let q = this.getAllAccounts(A, K);
    if (q.length > 1) return q.sort(z => {
      return z.idTokenClaims ? -1 : 1;
    })[0];else if (q.length === 1) return q[0];else return null;
  }
  getBaseAccountInfo(A, K) {
    let q = this.getAccountsFilteredBy(A, K);
    if (q.length > 0) return J$.getAccountInfo(q[0]);else return null;
  }
  buildTenantProfiles(A, K, q) {
    return A.flatMap(Y => {
      return this.getTenantProfilesFromAccountEntity(Y, K, q?.tenantId, q);
    });
  }
  getTenantedAccountInfoByFilter(A, K, q, Y, z) {
    let w = null,
      H;
    if (z) {
      if (!this.tenantProfileMatchesFilter(q, z)) return null;
    }
    let J = this.getIdToken(A, Y, K, q.tenantId);
    if (J) {
      if (H = SU(J.secret, this.cryptoImpl.base64Decode), !this.idTokenClaimsMatchTenantProfileFilter(H, z)) return null;
    }
    return w = qH1(A, q, H, J?.secret), w;
  }
  getTenantProfilesFromAccountEntity(A, K, q, Y) {
    let z = J$.getAccountInfo(A),
      w = z.tenantProfiles || new Map(),
      H = this.getTokenKeys();
    if (q) {
      let O = w.get(q);
      if (O) w = new Map([[q, O]]);else return [];
    }
    let J = [];
    return w.forEach(O => {
      let X = this.getTenantedAccountInfoByFilter(z, H, O, K, Y);
      if (X) J.push(X);
    }), J;
  }
  tenantProfileMatchesFilter(A, K) {
    if (!!K.localAccountId && !this.matchLocalAccountIdFromTenantProfile(A, K.localAccountId)) return !1;
    if (!!K.name && A.name !== K.name) return !1;
    if (K.isHomeTenant !== void 0 && A.isHomeTenant !== K.isHomeTenant) return !1;
    return !0;
  }
  idTokenClaimsMatchTenantProfileFilter(A, K) {
    if (K) {
      if (!!K.localAccountId && !this.matchLocalAccountIdFromTokenClaims(A, K.localAccountId)) return !1;
      if (!!K.loginHint && !this.matchLoginHintFromTokenClaims(A, K.loginHint)) return !1;
      if (!!K.username && !this.matchUsername(A.preferred_username, K.username)) return !1;
      if (!!K.name && !this.matchName(A, K.name)) return !1;
      if (!!K.sid && !this.matchSid(A, K.sid)) return !1;
    }
    return !0;
  }
  async saveCacheRecord(A, K, q, Y) {
    if (!A) throw t6(zKA);
    try {
      if (A.account) await this.setAccount(A.account, K, q);
      if (!!A.idToken && Y?.idToken !== !1) await this.setIdTokenCredential(A.idToken, K, q);
      if (!!A.accessToken && Y?.accessToken !== !1) await this.saveAccessToken(A.accessToken, K, q);
      if (!!A.refreshToken && Y?.refreshToken !== !1) await this.setRefreshTokenCredential(A.refreshToken, K, q);
      if (A.appMetadata) this.setAppMetadata(A.appMetadata, K);
    } catch (z) {
      if (this.commonLogger?.error("CacheManager.saveCacheRecord: failed"), z instanceof V5) throw z;else throw k17(z);
    }
  }
  async saveAccessToken(A, K, q) {
    let Y = {
        clientId: A.clientId,
        credentialType: A.credentialType,
        environment: A.environment,
        homeAccountId: A.homeAccountId,
        realm: A.realm,
        tokenType: A.tokenType,
        requestedClaimsHash: A.requestedClaimsHash
      },
      z = this.getTokenKeys(),
      w = A0.fromString(A.target);
    z.accessToken.forEach(H => {
      if (!this.accessTokenKeyMatchesFilter(H, Y, !1)) return;
      let J = this.getAccessTokenCredential(H, K);
      if (J && this.credentialMatchesFilter(J, Y)) {
        if (A0.fromString(J.target).intersectingScopeSets(w)) this.removeAccessToken(H, K);
      }
    }), await this.setAccessTokenCredential(A, K, q);
  }
  getAccountsFilteredBy(A, K) {
    let q = this.getAccountKeys(),
      Y = [];
    return q.forEach(z => {
      let w = this.getAccount(z, K);
      if (!w) return;
      if (!!A.homeAccountId && !this.matchHomeAccountId(w, A.homeAccountId)) return;
      if (!!A.username && !this.matchUsername(w.username, A.username)) return;
      if (!!A.environment && !this.matchEnvironment(w, A.environment)) return;
      if (!!A.realm && !this.matchRealm(w, A.realm)) return;
      if (!!A.nativeAccountId && !this.matchNativeAccountId(w, A.nativeAccountId)) return;
      if (!!A.authorityType && !this.matchAuthorityType(w, A.authorityType)) return;
      let H = {
          localAccountId: A?.localAccountId,
          name: A?.name
        },
        J = w.tenantProfiles?.filter(O => {
          return this.tenantProfileMatchesFilter(O, H);
        });
      if (J && J.length === 0) return;
      Y.push(w);
    }), Y;
  }
  credentialMatchesFilter(A, K) {
    if (!!K.clientId && !this.matchClientId(A, K.clientId)) return !1;
    if (!!K.userAssertionHash && !this.matchUserAssertionHash(A, K.userAssertionHash)) return !1;
    if (typeof K.homeAccountId === "string" && !this.matchHomeAccountId(A, K.homeAccountId)) return !1;
    if (!!K.environment && !this.matchEnvironment(A, K.environment)) return !1;
    if (!!K.realm && !this.matchRealm(A, K.realm)) return !1;
    if (!!K.credentialType && !this.matchCredentialType(A, K.credentialType)) return !1;
    if (!!K.familyId && !this.matchFamilyId(A, K.familyId)) return !1;
    if (!!K.target && !this.matchTarget(A, K.target)) return !1;
    if (K.requestedClaimsHash || A.requestedClaimsHash) {
      if (A.requestedClaimsHash !== K.requestedClaimsHash) return !1;
    }
    if (A.credentialType === U2.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
      if (!!K.tokenType && !this.matchTokenType(A, K.tokenType)) return !1;
      if (K.tokenType === x9.SSH) {
        if (K.keyId && !this.matchKeyId(A, K.keyId)) return !1;
      }
    }
    return !0;
  }
  getAppMetadataFilteredBy(A) {
    let K = this.getKeys(),
      q = {};
    return K.forEach(Y => {
      if (!this.isAppMetadata(Y)) return;
      let z = this.getAppMetadata(Y);
      if (!z) return;
      if (!!A.environment && !this.matchEnvironment(z, A.environment)) return;
      if (!!A.clientId && !this.matchClientId(z, A.clientId)) return;
      q[Y] = z;
    }), q;
  }
  getAuthorityMetadataByAlias(A) {
    let K = this.getAuthorityMetadataKeys(),
      q = null;
    return K.forEach(Y => {
      if (!this.isAuthorityMetadata(Y) || Y.indexOf(this.clientId) === -1) return;
      let z = this.getAuthorityMetadata(Y);
      if (!z) return;
      if (z.aliases.indexOf(A) === -1) return;
      q = z;
    }), q;
  }
  removeAllAccounts(A) {
    this.getAllAccounts({}, A).forEach(q => {
      this.removeAccount(q, A);
    });
  }
  removeAccount(A, K) {
    this.removeAccountContext(A, K);
    let q = this.getAccountKeys(),
      Y = z => {
        return z.includes(A.homeAccountId) && z.includes(A.environment);
      };
    q.filter(Y).forEach(z => {
      this.removeItem(z, K), this.performanceClient.incrementFields({
        accountsRemoved: 1
      }, K);
    });
  }
  removeAccountContext(A, K) {
    let q = this.getTokenKeys(),
      Y = z => {
        return z.includes(A.homeAccountId) && z.includes(A.environment);
      };
    q.idToken.filter(Y).forEach(z => {
      this.removeIdToken(z, K);
    }), q.accessToken.filter(Y).forEach(z => {
      this.removeAccessToken(z, K);
    }), q.refreshToken.filter(Y).forEach(z => {
      this.removeRefreshToken(z, K);
    });
  }
  removeAccessToken(A, K) {
    let q = this.getAccessTokenCredential(A, K);
    if (this.removeItem(A, K), this.performanceClient.incrementFields({
      accessTokensRemoved: 1
    }, K), !q || q.credentialType.toLowerCase() !== U2.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase() || q.tokenType !== x9.POP) return;
    let Y = q.keyId;
    if (Y) this.cryptoImpl.removeTokenBindingKey(Y).catch(() => {
      this.commonLogger.error(`Failed to remove token binding key ${Y}`, K), this.performanceClient?.incrementFields({
        removeTokenBindingKeyFailure: 1
      }, K);
    });
  }
  removeAppMetadata(A) {
    return this.getKeys().forEach(q => {
      if (this.isAppMetadata(q)) this.removeItem(q, A);
    }), !0;
  }
  getIdToken(A, K, q, Y, z) {
    this.commonLogger.trace("CacheManager - getIdToken called");
    let w = {
        homeAccountId: A.homeAccountId,
        environment: A.environment,
        credentialType: U2.ID_TOKEN,
        clientId: this.clientId,
        realm: Y
      },
      H = this.getIdTokensByFilter(w, K, q),
      J = H.size;
    if (J < 1) return this.commonLogger.info("CacheManager:getIdToken - No token found"), null;else if (J > 1) {
      let O = H;
      if (!Y) {
        let X = new Map();
        H.forEach((_, G) => {
          if (_.realm === A.tenantId) X.set(G, _);
        });
        let $ = X.size;
        if ($ < 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result"), H.values().next().value;else if ($ === 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile"), X.values().next().value;else O = X;
      }
      if (this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them"), O.forEach((X, $) => {
        this.removeIdToken($, K);
      }), z && K) z.addFields({
        multiMatchedID: H.size
      }, K);
      return null;
    }
    return this.commonLogger.info("CacheManager:getIdToken - Returning ID token"), H.values().next().value;
  }
  getIdTokensByFilter(A, K, q) {
    let Y = q && q.idToken || this.getTokenKeys().idToken,
      z = new Map();
    return Y.forEach(w => {
      if (!this.idTokenKeyMatchesFilter(w, {
        clientId: this.clientId,
        ...A
      })) return;
      let H = this.getIdTokenCredential(w, K);
      if (H && this.credentialMatchesFilter(H, A)) z.set(w, H);
    }), z;
  }
  idTokenKeyMatchesFilter(A, K) {
    let q = A.toLowerCase();
    if (K.clientId && q.indexOf(K.clientId.toLowerCase()) === -1) return !1;
    if (K.homeAccountId && q.indexOf(K.homeAccountId.toLowerCase()) === -1) return !1;
    return !0;
  }
  removeIdToken(A, K) {
    this.removeItem(A, K);
  }
  removeRefreshToken(A, K) {
    this.removeItem(A, K);
  }
  getAccessToken(A, K, q, Y) {
    let z = K.correlationId;
    this.commonLogger.trace("CacheManager - getAccessToken called", z);
    let w = A0.createSearchScopes(K.scopes),
      H = K.authenticationScheme || x9.BEARER,
      J = H && H.toLowerCase() !== x9.BEARER.toLowerCase() ? U2.ACCESS_TOKEN_WITH_AUTH_SCHEME : U2.ACCESS_TOKEN,
      O = {
        homeAccountId: A.homeAccountId,
        environment: A.environment,
        credentialType: J,
        clientId: this.clientId,
        realm: Y || A.tenantId,
        target: w,
        tokenType: H,
        keyId: K.sshKid,
        requestedClaimsHash: K.requestedClaimsHash
      },
      X = q && q.accessToken || this.getTokenKeys().accessToken,
      $ = [];
    X.forEach(G => {
      if (this.accessTokenKeyMatchesFilter(G, O, !0)) {
        let Z = this.getAccessTokenCredential(G, z);
        if (Z && this.credentialMatchesFilter(Z, O)) $.push(Z);
      }
    });
    let _ = $.length;
    if (_ < 1) return this.commonLogger.info("CacheManager:getAccessToken - No token found", z), null;else if (_ > 1) return this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them", z), $.forEach(G => {
      this.removeAccessToken(this.generateCredentialKey(G), z);
    }), this.performanceClient.addFields({
      multiMatchedAT: $.length
    }, z), null;
    return this.commonLogger.info("CacheManager:getAccessToken - Returning access token", z), $[0];
  }
  accessTokenKeyMatchesFilter(A, K, q) {
    let Y = A.toLowerCase();
    if (K.clientId && Y.indexOf(K.clientId.toLowerCase()) === -1) return !1;
    if (K.homeAccountId && Y.indexOf(K.homeAccountId.toLowerCase()) === -1) return !1;
    if (K.realm && Y.indexOf(K.realm.toLowerCase()) === -1) return !1;
    if (K.requestedClaimsHash && Y.indexOf(K.requestedClaimsHash.toLowerCase()) === -1) return !1;
    if (K.target) {
      let z = K.target.asArray();
      for (let w = 0; w < z.length; w++) if (q && !Y.includes(z[w].toLowerCase())) return !1;else if (!q && Y.includes(z[w].toLowerCase())) return !0;
    }
    return !0;
  }
  getAccessTokensByFilter(A, K) {
    let q = this.getTokenKeys(),
      Y = [];
    return q.accessToken.forEach(z => {
      if (!this.accessTokenKeyMatchesFilter(z, A, !0)) return;
      let w = this.getAccessTokenCredential(z, K);
      if (w && this.credentialMatchesFilter(w, A)) Y.push(w);
    }), Y;
  }
  getRefreshToken(A, K, q, Y, z) {
    this.commonLogger.trace("CacheManager - getRefreshToken called");
    let w = K ? No : void 0,
      H = {
        homeAccountId: A.homeAccountId,
        environment: A.environment,
        credentialType: U2.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: w
      },
      J = Y && Y.refreshToken || this.getTokenKeys().refreshToken,
      O = [];
    J.forEach($ => {
      if (this.refreshTokenKeyMatchesFilter($, H)) {
        let _ = this.getRefreshTokenCredential($, q);
        if (_ && this.credentialMatchesFilter(_, H)) O.push(_);
      }
    });
    let X = O.length;
    if (X < 1) return this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), null;
    if (X > 1 && z && q) z.addFields({
      multiMatchedRT: X
    }, q);
    return this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), O[0];
  }
  refreshTokenKeyMatchesFilter(A, K) {
    let q = A.toLowerCase();
    if (K.familyId && q.indexOf(K.familyId.toLowerCase()) === -1) return !1;
    if (!K.familyId && K.clientId && q.indexOf(K.clientId.toLowerCase()) === -1) return !1;
    if (K.homeAccountId && q.indexOf(K.homeAccountId.toLowerCase()) === -1) return !1;
    return !0;
  }
  readAppMetadataFromCache(A) {
    let K = {
        environment: A,
        clientId: this.clientId
      },
      q = this.getAppMetadataFilteredBy(K),
      Y = Object.keys(q).map(w => q[w]),
      z = Y.length;
    if (z < 1) return null;else if (z > 1) throw t6(AKA);
    return Y[0];
  }
  isAppMetadataFOCI(A) {
    let K = this.readAppMetadataFromCache(A);
    return !!(K && K.familyId === No);
  }
  matchHomeAccountId(A, K) {
    return typeof A.homeAccountId === "string" && K === A.homeAccountId;
  }
  matchLocalAccountIdFromTokenClaims(A, K) {
    let q = A.oid || A.sub;
    return K === q;
  }
  matchLocalAccountIdFromTenantProfile(A, K) {
    return A.localAccountId === K;
  }
  matchName(A, K) {
    return K.toLowerCase() === A.name?.toLowerCase();
  }
  matchUsername(A, K) {
    return !!(A && typeof A === "string" && K?.toLowerCase() === A.toLowerCase());
  }
  matchUserAssertionHash(A, K) {
    return !!(A.userAssertionHash && K === A.userAssertionHash);
  }
  matchEnvironment(A, K) {
    if (this.staticAuthorityOptions) {
      let Y = T17(this.staticAuthorityOptions, this.commonLogger);
      if (Y.includes(K) && Y.includes(A.environment)) return !0;
    }
    let q = this.getAuthorityMetadataByAlias(K);
    if (q && q.aliases.indexOf(A.environment) > -1) return !0;
    return !1;
  }
  matchCredentialType(A, K) {
    return A.credentialType && K.toLowerCase() === A.credentialType.toLowerCase();
  }
  matchClientId(A, K) {
    return !!(A.clientId && K === A.clientId);
  }
  matchFamilyId(A, K) {
    return !!(A.familyId && K === A.familyId);
  }
  matchRealm(A, K) {
    return A.realm?.toLowerCase() === K.toLowerCase();
  }
  matchNativeAccountId(A, K) {
    return !!(A.nativeAccountId && K === A.nativeAccountId);
  }
  matchLoginHintFromTokenClaims(A, K) {
    if (A.login_hint === K) return !0;
    if (A.preferred_username === K) return !0;
    if (A.upn === K) return !0;
    return !1;
  }
  matchSid(A, K) {
    return A.sid === K;
  }
  matchAuthorityType(A, K) {
    return !!(A.authorityType && K.toLowerCase() === A.authorityType.toLowerCase());
  }
  matchTarget(A, K) {
    if (A.credentialType !== U2.ACCESS_TOKEN && A.credentialType !== U2.ACCESS_TOKEN_WITH_AUTH_SCHEME || !A.target) return !1;
    return A0.fromString(A.target).containsScopeSet(K);
  }
  matchTokenType(A, K) {
    return !!(A.tokenType && A.tokenType === K);
  }
  matchKeyId(A, K) {
    return !!(A.keyId && A.keyId === K);
  }
  isAppMetadata(A) {
    return A.indexOf(chA) !== -1;
  }
  isAuthorityMetadata(A) {
    return A.indexOf(d_A.CACHE_KEY) !== -1;
  }
  generateAuthorityMetadataCacheKey(A) {
    return `${d_A.CACHE_KEY}-${this.clientId}-${A}`;
  }
  static toObject(A, K) {
    for (let q in K) A[q] = K[q];
    return A;
  }
}
__$.VKA = VKA;

class k06 {
  startMeasurement() {
    return;
  }
  endMeasurement() {
    return;
  }
  flushMeasurement() {
    return null;
  }
}
__$.k06 = k06;

class e_A {
  generateId() {
    return "callback-id";
  }
  startMeasurement(A, K) {
    return {
      end: () => null,
      discard: () => {},
      add: () => {},
      increment: () => {},
      event: {
        eventId: this.generateId(),
        status: L17.InProgress,
        authority: "",
        libraryName: "",
        libraryVersion: "",
        clientId: "",
        name: A,
        startTimeMs: Date.now(),
        correlationId: K || ""
      },
      measurement: new k06()
    };
  }
  startPerformanceMeasurement() {
    return new k06();
  }
  calculateQueuedTime() {
    return 0;
  }
  addQueueMeasurement() {
    return;
  }
  setPreQueueTime() {
    return;
  }
  endMeasurement() {
    return null;
  }
  discardMeasurements() {
    return;
  }
  removePerformanceCallback() {
    return !0;
  }
  addPerformanceCallback() {
    return "";
  }
  emitEvents() {
    return;
  }
  addFields() {
    return;
  }
  incrementFields() {
    return;
  }
  cacheEventByCorrelationId() {
    return;
  }
}
__$.e_A = e_A;

class QbA {
  constructor(A, K, q, Y) {
    this.networkInterface = A, this.logger = K, this.performanceClient = q, this.correlationId = Y;
  }
  async detectRegion(A, K) {
    this.performanceClient?.addQueueMeasurement(j6.RegionDiscoveryDetectRegion, this.correlationId);
    let q = A;
    if (!q) {
      let Y = QbA.IMDS_OPTIONS;
      try {
        let z = await e9(this.getRegionFromIMDS.bind(this), j6.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(u6.IMDS_VERSION, Y);
        if (z.status === P5.SUCCESS) q = z.body, K.region_source = l7A.IMDS;
        if (z.status === P5.BAD_REQUEST) {
          let w = await e9(this.getCurrentVersion.bind(this), j6.RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(Y);
          if (!w) return K.region_source = l7A.FAILED_AUTO_DETECTION, null;
          let H = await e9(this.getRegionFromIMDS.bind(this), j6.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(w, Y);
          if (H.status === P5.SUCCESS) q = H.body, K.region_source = l7A.IMDS;
        }
      } catch (z) {
        return K.region_source = l7A.FAILED_AUTO_DETECTION, null;
      }
    } else K.region_source = l7A.ENVIRONMENT_VARIABLE;
    if (!q) K.region_source = l7A.FAILED_AUTO_DETECTION;
    return q || null;
  }
  async getRegionFromIMDS(A, K) {
    return this.performanceClient?.addQueueMeasurement(j6.RegionDiscoveryGetRegionFromIMDS, this.correlationId), this.networkInterface.sendGetRequestAsync(`${u6.IMDS_ENDPOINT}?api-version=${A}&format=text`, K, u6.IMDS_TIMEOUT);
  }
  async getCurrentVersion(A) {
    this.performanceClient?.addQueueMeasurement(j6.RegionDiscoveryGetCurrentVersion, this.correlationId);
    try {
      let K = await this.networkInterface.sendGetRequestAsync(`${u6.IMDS_ENDPOINT}?format=json`, A);
      if (K.status === P5.BAD_REQUEST && K.body && K.body["newest-versions"] && K.body["newest-versions"].length > 0) return K.body["newest-versions"][0];
      return null;
    } catch (K) {
      return null;
    }
  }
}
__$.QbA = QbA;

class $_ {
  constructor(A, K, q, Y, z, w, H, J) {
    this.canonicalAuthority = A, this._canonicalAuthority.validateAsUri(), this.networkInterface = K, this.cacheManager = q, this.authorityOptions = Y, this.regionDiscoveryMetadata = {
      region_used: void 0,
      region_source: void 0,
      region_outcome: void 0
    }, this.logger = z, this.performanceClient = H, this.correlationId = w, this.managedIdentity = J || !1, this.regionDiscovery = new QbA(K, this.logger, this.performanceClient, this.correlationId);
  }
  getAuthorityType(A) {
    if (A.HostNameAndPort.endsWith(u6.CIAM_AUTH_URL)) return jC.Ciam;
    let K = A.PathSegments;
    if (K.length) switch (K[0].toLowerCase()) {
      case u6.ADFS:
        return jC.Adfs;
      case u6.DSTS:
        return jC.Dsts;
    }
    return jC.Default;
  }
  get authorityType() {
    return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
  }
  get protocolMode() {
    return this.authorityOptions.protocolMode;
  }
  get options() {
    return this.authorityOptions;
  }
  get canonicalAuthority() {
    return this._canonicalAuthority.urlString;
  }
  set canonicalAuthority(A) {
    this._canonicalAuthority = new p5(A), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null;
  }
  get canonicalAuthorityUrlComponents() {
    if (!this._canonicalAuthorityUrlComponents) this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
    return this._canonicalAuthorityUrlComponents;
  }
  get hostnameAndPort() {
    return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
  }
  get tenant() {
    return this.canonicalAuthorityUrlComponents.PathSegments[0];
  }
  get authorizationEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.authorization_endpoint);else throw t6(kM);
  }
  get tokenEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint);else throw t6(kM);
  }
  get deviceCodeEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));else throw t6(kM);
  }
  get endSessionEndpoint() {
    if (this.discoveryComplete()) {
      if (!this.metadata.end_session_endpoint) throw t6(JKA);
      return this.replacePath(this.metadata.end_session_endpoint);
    } else throw t6(kM);
  }
  get selfSignedJwtAudience() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.issuer);else throw t6(kM);
  }
  get jwksUri() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.jwks_uri);else throw t6(kM);
  }
  canReplaceTenant(A) {
    return A.PathSegments.length === 1 && !$_.reservedTenantDomains.has(A.PathSegments[0]) && this.getAuthorityType(A) === jC.Default && this.protocolMode !== gD.OIDC;
  }
  replaceTenant(A) {
    return A.replace(/{tenant}|{tenantid}/g, this.tenant);
  }
  replacePath(A) {
    let K = A,
      Y = new p5(this.metadata.canonical_authority).getUrlComponents(),
      z = Y.PathSegments;
    return this.canonicalAuthorityUrlComponents.PathSegments.forEach((H, J) => {
      let O = z[J];
      if (J === 0 && this.canReplaceTenant(Y)) {
        let X = new p5(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
        if (O !== X) this.logger.verbose(`Replacing tenant domain name ${O} with id ${X}`), O = X;
      }
      if (H !== O) K = K.replace(`/${O}/`, `/${H}/`);
    }), this.replaceTenant(K);
  }
  get defaultOpenIdConfigurationEndpoint() {
    let A = this.hostnameAndPort;
    if (this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === jC.Adfs || this.protocolMode === gD.OIDC && !this.isAliasOfKnownMicrosoftAuthority(A)) return `${this.canonicalAuthority}.well-known/openid-configuration`;
    return `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
  }
  discoveryComplete() {
    return !!this.metadata;
  }
  async resolveEndpointsAsync() {
    this.performanceClient?.addQueueMeasurement(j6.AuthorityResolveEndpointsAsync, this.correlationId);
    let A = this.getCurrentMetadataEntity(),
      K = await e9(this.updateCloudDiscoveryMetadata.bind(this), j6.AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(A);
    this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, A.preferred_network);
    let q = await e9(this.updateEndpointMetadata.bind(this), j6.AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(A);
    this.updateCachedMetadata(A, K, {
      source: q
    }), this.performanceClient?.addFields({
      cloudDiscoverySource: K,
      authorityEndpointSource: q
    }, this.correlationId);
  }
  getCurrentMetadataEntity() {
    let A = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
    if (!A) A = {
      aliases: [],
      preferred_cache: this.hostnameAndPort,
      preferred_network: this.hostnameAndPort,
      canonical_authority: this.canonicalAuthority,
      authorization_endpoint: "",
      token_endpoint: "",
      end_session_endpoint: "",
      issuer: "",
      aliasesFromNetwork: !1,
      endpointsFromNetwork: !1,
      expiresAt: PH1(),
      jwks_uri: ""
    };
    return A;
  }
  updateCachedMetadata(A, K, q) {
    if (K !== EM.CACHE && q?.source !== EM.CACHE) A.expiresAt = PH1(), A.canonical_authority = this.canonicalAuthority;
    let Y = this.cacheManager.generateAuthorityMetadataCacheKey(A.preferred_cache);
    this.cacheManager.setAuthorityMetadata(Y, A), this.metadata = A;
  }
  async updateEndpointMetadata(A) {
    this.performanceClient?.addQueueMeasurement(j6.AuthorityUpdateEndpointMetadata, this.correlationId);
    let K = this.updateEndpointMetadataFromLocalSources(A);
    if (K) {
      if (K.source === EM.HARDCODED_VALUES) {
        if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
          if (K.metadata) {
            let Y = await e9(this.updateMetadataWithRegionalInformation.bind(this), j6.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(K.metadata);
            wGA(A, Y, !1), A.canonical_authority = this.canonicalAuthority;
          }
        }
      }
      return K.source;
    }
    let q = await e9(this.getEndpointMetadataFromNetwork.bind(this), j6.AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (q) {
      if (this.authorityOptions.azureRegionConfiguration?.azureRegion) q = await e9(this.updateMetadataWithRegionalInformation.bind(this), j6.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(q);
      return wGA(A, q, !0), EM.NETWORK;
    } else throw t6(o7A, this.defaultOpenIdConfigurationEndpoint);
  }
  updateEndpointMetadataFromLocalSources(A) {
    this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
    let K = this.getEndpointMetadataFromConfig();
    if (K) return this.logger.verbose("Found endpoint metadata in authority configuration"), wGA(A, K, !1), {
      source: EM.CONFIG
    };
    if (this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values."), this.authorityOptions.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache.");else {
      let Y = this.getEndpointMetadataFromHardcodedValues();
      if (Y) return wGA(A, Y, !1), {
        source: EM.HARDCODED_VALUES,
        metadata: Y
      };else this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.");
    }
    let q = VH1(A);
    if (this.isAuthoritySameType(A) && A.endpointsFromNetwork && !q) return this.logger.verbose("Found endpoint metadata in the cache."), {
      source: EM.CACHE
    };else if (q) this.logger.verbose("The metadata entity is expired.");
    return null;
  }
  isAuthoritySameType(A) {
    return new p5(A.canonical_authority).getUrlComponents().PathSegments.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
  }
  getEndpointMetadataFromConfig() {
    if (this.authorityOptions.authorityMetadata) try {
      return JSON.parse(this.authorityOptions.authorityMetadata);
    } catch (A) {
      throw az(jKA);
    }
    return null;
  }
  async getEndpointMetadataFromNetwork() {
    this.performanceClient?.addQueueMeasurement(j6.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
    let A = {},
      K = this.defaultOpenIdConfigurationEndpoint;
    this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${K}`);
    try {
      let q = await this.networkInterface.sendGetRequestAsync(K, A);
      if (I17(q.body)) return q.body;else return this.logger.verbose("Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration"), null;
    } catch (q) {
      return this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${q}`), null;
    }
  }
  getEndpointMetadataFromHardcodedValues() {
    if (this.hostnameAndPort in P06) return P06[this.hostnameAndPort];
    return null;
  }
  async updateMetadataWithRegionalInformation(A) {
    this.performanceClient?.addQueueMeasurement(j6.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
    let K = this.authorityOptions.azureRegionConfiguration?.azureRegion;
    if (K) {
      if (K !== u6.AZURE_REGION_AUTO_DISCOVER_FLAG) return this.regionDiscoveryMetadata.region_outcome = aw1.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = K, $_.replaceWithRegionalInformation(A, K);
      let q = await e9(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), j6.RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
      if (q) return this.regionDiscoveryMetadata.region_outcome = aw1.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = q, $_.replaceWithRegionalInformation(A, q);
      this.regionDiscoveryMetadata.region_outcome = aw1.AUTO_DETECTION_REQUESTED_FAILED;
    }
    return A;
  }
  async updateCloudDiscoveryMetadata(A) {
    this.performanceClient?.addQueueMeasurement(j6.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
    let K = this.updateCloudDiscoveryMetadataFromLocalSources(A);
    if (K) return K;
    let q = await e9(this.getCloudDiscoveryMetadataFromNetwork.bind(this), j6.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (q) return pbA(A, q, !0), EM.NETWORK;
    throw az(MKA);
  }
  updateCloudDiscoveryMetadataFromLocalSources(A) {
    this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration"), this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities || u6.NOT_APPLICABLE}`), this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata || u6.NOT_APPLICABLE}`), this.logger.verbosePii(`Canonical Authority: ${A.canonical_authority || u6.NOT_APPLICABLE}`);
    let K = this.getCloudDiscoveryMetadataFromConfig();
    if (K) return this.logger.verbose("Found cloud discovery metadata in authority configuration"), pbA(A, K, !1), EM.CONFIG;
    if (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values."), this.options.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache.");else {
      let Y = v17(this.hostnameAndPort);
      if (Y) return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), pbA(A, Y, !1), EM.HARDCODED_VALUES;
      this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.");
    }
    let q = VH1(A);
    if (this.isAuthoritySameType(A) && A.aliasesFromNetwork && !q) return this.logger.verbose("Found cloud discovery metadata in the cache."), EM.CACHE;else if (q) this.logger.verbose("The metadata entity is expired.");
    return null;
  }
  getCloudDiscoveryMetadataFromConfig() {
    if (this.authorityType === jC.Ciam) return this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."), $_.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    if (this.authorityOptions.cloudDiscoveryMetadata) {
      this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
      try {
        this.logger.verbose("Attempting to parse the cloud discovery metadata.");
        let A = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata),
          K = EbA(A.metadata, this.hostnameAndPort);
        if (this.logger.verbose("Parsed the cloud discovery metadata."), K) return this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata."), K;else this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
      } catch (A) {
        throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), az(yo);
      }
    }
    if (this.isInKnownAuthorities()) return this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), $_.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    return null;
  }
  async getCloudDiscoveryMetadataFromNetwork() {
    this.performanceClient?.addQueueMeasurement(j6.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
    let A = `${u6.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`,
      K = {},
      q = null;
    try {
      let Y = await this.networkInterface.sendGetRequestAsync(A, K),
        z,
        w;
      if (h17(Y.body)) z = Y.body, w = z.metadata, this.logger.verbosePii(`tenant_discovery_endpoint is: ${z.tenant_discovery_endpoint}`);else if (x17(Y.body)) {
        if (this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${Y.status}`), z = Y.body, z.error === u6.INVALID_INSTANCE) return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), null;
        this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${z.error}`), this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${z.error_description}`), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), w = [];
      } else return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), null;
      this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), q = EbA(w, this.hostnameAndPort);
    } catch (Y) {
      if (Y instanceof V5) this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ${Y.errorCode}
Error Description: ${Y.errorMessage}`);else {
        let z = Y;
        this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ${z.name}
Error Description: ${z.message}`);
      }
      return null;
    }
    if (!q) this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), this.logger.verbose("Creating custom Authority for custom domain scenario."), q = $_.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    return q;
  }
  isInKnownAuthorities() {
    return this.authorityOptions.knownAuthorities.filter(K => {
      return K && p5.getDomainFromUrl(K).toLowerCase() === this.hostnameAndPort;
    }).length > 0;
  }
  static generateAuthority(A, K) {
    let q;
    if (K && K.azureCloudInstance !== RU.None) {
      let Y = K.tenant ? K.tenant : u6.DEFAULT_COMMON_TENANT;
      q = `${K.azureCloudInstance}/${Y}/`;
    }
    return q ? q : A;
  }
  static createCloudDiscoveryMetadataFromHost(A) {
    return {
      preferred_network: A,
      preferred_cache: A,
      aliases: [A]
    };
  }
  getPreferredCache() {
    if (this.managedIdentity) return u6.DEFAULT_AUTHORITY_HOST;else if (this.discoveryComplete()) return this.metadata.preferred_cache;else throw t6(kM);
  }
  isAlias(A) {
    return this.metadata.aliases.indexOf(A) > -1;
  }
  isAliasOfKnownMicrosoftAuthority(A) {
    return f06.has(A);
  }
  static isPublicCloudAuthority(A) {
    return u6.KNOWN_PUBLIC_CLOUDS.indexOf(A) >= 0;
  }
  static buildRegionalAuthorityString(A, K, q) {
    let Y = new p5(A);
    Y.validateAsUri();
    let z = Y.getUrlComponents(),
      w = `${K}.${z.HostNameAndPort}`;
    if (this.isPublicCloudAuthority(z.HostNameAndPort)) w = `${K}.${u6.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`;
    let H = p5.constructAuthorityUriFromObject({
      ...Y.getUrlComponents(),
      HostNameAndPort: w
    }).urlString;
    if (q) return `${H}?${q}`;
    return H;
  }
  static replaceWithRegionalInformation(A, K) {
    let q = {
      ...A
    };
    if (q.authorization_endpoint = $_.buildRegionalAuthorityString(q.authorization_endpoint, K), q.token_endpoint = $_.buildRegionalAuthorityString(q.token_endpoint, K), q.end_session_endpoint) q.end_session_endpoint = $_.buildRegionalAuthorityString(q.end_session_endpoint, K);
    return q;
  }
  static transformCIAMAuthority(A) {
    let K = A,
      Y = new p5(A).getUrlComponents();
    if (Y.PathSegments.length === 0 && Y.HostNameAndPort.endsWith(u6.CIAM_AUTH_URL)) {
      let z = Y.HostNameAndPort.split(".")[0];
      K = `${K}${z}${u6.AAD_TENANT_DOMAIN_SUFFIX}`;
    }
    return K;
  }
}
__$.$_ = $_;

class BU {
  static generateThrottlingStorageKey(A) {
    return `${Nu.THROTTLING_PREFIX}.${JSON.stringify(A)}`;
  }
  static preProcess(A, K, q) {
    let Y = BU.generateThrottlingStorageKey(K),
      z = A.getThrottlingCache(Y);
    if (z) {
      if (z.throttleTime < Date.now()) {
        A.removeItem(Y, q);
        return;
      }
      throw new RM(z.errorCodes?.join(" ") || u6.EMPTY_STRING, z.errorMessage, z.subError);
    }
  }
  static postProcess(A, K, q, Y) {
    if (BU.checkResponseStatus(q) || BU.checkResponseForRetryAfter(q)) {
      let z = {
        throttleTime: BU.calculateThrottleTime(parseInt(q.headers[YH.RETRY_AFTER])),
        error: q.body.error,
        errorCodes: q.body.error_codes,
        errorMessage: q.body.error_description,
        subError: q.body.suberror
      };
      A.setThrottlingCache(BU.generateThrottlingStorageKey(K), z, Y);
    }
  }
  static checkResponseStatus(A) {
    return A.status === 429 || A.status >= 500 && A.status < 600;
  }
  static checkResponseForRetryAfter(A) {
    if (A.headers) return A.headers.hasOwnProperty(YH.RETRY_AFTER) && (A.status < 200 || A.status >= 300);
    return !1;
  }
  static calculateThrottleTime(A) {
    let K = A <= 0 ? 0 : A,
      q = Date.now() / 1000;
    return Math.floor(Math.min(q + (K || Nu.DEFAULT_THROTTLE_TIME_SECONDS), q + Nu.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000);
  }
  static removeThrottle(A, K, q, Y) {
    let z = JGA(K, q, Y),
      w = this.generateThrottlingStorageKey(z);
    A.removeItem(w, q.correlationId);
  }
}
__$.BU = BU;

class FD {
  constructor(A, K) {
    this.config = R17(A), this.logger = new sV(this.config.loggerOptions, ew1, n_A), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = K;
  }
  createTokenRequestHeaders(A) {
    let K = {};
    if (K[YH.CONTENT_TYPE] = u6.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && A) switch (A.type) {
      case CM.HOME_ACCOUNT_ID:
        try {
          let q = vu(A.credential);
          K[YH.CCS_HEADER] = `Oid:${q.uid}@${q.utid}`;
        } catch (q) {
          this.logger.verbose("Could not parse home account ID for CCS Header: " + q);
        }
        break;
      case CM.UPN:
        K[YH.CCS_HEADER] = `UPN: ${A.credential}`;
        break;
    }
    return K;
  }
  async executePostToTokenEndpoint(A, K, q, Y, z, w) {
    if (w) this.performanceClient?.addQueueMeasurement(w, z);
    let H = await this.sendPostRequest(Y, A, {
      body: K,
      headers: q
    }, z);
    if (this.config.serverTelemetryManager && H.status < 500 && H.status !== 429) this.config.serverTelemetryManager.clearTelemetryCache();
    return H;
  }
  async sendPostRequest(A, K, q, Y) {
    BU.preProcess(this.cacheManager, A, Y);
    let z;
    try {
      z = await e9(this.networkClient.sendPostRequestAsync.bind(this.networkClient), j6.NetworkClientSendPostRequestAsync, this.logger, this.performanceClient, Y)(K, q);
      let w = z.headers || {};
      this.performanceClient?.addFields({
        refreshTokenSize: z.body.refresh_token?.length || 0,
        httpVerToken: w[YH.X_MS_HTTP_VERSION] || "",
        requestId: w[YH.X_MS_REQUEST_ID] || ""
      }, Y);
    } catch (w) {
      if (w instanceof kH1) {
        let H = w.responseHeaders;
        if (H) this.performanceClient?.addFields({
          httpVerToken: H[YH.X_MS_HTTP_VERSION] || "",
          requestId: H[YH.X_MS_REQUEST_ID] || "",
          contentTypeHeader: H[YH.CONTENT_TYPE] || void 0,
          contentLengthHeader: H[YH.CONTENT_LENGTH] || void 0,
          httpStatus: w.httpStatus
        }, Y);
        throw w.error;
      }
      if (w instanceof V5) throw w;else throw t6(r7A);
    }
    return BU.postProcess(this.cacheManager, A, z, Y), z;
  }
  async updateAuthority(A, K) {
    this.performanceClient?.addQueueMeasurement(j6.UpdateTokenEndpointAuthority, K);
    let q = `https://${A}/${this.authority.tenant}/`,
      Y = await CX6(q, this.networkClient, this.cacheManager, this.authority.options, this.logger, K, this.performanceClient);
    this.authority = Y;
  }
  createTokenQueryParameters(A) {
    let K = new Map();
    if (A.embeddedClientId) xU(K, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    if (A.tokenQueryParameters) bU(K, A.tokenQueryParameters);
    return CKA(K, A.correlationId), NKA(K, A.correlationId, this.performanceClient), Eu(K);
  }
}
__$.FD = FD;

class hH1 {
  static setRequestState(A, K, q) {
    let Y = hH1.generateLibraryState(A, q);
    return K ? `${Y}${u6.RESOURCE_DELIM}${K}` : Y;
  }
  static generateLibraryState(A, K) {
    if (!A) throw t6(Co);
    let q = {
      id: A.createNewGuid()
    };
    if (K) q.meta = K;
    let Y = JSON.stringify(q);
    return A.base64Encode(Y);
  }
  static parseRequestState(A, K) {
    if (!A) throw t6(Co);
    if (!K) throw t6(HI);
    try {
      let q = K.split(u6.RESOURCE_DELIM),
        Y = q[0],
        z = q.length > 1 ? q.slice(1).join(u6.RESOURCE_DELIM) : u6.EMPTY_STRING,
        w = A.base64Decode(Y),
        H = JSON.parse(w);
      return {
        userRequestState: z || u6.EMPTY_STRING,
        libraryState: H
      };
    } catch (q) {
      throw t6(HI);
    }
  }
}
__$.hH1 = hH1;

class RKA {
  constructor(A, K) {
    this.cryptoUtils = A, this.performanceClient = K;
  }
  async generateCnf(A, K) {
    this.performanceClient?.addQueueMeasurement(j6.PopTokenGenerateCnf, A.correlationId);
    let q = await e9(this.generateKid.bind(this), j6.PopTokenGenerateCnf, K, this.performanceClient, A.correlationId)(A),
      Y = this.cryptoUtils.base64UrlEncode(JSON.stringify(q));
    return {
      kid: q.kid,
      reqCnfString: Y
    };
  }
  async generateKid(A) {
    return this.performanceClient?.addQueueMeasurement(j6.PopTokenGenerateKid, A.correlationId), {
      kid: await this.cryptoUtils.getPublicKeyThumbprint(A),
      xms_ksl: l8Y.SW
    };
  }
  async signPopToken(A, K, q) {
    return this.signPayload(A, K, q);
  }
  async signPayload(A, K, q, Y) {
    let {
        resourceRequestMethod: z,
        resourceRequestUri: w,
        shrClaims: H,
        shrNonce: J,
        shrOptions: O
      } = q,
      $ = (w ? new p5(w) : void 0)?.getUrlComponents();
    return this.cryptoUtils.signJwt({
      at: A,
      ts: gT(),
      m: z?.toUpperCase(),
      u: $?.HostNameAndPort,
      nonce: J || this.cryptoUtils.createNewGuid(),
      p: $?.AbsolutePath,
      q: $?.QueryString ? [[], $.QueryString] : void 0,
      client_claims: H || void 0,
      ...Y
    }, K, O, q.correlationId);
  }
}
__$.RKA = RKA;

class MC {
  constructor(A, K) {
    this.cache = A, this.hasChanged = K;
  }
  get cacheHasChanged() {
    return this.hasChanged;
  }
  get tokenCache() {
    return this.cache;
  }
}
__$.MC = MC;

class K0 {
  constructor(A, K, q, Y, z, w, H) {
    this.clientId = A, this.cacheStorage = K, this.cryptoObj = q, this.logger = Y, this.serializableCache = z, this.persistencePlugin = w, this.performanceClient = H;
  }
  validateTokenResponse(A, K) {
    if (A.error || A.error_description || A.suberror) {
      let q = `Error(s): ${A.error_codes || u6.NOT_AVAILABLE} - Timestamp: ${A.timestamp || u6.NOT_AVAILABLE} - Description: ${A.error_description || u6.NOT_AVAILABLE} - Correlation ID: ${A.correlation_id || u6.NOT_AVAILABLE} - Trace ID: ${A.trace_id || u6.NOT_AVAILABLE}`,
        Y = A.error_codes?.length ? A.error_codes[0] : void 0,
        z = new RM(A.error, q, A.suberror, Y, A.status);
      if (K && A.status && A.status >= P5.SERVER_ERROR_RANGE_START && A.status <= P5.SERVER_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${z}`);
        return;
      } else if (K && A.status && A.status >= P5.CLIENT_ERROR_RANGE_START && A.status <= P5.CLIENT_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${z}`);
        return;
      }
      if (IH1(A.error, A.error_description, A.suberror)) throw new FT(A.error, A.error_description, A.suberror, A.timestamp || u6.EMPTY_STRING, A.trace_id || u6.EMPTY_STRING, A.correlation_id || u6.EMPTY_STRING, A.claims || u6.EMPTY_STRING, Y);
      throw z;
    }
  }
  async handleServerTokenResponse(A, K, q, Y, z, w, H, J, O) {
    this.performanceClient?.addQueueMeasurement(j6.HandleServerTokenResponse, A.correlation_id);
    let X;
    if (A.id_token) {
      if (X = SU(A.id_token || u6.EMPTY_STRING, this.cryptoObj.base64Decode), z && z.nonce) {
        if (X.nonce !== z.nonce) throw t6(t7A);
      }
      if (Y.maxAge || Y.maxAge === 0) {
        let Z = X.auth_time;
        if (!Z) throw t6(EU);
        vbA(Z, Y.maxAge);
      }
    }
    this.homeAccountIdentifier = J$.generateHomeAccountId(A.client_info || u6.EMPTY_STRING, K.authorityType, this.logger, this.cryptoObj, X);
    let $;
    if (!!z && !!z.state) $ = hH1.parseRequestState(this.cryptoObj, z.state);
    A.key_id = A.key_id || Y.sshKid || void 0;
    let _ = this.generateCacheRecord(A, K, q, Y, X, w, z),
      G;
    try {
      if (this.persistencePlugin && this.serializableCache) this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), G = new MC(this.serializableCache, !0), await this.persistencePlugin.beforeCacheAccess(G);
      if (H && !J && _.account) {
        let Z = this.cacheStorage.generateAccountKey(J$.getAccountInfo(_.account));
        if (!this.cacheStorage.getAccount(Z, Y.correlationId)) return this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), await K0.generateAuthenticationResult(this.cryptoObj, K, _, !1, Y, X, $, void 0, O);
      }
      await this.cacheStorage.saveCacheRecord(_, Y.correlationId, j06(X || {}), Y.storeInCache);
    } finally {
      if (this.persistencePlugin && this.serializableCache && G) this.logger.verbose("Persistence enabled, calling afterCacheAccess"), await this.persistencePlugin.afterCacheAccess(G);
    }
    return K0.generateAuthenticationResult(this.cryptoObj, K, _, !1, Y, X, $, A, O);
  }
  generateCacheRecord(A, K, q, Y, z, w, H) {
    let J = K.getPreferredCache();
    if (!J) throw t6(CU);
    let O = zH1(z),
      X,
      $;
    if (A.id_token && !!z) X = TX6(this.homeAccountIdentifier, J, A.id_token, this.clientId, O || ""), $ = d17(this.cacheStorage, K, this.homeAccountIdentifier, this.cryptoObj.base64Decode, Y.correlationId, z, A.client_info, J, O, H, void 0, this.logger);
    let _ = null;
    if (A.access_token) {
      let W = A.scope ? A0.fromString(A.scope) : new A0(Y.scopes || []),
        D = (typeof A.expires_in === "string" ? parseInt(A.expires_in, 10) : A.expires_in) || 0,
        j = (typeof A.ext_expires_in === "string" ? parseInt(A.ext_expires_in, 10) : A.ext_expires_in) || 0,
        M = (typeof A.refresh_in === "string" ? parseInt(A.refresh_in, 10) : A.refresh_in) || void 0,
        P = q + D,
        f = P + j,
        N = M && M > 0 ? q + M : void 0;
      _ = vX6(this.homeAccountIdentifier, J, A.access_token, this.clientId, O || K.tenant || "", W.printScopes(), P, f, this.cryptoObj.base64Decode, N, A.token_type, w, A.key_id, Y.claims, Y.requestedClaimsHash);
    }
    let G = null;
    if (A.refresh_token) {
      let W;
      if (A.refresh_token_expires_in) {
        let D = typeof A.refresh_token_expires_in === "string" ? parseInt(A.refresh_token_expires_in, 10) : A.refresh_token_expires_in;
        W = q + D;
      }
      G = EX6(this.homeAccountIdentifier, J, A.refresh_token, this.clientId, A.foci, w, W);
    }
    let Z = null;
    if (A.foci) Z = {
      clientId: this.clientId,
      environment: J,
      familyId: A.foci
    };
    return {
      account: $,
      idToken: X,
      accessToken: _,
      refreshToken: G,
      appMetadata: Z
    };
  }
  static async generateAuthenticationResult(A, K, q, Y, z, w, H, J, O) {
    let X = u6.EMPTY_STRING,
      $ = [],
      _ = null,
      G,
      Z,
      W = u6.EMPTY_STRING;
    if (q.accessToken) {
      if (q.accessToken.tokenType === x9.POP && !z.popKid) {
        let P = new RKA(A),
          {
            secret: f,
            keyId: N
          } = q.accessToken;
        if (!N) throw t6(OKA);
        X = await P.signPopToken(f, N, z);
      } else X = q.accessToken.secret;
      if ($ = A0.fromString(q.accessToken.target).asArray(), _ = UbA(q.accessToken.expiresOn), G = UbA(q.accessToken.extendedExpiresOn), q.accessToken.refreshOn) Z = UbA(q.accessToken.refreshOn);
    }
    if (q.appMetadata) W = q.appMetadata.familyId === No ? No : "";
    let D = w?.oid || w?.sub || "",
      j = w?.tid || "";
    if (J?.spa_accountid && !!q.account) q.account.nativeAccountId = J?.spa_accountid;
    let M = q.account ? qH1(J$.getAccountInfo(q.account), void 0, w, q.idToken?.secret) : null;
    return {
      authority: K.canonicalAuthority,
      uniqueId: D,
      tenantId: j,
      scopes: $,
      account: M,
      idToken: q?.idToken?.secret || "",
      idTokenClaims: w || {},
      accessToken: X,
      fromCache: Y,
      expiresOn: _,
      extExpiresOn: G,
      refreshOn: Z,
      correlationId: z.correlationId,
      requestId: O || u6.EMPTY_STRING,
      familyId: W,
      tokenType: q.accessToken?.tokenType || u6.EMPTY_STRING,
      state: H ? H.userRequestState : u6.EMPTY_STRING,
      cloudGraphHostName: q.account?.cloudGraphHostName || u6.EMPTY_STRING,
      msGraphHost: q.account?.msGraphHost || u6.EMPTY_STRING,
      code: J?.spa_code,
      fromNativeBroker: !1
    };
  }
}
__$.K0 = K0;

class mo {
  constructor(A, K) {
    this.cacheOutcome = Pw.NOT_APPLICABLE, this.cacheManager = K, this.apiId = A.apiId, this.correlationId = A.correlationId, this.wrapperSKU = A.wrapperSKU || u6.EMPTY_STRING, this.wrapperVer = A.wrapperVer || u6.EMPTY_STRING, this.telemetryCacheKey = X_.CACHE_KEY + vU.CACHE_KEY_SEPARATOR + A.clientId;
  }
  generateCurrentRequestHeaderValue() {
    let A = `${this.apiId}${X_.VALUE_SEPARATOR}${this.cacheOutcome}`,
      K = [this.wrapperSKU, this.wrapperVer],
      q = this.getNativeBrokerErrorCode();
    if (q?.length) K.push(`broker_error=${q}`);
    let Y = K.join(X_.VALUE_SEPARATOR),
      z = this.getRegionDiscoveryFields(),
      w = [A, z].join(X_.VALUE_SEPARATOR);
    return [X_.SCHEMA_VERSION, w, Y].join(X_.CATEGORY_SEPARATOR);
  }
  generateLastRequestHeaderValue() {
    let A = this.getLastRequests(),
      K = mo.maxErrorsToSend(A),
      q = A.failedRequests.slice(0, 2 * K).join(X_.VALUE_SEPARATOR),
      Y = A.errors.slice(0, K).join(X_.VALUE_SEPARATOR),
      z = A.errors.length,
      w = K < z ? X_.OVERFLOW_TRUE : X_.OVERFLOW_FALSE,
      H = [z, w].join(X_.VALUE_SEPARATOR);
    return [X_.SCHEMA_VERSION, A.cacheHits, q, Y, H].join(X_.CATEGORY_SEPARATOR);
  }
  cacheFailedRequest(A) {
    let K = this.getLastRequests();
    if (K.errors.length >= X_.MAX_CACHED_ERRORS) K.failedRequests.shift(), K.failedRequests.shift(), K.errors.shift();
    if (K.failedRequests.push(this.apiId, this.correlationId), A instanceof Error && !!A && A.toString()) {
      if (A instanceof V5) {
        if (A.subError) K.errors.push(A.subError);else if (A.errorCode) K.errors.push(A.errorCode);else K.errors.push(A.toString());
      } else K.errors.push(A.toString());
    } else K.errors.push(X_.UNKNOWN_ERROR);
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, K, this.correlationId);
    return;
  }
  incrementCacheHits() {
    let A = this.getLastRequests();
    return A.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, A, this.correlationId), A.cacheHits;
  }
  getLastRequests() {
    let A = {
      failedRequests: [],
      errors: [],
      cacheHits: 0
    };
    return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || A;
  }
  clearTelemetryCache() {
    let A = this.getLastRequests(),
      K = mo.maxErrorsToSend(A),
      q = A.errors.length;
    if (K === q) this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId);else {
      let Y = {
        failedRequests: A.failedRequests.slice(K * 2),
        errors: A.errors.slice(K),
        cacheHits: 0
      };
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, Y, this.correlationId);
    }
  }
  static maxErrorsToSend(A) {
    let K,
      q = 0,
      Y = 0,
      z = A.errors.length;
    for (K = 0; K < z; K++) {
      let w = A.failedRequests[2 * K] || u6.EMPTY_STRING,
        H = A.failedRequests[2 * K + 1] || u6.EMPTY_STRING,
        J = A.errors[K] || u6.EMPTY_STRING;
      if (Y += w.toString().length + H.toString().length + J.length + 3, Y < X_.MAX_LAST_HEADER_BYTES) q += 1;else break;
    }
    return q;
  }
  getRegionDiscoveryFields() {
    let A = [];
    return A.push(this.regionUsed || u6.EMPTY_STRING), A.push(this.regionSource || u6.EMPTY_STRING), A.push(this.regionOutcome || u6.EMPTY_STRING), A.join(",");
  }
  updateRegionDiscoveryMetadata(A) {
    this.regionUsed = A.region_used, this.regionSource = A.region_source, this.regionOutcome = A.region_outcome;
  }
  setCacheOutcome(A) {
    this.cacheOutcome = A;
  }
  setNativeBrokerErrorCode(A) {
    let K = this.getLastRequests();
    K.nativeBrokerErrorCode = A, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, K, this.correlationId);
  }
  getNativeBrokerErrorCode() {
    return this.getLastRequests().nativeBrokerErrorCode;
  }
  clearNativeBrokerErrorCode() {
    let A = this.getLastRequests();
    delete A.nativeBrokerErrorCode, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, A, this.correlationId);
  }
  static makeExtraSkuString(A) {
    return e8Y(A);
  }
}
__$.mo = mo;

class go {
  static deserializeJSONBlob(A) {
    return !A ? {} : JSON.parse(A);
  }
  static deserializeAccounts(A) {
    let K = {};
    if (A) Object.keys(A).map(function (q) {
      let Y = A[q],
        z = {
          homeAccountId: Y.home_account_id,
          environment: Y.environment,
          realm: Y.realm,
          localAccountId: Y.local_account_id,
          username: Y.username,
          authorityType: Y.authority_type,
          name: Y.name,
          clientInfo: Y.client_info,
          lastModificationTime: Y.last_modification_time,
          lastModificationApp: Y.last_modification_app,
          tenantProfiles: Y.tenantProfiles?.map(H => {
            return JSON.parse(H);
          }),
          lastUpdatedAt: Date.now().toString()
        },
        w = new J$();
      VKA.toObject(w, z), K[q] = w;
    });
    return K;
  }
  static deserializeIdTokens(A) {
    let K = {};
    if (A) Object.keys(A).map(function (q) {
      let Y = A[q],
        z = {
          homeAccountId: Y.home_account_id,
          environment: Y.environment,
          credentialType: Y.credential_type,
          clientId: Y.client_id,
          secret: Y.secret,
          realm: Y.realm,
          lastUpdatedAt: Date.now().toString()
        };
      K[q] = z;
    });
    return K;
  }
  static deserializeAccessTokens(A) {
    let K = {};
    if (A) Object.keys(A).map(function (q) {
      let Y = A[q],
        z = {
          homeAccountId: Y.home_account_id,
          environment: Y.environment,
          credentialType: Y.credential_type,
          clientId: Y.client_id,
          secret: Y.secret,
          realm: Y.realm,
          target: Y.target,
          cachedAt: Y.cached_at,
          expiresOn: Y.expires_on,
          extendedExpiresOn: Y.extended_expires_on,
          refreshOn: Y.refresh_on,
          keyId: Y.key_id,
          tokenType: Y.token_type,
          requestedClaims: Y.requestedClaims,
          requestedClaimsHash: Y.requestedClaimsHash,
          userAssertionHash: Y.userAssertionHash,
          lastUpdatedAt: Date.now().toString()
        };
      K[q] = z;
    });
    return K;
  }
  static deserializeRefreshTokens(A) {
    let K = {};
    if (A) Object.keys(A).map(function (q) {
      let Y = A[q],
        z = {
          homeAccountId: Y.home_account_id,
          environment: Y.environment,
          credentialType: Y.credential_type,
          clientId: Y.client_id,
          secret: Y.secret,
          familyId: Y.family_id,
          target: Y.target,
          realm: Y.realm,
          lastUpdatedAt: Date.now().toString()
        };
      K[q] = z;
    });
    return K;
  }
  static deserializeAppMetadata(A) {
    let K = {};
    if (A) Object.keys(A).map(function (q) {
      let Y = A[q];
      K[q] = {
        clientId: Y.client_id,
        environment: Y.environment,
        familyId: Y.family_id
      };
    });
    return K;
  }
  static deserializeAllCache(A) {
    return {
      accounts: A.Account ? this.deserializeAccounts(A.Account) : {},
      idTokens: A.IdToken ? this.deserializeIdTokens(A.IdToken) : {},
      accessTokens: A.AccessToken ? this.deserializeAccessTokens(A.AccessToken) : {},
      refreshTokens: A.RefreshToken ? this.deserializeRefreshTokens(A.RefreshToken) : {},
      appMetadata: A.AppMetadata ? this.deserializeAppMetadata(A.AppMetadata) : {}
    };
  }
}
__$.go = go;

class obA {
  static getNetworkResponse(A, K, q) {
    return {
      headers: A,
      body: K,
      status: q
    };
  }
  static urlToHttpOptions(A) {
    let K = {
      protocol: A.protocol,
      hostname: A.hostname && A.hostname.startsWith("[") ? A.hostname.slice(1, -1) : A.hostname,
      hash: A.hash,
      search: A.search,
      pathname: A.pathname,
      path: `${A.pathname || ""}${A.search || ""}`,
      href: A.href
    };
    if (A.port !== "") K.port = Number(A.port);
    if (A.username || A.password) K.auth = `${decodeURIComponent(A.username)}:${decodeURIComponent(A.password)}`;
    return K;
  }
}
__$.obA = obA;

class abA {
  constructor(A, K) {
    this.proxyUrl = A || "", this.customAgentOptions = K || {};
  }
  async sendGetRequestAsync(A, K, q) {
    if (this.proxyUrl) return J67(A, this.proxyUrl, QH.GET, K, this.customAgentOptions, q);else return O67(A, QH.GET, K, this.customAgentOptions, q);
  }
  async sendPostRequestAsync(A, K) {
    if (this.proxyUrl) return J67(A, this.proxyUrl, QH.POST, K, this.customAgentOptions);else return O67(A, QH.POST, K, this.customAgentOptions);
  }
}
__$.abA = abA;

class gX6 {
  get id() {
    return this._id;
  }
  set id(A) {
    this._id = A;
  }
  get idType() {
    return this._idType;
  }
  set idType(A) {
    this._idType = A;
  }
  constructor(A) {
    let K = A?.userAssignedClientId,
      q = A?.userAssignedResourceId,
      Y = A?.userAssignedObjectId;
    if (K) {
      if (q || Y) throw wX(Fo);
      this.id = K, this.idType = DO.USER_ASSIGNED_CLIENT_ID;
    } else if (q) {
      if (K || Y) throw wX(Fo);
      this.id = q, this.idType = DO.USER_ASSIGNED_RESOURCE_ID;
    } else if (Y) {
      if (K || q) throw wX(Fo);
      this.id = Y, this.idType = DO.USER_ASSIGNED_OBJECT_ID;
    } else this.id = e17, this.idType = DO.SYSTEM_ASSIGNED;
  }
}
__$.gX6 = gX6;

class KxA {
  generateGuid() {
    return O87();
  }
  isGuid(A) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(A);
  }
}
__$.KxA = KxA;

class eV {
  static base64Encode(A, K) {
    return Buffer.from(A, K).toString(lZ.BASE64);
  }
  static base64EncodeUrl(A, K) {
    return eV.base64Encode(A, K).replace(/=/g, u6.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
  }
  static base64Decode(A) {
    return Buffer.from(A, lZ.BASE64).toString("utf8");
  }
  static base64DecodeUrl(A) {
    let K = A.replace(/-/g, "+").replace(/_/g, "/");
    while (K.length % 4) K += "=";
    return eV.base64Decode(K);
  }
}
__$.eV = eV;

class SKA {
  sha256(A) {
    return f7Y.createHash(Y67.SHA256).update(A).digest();
  }
}
__$.SKA = SKA;

class rX6 {
  constructor() {
    this.hashUtils = new SKA();
  }
  async generatePkceCodes() {
    let A = this.generateCodeVerifier(),
      K = this.generateCodeChallengeFromVerifier(A);
    return {
      verifier: A,
      challenge: K
    };
  }
  generateCodeVerifier() {
    let A = [],
      K = 256 - 256 % FH1.CV_CHARSET.length;
    while (A.length <= q67) {
      let Y = N7Y.randomBytes(1)[0];
      if (Y >= K) continue;
      let z = Y % FH1.CV_CHARSET.length;
      A.push(FH1.CV_CHARSET[z]);
    }
    let q = A.join(u6.EMPTY_STRING);
    return eV.base64EncodeUrl(q);
  }
  generateCodeChallengeFromVerifier(A) {
    return eV.base64EncodeUrl(this.hashUtils.sha256(A).toString(lZ.BASE64), lZ.BASE64);
  }
}
__$.rX6 = rX6;

class FU {
  constructor() {
    this.pkceGenerator = new rX6(), this.guidGenerator = new KxA(), this.hashUtils = new SKA();
  }
  base64UrlEncode() {
    throw Error("Method not implemented.");
  }
  encodeKid() {
    throw Error("Method not implemented.");
  }
  createNewGuid() {
    return this.guidGenerator.generateGuid();
  }
  base64Encode(A) {
    return eV.base64Encode(A);
  }
  base64Decode(A) {
    return eV.base64Decode(A);
  }
  generatePkceCodes() {
    return this.pkceGenerator.generatePkceCodes();
  }
  getPublicKeyThumbprint() {
    throw Error("Method not implemented.");
  }
  removeTokenBindingKey() {
    throw Error("Method not implemented.");
  }
  clearKeystore() {
    throw Error("Method not implemented.");
  }
  signJwt() {
    throw Error("Method not implemented.");
  }
  async hashString(A) {
    return eV.base64EncodeUrl(this.hashUtils.sha256(A).toString(lZ.BASE64), lZ.BASE64);
  }
}
__$.FU = FU;

class wxA {
  constructor(A, K, q) {
    if (this.cacheHasChanged = !1, this.storage = A, this.storage.registerChangeEmitter(this.handleChangeEvent.bind(this)), q) this.persistence = q;
    this.logger = K;
  }
  hasChanged() {
    return this.cacheHasChanged;
  }
  serialize() {
    this.logger.trace("Serializing in-memory cache");
    let A = p7A.serializeAllCache(this.storage.getInMemoryCache());
    if (this.cacheSnapshot) this.logger.trace("Reading cache snapshot from disk"), A = this.mergeState(JSON.parse(this.cacheSnapshot), A);else this.logger.trace("No cache snapshot to merge");
    return this.cacheHasChanged = !1, JSON.stringify(A);
  }
  deserialize(A) {
    if (this.logger.trace("Deserializing JSON to in-memory cache"), this.cacheSnapshot = A, this.cacheSnapshot) {
      this.logger.trace("Reading cache snapshot from disk");
      let K = go.deserializeAllCache(this.overlayDefaults(JSON.parse(this.cacheSnapshot)));
      this.storage.setInMemoryCache(K);
    } else this.logger.trace("No cache snapshot to deserialize");
  }
  getKVStore() {
    return this.storage.getCache();
  }
  getCacheSnapshot() {
    let A = hKA.generateInMemoryCache(this.cacheSnapshot);
    return this.storage.inMemoryCacheToCache(A);
  }
  async getAllAccounts(A = new FU().createNewGuid()) {
    this.logger.trace("getAllAccounts called");
    let K;
    try {
      if (this.persistence) K = new MC(this, !1), await this.persistence.beforeCacheAccess(K);
      return this.storage.getAllAccounts({}, A);
    } finally {
      if (this.persistence && K) await this.persistence.afterCacheAccess(K);
    }
  }
  async getAccountByHomeId(A) {
    let K = await this.getAllAccounts();
    if (A && K && K.length) return K.filter(q => q.homeAccountId === A)[0] || null;else return null;
  }
  async getAccountByLocalId(A) {
    let K = await this.getAllAccounts();
    if (A && K && K.length) return K.filter(q => q.localAccountId === A)[0] || null;else return null;
  }
  async removeAccount(A, K) {
    this.logger.trace("removeAccount called");
    let q;
    try {
      if (this.persistence) q = new MC(this, !0), await this.persistence.beforeCacheAccess(q);
      this.storage.removeAccount(A, K || new KxA().generateGuid());
    } finally {
      if (this.persistence && q) await this.persistence.afterCacheAccess(q);
    }
  }
  async overwriteCache() {
    if (!this.persistence) {
      this.logger.info("No persistence layer specified, cache cannot be overwritten");
      return;
    }
    this.logger.info("Overwriting in-memory cache with persistent cache"), this.storage.clear();
    let A = new MC(this, !1);
    await this.persistence.beforeCacheAccess(A);
    let K = this.getCacheSnapshot();
    this.storage.setCache(K), await this.persistence.afterCacheAccess(A);
  }
  handleChangeEvent() {
    this.cacheHasChanged = !0;
  }
  mergeState(A, K) {
    this.logger.trace("Merging in-memory cache with cache snapshot");
    let q = this.mergeRemovals(A, K);
    return this.mergeUpdates(q, K);
  }
  mergeUpdates(A, K) {
    return Object.keys(K).forEach(q => {
      let Y = K[q];
      if (!A.hasOwnProperty(q)) {
        if (Y !== null) A[q] = Y;
      } else {
        let z = Y !== null,
          w = typeof Y === "object",
          H = !Array.isArray(Y),
          J = typeof A[q] < "u" && A[q] !== null;
        if (z && w && H && J) this.mergeUpdates(A[q], Y);else A[q] = Y;
      }
    }), A;
  }
  mergeRemovals(A, K) {
    this.logger.trace("Remove updated entries in cache");
    let q = A.Account ? this.mergeRemovalsDict(A.Account, K.Account) : A.Account,
      Y = A.AccessToken ? this.mergeRemovalsDict(A.AccessToken, K.AccessToken) : A.AccessToken,
      z = A.RefreshToken ? this.mergeRemovalsDict(A.RefreshToken, K.RefreshToken) : A.RefreshToken,
      w = A.IdToken ? this.mergeRemovalsDict(A.IdToken, K.IdToken) : A.IdToken,
      H = A.AppMetadata ? this.mergeRemovalsDict(A.AppMetadata, K.AppMetadata) : A.AppMetadata;
    return {
      ...A,
      Account: q,
      AccessToken: Y,
      RefreshToken: z,
      IdToken: w,
      AppMetadata: H
    };
  }
  mergeRemovalsDict(A, K) {
    let q = {
      ...A
    };
    return Object.keys(A).forEach(Y => {
      if (!K || !K.hasOwnProperty(Y)) delete q[Y];
    }), q;
  }
  overlayDefaults(A) {
    return this.logger.trace("Overlaying input cache with the default cache"), {
      Account: {
        ...zxA.Account,
        ...A.Account
      },
      IdToken: {
        ...zxA.IdToken,
        ...A.IdToken
      },
      AccessToken: {
        ...zxA.AccessToken,
        ...A.AccessToken
      },
      RefreshToken: {
        ...zxA.RefreshToken,
        ...A.RefreshToken
      },
      AppMetadata: {
        ...zxA.AppMetadata,
        ...A.AppMetadata
      }
    };
  }
}
__$.wxA = wxA;

class _I {
  static fromAssertion(A) {
    let K = new _I();
    return K.jwt = A, K;
  }
  static fromCertificate(A, K, q) {
    let Y = new _I();
    if (Y.privateKey = K, Y.thumbprint = A, Y.useSha256 = !1, q) Y.publicCertificate = this.parseCertificate(q);
    return Y;
  }
  static fromCertificateWithSha256Thumbprint(A, K, q) {
    let Y = new _I();
    if (Y.privateKey = K, Y.thumbprint = A, Y.useSha256 = !0, q) Y.publicCertificate = this.parseCertificate(q);
    return Y;
  }
  getJwt(A, K, q) {
    if (this.privateKey && this.thumbprint) {
      if (this.jwt && !this.isExpired() && K === this.issuer && q === this.jwtAudience) return this.jwt;
      return this.createJwt(A, K, q);
    }
    if (this.jwt) return this.jwt;
    throw t6(oz.invalidAssertion);
  }
  createJwt(A, K, q) {
    this.issuer = K, this.jwtAudience = q;
    let Y = FH.nowSeconds();
    this.expirationTime = Y + 600;
    let w = {
        alg: this.useSha256 ? PC.PSS_256 : PC.RSA_256
      },
      H = this.useSha256 ? PC.X5T_256 : PC.X5T;
    if (Object.assign(w, {
      [H]: eV.base64EncodeUrl(this.thumbprint, lZ.HEX)
    }), this.publicCertificate) Object.assign(w, {
      [PC.X5C]: this.publicCertificate
    });
    let J = {
      [PC.AUDIENCE]: this.jwtAudience,
      [PC.EXPIRATION_TIME]: this.expirationTime,
      [PC.ISSUER]: this.issuer,
      [PC.SUBJECT]: this.issuer,
      [PC.NOT_BEFORE]: Y,
      [PC.JWT_ID]: A.createNewGuid()
    };
    return this.jwt = hK7.default.sign(J, this.privateKey, {
      header: w
    }), this.jwt;
  }
  isExpired() {
    return this.expirationTime < FH.nowSeconds();
  }
  static parseCertificate(A) {
    let K = /-----BEGIN CERTIFICATE-----\r*\n(.+?)\r*\n-----END CERTIFICATE-----/gs,
      q = [],
      Y;
    while ((Y = K.exec(A)) !== null) q.push(Y[1].replace(/\r*\n/g, u6.EMPTY_STRING));
    return q;
  }
}
__$._I = _I;

class xKA {
  constructor(A) {
    this.config = D67(A), this.cryptoProvider = new FU(), this.logger = new sV(this.config.system.loggerOptions, CJ1, GI), this.storage = new hKA(this.logger, this.config.auth.clientId, this.cryptoProvider, kX6(this.config.auth)), this.tokenCache = new wxA(this.storage, this.logger, this.config.cache.cachePlugin);
  }
  async getAuthCodeUrl(A) {
    this.logger.info("getAuthCodeUrl called", A.correlationId);
    let K = {
        ...A,
        ...(await this.initializeBaseRequest(A)),
        responseMode: A.responseMode || fu.QUERY,
        authenticationScheme: x9.BEARER,
        state: A.state || "",
        nonce: A.nonce || ""
      },
      q = await this.createAuthority(K.authority, K.correlationId, void 0, A.azureCloudOptions);
    return bK7(this.config, q, K, this.logger);
  }
  async acquireTokenByCode(A, K) {
    if (this.logger.info("acquireTokenByCode called"), A.state && K) this.logger.info("acquireTokenByCode - validating state"), this.validateState(A.state, K.state || ""), K = {
      ...K,
      state: ""
    };
    let q = {
        ...A,
        ...(await this.initializeBaseRequest(A)),
        authenticationScheme: x9.BEARER
      },
      Y = this.initializeServerTelemetryManager(mU.acquireTokenByCode, q.correlationId);
    try {
      let z = await this.createAuthority(q.authority, q.correlationId, void 0, A.azureCloudOptions),
        w = await this.buildOauthClientConfiguration(z, q.correlationId, q.redirectUri, Y),
        H = new uH1(w);
      return this.logger.verbose("Auth code client created", q.correlationId), await H.acquireToken(q, K);
    } catch (z) {
      if (z instanceof V5) z.setCorrelationId(q.correlationId);
      throw Y.cacheFailedRequest(z), z;
    }
  }
  async acquireTokenByRefreshToken(A) {
    this.logger.info("acquireTokenByRefreshToken called", A.correlationId);
    let K = {
        ...A,
        ...(await this.initializeBaseRequest(A)),
        authenticationScheme: x9.BEARER
      },
      q = this.initializeServerTelemetryManager(mU.acquireTokenByRefreshToken, K.correlationId);
    try {
      let Y = await this.createAuthority(K.authority, K.correlationId, void 0, A.azureCloudOptions),
        z = await this.buildOauthClientConfiguration(Y, K.correlationId, K.redirectUri || "", q),
        w = new OGA(z);
      return this.logger.verbose("Refresh token client created", K.correlationId), await w.acquireToken(K);
    } catch (Y) {
      if (Y instanceof V5) Y.setCorrelationId(K.correlationId);
      throw q.cacheFailedRequest(Y), Y;
    }
  }
  async acquireTokenSilent(A) {
    let K = {
        ...A,
        ...(await this.initializeBaseRequest(A)),
        forceRefresh: A.forceRefresh || !1
      },
      q = this.initializeServerTelemetryManager(mU.acquireTokenSilent, K.correlationId, K.forceRefresh);
    try {
      let Y = await this.createAuthority(K.authority, K.correlationId, void 0, A.azureCloudOptions),
        z = await this.buildOauthClientConfiguration(Y, K.correlationId, K.redirectUri || "", q),
        w = new BH1(z);
      this.logger.verbose("Silent flow client created", K.correlationId);
      try {
        return await this.tokenCache.overwriteCache(), await this.acquireCachedTokenSilent(K, w, z);
      } catch (H) {
        if (H instanceof Lo && H.errorCode === oz.tokenRefreshRequired) return new OGA(z).acquireTokenByRefreshToken(K);
        throw H;
      }
    } catch (Y) {
      if (Y instanceof V5) Y.setCorrelationId(K.correlationId);
      throw q.cacheFailedRequest(Y), Y;
    }
  }
  async acquireCachedTokenSilent(A, K, q) {
    let [Y, z] = await K.acquireCachedToken({
      ...A,
      scopes: A.scopes?.length ? A.scopes : [...mD]
    });
    if (z === Pw.PROACTIVELY_REFRESHED) {
      this.logger.info("ClientApplication:acquireCachedTokenSilent - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
      let w = new OGA(q);
      try {
        await w.acquireTokenByRefreshToken(A);
      } catch {}
    }
    return Y;
  }
  async acquireTokenByUsernamePassword(A) {
    this.logger.info("acquireTokenByUsernamePassword called", A.correlationId);
    let K = {
        ...A,
        ...(await this.initializeBaseRequest(A))
      },
      q = this.initializeServerTelemetryManager(mU.acquireTokenByUsernamePassword, K.correlationId);
    try {
      let Y = await this.createAuthority(K.authority, K.correlationId, void 0, A.azureCloudOptions),
        z = await this.buildOauthClientConfiguration(Y, K.correlationId, "", q),
        w = new MxA(z);
      return this.logger.verbose("Username password client created", K.correlationId), await w.acquireToken(K);
    } catch (Y) {
      if (Y instanceof V5) Y.setCorrelationId(K.correlationId);
      throw q.cacheFailedRequest(Y), Y;
    }
  }
  getTokenCache() {
    return this.logger.info("getTokenCache called"), this.tokenCache;
  }
  validateState(A, K) {
    if (!A) throw CJ.createStateNotFoundError();
    if (A !== K) throw t6(oz.stateMismatch);
  }
  getLogger() {
    return this.logger;
  }
  setLogger(A) {
    this.logger = A;
  }
  async buildOauthClientConfiguration(A, K, q, Y) {
    return this.logger.verbose("buildOauthClientConfiguration called", K), this.logger.info(`Building oauth client configuration with the following authority: ${A.tokenEndpoint}.`, K), Y?.updateRegionDiscoveryMetadata(A.regionDiscoveryMetadata), {
      authOptions: {
        clientId: this.config.auth.clientId,
        authority: A,
        clientCapabilities: this.config.auth.clientCapabilities,
        redirectUri: q
      },
      loggerOptions: {
        logLevel: this.config.system.loggerOptions.logLevel,
        loggerCallback: this.config.system.loggerOptions.loggerCallback,
        piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled,
        correlationId: K
      },
      cacheOptions: {
        claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled
      },
      cryptoInterface: this.cryptoProvider,
      networkInterface: this.config.system.networkClient,
      storageInterface: this.storage,
      serverTelemetryManager: Y,
      clientCredentials: {
        clientSecret: this.clientSecret,
        clientAssertion: await this.getClientAssertion(A)
      },
      libraryInfo: {
        sku: IM.MSAL_SKU,
        version: GI,
        cpu: process.arch || u6.EMPTY_STRING,
        os: process.platform || u6.EMPTY_STRING
      },
      telemetry: this.config.telemetry,
      persistencePlugin: this.config.cache.cachePlugin,
      serializableCache: this.tokenCache
    };
  }
  async getClientAssertion(A) {
    if (this.developerProvidedClientAssertion) this.clientAssertion = _I.fromAssertion(await yM(this.developerProvidedClientAssertion, this.config.auth.clientId, A.tokenEndpoint));
    return this.clientAssertion && {
      assertion: this.clientAssertion.getJwt(this.cryptoProvider, this.config.auth.clientId, A.tokenEndpoint),
      assertionType: IM.JWT_BEARER_ASSERTION_TYPE
    };
  }
  async initializeBaseRequest(A) {
    if (this.logger.verbose("initializeRequestScopes called", A.correlationId), A.authenticationScheme && A.authenticationScheme === x9.POP) this.logger.verbose("Authentication Scheme 'pop' is not supported yet, setting Authentication Scheme to 'Bearer' for request", A.correlationId);
    if (A.authenticationScheme = x9.BEARER, this.config.cache.claimsBasedCachingEnabled && A.claims && !Vw.isEmptyObj(A.claims)) A.requestedClaimsHash = await this.cryptoProvider.hashString(A.claims);
    return {
      ...A,
      scopes: [...(A && A.scopes || []), ...mD],
      correlationId: A && A.correlationId || this.cryptoProvider.createNewGuid(),
      authority: A.authority || this.config.auth.authority
    };
  }
  initializeServerTelemetryManager(A, K, q) {
    let Y = {
      clientId: this.config.auth.clientId,
      correlationId: K,
      apiId: A,
      forceRefresh: q || !1
    };
    return new mo(Y, this.storage);
  }
  async createAuthority(A, K, q, Y) {
    this.logger.verbose("createAuthority called", K);
    let z = $_.generateAuthority(A, Y || this.config.auth.azureCloudOptions),
      w = {
        protocolMode: this.config.auth.protocolMode,
        knownAuthorities: this.config.auth.knownAuthorities,
        cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
        authorityMetadata: this.config.auth.authorityMetadata,
        azureRegionConfiguration: q,
        skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
      };
    return vH1.createDiscoveredInstance(z, this.config.system.networkClient, this.storage, w, this.logger, K);
  }
  clearCache() {
    this.storage.clear();
  }
}
__$.xKA = xKA;

class S$6 {
  async listenForAuthCode(A, K) {
    if (this.server) throw CJ.createLoopbackServerAlreadyExistsError();
    return new Promise((q, Y) => {
      this.server = jYY.createServer((z, w) => {
        let H = z.url;
        if (!H) {
          w.end(K || "Error occurred loading redirectUrl"), Y(CJ.createUnableToLoadRedirectUrlError());
          return;
        } else if (H === u6.FORWARD_SLASH) {
          w.end(A || "Auth code was successfully acquired. You can close this window now.");
          return;
        }
        let J = this.getRedirectUri(),
          O = new URL(H, J),
          X = iZ.getDeserializedResponse(O.search) || {};
        if (X.code) w.writeHead(P5.REDIRECT, {
          location: J
        }), w.end();
        if (X.error) w.end(K || `Error occurred: ${X.error}`);
        q(X);
      }), this.server.listen(0, "127.0.0.1");
    });
  }
  getRedirectUri() {
    if (!this.server || !this.server.listening) throw CJ.createNoLoopbackServerExistsError();
    let A = this.server.address();
    if (!A || typeof A === "string" || !A.port) throw this.closeServer(), CJ.createInvalidLoopbackAddressTypeError();
    let K = A && A.port;
    return `${IM.HTTP_PROTOCOL}${IM.LOCALHOST}:${K}`;
  }
  closeServer() {
    if (this.server) {
      if (this.server.close(), typeof this.server.closeAllConnections === "function") this.server.closeAllConnections();
      this.server.unref(), this.server = void 0;
    }
  }
}
__$.S$6 = S$6;

class x$6 {
  constructor(A, K, q) {
    this.httpClientNoRetries = A, this.retryPolicy = K, this.logger = q;
  }
  async sendNetworkRequestAsyncHelper(A, K, q) {
    if (A === QH.GET) return this.httpClientNoRetries.sendGetRequestAsync(K, q);else return this.httpClientNoRetries.sendPostRequestAsync(K, q);
  }
  async sendNetworkRequestAsync(A, K, q) {
    let Y = await this.sendNetworkRequestAsyncHelper(A, K, q);
    if ("isNewRequest" in this.retryPolicy) this.retryPolicy.isNewRequest = !0;
    let z = 0;
    while (await this.retryPolicy.pauseForRetry(Y.status, z, this.logger, Y.headers[YH.RETRY_AFTER])) Y = await this.sendNetworkRequestAsyncHelper(A, K, q), z++;
    return Y;
  }
  async sendGetRequestAsync(A, K) {
    return this.sendNetworkRequestAsync(QH.GET, A, K);
  }
  async sendPostRequestAsync(A, K) {
    return this.sendNetworkRequestAsync(QH.POST, A, K);
  }
}
__$.x$6 = x$6;

class Kf {
  constructor(A, K, q, Y, z) {
    this.logger = A, this.nodeStorage = K, this.networkClient = q, this.cryptoProvider = Y, this.disableInternalRetries = z;
  }
  async getServerTokenResponseAsync(A, K, q, Y) {
    return this.getServerTokenResponse(A);
  }
  getServerTokenResponse(A) {
    let K, q;
    if (A.body.expires_on) {
      if (gK7(A.body.expires_on)) A.body.expires_on = new Date(A.body.expires_on).getTime() / 1000;
      if (q = A.body.expires_on - FH.nowSeconds(), q > 7200) K = q / 2;
    }
    return {
      status: A.status,
      access_token: A.body.access_token,
      expires_in: q,
      scope: A.body.resource,
      token_type: A.body.token_type,
      refresh_in: K,
      correlation_id: A.body.correlation_id || A.body.correlationId,
      error: typeof A.body.error === "string" ? A.body.error : A.body.error?.code,
      error_description: A.body.message || (typeof A.body.error === "string" ? A.body.error_description : A.body.error?.message),
      error_codes: A.body.error_codes,
      timestamp: A.body.timestamp,
      trace_id: A.body.trace_id
    };
  }
  async acquireTokenWithManagedIdentity(A, K, q, Y) {
    let z = this.createRequest(A.resource, K);
    if (A.revokedTokenSha256Hash) this.logger.info(`[Managed Identity] The following claims are present in the request: ${A.claims}`), z.queryParameters[O$.SHA256_TOKEN_TO_REFRESH] = A.revokedTokenSha256Hash;
    if (A.clientCapabilities?.length) {
      let G = A.clientCapabilities.toString();
      this.logger.info(`[Managed Identity] The following client capabilities are present in the request: ${G}`), z.queryParameters[O$.XMS_CC] = G;
    }
    let w = z.headers;
    w[YH.CONTENT_TYPE] = u6.URL_FORM_CONTENT_TYPE;
    let H = {
      headers: w
    };
    if (Object.keys(z.bodyParameters).length) H.body = z.computeParametersBodyString();
    let J = this.disableInternalRetries ? this.networkClient : new x$6(this.networkClient, z.retryPolicy, this.logger),
      O = FH.nowSeconds(),
      X;
    try {
      if (z.httpMethod === QH.POST) X = await J.sendPostRequestAsync(z.computeUri(), H);else X = await J.sendGetRequestAsync(z.computeUri(), H);
    } catch (G) {
      if (G instanceof V5) throw G;else throw t6(oz.networkError);
    }
    let $ = new K0(K.id, this.nodeStorage, this.cryptoProvider, this.logger, null, null),
      _ = await this.getServerTokenResponseAsync(X, J, z, H);
    return $.validateTokenResponse(_, Y), $.handleServerTokenResponse(_, q, O, A);
  }
  getManagedIdentityUserAssignedIdQueryParameterKey(A, K, q) {
    switch (A) {
      case DO.USER_ASSIGNED_CLIENT_ID:
        return this.logger.info(`[Managed Identity] [API version ${q ? "2017+" : "2019+"}] Adding user assigned client id to the request.`), q ? BKA.MANAGED_IDENTITY_CLIENT_ID_2017 : BKA.MANAGED_IDENTITY_CLIENT_ID;
      case DO.USER_ASSIGNED_RESOURCE_ID:
        return this.logger.info("[Managed Identity] Adding user assigned resource id to the request."), K ? BKA.MANAGED_IDENTITY_RESOURCE_ID_IMDS : BKA.MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS;
      case DO.USER_ASSIGNED_OBJECT_ID:
        return this.logger.info("[Managed Identity] Adding user assigned object id to the request."), BKA.MANAGED_IDENTITY_OBJECT_ID;
      default:
        throw wX(Fo);
    }
  }
}
__$.Kf = Kf;

class u$6 {
  calculateDelay(A, K) {
    if (!A) return K;
    let q = Math.round(parseFloat(A) * 1000);
    if (isNaN(q)) q = new Date(A).valueOf() - new Date().valueOf();
    return Math.max(K, q);
  }
}
__$.u$6 = u$6;

class yJ1 {
  constructor() {
    this.linearRetryStrategy = new u$6();
  }
  static get DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS() {
    return PYY;
  }
  async pauseForRetry(A, K, q, Y) {
    if (VYY.includes(A) && K < MYY) {
      let z = this.linearRetryStrategy.calculateDelay(Y, yJ1.DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS);
      return q.verbose(`Retrying request in ${z}ms (retry attempt: ${K + 1})`), await new Promise(w => {
        return setTimeout(w, z);
      }), !0;
    }
    return !1;
  }
}
__$.yJ1 = yJ1;

class QT {
  constructor(A, K, q) {
    this.httpMethod = A, this._baseEndpoint = K, this.headers = {}, this.bodyParameters = {}, this.queryParameters = {}, this.retryPolicy = q || new yJ1();
  }
  computeUri() {
    let A = new Map();
    if (this.queryParameters) t4.addExtraQueryParameters(A, this.queryParameters);
    let K = iZ.mapToQueryString(A);
    return p5.appendQueryString(this._baseEndpoint, K);
  }
  computeParametersBodyString() {
    let A = new Map();
    if (this.bodyParameters) t4.addExtraQueryParameters(A, this.bodyParameters);
    return iZ.mapToQueryString(A);
  }
}
__$.QT = QT;

class B$6 {
  constructor(A, K, q) {
    this.minExponentialBackoff = A, this.maxExponentialBackoff = K, this.exponentialDeltaBackoff = q;
  }
  calculateDelay(A) {
    if (A === 0) return this.minExponentialBackoff;
    return Math.min(Math.pow(2, A - 1) * this.exponentialDeltaBackoff, this.maxExponentialBackoff);
  }
}
__$.B$6 = B$6;

class UKA {
  constructor() {
    this.exponentialRetryStrategy = new B$6(UKA.MIN_EXPONENTIAL_BACKOFF_MS, UKA.MAX_EXPONENTIAL_BACKOFF_MS, UKA.EXPONENTIAL_DELTA_BACKOFF_MS);
  }
  static get MIN_EXPONENTIAL_BACKOFF_MS() {
    return IYY;
  }
  static get MAX_EXPONENTIAL_BACKOFF_MS() {
    return SYY;
  }
  static get EXPONENTIAL_DELTA_BACKOFF_MS() {
    return hYY;
  }
  static get HTTP_STATUS_GONE_RETRY_AFTER_MS() {
    return bYY;
  }
  set isNewRequest(A) {
    this._isNewRequest = A;
  }
  async pauseForRetry(A, K, q) {
    if (this._isNewRequest) this._isNewRequest = !1, this.maxRetries = A === P5.GONE ? yYY : RYY;
    if ((LYY.includes(A) || A >= P5.SERVER_ERROR_RANGE_START && A <= P5.SERVER_ERROR_RANGE_END && K < this.maxRetries) && K < this.maxRetries) {
      let Y = A === P5.GONE ? UKA.HTTP_STATUS_GONE_RETRY_AFTER_MS : this.exponentialRetryStrategy.calculateDelay(K);
      return q.verbose(`Retrying request in ${Y}ms (retry attempt: ${K + 1})`), await new Promise(z => {
        return setTimeout(z, Y);
      }), !0;
    }
    return !1;
  }
}
__$.UKA = UKA;

class QU {
  constructor(A, K, q, Y, z) {
    this.logger = A, this.nodeStorage = K, this.networkClient = q, this.cryptoProvider = Y, this.disableInternalRetries = z;
  }
  async sendManagedIdentityTokenRequest(A, K, q, Y) {
    if (!QU.identitySource) QU.identitySource = this.selectManagedIdentitySource(this.logger, this.nodeStorage, this.networkClient, this.cryptoProvider, this.disableInternalRetries, K);
    return QU.identitySource.acquireTokenWithManagedIdentity(A, K, q, Y);
  }
  allEnvironmentVariablesAreDefined(A) {
    return Object.values(A).every(K => {
      return K !== void 0;
    });
  }
  getManagedIdentitySource() {
    return QU.sourceName = this.allEnvironmentVariablesAreDefined(pKA.getEnvironmentVariables()) ? K5.SERVICE_FABRIC : this.allEnvironmentVariablesAreDefined(FKA.getEnvironmentVariables()) ? K5.APP_SERVICE : this.allEnvironmentVariablesAreDefined(dKA.getEnvironmentVariables()) ? K5.MACHINE_LEARNING : this.allEnvironmentVariablesAreDefined(QKA.getEnvironmentVariables()) ? K5.CLOUD_SHELL : this.allEnvironmentVariablesAreDefined(Uo.getEnvironmentVariables()) ? K5.AZURE_ARC : K5.DEFAULT_TO_IMDS, QU.sourceName;
  }
  selectManagedIdentitySource(A, K, q, Y, z, w) {
    let H = pKA.tryCreate(A, K, q, Y, z, w) || FKA.tryCreate(A, K, q, Y, z) || dKA.tryCreate(A, K, q, Y, z) || QKA.tryCreate(A, K, q, Y, z, w) || Uo.tryCreate(A, K, q, Y, z, w) || TxA.tryCreate(A, K, q, Y, z);
    if (!H) throw wX(nH1);
    return H;
  }
}
__$.QU = QU;

class Ru {
  constructor(A) {
    this.config = j67(A || {}), this.logger = new sV(this.config.system.loggerOptions, CJ1, GI);
    let K = {
      canonicalAuthority: u6.DEFAULT_AUTHORITY
    };
    if (!Ru.nodeStorage) Ru.nodeStorage = new hKA(this.logger, this.config.managedIdentityId.id, i_A, K);
    this.networkClient = this.config.system.networkClient, this.cryptoProvider = new FU();
    let q = {
      protocolMode: gD.AAD,
      knownAuthorities: [xX6],
      cloudDiscoveryMetadata: "",
      authorityMetadata: ""
    };
    this.fakeAuthority = new $_(xX6, this.networkClient, Ru.nodeStorage, q, this.logger, this.cryptoProvider.createNewGuid(), void 0, !0), this.fakeClientCredentialClient = new uKA({
      authOptions: {
        clientId: this.config.managedIdentityId.id,
        authority: this.fakeAuthority
      }
    }), this.managedIdentityClient = new QU(this.logger, Ru.nodeStorage, this.networkClient, this.cryptoProvider, this.config.disableInternalRetries), this.hashUtils = new SKA();
  }
  async acquireToken(A) {
    if (!A.resource) throw az(r_A.urlEmptyError);
    let K = {
      forceRefresh: A.forceRefresh,
      resource: A.resource.replace("/.default", ""),
      scopes: [A.resource.replace("/.default", "")],
      authority: this.fakeAuthority.canonicalAuthority,
      correlationId: this.cryptoProvider.createNewGuid(),
      claims: A.claims,
      clientCapabilities: this.config.clientCapabilities
    };
    if (K.forceRefresh) return this.acquireTokenFromManagedIdentity(K, this.config.managedIdentityId, this.fakeAuthority);
    let [q, Y] = await this.fakeClientCredentialClient.getCachedAuthenticationResult(K, this.config, this.cryptoProvider, this.fakeAuthority, Ru.nodeStorage);
    if (K.claims) {
      let z = this.managedIdentityClient.getManagedIdentitySource();
      if (q && FYY.includes(z)) {
        let w = this.hashUtils.sha256(q.accessToken).toString(lZ.HEX);
        K.revokedTokenSha256Hash = w;
      }
      return this.acquireTokenFromManagedIdentity(K, this.config.managedIdentityId, this.fakeAuthority);
    }
    if (q) {
      if (Y === Pw.PROACTIVELY_REFRESHED) {
        this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
        let z = !0;
        await this.acquireTokenFromManagedIdentity(K, this.config.managedIdentityId, this.fakeAuthority, z);
      }
      return q;
    } else return this.acquireTokenFromManagedIdentity(K, this.config.managedIdentityId, this.fakeAuthority);
  }
  async acquireTokenFromManagedIdentity(A, K, q, Y) {
    return this.managedIdentityClient.sendManagedIdentityTokenRequest(A, K, q, Y);
  }
  getManagedIdentitySource() {
    return QU.sourceName || this.managedIdentityClient.getManagedIdentitySource();
  }
}
__$.Ru = Ru;

class m$6 {
  constructor(A, K) {
    this.client = A, this.partitionManager = K;
  }
  async beforeCacheAccess(A) {
    let K = await this.partitionManager.getKey(),
      q = await this.client.get(K);
    A.tokenCache.deserialize(q);
  }
  async afterCacheAccess(A) {
    if (A.cacheHasChanged) {
      let K = A.tokenCache.getKVStore(),
        q = Object.values(K).filter(z => J$.isAccountEntity(z)),
        Y;
      if (q.length > 0) {
        let z = q[0];
        Y = await this.partitionManager.extractKey(z);
      } else Y = await this.partitionManager.getKey();
      await this.client.set(Y, A.tokenCache.serialize());
    }
  }
}
__$.m$6 = m$6;

class Y_6 {
  constructor(A, K, q, Y = {}) {
    if (!A) throw new wq("ClientAssertionCredential: tenantId is a required parameter.");
    if (!K) throw new wq("ClientAssertionCredential: clientId is a required parameter.");
    if (!q) throw new wq("ClientAssertionCredential: clientAssertion is a required parameter.");
    this.tenantId = A, this.additionallyAllowedTenantIds = nV(Y === null || Y === void 0 ? void 0 : Y.additionallyAllowedTenants), this.options = Y, this.getAssertion = q, this.msalClient = io(K, A, Object.assign(Object.assign({}, Y), {
      logger: uq7,
      tokenCredentialOptions: this.options
    }));
  }
  async getToken(A, K = {}) {
    return EJ.withSpan(`${this.constructor.name}.getToken`, K, async q => {
      q.tenantId = vM(this.tenantId, q, this.additionallyAllowedTenantIds, uq7);
      let Y = Array.isArray(A) ? A : [A];
      return this.msalClient.getTokenByClientAssertion(Y, this.getAssertion, q);
    });
  }
}
__$.Y_6 = Y_6;

class nKA {
  constructor(A) {
    this.azureFederatedTokenFileContent = void 0, this.cacheDate = void 0;
    let K = Ew1(L2Y).assigned.join(", ");
    CxA.info(`Found the following environment variables: ${K}`);
    let q = A !== null && A !== void 0 ? A : {},
      Y = q.tenantId || process.env.AZURE_TENANT_ID,
      z = q.clientId || process.env.AZURE_CLIENT_ID;
    if (this.federatedTokenFilePath = q.tokenFilePath || process.env.AZURE_FEDERATED_TOKEN_FILE, Y) iV(CxA, Y);
    if (!z) throw new wq(`${iKA}: is unavailable. clientId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_CLIENT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    if (!Y) throw new wq(`${iKA}: is unavailable. tenantId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_TENANT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    if (!this.federatedTokenFilePath) throw new wq(`${iKA}: is unavailable. federatedTokenFilePath is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_FEDERATED_TOKEN_FILE".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    CxA.info(`Invoking ClientAssertionCredential with tenant ID: ${Y}, clientId: ${q.clientId} and federated token path: [REDACTED]`), this.client = new Y_6(Y, z, this.readFileContents.bind(this), A);
  }
  async getToken(A, K) {
    if (!this.client) {
      let q = `${iKA}: is unavailable. tenantId, clientId, and federatedTokenFilePath are required parameters. 
      In DefaultAzureCredential and ManagedIdentityCredential, these can be provided as environment variables - 
      "AZURE_TENANT_ID",
      "AZURE_CLIENT_ID",
      "AZURE_FEDERATED_TOKEN_FILE". See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`;
      throw CxA.info(q), new wq(q);
    }
    return CxA.info("Invoking getToken() of Client Assertion Credential"), this.client.getToken(A, K);
  }
  async readFileContents() {
    if (this.cacheDate !== void 0 && Date.now() - this.cacheDate >= 300000) this.azureFederatedTokenFileContent = void 0;
    if (!this.federatedTokenFilePath) throw new wq(`${iKA}: is unavailable. Invalid file path provided ${this.federatedTokenFilePath}.`);
    if (!this.azureFederatedTokenFileContent) {
      let K = (await C2Y(this.federatedTokenFilePath, "utf8")).trim();
      if (!K) throw new wq(`${iKA}: is unavailable. No content on the file ${this.federatedTokenFilePath}.`);else this.azureFederatedTokenFileContent = K, this.cacheDate = Date.now();
    }
    return this.azureFederatedTokenFileContent;
  }
}
__$.nKA = nKA;

class VGA {
  constructor(A, K) {
    var q, Y;
    this.msiRetryConfig = {
      maxRetries: 5,
      startDelayInMs: 800,
      intervalIncrement: 2
    };
    let z;
    if (typeof A === "string") this.clientId = A, z = K !== null && K !== void 0 ? K : {};else this.clientId = A === null || A === void 0 ? void 0 : A.clientId, z = A !== null && A !== void 0 ? A : {};
    this.resourceId = z === null || z === void 0 ? void 0 : z.resourceId, this.objectId = z === null || z === void 0 ? void 0 : z.objectId;
    let w = [{
      key: "clientId",
      value: this.clientId
    }, {
      key: "resourceId",
      value: this.resourceId
    }, {
      key: "objectId",
      value: this.objectId
    }].filter(J => J.value);
    if (w.length > 1) throw Error(`ManagedIdentityCredential: only one of 'clientId', 'resourceId', or 'objectId' can be provided. Received values: ${JSON.stringify({
      clientId: this.clientId,
      resourceId: this.resourceId,
      objectId: this.objectId
    })}`);
    if (z.allowInsecureConnection = !0, ((q = z.retryOptions) === null || q === void 0 ? void 0 : q.maxRetries) !== void 0) this.msiRetryConfig.maxRetries = z.retryOptions.maxRetries;
    this.identityClient = new U_A(Object.assign(Object.assign({}, z), {
      additionalPolicies: [{
        policy: Xq7(this.msiRetryConfig),
        position: "perCall"
      }]
    })), this.managedIdentityApp = new Ru({
      managedIdentityIdParams: {
        userAssignedClientId: this.clientId,
        userAssignedResourceId: this.resourceId,
        userAssignedObjectId: this.objectId
      },
      system: {
        disableInternalRetries: !0,
        networkClient: this.identityClient,
        loggerOptions: {
          logLevel: hJ1(vw1()),
          piiLoggingEnabled: (Y = z.loggingOptions) === null || Y === void 0 ? void 0 : Y.enableUnsafeSupportLogging,
          loggerCallback: SJ1(pT)
        }
      }
    }), this.isAvailableIdentityClient = new U_A(Object.assign(Object.assign({}, z), {
      retryOptions: {
        maxRetries: 0
      }
    }));
    let H = this.managedIdentityApp.getManagedIdentitySource();
    if (H === "CloudShell") {
      if (this.clientId || this.resourceId || this.objectId) throw pT.warning(`CloudShell MSI detected with user-provided IDs - throwing. Received values: ${JSON.stringify({
        clientId: this.clientId,
        resourceId: this.resourceId,
        objectId: this.objectId
      })}.`), new wq("ManagedIdentityCredential: Specifying a user-assigned managed identity is not supported for CloudShell at runtime. When using Managed Identity in CloudShell, omit the clientId, resourceId, and objectId parameters.");
    }
    if (H === "ServiceFabric") {
      if (this.clientId || this.resourceId || this.objectId) throw pT.warning(`Service Fabric detected with user-provided IDs - throwing. Received values: ${JSON.stringify({
        clientId: this.clientId,
        resourceId: this.resourceId,
        objectId: this.objectId
      })}.`), new wq(`ManagedIdentityCredential: ${_17}`);
    }
    if (pT.info(`Using ${H} managed identity.`), w.length === 1) {
      let {
        key: J,
        value: O
      } = w[0];
      pT.info(`${H} with ${J}: ${O}`);
    }
  }
  async getToken(A, K = {}) {
    pT.getToken.info("Using the MSAL provider for Managed Identity.");
    let q = phA(A);
    if (!q) throw new wq(`ManagedIdentityCredential: Multiple scopes are not supported. Scopes: ${JSON.stringify(A)}`);
    return EJ.withSpan("ManagedIdentityCredential.getToken", K, async () => {
      var Y;
      try {
        let z = await w_6.isAvailable(this.clientId),
          w = this.managedIdentityApp.getManagedIdentitySource(),
          H = w === "DefaultToImds" || w === "Imds";
        if (pT.getToken.info(`MSAL Identity source: ${w}`), z) {
          pT.getToken.info("Using the token exchange managed identity.");
          let O = await w_6.getToken({
            scopes: A,
            clientId: this.clientId,
            identityClient: this.identityClient,
            retryConfig: this.msiRetryConfig,
            resourceId: this.resourceId
          });
          if (O === null) throw new wq("Attempted to use the token exchange managed identity, but received a null response.");
          return O;
        } else if (H) {
          if (pT.getToken.info("Using the IMDS endpoint to probe for availability."), !(await U$6.isAvailable({
            scopes: A,
            clientId: this.clientId,
            getTokenOptions: K,
            identityClient: this.isAvailableIdentityClient,
            resourceId: this.resourceId
          }))) throw new wq("Attempted to use the IMDS endpoint, but it is not available.");
        }
        pT.getToken.info("Calling into MSAL for managed identity token.");
        let J = await this.managedIdentityApp.acquireToken({
          resource: q
        });
        return this.ensureValidMsalToken(A, J, K), pT.getToken.info(VG(A)), {
          expiresOnTimestamp: J.expiresOn.getTime(),
          token: J.accessToken,
          refreshAfterTimestamp: (Y = J.refreshOn) === null || Y === void 0 ? void 0 : Y.getTime(),
          tokenType: "Bearer"
        };
      } catch (z) {
        if (pT.getToken.error(Q2(A, z)), z.name === "AuthenticationRequiredError") throw z;
        if (y2Y(z)) throw new wq(`ManagedIdentityCredential: Network unreachable. Message: ${z.message}`, {
          cause: z
        });
        throw new wq(`ManagedIdentityCredential: Authentication failed. Message ${z.message}`, {
          cause: z
        });
      }
    });
  }
  ensureValidMsalToken(A, K, q) {
    let Y = z => {
      return pT.getToken.info(z), new PU({
        scopes: Array.isArray(A) ? A : [A],
        getTokenOptions: q,
        message: z
      });
    };
    if (!K) throw Y("No response.");
    if (!K.expiresOn) throw Y('Response had no "expiresOn" property.');
    if (!K.accessToken) throw Y('Response had no "accessToken" property.');
  }
}
__$.VGA = VGA;

class J_6 {
  constructor(A) {
    if (A === null || A === void 0 ? void 0 : A.tenantId) iV(TC, A === null || A === void 0 ? void 0 : A.tenantId), this.tenantId = A === null || A === void 0 ? void 0 : A.tenantId;
    if (A === null || A === void 0 ? void 0 : A.subscription) H_6(TC, A === null || A === void 0 ? void 0 : A.subscription), this.subscription = A === null || A === void 0 ? void 0 : A.subscription;
    this.additionallyAllowedTenantIds = nV(A === null || A === void 0 ? void 0 : A.additionallyAllowedTenants), this.timeout = A === null || A === void 0 ? void 0 : A.processTimeoutInMs;
  }
  async getToken(A, K = {}) {
    let q = vM(this.tenantId, K, this.additionallyAllowedTenantIds);
    if (q) iV(TC, q);
    if (this.subscription) H_6(TC, this.subscription);
    let Y = typeof A === "string" ? A : A[0];
    return TC.getToken.info(`Using the scope ${Y}`), EJ.withSpan(`${this.constructor.name}.getToken`, K, async () => {
      var z, w, H, J;
      try {
        fGA(Y, TC);
        let O = BJ1(Y),
          X = await Uq7.getAzureCliAccessToken(O, q, this.subscription, this.timeout),
          $ = (z = X.stderr) === null || z === void 0 ? void 0 : z.match("(.*)az login --scope(.*)"),
          _ = ((w = X.stderr) === null || w === void 0 ? void 0 : w.match("(.*)az login(.*)")) && !$;
        if (((H = X.stderr) === null || H === void 0 ? void 0 : H.match("az:(.*)not found")) || ((J = X.stderr) === null || J === void 0 ? void 0 : J.startsWith("'az' is not recognized"))) {
          let Z = new wq("Azure CLI could not be found. Please visit https://aka.ms/azure-cli for installation instructions and then, once installed, authenticate to your Azure account using 'az login'.");
          throw TC.getToken.info(Q2(A, Z)), Z;
        }
        if (_) {
          let Z = new wq("Please run 'az login' from a command prompt to authenticate before using this credential.");
          throw TC.getToken.info(Q2(A, Z)), Z;
        }
        try {
          let Z = X.stdout,
            W = this.parseRawResponse(Z);
          return TC.getToken.info(VG(A)), W;
        } catch (Z) {
          if (X.stderr) throw new wq(X.stderr);
          throw Z;
        }
      } catch (O) {
        let X = O.name === "CredentialUnavailableError" ? O : new wq(O.message || "Unknown error while trying to retrieve the access token");
        throw TC.getToken.info(Q2(A, X)), X;
      }
    });
  }
  parseRawResponse(A) {
    let K = JSON.parse(A),
      q = K.accessToken,
      Y = Number.parseInt(K.expires_on, 10) * 1000;
    if (!isNaN(Y)) return TC.getToken.info("expires_on is available and is valid, using it"), {
      token: q,
      expiresOnTimestamp: Y,
      tokenType: "Bearer"
    };
    if (Y = new Date(K.expiresOn).getTime(), isNaN(Y)) throw new wq(`Unexpected response from Azure CLI when getting token. Expected "expiresOn" to be a RFC3339 date string. Got: "${K.expiresOn}"`);
    return {
      token: q,
      expiresOnTimestamp: Y,
      tokenType: "Bearer"
    };
  }
}
__$.J_6 = J_6;

class O_6 {
  constructor(A) {
    if (A === null || A === void 0 ? void 0 : A.tenantId) iV(pU, A === null || A === void 0 ? void 0 : A.tenantId), this.tenantId = A === null || A === void 0 ? void 0 : A.tenantId;
    this.additionallyAllowedTenantIds = nV(A === null || A === void 0 ? void 0 : A.additionallyAllowedTenants), this.timeout = A === null || A === void 0 ? void 0 : A.processTimeoutInMs;
  }
  async getToken(A, K = {}) {
    let q = vM(this.tenantId, K, this.additionallyAllowedTenantIds);
    if (q) iV(pU, q);
    let Y;
    if (typeof A === "string") Y = [A];else Y = A;
    return pU.getToken.info(`Using the scopes ${A}`), EJ.withSpan(`${this.constructor.name}.getToken`, K, async () => {
      var z, w, H, J;
      try {
        Y.forEach(_ => {
          fGA(_, pU);
        });
        let O = await dq7.getAzdAccessToken(Y, q, this.timeout),
          X = ((z = O.stderr) === null || z === void 0 ? void 0 : z.match("not logged in, run `azd login` to login")) || ((w = O.stderr) === null || w === void 0 ? void 0 : w.match("not logged in, run `azd auth login` to login"));
        if (((H = O.stderr) === null || H === void 0 ? void 0 : H.match("azd:(.*)not found")) || ((J = O.stderr) === null || J === void 0 ? void 0 : J.startsWith("'azd' is not recognized")) || O.error && O.error.code === "ENOENT") {
          let _ = new wq("Azure Developer CLI couldn't be found. To mitigate this issue, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
          throw pU.getToken.info(Q2(A, _)), _;
        }
        if (X) {
          let _ = new wq("Please run 'azd auth login' from a command prompt to authenticate before using this credential. For more information, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
          throw pU.getToken.info(Q2(A, _)), _;
        }
        try {
          let _ = JSON.parse(O.stdout);
          return pU.getToken.info(VG(A)), {
            token: _.token,
            expiresOnTimestamp: new Date(_.expiresOn).getTime(),
            tokenType: "Bearer"
          };
        } catch (_) {
          if (O.stderr) throw new wq(O.stderr);
          throw _;
        }
      } catch (O) {
        let X = O.name === "CredentialUnavailableError" ? O : new wq(O.message || "Unknown error while trying to retrieve the access token");
        throw pU.getToken.info(Q2(A, X)), X;
      }
    });
  }
}
__$.O_6 = O_6;

class __6 {
  constructor(A) {
    if (A === null || A === void 0 ? void 0 : A.tenantId) iV(dU, A === null || A === void 0 ? void 0 : A.tenantId), this.tenantId = A === null || A === void 0 ? void 0 : A.tenantId;
    this.additionallyAllowedTenantIds = nV(A === null || A === void 0 ? void 0 : A.additionallyAllowedTenants), this.timeout = A === null || A === void 0 ? void 0 : A.processTimeoutInMs;
  }
  async getAzurePowerShellAccessToken(A, K, q) {
    for (let Y of [...$_6]) {
      try {
        await rq7([[Y, "/?"]], q);
      } catch (H) {
        $_6.shift();
        continue;
      }
      let w = (await rq7([[Y, "-NoProfile", "-NonInteractive", "-Command", `
          $tenantId = "${K !== null && K !== void 0 ? K : ""}"
          $m = Import-Module Az.Accounts -MinimumVersion 2.2.0 -PassThru
          $useSecureString = $m.Version -ge [version]'2.17.0'

          $params = @{
            ResourceUrl = "${A}"
          }

          if ($tenantId.Length -gt 0) {
            $params["TenantId"] = $tenantId
          }

          if ($useSecureString) {
            $params["AsSecureString"] = $true
          }

          $token = Get-AzAccessToken @params

          $result = New-Object -TypeName PSObject
          $result | Add-Member -MemberType NoteProperty -Name ExpiresOn -Value $token.ExpiresOn
          if ($useSecureString) {
            $result | Add-Member -MemberType NoteProperty -Name Token -Value (ConvertFrom-SecureString -AsPlainText $token.Token)
          } else {
            $result | Add-Member -MemberType NoteProperty -Name Token -Value $token.Token
          }

          Write-Output (ConvertTo-Json $result)
          `]]))[0];
      return x2Y(w);
    }
    throw Error("Unable to execute PowerShell. Ensure that it is installed in your system");
  }
  async getToken(A, K = {}) {
    return EJ.withSpan(`${this.constructor.name}.getToken`, K, async () => {
      let q = vM(this.tenantId, K, this.additionallyAllowedTenantIds),
        Y = typeof A === "string" ? A : A[0];
      if (q) iV(dU, q);
      try {
        fGA(Y, dU), dU.getToken.info(`Using the scope ${Y}`);
        let z = BJ1(Y),
          w = await this.getAzurePowerShellAccessToken(z, q, this.timeout);
        return dU.getToken.info(VG(A)), {
          token: w.Token,
          expiresOnTimestamp: new Date(w.ExpiresOn).getTime(),
          tokenType: "Bearer"
        };
      } catch (z) {
        if (b2Y(z)) {
          let H = new wq(X_6.installed);
          throw dU.getToken.info(Q2(Y, H)), H;
        } else if (h2Y(z)) {
          let H = new wq(X_6.login);
          throw dU.getToken.info(Q2(Y, H)), H;
        }
        let w = new wq(`${z}. ${X_6.troubleshoot}`);
        throw dU.getToken.info(Q2(Y, w)), w;
      }
    });
  }
}
__$.__6 = __6;

class Z_6 {
  constructor(...A) {
    this._sources = [], this._sources = A;
  }
  async getToken(A, K = {}) {
    let {
      token: q
    } = await this.getTokenInternal(A, K);
    return q;
  }
  async getTokenInternal(A, K = {}) {
    let q = null,
      Y,
      z = [];
    return EJ.withSpan("ChainedTokenCredential.getToken", K, async w => {
      for (let H = 0; H < this._sources.length && q === null; H++) try {
        q = await this._sources[H].getToken(A, w), Y = this._sources[H];
      } catch (J) {
        if (J.name === "CredentialUnavailableError" || J.name === "AuthenticationRequiredError") z.push(J);else throw G_6.getToken.info(Q2(A, J)), J;
      }
      if (!q && z.length > 0) {
        let H = new JO6(z, "ChainedTokenCredential authentication failed.");
        throw G_6.getToken.info(Q2(A, H)), H;
      }
      if (G_6.getToken.info(`Result for ${Y.constructor.name}: ${VG(A)}`), q === null) throw new wq("Failed to retrieve a valid token");
      return {
        token: q,
        successfulCredential: Y
      };
    });
  }
}
__$.Z_6 = Z_6;

class W_6 {
  constructor(A, K, q, Y = {}) {
    if (!A || !K) throw Error(`${LxA}: tenantId and clientId are required parameters.`);
    this.tenantId = A, this.additionallyAllowedTenantIds = nV(Y === null || Y === void 0 ? void 0 : Y.additionallyAllowedTenants), this.sendCertificateChain = Y.sendCertificateChain, this.certificateConfiguration = Object.assign({}, typeof q === "string" ? {
      certificatePath: q
    } : q);
    let z = this.certificateConfiguration.certificate,
      w = this.certificateConfiguration.certificatePath;
    if (!this.certificateConfiguration || !(z || w)) throw Error(`${LxA}: Provide either a PEM certificate in string form, or the path to that certificate in the filesystem. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    if (z && w) throw Error(`${LxA}: To avoid unexpected behaviors, providing both the contents of a PEM certificate and the path to a PEM certificate is forbidden. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    this.msalClient = io(K, A, Object.assign(Object.assign({}, Y), {
      logger: K57,
      tokenCredentialOptions: Y
    }));
  }
  async getToken(A, K = {}) {
    return EJ.withSpan(`${LxA}.getToken`, K, async q => {
      q.tenantId = vM(this.tenantId, q, this.additionallyAllowedTenantIds, K57);
      let Y = Array.isArray(A) ? A : [A],
        z = await this.buildClientCertificate();
      return this.msalClient.getTokenByClientCertificate(Y, z, q);
    });
  }
  async buildClientCertificate() {
    var A;
    let K = await m2Y(this.certificateConfiguration, (A = this.sendCertificateChain) !== null && A !== void 0 ? A : !1),
      q;
    if (this.certificateConfiguration.certificatePassword !== void 0) q = u2Y({
      key: K.certificateContents,
      passphrase: this.certificateConfiguration.certificatePassword,
      format: "pem"
    }).export({
      format: "pem",
      type: "pkcs8"
    }).toString();else q = K.certificateContents;
    return {
      thumbprint: K.thumbprint,
      thumbprintSha256: K.thumbprintSha256,
      privateKey: q,
      x5c: K.x5c
    };
  }
}
__$.W_6 = W_6;

class D_6 {
  constructor(A, K, q, Y = {}) {
    if (!A) throw new wq("ClientSecretCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    if (!K) throw new wq("ClientSecretCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    if (!q) throw new wq("ClientSecretCredential: clientSecret is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    this.clientSecret = q, this.tenantId = A, this.additionallyAllowedTenantIds = nV(Y === null || Y === void 0 ? void 0 : Y.additionallyAllowedTenants), this.msalClient = io(K, A, Object.assign(Object.assign({}, Y), {
      logger: Y57,
      tokenCredentialOptions: Y
    }));
  }
  async getToken(A, K = {}) {
    return EJ.withSpan(`${this.constructor.name}.getToken`, K, async q => {
      q.tenantId = vM(this.tenantId, q, this.additionallyAllowedTenantIds, Y57);
      let Y = uJ1(A);
      return this.msalClient.getTokenByClientSecret(Y, this.clientSecret, q);
    });
  }
}
__$.D_6 = D_6;

class j_6 {
  constructor(A, K, q, Y, z = {}) {
    if (!A) throw new wq("UsernamePasswordCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!K) throw new wq("UsernamePasswordCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!q) throw new wq("UsernamePasswordCredential: username is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!Y) throw new wq("UsernamePasswordCredential: password is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    this.tenantId = A, this.additionallyAllowedTenantIds = nV(z === null || z === void 0 ? void 0 : z.additionallyAllowedTenants), this.username = q, this.password = Y, this.msalClient = io(K, this.tenantId, Object.assign(Object.assign({}, z), {
      tokenCredentialOptions: z !== null && z !== void 0 ? z : {}
    }));
  }
  async getToken(A, K = {}) {
    return EJ.withSpan(`${this.constructor.name}.getToken`, K, async q => {
      q.tenantId = vM(this.tenantId, q, this.additionallyAllowedTenantIds, g2Y);
      let Y = uJ1(A);
      return this.msalClient.getTokenByUsernamePassword(Y, this.username, this.password, q);
    });
  }
}
__$.j_6 = j_6;

class M_6 {
  constructor(A) {
    this._credential = void 0;
    let K = Ew1(F2Y).assigned.join(", ");
    cU.info(`Found the following environment variables: ${K}`);
    let q = process.env.AZURE_TENANT_ID,
      Y = process.env.AZURE_CLIENT_ID,
      z = process.env.AZURE_CLIENT_SECRET,
      w = Q2Y(),
      H = U2Y(),
      J = Object.assign(Object.assign({}, A), {
        additionallyAllowedTenantIds: w,
        sendCertificateChain: H
      });
    if (q) iV(cU, q);
    if (q && Y && z) {
      cU.info(`Invoking ClientSecretCredential with tenant ID: ${q}, clientId: ${Y} and clientSecret: [REDACTED]`), this._credential = new D_6(q, Y, z, J);
      return;
    }
    let O = process.env.AZURE_CLIENT_CERTIFICATE_PATH,
      X = process.env.AZURE_CLIENT_CERTIFICATE_PASSWORD;
    if (q && Y && O) {
      cU.info(`Invoking ClientCertificateCredential with tenant ID: ${q}, clientId: ${Y} and certificatePath: ${O}`), this._credential = new W_6(q, Y, {
        certificatePath: O,
        certificatePassword: X
      }, J);
      return;
    }
    let $ = process.env.AZURE_USERNAME,
      _ = process.env.AZURE_PASSWORD;
    if (q && Y && $ && _) cU.info(`Invoking UsernamePasswordCredential with tenant ID: ${q}, clientId: ${Y} and username: ${$}`), cU.warning("Environment is configured to use username and password authentication. This authentication method is deprecated, as it doesn't support multifactor authentication (MFA). Use a more secure credential. For more details, see https://aka.ms/azsdk/identity/mfa."), this._credential = new j_6(q, Y, $, _, J);
  }
  async getToken(A, K = {}) {
    return EJ.withSpan(`${mJ1}.getToken`, K, async q => {
      if (this._credential) try {
        let Y = await this._credential.getToken(A, q);
        return cU.getToken.info(VG(A)), Y;
      } catch (Y) {
        let z = new khA(400, {
          error: `${mJ1} authentication failed. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`,
          error_description: Y.message.toString().split("More details:").join("")
        });
        throw cU.getToken.info(Q2(A, z)), z;
      }
      throw new wq(`${mJ1} is unavailable. No underlying credential could be used. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`);
    });
  }
}
__$.M_6 = M_6;

class J57 {
  constructor(A, K) {
    this.credentialName = A, this.credentialUnavailableErrorMessage = K;
  }
  getToken() {
    return P_6.getToken.info(`Skipping ${this.credentialName}, reason: ${this.credentialUnavailableErrorMessage}`), Promise.resolve(null);
  }
}
__$.J57 = J57;

class $uA {
  constructor(A) {
    if (this._options = A, this._requestMessageId = 0, this._requestHandlers = new Map(), this._requestHandlerAbortControllers = new Map(), this._notificationHandlers = new Map(), this._responseHandlers = new Map(), this._progressHandlers = new Map(), this._timeoutInfo = new Map(), this._pendingDebouncedNotifications = new Set(), this._taskProgressTokens = new Map(), this._requestResolvers = new Map(), this.setNotificationHandler(xO1, K => {
      this._oncancel(K);
    }), this.setNotificationHandler(mO1, K => {
      this._onprogress(K);
    }), this.setRequestHandler(BO1, K => ({})), this._taskStore = A === null || A === void 0 ? void 0 : A.taskStore, this._taskMessageQueue = A === null || A === void 0 ? void 0 : A.taskMessageQueue, this._taskStore) this.setRequestHandler(gO1, async (K, q) => {
      let Y = await this._taskStore.getTask(K.params.taskId, q.sessionId);
      if (!Y) throw new MK(Hq.InvalidParams, "Failed to retrieve task: Task not found");
      return {
        ...Y
      };
    }), this.setRequestHandler(QO1, async (K, q) => {
      let Y = async () => {
        var z;
        let w = K.params.taskId;
        if (this._taskMessageQueue) {
          let J;
          while (J = await this._taskMessageQueue.dequeue(w, q.sessionId)) {
            if (J.type === "response" || J.type === "error") {
              let O = J.message,
                X = O.id,
                $ = this._requestResolvers.get(X);
              if ($) {
                if (this._requestResolvers.delete(X), J.type === "response") $(O);else {
                  let _ = O,
                    G = new MK(_.error.code, _.error.message, _.error.data);
                  $(G);
                }
              } else {
                let _ = J.type === "response" ? "Response" : "Error";
                this._onerror(Error(`${_} handler missing for request ${X}`));
              }
              continue;
            }
            await ((z = this._transport) === null || z === void 0 ? void 0 : z.send(J.message, {
              relatedRequestId: q.requestId
            }));
          }
        }
        let H = await this._taskStore.getTask(w, q.sessionId);
        if (!H) throw new MK(Hq.InvalidParams, `Task not found: ${w}`);
        if (!Ja(H.status)) return await this._waitForTaskUpdate(w, q.signal), await Y();
        if (Ja(H.status)) {
          let J = await this._taskStore.getTaskResult(w, q.sessionId);
          return this._clearTaskQueue(w), {
            ...J,
            _meta: {
              ...J._meta,
              [gu]: {
                taskId: w
              }
            }
          };
        }
        return await Y();
      };
      return await Y();
    }), this.setRequestHandler(UO1, async (K, q) => {
      var Y;
      try {
        let {
          tasks: z,
          nextCursor: w
        } = await this._taskStore.listTasks((Y = K.params) === null || Y === void 0 ? void 0 : Y.cursor, q.sessionId);
        return {
          tasks: z,
          nextCursor: w,
          _meta: {}
        };
      } catch (z) {
        throw new MK(Hq.InvalidParams, `Failed to list tasks: ${z instanceof Error ? z.message : String(z)}`);
      }
    }), this.setRequestHandler(s97, async (K, q) => {
      try {
        let Y = await this._taskStore.getTask(K.params.taskId, q.sessionId);
        if (!Y) throw new MK(Hq.InvalidParams, `Task not found: ${K.params.taskId}`);
        if (Ja(Y.status)) throw new MK(Hq.InvalidParams, `Cannot cancel task in terminal status: ${Y.status}`);
        await this._taskStore.updateTaskStatus(K.params.taskId, "cancelled", "Client cancelled task execution.", q.sessionId), this._clearTaskQueue(K.params.taskId);
        let z = await this._taskStore.getTask(K.params.taskId, q.sessionId);
        if (!z) throw new MK(Hq.InvalidParams, `Task not found after cancellation: ${K.params.taskId}`);
        return {
          _meta: {},
          ...z
        };
      } catch (Y) {
        if (Y instanceof MK) throw Y;
        throw new MK(Hq.InvalidRequest, `Failed to cancel task: ${Y instanceof Error ? Y.message : String(Y)}`);
      }
    });
  }
  async _oncancel(A) {
    let K = this._requestHandlerAbortControllers.get(A.params.requestId);
    K === null || K === void 0 || K.abort(A.params.reason);
  }
  _setupTimeout(A, K, q, Y, z = !1) {
    this._timeoutInfo.set(A, {
      timeoutId: setTimeout(Y, K),
      startTime: Date.now(),
      timeout: K,
      maxTotalTimeout: q,
      resetTimeoutOnProgress: z,
      onTimeout: Y
    });
  }
  _resetTimeout(A) {
    let K = this._timeoutInfo.get(A);
    if (!K) return !1;
    let q = Date.now() - K.startTime;
    if (K.maxTotalTimeout && q >= K.maxTotalTimeout) throw this._timeoutInfo.delete(A), MK.fromError(Hq.RequestTimeout, "Maximum total timeout exceeded", {
      maxTotalTimeout: K.maxTotalTimeout,
      totalElapsed: q
    });
    return clearTimeout(K.timeoutId), K.timeoutId = setTimeout(K.onTimeout, K.timeout), !0;
  }
  _cleanupTimeout(A) {
    let K = this._timeoutInfo.get(A);
    if (K) clearTimeout(K.timeoutId), this._timeoutInfo.delete(A);
  }
  async connect(A) {
    var K, q, Y;
    this._transport = A;
    let z = (K = this.transport) === null || K === void 0 ? void 0 : K.onclose;
    this._transport.onclose = () => {
      z === null || z === void 0 || z(), this._onclose();
    };
    let w = (q = this.transport) === null || q === void 0 ? void 0 : q.onerror;
    this._transport.onerror = J => {
      w === null || w === void 0 || w(J), this._onerror(J);
    };
    let H = (Y = this._transport) === null || Y === void 0 ? void 0 : Y.onmessage;
    this._transport.onmessage = (J, O) => {
      if (H === null || H === void 0 || H(J, O), YqA(J) || r97(J)) this._onresponse(J);else if (txA(J)) this._onrequest(J, O);else if (l97(J)) this._onnotification(J);else this._onerror(Error(`Unknown message type: ${JSON.stringify(J)}`));
    }, await this._transport.start();
  }
  _onclose() {
    var A;
    let K = this._responseHandlers;
    this._responseHandlers = new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    let q = MK.fromError(Hq.ConnectionClosed, "Connection closed");
    this._transport = void 0, (A = this.onclose) === null || A === void 0 || A.call(this);
    for (let Y of K.values()) Y(q);
  }
  _onerror(A) {
    var K;
    (K = this.onerror) === null || K === void 0 || K.call(this, A);
  }
  _onnotification(A) {
    var K;
    let q = (K = this._notificationHandlers.get(A.method)) !== null && K !== void 0 ? K : this.fallbackNotificationHandler;
    if (q === void 0) return;
    Promise.resolve().then(() => q(A)).catch(Y => this._onerror(Error(`Uncaught error in notification handler: ${Y}`)));
  }
  _onrequest(A, K) {
    var q, Y, z, w, H, J;
    let O = (q = this._requestHandlers.get(A.method)) !== null && q !== void 0 ? q : this.fallbackRequestHandler,
      X = this._transport,
      $ = (w = (z = (Y = A.params) === null || Y === void 0 ? void 0 : Y._meta) === null || z === void 0 ? void 0 : z[gu]) === null || w === void 0 ? void 0 : w.taskId;
    if (O === void 0) {
      let D = {
        jsonrpc: "2.0",
        id: A.id,
        error: {
          code: Hq.MethodNotFound,
          message: "Method not found"
        }
      };
      if ($ && this._taskMessageQueue) this._enqueueTaskMessage($, {
        type: "error",
        message: D,
        timestamp: Date.now()
      }, X === null || X === void 0 ? void 0 : X.sessionId).catch(j => this._onerror(Error(`Failed to enqueue error response: ${j}`)));else X === null || X === void 0 || X.send(D).catch(j => this._onerror(Error(`Failed to send an error response: ${j}`)));
      return;
    }
    let _ = new AbortController();
    this._requestHandlerAbortControllers.set(A.id, _);
    let G = (H = A.params) === null || H === void 0 ? void 0 : H.task,
      Z = this._taskStore ? this.requestTaskStore(A, X === null || X === void 0 ? void 0 : X.sessionId) : void 0,
      W = {
        signal: _.signal,
        sessionId: X === null || X === void 0 ? void 0 : X.sessionId,
        _meta: (J = A.params) === null || J === void 0 ? void 0 : J._meta,
        sendNotification: async D => {
          let j = {
            relatedRequestId: A.id
          };
          if ($) j.relatedTask = {
            taskId: $
          };
          await this.notification(D, j);
        },
        sendRequest: async (D, j, M) => {
          var P, f;
          let N = {
            ...M,
            relatedRequestId: A.id
          };
          if ($ && !N.relatedTask) N.relatedTask = {
            taskId: $
          };
          let T = (f = (P = N.relatedTask) === null || P === void 0 ? void 0 : P.taskId) !== null && f !== void 0 ? f : $;
          if (T && Z) await Z.updateTaskStatus(T, "input_required");
          return await this.request(D, j, N);
        },
        authInfo: K === null || K === void 0 ? void 0 : K.authInfo,
        requestId: A.id,
        requestInfo: K === null || K === void 0 ? void 0 : K.requestInfo,
        taskId: $,
        taskStore: Z,
        taskRequestedTtl: G === null || G === void 0 ? void 0 : G.ttl,
        closeSSEStream: K === null || K === void 0 ? void 0 : K.closeSSEStream,
        closeStandaloneSSEStream: K === null || K === void 0 ? void 0 : K.closeStandaloneSSEStream
      };
    Promise.resolve().then(() => {
      if (G) this.assertTaskHandlerCapability(A.method);
    }).then(() => O(A, W)).then(async D => {
      if (_.signal.aborted) return;
      let j = {
        result: D,
        jsonrpc: "2.0",
        id: A.id
      };
      if ($ && this._taskMessageQueue) await this._enqueueTaskMessage($, {
        type: "response",
        message: j,
        timestamp: Date.now()
      }, X === null || X === void 0 ? void 0 : X.sessionId);else await (X === null || X === void 0 ? void 0 : X.send(j));
    }, async D => {
      var j;
      if (_.signal.aborted) return;
      let M = {
        jsonrpc: "2.0",
        id: A.id,
        error: {
          code: Number.isSafeInteger(D.code) ? D.code : Hq.InternalError,
          message: (j = D.message) !== null && j !== void 0 ? j : "Internal error",
          ...(D.data !== void 0 && {
            data: D.data
          })
        }
      };
      if ($ && this._taskMessageQueue) await this._enqueueTaskMessage($, {
        type: "error",
        message: M,
        timestamp: Date.now()
      }, X === null || X === void 0 ? void 0 : X.sessionId);else await (X === null || X === void 0 ? void 0 : X.send(M));
    }).catch(D => this._onerror(Error(`Failed to send response: ${D}`))).finally(() => {
      this._requestHandlerAbortControllers.delete(A.id);
    });
  }
  _onprogress(A) {
    let {
        progressToken: K,
        ...q
      } = A.params,
      Y = Number(K),
      z = this._progressHandlers.get(Y);
    if (!z) {
      this._onerror(Error(`Received a progress notification for an unknown token: ${JSON.stringify(A)}`));
      return;
    }
    let w = this._responseHandlers.get(Y),
      H = this._timeoutInfo.get(Y);
    if (H && w && H.resetTimeoutOnProgress) try {
      this._resetTimeout(Y);
    } catch (J) {
      this._responseHandlers.delete(Y), this._progressHandlers.delete(Y), this._cleanupTimeout(Y), w(J);
      return;
    }
    z(q);
  }
  _onresponse(A) {
    let K = Number(A.id),
      q = this._requestResolvers.get(K);
    if (q) {
      if (this._requestResolvers.delete(K), YqA(A)) q(A);else {
        let w = new MK(A.error.code, A.error.message, A.error.data);
        q(w);
      }
      return;
    }
    let Y = this._responseHandlers.get(K);
    if (Y === void 0) {
      this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(A)}`));
      return;
    }
    this._responseHandlers.delete(K), this._cleanupTimeout(K);
    let z = !1;
    if (YqA(A) && A.result && typeof A.result === "object") {
      let w = A.result;
      if (w.task && typeof w.task === "object") {
        let H = w.task;
        if (typeof H.taskId === "string") z = !0, this._taskProgressTokens.set(H.taskId, K);
      }
    }
    if (!z) this._progressHandlers.delete(K);
    if (YqA(A)) Y(A);else {
      let w = MK.fromError(A.error.code, A.error.message, A.error.data);
      Y(w);
    }
  }
  get transport() {
    return this._transport;
  }
  async close() {
    var A;
    await ((A = this._transport) === null || A === void 0 ? void 0 : A.close());
  }
  async *requestStream(A, K, q) {
    var Y, z, w, H;
    let {
      task: J
    } = q !== null && q !== void 0 ? q : {};
    if (!J) {
      try {
        yield {
          type: "result",
          result: await this.request(A, K, q)
        };
      } catch (X) {
        yield {
          type: "error",
          error: X instanceof MK ? X : new MK(Hq.InternalError, String(X))
        };
      }
      return;
    }
    let O;
    try {
      let X = await this.request(A, Yp, q);
      if (X.task) O = X.task.taskId, yield {
        type: "taskCreated",
        task: X.task
      };else throw new MK(Hq.InternalError, "Task creation did not return a task");
      while (!0) {
        let $ = await this.getTask({
          taskId: O
        }, q);
        if (yield {
          type: "taskStatus",
          task: $
        }, Ja($.status)) {
          if ($.status === "completed") yield {
            type: "result",
            result: await this.getTaskResult({
              taskId: O
            }, K, q)
          };else if ($.status === "failed") yield {
            type: "error",
            error: new MK(Hq.InternalError, `Task ${O} failed`)
          };else if ($.status === "cancelled") yield {
            type: "error",
            error: new MK(Hq.InternalError, `Task ${O} was cancelled`)
          };
          return;
        }
        if ($.status === "input_required") {
          yield {
            type: "result",
            result: await this.getTaskResult({
              taskId: O
            }, K, q)
          };
          return;
        }
        let _ = (w = (Y = $.pollInterval) !== null && Y !== void 0 ? Y : (z = this._options) === null || z === void 0 ? void 0 : z.defaultTaskPollInterval) !== null && w !== void 0 ? w : 1000;
        await new Promise(G => setTimeout(G, _)), (H = q === null || q === void 0 ? void 0 : q.signal) === null || H === void 0 || H.throwIfAborted();
      }
    } catch (X) {
      yield {
        type: "error",
        error: X instanceof MK ? X : new MK(Hq.InternalError, String(X))
      };
    }
  }
  request(A, K, q) {
    let {
      relatedRequestId: Y,
      resumptionToken: z,
      onresumptiontoken: w,
      task: H,
      relatedTask: J
    } = q !== null && q !== void 0 ? q : {};
    return new Promise((O, X) => {
      var $, _, G, Z, W, D, j;
      let M = x => {
        X(x);
      };
      if (!this._transport) {
        M(Error("Not connected"));
        return;
      }
      if ((($ = this._options) === null || $ === void 0 ? void 0 : $.enforceStrictCapabilities) === !0) try {
        if (this.assertCapabilityForMethod(A.method), H) this.assertTaskCapability(A.method);
      } catch (x) {
        M(x);
        return;
      }
      (_ = q === null || q === void 0 ? void 0 : q.signal) === null || _ === void 0 || _.throwIfAborted();
      let P = this._requestMessageId++,
        f = {
          ...A,
          jsonrpc: "2.0",
          id: P
        };
      if (q === null || q === void 0 ? void 0 : q.onprogress) this._progressHandlers.set(P, q.onprogress), f.params = {
        ...A.params,
        _meta: {
          ...(((G = A.params) === null || G === void 0 ? void 0 : G._meta) || {}),
          progressToken: P
        }
      };
      if (H) f.params = {
        ...f.params,
        task: H
      };
      if (J) f.params = {
        ...f.params,
        _meta: {
          ...(((Z = f.params) === null || Z === void 0 ? void 0 : Z._meta) || {}),
          [gu]: J
        }
      };
      let N = x => {
        var y;
        this._responseHandlers.delete(P), this._progressHandlers.delete(P), this._cleanupTimeout(P), (y = this._transport) === null || y === void 0 || y.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: P,
            reason: String(x)
          }
        }, {
          relatedRequestId: Y,
          resumptionToken: z,
          onresumptiontoken: w
        }).catch(b => this._onerror(Error(`Failed to send cancellation: ${b}`)));
        let B = x instanceof MK ? x : new MK(Hq.RequestTimeout, String(x));
        X(B);
      };
      this._responseHandlers.set(P, x => {
        var y;
        if ((y = q === null || q === void 0 ? void 0 : q.signal) === null || y === void 0 ? void 0 : y.aborted) return;
        if (x instanceof Error) return X(x);
        try {
          let B = BM(K, x.result);
          if (!B.success) X(B.error);else O(B.data);
        } catch (B) {
          X(B);
        }
      }), (W = q === null || q === void 0 ? void 0 : q.signal) === null || W === void 0 || W.addEventListener("abort", () => {
        var x;
        N((x = q === null || q === void 0 ? void 0 : q.signal) === null || x === void 0 ? void 0 : x.reason);
      });
      let T = (D = q === null || q === void 0 ? void 0 : q.timeout) !== null && D !== void 0 ? D : eJY,
        C = () => N(MK.fromError(Hq.RequestTimeout, "Request timed out", {
          timeout: T
        }));
      this._setupTimeout(P, T, q === null || q === void 0 ? void 0 : q.maxTotalTimeout, C, (j = q === null || q === void 0 ? void 0 : q.resetTimeoutOnProgress) !== null && j !== void 0 ? j : !1);
      let R = J === null || J === void 0 ? void 0 : J.taskId;
      if (R) {
        let x = y => {
          let B = this._responseHandlers.get(P);
          if (B) B(y);else this._onerror(Error(`Response handler missing for side-channeled request ${P}`));
        };
        this._requestResolvers.set(P, x), this._enqueueTaskMessage(R, {
          type: "request",
          message: f,
          timestamp: Date.now()
        }).catch(y => {
          this._cleanupTimeout(P), X(y);
        });
      } else this._transport.send(f, {
        relatedRequestId: Y,
        resumptionToken: z,
        onresumptiontoken: w
      }).catch(x => {
        this._cleanupTimeout(P), X(x);
      });
    });
  }
  async getTask(A, K) {
    return this.request({
      method: "tasks/get",
      params: A
    }, FO1, K);
  }
  async getTaskResult(A, K, q) {
    return this.request({
      method: "tasks/result",
      params: A
    }, K, q);
  }
  async listTasks(A, K) {
    return this.request({
      method: "tasks/list",
      params: A
    }, pO1, K);
  }
  async cancelTask(A, K) {
    return this.request({
      method: "tasks/cancel",
      params: A
    }, t97, K);
  }
  async notification(A, K) {
    var q, Y, z, w, H;
    if (!this._transport) throw Error("Not connected");
    this.assertNotificationCapability(A.method);
    let J = (q = K === null || K === void 0 ? void 0 : K.relatedTask) === null || q === void 0 ? void 0 : q.taskId;
    if (J) {
      let _ = {
        ...A,
        jsonrpc: "2.0",
        params: {
          ...A.params,
          _meta: {
            ...(((Y = A.params) === null || Y === void 0 ? void 0 : Y._meta) || {}),
            [gu]: K.relatedTask
          }
        }
      };
      await this._enqueueTaskMessage(J, {
        type: "notification",
        message: _,
        timestamp: Date.now()
      });
      return;
    }
    if (((w = (z = this._options) === null || z === void 0 ? void 0 : z.debouncedNotificationMethods) !== null && w !== void 0 ? w : []).includes(A.method) && !A.params && !(K === null || K === void 0 ? void 0 : K.relatedRequestId) && !(K === null || K === void 0 ? void 0 : K.relatedTask)) {
      if (this._pendingDebouncedNotifications.has(A.method)) return;
      this._pendingDebouncedNotifications.add(A.method), Promise.resolve().then(() => {
        var _, G;
        if (this._pendingDebouncedNotifications.delete(A.method), !this._transport) return;
        let Z = {
          ...A,
          jsonrpc: "2.0"
        };
        if (K === null || K === void 0 ? void 0 : K.relatedTask) Z = {
          ...Z,
          params: {
            ...Z.params,
            _meta: {
              ...(((_ = Z.params) === null || _ === void 0 ? void 0 : _._meta) || {}),
              [gu]: K.relatedTask
            }
          }
        };
        (G = this._transport) === null || G === void 0 || G.send(Z, K).catch(W => this._onerror(W));
      });
      return;
    }
    let $ = {
      ...A,
      jsonrpc: "2.0"
    };
    if (K === null || K === void 0 ? void 0 : K.relatedTask) $ = {
      ...$,
      params: {
        ...$.params,
        _meta: {
          ...(((H = $.params) === null || H === void 0 ? void 0 : H._meta) || {}),
          [gu]: K.relatedTask
        }
      }
    };
    await this._transport.send($, K);
  }
  setRequestHandler(A, K) {
    let q = wZ6(A);
    this.assertRequestHandlerCapability(q), this._requestHandlers.set(q, (Y, z) => {
      let w = HZ6(A, Y);
      return Promise.resolve(K(w, z));
    });
  }
  removeRequestHandler(A) {
    this._requestHandlers.delete(A);
  }
  assertCanSetRequestHandler(A) {
    if (this._requestHandlers.has(A)) throw Error(`A request handler for ${A} already exists, which would be overridden`);
  }
  setNotificationHandler(A, K) {
    let q = wZ6(A);
    this._notificationHandlers.set(q, Y => {
      let z = HZ6(A, Y);
      return Promise.resolve(K(z));
    });
  }
  removeNotificationHandler(A) {
    this._notificationHandlers.delete(A);
  }
  _cleanupTaskProgressHandler(A) {
    let K = this._taskProgressTokens.get(A);
    if (K !== void 0) this._progressHandlers.delete(K), this._taskProgressTokens.delete(A);
  }
  async _enqueueTaskMessage(A, K, q) {
    var Y;
    if (!this._taskStore || !this._taskMessageQueue) throw Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
    let z = (Y = this._options) === null || Y === void 0 ? void 0 : Y.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue(A, K, q, z);
  }
  async _clearTaskQueue(A, K) {
    if (this._taskMessageQueue) {
      let q = await this._taskMessageQueue.dequeueAll(A, K);
      for (let Y of q) if (Y.type === "request" && txA(Y.message)) {
        let z = Y.message.id,
          w = this._requestResolvers.get(z);
        if (w) w(new MK(Hq.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(z);else this._onerror(Error(`Resolver missing for request ${z} during task ${A} cleanup`));
      }
    }
  }
  async _waitForTaskUpdate(A, K) {
    var q, Y, z;
    let w = (Y = (q = this._options) === null || q === void 0 ? void 0 : q.defaultTaskPollInterval) !== null && Y !== void 0 ? Y : 1000;
    try {
      let H = await ((z = this._taskStore) === null || z === void 0 ? void 0 : z.getTask(A));
      if (H === null || H === void 0 ? void 0 : H.pollInterval) w = H.pollInterval;
    } catch (H) {}
    return new Promise((H, J) => {
      if (K.aborted) {
        J(new MK(Hq.InvalidRequest, "Request cancelled"));
        return;
      }
      let O = setTimeout(H, w);
      K.addEventListener("abort", () => {
        clearTimeout(O), J(new MK(Hq.InvalidRequest, "Request cancelled"));
      }, {
        once: !0
      });
    });
  }
  requestTaskStore(A, K) {
    let q = this._taskStore;
    if (!q) throw Error("No task store configured");
    return {
      createTask: async Y => {
        if (!A) throw Error("No request provided");
        return await q.createTask(Y, A.id, {
          method: A.method,
          params: A.params
        }, K);
      },
      getTask: async Y => {
        let z = await q.getTask(Y, K);
        if (!z) throw new MK(Hq.InvalidParams, "Failed to retrieve task: Task not found");
        return z;
      },
      storeTaskResult: async (Y, z, w) => {
        await q.storeTaskResult(Y, z, w, K);
        let H = await q.getTask(Y, K);
        if (H) {
          let J = YuA.parse({
            method: "notifications/tasks/status",
            params: H
          });
          if (await this.notification(J), Ja(H.status)) this._cleanupTaskProgressHandler(Y);
        }
      },
      getTaskResult: Y => {
        return q.getTaskResult(Y, K);
      },
      updateTaskStatus: async (Y, z, w) => {
        let H = await q.getTask(Y, K);
        if (!H) throw new MK(Hq.InvalidParams, `Task "${Y}" not found - it may have been cleaned up`);
        if (Ja(H.status)) throw new MK(Hq.InvalidParams, `Cannot update task "${Y}" from terminal status "${H.status}" to "${z}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await q.updateTaskStatus(Y, z, w, K);
        let J = await q.getTask(Y, K);
        if (J) {
          let O = YuA.parse({
            method: "notifications/tasks/status",
            params: J
          });
          if (await this.notification(O), Ja(J.status)) this._cleanupTaskProgressHandler(Y);
        }
      },
      listTasks: Y => {
        return q.listTasks(Y, K);
      }
    };
  }
}
__$.$uA = $uA;

class xuA {
  constructor(A) {
    this._ajv = A !== null && A !== void 0 ? A : JDY();
  }
  getValidator(A) {
    var K;
    let q = "$id" in A && typeof A.$id === "string" ? (K = this._ajv.getSchema(A.$id)) !== null && K !== void 0 ? K : this._ajv.compile(A) : this._ajv.compile(A);
    return Y => {
      if (q(Y)) return {
        valid: !0,
        data: Y,
        errorMessage: void 0
      };else return {
        valid: !1,
        data: void 0,
        errorMessage: this._ajv.errorsText(q.errors)
      };
    };
  }
}
__$.xuA = xuA;

class $W6 {
  constructor(A) {
    this._client = A;
  }
  async *callToolStream(A, K = mM, q) {
    var Y;
    let z = this._client,
      w = {
        ...q,
        task: (Y = q === null || q === void 0 ? void 0 : q.task) !== null && Y !== void 0 ? Y : z.isToolTask(A.name) ? {} : void 0
      },
      H = z.requestStream({
        method: "tools/call",
        params: A
      }, K, w),
      J = z.getToolOutputValidator(A.name);
    for await (let O of H) {
      if (O.type === "result" && J) {
        let X = O.result;
        if (!X.structuredContent && !X.isError) {
          yield {
            type: "error",
            error: new MK(Hq.InvalidRequest, `Tool ${A.name} has an output schema but did not return structured content`)
          };
          return;
        }
        if (X.structuredContent) try {
          let $ = J(X.structuredContent);
          if (!$.valid) {
            yield {
              type: "error",
              error: new MK(Hq.InvalidParams, `Structured content does not match the tool's output schema: ${$.errorMessage}`)
            };
            return;
          }
        } catch ($) {
          if ($ instanceof MK) {
            yield {
              type: "error",
              error: $
            };
            return;
          }
          yield {
            type: "error",
            error: new MK(Hq.InvalidParams, `Failed to validate structured content: ${$ instanceof Error ? $.message : String($)}`)
          };
          return;
        }
      }
      yield O;
    }
  }
  async getTask(A, K) {
    return this._client.getTask({
      taskId: A
    }, K);
  }
  async getTaskResult(A, K, q) {
    return this._client.getTaskResult({
      taskId: A
    }, K, q);
  }
  async listTasks(A, K) {
    return this._client.listTasks(A ? {
      cursor: A
    } : void 0, K);
  }
  async cancelTask(A, K) {
    return this._client.cancelTask({
      taskId: A
    }, K);
  }
  requestStream(A, K, q) {
    return this._client.requestStream(A, K, q);
  }
}
__$.$W6 = $W6;

class uuA {
  append(A) {
    this._buffer = this._buffer ? Buffer.concat([this._buffer, A]) : A;
  }
  readMessage() {
    if (!this._buffer) return null;
    let A = this._buffer.indexOf(`
`);
    if (A === -1) return null;
    let K = this._buffer.toString("utf8", 0, A).replace(/\r$/, "");
    return this._buffer = this._buffer.subarray(A + 1), XDY(K);
  }
  clear() {
    this._buffer = void 0;
  }
}
__$.uuA = uuA;

class GW6 {
  constructor(A) {
    if (this._readBuffer = new uuA(), this._stderrStream = null, this._serverParams = A, A.stderr === "pipe" || A.stderr === "overlapped") this._stderrStream = new $DY();
  }
  async start() {
    if (this._process) throw Error("StdioClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    return new Promise((A, K) => {
      var q, Y, z, w, H;
      if (this._process = oH7.default(this._serverParams.command, (q = this._serverParams.args) !== null && q !== void 0 ? q : [], {
        env: {
          ...GDY(),
          ...this._serverParams.env
        },
        stdio: ["pipe", "pipe", (Y = this._serverParams.stderr) !== null && Y !== void 0 ? Y : "inherit"],
        shell: !1,
        windowsHide: F01.platform === "win32" && ZDY(),
        cwd: this._serverParams.cwd
      }), this._process.on("error", J => {
        var O;
        K(J), (O = this.onerror) === null || O === void 0 || O.call(this, J);
      }), this._process.on("spawn", () => {
        A();
      }), this._process.on("close", J => {
        var O;
        this._process = void 0, (O = this.onclose) === null || O === void 0 || O.call(this);
      }), (z = this._process.stdin) === null || z === void 0 || z.on("error", J => {
        var O;
        (O = this.onerror) === null || O === void 0 || O.call(this, J);
      }), (w = this._process.stdout) === null || w === void 0 || w.on("data", J => {
        this._readBuffer.append(J), this.processReadBuffer();
      }), (H = this._process.stdout) === null || H === void 0 || H.on("error", J => {
        var O;
        (O = this.onerror) === null || O === void 0 || O.call(this, J);
      }), this._stderrStream && this._process.stderr) this._process.stderr.pipe(this._stderrStream);
    });
  }
  get stderr() {
    var A, K;
    if (this._stderrStream) return this._stderrStream;
    return (K = (A = this._process) === null || A === void 0 ? void 0 : A.stderr) !== null && K !== void 0 ? K : null;
  }
  get pid() {
    var A, K;
    return (K = (A = this._process) === null || A === void 0 ? void 0 : A.pid) !== null && K !== void 0 ? K : null;
  }
  processReadBuffer() {
    var A, K;
    while (!0) try {
      let q = this._readBuffer.readMessage();
      if (q === null) break;
      (A = this.onmessage) === null || A === void 0 || A.call(this, q);
    } catch (q) {
      (K = this.onerror) === null || K === void 0 || K.call(this, q);
    }
  }
  async close() {
    var A;
    if (this._process) {
      let K = this._process;
      this._process = void 0;
      let q = new Promise(Y => {
        K.once("close", () => {
          Y();
        });
      });
      try {
        (A = K.stdin) === null || A === void 0 || A.end();
      } catch (Y) {}
      if (await Promise.race([q, new Promise(Y => setTimeout(Y, 2000).unref())]), K.exitCode === null) {
        try {
          K.kill("SIGTERM");
        } catch (Y) {}
        await Promise.race([q, new Promise(Y => setTimeout(Y, 2000).unref())]);
      }
      if (K.exitCode === null) try {
        K.kill("SIGKILL");
      } catch (Y) {}
    }
    this._readBuffer.clear();
  }
  send(A) {
    return new Promise(K => {
      var q;
      if (!((q = this._process) === null || q === void 0 ? void 0 : q.stdin)) throw Error("Not connected");
      let Y = g01(A);
      if (this._process.stdin.write(Y)) K();else this._process.stdin.once("drain", K);
    });
  }
}
__$.GW6 = GW6;

class KX1 {
  constructor(A, K) {
    this._url = A, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = K === null || K === void 0 ? void 0 : K.eventSourceInit, this._requestInit = K === null || K === void 0 ? void 0 : K.requestInit, this._authProvider = K === null || K === void 0 ? void 0 : K.authProvider, this._fetch = K === null || K === void 0 ? void 0 : K.fetch, this._fetchWithInit = WqA(K === null || K === void 0 ? void 0 : K.fetch, K === null || K === void 0 ? void 0 : K.requestInit);
  }
  async _authThenStart() {
    var A;
    if (!this._authProvider) throw new vG("No auth provider");
    let K;
    try {
      K = await SC(this._authProvider, {
        serverUrl: this._url,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit
      });
    } catch (q) {
      throw (A = this.onerror) === null || A === void 0 || A.call(this, q), q;
    }
    if (K !== "AUTHORIZED") throw new vG();
    return await this._startOrAuth();
  }
  async _commonHeaders() {
    var A;
    let K = {};
    if (this._authProvider) {
      let Y = await this._authProvider.tokens();
      if (Y) K.Authorization = `Bearer ${Y.access_token}`;
    }
    if (this._protocolVersion) K["mcp-protocol-version"] = this._protocolVersion;
    let q = JZA((A = this._requestInit) === null || A === void 0 ? void 0 : A.headers);
    return new Headers({
      ...K,
      ...q
    });
  }
  _startOrAuth() {
    var A, K, q;
    let Y = (q = (K = (A = this === null || this === void 0 ? void 0 : this._eventSourceInit) === null || A === void 0 ? void 0 : A.fetch) !== null && K !== void 0 ? K : this._fetch) !== null && q !== void 0 ? q : fetch;
    return new Promise((z, w) => {
      this._eventSource = new HZA(this._url.href, {
        ...this._eventSourceInit,
        fetch: async (H, J) => {
          let O = await this._commonHeaders();
          O.set("Accept", "text/event-stream");
          let X = await Y(H, {
            ...J,
            headers: O
          });
          if (X.status === 401 && X.headers.has("www-authenticate")) {
            let {
              resourceMetadataUrl: $,
              scope: _
            } = WZA(X);
            this._resourceMetadataUrl = $, this._scope = _;
          }
          return X;
        }
      }), this._abortController = new AbortController(), this._eventSource.onerror = H => {
        var J;
        if (H.code === 401 && this._authProvider) {
          this._authThenStart().then(z, w);
          return;
        }
        let O = new ZJ7(H.code, H.message, H);
        w(O), (J = this.onerror) === null || J === void 0 || J.call(this, O);
      }, this._eventSource.onopen = () => {}, this._eventSource.addEventListener("endpoint", H => {
        var J;
        let O = H;
        try {
          if (this._endpoint = new URL(O.data, this._url), this._endpoint.origin !== this._url.origin) throw Error(`Endpoint origin does not match connection origin: ${this._endpoint.origin}`);
        } catch (X) {
          w(X), (J = this.onerror) === null || J === void 0 || J.call(this, X), this.close();
          return;
        }
        z();
      }), this._eventSource.onmessage = H => {
        var J, O;
        let X = H,
          $;
        try {
          $ = Fu.parse(JSON.parse(X.data));
        } catch (_) {
          (J = this.onerror) === null || J === void 0 || J.call(this, _);
          return;
        }
        (O = this.onmessage) === null || O === void 0 || O.call(this, $);
      };
    });
  }
  async start() {
    if (this._eventSource) throw Error("SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    return await this._startOrAuth();
  }
  async finishAuth(A) {
    if (!this._authProvider) throw new vG("No auth provider");
    if ((await SC(this._authProvider, {
      serverUrl: this._url,
      authorizationCode: A,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit
    })) !== "AUTHORIZED") throw new vG("Failed to authorize");
  }
  async close() {
    var A, K, q;
    (A = this._abortController) === null || A === void 0 || A.abort(), (K = this._eventSource) === null || K === void 0 || K.close(), (q = this.onclose) === null || q === void 0 || q.call(this);
  }
  async send(A) {
    var K, q, Y;
    if (!this._endpoint) throw Error("Not connected");
    try {
      let z = await this._commonHeaders();
      z.set("content-type", "application/json");
      let w = {
          ...this._requestInit,
          method: "POST",
          headers: z,
          body: JSON.stringify(A),
          signal: (K = this._abortController) === null || K === void 0 ? void 0 : K.signal
        },
        H = await ((q = this._fetch) !== null && q !== void 0 ? q : fetch)(this._endpoint, w);
      if (!H.ok) {
        let J = await H.text().catch(() => null);
        if (H.status === 401 && this._authProvider) {
          let {
            resourceMetadataUrl: O,
            scope: X
          } = WZA(H);
          if (this._resourceMetadataUrl = O, this._scope = X, (await SC(this._authProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
          })) !== "AUTHORIZED") throw new vG();
          return this.send(A);
        }
        throw Error(`Error POSTing to endpoint (HTTP ${H.status}): ${J}`);
      }
    } catch (z) {
      throw (Y = this.onerror) === null || Y === void 0 || Y.call(this, z), z;
    }
  }
  setProtocolVersion(A) {
    this._protocolVersion = A;
  }
}
__$.KX1 = KX1;

class qX1 {
  constructor(A, K) {
    var q;
    this._hasCompletedAuthFlow = !1, this._url = A, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = K === null || K === void 0 ? void 0 : K.requestInit, this._authProvider = K === null || K === void 0 ? void 0 : K.authProvider, this._fetch = K === null || K === void 0 ? void 0 : K.fetch, this._fetchWithInit = WqA(K === null || K === void 0 ? void 0 : K.fetch, K === null || K === void 0 ? void 0 : K.requestInit), this._sessionId = K === null || K === void 0 ? void 0 : K.sessionId, this._reconnectionOptions = (q = K === null || K === void 0 ? void 0 : K.reconnectionOptions) !== null && q !== void 0 ? q : UDY;
  }
  async _authThenStart() {
    var A;
    if (!this._authProvider) throw new vG("No auth provider");
    let K;
    try {
      K = await SC(this._authProvider, {
        serverUrl: this._url,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit
      });
    } catch (q) {
      throw (A = this.onerror) === null || A === void 0 || A.call(this, q), q;
    }
    if (K !== "AUTHORIZED") throw new vG();
    return await this._startOrAuthSse({
      resumptionToken: void 0
    });
  }
  async _commonHeaders() {
    var A;
    let K = {};
    if (this._authProvider) {
      let Y = await this._authProvider.tokens();
      if (Y) K.Authorization = `Bearer ${Y.access_token}`;
    }
    if (this._sessionId) K["mcp-session-id"] = this._sessionId;
    if (this._protocolVersion) K["mcp-protocol-version"] = this._protocolVersion;
    let q = JZA((A = this._requestInit) === null || A === void 0 ? void 0 : A.headers);
    return new Headers({
      ...K,
      ...q
    });
  }
  async _startOrAuthSse(A) {
    var K, q, Y, z;
    let {
      resumptionToken: w
    } = A;
    try {
      let H = await this._commonHeaders();
      if (H.set("Accept", "text/event-stream"), w) H.set("last-event-id", w);
      let J = await ((K = this._fetch) !== null && K !== void 0 ? K : fetch)(this._url, {
        method: "GET",
        headers: H,
        signal: (q = this._abortController) === null || q === void 0 ? void 0 : q.signal
      });
      if (!J.ok) {
        if (await ((Y = J.body) === null || Y === void 0 ? void 0 : Y.cancel()), J.status === 401 && this._authProvider) return await this._authThenStart();
        if (J.status === 405) return;
        throw new DqA(J.status, `Failed to open SSE stream: ${J.statusText}`);
      }
      this._handleSseStream(J.body, A, !0);
    } catch (H) {
      throw (z = this.onerror) === null || z === void 0 || z.call(this, H), H;
    }
  }
  _getNextReconnectionDelay(A) {
    if (this._serverRetryMs !== void 0) return this._serverRetryMs;
    let K = this._reconnectionOptions.initialReconnectionDelay,
      q = this._reconnectionOptions.reconnectionDelayGrowFactor,
      Y = this._reconnectionOptions.maxReconnectionDelay;
    return Math.min(K * Math.pow(q, A), Y);
  }
  _scheduleReconnection(A, K = 0) {
    var q;
    let Y = this._reconnectionOptions.maxRetries;
    if (K >= Y) {
      (q = this.onerror) === null || q === void 0 || q.call(this, Error(`Maximum reconnection attempts (${Y}) exceeded.`));
      return;
    }
    let z = this._getNextReconnectionDelay(K);
    this._reconnectionTimeout = setTimeout(() => {
      this._startOrAuthSse(A).catch(w => {
        var H;
        (H = this.onerror) === null || H === void 0 || H.call(this, Error(`Failed to reconnect SSE stream: ${w instanceof Error ? w.message : String(w)}`)), this._scheduleReconnection(A, K + 1);
      });
    }, z);
  }
  _handleSseStream(A, K, q) {
    if (!A) return;
    let {
        onresumptiontoken: Y,
        replayMessageId: z
      } = K,
      w,
      H = !1,
      J = !1;
    (async () => {
      var X, $, _, G;
      try {
        let Z = A.pipeThrough(new TextDecoderStream()).pipeThrough(new BW6({
          onRetry: j => {
            this._serverRetryMs = j;
          }
        })).getReader();
        while (!0) {
          let {
            value: j,
            done: M
          } = await Z.read();
          if (M) break;
          if (j.id) w = j.id, H = !0, Y === null || Y === void 0 || Y(j.id);
          if (!j.data) continue;
          if (!j.event || j.event === "message") try {
            let P = Fu.parse(JSON.parse(j.data));
            if (YqA(P)) {
              if (J = !0, z !== void 0) P.id = z;
            }
            (X = this.onmessage) === null || X === void 0 || X.call(this, P);
          } catch (P) {
            ($ = this.onerror) === null || $ === void 0 || $.call(this, P);
          }
        }
        if ((q || H) && !J && this._abortController && !this._abortController.signal.aborted) this._scheduleReconnection({
          resumptionToken: w,
          onresumptiontoken: Y,
          replayMessageId: z
        }, 0);
      } catch (Z) {
        if ((_ = this.onerror) === null || _ === void 0 || _.call(this, Error(`SSE stream disconnected: ${Z}`)), (q || H) && !J && this._abortController && !this._abortController.signal.aborted) try {
          this._scheduleReconnection({
            resumptionToken: w,
            onresumptiontoken: Y,
            replayMessageId: z
          }, 0);
        } catch (j) {
          (G = this.onerror) === null || G === void 0 || G.call(this, Error(`Failed to reconnect: ${j instanceof Error ? j.message : String(j)}`));
        }
      }
    })();
  }
  async start() {
    if (this._abortController) throw Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    this._abortController = new AbortController();
  }
  async finishAuth(A) {
    if (!this._authProvider) throw new vG("No auth provider");
    if ((await SC(this._authProvider, {
      serverUrl: this._url,
      authorizationCode: A,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit
    })) !== "AUTHORIZED") throw new vG("Failed to authorize");
  }
  async close() {
    var A, K;
    if (this._reconnectionTimeout) clearTimeout(this._reconnectionTimeout), this._reconnectionTimeout = void 0;
    (A = this._abortController) === null || A === void 0 || A.abort(), (K = this.onclose) === null || K === void 0 || K.call(this);
  }
  async send(A, K) {
    var q, Y, z, w, H;
    try {
      let {
        resumptionToken: J,
        onresumptiontoken: O
      } = K || {};
      if (J) {
        this._startOrAuthSse({
          resumptionToken: J,
          replayMessageId: txA(A) ? A.id : void 0
        }).catch(j => {
          var M;
          return (M = this.onerror) === null || M === void 0 ? void 0 : M.call(this, j);
        });
        return;
      }
      let X = await this._commonHeaders();
      X.set("content-type", "application/json"), X.set("accept", "application/json, text/event-stream");
      let $ = {
          ...this._requestInit,
          method: "POST",
          headers: X,
          body: JSON.stringify(A),
          signal: (q = this._abortController) === null || q === void 0 ? void 0 : q.signal
        },
        _ = await ((Y = this._fetch) !== null && Y !== void 0 ? Y : fetch)(this._url, $),
        G = _.headers.get("mcp-session-id");
      if (G) this._sessionId = G;
      if (!_.ok) {
        let j = await _.text().catch(() => null);
        if (_.status === 401 && this._authProvider) {
          if (this._hasCompletedAuthFlow) throw new DqA(401, "Server returned 401 after successful authentication");
          let {
            resourceMetadataUrl: M,
            scope: P
          } = WZA(_);
          if (this._resourceMetadataUrl = M, this._scope = P, (await SC(this._authProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
          })) !== "AUTHORIZED") throw new vG();
          return this._hasCompletedAuthFlow = !0, this.send(A);
        }
        if (_.status === 403 && this._authProvider) {
          let {
            resourceMetadataUrl: M,
            scope: P,
            error: f
          } = WZA(_);
          if (f === "insufficient_scope") {
            let N = _.headers.get("WWW-Authenticate");
            if (this._lastUpscopingHeader === N) throw new DqA(403, "Server returned 403 after trying upscoping");
            if (P) this._scope = P;
            if (M) this._resourceMetadataUrl = M;
            if (this._lastUpscopingHeader = N !== null && N !== void 0 ? N : void 0, (await SC(this._authProvider, {
              serverUrl: this._url,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetch
            })) !== "AUTHORIZED") throw new vG();
            return this.send(A);
          }
        }
        throw new DqA(_.status, `Error POSTing to endpoint: ${j}`);
      }
      if (this._hasCompletedAuthFlow = !1, this._lastUpscopingHeader = void 0, _.status === 202) {
        if (await ((z = _.body) === null || z === void 0 ? void 0 : z.cancel()), a97(A)) this._startOrAuthSse({
          resumptionToken: void 0
        }).catch(j => {
          var M;
          return (M = this.onerror) === null || M === void 0 ? void 0 : M.call(this, j);
        });
        return;
      }
      let W = (Array.isArray(A) ? A : [A]).filter(j => "method" in j && "id" in j && j.id !== void 0).length > 0,
        D = _.headers.get("content-type");
      if (W) if (D === null || D === void 0 ? void 0 : D.includes("text/event-stream")) this._handleSseStream(_.body, {
        onresumptiontoken: O
      }, !1);else if (D === null || D === void 0 ? void 0 : D.includes("application/json")) {
        let j = await _.json(),
          M = Array.isArray(j) ? j.map(P => Fu.parse(P)) : [Fu.parse(j)];
        for (let P of M) (w = this.onmessage) === null || w === void 0 || w.call(this, P);
      } else throw new DqA(-1, `Unexpected content type: ${D}`);
    } catch (J) {
      throw (H = this.onerror) === null || H === void 0 || H.call(this, J), J;
    }
  }
  get sessionId() {
    return this._sessionId;
  }
  async terminateSession() {
    var A, K, q, Y;
    if (!this._sessionId) return;
    try {
      let z = await this._commonHeaders(),
        w = {
          ...this._requestInit,
          method: "DELETE",
          headers: z,
          signal: (A = this._abortController) === null || A === void 0 ? void 0 : A.signal
        },
        H = await ((K = this._fetch) !== null && K !== void 0 ? K : fetch)(this._url, w);
      if (await ((q = H.body) === null || q === void 0 ? void 0 : q.cancel()), !H.ok && H.status !== 405) throw new DqA(H.status, `Failed to terminate session: ${H.statusText}`);
      this._sessionId = void 0;
    } catch (z) {
      throw (Y = this.onerror) === null || Y === void 0 || Y.call(this, z), z;
    }
  }
  setProtocolVersion(A) {
    this._protocolVersion = A;
  }
  get protocolVersion() {
    return this._protocolVersion;
  }
  async resumeStream(A, K) {
    await this._startOrAuthSse({
      resumptionToken: A,
      onresumptiontoken: K === null || K === void 0 ? void 0 : K.onresumptiontoken
    });
  }
}
__$.qX1 = qX1;

class E$1 {
  ws;
  started = !1;
  opened;
  constructor(A) {
    this.ws = A;
    this.opened = new Promise((K, q) => {
      if (this.ws.readyState === Bu.OPEN) K();else this.ws.on("open", () => {
        K();
      }), this.ws.on("error", Y => {
        v8("error", "mcp_websocket_connect_fail"), q(Y);
      });
    }), this.ws.on("message", this.onMessageHandler), this.ws.on("error", this.onErrorHandler), this.ws.on("close", this.onCloseHandler);
  }
  onclose;
  onerror;
  onmessage;
  onMessageHandler = A => {
    try {
      let K = G6(A.toString("utf-8")),
        q = Fu.parse(K);
      this.onmessage?.(q);
    } catch (K) {
      this.onErrorHandler(K);
    }
  };
  onErrorHandler = A => {
    v8("error", "mcp_websocket_message_fail"), this.onerror?.(A instanceof Error ? A : Error("Failed to process message"));
  };
  onCloseHandler = () => {
    this.onclose?.(), this.ws.off("message", this.onMessageHandler), this.ws.off("error", this.onErrorHandler), this.ws.off("close", this.onCloseHandler);
  };
  async start() {
    if (this.started) throw Error("Start can only be called once per transport.");
    if (await this.opened, this.ws.readyState !== Bu.OPEN) throw v8("error", "mcp_websocket_start_not_opened"), Error("WebSocket is not open. Cannot start transport.");
    this.started = !0;
  }
  async close() {
    if (this.ws.readyState === Bu.OPEN || this.ws.readyState === Bu.CONNECTING) this.ws.close();
    this.onCloseHandler();
  }
  async send(A) {
    if (this.ws.readyState !== Bu.OPEN) throw v8("error", "mcp_websocket_send_not_opened"), Error("WebSocket is not open. Cannot send message.");
    let K = UA(A);
    try {
      await new Promise((q, Y) => {
        this.ws.send(K, z => {
          if (z) Y(z);else q();
        });
      });
    } catch (q) {
      throw this.onErrorHandler(q), q;
    }
  }
}
__$.E$1 = E$1;

class gqA {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
  _authorizationUrl;
  _state;
  _scopes;
  _metadata;
  _refreshInProgress;
  onAuthorizationUrlCallback;
  constructor(A, K, q = $D7(), Y = !1, z) {
    this.serverName = A, this.serverConfig = K, this.redirectUri = q, this.handleRedirection = Y, this.onAuthorizationUrlCallback = z;
  }
  get redirectUrl() {
    return this.redirectUri;
  }
  get authorizationUrl() {
    return this._authorizationUrl;
  }
  get clientMetadata() {
    let A = {
        client_name: `Claude Code (${this.serverName})`,
        redirect_uris: [this.redirectUri],
        grant_types: ["authorization_code", "refresh_token"],
        response_types: ["code"],
        token_endpoint_auth_method: "none"
      },
      K = NM6(this._metadata);
    if (K) A.scope = K, b6(this.serverName, `Using scope from metadata: ${A.scope}`);
    return A;
  }
  setMetadata(A) {
    this._metadata = A;
  }
  async state() {
    if (!this._state) this._state = NLY(32).toString("base64url"), b6(this.serverName, "Generated new OAuth state");
    return this._state;
  }
  async clientInformation() {
    let K = ff().read(),
      q = mqA(this.serverName, this.serverConfig),
      Y = K?.mcpOAuth?.[q];
    if (Y?.clientId) return b6(this.serverName, "Found client info"), {
      client_id: Y.clientId,
      client_secret: Y.clientSecret
    };
    b6(this.serverName, "No client info found");
    return;
  }
  async saveClientInformation(A) {
    let K = ff(),
      q = K.read() || {},
      Y = mqA(this.serverName, this.serverConfig),
      z = {
        ...q,
        mcpOAuth: {
          ...q.mcpOAuth,
          [Y]: {
            ...q.mcpOAuth?.[Y],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            clientId: A.client_id,
            clientSecret: A.client_secret,
            accessToken: q.mcpOAuth?.[Y]?.accessToken || "",
            expiresAt: q.mcpOAuth?.[Y]?.expiresAt || 0
          }
        }
      };
    K.update(z);
  }
  async tokens() {
    let K = ff().read(),
      q = mqA(this.serverName, this.serverConfig),
      Y = K?.mcpOAuth?.[q];
    if (!Y) {
      b6(this.serverName, "No token data found");
      return;
    }
    let z = (Y.expiresAt - Date.now()) / 1000;
    if (z <= 0 && !Y.refreshToken) {
      b6(this.serverName, "Token expired without refresh token");
      return;
    }
    if (z <= 300 && Y.refreshToken) {
      if (!this._refreshInProgress) b6(this.serverName, `Token expires in ${Math.floor(z)}s, attempting proactive refresh`), this._refreshInProgress = this.refreshAuthorization(Y.refreshToken).finally(() => {
        this._refreshInProgress = void 0;
      });else b6(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let H = await this._refreshInProgress;
        if (H) return b6(this.serverName, "Token refreshed successfully"), H;
        b6(this.serverName, "Token refresh failed, returning current tokens");
      } catch (H) {
        b6(this.serverName, `Token refresh error: ${H instanceof Error ? H.message : String(H)}`);
      }
    }
    let w = {
      access_token: Y.accessToken,
      refresh_token: Y.refreshToken,
      expires_in: z,
      scope: Y.scope,
      token_type: "Bearer"
    };
    return b6(this.serverName, "Returning tokens"), b6(this.serverName, `Token length: ${w.access_token?.length}`), b6(this.serverName, `Has refresh token: ${!!w.refresh_token}`), b6(this.serverName, `Expires in: ${Math.floor(z)}s`), w;
  }
  async saveTokens(A) {
    let K = ff(),
      q = K.read() || {},
      Y = mqA(this.serverName, this.serverConfig);
    b6(this.serverName, "Saving tokens"), b6(this.serverName, `Token expires in: ${A.expires_in}`), b6(this.serverName, `Has refresh token: ${!!A.refresh_token}`);
    let z = {
      ...q,
      mcpOAuth: {
        ...q.mcpOAuth,
        [Y]: {
          ...q.mcpOAuth?.[Y],
          serverName: this.serverName,
          serverUrl: this.serverConfig.url,
          accessToken: A.access_token,
          refreshToken: A.refresh_token,
          expiresAt: Date.now() + (A.expires_in || 3600) * 1000,
          scope: A.scope
        }
      }
    };
    K.update(z);
  }
  async redirectToAuthorization(A) {
    this._authorizationUrl = A.toString();
    let K = A.searchParams.get("scope");
    if (b6(this.serverName, `Authorization URL: ${OD7(A.toString())}`), b6(this.serverName, `Scopes in URL: ${K || "NOT FOUND"}`), K) this._scopes = K, b6(this.serverName, `Captured scopes from authorization URL: ${K}`);else {
      let w = NM6(this._metadata);
      if (w) this._scopes = w, b6(this.serverName, `Using scopes from metadata: ${w}`);else b6(this.serverName, "No scopes available from URL or metadata");
    }
    if (!this.handleRedirection) {
      b6(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let q = A.toString();
    if (!q.startsWith("http://") && !q.startsWith("https://")) throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    b6(this.serverName, "Redirecting to authorization URL");
    let Y = OD7(q);
    if (b6(this.serverName, `Authorization URL: ${Y}`), this.onAuthorizationUrlCallback) this.onAuthorizationUrlCallback(q);
    if (b6(this.serverName, `Opening authorization URL: ${Y}`), !(await MY(q))) b6(this.serverName, "Browser didn't open automatically. URL is shown in UI.");
  }
  async saveCodeVerifier(A) {
    b6(this.serverName, "Saving code verifier"), this._codeVerifier = A;
  }
  async codeVerifier() {
    if (!this._codeVerifier) throw b6(this.serverName, "No code verifier saved"), Error("No code verifier saved");
    return b6(this.serverName, "Returning code verifier"), this._codeVerifier;
  }
  async refreshAuthorization(A) {
    for (let q = 1; q <= 3; q++) try {
      b6(this.serverName, "Starting token refresh");
      let Y = ELY(),
        z = await QuA(new URL(this.serverConfig.url), {
          fetchFn: Y
        });
      if (!z) {
        b6(this.serverName, "Failed to discover OAuth metadata");
        return;
      }
      let w = await this.clientInformation();
      if (!w) {
        b6(this.serverName, "No client information available");
        return;
      }
      let H = await uW6(new URL(this.serverConfig.url), {
        metadata: z,
        clientInformation: w,
        refreshToken: A,
        resource: new URL(this.serverConfig.url),
        fetchFn: Y
      });
      if (H) return b6(this.serverName, "Token refresh successful"), await this.saveTokens(H), H;
      b6(this.serverName, "Token refresh returned no tokens");
      return;
    } catch (Y) {
      let z = Y instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(Y.message),
        w = Y instanceof du || Y instanceof _ZA || Y instanceof GZA;
      if (!(z || w) || q >= 3) {
        b6(this.serverName, `Token refresh failed: ${Y instanceof Error ? Y.message : String(Y)}`);
        return;
      }
      let J = 1000 * Math.pow(2, q - 1);
      b6(this.serverName, `Token refresh failed, retrying in ${J}ms (attempt ${q}/3)`), await new Promise(O => setTimeout(O, J));
    }
    return;
  }
}
__$.gqA = gqA;

class vM6 {
  serverName;
  sendMcpMessage;
  isClosed = !1;
  onclose;
  onerror;
  onmessage;
  constructor(A, K) {
    this.serverName = A;
    this.sendMcpMessage = K;
  }
  async start() {}
  async send(A) {
    if (this.isClosed) throw Error("Transport is closed");
    let K = await this.sendMcpMessage(this.serverName, A);
    if (this.onmessage) this.onmessage(K);
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = !0, this.onclose?.();
  }
}
__$.vM6 = vM6;

class AWA {
  wslDistroName;
  constructor(A) {
    this.wslDistroName = A;
  }
  toLocalPath(A) {
    if (!A) return A;
    if (this.wslDistroName) {
      let K = A.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
      if (K && K[1] !== this.wslDistroName) return A;
    }
    try {
      return LD7("wslpath", ["-u", A], {
        encoding: "utf8",
        stdio: ["pipe", "pipe", "ignore"]
      }).trim();
    } catch {
      return A.replace(/\\/g, "/").replace(/^([A-Z]):/i, (K, q) => `/mnt/${q.toLowerCase()}`);
    }
  }
  toIDEPath(A) {
    if (!A) return A;
    try {
      return LD7("wslpath", ["-w", A], {
        encoding: "utf8",
        stdio: ["pipe", "pipe", "ignore"]
      }).trim();
    } catch {
      return A;
    }
  }
}
__$.AWA = AWA;

class pI {
  static instance;
  baseline = new Map();
  initialized = !1;
  mcpClient;
  lastProcessedTimestamps = new Map();
  rightFileDiagnosticsState = new Map();
  static getInstance() {
    if (!pI.instance) pI.instance = new pI();
    return pI.instance;
  }
  initialize(A) {
    if (this.initialized) return;
    this.mcpClient = A, this.initialized = !0;
  }
  async shutdown() {
    this.initialized = !1, this.baseline.clear();
  }
  reset() {
    this.baseline.clear(), this.rightFileDiagnosticsState.clear();
  }
  normalizeFileUri(A) {
    let K = ["file://", "_claude_fs_right:", "_claude_fs_left:"],
      q = A;
    for (let Y of K) if (A.startsWith(Y)) {
      q = A.slice(Y.length);
      break;
    }
    return H_1(q);
  }
  async ensureFileOpened(A) {
    if (!this.initialized || !this.mcpClient || this.mcpClient.type !== "connected") return;
    try {
      await fp("openFile", {
        filePath: A,
        preview: !1,
        startText: "",
        endText: "",
        selectToEndOfLine: !1,
        makeFrontmost: !1
      }, this.mcpClient);
    } catch (K) {
      KA(K);
    }
  }
  async beforeFileEdited(A) {
    if (!this.initialized || !this.mcpClient || this.mcpClient.type !== "connected") return;
    let K = Date.now();
    try {
      let q = await fp("getDiagnostics", {
          uri: `file://${A}`
        }, this.mcpClient),
        Y = this.parseDiagnosticResult(q)[0];
      if (Y) {
        if (!rD7(this.normalizeFileUri(A), this.normalizeFileUri(Y.uri))) {
          KA(new nD7(`Diagnostics file path mismatch: expected ${A}, got ${Y.uri})`));
          return;
        }
        let z = this.normalizeFileUri(A);
        this.baseline.set(z, Y.diagnostics), this.lastProcessedTimestamps.set(z, K);
      } else {
        let z = this.normalizeFileUri(A);
        this.baseline.set(z, []), this.lastProcessedTimestamps.set(z, K);
      }
    } catch (q) {}
  }
  async getNewDiagnostics() {
    if (!this.initialized || !this.mcpClient || this.mcpClient.type !== "connected") return [];
    let A = [];
    try {
      let z = await fp("getDiagnostics", {}, this.mcpClient);
      A = this.parseDiagnosticResult(z);
    } catch (z) {
      return [];
    }
    let K = A.filter(z => this.baseline.has(this.normalizeFileUri(z.uri))).filter(z => z.uri.startsWith("file://")),
      q = new Map();
    A.filter(z => this.baseline.has(this.normalizeFileUri(z.uri))).filter(z => z.uri.startsWith("_claude_fs_right:")).forEach(z => {
      q.set(this.normalizeFileUri(z.uri), z);
    });
    let Y = [];
    for (let z of K) {
      let w = this.normalizeFileUri(z.uri),
        H = this.baseline.get(w) || [],
        J = q.get(w),
        O = z;
      if (J) {
        let $ = this.rightFileDiagnosticsState.get(w);
        if (!$ || !this.areDiagnosticArraysEqual($, J.diagnostics)) O = J;
        this.rightFileDiagnosticsState.set(w, J.diagnostics);
      }
      let X = O.diagnostics.filter($ => !H.some(_ => this.areDiagnosticsEqual($, _)));
      if (X.length > 0) Y.push({
        uri: z.uri,
        diagnostics: X
      });
      this.baseline.set(w, O.diagnostics);
    }
    return Y;
  }
  parseDiagnosticResult(A) {
    if (Array.isArray(A)) {
      let K = A.find(q => q.type === "text");
      if (K && "text" in K) return G6(K.text);
    }
    return [];
  }
  areDiagnosticsEqual(A, K) {
    return A.message === K.message && A.severity === K.severity && A.source === K.source && A.code === K.code && A.range.start.line === K.range.start.line && A.range.start.character === K.range.start.character && A.range.end.line === K.range.end.line && A.range.end.character === K.range.end.character;
  }
  areDiagnosticArraysEqual(A, K) {
    if (A.length !== K.length) return !1;
    return A.every(q => K.some(Y => this.areDiagnosticsEqual(q, Y))) && K.every(q => A.some(Y => this.areDiagnosticsEqual(Y, q)));
  }
  isLinterDiagnostic(A) {
    let K = ["eslint", "eslint-plugin", "tslint", "prettier", "stylelint", "jshint", "standardjs", "xo", "rome", "biome", "deno-lint", "rubocop", "pylint", "flake8", "black", "ruff", "clippy", "rustfmt", "golangci-lint", "gofmt", "swiftlint", "detekt", "ktlint", "checkstyle", "pmd", "sonarqube", "sonarjs"];
    if (!A.source) return !1;
    let q = A.source.toLowerCase();
    return K.some(Y => q.includes(Y));
  }
  async handleQueryStart(A) {
    if (!this.initialized) {
      let K = Nf(A);
      if (K) this.initialize(K);
    } else this.reset();
  }
  static formatDiagnosticsSummary(A) {
    let q = A.map(Y => {
      let z = Y.uri.split("/").pop() || Y.uri,
        w = Y.diagnostics.map(H => {
          return `  ${pI.getSeveritySymbol(H.severity)} [Line ${H.range.start.line + 1}:${H.range.start.character + 1}] ${H.message}${H.code ? ` [${H.code}]` : ""}${H.source ? ` (${H.source})` : ""}`;
        }).join(`
`);
      return `${z}:
${w}`;
    }).join(`

`);
    if (q.length > iD7) return q.slice(0, iD7 - 12) + "…[truncated]";
    return q;
  }
  static getSeveritySymbol(A) {
    return {
      Error: eA.cross,
      Warning: eA.warning,
      Info: eA.info,
      Hint: eA.star
    }[A] || eA.bullet;
  }
}
__$.pI = pI;

class _mA {
  capacity;
  buffer;
  head = 0;
  size = 0;
  constructor(A) {
    this.capacity = A;
    this.buffer = Array(A);
  }
  add(A) {
    if (this.buffer[this.head] = A, this.head = (this.head + 1) % this.capacity, this.size < this.capacity) this.size++;
  }
  addAll(A) {
    for (let K of A) this.add(K);
  }
  getRecent(A) {
    let K = [],
      q = this.size < this.capacity ? 0 : this.head,
      Y = Math.min(A, this.size);
    for (let z = 0; z < Y; z++) {
      let w = (q + this.size - Y + z) % this.capacity;
      K.push(this.buffer[w]);
    }
    return K;
  }
  toArray() {
    if (this.size === 0) return [];
    let A = [],
      K = this.size < this.capacity ? 0 : this.head;
    for (let q = 0; q < this.size; q++) {
      let Y = (K + q) % this.capacity;
      A.push(this.buffer[Y]);
    }
    return A;
  }
  clear() {
    this.head = 0, this.size = 0;
  }
  length() {
    return this.size;
  }
}
__$._mA = _mA;

class GWA {
  maxSize;
  content = "";
  isTruncated = !1;
  totalBytesReceived = 0;
  constructor(A = wM7) {
    this.maxSize = A;
  }
  append(A) {
    let K = typeof A === "string" ? A : A.toString();
    if (this.totalBytesReceived += K.length, this.isTruncated && this.content.length >= this.maxSize) return;
    if (this.content.length + K.length > this.maxSize) {
      let q = this.maxSize - this.content.length;
      if (q > 0) this.content += K.slice(0, q);
      this.isTruncated = !0;
    } else this.content += K;
  }
  toString() {
    if (!this.isTruncated) return this.content;
    let A = this.totalBytesReceived - this.maxSize,
      K = Math.round(A / 1024);
    return this.content + `
... [output truncated - ${K}KB removed]`;
  }
  clear() {
    this.content = "", this.isTruncated = !1, this.totalBytesReceived = 0;
  }
  get length() {
    return this.content.length;
  }
  get truncated() {
    return this.isTruncated;
  }
  get totalBytes() {
    return this.totalBytesReceived;
  }
}
__$.GWA = GWA;

class _M7 {
  #A;
  #K = null;
  #q = !1;
  #z;
  #Y = this.#w.bind(this);
  #J;
  constructor(A, K) {
    this.#J = K, this.#A = A, this.#z = new GWA(), this.#A.setEncoding("utf-8"), this.#A.on("data", this.#Y);
  }
  #w(A) {
    let K = this.#K,
      q = this.#J;
    if (q) q(A);
    if (K) K.write(A);else this.#z.append(A);
  }
  get() {
    return this.#z.toString();
  }
  asStream() {
    if (this.#K) return this.#K;
    let A = this.#K = new JyY({
      highWaterMark: 10485760
    });
    return A.on("error", function () {}), A.write(this.get()), this.#z.clear(), A;
  }
  cleanup() {
    if (this.#q) return;
    if (this.#J = null, this.#q = !0, this.#A.removeListener("data", this.#Y), this.#Y = () => {}, this.#K && !this.#K.destroyed) this.#K.end();
    this.#z.clear();
  }
}
__$._M7 = _M7;

class GM7 {
  #A = new _mA(1000);
  #K = 0;
  #q;
  constructor(A) {
    this.#q = A;
  }
  handleData(A) {
    let q = A.toString().split(`
`).filter(z => z.trim());
    this.#A.addAll(q), this.#K += q.length;
    let Y = this.#A.getRecent(5);
    if (Y.length > 0) this.#q(XP6(Y, `
`), XP6(this.#A.getRecent(100), `
`), this.#K);
  }
}
__$.GM7 = GM7;

class $P6 {
  #A = "running";
  #K;
  #q;
  #z;
  #Y;
  #J = null;
  #w;
  #X;
  #$;
  #O;
  #H = null;
  #G = null;
  #D = null;
  static #j(A) {
    if (A.#O && A.#X) A.#X(A.background.bind(A));else A.#M(OM7);
  }
  result;
  onTimeout;
  constructor(A, K, q, Y, z = !1) {
    this.#Y = A, this.#w = K, this.#$ = q, this.#O = z;
    let w = this.#Z(Y);
    if (this.#q = XM7(A.stdout, w), this.#z = XM7(A.stderr, w), z) this.onTimeout = H => {
      this.#X = H;
    };
    this.result = this.#T();
  }
  get status() {
    return this.#A;
  }
  #Z(A) {
    if (!A) return null;
    let K = new GM7(A);
    return K.handleData.bind(K);
  }
  #f() {
    this.kill();
  }
  #W(A, K) {
    let q = A !== null && A !== void 0 ? A : K === "SIGTERM" ? 144 : 1;
    this.#V(q);
  }
  #N() {
    this.#V(1);
  }
  #V(A) {
    if (this.#G) this.#G(A), this.#G = null;
  }
  #P() {
    let A = this.#J;
    if (A) clearTimeout(A), this.#J = null;
    let K = this.#D;
    if (K) this.#w.removeEventListener("abort", K), this.#D = null;
  }
  #T() {
    this.#D = this.#f.bind(this), this.#w.addEventListener("abort", this.#D, {
      once: !0
    }), this.#Y.once("exit", this.#W.bind(this)), this.#Y.once("error", this.#N.bind(this)), this.#J = setTimeout($P6.#j, this.#$, this);
    let A = new Promise(K => {
      this.#G = K;
    });
    return new Promise(K => {
      this.#H = K, A.then(this.#E.bind(this));
    });
  }
  #E(A) {
    if (this.#P(), this.#A === "running" || this.#A === "backgrounded") this.#A = "completed";
    let K = {
      code: A,
      stdout: this.#q.get(),
      stderr: this.#z.get(),
      interrupted: A === JM7,
      backgroundTaskId: this.#K
    };
    if (A === OM7) K.stderr = [`Command timed out after ${$O(this.#$)}`, K.stderr].filter(Boolean).join(" ");
    let q = this.#H;
    if (q) this.#H = null, q(K);
  }
  #M(A) {
    if (this.#A = "killed", this.#Y.pid) $M7.default(this.#Y.pid, "SIGKILL");
    this.#V(A ?? JM7);
  }
  kill() {
    this.#M();
  }
  background(A) {
    if (this.#A === "running") return this.#K = A, this.#A = "backgrounded", this.#P(), {
      stdoutStream: this.#q.asStream(),
      stderrStream: this.#z.asStream()
    };
    return null;
  }
  cleanup() {
    this.#q.cleanup(), this.#z.cleanup();
  }
}
__$.$P6 = $P6;

class ZM7 {
  status = "killed";
  result;
  constructor(A) {
    this.result = Promise.resolve({
      code: 145,
      stdout: "",
      stderr: "Command aborted before execution",
      interrupted: !0,
      backgroundTaskId: A
    });
  }
  background() {
    return null;
  }
  kill() {}
  cleanup() {}
}
__$.ZM7 = ZM7;

class vT6 {
  localServer;
  port = 0;
  promiseResolver = null;
  promiseRejecter = null;
  expectedState = null;
  pendingResponse = null;
  callbackPath;
  constructor(A = "/callback") {
    this.localServer = RI7.createServer(), this.callbackPath = A;
  }
  async start(A) {
    return new Promise((K, q) => {
      this.localServer.once("error", Y => {
        q(Error(`Failed to start OAuth callback server: ${Y.message}`));
      }), this.localServer.listen(A ?? 0, "localhost", () => {
        let Y = this.localServer.address();
        this.port = Y.port, K(this.port);
      });
    });
  }
  getPort() {
    return this.port;
  }
  hasPendingResponse() {
    return this.pendingResponse !== null;
  }
  async waitForAuthorization(A, K) {
    return new Promise((q, Y) => {
      this.promiseResolver = q, this.promiseRejecter = Y, this.expectedState = A, this.startLocalListener(K);
    });
  }
  handleSuccessRedirect(A, K) {
    if (!this.pendingResponse) return;
    if (K) {
      K(this.pendingResponse, A), this.pendingResponse = null, n("tengu_oauth_automatic_redirect", {
        custom_handler: !0
      });
      return;
    }
    let q = pQ(A) ? E7().CLAUDEAI_SUCCESS_URL : E7().CONSOLE_SUCCESS_URL;
    this.pendingResponse.writeHead(302, {
      Location: q
    }), this.pendingResponse.end(), this.pendingResponse = null, n("tengu_oauth_automatic_redirect", {});
  }
  handleErrorRedirect() {
    if (!this.pendingResponse) return;
    let A = E7().CLAUDEAI_SUCCESS_URL;
    this.pendingResponse.writeHead(302, {
      Location: A
    }), this.pendingResponse.end(), this.pendingResponse = null, n("tengu_oauth_automatic_redirect_error", {});
  }
  startLocalListener(A) {
    this.localServer.on("request", this.handleRedirect.bind(this)), this.localServer.on("error", this.handleError.bind(this)), A();
  }
  handleRedirect(A, K) {
    let q = new URL(A.url || "", `http://${A.headers.host || "localhost"}`);
    if (q.pathname !== this.callbackPath) {
      K.writeHead(404), K.end();
      return;
    }
    let Y = q.searchParams.get("code") ?? void 0,
      z = q.searchParams.get("state") ?? void 0;
    this.validateAndRespond(Y, z, K);
  }
  validateAndRespond(A, K, q) {
    if (!A) {
      q.writeHead(400), q.end("Authorization code not found"), this.reject(Error("No authorization code received"));
      return;
    }
    if (K !== this.expectedState) {
      q.writeHead(400), q.end("Invalid state parameter"), this.reject(Error("Invalid state parameter"));
      return;
    }
    this.pendingResponse = q, this.resolve(A);
  }
  handleError(A) {
    KA(A), this.close(), this.reject(A);
  }
  resolve(A) {
    if (this.promiseResolver) this.promiseResolver(A), this.promiseResolver = null, this.promiseRejecter = null;
  }
  reject(A) {
    if (this.promiseRejecter) this.promiseRejecter(A), this.promiseResolver = null, this.promiseRejecter = null;
  }
  close() {
    if (this.pendingResponse) this.handleErrorRedirect();
    if (this.localServer) this.localServer.removeAllListeners(), this.localServer.close();
  }
}
__$.vT6 = vT6;

class Ov6 {
  cache = new Map();
  ready = !1;
  constructor() {
    try {
      if (!jb7(mDA())) ltY(mDA(), {
        recursive: !0
      });
      let A = itY(mDA());
      for (let K of A) {
        let q = decodeURIComponent(K),
          Y = ntY(EgA.join(mDA(), K), "utf8");
        this.cache.set(q, Y);
      }
      this.ready = !0;
    } catch (A) {
      KA(A), this.ready = !0;
    }
  }
  isReady() {
    return this.ready;
  }
  isReadyResolver() {
    return this.ready ? Promise.resolve() : null;
  }
  getProviderName() {
    return "FileSystemStorageProvider";
  }
  getItem(A) {
    return this.cache.get(A) ?? null;
  }
  setItem(A, K) {
    this.cache.set(A, K);
    let q = encodeURIComponent(A);
    otY(EgA.join(mDA(), q), K, "utf8").catch(Y => KA(Y));
  }
  removeItem(A) {
    this.cache.delete(A);
    let K = encodeURIComponent(A),
      q = EgA.join(mDA(), K);
    if (!jb7(q)) return;
    try {
      rtY(q);
    } catch (Y) {
      KA(Y);
    }
  }
  getAllKeys() {
    return Array.from(this.cache.keys());
  }
}
__$.Ov6 = Ov6;

class mL6 {
  error(A, ...K) {
    KA(Error(A));
  }
  warn(A, ...K) {
    KA(Error(A));
  }
  info(A, ...K) {
    return;
  }
  debug(A, ...K) {
    return;
  }
  verbose(A, ...K) {
    return;
  }
}
__$.mL6 = mL6;

class QL6 {
  endpoint;
  timeout;
  pendingExports = [];
  isShutdown = !1;
  constructor(A = {}) {
    this.endpoint = "https://api.anthropic.com/api/claude_code/metrics", this.timeout = A.timeout || 5000;
  }
  async export(A, K) {
    if (this.isShutdown) {
      K({
        code: O3A.ExportResultCode.FAILED,
        error: Error("Exporter has been shutdown")
      });
      return;
    }
    let q = this.doExport(A, K);
    this.pendingExports.push(q), q.finally(() => {
      let Y = this.pendingExports.indexOf(q);
      if (Y > -1) this.pendingExports.splice(Y, 1);
    });
  }
  async doExport(A, K) {
    try {
      if (!(Dw(!0) || b7())) {
        h("BigQuery metrics export: trust not established, skipping"), K({
          code: O3A.ExportResultCode.SUCCESS
        });
        return;
      }
      if (!(await JM1()).enabled) {
        h("Metrics export disabled by organization setting"), K({
          code: O3A.ExportResultCode.SUCCESS
        });
        return;
      }
      let z = this.transformMetricsForInternal(A),
        w = BH();
      if (w.error) {
        h(`Metrics export failed: ${w.error}`), K({
          code: O3A.ExportResultCode.FAILED,
          error: Error(w.error)
        });
        return;
      }
      let H = {
          "Content-Type": "application/json",
          "User-Agent": uH(),
          ...w.headers
        },
        J = await A8.post(this.endpoint, z, {
          timeout: this.timeout,
          headers: H
        });
      h("BigQuery metrics exported successfully"), h(`BigQuery API Response: ${UA(J.data, null, 2)}`), K({
        code: O3A.ExportResultCode.SUCCESS
      });
    } catch (q) {
      h(`BigQuery metrics export failed: ${q instanceof Error ? q.message : String(q)}`), KA(q), K({
        code: O3A.ExportResultCode.FAILED,
        error: q instanceof Error ? q : Error("Unknown export error")
      });
    }
  }
  transformMetricsForInternal(A) {
    let K = A.resource.attributes,
      q = {
        "service.name": K["service.name"] || "claude-code",
        "service.version": K["service.version"] || "unknown",
        "os.type": K["os.type"] || "unknown",
        "os.version": K["os.version"] || "unknown",
        "host.arch": K["host.arch"] || "unknown",
        "aggregation.temporality": this.selectAggregationTemporality() === FL6.AggregationTemporality.DELTA ? "delta" : "cumulative"
      };
    if (K["wsl.version"]) q["wsl.version"] = K["wsl.version"];
    if (Z4()) {
      q["user.customer_type"] = "claude_ai";
      let z = Uq();
      if (z) q["user.subscription_type"] = z;
    } else q["user.customer_type"] = "api";
    return {
      resource_attributes: q,
      metrics: A.scopeMetrics.flatMap(z => z.metrics.map(w => ({
        name: w.descriptor.name,
        description: w.descriptor.description,
        unit: w.descriptor.unit,
        data_points: this.extractDataPoints(w)
      })))
    };
  }
  extractDataPoints(A) {
    return (A.dataPoints || []).filter(q => typeof q.value === "number").map(q => ({
      attributes: this.convertAttributes(q.attributes),
      value: q.value,
      timestamp: this.hrTimeToISOString(q.endTime || q.startTime || [Date.now() / 1000, 0])
    }));
  }
  async shutdown() {
    this.isShutdown = !0, await this.forceFlush(), h("BigQuery metrics exporter shutdown complete");
  }
  async forceFlush() {
    await Promise.all(this.pendingExports), h("BigQuery metrics exporter flush complete");
  }
  convertAttributes(A) {
    let K = {};
    if (A) {
      for (let [q, Y] of Object.entries(A)) if (Y !== void 0 && Y !== null) K[q] = String(Y);
    }
    return K;
  }
  hrTimeToISOString(A) {
    let [K, q] = A;
    return new Date(K * 1000 + q / 1e6).toISOString();
  }
  selectAggregationTemporality() {
    return FL6.AggregationTemporality.DELTA;
  }
}
__$.QL6 = QL6;

class dFA {
  codeVerifier;
  authCodeListener = null;
  port = null;
  manualAuthCodeResolver = null;
  constructor() {
    this.codeVerifier = II7();
  }
  async startOAuthFlow(A, K) {
    this.authCodeListener = new vT6(), this.port = await this.authCodeListener.start();
    let q = SI7(this.codeVerifier),
      Y = hI7(),
      z = {
        codeChallenge: q,
        state: Y,
        port: this.port,
        loginWithClaudeAi: K?.loginWithClaudeAi,
        inferenceOnly: K?.inferenceOnly,
        orgUUID: K?.orgUUID
      },
      w = E36({
        ...z,
        isManual: !0
      }),
      H = E36({
        ...z,
        isManual: !1
      }),
      J = await this.waitForAuthorizationCode(Y, async () => {
        await A(w), await MY(H);
      }),
      O = this.authCodeListener?.hasPendingResponse() ?? !1;
    n("tengu_oauth_auth_code_received", {
      automatic: O
    });
    try {
      let X = await $y4(J, Y, this.codeVerifier, this.port, !O, K?.expiresIn);
      await $R6({
        clearOnboarding: !1
      });
      let $ = await C36(X.access_token);
      if (X.account) L36({
        accountUuid: X.account.uuid,
        emailAddress: X.account.email_address,
        organizationUuid: X.organization?.uuid,
        displayName: $.displayName,
        hasExtraUsageEnabled: $.hasExtraUsageEnabled ?? void 0
      });
      if (O) {
        let _ = G91(X.scope);
        this.authCodeListener?.handleSuccessRedirect(_);
      }
      return this.formatTokens(X, $.subscriptionType, $.rateLimitTier);
    } catch (X) {
      if (O) this.authCodeListener?.handleErrorRedirect();
      throw X;
    } finally {
      this.authCodeListener?.close();
    }
  }
  async waitForAuthorizationCode(A, K) {
    return new Promise((q, Y) => {
      this.manualAuthCodeResolver = q, this.authCodeListener?.waitForAuthorization(A, K).then(z => {
        this.manualAuthCodeResolver = null, q(z);
      }).catch(z => {
        this.manualAuthCodeResolver = null, Y(z);
      });
    });
  }
  handleManualAuthCodeInput(A) {
    if (this.manualAuthCodeResolver) this.manualAuthCodeResolver(A.authorizationCode), this.manualAuthCodeResolver = null, this.authCodeListener?.close();
  }
  formatTokens(A, K, q) {
    return {
      accessToken: A.access_token,
      refreshToken: A.refresh_token,
      expiresAt: Date.now() + A.expires_in * 1000,
      scopes: G91(A.scope),
      subscriptionType: K,
      rateLimitTier: q
    };
  }
  cleanup() {
    this.authCodeListener?.close(), this.manualAuthCodeResolver = null;
  }
}
__$.dFA = dFA;

class BjA {
  activeOperations = new Set();
  lastUserActivityTime = 0;
  lastCLIRecordedTime = Date.now();
  isCLIActive = !1;
  USER_ACTIVITY_TIMEOUT_MS = 5000;
  static instance = null;
  static getInstance() {
    if (!BjA.instance) BjA.instance = new BjA();
    return BjA.instance;
  }
  recordUserActivity() {
    if (!this.isCLIActive && this.lastUserActivityTime !== 0) {
      let K = (Date.now() - this.lastUserActivityTime) / 1000;
      if (K > 0) {
        let q = ZR1();
        if (q) {
          let Y = this.USER_ACTIVITY_TIMEOUT_MS / 1000;
          if (K < Y) q.add(K, {
            type: "user"
          });
        }
      }
    }
    this.lastUserActivityTime = Date.now();
  }
  startCLIActivity(A) {
    if (this.activeOperations.has(A)) this.endCLIActivity(A);
    let K = this.activeOperations.size === 0;
    if (this.activeOperations.add(A), K) this.isCLIActive = !0, this.lastCLIRecordedTime = Date.now();
  }
  endCLIActivity(A) {
    if (this.activeOperations.delete(A), this.activeOperations.size === 0) {
      let K = Date.now(),
        q = (K - this.lastCLIRecordedTime) / 1000;
      if (q > 0) {
        let Y = ZR1();
        if (Y) Y.add(q, {
          type: "cli"
        });
      }
      this.lastCLIRecordedTime = K, this.isCLIActive = !1;
    }
  }
  async trackOperation(A, K) {
    this.startCLIActivity(A);
    try {
      return await K();
    } finally {
      this.endCLIActivity(A);
    }
  }
  getActivityStates() {
    return {
      isUserActive: (Date.now() - this.lastUserActivityTime) / 1000 < this.USER_ACTIVITY_TIMEOUT_MS / 1000,
      isCLIActive: this.isCLIActive,
      activeOperationCount: this.activeOperations.size
    };
  }
}
__$.BjA = BjA;

class KqK {
  originalCommand;
  constructor(A) {
    this.originalCommand = A;
  }
  toString() {
    return this.originalCommand;
  }
  getPipeSegments() {
    try {
      let A = KUA(this.originalCommand),
        K = [],
        q = [];
      for (let Y of A) if (Y === "|") {
        if (q.length > 0) K.push(q.join(" ")), q = [];
      } else q.push(Y);
      if (q.length > 0) K.push(q.join(" "));
      return K.length > 0 ? K : [this.originalCommand];
    } catch {
      return [this.originalCommand];
    }
  }
  withoutOutputRedirections() {
    if (!this.originalCommand.includes(">")) return this.originalCommand;
    let {
      commandWithoutRedirections: A,
      redirections: K
    } = gS(this.originalCommand);
    return K.length > 0 ? A : this.originalCommand;
  }
  getOutputRedirections() {
    let {
      redirections: A
    } = gS(this.originalCommand);
    return A;
  }
}
__$.KqK = KqK;

class qqK {
  originalCommand;
  pipePositions;
  redirectionNodes;
  constructor(A, K, q) {
    this.originalCommand = A, this.pipePositions = K, this.redirectionNodes = q;
  }
  toString() {
    return this.originalCommand;
  }
  getPipeSegments() {
    if (this.pipePositions.length === 0) return [this.originalCommand];
    let A = [],
      K = 0;
    for (let Y of this.pipePositions) {
      let z = this.originalCommand.slice(K, Y).trim();
      if (z) A.push(z);
      K = Y + 1;
    }
    let q = this.originalCommand.slice(K).trim();
    if (q) A.push(q);
    return A;
  }
  withoutOutputRedirections() {
    if (this.redirectionNodes.length === 0) return this.originalCommand;
    let A = [...this.redirectionNodes].sort((q, Y) => Y.startIndex - q.startIndex),
      K = this.originalCommand;
    for (let q of A) K = K.slice(0, q.startIndex) + K.slice(q.endIndex);
    return K.trim().replace(/\s+/g, " ");
  }
  getOutputRedirections() {
    return this.redirectionNodes.map(({
      target: A,
      operator: K
    }) => ({
      target: A,
      operator: K
    }));
  }
}
__$.qqK = qqK;

class xqK {
  type = "in-process";
  context = null;
  setContext(A) {
    this.context = A;
  }
  async isAvailable() {
    return !0;
  }
  async spawn(A) {
    if (!this.context) return h(`[InProcessBackend] spawn() called without context for ${A.name}`), {
      success: !1,
      agentId: `${A.name}@${A.teamName}`,
      error: "InProcessBackend not initialized. Call setContext() before spawn()."
    };
    h(`[InProcessBackend] spawn() called for ${A.name}`);
    let K = await XMA({
      name: A.name,
      teamName: A.teamName,
      prompt: A.prompt,
      color: A.color,
      planModeRequired: A.planModeRequired ?? !1
    }, this.context);
    if (K.success && K.taskId && K.teammateContext && K.abortController) ZV1({
      identity: {
        agentId: K.agentId,
        agentName: A.name,
        teamName: A.teamName,
        color: A.color,
        planModeRequired: A.planModeRequired ?? !1,
        parentSessionId: K.teammateContext.parentSessionId
      },
      taskId: K.taskId,
      prompt: A.prompt,
      teammateContext: K.teammateContext,
      toolUseContext: this.context,
      abortController: K.abortController,
      model: A.model,
      systemPrompt: A.systemPrompt,
      systemPromptMode: A.systemPromptMode,
      allowedTools: A.permissions,
      allowPermissionPrompts: A.allowPermissionPrompts
    }), h(`[InProcessBackend] Started agent execution for ${K.agentId}`);
    return {
      success: K.success,
      agentId: K.agentId,
      taskId: K.taskId,
      abortController: K.abortController,
      error: K.error
    };
  }
  async sendMessage(A, K) {
    h(`[InProcessBackend] sendMessage() to ${A}: ${K.text.substring(0, 50)}...`);
    let q = k3A(A);
    if (!q) throw h(`[InProcessBackend] Invalid agentId format: ${A}`), Error(`Invalid agentId format: ${A}. Expected format: agentName@teamName`);
    let {
      agentName: Y,
      teamName: z
    } = q;
    Q3(Y, {
      text: K.text,
      from: K.from,
      color: K.color,
      timestamp: K.timestamp ?? new Date().toISOString()
    }, z), h(`[InProcessBackend] sendMessage() completed for ${A}`);
  }
  async terminate(A, K) {
    if (h(`[InProcessBackend] terminate() called for ${A}: ${K}`), !this.context) return h(`[InProcessBackend] terminate() failed: no context set for ${A}`), !1;
    let q = await this.context.getAppState(),
      Y = U3A(A, q.tasks);
    if (!Y) return h(`[InProcessBackend] terminate() failed: task not found for ${A}`), !1;
    if (Y.shutdownRequested) return h(`[InProcessBackend] terminate(): shutdown already requested for ${A}`), !0;
    let z = `shutdown-${A}-${Date.now()}`,
      w = KMA({
        requestId: z,
        from: "team-lead",
        reason: K
      }),
      H = Y.identity.agentName;
    return Q3(H, {
      from: "team-lead",
      text: JSON.stringify(w),
      timestamp: new Date().toISOString()
    }, Y.identity.teamName), XKK(Y.id, this.context.setAppState), h(`[InProcessBackend] terminate() sent shutdown request to ${A}`), !0;
  }
  async kill(A) {
    if (h(`[InProcessBackend] kill() called for ${A}`), !this.context) return h(`[InProcessBackend] kill() failed: no context set for ${A}`), !1;
    let K = await this.context.getAppState(),
      q = U3A(A, K.tasks);
    if (!q) return h(`[InProcessBackend] kill() failed: task not found for ${A}`), !1;
    if (q.localTaskId) nq1(q.identity.teamName, q.localTaskId);
    let Y = mP1(q.id, this.context.setAppState);
    return h(`[InProcessBackend] kill() ${Y ? "succeeded" : "failed"} for ${A}`), Y;
  }
  async isActive(A) {
    if (h(`[InProcessBackend] isActive() called for ${A}`), !this.context) return h(`[InProcessBackend] isActive() failed: no context set for ${A}`), !1;
    let K = await this.context.getAppState(),
      q = U3A(A, K.tasks);
    if (!q) return h(`[InProcessBackend] isActive(): task not found for ${A}`), !1;
    let Y = q.status === "running",
      z = q.abortController.signal.aborted,
      w = Y && !z;
    return h(`[InProcessBackend] isActive() for ${A}: ${w} (running=${Y}, aborted=${z})`), w;
  }
}
__$.xqK = xqK;

class cqK {
  type;
  backend;
  context = null;
  spawnedTeammates;
  cleanupRegistered = !1;
  constructor(A) {
    this.backend = A, this.type = A.type, this.spawnedTeammates = new Map();
  }
  setContext(A) {
    this.context = A;
  }
  async isAvailable() {
    return this.backend.isAvailable();
  }
  async spawn(A) {
    let K = cf(A.name, A.teamName);
    if (!this.context) return h(`[PaneBackendExecutor] spawn() called without context for ${A.name}`), {
      success: !1,
      agentId: K,
      error: "PaneBackendExecutor not initialized. Call setContext() before spawn()."
    };
    try {
      let q = A.color ?? Ym(K),
        {
          paneId: Y,
          isFirstTeammate: z
        } = await this.backend.createTeammatePaneInSwarmView(A.name, q),
        w = await pS();
      if (z && w) await this.backend.enablePaneBorderStatus();
      let H = UqK(),
        J = [`--agent-id ${R4([K])}`, `--agent-name ${R4([A.name])}`, `--team-name ${R4([A.teamName])}`, `--agent-color ${R4([q])}`, `--parent-session-id ${R4([A.parentSessionId || d1()])}`, A.planModeRequired ? "--plan-mode-required" : ""].filter(Boolean).join(" "),
        O = await this.context.getAppState(),
        X = pqK({
          planModeRequired: A.planModeRequired,
          permissionMode: O.toolPermissionContext.mode
        });
      if (A.model) X = X.split(" ").filter((Z, W, D) => Z !== "--model" && D[W - 1] !== "--model").join(" "), X = X ? `${X} --model ${R4([A.model])}` : `--model ${R4([A.model])}`;
      let $ = X ? ` ${X}` : "",
        _ = A.cwd,
        G = `cd ${R4([_])} && CLAUDECODE=1 ${R4([H])} ${J}${$}`;
      if (await this.backend.sendCommandToPane(Y, G, !w), this.spawnedTeammates.set(K, {
        paneId: Y,
        insideTmux: w
      }), !this.cleanupRegistered) this.cleanupRegistered = !0, kK(async () => {
        for (let [Z, W] of this.spawnedTeammates) h(`[PaneBackendExecutor] Cleanup: killing pane for ${Z}`), await this.backend.killPane(W.paneId, !W.insideTmux);
        this.spawnedTeammates.clear();
      });
      return Q3(A.name, {
        from: "team-lead",
        text: A.prompt,
        timestamp: new Date().toISOString()
      }, A.teamName), h(`[PaneBackendExecutor] Spawned teammate ${K} in pane ${Y}`), {
        success: !0,
        agentId: K,
        paneId: Y
      };
    } catch (q) {
      let Y = q instanceof Error ? q.message : String(q);
      return h(`[PaneBackendExecutor] Failed to spawn ${K}: ${Y}`), {
        success: !1,
        agentId: K,
        error: Y
      };
    }
  }
  async sendMessage(A, K) {
    h(`[PaneBackendExecutor] sendMessage() to ${A}: ${K.text.substring(0, 50)}...`);
    let q = k3A(A);
    if (!q) throw Error(`Invalid agentId format: ${A}. Expected format: agentName@teamName`);
    let {
      agentName: Y,
      teamName: z
    } = q;
    Q3(Y, {
      text: K.text,
      from: K.from,
      color: K.color,
      timestamp: K.timestamp ?? new Date().toISOString()
    }, z), h(`[PaneBackendExecutor] sendMessage() completed for ${A}`);
  }
  async terminate(A, K) {
    h(`[PaneBackendExecutor] terminate() called for ${A}: ${K}`);
    let q = k3A(A);
    if (!q) return h("[PaneBackendExecutor] terminate() failed: invalid agentId format"), !1;
    let {
        agentName: Y,
        teamName: z
      } = q,
      w = {
        type: "shutdown_request",
        requestId: `shutdown-${A}-${Date.now()}`,
        from: "team-lead",
        reason: K
      };
    return Q3(Y, {
      from: "team-lead",
      text: UA(w),
      timestamp: new Date().toISOString()
    }, z), h(`[PaneBackendExecutor] terminate() sent shutdown request to ${A}`), !0;
  }
  async kill(A) {
    h(`[PaneBackendExecutor] kill() called for ${A}`);
    let K = this.spawnedTeammates.get(A);
    if (!K) return h(`[PaneBackendExecutor] kill() failed: teammate ${A} not found in spawned map`), !1;
    let {
        paneId: q,
        insideTmux: Y
      } = K,
      z = await this.backend.killPane(q, !Y);
    if (z) this.spawnedTeammates.delete(A), h(`[PaneBackendExecutor] kill() succeeded for ${A}`);else h(`[PaneBackendExecutor] kill() failed for ${A}`);
    return z;
  }
  async isActive(A) {
    if (h(`[PaneBackendExecutor] isActive() called for ${A}`), !this.spawnedTeammates.get(A)) return h(`[PaneBackendExecutor] isActive(): teammate ${A} not found`), !1;
    return !0;
  }
}
__$.cqK = cqK;

class hS6 {
  type = "tmux";
  displayName = "tmux";
  supportsHideShow = !0;
  async isAvailable() {
    return ct();
  }
  async isRunningInside() {
    return pS();
  }
  async createTeammatePaneInSwarmView(A, K) {
    let q = await YV2();
    try {
      if (await this.isRunningInside()) return await this.createTeammatePaneWithLeader(A, K);
      return await this.createTeammatePaneExternal(A, K);
    } finally {
      q();
    }
  }
  async sendCommandToPane(A, K, q = !1) {
    let z = await (q ? CW : dS)(["send-keys", "-t", A, K, "Enter"]);
    if (z.code !== 0) throw Error(`Failed to send command to pane ${A}: ${z.stderr}`);
  }
  async setPaneBorderColor(A, K, q = !1) {
    let Y = eqK(K),
      z = q ? CW : dS;
    await z(["select-pane", "-t", A, "-P", `bg=default,fg=${Y}`]), await z(["set-option", "-p", "-t", A, "pane-border-style", `fg=${Y}`]), await z(["set-option", "-p", "-t", A, "pane-active-border-style", `fg=${Y}`]);
  }
  async setPaneTitle(A, K, q, Y = !1) {
    let z = eqK(q),
      w = Y ? CW : dS;
    await w(["select-pane", "-t", A, "-T", K]), await w(["set-option", "-p", "-t", A, "pane-border-format", `#[fg=${z},bold] #{pane_title} #[default]`]);
  }
  async enablePaneBorderStatus(A, K = !1) {
    let q = A || (await this.getCurrentWindowTarget());
    if (!q) return;
    await (K ? CW : dS)(["set-option", "-w", "-t", q, "pane-border-status", "top"]);
  }
  async rebalancePanes(A, K) {
    if (K) await this.rebalancePanesWithLeader(A);else await this.rebalancePanesTiled(A);
  }
  async killPane(A, K = !1) {
    return (await (K ? CW : dS)(["kill-pane", "-t", A])).code === 0;
  }
  async hidePane(A, K = !1) {
    let q = K ? CW : dS;
    await q(["new-session", "-d", "-s", OT6]);
    let Y = await q(["break-pane", "-d", "-s", A, "-t", `${OT6}:`]);
    if (Y.code === 0) h(`[TmuxBackend] Hidden pane ${A}`);else h(`[TmuxBackend] Failed to hide pane ${A}: ${Y.stderr}`);
    return Y.code === 0;
  }
  async showPane(A, K, q = !1) {
    let Y = q ? CW : dS,
      z = await Y(["join-pane", "-h", "-s", A, "-t", K]);
    if (z.code !== 0) return h(`[TmuxBackend] Failed to show pane ${A}: ${z.stderr}`), !1;
    h(`[TmuxBackend] Showed pane ${A} in ${K}`), await Y(["select-layout", "-t", K, "main-vertical"]);
    let H = (await Y(["list-panes", "-t", K, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean);
    if (H[0]) await Y(["resize-pane", "-t", H[0], "-x", "30%"]);
    return !0;
  }
  async getCurrentPaneId() {
    let A = jV1();
    if (A) return A;
    let K = await R6(Hj, ["display-message", "-p", "#{pane_id}"]);
    if (K.code !== 0) return h(`[TmuxBackend] Failed to get current pane ID (exit ${K.code}): ${K.stderr}`), null;
    return K.stdout.trim();
  }
  async getCurrentWindowTarget() {
    if (VV1) return VV1;
    let A = jV1(),
      K = ["display-message"];
    if (A) K.push("-t", A);
    K.push("-p", "#{session_name}:#{window_index}");
    let q = await R6(Hj, K);
    if (q.code !== 0) return h(`[TmuxBackend] Failed to get current window target (exit ${q.code}): ${q.stderr}`), null;
    return VV1 = q.stdout.trim(), VV1;
  }
  async getCurrentWindowPaneCount(A, K = !1) {
    let q = A || (await this.getCurrentWindowTarget());
    if (!q) return null;
    let Y = ["list-panes", "-t", q, "-F", "#{pane_id}"],
      z = K ? await CW(Y) : await dS(Y);
    if (z.code !== 0) return KA(Error(`[TmuxBackend] Failed to get pane count for ${q} (exit ${z.code}): ${z.stderr}`)), null;
    return z.stdout.trim().split(`
`).filter(Boolean).length;
  }
  async hasSessionInSwarm(A) {
    return (await CW(["has-session", "-t", A])).code === 0;
  }
  async createExternalSwarmSession() {
    if (!(await this.hasSessionInSwarm(Sf))) {
      let w = await CW(["new-session", "-d", "-s", Sf, "-n", WDA, "-P", "-F", "#{pane_id}"]);
      if (w.code !== 0) throw Error(`Failed to create swarm session: ${w.stderr || "Unknown error"}`);
      let H = w.stdout.trim(),
        J = `${Sf}:${WDA}`;
      return h(`[TmuxBackend] Created external swarm session with window ${J}, pane ${H}`), {
        windowTarget: J,
        paneId: H
      };
    }
    let q = (await CW(["list-windows", "-t", Sf, "-F", "#{window_name}"])).stdout.trim().split(`
`).filter(Boolean),
      Y = `${Sf}:${WDA}`;
    if (q.includes(WDA)) {
      let H = (await CW(["list-panes", "-t", Y, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean);
      return {
        windowTarget: Y,
        paneId: H[0] || ""
      };
    }
    let z = await CW(["new-window", "-t", Sf, "-n", WDA, "-P", "-F", "#{pane_id}"]);
    if (z.code !== 0) throw Error(`Failed to create swarm-view window: ${z.stderr || "Unknown error"}`);
    return {
      windowTarget: Y,
      paneId: z.stdout.trim()
    };
  }
  async createTeammatePaneWithLeader(A, K) {
    let q = await this.getCurrentPaneId(),
      Y = await this.getCurrentWindowTarget();
    if (!q || !Y) throw Error("Could not determine current tmux pane/window");
    let z = await this.getCurrentWindowPaneCount(Y);
    if (z === null) throw Error("Could not determine pane count for current window");
    let w = z === 1,
      H;
    if (w) H = await R6(Hj, ["split-window", "-t", q, "-h", "-p", "70", "-P", "-F", "#{pane_id}"]);else {
      let $ = (await R6(Hj, ["list-panes", "-t", Y, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean).slice(1),
        _ = $.length,
        G = _ % 2 === 1,
        Z = Math.floor((_ - 1) / 2),
        W = $[Z] || $[$.length - 1];
      H = await R6(Hj, ["split-window", "-t", W, G ? "-v" : "-h", "-P", "-F", "#{pane_id}"]);
    }
    if (H.code !== 0) throw Error(`Failed to create teammate pane: ${H.stderr}`);
    let J = H.stdout.trim();
    return h(`[TmuxBackend] Created teammate pane for ${A}: ${J}`), await this.setPaneBorderColor(J, K), await this.setPaneTitle(J, A, K), await this.rebalancePanesWithLeader(Y), await tqK(), {
      paneId: J,
      isFirstTeammate: w
    };
  }
  async createTeammatePaneExternal(A, K) {
    let {
        windowTarget: q,
        paneId: Y
      } = await this.createExternalSwarmSession(),
      z = await this.getCurrentWindowPaneCount(q, !0);
    if (z === null) throw Error("Could not determine pane count for swarm window");
    let w = !IS6 && z === 1,
      H;
    if (w) H = Y, IS6 = !0, h(`[TmuxBackend] Using initial pane for first teammate ${A}: ${H}`), await this.enablePaneBorderStatus(q, !0);else {
      let O = (await CW(["list-panes", "-t", q, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean),
        X = O.length,
        $ = X % 2 === 1,
        _ = Math.floor((X - 1) / 2),
        G = O[_] || O[O.length - 1],
        Z = await CW(["split-window", "-t", G, $ ? "-v" : "-h", "-P", "-F", "#{pane_id}"]);
      if (Z.code !== 0) throw Error(`Failed to create teammate pane: ${Z.stderr}`);
      H = Z.stdout.trim(), h(`[TmuxBackend] Created teammate pane for ${A}: ${H}`);
    }
    return await this.setPaneBorderColor(H, K, !0), await this.setPaneTitle(H, A, K, !0), await this.rebalancePanesTiled(q), await tqK(), {
      paneId: H,
      isFirstTeammate: w
    };
  }
  async rebalancePanesWithLeader(A) {
    let q = (await dS(["list-panes", "-t", A, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean);
    if (q.length <= 2) return;
    await dS(["select-layout", "-t", A, "main-vertical"]);
    let Y = q[0];
    await dS(["resize-pane", "-t", Y, "-x", "30%"]), h(`[TmuxBackend] Rebalanced ${q.length - 1} teammate panes with leader`);
  }
  async rebalancePanesTiled(A) {
    let q = (await CW(["list-panes", "-t", A, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean);
    if (q.length <= 1) return;
    await CW(["select-layout", "-t", A, "tiled"]), h(`[TmuxBackend] Rebalanced ${q.length} teammate panes with tiled layout`);
  }
}
__$.hS6 = hS6;

class mS6 {
  type = "iterm2";
  displayName = "iTerm2";
  supportsHideShow = !1;
  async isAvailable() {
    let A = o3A();
    if (h(`[ITermBackend] isAvailable check: inITerm2=${A}`), !A) return h("[ITermBackend] isAvailable: false (not in iTerm2)"), !1;
    let K = await OUA();
    return h(`[ITermBackend] isAvailable: ${K} (it2 CLI ${K ? "found" : "not found"})`), K;
  }
  async isRunningInside() {
    let A = o3A();
    return h(`[ITermBackend] isRunningInside: ${A}`), A;
  }
  async createTeammatePaneInSwarmView(A, K) {
    h(`[ITermBackend] createTeammatePaneInSwarmView called for ${A} with color ${K}`);
    let q = await wV2();
    try {
      let Y = !uS6;
      h(`[ITermBackend] Creating pane: isFirstTeammate=${Y}, existingPanes=${CMA.length}`);
      let z;
      if (Y) {
        let J = JV2();
        if (J) z = ["session", "split", "-v", "-s", J], h(`[ITermBackend] First split from leader session: ${J}`);else z = ["session", "split", "-v"], h("[ITermBackend] First split from active session (no leader ID)");
      } else {
        let J = CMA[CMA.length - 1];
        if (J) z = ["session", "split", "-s", J], h(`[ITermBackend] Subsequent split from teammate session: ${J}`);else z = ["session", "split"], h("[ITermBackend] Subsequent split from active session (no teammate ID)");
      }
      let w = await xS6(z);
      if (w.code !== 0) throw Error(`Failed to create iTerm2 split pane: ${w.stderr}`);
      if (Y) uS6 = !0;
      let H = HV2(w.stdout);
      if (!H) throw Error(`Failed to parse session ID from split output: ${w.stdout}`);
      return h(`[ITermBackend] Created teammate pane for ${A}: ${H}`), CMA.push(H), {
        paneId: H,
        isFirstTeammate: Y
      };
    } finally {
      q();
    }
  }
  async sendCommandToPane(A, K, q) {
    let z = await xS6(A ? ["session", "run", "-s", A, K] : ["session", "run", K]);
    if (z.code !== 0) throw Error(`Failed to send command to iTerm2 pane ${A}: ${z.stderr}`);
  }
  async setPaneBorderColor(A, K, q) {}
  async setPaneTitle(A, K, q, Y) {}
  async enablePaneBorderStatus(A, K) {}
  async rebalancePanes(A, K) {
    h("[ITermBackend] Pane rebalancing not implemented for iTerm2");
  }
  async killPane(A, K) {
    return (await xS6(["session", "close", "-s", A])).code === 0;
  }
  async hidePane(A, K) {
    return h("[ITermBackend] hidePane not supported in iTerm2"), !1;
  }
  async showPane(A, K, q) {
    return h("[ITermBackend] showPane not supported in iTerm2"), !1;
  }
}
__$.mS6 = mS6;

class aUA {
  toolDefinitions;
  canUseTool;
  tools = [];
  toolUseContext;
  hasErrored = !1;
  discarded = !1;
  progressAvailableResolve;
  constructor(A, K, q) {
    this.toolDefinitions = A;
    this.canUseTool = K;
    this.toolUseContext = q;
  }
  discard() {
    this.discarded = !0;
  }
  addTool(A, K) {
    let q = this.toolDefinitions.find(w => w.name === A.name);
    if (!q) {
      this.tools.push({
        id: A.id,
        block: A,
        assistantMessage: K,
        status: "completed",
        isConcurrencySafe: !0,
        pendingProgress: [],
        results: [t1({
          content: [{
            type: "tool_result",
            content: `<tool_use_error>Error: No such tool available: ${A.name}</tool_use_error>`,
            is_error: !0,
            tool_use_id: A.id
          }],
          toolUseResult: `Error: No such tool available: ${A.name}`,
          sourceToolAssistantUUID: K.uuid
        })]
      });
      return;
    }
    let Y = q.inputSchema.safeParse(A.input),
      z = Y?.success ? q.isConcurrencySafe(Y.data) : !1;
    this.tools.push({
      id: A.id,
      block: A,
      assistantMessage: K,
      status: "queued",
      isConcurrencySafe: z,
      pendingProgress: []
    }), this.processQueue();
  }
  canExecuteTool(A) {
    let K = this.tools.filter(q => q.status === "executing");
    return K.length === 0 || A && K.every(q => q.isConcurrencySafe);
  }
  async processQueue() {
    for (let A of this.tools) {
      if (A.status !== "queued") continue;
      if (this.canExecuteTool(A.isConcurrencySafe)) await this.executeTool(A);else if (!A.isConcurrencySafe) break;
    }
  }
  createSyntheticErrorMessage(A, K, q) {
    if (K === "user_interrupted") return t1({
      content: [{
        type: "tool_result",
        content: C5A,
        is_error: !0,
        tool_use_id: A
      }],
      toolUseResult: "User rejected tool use",
      sourceToolAssistantUUID: q.uuid
    });
    if (K === "streaming_fallback") return t1({
      content: [{
        type: "tool_result",
        content: "<tool_use_error>Error: Streaming fallback - tool execution discarded</tool_use_error>",
        is_error: !0,
        tool_use_id: A
      }],
      toolUseResult: "Streaming fallback - tool execution discarded",
      sourceToolAssistantUUID: q.uuid
    });
    return t1({
      content: [{
        type: "tool_result",
        content: "<tool_use_error>Sibling tool call errored</tool_use_error>",
        is_error: !0,
        tool_use_id: A
      }],
      toolUseResult: "Sibling tool call errored",
      sourceToolAssistantUUID: q.uuid
    });
  }
  getAbortReason() {
    if (this.discarded) return "streaming_fallback";
    if (this.hasErrored) return "sibling_error";
    if (this.toolUseContext.abortController.signal.aborted) return "user_interrupted";
    return null;
  }
  async executeTool(A) {
    A.status = "executing", this.toolUseContext.setInProgressToolUseIDs(w => new Set([...w, A.id]));
    let K = [],
      q = [],
      z = (async () => {
        let w = this.getAbortReason();
        if (w) {
          K.push(this.createSyntheticErrorMessage(A.id, w, A.assistantMessage)), A.results = K, A.contextModifiers = q, A.status = "completed";
          return;
        }
        let H = oUA(A.block, A.assistantMessage, this.canUseTool, this.toolUseContext),
          J = !1;
        for await (let O of H) {
          let X = this.getAbortReason();
          if (X && !J) {
            K.push(this.createSyntheticErrorMessage(A.id, X, A.assistantMessage));
            break;
          }
          if (O.message.type === "user" && Array.isArray(O.message.message.content) && O.message.message.content.some(_ => _.type === "tool_result" && _.is_error === !0)) this.hasErrored = !0, J = !0;
          if (O.message) if (O.message.type === "progress") {
            if (A.pendingProgress.push(O.message), this.progressAvailableResolve) this.progressAvailableResolve(), this.progressAvailableResolve = void 0;
          } else K.push(O.message);
          if (O.contextModifier) q.push(O.contextModifier.modifyContext);
        }
        if (A.results = K, A.contextModifiers = q, A.status = "completed", !A.isConcurrencySafe && q.length > 0) for (let O of q) this.toolUseContext = O(this.toolUseContext);
      })();
    A.promise = z, z.finally(() => {
      this.processQueue();
    });
  }
  *getCompletedResults() {
    if (this.discarded) return;
    for (let A of this.tools) {
      while (A.pendingProgress.length > 0) yield {
        message: A.pendingProgress.shift()
      };
      if (A.status === "yielded") continue;
      if (A.status === "completed" && A.results) {
        A.status = "yielded";
        for (let K of A.results) yield {
          message: K
        };
        mk2(this.toolUseContext, A.id);
      } else if (A.status === "executing" && !A.isConcurrencySafe) break;
    }
  }
  hasPendingProgress() {
    return this.tools.some(A => A.pendingProgress.length > 0);
  }
  async *getRemainingResults() {
    if (this.discarded) return;
    while (this.hasUnfinishedTools()) {
      await this.processQueue();
      for (let A of this.getCompletedResults()) yield A;
      if (this.hasExecutingTools() && !this.hasCompletedResults() && !this.hasPendingProgress()) {
        let A = this.tools.filter(q => q.status === "executing" && q.promise).map(q => q.promise),
          K = new Promise(q => {
            this.progressAvailableResolve = q;
          });
        if (A.length > 0) await Promise.race([...A, K]);
      }
    }
    for (let A of this.getCompletedResults()) yield A;
  }
  hasCompletedResults() {
    return this.tools.some(A => A.status === "completed");
  }
  hasExecutingTools() {
    return this.tools.some(A => A.status === "executing");
  }
  hasUnfinishedTools() {
    return this.tools.some(A => A.status !== "yielded");
  }
  getUpdatedContext() {
    return this.toolUseContext;
  }
}
__$.aUA = aUA;

class AXK {
  currentSessionTag;
  currentSessionTitle;
  currentSessionAgentName;
  currentSessionAgentColor;
  sessionFile = null;
  remoteIngressUrl = null;
  pendingWriteCount = 0;
  flushResolvers = [];
  constructor() {}
  incrementPendingWrites() {
    this.pendingWriteCount++;
  }
  decrementPendingWrites() {
    if (this.pendingWriteCount--, this.pendingWriteCount === 0) {
      for (let A of this.flushResolvers) A();
      this.flushResolvers = [];
    }
  }
  async trackWrite(A) {
    this.incrementPendingWrites();
    try {
      return await A();
    } finally {
      this.decrementPendingWrites();
    }
  }
  async flush() {
    if (this.pendingWriteCount === 0) return;
    return new Promise(A => {
      this.flushResolvers.push(A);
    });
  }
  async removeMessageByUuid(A) {
    return this.trackWrite(async () => {
      if (this.sessionFile !== null) try {
        let q = (await s0K(this.sessionFile, {
          encoding: "utf-8"
        })).split(`
`).filter(Y => {
          if (!Y.trim()) return !0;
          try {
            return G6(Y).uuid !== A;
          } catch {
            return !0;
          }
        });
        await hS2(this.sessionFile, q.join(`
`), {
          encoding: "utf8"
        });
      } catch {}
    });
  }
  async insertMessageChain(A, K = !1, q, Y, z) {
    return this.trackWrite(async () => {
      let w = Y ?? null,
        H;
      try {
        H = await bN();
      } catch {
        H = void 0;
      }
      let J = d1(),
        O = WzA().get(J);
      for (let X of A) {
        let $ = jL(X),
          _ = w;
        if (X.type === "user" && "sourceToolAssistantUUID" in X && X.sourceToolAssistantUUID) _ = X.sourceToolAssistantUUID;
        let G = {
          parentUuid: $ ? null : _,
          logicalParentUuid: $ ? w : void 0,
          isSidechain: K,
          teamName: z?.teamName,
          agentName: z?.agentName,
          userType: e0K(),
          cwd: x1(),
          sessionId: J,
          version: xS2,
          gitBranch: H,
          agentId: q,
          slug: O,
          ...X
        };
        await this.appendEntry(G), w = X.uuid;
      }
    });
  }
  async insertFileHistorySnapshot(A, K, q) {
    return this.trackWrite(async () => {
      let Y = {
        type: "file-history-snapshot",
        messageId: A,
        snapshot: K,
        isSnapshotUpdate: q
      };
      await this.appendEntry(Y);
    });
  }
  async insertQueueOperation(A) {
    return this.trackWrite(async () => {
      await this.appendEntry(A);
    });
  }
  async insertAttributionSnapshot(A) {
    return this.trackWrite(async () => {
      await this.appendEntry(A);
    });
  }
  async appendEntry(A, K = d1()) {
    let q = process.env.TEST_ENABLE_SESSION_PERSISTENCE === "true";
    if (uS2() === "test" && !q || J8()?.cleanupPeriodDays === 0 || Pl()) return;
    let Y = BA(),
      z = d1(),
      w = K === z,
      H = w ? this.ensureCurrentSessionFile() : this.getExistingSessionFile(K);
    if (!H) {
      KA(Error(`appendEntry: session file not found for ${w ? "current" : "other"} session ${K}`));
      return;
    }
    if (A.type === "summary") Y.appendFileSync(H, UA(A) + `
`, {
      mode: 384
    });else if (A.type === "custom-title") Y.appendFileSync(H, UA(A) + `
`, {
      mode: 384
    });else if (A.type === "tag") Y.appendFileSync(H, UA(A) + `
`, {
      mode: 384
    });else if (A.type === "agent-name") Y.appendFileSync(H, UA(A) + `
`, {
      mode: 384
    });else if (A.type === "agent-color") Y.appendFileSync(H, UA(A) + `
`, {
      mode: 384
    });else if (A.type === "file-history-snapshot") Y.appendFileSync(H, UA(A) + `
`, {
      mode: 384
    });else if (A.type === "attribution-snapshot") Y.appendFileSync(H, UA(A) + `
`, {
      mode: 384
    });else {
      let J = await MB6(K);
      if (A.type === "queue-operation") Y.appendFileSync(H, UA(A) + `
`, {
        mode: 384
      });else {
        let O = A.isSidechain && A.agentId !== void 0,
          X = O ? $B(oD(A.agentId)) : H;
        if (O) try {
          Y.statSync(X);
        } catch {
          let $ = yJ(_e),
            _ = yv($, d1()),
            G = yv(_, "subagents");
          if (!Y.existsSync($)) Y.mkdirSync($, {
            mode: 448
          });
          if (!Y.existsSync(_)) Y.mkdirSync(_, {
            mode: 448
          });
          if (!Y.existsSync(G)) Y.mkdirSync(G, {
            mode: 448
          });
          x8(X, "", {
            encoding: "utf8",
            flush: !0,
            mode: 384
          });
        }
        if (!J.has(A.uuid)) {
          if (Y.appendFileSync(X, UA(A) + `
`, {
            mode: 384
          }), J.add(A.uuid), this.remoteIngressUrl && Pm(A)) await this.persistToRemote(K, A);
        }
      }
    }
  }
  ensureCurrentSessionFile() {
    let A = BA();
    if (this.sessionFile === null) {
      let K = yJ(_e);
      try {
        A.statSync(K);
      } catch {
        A.mkdirSync(K, {
          mode: 448
        });
      }
      this.sessionFile = Y$();
      try {
        A.statSync(this.sessionFile);
      } catch {
        x8(this.sessionFile, "", {
          encoding: "utf8",
          flush: !0,
          mode: 384
        });
      }
    }
    try {
      A.statSync(this.sessionFile);
    } catch {
      let K = yJ(_e);
      try {
        A.statSync(K);
      } catch {
        A.mkdirSync(K, {
          mode: 448
        });
      }
      x8(this.sessionFile, "", {
        encoding: "utf8",
        flush: !0,
        mode: 384
      });
    }
    return this.sessionFile;
  }
  getExistingSessionFile(A) {
    let K = T_(A);
    return BA().existsSync(K) ? K : null;
  }
  async persistToRemote(A, K) {
    if (!this.remoteIngressUrl) return;
    if (!(await JJK(A, K, this.remoteIngressUrl))) n("tengu_session_persistence_failed", {}), Y5(1, "other");
  }
  setRemoteIngressUrl(A) {
    this.remoteIngressUrl = A, h(`Remote persistence enabled with URL: ${A}`);
  }
  async getLastLog(A) {
    let {
      messages: K
    } = await jB6(A);
    if (K.size === 0) return null;
    let Y = Array.from(K.values()).filter(w => !w.isSidechain).sort((w, H) => new Date(H.timestamp).getTime() - new Date(w.timestamp).getTime())[0];
    if (!Y) return null;
    return IpA(K, Y);
  }
}
__$.AXK = AXK;

class vB6 {
  queue = [];
  waiters = [];
  listeners = new Set();
  _revision = 0;
  get length() {
    return this.queue.length;
  }
  get revision() {
    return this._revision;
  }
  send(A) {
    this._revision++;
    let K = this.waiters.findIndex(q => q.fn(A));
    if (K !== -1) {
      let q = this.waiters.splice(K, 1)[0];
      if (q) {
        q.resolve(A), this.notify();
        return;
      }
    }
    this.queue.push(A), this.notify();
  }
  poll(A = () => !0) {
    let K = this.queue.findIndex(A);
    if (K === -1) return;
    return this.queue.splice(K, 1)[0];
  }
  receive(A = () => !0) {
    let K = this.queue.findIndex(A);
    if (K !== -1) {
      let q = this.queue.splice(K, 1)[0];
      if (q) return this.notify(), Promise.resolve(q);
    }
    return new Promise(q => {
      this.waiters.push({
        fn: A,
        resolve: q
      });
    });
  }
  subscribe(A) {
    return this.listeners.add(A), () => {
      this.listeners.delete(A);
    };
  }
  notify() {
    for (let A of this.listeners) A();
  }
}
__$.vB6 = vB6;

class dXK {
  text;
  tokens;
  visiblePos = 0;
  stringPos = 0;
  tokenIdx = 0;
  charIdx = 0;
  codes = [];
  constructor(A) {
    this.text = A;
    this.tokens = NXA(A);
  }
  segment(A) {
    let K = [];
    for (let Y of A) {
      let z = this.segmentTo(Y.start);
      if (z) K.push(z);
      let w = this.segmentTo(Y.end);
      if (w) w.highlight = Y, K.push(w);
    }
    let q = this.segmentTo(1 / 0);
    if (q) K.push(q);
    return K;
  }
  segmentTo(A) {
    if (this.tokenIdx >= this.tokens.length || A <= this.visiblePos) return null;
    let K = this.visiblePos;
    while (this.tokenIdx < this.tokens.length) {
      let O = this.tokens[this.tokenIdx];
      if (O.type !== "ansi") break;
      this.codes.push(O), this.stringPos += O.code.length, this.tokenIdx++;
    }
    let q = this.stringPos,
      Y = [...this.codes];
    while (this.visiblePos < A && this.tokenIdx < this.tokens.length) {
      let O = this.tokens[this.tokenIdx];
      if (O.type === "ansi") this.codes.push(O), this.stringPos += O.code.length, this.tokenIdx++;else {
        let X = A - this.visiblePos,
          $ = O.value.length - this.charIdx,
          _ = Math.min(X, $);
        if (this.stringPos += _, this.visiblePos += _, this.charIdx += _, this.charIdx >= O.value.length) this.tokenIdx++, this.charIdx = 0;
      }
    }
    if (this.stringPos === q) return null;
    let z = UXK(Y),
      w = UXK(this.codes);
    this.codes = w;
    let H = ET(z),
      J = ET(D4A(w));
    return {
      text: H + this.text.substring(q, this.stringPos) + J,
      start: K
    };
  }
}
__$.dXK = dXK;

class P$K {
  constructor(A) {
    this._keys = [], this._keyMap = {};
    let K = 0;
    A.forEach(q => {
      let Y = V$K(q);
      this._keys.push(Y), this._keyMap[Y.id] = Y, K += Y.weight;
    }), this._keys.forEach(q => {
      q.weight /= K;
    });
  }
  get(A) {
    return this._keyMap[A];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
__$.P$K = P$K;

class GT1 {
  constructor({
    getFn: A = T5.getFn,
    fieldNormWeight: K = T5.fieldNormWeight
  } = {}) {
    this.norm = qb2(K, 3), this.getFn = A, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(A = []) {
    this.docs = A;
  }
  setIndexRecords(A = []) {
    this.records = A;
  }
  setKeys(A = []) {
    this.keys = A, this._keysMap = {}, A.forEach((K, q) => {
      this._keysMap[K.id] = q;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) return;
    if (this.isCreated = !0, vm(this.docs[0])) this.docs.forEach((A, K) => {
      this._addString(A, K);
    });else this.docs.forEach((A, K) => {
      this._addObject(A, K);
    });
    this.norm.clear();
  }
  add(A) {
    let K = this.size();
    if (vm(A)) this._addString(A, K);else this._addObject(A, K);
  }
  removeAt(A) {
    this.records.splice(A, 1);
    for (let K = A, q = this.size(); K < q; K += 1) this.records[K].i -= 1;
  }
  getValueForItemAtKeyId(A, K) {
    return A[this._keysMap[K]];
  }
  size() {
    return this.records.length;
  }
  _addString(A, K) {
    if (!Sv(A) || UB6(A)) return;
    let q = {
      v: A,
      i: K,
      n: this.norm.get(A)
    };
    this.records.push(q);
  }
  _addObject(A, K) {
    let q = {
      i: K,
      $: {}
    };
    this.keys.forEach((Y, z) => {
      let w = Y.getFn ? Y.getFn(A) : this.getFn(A, Y.path);
      if (!Sv(w)) return;
      if (ad(w)) {
        let H = [],
          J = [{
            nestedArrIndex: -1,
            value: w
          }];
        while (J.length) {
          let {
            nestedArrIndex: O,
            value: X
          } = J.pop();
          if (!Sv(X)) continue;
          if (vm(X) && !UB6(X)) {
            let $ = {
              v: X,
              i: O,
              n: this.norm.get(X)
            };
            H.push($);
          } else if (ad(X)) X.forEach(($, _) => {
            J.push({
              nestedArrIndex: _,
              value: $
            });
          });
        }
        q.$[z] = H;
      } else if (vm(w) && !UB6(w)) {
        let H = {
          v: w,
          n: this.norm.get(w)
        };
        q.$[z] = H;
      }
    }), this.records.push(q);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
__$.GT1 = GT1;

class rB6 {
  constructor(A, {
    location: K = T5.location,
    threshold: q = T5.threshold,
    distance: Y = T5.distance,
    includeMatches: z = T5.includeMatches,
    findAllMatches: w = T5.findAllMatches,
    minMatchCharLength: H = T5.minMatchCharLength,
    isCaseSensitive: J = T5.isCaseSensitive,
    ignoreLocation: O = T5.ignoreLocation
  } = {}) {
    if (this.options = {
      location: K,
      threshold: q,
      distance: Y,
      includeMatches: z,
      findAllMatches: w,
      minMatchCharLength: H,
      isCaseSensitive: J,
      ignoreLocation: O
    }, this.pattern = J ? A : A.toLowerCase(), this.chunks = [], !this.pattern.length) return;
    let X = (_, G) => {
        this.chunks.push({
          pattern: _,
          alphabet: Hb2(_),
          startIndex: G
        });
      },
      $ = this.pattern.length;
    if ($ > E9A) {
      let _ = 0,
        G = $ % E9A,
        Z = $ - G;
      while (_ < Z) X(this.pattern.substr(_, E9A), _), _ += E9A;
      if (G) {
        let W = $ - E9A;
        X(this.pattern.substr(W), W);
      }
    } else X(this.pattern, 0);
  }
  searchIn(A) {
    let {
      isCaseSensitive: K,
      includeMatches: q
    } = this.options;
    if (!K) A = A.toLowerCase();
    if (this.pattern === A) {
      let Z = {
        isMatch: !0,
        score: 0
      };
      if (q) Z.indices = [[0, A.length - 1]];
      return Z;
    }
    let {
        location: Y,
        distance: z,
        threshold: w,
        findAllMatches: H,
        minMatchCharLength: J,
        ignoreLocation: O
      } = this.options,
      X = [],
      $ = 0,
      _ = !1;
    this.chunks.forEach(({
      pattern: Z,
      alphabet: W,
      startIndex: D
    }) => {
      let {
        isMatch: j,
        score: M,
        indices: P
      } = wb2(A, Z, W, {
        location: Y + D,
        distance: z,
        threshold: w,
        findAllMatches: H,
        minMatchCharLength: J,
        includeMatches: q,
        ignoreLocation: O
      });
      if (j) _ = !0;
      if ($ += M, j && P) X = [...X, ...P];
    });
    let G = {
      isMatch: _,
      score: _ ? $ / this.chunks.length : 1
    };
    if (_ && q) G.indices = X;
    return G;
  }
}
__$.rB6 = rB6;

class sd {
  constructor(A) {
    this.pattern = A;
  }
  static isMultiMatch(A) {
    return G$K(A, this.multiRegex);
  }
  static isSingleMatch(A) {
    return G$K(A, this.singleRegex);
  }
  search() {}
}
__$.sd = sd;

class L$K {
  constructor(A, {
    isCaseSensitive: K = T5.isCaseSensitive,
    includeMatches: q = T5.includeMatches,
    minMatchCharLength: Y = T5.minMatchCharLength,
    ignoreLocation: z = T5.ignoreLocation,
    findAllMatches: w = T5.findAllMatches,
    location: H = T5.location,
    threshold: J = T5.threshold,
    distance: O = T5.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: K,
      includeMatches: q,
      minMatchCharLength: Y,
      findAllMatches: w,
      ignoreLocation: z,
      location: H,
      threshold: J,
      distance: O
    }, this.pattern = K ? A : A.toLowerCase(), this.query = Xb2(this.pattern, this.options);
  }
  static condition(A, K) {
    return K.useExtendedSearch;
  }
  searchIn(A) {
    let K = this.query;
    if (!K) return {
      isMatch: !1,
      score: 1
    };
    let {
      includeMatches: q,
      isCaseSensitive: Y
    } = this.options;
    A = Y ? A : A.toLowerCase();
    let z = 0,
      w = [],
      H = 0;
    for (let J = 0, O = K.length; J < O; J += 1) {
      let X = K[J];
      w.length = 0, z = 0;
      for (let $ = 0, _ = X.length; $ < _; $ += 1) {
        let G = X[$],
          {
            isMatch: Z,
            indices: W,
            score: D
          } = G.search(A);
        if (Z) {
          if (z += 1, H += D, q) {
            let j = G.constructor.type;
            if ($b2.has(j)) w = [...w, ...W];else w.push(W);
          }
        } else {
          H = 0, z = 0, w.length = 0;
          break;
        }
      }
      if (z) {
        let $ = {
          isMatch: !0,
          score: H / z
        };
        if (q) $.indices = w;
        return $;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
__$.L$K = L$K;

class CL {
  constructor(A, K = {}, q) {
    this.options = {
      ...T5,
      ...K
    }, this.options.useExtendedSearch, this._keyStore = new P$K(this.options.keys), this.setCollection(A, q);
  }
  setCollection(A, K) {
    if (this._docs = A, K && !(K instanceof GT1)) throw Error(lh2);
    this._myIndex = K || f$K(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(A) {
    if (!Sv(A)) return;
    this._docs.push(A), this._myIndex.add(A);
  }
  remove(A = () => !1) {
    let K = [];
    for (let q = 0, Y = this._docs.length; q < Y; q += 1) {
      let z = this._docs[q];
      if (A(z, q)) this.removeAt(q), q -= 1, Y -= 1, K.push(z);
    }
    return K;
  }
  removeAt(A) {
    this._docs.splice(A, 1), this._myIndex.removeAt(A);
  }
  getIndex() {
    return this._myIndex;
  }
  search(A, {
    limit: K = -1
  } = {}) {
    let {
        includeMatches: q,
        includeScore: Y,
        shouldSort: z,
        sortFn: w,
        ignoreFieldNorm: H
      } = this.options,
      J = vm(A) ? vm(this._docs[0]) ? this._searchStringList(A) : this._searchObjectList(A) : this._searchLogical(A);
    if (Wb2(J, {
      ignoreFieldNorm: H
    }), z) J.sort(w);
    if (D$K(K) && K > -1) J = J.slice(0, K);
    return Mb2(J, this._docs, {
      includeMatches: q,
      includeScore: Y
    });
  }
  _searchStringList(A) {
    let K = lB6(A, this.options),
      {
        records: q
      } = this._myIndex,
      Y = [];
    return q.forEach(({
      v: z,
      i: w,
      n: H
    }) => {
      if (!Sv(z)) return;
      let {
        isMatch: J,
        score: O,
        indices: X
      } = K.searchIn(z);
      if (J) Y.push({
        item: z,
        idx: w,
        matches: [{
          score: O,
          value: z,
          norm: H,
          indices: X
        }]
      });
    }), Y;
  }
  _searchLogical(A) {
    let K = R$K(A, this.options),
      q = (H, J, O) => {
        if (!H.children) {
          let {
              keyId: $,
              searcher: _
            } = H,
            G = this._findMatches({
              key: this._keyStore.get($),
              value: this._myIndex.getValueForItemAtKeyId(J, $),
              searcher: _
            });
          if (G && G.length) return [{
            idx: O,
            item: J,
            matches: G
          }];
          return [];
        }
        let X = [];
        for (let $ = 0, _ = H.children.length; $ < _; $ += 1) {
          let G = H.children[$],
            Z = q(G, J, O);
          if (Z.length) X.push(...Z);else if (H.operator === _T1.AND) return [];
        }
        return X;
      },
      Y = this._myIndex.records,
      z = {},
      w = [];
    return Y.forEach(({
      $: H,
      i: J
    }) => {
      if (Sv(H)) {
        let O = q(K, H, J);
        if (O.length) {
          if (!z[J]) z[J] = {
            idx: J,
            item: H,
            matches: []
          }, w.push(z[J]);
          O.forEach(({
            matches: X
          }) => {
            z[J].matches.push(...X);
          });
        }
      }
    }), w;
  }
  _searchObjectList(A) {
    let K = lB6(A, this.options),
      {
        keys: q,
        records: Y
      } = this._myIndex,
      z = [];
    return Y.forEach(({
      $: w,
      i: H
    }) => {
      if (!Sv(w)) return;
      let J = [];
      if (q.forEach((O, X) => {
        J.push(...this._findMatches({
          key: O,
          value: w[X],
          searcher: K
        }));
      }), J.length) z.push({
        idx: H,
        item: w,
        matches: J
      });
    }), z;
  }
  _findMatches({
    key: A,
    value: K,
    searcher: q
  }) {
    if (!Sv(K)) return [];
    let Y = [];
    if (ad(K)) K.forEach(({
      v: z,
      i: w,
      n: H
    }) => {
      if (!Sv(z)) return;
      let {
        isMatch: J,
        score: O,
        indices: X
      } = q.searchIn(z);
      if (J) Y.push({
        score: O,
        key: A,
        value: z,
        idx: w,
        norm: H,
        indices: X
      });
    });else {
      let {
          v: z,
          n: w
        } = K,
        {
          isMatch: H,
          score: J,
          indices: O
        } = q.searchIn(z);
      if (H) Y.push({
        score: J,
        key: A,
        value: z,
        norm: w,
        indices: O
      });
    }
    return Y;
  }
}
__$.CL = CL;

class YN {
  static instance = null;
  status = {
    isAuthenticating: !1,
    output: []
  };
  listeners = new Set();
  static getInstance() {
    if (!YN.instance) YN.instance = new YN();
    return YN.instance;
  }
  getStatus() {
    return {
      ...this.status,
      output: [...this.status.output]
    };
  }
  startAuthentication() {
    this.status = {
      isAuthenticating: !0,
      output: []
    }, this.notifyListeners();
  }
  addOutput(A) {
    this.status.output.push(A), this.notifyListeners();
  }
  setError(A) {
    this.status.error = A, this.notifyListeners();
  }
  endAuthentication(A) {
    if (A) this.status = {
      isAuthenticating: !1,
      output: []
    };else this.status.isAuthenticating = !1;
    this.notifyListeners();
  }
  subscribe(A) {
    return this.listeners.add(A), () => {
      this.listeners.delete(A);
    };
  }
  notifyListeners() {
    this.listeners.forEach(A => A(this.getStatus()));
  }
  static reset() {
    if (YN.instance) YN.instance.listeners.clear(), YN.instance = null;
  }
}
__$.YN = YN;

class jQ6 {
  constructor(A) {
    this._server = A;
  }
  requestStream(A, K, q) {
    return this._server.requestStream(A, K, q);
  }
  async getTask(A, K) {
    return this._server.getTask({
      taskId: A
    }, K);
  }
  async getTaskResult(A, K, q) {
    return this._server.getTaskResult({
      taskId: A
    }, K, q);
  }
  async listTasks(A, K) {
    return this._server.listTasks(A ? {
      cursor: A
    } : void 0, K);
  }
  async cancelTask(A, K) {
    return this._server.cancelTask({
      taskId: A
    }, K);
  }
}
__$.jQ6 = jQ6;

class cNK {
  socket = null;
  connected = !1;
  connecting = !1;
  responseCallback = null;
  notificationHandler = null;
  responseBuffer = Buffer.alloc(0);
  reconnectAttempts = 0;
  maxReconnectAttempts = 10;
  reconnectDelay = 1000;
  reconnectTimer = null;
  context;
  disableAutoReconnect = !1;
  constructor(A) {
    this.context = A;
  }
  async connect() {
    let {
      serverName: A,
      logger: K
    } = this.context;
    if (this.connecting) {
      K.info(`[${A}] Already connecting, skipping duplicate attempt`);
      return;
    }
    this.closeSocket(), this.connecting = !0;
    let q = this.context.getSocketPath?.() ?? this.context.socketPath;
    K.info(`[${A}] Attempting to connect to: ${q}`);
    try {
      await this.validateSocketSecurity(q);
    } catch (z) {
      this.connecting = !1, K.info(`[${A}] Security validation failed:`, z);
      return;
    }
    this.socket = Pn2(q);
    let Y = setTimeout(() => {
      if (!this.connected) K.info(`[${A}] Connection attempt timed out after 5000ms`), this.closeSocket(), this.scheduleReconnect();
    }, 5000);
    this.socket.on("connect", () => {
      clearTimeout(Y), this.connected = !0, this.connecting = !1, this.reconnectAttempts = 0, K.info(`[${A}] Successfully connected to bridge server`);
    }), this.socket.on("data", z => {
      this.responseBuffer = Buffer.concat([this.responseBuffer, z]);
      while (this.responseBuffer.length >= 4) {
        let w = this.responseBuffer.readUInt32LE(0);
        if (this.responseBuffer.length < 4 + w) break;
        let H = this.responseBuffer.slice(4, 4 + w);
        this.responseBuffer = this.responseBuffer.slice(4 + w);
        try {
          let J = JSON.parse(H.toString("utf-8"));
          if (Tn2(J)) {
            if (K.info(`[${A}] Received notification: ${J.method}`), this.notificationHandler) this.notificationHandler(J);
          } else if (Nn2(J)) K.info(`[${A}] Received tool response: ${J}`), this.handleResponse(J);else K.info(`[${A}] Received unknown message: ${J}`);
        } catch (J) {
          K.info(`[${A}] Failed to parse message:`, J);
        }
      }
    }), this.socket.on("error", z => {
      if (clearTimeout(Y), K.info(`[${A}] Socket error (code: ${z.code}):`, z), this.connected = !1, this.connecting = !1, z.code && ["ECONNREFUSED", "ECONNRESET", "EPIPE", "ENOENT", "EOPNOTSUPP", "ECONNABORTED"].includes(z.code)) this.scheduleReconnect();
    }), this.socket.on("close", () => {
      clearTimeout(Y), this.connected = !1, this.connecting = !1, this.scheduleReconnect();
    });
  }
  scheduleReconnect() {
    let {
      serverName: A,
      logger: K
    } = this.context;
    if (this.disableAutoReconnect) return;
    if (this.reconnectTimer) {
      K.info(`[${A}] Reconnect already scheduled, skipping`);
      return;
    }
    this.reconnectAttempts++;
    let q = 100;
    if (this.reconnectAttempts > q) {
      K.info(`[${A}] Giving up after ${q} attempts. Will retry on next tool call.`), this.reconnectAttempts = 0;
      return;
    }
    let Y = Math.min(this.reconnectDelay * Math.pow(1.5, this.reconnectAttempts - 1), 30000);
    if (this.reconnectAttempts <= this.maxReconnectAttempts) K.info(`[${A}] Reconnecting in ${Math.round(Y)}ms (attempt ${this.reconnectAttempts})`);else if (this.reconnectAttempts % 10 === 0) K.info(`[${A}] Still polling for native host (attempt ${this.reconnectAttempts})`);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, Y);
  }
  handleResponse(A) {
    if (this.responseCallback) {
      let K = this.responseCallback;
      this.responseCallback = null, K(A);
    }
  }
  setNotificationHandler(A) {
    this.notificationHandler = A;
  }
  async ensureConnected() {
    let {
      serverName: A
    } = this.context;
    if (this.connected && this.socket) return !0;
    if (!this.socket && !this.connecting) await this.connect();
    return new Promise((K, q) => {
      let Y = null,
        z = setTimeout(() => {
          if (Y) clearTimeout(Y);
          q(new Oh(`[${A}] Connection attempt timed out after 5000ms`));
        }, 5000),
        w = () => {
          if (this.connected) clearTimeout(z), K(!0);else Y = setTimeout(w, 500);
        };
      w();
    });
  }
  async sendRequest(A, K = 30000) {
    let {
      serverName: q
    } = this.context;
    if (!this.socket) throw new Oh(`[${q}] Cannot send request: not connected`);
    let Y = this.socket;
    return new Promise((z, w) => {
      let H = setTimeout(() => {
        this.responseCallback = null, w(new Oh(`[${q}] Tool request timed out after ${K}ms`));
      }, K);
      this.responseCallback = _ => {
        clearTimeout(H), z(_);
      };
      let J = JSON.stringify(A),
        O = Buffer.from(J, "utf-8"),
        X = Buffer.allocUnsafe(4);
      X.writeUInt32LE(O.length, 0);
      let $ = Buffer.concat([X, O]);
      Y.write($);
    });
  }
  async callTool(A, K) {
    let q = {
      method: "execute_tool",
      params: {
        client_id: this.context.clientTypeId,
        tool: A,
        args: K
      }
    };
    return this.sendRequestWithRetry(q);
  }
  async sendRequestWithRetry(A) {
    let {
      serverName: K,
      logger: q
    } = this.context;
    try {
      return await this.sendRequest(A);
    } catch (Y) {
      if (!(Y instanceof Oh)) throw Y;
      return q.info(`[${K}] Connection error, forcing reconnect and retrying: ${Y.message}`), this.closeSocket(), await this.ensureConnected(), await this.sendRequest(A);
    }
  }
  isConnected() {
    return this.connected;
  }
  closeSocket() {
    if (this.socket) this.socket.removeAllListeners(), this.socket.end(), this.socket.destroy(), this.socket = null;
    this.connected = !1, this.connecting = !1;
  }
  cleanup() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.closeSocket(), this.reconnectAttempts = 0, this.responseBuffer = Buffer.alloc(0), this.responseCallback = null;
  }
  disconnect() {
    this.cleanup();
  }
  async validateSocketSecurity(A) {
    let {
      serverName: K,
      logger: q
    } = this.context;
    if (Vn2() === "win32") return;
    try {
      let Y = fn2(A);
      if ((Y.split("/").pop() || "").startsWith("claude-mcp-browser-bridge-")) try {
        let X = await dNK.stat(Y);
        if (X.isDirectory()) {
          let $ = X.mode & 511;
          if ($ !== 448) throw Error(`[${K}] Insecure socket directory permissions: ${$.toString(8)} (expected 0700). Directory may have been tampered with.`);
          let _ = process.getuid?.();
          if (_ !== void 0 && X.uid !== _) throw Error(`Socket directory not owned by current user (uid: ${_}, dir uid: ${X.uid}). Potential security risk.`);
        }
      } catch (X) {
        if (X.code !== "ENOENT") throw X;
      }
      let H = await dNK.stat(A);
      if (!H.isSocket()) throw Error(`[${K}] Path exists but it's not a socket: ${A}`);
      let J = H.mode & 511;
      if (J !== 384) throw Error(`[${K}] Insecure socket permissions: ${J.toString(8)} (expected 0600). Socket may have been tampered with.`);
      let O = process.getuid?.();
      if (O !== void 0 && H.uid !== O) throw Error(`Socket not owned by current user (uid: ${O}, socket uid: ${H.uid}). Potential security risk.`);
      q.info(`[${K}] Socket security validation passed`);
    } catch (Y) {
      if (Y.code === "ENOENT") {
        q.info(`[${K}] Socket not found, will be created by server`);
        return;
      }
      throw Y;
    }
  }
}
__$.cNK = cNK;

class lNK {
  clients = new Map();
  tabRoutes = new Map();
  context;
  notificationHandler = null;
  constructor(A) {
    this.context = A;
  }
  setNotificationHandler(A) {
    this.notificationHandler = A;
    for (let K of this.clients.values()) K.setNotificationHandler(A);
  }
  async ensureConnected() {
    let {
      logger: A,
      serverName: K
    } = this.context;
    this.refreshClients();
    let q = [];
    for (let z of this.clients.values()) if (!z.isConnected()) q.push(z.ensureConnected().catch(() => !1));
    if (q.length > 0) await Promise.all(q);
    let Y = this.getConnectedClients().length;
    if (Y === 0) return A.info(`[${K}] No connected sockets in pool`), !1;
    return A.info(`[${K}] Socket pool: ${Y} connected`), !0;
  }
  async callTool(A, K) {
    if (A === "tabs_context_mcp") return this.callTabsContext(K);
    let q = K.tabId;
    if (q !== void 0) {
      let z = this.tabRoutes.get(q);
      if (z) {
        let w = this.clients.get(z);
        if (w?.isConnected()) return w.callTool(A, K);
      }
    }
    let Y = this.getConnectedClients();
    if (Y.length === 0) throw new Oh(`[${this.context.serverName}] No connected sockets available`);
    return Y[0].callTool(A, K);
  }
  isConnected() {
    return this.getConnectedClients().length > 0;
  }
  disconnect() {
    for (let A of this.clients.values()) A.disconnect();
    this.clients.clear(), this.tabRoutes.clear();
  }
  getConnectedClients() {
    return [...this.clients.values()].filter(A => A.isConnected());
  }
  async callTabsContext(A) {
    let {
        logger: K,
        serverName: q
      } = this.context,
      Y = this.getConnectedClients();
    if (Y.length === 0) throw new Oh(`[${q}] No connected sockets available`);
    if (Y.length === 1) {
      let H = await Y[0].callTool("tabs_context_mcp", A);
      return this.updateTabRoutes(H, this.getSocketPathForClient(Y[0])), H;
    }
    let z = await Promise.allSettled(Y.map(async H => {
        let J = await H.callTool("tabs_context_mcp", A),
          O = this.getSocketPathForClient(H);
        return {
          result: J,
          socketPath: O
        };
      })),
      w = [];
    this.tabRoutes.clear();
    for (let H of z) {
      if (H.status !== "fulfilled") {
        K.info(`[${q}] tabs_context_mcp failed on one socket: ${H.reason}`);
        continue;
      }
      let {
        result: J,
        socketPath: O
      } = H.value;
      this.updateTabRoutes(J, O);
      let X = this.extractTabs(J);
      if (X) w.push(...X);
    }
    if (w.length > 0) {
      let H = w.map(J => {
        let O = J;
        return `  • tabId ${O.tabId}: "${O.title}" (${O.url})`;
      }).join(`
`);
      return {
        result: {
          content: [{
            type: "text",
            text: JSON.stringify({
              availableTabs: w
            })
          }, {
            type: "text",
            text: `

Tab Context:
- Available tabs:
${H}`
          }]
        }
      };
    }
    for (let H of z) if (H.status === "fulfilled") return H.value.result;
    throw new Oh(`[${q}] All sockets failed for tabs_context_mcp`);
  }
  updateTabRoutes(A, K) {
    let q = this.extractTabs(A);
    if (!q) return;
    for (let Y of q) if (typeof Y === "object" && Y !== null && "tabId" in Y) {
      let z = Y.tabId;
      this.tabRoutes.set(z, K);
    }
  }
  extractTabs(A) {
    if (!A || typeof A !== "object") return null;
    let q = A.result?.content;
    if (!q || !Array.isArray(q)) return null;
    for (let Y of q) if (Y.type === "text" && Y.text) try {
      let z = JSON.parse(Y.text);
      if (Array.isArray(z)) return z;
      if (z && Array.isArray(z.availableTabs)) return z.availableTabs;
    } catch {}
    return null;
  }
  getSocketPathForClient(A) {
    for (let [K, q] of this.clients.entries()) if (q === A) return K;
    return "";
  }
  refreshClients() {
    let A = this.getAvailableSocketPaths(),
      {
        logger: K,
        serverName: q
      } = this.context;
    for (let Y of A) if (!this.clients.has(Y)) {
      K.info(`[${q}] Adding socket to pool: ${Y}`);
      let z = {
          ...this.context,
          socketPath: Y,
          getSocketPath: void 0,
          getSocketPaths: void 0
        },
        w = GE1(z);
      if (w.disableAutoReconnect = !0, this.notificationHandler) w.setNotificationHandler(this.notificationHandler);
      this.clients.set(Y, w);
    }
    for (let [Y, z] of this.clients.entries()) if (!A.includes(Y)) {
      K.info(`[${q}] Removing stale socket from pool: ${Y}`), z.disconnect(), this.clients.delete(Y);
      for (let [w, H] of this.tabRoutes.entries()) if (H === Y) this.tabRoutes.delete(w);
    }
  }
  getAvailableSocketPaths() {
    return this.context.getSocketPaths?.() ?? [];
  }
}
__$.lNK = lNK;

class LcA {
  constructor(A = iEK.stdin, K = iEK.stdout) {
    this._stdin = A, this._stdout = K, this._readBuffer = new uuA(), this._started = !1, this._ondata = q => {
      this._readBuffer.append(q), this.processReadBuffer();
    }, this._onerror = q => {
      var Y;
      (Y = this.onerror) === null || Y === void 0 || Y.call(this, q);
    };
  }
  async start() {
    if (this._started) throw Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");
    this._started = !0, this._stdin.on("data", this._ondata), this._stdin.on("error", this._onerror);
  }
  processReadBuffer() {
    var A, K;
    while (!0) try {
      let q = this._readBuffer.readMessage();
      if (q === null) break;
      (A = this.onmessage) === null || A === void 0 || A.call(this, q);
    } catch (q) {
      (K = this.onerror) === null || K === void 0 || K.call(this, q);
    }
  }
  async close() {
    var A;
    if (this._stdin.off("data", this._ondata), this._stdin.off("error", this._onerror), this._stdin.listenerCount("data") === 0) this._stdin.pause();
    this._readBuffer.clear(), (A = this.onclose) === null || A === void 0 || A.call(this);
  }
  send(A) {
    return new Promise(K => {
      let q = g01(A);
      if (this._stdout.write(q)) K();else this._stdout.once("drain", K);
    });
  }
}
__$.LcA = LcA;

class Xd6 {
  sessionId;
  orgUuid;
  accessToken;
  callbacks;
  ws = null;
  state = "closed";
  reconnectAttempts = 0;
  pingInterval = null;
  reconnectTimer = null;
  constructor(A, K, q, Y) {
    this.sessionId = A;
    this.orgUuid = K;
    this.accessToken = q;
    this.callbacks = Y;
  }
  connect() {
    if (this.state === "connecting") {
      h("[SessionsWebSocket] Already connecting");
      return;
    }
    this.state = "connecting";
    let K = `${E7().BASE_API_URL.replace("https://", "wss://")}/v1/sessions/ws/${this.sessionId}/subscribe?organization_uuid=${this.orgUuid}`;
    h(`[SessionsWebSocket] Connecting to ${K}`), this.ws = new Bu(K, {
      agent: a8A(K),
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "anthropic-version": "2023-06-01"
      }
    }), this.ws.on("open", () => {
      h("[SessionsWebSocket] Connection opened, authenticated via headers"), this.state = "connected", this.reconnectAttempts = 0, this.startPingInterval(), this.callbacks.onConnected?.();
    }), this.ws.on("message", q => {
      this.handleMessage(q.toString());
    }), this.ws.on("error", q => {
      KA(Error(`[SessionsWebSocket] Error: ${q.message}`)), this.callbacks.onError?.(q);
    }), this.ws.on("close", (q, Y) => {
      h(`[SessionsWebSocket] Closed: code=${q} reason=${Y.toString()}`), this.handleClose();
    }), this.ws.on("pong", () => {
      h("[SessionsWebSocket] Pong received");
    });
  }
  handleMessage(A) {
    try {
      let K = G6(A);
      if (r4z(K)) this.callbacks.onMessage(K);else h(`[SessionsWebSocket] Ignoring message type: ${typeof K === "object" && K !== null && "type" in K ? String(K.type) : "unknown"}`);
    } catch (K) {
      KA(Error(`[SessionsWebSocket] Failed to parse message: ${K instanceof Error ? K.message : String(K)}`));
    }
  }
  handleClose() {
    if (this.stopPingInterval(), this.state === "closed") return;
    this.ws = null;
    let A = this.state;
    if (this.state = "closed", A === "connected" && this.reconnectAttempts < XSK) this.reconnectAttempts++, h(`[SessionsWebSocket] Scheduling reconnect (attempt ${this.reconnectAttempts}/${XSK})`), this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, l4z);else h("[SessionsWebSocket] Not reconnecting"), this.callbacks.onClose?.();
  }
  startPingInterval() {
    this.stopPingInterval(), this.pingInterval = setInterval(() => {
      if (this.ws && this.state === "connected") try {
        this.ws.ping();
      } catch {}
    }, i4z);
  }
  stopPingInterval() {
    if (this.pingInterval) clearInterval(this.pingInterval), this.pingInterval = null;
  }
  sendControlResponse(A) {
    if (!this.ws || this.state !== "connected") {
      KA(Error("[SessionsWebSocket] Cannot send: not connected"));
      return;
    }
    h("[SessionsWebSocket] Sending control response"), this.ws.send(UA(A));
  }
  isConnected() {
    return this.state === "connected";
  }
  close() {
    if (h("[SessionsWebSocket] Closing connection"), this.state = "closed", this.stopPingInterval(), this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    if (this.ws) this.ws.removeAllListeners(), this.ws.close(), this.ws = null;
  }
  reconnect() {
    h("[SessionsWebSocket] Force reconnecting"), this.reconnectAttempts = 0, this.close(), this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, 500);
  }
}
__$.Xd6 = Xd6;

class $d6 {
  config;
  callbacks;
  websocket = null;
  pendingPermissionRequests = new Map();
  constructor(A, K) {
    this.config = A;
    this.callbacks = K;
  }
  connect() {
    h(`[RemoteSessionManager] Connecting to session ${this.config.sessionId}`);
    let A = {
      onMessage: K => this.handleMessage(K),
      onConnected: () => {
        h("[RemoteSessionManager] Connected"), this.callbacks.onConnected?.();
      },
      onClose: () => {
        h("[RemoteSessionManager] Disconnected"), this.callbacks.onDisconnected?.();
      },
      onError: K => {
        KA(K), this.callbacks.onError?.(K);
      }
    };
    this.websocket = new Xd6(this.config.sessionId, this.config.orgUuid, this.config.accessToken, A), this.websocket.connect();
  }
  handleMessage(A) {
    if (A.type === "control_request") {
      this.handleControlRequest(A);
      return;
    }
    if (A.type === "control_response") {
      h("[RemoteSessionManager] Received control response");
      return;
    }
    if (o4z(A)) this.callbacks.onMessage(A);
  }
  handleControlRequest(A) {
    let {
      request_id: K,
      request: q
    } = A;
    if (q.subtype === "can_use_tool") h(`[RemoteSessionManager] Permission request for tool: ${q.tool_name}`), this.pendingPermissionRequests.set(K, q), this.callbacks.onPermissionRequest(q, K);else h(`[RemoteSessionManager] Ignoring control request: ${q.subtype}`);
  }
  async sendMessage(A) {
    h(`[RemoteSessionManager] Sending message to session ${this.config.sessionId}`);
    let K = await KP1(this.config.sessionId, A);
    if (!K) KA(Error(`[RemoteSessionManager] Failed to send message to session ${this.config.sessionId}`));
    return K;
  }
  respondToPermissionRequest(A, K) {
    if (!this.pendingPermissionRequests.get(A)) {
      KA(Error(`[RemoteSessionManager] No pending permission request with ID: ${A}`));
      return;
    }
    this.pendingPermissionRequests.delete(A);
    let Y = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: A,
        response: {
          behavior: K.behavior,
          ...(K.behavior === "allow" ? {
            updatedInput: K.updatedInput
          } : {
            message: K.message
          })
        }
      }
    };
    h(`[RemoteSessionManager] Sending permission response: ${K.behavior}`), this.websocket?.sendControlResponse(Y);
  }
  isConnected() {
    return this.websocket?.isConnected() ?? !1;
  }
  getSessionId() {
    return this.config.sessionId;
  }
  disconnect() {
    h("[RemoteSessionManager] Disconnecting"), this.websocket?.close(), this.websocket = null, this.pendingPermissionRequests.clear();
  }
  reconnect() {
    h("[RemoteSessionManager] Reconnecting WebSocket"), this.websocket?.reconnect();
  }
}
__$.$d6 = $d6;

class Zd6 {
  ws = null;
  config;
  callbacks;
  constructor(A, K) {
    this.config = A, this.callbacks = K;
  }
  connect() {
    let A = {};
    if (this.config.authToken) A.authorization = `Bearer ${this.config.authToken}`;
    this.ws = new WebSocket(this.config.wsUrl, {
      headers: A
    }), this.ws.addEventListener("open", () => {
      this.callbacks.onConnected?.();
    }), this.ws.addEventListener("message", K => {
      let Y = (typeof K.data === "string" ? K.data : "").split(`
`).filter(z => z.trim());
      for (let z of Y) {
        let w;
        try {
          w = G6(z);
        } catch {
          continue;
        }
        if (!z7z(w)) continue;
        let H = w;
        if (H.type === "control_request") {
          if (H.request.subtype === "can_use_tool") {
            this.callbacks.onPermissionRequest(H.request, H.request_id);
            continue;
          }
        }
        if (H.type !== "control_request" && H.type !== "control_response" && H.type !== "keep_alive" && H.type !== "control_cancel_request") this.callbacks.onMessage(H);
      }
    }), this.ws.addEventListener("close", () => {
      this.callbacks.onDisconnected?.();
    }), this.ws.addEventListener("error", () => {
      this.callbacks.onError?.(Error("WebSocket connection error"));
    });
  }
  sendMessage(A) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return !1;
    let K = UA({
      type: "user",
      message: {
        role: "user",
        content: A
      },
      parent_tool_use_id: null,
      session_id: ""
    });
    return this.ws.send(K), !0;
  }
  respondToPermissionRequest(A, K) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    let q = UA({
      type: "control_response",
      response: {
        subtype: "success",
        request_id: A,
        response: {
          behavior: K.behavior,
          ...(K.behavior === "allow" ? {
            updatedInput: K.updatedInput
          } : {
            message: K.message
          })
        }
      }
    });
    this.ws.send(q);
  }
  disconnect() {
    if (this.ws) this.ws.close(), this.ws = null;
  }
  isConnected() {
    return this.ws?.readyState === WebSocket.OPEN;
  }
}
__$.Zd6 = Zd6;

class jc6 {
  frameDurations = [];
  firstRenderTime;
  lastRenderTime;
  record(A) {
    let K = performance.now();
    if (this.firstRenderTime === void 0) this.firstRenderTime = K;
    this.lastRenderTime = K, this.frameDurations.push(A);
  }
  getMetrics() {
    if (this.frameDurations.length === 0 || this.firstRenderTime === void 0 || this.lastRenderTime === void 0) return;
    let A = this.lastRenderTime - this.firstRenderTime;
    if (A <= 0) return;
    let q = this.frameDurations.length / (A / 1000),
      Y = [...this.frameDurations].sort((J, O) => O - J),
      z = Math.max(0, Math.ceil(Y.length * 0.01) - 1),
      w = Y[z],
      H = w > 0 ? 1000 / w : 0;
    return {
      averageFps: Math.round(q * 100) / 100,
      low1PctFps: Math.round(H * 100) / 100
    };
  }
}
__$.jc6 = jc6;

class vlA {
  input;
  replayUserMessages;
  structuredInput;
  pendingRequests = new Map();
  inputClosed = !1;
  unexpectedResponseCallback;
  constructor(A, K) {
    this.input = A;
    this.replayUserMessages = K;
    this.input = A, this.structuredInput = this.read();
  }
  async *read() {
    let A = "";
    for await (let K of this.input) {
      A += K;
      let q;
      while ((q = A.indexOf(`
`)) !== -1) {
        let Y = A.slice(0, q);
        A = A.slice(q + 1);
        let z = await this.processLine(Y);
        if (z) yield z;
      }
    }
    if (A) {
      let K = await this.processLine(A);
      if (K) yield K;
    }
    this.inputClosed = !0;
    for (let K of this.pendingRequests.values()) K.reject(Error("Tool permission stream closed before response received"));
  }
  getPendingPermissionRequests() {
    return Array.from(this.pendingRequests.values()).map(A => A.request).filter(A => A.request.subtype === "can_use_tool");
  }
  setUnexpectedResponseCallback(A) {
    this.unexpectedResponseCallback = A;
  }
  async processLine(A) {
    try {
      let K = G6(A);
      if (K.type === "keep_alive") return;
      if (K.type === "update_environment_variables") {
        for (let [q, Y] of Object.entries(K.variables)) process.env[q] = Y;
        return;
      }
      if (K.type === "control_response") {
        let q = this.pendingRequests.get(K.response.request_id);
        if (!q) {
          if (this.unexpectedResponseCallback) await this.unexpectedResponseCallback(K);
          return;
        }
        if (this.pendingRequests.delete(K.response.request_id), K.response.subtype === "error") {
          q.reject(Error(K.response.error));
          return;
        }
        let Y = K.response.response;
        if (q.schema) try {
          q.resolve(q.schema.parse(Y));
        } catch (z) {
          q.reject(z);
        } else q.resolve({});
        if (this.replayUserMessages) return K;
        return;
      }
      if (K.type !== "user" && K.type !== "control_request") Pc6(`Error: Expected message type 'user' or 'control', got '${K.type}'`);
      if (K.type === "control_request") {
        if (!K.request) Pc6("Error: Missing request on control_request");
        return K;
      }
      if (K.message.role !== "user") Pc6(`Error: Expected message role 'user', got '${K.message.role}'`);
      return K;
    } catch (K) {
      console.error(`Error parsing streaming input line: ${A}: ${K}`), process.exit(1);
    }
  }
  async write(A) {
    v7(UA(A) + `
`);
  }
  async sendRequest(A, K, q) {
    let Y = g5z(),
      z = {
        type: "control_request",
        request_id: Y,
        request: A
      };
    if (this.inputClosed) throw Error("Stream closed");
    if (q?.aborted) throw Error("Request aborted");
    await this.write(z);
    let w = () => {
      this.write({
        type: "control_cancel_request",
        request_id: Y
      });
      let H = this.pendingRequests.get(Y);
      if (H) H.reject(new y2());
    };
    if (q) q.addEventListener("abort", w, {
      once: !0
    });
    try {
      return await new Promise((H, J) => {
        this.pendingRequests.set(Y, {
          request: {
            type: "control_request",
            request_id: Y,
            request: A
          },
          resolve: O => {
            H(O);
          },
          reject: J,
          schema: K
        });
      });
    } finally {
      if (q) q.removeEventListener("abort", w);
      this.pendingRequests.delete(Y);
    }
  }
  createCanUseTool(A) {
    return async (K, q, Y, z, w) => {
      let H = await V_(K, q, Y, z, w);
      if (H.behavior === "allow" || H.behavior === "deny") return H;
      let J = await Q5z(K.name, w, q, Y, H.suggestions);
      if (J) return J;
      try {
        A?.();
        let O = await this.sendRequest({
          subtype: "can_use_tool",
          tool_name: K.name,
          input: q,
          permission_suggestions: H.suggestions,
          blocked_path: H.blockedPath,
          decision_reason: F5z(H.decisionReason),
          tool_use_id: w,
          agent_id: Y.agentId
        }, SC1, Y.abortController.signal);
        return TlA(O, K, q, Y);
      } catch (O) {
        return TlA({
          behavior: "deny",
          message: `Tool permission request failed: ${O}`,
          toolUseID: w
        }, K, q, Y);
      }
    };
  }
  createHookCallback(A, K) {
    return {
      type: "callback",
      timeout: K,
      callback: async (q, Y, z) => {
        try {
          return await this.sendRequest({
            subtype: "hook_callback",
            callback_id: A,
            input: q,
            tool_use_id: Y || void 0
          }, YG1, z);
        } catch (w) {
          return console.error(`Error in hook callback ${A}:`, w), {};
        }
      }
    };
  }
  async sendMcpMessage(A, K) {
    return (await this.sendRequest({
      subtype: "mcp_message",
      server_name: A,
      message: K
    }, U.object({
      mcp_response: U.any()
    }))).mcp_response;
  }
}
__$.vlA = vlA;

class hC1 {
  ws = null;
  lastSentId = null;
  url;
  state = "idle";
  onData;
  onCloseCallback;
  headers;
  sessionId;
  reconnectAttempts = 0;
  reconnectTimer = null;
  pingInterval = null;
  messageBuffer;
  constructor(A, K = {}, q) {
    this.url = A, this.headers = K, this.sessionId = q, this.messageBuffer = new _mA(U5z);
  }
  connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") {
      h(`WebSocketTransport: Cannot connect, current state is ${this.state}`, {
        level: "error"
      }), v8("error", "cli_websocket_connect_failed");
      return;
    }
    this.state = "reconnecting";
    let A = Date.now();
    h(`WebSocketTransport: Opening ${this.url.href}`), v8("info", "cli_websocket_connect_opening");
    let K = {
      ...this.headers
    };
    if (this.lastSentId) K["X-Last-Request-Id"] = this.lastSentId, h(`WebSocketTransport: Adding X-Last-Request-Id header: ${this.lastSentId}`);
    this.ws = new Bu(this.url.href, {
      headers: K,
      agent: a8A(this.url.href)
    }), this.ws.on("open", () => {
      let q = Date.now() - A;
      h("WebSocketTransport: Connected"), v8("info", "cli_websocket_connect_connected", {
        duration_ms: q
      });
      let Y = this.ws.upgradeReq;
      if (Y?.headers?.["x-last-request-id"]) {
        let z = Y.headers["x-last-request-id"];
        this.replayBufferedMessages(z);
      }
      this.reconnectAttempts = 0, this.state = "connected", this.startPingInterval(), MJ7(() => {
        if (this.state === "connected" && this.ws) try {
          this.ws.send(UA({
            type: "keep_alive"
          }) + `
`), h("WebSocketTransport: Sent keep_alive (activity signal)");
        } catch (z) {
          h(`WebSocketTransport: Keep-alive failed: ${z}`, {
            level: "error"
          }), v8("error", "cli_websocket_keepalive_failed");
        }
      });
    }), this.ws.on("message", q => {
      let Y = q.toString();
      if (this.onData) this.onData(Y);
    }), this.ws.on("error", q => {
      h(`WebSocketTransport: Error: ${q.message}`, {
        level: "error"
      }), v8("error", "cli_websocket_connect_error"), this.handleConnectionError();
    }), this.ws.on("close", (q, Y) => {
      h(`WebSocketTransport: Closed: ${q}`, {
        level: "error"
      }), v8("error", "cli_websocket_connect_closed"), this.handleConnectionError();
    });
  }
  sendLine(A) {
    if (!this.ws || this.state !== "connected") return h("WebSocketTransport: Not connected"), v8("info", "cli_websocket_send_not_connected"), !1;
    try {
      return this.ws.send(A), !0;
    } catch (K) {
      return h(`WebSocketTransport: Failed to send: ${K}`, {
        level: "error"
      }), v8("error", "cli_websocket_send_error"), this.ws = null, this.handleConnectionError(), !1;
    }
  }
  doDisconnect() {
    if (this.stopPingInterval(), mW6(), this.ws) this.ws.close(), this.ws = null;
  }
  handleConnectionError() {
    if (h(`WebSocketTransport: Disconnected from ${this.url.href}`), v8("info", "cli_websocket_disconnected"), this.doDisconnect(), this.state === "closing" || this.state === "closed") return;
    if (this.reconnectAttempts < GUK) {
      if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
      this.state = "reconnecting", this.reconnectAttempts++;
      let A = Math.min(p5z * Math.pow(2, this.reconnectAttempts - 1), d5z);
      h(`WebSocketTransport: Reconnecting in ${A}ms (attempt ${this.reconnectAttempts}/${GUK})`), v8("error", "cli_websocket_reconnect_attempt", {
        reconnectAttempts: this.reconnectAttempts
      }), this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null, this.connect();
      }, A);
    } else if (h(`WebSocketTransport: Max reconnection attempts reached for ${this.url.href}`, {
      level: "error"
    }), v8("error", "cli_websocket_reconnect_exhausted", {
      reconnectAttempts: this.reconnectAttempts
    }), this.state = "closed", this.onCloseCallback) this.onCloseCallback();
  }
  close() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.stopPingInterval(), mW6(), this.state = "closing", this.doDisconnect();
  }
  replayBufferedMessages(A) {
    let K = this.messageBuffer.toArray();
    if (K.length === 0) return;
    let q = 0;
    if (A) {
      let z = K.findIndex(w => "uuid" in w && w.uuid === A);
      if (z >= 0) q = z + 1;
    }
    let Y = K.slice(q);
    if (Y.length === 0) {
      h("WebSocketTransport: No new messages to replay"), v8("info", "cli_websocket_no_messages_to_replay");
      return;
    }
    h(`WebSocketTransport: Replaying ${Y.length} buffered messages`), v8("info", "cli_websocket_messages_to_replay", {
      count: Y.length
    });
    for (let z of Y) {
      let w = UA(z) + `
`;
      if (!this.sendLine(w)) {
        this.handleConnectionError();
        break;
      }
    }
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  setOnData(A) {
    this.onData = A;
  }
  setOnClose(A) {
    this.onCloseCallback = A;
  }
  async write(A) {
    if ("uuid" in A && typeof A.uuid === "string") this.messageBuffer.add(A), this.lastSentId = A.uuid;
    let K = UA(A) + `
`;
    if (this.state !== "connected") return;
    let q = this.sessionId ? ` session=${this.sessionId}` : "",
      Y = this.getControlMessageDetailLabel(A);
    h(`WebSocketTransport: Sending message type=${A.type}${q}${Y}`), this.sendLine(K);
  }
  getControlMessageDetailLabel(A) {
    if (A.type === "control_request") {
      let {
          request_id: K,
          request: q
        } = A,
        Y = q.subtype === "can_use_tool" ? q.tool_name : "";
      return ` subtype=${q.subtype} request_id=${K}${Y ? ` tool=${Y}` : ""}`;
    }
    if (A.type === "control_response") {
      let {
        subtype: K,
        request_id: q
      } = A.response;
      return ` subtype=${K} request_id=${q}`;
    }
    return "";
  }
  startPingInterval() {
    this.stopPingInterval(), this.pingInterval = setInterval(() => {
      if (this.state === "connected" && this.ws) try {
        this.ws.ping();
      } catch (A) {
        h(`WebSocketTransport: Ping failed: ${A}`, {
          level: "error"
        }), v8("error", "cli_websocket_ping_failed");
      }
    }, c5z);
  }
  stopPingInterval() {
    if (this.pingInterval) clearInterval(this.pingInterval), this.pingInterval = null;
  }
}
__$.hC1 = hC1;

class MUK {
  config;
  mutableMessages;
  abortController;
  permissionDenials;
  totalUsage;
  hasHandledOrphanedPermission = !1;
  constructor(A) {
    this.config = A, this.mutableMessages = A.initialMessages ?? [], this.abortController = A.abortController ?? e7(), this.permissionDenials = [], this.totalUsage = lf;
  }
  async *submitMessage(A, K) {
    let {
      cwd: q,
      commands: Y,
      tools: z,
      mcpClients: w,
      verbose: H = !1,
      maxThinkingTokens: J,
      maxTurns: O,
      maxBudgetUsd: X,
      canUseTool: $,
      customSystemPrompt: _,
      appendSystemPrompt: G,
      userSpecifiedModel: Z,
      fallbackModel: W,
      jsonSchema: D,
      getAppState: j,
      setAppState: M,
      replayUserMessages: P = !1,
      includePartialMessages: f = !1,
      agents: N = [],
      setSDKStatus: T,
      orphanedPermission: C
    } = this.config;
    Cv(q);
    let R = !Pl(),
      x = Date.now(),
      y = async (lA, v1, I1, Q1, B1, C6) => {
        let w1 = await $(lA, v1, I1, Q1, B1, C6);
        if (w1.behavior !== "allow") this.permissionDenials.push({
          tool_name: lA.name,
          tool_use_id: B1,
          tool_input: v1
        });
        return w1;
      },
      B = await j(),
      b = Z ? cz(Z) : J3(),
      [F, Q, u] = await Promise.all([sf(z, b, Array.from(B.toolPermissionContext.additionalWorkingDirectories.keys()), w), AX(), typeof _ === "string" ? Promise.resolve({}) : e0()]),
      d = [...(typeof _ === "string" ? [_] : F), ...(G ? [G] : [])],
      r = z.some(lA => lA.name === bG);
    if (D && r) $G1(M, d1());
    let c = {
      messages: this.mutableMessages,
      setMessages: () => {},
      onChangeAPIKey: () => {},
      options: {
        commands: Y,
        debug: !1,
        tools: z,
        verbose: H,
        mainLoopModel: b,
        maxThinkingTokens: J ?? 0,
        mcpClients: w,
        mcpResources: {},
        ideInstallationStatus: null,
        isNonInteractiveSession: !0,
        customSystemPrompt: _,
        appendSystemPrompt: G,
        agentDefinitions: {
          activeAgents: N,
          allAgents: []
        },
        theme: M1().theme,
        maxBudgetUsd: X
      },
      getAppState: j,
      setAppState: M,
      abortController: this.abortController,
      readFileState: H9A(this.mutableMessages, q),
      setInProgressToolUseIDs: () => {},
      setResponseLength: () => {},
      updateFileHistoryState: lA => {
        M(v1 => ({
          ...v1,
          fileHistory: lA(v1.fileHistory)
        }));
      },
      updateAttributionState: lA => {
        M(v1 => ({
          ...v1,
          attribution: lA(v1.attribution)
        }));
      },
      setSDKStatus: T
    };
    if (C && !this.hasHandledOrphanedPermission) {
      this.hasHandledOrphanedPermission = !0;
      for await (let lA of vHK(C, z, this.mutableMessages, c)) yield lA;
    }
    let {
      messages: YA,
      shouldQuery: e,
      allowedTools: qA,
      maxThinkingTokens: HA,
      model: _A,
      resultText: a
    } = await ik1({
      input: A,
      mode: "prompt",
      setIsLoading: () => {},
      setToolJSX: () => {},
      context: {
        ...c,
        messages: this.mutableMessages
      },
      messages: this.mutableMessages,
      uuid: K?.uuid,
      querySource: "sdk"
    });
    this.mutableMessages.push(...YA);
    let JA = J ?? HA ?? 0,
      jA = [...this.mutableMessages],
      MA = YA.filter(lA => lA.type === "user" && !lA.isMeta && !lA.toolUseResult || lA.type === "system" && lA.subtype === "compact_boundary"),
      hA = P ? MA : [];
    M(lA => ({
      ...lA,
      toolPermissionContext: {
        ...lA.toolPermissionContext,
        alwaysAllowRules: {
          ...lA.toolPermissionContext.alwaysAllowRules,
          command: qA
        }
      }
    }));
    let yA = _A ?? b,
      AA = H9A(jA, q),
      wA = F$A(AA, c.readFileState);
    c = {
      messages: jA,
      setMessages: () => {},
      onChangeAPIKey: () => {},
      options: {
        commands: Y,
        debug: !1,
        tools: z,
        verbose: H,
        mainLoopModel: yA,
        maxThinkingTokens: JA,
        mcpClients: w,
        mcpResources: {},
        ideInstallationStatus: null,
        isNonInteractiveSession: !0,
        customSystemPrompt: _,
        appendSystemPrompt: G,
        theme: M1().theme,
        agentDefinitions: {
          activeAgents: N,
          allAgents: []
        },
        maxBudgetUsd: X
      },
      getAppState: j,
      setAppState: M,
      abortController: this.abortController,
      readFileState: wA,
      setInProgressToolUseIDs: () => {},
      setResponseLength: () => {},
      updateFileHistoryState: c.updateFileHistoryState,
      updateAttributionState: c.updateAttributionState,
      setSDKStatus: T
    };
    let OA = J8()?.outputStyle ?? nG,
      [t, {
        enabled: XA
      }] = await Promise.all([Z_1(x1()), SY()]);
    if (yield {
      type: "system",
      subtype: "init",
      cwd: q,
      session_id: d1(),
      tools: z.map(lA => lA.name),
      mcp_servers: w.map(lA => ({
        name: lA.name,
        status: lA.type
      })),
      model: yA,
      permissionMode: B.toolPermissionContext.mode,
      slash_commands: Y.map(lA => lA.name),
      apiKeySource: z0().source,
      betas: nP(),
      claude_code_version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.23",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-01-29T00:18:20Z"
      }.VERSION,
      output_style: OA,
      agents: N.map(lA => lA.agentType),
      skills: t.map(lA => lA.name),
      plugins: XA.map(lA => ({
        name: lA.name,
        path: lA.path
      })),
      uuid: MAA()
    }, w9A("system_message_yielded"), !e) {
      for (let lA of MA) {
        if (lA.type === "user" && typeof lA.message.content === "string" && (lA.message.content.includes(`<${kzA}>`) || lA.message.content.includes(`<${vrA}>`) || lA.isCompactSummary)) jA.push(lA), yield {
          type: "user",
          message: {
            ...lA.message,
            content: AH(lA.message.content)
          },
          session_id: d1(),
          parent_tool_use_id: null,
          uuid: lA.uuid,
          isReplay: !lA.isCompactSummary
        };
        if (lA.type === "system" && lA.subtype === "compact_boundary") jA.push(lA), yield {
          type: "system",
          subtype: "compact_boundary",
          session_id: d1(),
          uuid: lA.uuid,
          compact_metadata: {
            trigger: lA.compactMetadata.trigger,
            pre_tokens: lA.compactMetadata.preTokens
          }
        };
      }
      if (R) await Mm(jA);
      yield {
        type: "result",
        subtype: "success",
        is_error: !1,
        duration_ms: Date.now() - x,
        duration_api_ms: ME(),
        num_turns: jA.length - 1,
        result: a ?? "",
        session_id: d1(),
        total_cost_usd: ZZ(),
        usage: lf,
        modelUsage: Fh(),
        permission_denials: this.permissionDenials,
        uuid: MAA()
      };
      return;
    }
    if (l2() && R) YA.filter(mcA).forEach(lA => {
      QWA(v1 => {
        M(I1 => ({
          ...I1,
          fileHistory: v1(I1.fileHistory)
        }));
      }, lA.uuid);
    });
    let VA = lf,
      vA = 1,
      RA = !1,
      fA,
      LA = D ? wB6(this.mutableMessages, bG) : 0;
    for await (let lA of nf({
      messages: jA,
      systemPrompt: d,
      userContext: Q,
      systemContext: u,
      canUseTool: y,
      toolUseContext: c,
      fallbackModel: W,
      querySource: "sdk",
      maxTurns: O
    })) {
      if (lA.type === "assistant" || lA.type === "user" || lA.type === "system" && lA.subtype === "compact_boundary") {
        if (jA.push(lA), R) await Mm(jA);
        if (!RA && hA.length > 0) {
          RA = !0;
          for (let v1 of hA) if (v1.type === "user") yield {
            type: "user",
            message: v1.message,
            session_id: d1(),
            parent_tool_use_id: null,
            uuid: v1.uuid,
            isReplay: !0
          };
        }
      }
      if (lA.type === "user") vA++;
      switch (lA.type) {
        case "tombstone":
          break;
        case "assistant":
        case "progress":
        case "user":
          this.mutableMessages.push(lA), yield* THK(lA);
          break;
        case "stream_event":
          if (lA.event.type === "message_start") VA = lf, VA = g3A(VA, lA.event.message.usage);
          if (lA.event.type === "message_delta") VA = g3A(VA, lA.event.usage);
          if (lA.event.type === "message_stop") this.totalUsage = LP1(this.totalUsage, VA);
          if (f) yield {
            type: "stream_event",
            event: lA.event,
            session_id: d1(),
            parent_tool_use_id: null,
            uuid: MAA()
          };
          break;
        case "attachment":
          if (this.mutableMessages.push(lA), lA.attachment.type === "structured_output") fA = lA.attachment.data;else if (lA.attachment.type === "max_turns_reached") {
            yield {
              type: "result",
              subtype: "error_max_turns",
              duration_ms: Date.now() - x,
              duration_api_ms: ME(),
              is_error: !1,
              num_turns: lA.attachment.turnCount,
              session_id: d1(),
              total_cost_usd: ZZ(),
              usage: this.totalUsage,
              modelUsage: Fh(),
              permission_denials: this.permissionDenials,
              uuid: MAA(),
              errors: []
            };
            return;
          } else if (P && lA.attachment.type === "queued_command") yield {
            type: "user",
            message: {
              role: "user",
              content: lA.attachment.prompt
            },
            session_id: d1(),
            parent_tool_use_id: null,
            uuid: lA.attachment.source_uuid || lA.uuid,
            isReplay: !0
          };
          break;
        case "stream_request_start":
          break;
        case "system":
          if (this.mutableMessages.push(lA), lA.subtype === "compact_boundary" && lA.compactMetadata) yield {
            type: "system",
            subtype: "compact_boundary",
            session_id: d1(),
            uuid: lA.uuid,
            compact_metadata: {
              trigger: lA.compactMetadata.trigger,
              pre_tokens: lA.compactMetadata.preTokens
            }
          };
          break;
        case "tool_use_summary":
          yield {
            type: "tool_use_summary",
            summary: lA.summary,
            preceding_tool_use_ids: lA.precedingToolUseIds,
            session_id: d1(),
            uuid: lA.uuid
          };
          break;
      }
      if (X !== void 0 && ZZ() >= X) {
        yield {
          type: "result",
          subtype: "error_max_budget_usd",
          duration_ms: Date.now() - x,
          duration_api_ms: ME(),
          is_error: !1,
          num_turns: vA,
          session_id: d1(),
          total_cost_usd: ZZ(),
          usage: this.totalUsage,
          modelUsage: Fh(),
          permission_denials: this.permissionDenials,
          uuid: MAA(),
          errors: []
        };
        return;
      }
      if (lA.type === "user" && D) {
        let I1 = wB6(this.mutableMessages, bG) - LA,
          Q1 = parseInt(process.env.MAX_STRUCTURED_OUTPUT_RETRIES || "5", 10);
        if (I1 >= Q1) {
          yield {
            type: "result",
            subtype: "error_max_structured_output_retries",
            duration_ms: Date.now() - x,
            duration_api_ms: ME(),
            is_error: !0,
            num_turns: vA,
            session_id: d1(),
            total_cost_usd: ZZ(),
            usage: this.totalUsage,
            modelUsage: Fh(),
            permission_denials: this.permissionDenials,
            uuid: MAA(),
            errors: [`Failed to provide valid structured output after ${Q1} attempts`]
          };
          return;
        }
      }
    }
    let SA = KD(jA);
    if (!NHK(SA)) {
      yield {
        type: "result",
        subtype: "error_during_execution",
        duration_ms: Date.now() - x,
        duration_api_ms: ME(),
        is_error: !1,
        num_turns: vA,
        session_id: d1(),
        total_cost_usd: ZZ(),
        usage: this.totalUsage,
        modelUsage: Fh(),
        permission_denials: this.permissionDenials,
        uuid: MAA(),
        errors: yzA().map(lA => lA.error)
      };
      return;
    }
    let xA = "",
      iA = !1;
    if (SA.type === "assistant") {
      let lA = KD(SA.message.content);
      if (lA?.type === "text") xA = lA.text;
      iA = Boolean(SA.isApiErrorMessage);
    }
    yield {
      type: "result",
      subtype: "success",
      is_error: iA,
      duration_ms: Date.now() - x,
      duration_api_ms: ME(),
      num_turns: vA,
      result: xA,
      session_id: d1(),
      total_cost_usd: ZZ(),
      usage: this.totalUsage,
      modelUsage: Fh(),
      permission_denials: this.permissionDenials,
      structured_output: fA,
      uuid: MAA()
    };
  }
  interrupt() {
    this.abortController.abort();
  }
  getMessages() {
    return this.mutableMessages;
  }
  getSessionId() {
    return d1();
  }
  setModel(A) {
    this.config.userSpecifiedModel = A;
  }
}
__$.MUK = MUK;

class Rc6 {
  server = null;
  secret;
  port = null;
  mcpClients;
  availableTools;
  resources;
  constructor(A, K) {
    this.mcpClients = A, this.availableTools = K || [], this.resources = {}, this.secret = P3z(32).toString("hex");
  }
  async start() {
    if (this.server) throw Error("MCP CLI endpoint already started");
    return new Promise((A, K) => {
      this.server = M3z((q, Y) => {
        this.handleRequest(q, Y);
      }), this.server.on("error", q => {
        KA(q), K(q);
      }), this.server.listen(0, "127.0.0.1", () => {
        let q = this.server.address();
        if (!q || typeof q === "string") {
          K(Error("Failed to get server address"));
          return;
        }
        this.port = q.port;
        let Y = `http://127.0.0.1:${this.port}`;
        h(`[MCP CLI Endpoint] Started on ${Y}`), A({
          port: this.port,
          url: Y
        });
      });
    });
  }
  getSecret() {
    return this.secret;
  }
  async handleRequest(A, K) {
    if (A.setTimeout(30000), A.on("timeout", () => {
      h("[MCP CLI Endpoint] Request timeout"), K.writeHead(408, {
        "Content-Type": "application/json"
      }), K.end(UA({
        error: "Request Timeout"
      }));
    }), A.method !== "POST" || A.url !== "/mcp") {
      K.writeHead(404, {
        "Content-Type": "application/json"
      }), K.end(UA({
        error: "Not Found"
      }));
      return;
    }
    let q = A.headers.authorization;
    if (!q?.startsWith("Bearer ")) {
      K.writeHead(403, {
        "Content-Type": "application/json"
      }), K.end(UA({
        error: "Forbidden"
      }));
      return;
    }
    let Y = q.slice(7);
    if (!this.validateSecret(Y)) {
      K.writeHead(403, {
        "Content-Type": "application/json"
      }), K.end(UA({
        error: "Forbidden"
      }));
      return;
    }
    let z = 10485760,
      w = 0,
      H = "";
    A.on("data", J => {
      if (w += J.length, w > z) {
        h(`[MCP CLI Endpoint] Request too large: ${w} bytes`), K.writeHead(413, {
          "Content-Type": "application/json"
        }), K.end(UA({
          error: "Payload Too Large"
        })), A.destroy();
        return;
      }
      H += J.toString();
    }), A.on("end", async () => {
      try {
        let J = G6(H),
          O = vkK.parse(J),
          X = await this.handleCommand(O);
        K.writeHead(200, {
          "Content-Type": "application/json"
        }), K.end(UA(X));
      } catch (J) {
        let O = 500;
        if (J instanceof SyntaxError) O = 400;else if (J && typeof J === "object" && "name" in J) {
          if (J.name === "ZodError") O = 400;
        }
        K.writeHead(O, {
          "Content-Type": "application/json"
        }), K.end(UA({
          error: J instanceof Error ? J.message : "Unknown error",
          type: J instanceof Error ? J.constructor.name : "Error"
        })), KA(J instanceof Error ? J : Error(String(J)));
      }
    }), A.on("error", J => {
      if (KA(J), !K.headersSent) K.writeHead(500, {
        "Content-Type": "application/json"
      }), K.end(UA({
        error: "Internal Server Error"
      }));
    });
  }
  validateSecret(A) {
    try {
      let K = Buffer.from(A),
        q = Buffer.from(this.secret);
      if (K.length !== q.length) return !1;
      return V3z(K, q);
    } catch {
      return !1;
    }
  }
  async handleCommand(A) {
    let K = Date.now(),
      q = A.command === "call" ? `mcp__${A.params.server}__${A.params.tool}` : void 0,
      Y,
      z;
    if (A.command === "call") {
      let w = mVA(this.mcpClients, A.params.server, this.getNormalizedNames());
      if (w?.type === "connected") Y = H0(w.config), z = w.config.type ?? "stdio";
    }
    try {
      let {
          data: w,
          metadata: H
        } = await this.executeCommand(A),
        J = Date.now() - K;
      if (A.command === "call") n("tengu_tool_use_success", {
        toolName: jK(q ?? ""),
        isMcp: !0,
        durationMs: J,
        ...(z ? {
          mcpServerType: z
        } : {}),
        ...(Y ? {
          mcpServerBaseUrl: Y
        } : {})
      });
      return n("tengu_mcp_cli_command_executed", {
        command: A.command,
        success: !0,
        duration_ms: J,
        ...H
      }), w;
    } catch (w) {
      let H = w instanceof Error ? w : Error(String(w)),
        J = Date.now() - K,
        O = String(w).slice(0, 2000);
      if (A.command === "call") n("tengu_tool_use_error", {
        toolName: jK(q ?? ""),
        isMcp: !0,
        error: O,
        durationMs: J,
        ...(z ? {
          mcpServerType: z
        } : {}),
        ...(Y ? {
          mcpServerBaseUrl: Y
        } : {})
      });
      throw n("tengu_mcp_cli_command_executed", {
        command: A.command,
        success: !1,
        error_type: A.command === "call" ? "tool_execution_failed" : H.constructor,
        duration_ms: Date.now() - K
      }), w;
    }
  }
  async executeCommand(A) {
    switch (A.command) {
      case "servers":
        {
          let K = lE1(this.mcpClients);
          return {
            data: K,
            metadata: {
              server_count: K.length
            }
          };
        }
      case "tools":
        {
          let K = iE1(this.availableTools, A.params);
          return {
            data: K,
            metadata: {
              tool_count: K.length,
              filtered: !!A.params?.server
            }
          };
        }
      case "info":
        {
          let K = await nE1(this.availableTools, A.params);
          if (!K) {
            let q = mVA(this.mcpClients, A.params.server, this.getNormalizedNames()),
              Y = WYA(A.params.server, q?.type);
            if (Y) throw Y;
            throw new Lc6(`Tool '${A.params.toolName}' not found on server '${A.params.server}'`);
          }
          return {
            data: K,
            metadata: {
              tool_found: !0
            }
          };
        }
      case "grep":
        {
          let K = rE1(this.availableTools, A.params);
          return {
            data: K,
            metadata: {
              match_count: K.length
            }
          };
        }
      case "resources":
        {
          let K = oE1(this.resources, A.params, this.getNormalizedNames());
          return {
            data: K,
            metadata: {
              resource_count: K.length,
              filtered: !!A.params?.server
            }
          };
        }
      case "call":
        {
          let {
            server: K,
            tool: q
          } = A.params;
          return {
            data: await this.callTool(A.params),
            metadata: {
              tool_name: `mcp__${K}__${q}`
            }
          };
        }
      case "read":
        return {
          data: await this.readResource(A.params),
          metadata: {
            server: A.params.server
          }
        };
      default:
        {
          let K = A;
          throw Error("Unknown command");
        }
    }
  }
  getConnectedClient(A) {
    let K = mVA(this.mcpClients, A, this.getNormalizedNames()),
      q = WYA(A, K?.type);
    if (q) throw q;
    return K;
  }
  async callTool({
    server: A,
    tool: K,
    args: q,
    timeoutMs: Y
  }) {
    let z = this.getConnectedClient(A),
      w = `mcp__${A}__${K}`,
      H = this.availableTools.find(X => X.name === w);
    if (this.availableTools.length > 0 && !H) throw new Lc6(`Tool '${K}' not found on server '${A}'`);
    let J = H?.originalMcpToolName || K;
    return await z.client.request({
      method: "tools/call",
      params: {
        name: J,
        arguments: q
      }
    }, mM, Y ? {
      signal: AbortSignal.timeout(Y)
    } : void 0);
  }
  async readResource({
    server: A,
    uri: K,
    timeoutMs: q
  }) {
    return await this.getConnectedClient(A).client.readResource({
      uri: K
    }, q ? {
      signal: AbortSignal.timeout(q)
    } : void 0);
  }
  async stop() {
    if (!this.server) return;
    return new Promise((A, K) => {
      this.server.close(q => {
        if (q) K(q);else h("[MCP CLI Endpoint] Stopped"), this.server = null, this.port = null, A();
      });
    });
  }
  updateClients(A) {
    this.mcpClients = A;
  }
  updateTools(A) {
    this.availableTools = A;
  }
  updateResources(A) {
    this.resources = A;
  }
  getNormalizedNames() {
    let A = {};
    for (let K of this.mcpClients) A[w3(K.name)] = K.name;
    return A;
  }
}
__$.Rc6 = Rc6;

class rEK {
  debug(A, ...K) {
    h(RcA(A, ...K), {
      level: "debug"
    });
  }
  silly(A, ...K) {
    h(RcA(A, ...K), {
      level: "debug"
    });
  }
  info(A, ...K) {
    h(RcA(A, ...K), {
      level: "info"
    });
  }
  warn(A, ...K) {
    h(RcA(A, ...K), {
      level: "warn"
    });
  }
  error(A, ...K) {
    h(RcA(A, ...K), {
      level: "error"
    });
  }
}
__$.rEK = rEK;

class eEK {
  mcpClients = new Map();
  nextClientId = 1;
  server = null;
  running = !1;
  socketPath = null;
  async start() {
    if (this.running) return;
    if (this.socketPath = ZX1(), kU6() !== "win32") {
      let A = luA();
      try {
        if (!ps2(A).isDirectory()) CU6(A);
      } catch {}
      ds2(A, {
        recursive: !0,
        mode: 448
      });
      try {
        oEK(A, 448);
      } catch {}
      try {
        let K = aEK(A);
        for (let q of K) {
          if (!q.endsWith(".sock")) continue;
          let Y = parseInt(q.replace(".sock", ""), 10);
          if (isNaN(Y)) continue;
          try {
            process.kill(Y, 0);
          } catch {
            try {
              CU6(Qs2(A, q)), CO(`Removed stale socket for PID ${Y}`);
            } catch {}
          }
        }
      } catch {}
    }
    CO(`Creating socket listener: ${this.socketPath}`), this.server = Fs2(A => this.handleMcpClient(A)), await new Promise((A, K) => {
      this.server.listen(this.socketPath, () => {
        if (CO("Socket server listening for connections"), kU6() !== "win32") try {
          oEK(this.socketPath, 384), CO("Socket permissions set to 0600");
        } catch (q) {
          CO("Failed to set socket permissions:", q);
        }
        this.running = !0, A();
      }), this.server.on("error", q => {
        CO("Socket server error:", q), K(q);
      });
    });
  }
  async stop() {
    if (!this.running) return;
    for (let [, A] of this.mcpClients) A.socket.destroy();
    if (this.mcpClients.clear(), this.server) await new Promise(A => {
      this.server.close(() => A());
    }), this.server = null;
    if (kU6() !== "win32" && this.socketPath && Us2(this.socketPath)) {
      try {
        CU6(this.socketPath), CO("Cleaned up socket file");
      } catch {}
      try {
        let A = luA();
        if (aEK(A).length === 0) cs2(A), CO("Removed empty socket directory");
      } catch {}
    }
    this.running = !1;
  }
  async isRunning() {
    return this.running;
  }
  async getClientCount() {
    return this.mcpClients.size;
  }
  async handleMessage(A) {
    let K = G6(A);
    switch (CO(`Handling Chrome message type: ${K.type}`), K.type) {
      case "ping":
        CO("Responding to ping"), uVA(UA({
          type: "pong",
          timestamp: Date.now()
        }));
        break;
      case "get_status":
        uVA(UA({
          type: "status_response",
          native_host_version: is2
        }));
        break;
      case "tool_response":
        {
          if (this.mcpClients.size > 0) {
            CO(`Forwarding tool response to ${this.mcpClients.size} MCP clients`);
            let {
                type: q,
                ...Y
              } = K,
              z = Buffer.from(UA(Y), "utf-8"),
              w = Buffer.alloc(4);
            w.writeUInt32LE(z.length, 0);
            let H = Buffer.concat([w, z]);
            for (let [J, O] of this.mcpClients) try {
              O.socket.write(H);
            } catch (X) {
              CO(`Failed to send to MCP client ${J}:`, X);
            }
          }
          break;
        }
      case "notification":
        {
          if (this.mcpClients.size > 0) {
            CO(`Forwarding notification to ${this.mcpClients.size} MCP clients`);
            let {
                type: q,
                ...Y
              } = K,
              z = Buffer.from(UA(Y), "utf-8"),
              w = Buffer.alloc(4);
            w.writeUInt32LE(z.length, 0);
            let H = Buffer.concat([w, z]);
            for (let [J, O] of this.mcpClients) try {
              O.socket.write(H);
            } catch (X) {
              CO(`Failed to send notification to MCP client ${J}:`, X);
            }
          }
          break;
        }
      default:
        CO(`Unknown message type: ${K.type}`), uVA(UA({
          type: "error",
          error: `Unknown message type: ${K.type}`
        }));
    }
  }
  handleMcpClient(A) {
    let K = this.nextClientId++,
      q = {
        id: K,
        socket: A,
        buffer: Buffer.alloc(0)
      };
    this.mcpClients.set(K, q), CO(`MCP client ${K} connected. Total clients: ${this.mcpClients.size}`), uVA(UA({
      type: "mcp_connected"
    })), A.on("data", Y => {
      q.buffer = Buffer.concat([q.buffer, Y]);
      while (q.buffer.length >= 4) {
        let z = q.buffer.readUInt32LE(0);
        if (z === 0 || z > LU6) {
          CO(`Invalid message length from MCP client ${K}: ${z}`), A.destroy();
          return;
        }
        if (q.buffer.length < 4 + z) break;
        let w = q.buffer.slice(4, 4 + z);
        q.buffer = q.buffer.slice(4 + z);
        try {
          let H = G6(w.toString("utf-8"));
          CO(`Forwarding tool request from MCP client ${K}: ${H.method}`), uVA(UA({
            type: "tool_request",
            method: H.method,
            params: H.params
          }));
        } catch (H) {
          CO(`Failed to parse tool request from MCP client ${K}:`, H);
        }
      }
    }), A.on("error", Y => {
      CO(`MCP client ${K} error: ${Y}`);
    }), A.on("close", () => {
      CO(`MCP client ${K} disconnected. Remaining clients: ${this.mcpClients.size - 1}`), this.mcpClients.delete(K), uVA(UA({
        type: "mcp_disconnected"
      }));
    });
  }
}
__$.eEK = eEK;

class AkK {
  buffer = Buffer.alloc(0);
  pendingResolve = null;
  closed = !1;
  constructor() {
    process.stdin.on("data", A => {
      this.buffer = Buffer.concat([this.buffer, A]), this.tryProcessMessage();
    }), process.stdin.on("end", () => {
      if (this.closed = !0, this.pendingResolve) this.pendingResolve(null), this.pendingResolve = null;
    }), process.stdin.on("error", () => {
      if (this.closed = !0, this.pendingResolve) this.pendingResolve(null), this.pendingResolve = null;
    });
  }
  tryProcessMessage() {
    if (!this.pendingResolve) return;
    if (this.buffer.length < 4) return;
    let A = this.buffer.readUInt32LE(0);
    if (A === 0 || A > LU6) {
      CO(`Invalid message length: ${A}`), this.pendingResolve(null), this.pendingResolve = null;
      return;
    }
    if (this.buffer.length < 4 + A) return;
    let K = this.buffer.subarray(4, 4 + A);
    this.buffer = this.buffer.subarray(4 + A);
    let q = K.toString("utf-8");
    this.pendingResolve(q), this.pendingResolve = null;
  }
  async read() {
    if (this.closed) return null;
    if (this.buffer.length >= 4) {
      let A = this.buffer.readUInt32LE(0);
      if (A > 0 && A <= LU6 && this.buffer.length >= 4 + A) {
        let K = this.buffer.subarray(4, 4 + A);
        return this.buffer = this.buffer.subarray(4 + A), K.toString("utf-8");
      }
    }
    return new Promise(A => {
      this.pendingResolve = A, this.tryProcessMessage();
    });
  }
}
__$.AkK = AkK;

