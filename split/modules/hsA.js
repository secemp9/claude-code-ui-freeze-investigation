// Module: hsA
// Dependencies: H8, MvA, XHA, SsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hsA = v(BM8 => {
  Object.defineProperty(BM8, "__esModule", {
    value: !0
  });
  var Zb = __$.H8(),
    xM8 = __$.MvA(),
    Rmq = __$.XHA(),
    ymq = __$.SsA(),
    Imq = 100,
    xsA;
  class GHA {
    constructor() {
      this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = uM8();
    }
    static clone(A) {
      return A ? A.clone() : new GHA();
    }
    clone() {
      let A = new GHA();
      return A._breadcrumbs = [...this._breadcrumbs], A._tags = {
        ...this._tags
      }, A._extra = {
        ...this._extra
      }, A._contexts = {
        ...this._contexts
      }, A._user = this._user, A._level = this._level, A._span = this._span, A._session = this._session, A._transactionName = this._transactionName, A._fingerprint = this._fingerprint, A._eventProcessors = [...this._eventProcessors], A._requestSession = this._requestSession, A._attachments = [...this._attachments], A._sdkProcessingMetadata = {
        ...this._sdkProcessingMetadata
      }, A._propagationContext = {
        ...this._propagationContext
      }, A._client = this._client, A;
    }
    setClient(A) {
      this._client = A;
    }
    getClient() {
      return this._client;
    }
    addScopeListener(A) {
      this._scopeListeners.push(A);
    }
    addEventProcessor(A) {
      return this._eventProcessors.push(A), this;
    }
    setUser(A) {
      if (this._user = A || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        segment: void 0,
        username: void 0
      }, this._session) Rmq.updateSession(this._session, {
        user: A
      });
      return this._notifyScopeListeners(), this;
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(A) {
      return this._requestSession = A, this;
    }
    setTags(A) {
      return this._tags = {
        ...this._tags,
        ...A
      }, this._notifyScopeListeners(), this;
    }
    setTag(A, K) {
      return this._tags = {
        ...this._tags,
        [A]: K
      }, this._notifyScopeListeners(), this;
    }
    setExtras(A) {
      return this._extra = {
        ...this._extra,
        ...A
      }, this._notifyScopeListeners(), this;
    }
    setExtra(A, K) {
      return this._extra = {
        ...this._extra,
        [A]: K
      }, this._notifyScopeListeners(), this;
    }
    setFingerprint(A) {
      return this._fingerprint = A, this._notifyScopeListeners(), this;
    }
    setLevel(A) {
      return this._level = A, this._notifyScopeListeners(), this;
    }
    setTransactionName(A) {
      return this._transactionName = A, this._notifyScopeListeners(), this;
    }
    setContext(A, K) {
      if (K === null) delete this._contexts[A];else this._contexts[A] = K;
      return this._notifyScopeListeners(), this;
    }
    setSpan(A) {
      return this._span = A, this._notifyScopeListeners(), this;
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      let A = this._span;
      return A && A.transaction;
    }
    setSession(A) {
      if (!A) delete this._session;else this._session = A;
      return this._notifyScopeListeners(), this;
    }
    getSession() {
      return this._session;
    }
    update(A) {
      if (!A) return this;
      let K = typeof A === "function" ? A(this) : A;
      if (K instanceof GHA) {
        let q = K.getScopeData();
        if (this._tags = {
          ...this._tags,
          ...q.tags
        }, this._extra = {
          ...this._extra,
          ...q.extra
        }, this._contexts = {
          ...this._contexts,
          ...q.contexts
        }, q.user && Object.keys(q.user).length) this._user = q.user;
        if (q.level) this._level = q.level;
        if (q.fingerprint.length) this._fingerprint = q.fingerprint;
        if (K.getRequestSession()) this._requestSession = K.getRequestSession();
        if (q.propagationContext) this._propagationContext = q.propagationContext;
      } else if (Zb.isPlainObject(K)) {
        let q = A;
        if (this._tags = {
          ...this._tags,
          ...q.tags
        }, this._extra = {
          ...this._extra,
          ...q.extra
        }, this._contexts = {
          ...this._contexts,
          ...q.contexts
        }, q.user) this._user = q.user;
        if (q.level) this._level = q.level;
        if (q.fingerprint) this._fingerprint = q.fingerprint;
        if (q.requestSession) this._requestSession = q.requestSession;
        if (q.propagationContext) this._propagationContext = q.propagationContext;
      }
      return this;
    }
    clear() {
      return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = uM8(), this;
    }
    addBreadcrumb(A, K) {
      let q = typeof K === "number" ? K : Imq;
      if (q <= 0) return this;
      let Y = {
          timestamp: Zb.dateTimestampInSeconds(),
          ...A
        },
        z = this._breadcrumbs;
      return z.push(Y), this._breadcrumbs = z.length > q ? z.slice(-q) : z, this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return this._breadcrumbs = [], this._notifyScopeListeners(), this;
    }
    addAttachment(A) {
      return this._attachments.push(A), this;
    }
    getAttachments() {
      return this.getScopeData().attachments;
    }
    clearAttachments() {
      return this._attachments = [], this;
    }
    getScopeData() {
      let {
        _breadcrumbs: A,
        _attachments: K,
        _contexts: q,
        _tags: Y,
        _extra: z,
        _user: w,
        _level: H,
        _fingerprint: J,
        _eventProcessors: O,
        _propagationContext: X,
        _sdkProcessingMetadata: $,
        _transactionName: _,
        _span: G
      } = this;
      return {
        breadcrumbs: A,
        attachments: K,
        contexts: q,
        tags: Y,
        extra: z,
        user: w,
        level: H,
        fingerprint: J || [],
        eventProcessors: O,
        propagationContext: X,
        sdkProcessingMetadata: $,
        transactionName: _,
        span: G
      };
    }
    applyToEvent(A, K = {}, q = []) {
      ymq.applyScopeDataToEvent(A, this.getScopeData());
      let Y = [...q, ...xM8.getGlobalEventProcessors(), ...this._eventProcessors];
      return xM8.notifyEventProcessors(Y, A, K);
    }
    setSDKProcessingMetadata(A) {
      return this._sdkProcessingMetadata = {
        ...this._sdkProcessingMetadata,
        ...A
      }, this;
    }
    setPropagationContext(A) {
      return this._propagationContext = A, this;
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(A, K) {
      let q = K && K.event_id ? K.event_id : Zb.uuid4();
      if (!this._client) return Zb.logger.warn("No client configured on scope - will not capture exception!"), q;
      let Y = Error("Sentry syntheticException");
      return this._client.captureException(A, {
        originalException: A,
        syntheticException: Y,
        ...K,
        event_id: q
      }, this), q;
    }
    captureMessage(A, K, q) {
      let Y = q && q.event_id ? q.event_id : Zb.uuid4();
      if (!this._client) return Zb.logger.warn("No client configured on scope - will not capture message!"), Y;
      let z = Error(A);
      return this._client.captureMessage(A, K, {
        originalException: A,
        syntheticException: z,
        ...q,
        event_id: Y
      }, this), Y;
    }
    captureEvent(A, K) {
      let q = K && K.event_id ? K.event_id : Zb.uuid4();
      if (!this._client) return Zb.logger.warn("No client configured on scope - will not capture event!"), q;
      return this._client.captureEvent(A, {
        ...K,
        event_id: q
      }, this), q;
    }
    _notifyScopeListeners() {
      if (!this._notifyingListeners) this._notifyingListeners = !0, this._scopeListeners.forEach(A => {
        A(this);
      }), this._notifyingListeners = !1;
    }
  }
  function Smq() {
    if (!xsA) xsA = new GHA();
    return xsA;
  }
  function hmq(A) {
    xsA = A;
  }
  function uM8() {
    return {
      traceId: Zb.uuid4(),
      spanId: Zb.uuid4().substring(16)
    };
  }
  BM8.Scope = GHA;
  BM8.getGlobalScope = Smq;
  BM8.setGlobalScope = hmq;
});

// Register to shared state
__$.hsA = hsA;
