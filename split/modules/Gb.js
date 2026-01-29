// Module: Gb
// Dependencies: H8, OHA, FX, hsA, XHA, usA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gb = v(pM8 => {
  Object.defineProperty(pM8, "__esModule", {
    value: !0
  });
  var lj = __$.H8(),
    gmq = __$.OHA(),
    MB1 = __$.FX(),
    gM8 = __$.hsA(),
    PB1 = __$.XHA(),
    Fmq = __$.usA(),
    BsA = parseFloat(Fmq.SDK_VERSION),
    Qmq = 100;
  class TvA {
    constructor(A, K, q, Y = BsA) {
      this._version = Y;
      let z;
      if (!K) z = new gM8.Scope(), z.setClient(A);else z = K;
      let w;
      if (!q) w = new gM8.Scope(), w.setClient(A);else w = q;
      if (this._stack = [{
        scope: z
      }], A) this.bindClient(A);
      this._isolationScope = w;
    }
    isOlderThan(A) {
      return this._version < A;
    }
    bindClient(A) {
      let K = this.getStackTop();
      if (K.client = A, K.scope.setClient(A), A && A.setupIntegrations) A.setupIntegrations();
    }
    pushScope() {
      let A = this.getScope().clone();
      return this.getStack().push({
        client: this.getClient(),
        scope: A
      }), A;
    }
    popScope() {
      if (this.getStack().length <= 1) return !1;
      return !!this.getStack().pop();
    }
    withScope(A) {
      let K = this.pushScope(),
        q;
      try {
        q = A(K);
      } catch (Y) {
        throw this.popScope(), Y;
      }
      if (lj.isThenable(q)) return q.then(Y => {
        return this.popScope(), Y;
      }, Y => {
        throw this.popScope(), Y;
      });
      return this.popScope(), q;
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getIsolationScope() {
      return this._isolationScope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(A, K) {
      let q = this._lastEventId = K && K.event_id ? K.event_id : lj.uuid4(),
        Y = Error("Sentry syntheticException");
      return this.getScope().captureException(A, {
        originalException: A,
        syntheticException: Y,
        ...K,
        event_id: q
      }), q;
    }
    captureMessage(A, K, q) {
      let Y = this._lastEventId = q && q.event_id ? q.event_id : lj.uuid4(),
        z = Error(A);
      return this.getScope().captureMessage(A, K, {
        originalException: A,
        syntheticException: z,
        ...q,
        event_id: Y
      }), Y;
    }
    captureEvent(A, K) {
      let q = K && K.event_id ? K.event_id : lj.uuid4();
      if (!A.type) this._lastEventId = q;
      return this.getScope().captureEvent(A, {
        ...K,
        event_id: q
      }), q;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(A, K) {
      let {
        scope: q,
        client: Y
      } = this.getStackTop();
      if (!Y) return;
      let {
        beforeBreadcrumb: z = null,
        maxBreadcrumbs: w = Qmq
      } = Y.getOptions && Y.getOptions() || {};
      if (w <= 0) return;
      let J = {
          timestamp: lj.dateTimestampInSeconds(),
          ...A
        },
        O = z ? lj.consoleSandbox(() => z(J, K)) : J;
      if (O === null) return;
      if (Y.emit) Y.emit("beforeAddBreadcrumb", O, K);
      q.addBreadcrumb(O, w);
    }
    setUser(A) {
      this.getScope().setUser(A), this.getIsolationScope().setUser(A);
    }
    setTags(A) {
      this.getScope().setTags(A), this.getIsolationScope().setTags(A);
    }
    setExtras(A) {
      this.getScope().setExtras(A), this.getIsolationScope().setExtras(A);
    }
    setTag(A, K) {
      this.getScope().setTag(A, K), this.getIsolationScope().setTag(A, K);
    }
    setExtra(A, K) {
      this.getScope().setExtra(A, K), this.getIsolationScope().setExtra(A, K);
    }
    setContext(A, K) {
      this.getScope().setContext(A, K), this.getIsolationScope().setContext(A, K);
    }
    configureScope(A) {
      let {
        scope: K,
        client: q
      } = this.getStackTop();
      if (q) A(K);
    }
    run(A) {
      let K = VB1(this);
      try {
        A(this);
      } finally {
        VB1(K);
      }
    }
    getIntegration(A) {
      let K = this.getClient();
      if (!K) return null;
      try {
        return K.getIntegration(A);
      } catch (q) {
        return MB1.DEBUG_BUILD && lj.logger.warn(`Cannot retrieve integration ${A.id} from the current Hub`), null;
      }
    }
    startTransaction(A, K) {
      let q = this._callExtensionMethod("startTransaction", A, K);
      if (MB1.DEBUG_BUILD && !q) if (!this.getClient()) lj.logger.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'");else lj.logger.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`);
      return q;
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(A = !1) {
      if (A) return this.endSession();
      this._sendSessionUpdate();
    }
    endSession() {
      let K = this.getStackTop().scope,
        q = K.getSession();
      if (q) PB1.closeSession(q);
      this._sendSessionUpdate(), K.setSession();
    }
    startSession(A) {
      let {
          scope: K,
          client: q
        } = this.getStackTop(),
        {
          release: Y,
          environment: z = gmq.DEFAULT_ENVIRONMENT
        } = q && q.getOptions() || {},
        {
          userAgent: w
        } = lj.GLOBAL_OBJ.navigator || {},
        H = PB1.makeSession({
          release: Y,
          environment: z,
          user: K.getUser(),
          ...(w && {
            userAgent: w
          }),
          ...A
        }),
        J = K.getSession && K.getSession();
      if (J && J.status === "ok") PB1.updateSession(J, {
        status: "exited"
      });
      return this.endSession(), K.setSession(H), H;
    }
    shouldSendDefaultPii() {
      let A = this.getClient(),
        K = A && A.getOptions();
      return Boolean(K && K.sendDefaultPii);
    }
    _sendSessionUpdate() {
      let {
          scope: A,
          client: K
        } = this.getStackTop(),
        q = A.getSession();
      if (q && K && K.captureSession) K.captureSession(q);
    }
    _callExtensionMethod(A, ...K) {
      let Y = r1A().__SENTRY__;
      if (Y && Y.extensions && typeof Y.extensions[A] === "function") return Y.extensions[A].apply(this, K);
      MB1.DEBUG_BUILD && lj.logger.warn(`Extension method ${A} couldn't be found, doing nothing.`);
    }
  }
  function r1A() {
    return lj.GLOBAL_OBJ.__SENTRY__ = lj.GLOBAL_OBJ.__SENTRY__ || {
      extensions: {},
      hub: void 0
    }, lj.GLOBAL_OBJ;
  }
  function VB1(A) {
    let K = r1A(),
      q = NvA(K);
    return msA(K, A), q;
  }
  function FM8() {
    let A = r1A();
    if (A.__SENTRY__ && A.__SENTRY__.acs) {
      let K = A.__SENTRY__.acs.getCurrentHub();
      if (K) return K;
    }
    return QM8(A);
  }
  function Umq() {
    return FM8().getIsolationScope();
  }
  function QM8(A = r1A()) {
    if (!UM8(A) || NvA(A).isOlderThan(BsA)) msA(A, new TvA());
    return NvA(A);
  }
  function pmq(A, K = QM8()) {
    if (!UM8(A) || NvA(A).isOlderThan(BsA)) {
      let q = K.getClient(),
        Y = K.getScope(),
        z = K.getIsolationScope();
      msA(A, new TvA(q, Y.clone(), z.clone()));
    }
  }
  function dmq(A) {
    let K = r1A();
    K.__SENTRY__ = K.__SENTRY__ || {}, K.__SENTRY__.acs = A;
  }
  function cmq(A, K = {}) {
    let q = r1A();
    if (q.__SENTRY__ && q.__SENTRY__.acs) return q.__SENTRY__.acs.runWithAsyncContext(A, K);
    return A();
  }
  function UM8(A) {
    return !!(A && A.__SENTRY__ && A.__SENTRY__.hub);
  }
  function NvA(A) {
    return lj.getGlobalSingleton("hub", () => new TvA(), A);
  }
  function msA(A, K) {
    if (!A) return !1;
    let q = A.__SENTRY__ = A.__SENTRY__ || {};
    return q.hub = K, !0;
  }
  pM8.API_VERSION = BsA;
  pM8.Hub = TvA;
  pM8.ensureHubOnCarrier = pmq;
  pM8.getCurrentHub = FM8;
  pM8.getHubFromCarrier = NvA;
  pM8.getIsolationScope = Umq;
  pM8.getMainCarrier = r1A;
  pM8.makeMain = VB1;
  pM8.runWithAsyncContext = cmq;
  pM8.setAsyncContextStrategy = dmq;
  pM8.setHubOnCarrier = msA;
});

// Register to shared state
__$.Gb = Gb;
