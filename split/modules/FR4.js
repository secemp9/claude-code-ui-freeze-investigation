// Module: FR4
// Dependencies: RK, l56, eXA, P9, MR4, fR4, hR4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FR4 = v(BR4 => {
  Object.defineProperty(BR4, "__esModule", {
    value: !0
  });
  BR4.LoggerProvider = BR4.DEFAULT_LOGGER_NAME = void 0;
  var _91 = __$.RK(),
    t_9 = __$.l56(),
    e_9 = __$.eXA(),
    bR4 = __$.P9(),
    AG9 = __$.MR4(),
    xR4 = __$.fR4(),
    KG9 = __$.hR4();
  BR4.DEFAULT_LOGGER_NAME = "unknown";
  class uR4 {
    _shutdownOnce;
    _sharedState;
    constructor(A = {}) {
      let K = (0, bR4.merge)({}, (0, xR4.loadDefaultConfig)(), A),
        q = A.resource ?? (0, e_9.defaultResource)();
      this._sharedState = new KG9.LoggerProviderSharedState(q, K.forceFlushTimeoutMillis, (0, xR4.reconfigureLimits)(K.logRecordLimits), A?.processors ?? []), this._shutdownOnce = new bR4.BindOnceFuture(this._shutdown, this);
    }
    getLogger(A, K, q) {
      if (this._shutdownOnce.isCalled) return _91.diag.warn("A shutdown LoggerProvider cannot provide a Logger"), t_9.NOOP_LOGGER;
      if (!A) _91.diag.warn("Logger requested without instrumentation scope name.");
      let Y = A || BR4.DEFAULT_LOGGER_NAME,
        z = `${Y}@${K || ""}:${q?.schemaUrl || ""}`;
      if (!this._sharedState.loggers.has(z)) this._sharedState.loggers.set(z, new AG9.Logger({
        name: Y,
        version: K,
        schemaUrl: q?.schemaUrl
      }, this._sharedState));
      return this._sharedState.loggers.get(z);
    }
    forceFlush() {
      if (this._shutdownOnce.isCalled) return _91.diag.warn("invalid attempt to force flush after LoggerProvider shutdown"), this._shutdownOnce.promise;
      return this._sharedState.activeProcessor.forceFlush();
    }
    shutdown() {
      if (this._shutdownOnce.isCalled) return _91.diag.warn("shutdown may only be called once per LoggerProvider"), this._shutdownOnce.promise;
      return this._shutdownOnce.call();
    }
    _shutdown() {
      return this._sharedState.activeProcessor.shutdown();
    }
  }
  BR4.LoggerProvider = uR4;
});

// Register to shared state
__$.FR4 = FR4;
