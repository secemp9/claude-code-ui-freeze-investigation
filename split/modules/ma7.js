// Module: ma7
// Dependencies: RK, P9, lo7, LL6, RL6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ma7 = v(ua7 => {
  Object.defineProperty(ua7, "__esModule", {
    value: !0
  });
  ua7.Tracer = void 0;
  var VW = __$.RK(),
    wM1 = __$.P9(),
    WX2 = __$.lo7(),
    DX2 = __$.LL6(),
    jX2 = __$.RL6();
  class xa7 {
    _sampler;
    _generalLimits;
    _spanLimits;
    _idGenerator;
    instrumentationScope;
    _resource;
    _spanProcessor;
    constructor(A, K, q, Y) {
      let z = (0, DX2.mergeConfig)(K);
      this._sampler = z.sampler, this._generalLimits = z.generalLimits, this._spanLimits = z.spanLimits, this._idGenerator = K.idGenerator || new jX2.RandomIdGenerator(), this._resource = q, this._spanProcessor = Y, this.instrumentationScope = A;
    }
    startSpan(A, K = {}, q = VW.context.active()) {
      if (K.root) q = VW.trace.deleteSpan(q);
      let Y = VW.trace.getSpan(q);
      if ((0, wM1.isTracingSuppressed)(q)) return VW.diag.debug("Instrumentation suppressed, returning Noop Span"), VW.trace.wrapSpanContext(VW.INVALID_SPAN_CONTEXT);
      let z = Y?.spanContext(),
        w = this._idGenerator.generateSpanId(),
        H,
        J,
        O;
      if (!z || !VW.trace.isSpanContextValid(z)) J = this._idGenerator.generateTraceId();else J = z.traceId, O = z.traceState, H = z;
      let X = K.kind ?? VW.SpanKind.INTERNAL,
        $ = (K.links ?? []).map(M => {
          return {
            context: M.context,
            attributes: (0, wM1.sanitizeAttributes)(M.attributes)
          };
        }),
        _ = (0, wM1.sanitizeAttributes)(K.attributes),
        G = this._sampler.shouldSample(q, J, A, X, _, $);
      O = G.traceState ?? O;
      let Z = G.decision === VW.SamplingDecision.RECORD_AND_SAMPLED ? VW.TraceFlags.SAMPLED : VW.TraceFlags.NONE,
        W = {
          traceId: J,
          spanId: w,
          traceFlags: Z,
          traceState: O
        };
      if (G.decision === VW.SamplingDecision.NOT_RECORD) return VW.diag.debug("Recording is off, propagating context in a non-recording span"), VW.trace.wrapSpanContext(W);
      let D = (0, wM1.sanitizeAttributes)(Object.assign(_, G.attributes));
      return new WX2.SpanImpl({
        resource: this._resource,
        scope: this.instrumentationScope,
        context: q,
        spanContext: W,
        name: A,
        kind: X,
        links: $,
        parentSpanContext: H,
        attributes: D,
        startTime: K.startTime,
        spanProcessor: this._spanProcessor,
        spanLimits: this._spanLimits
      });
    }
    startActiveSpan(A, K, q, Y) {
      let z, w, H;
      if (arguments.length < 2) return;else if (arguments.length === 2) H = K;else if (arguments.length === 3) z = K, H = q;else z = K, w = q, H = Y;
      let J = w ?? VW.context.active(),
        O = this.startSpan(A, z, J),
        X = VW.trace.setSpan(J, O);
      return VW.context.with(X, H, void 0, O);
    }
    getGeneralLimits() {
      return this._generalLimits;
    }
    getSpanLimits() {
      return this._spanLimits;
    }
  }
  ua7.Tracer = xa7;
});

// Register to shared state
__$.ma7 = ma7;
