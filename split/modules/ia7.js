// Module: ia7
// Dependencies: P9, eXA, ma7, CL6, Ua7, LL6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ia7 = v(ca7 => {
  Object.defineProperty(ca7, "__esModule", {
    value: !0
  });
  ca7.BasicTracerProvider = ca7.ForceFlushState = void 0;
  var PX2 = __$.P9(),
    VX2 = __$.eXA(),
    fX2 = __$.ma7(),
    NX2 = __$.CL6(),
    TX2 = __$.Ua7(),
    vX2 = __$.LL6(),
    hjA;
  (function (A) {
    A[A.resolved = 0] = "resolved", A[A.timeout = 1] = "timeout", A[A.error = 2] = "error", A[A.unresolved = 3] = "unresolved";
  })(hjA = ca7.ForceFlushState || (ca7.ForceFlushState = {}));
  class da7 {
    _config;
    _tracers = new Map();
    _resource;
    _activeSpanProcessor;
    constructor(A = {}) {
      let K = (0, PX2.merge)({}, (0, NX2.loadDefaultConfig)(), (0, vX2.reconfigureLimits)(A));
      this._resource = K.resource ?? (0, VX2.defaultResource)(), this._config = Object.assign({}, K, {
        resource: this._resource
      });
      let q = [];
      if (A.spanProcessors?.length) q.push(...A.spanProcessors);
      this._activeSpanProcessor = new TX2.MultiSpanProcessor(q);
    }
    getTracer(A, K, q) {
      let Y = `${A}@${K || ""}:${q?.schemaUrl || ""}`;
      if (!this._tracers.has(Y)) this._tracers.set(Y, new fX2.Tracer({
        name: A,
        version: K,
        schemaUrl: q?.schemaUrl
      }, this._config, this._resource, this._activeSpanProcessor));
      return this._tracers.get(Y);
    }
    forceFlush() {
      let A = this._config.forceFlushTimeoutMillis,
        K = this._activeSpanProcessor._spanProcessors.map(q => {
          return new Promise(Y => {
            let z,
              w = setTimeout(() => {
                Y(Error(`Span processor did not completed within timeout period of ${A} ms`)), z = hjA.timeout;
              }, A);
            q.forceFlush().then(() => {
              if (clearTimeout(w), z !== hjA.timeout) z = hjA.resolved, Y(z);
            }).catch(H => {
              clearTimeout(w), z = hjA.error, Y(H);
            });
          });
        });
      return new Promise((q, Y) => {
        Promise.all(K).then(z => {
          let w = z.filter(H => H !== hjA.resolved);
          if (w.length > 0) Y(w);else q();
        }).catch(z => Y([z]));
      });
    }
    shutdown() {
      return this._activeSpanProcessor.shutdown();
    }
  }
  ca7.BasicTracerProvider = da7;
});

// Register to shared state
__$.ia7 = ia7;
