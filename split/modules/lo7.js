// Module: lo7
// Dependencies: RK, P9, Q4A, Uo7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lo7 = v(do7 => {
  Object.defineProperty(do7, "__esModule", {
    value: !0
  });
  do7.SpanImpl = void 0;
  var ZL = __$.RK(),
    _j = __$.P9(),
    J3A = __$.Q4A(),
    s02 = __$.Uo7();
  class po7 {
    _spanContext;
    kind;
    parentSpanContext;
    attributes = {};
    links = [];
    events = [];
    startTime;
    resource;
    instrumentationScope;
    _droppedAttributesCount = 0;
    _droppedEventsCount = 0;
    _droppedLinksCount = 0;
    name;
    status = {
      code: ZL.SpanStatusCode.UNSET
    };
    endTime = [0, 0];
    _ended = !1;
    _duration = [-1, -1];
    _spanProcessor;
    _spanLimits;
    _attributeValueLengthLimit;
    _performanceStartTime;
    _performanceOffset;
    _startTimeProvided;
    constructor(A) {
      let K = Date.now();
      if (this._spanContext = A.spanContext, this._performanceStartTime = _j.otperformance.now(), this._performanceOffset = K - (this._performanceStartTime + (0, _j.getTimeOrigin)()), this._startTimeProvided = A.startTime != null, this._spanLimits = A.spanLimits, this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0, this._spanProcessor = A.spanProcessor, this.name = A.name, this.parentSpanContext = A.parentSpanContext, this.kind = A.kind, this.links = A.links || [], this.startTime = this._getTime(A.startTime ?? K), this.resource = A.resource, this.instrumentationScope = A.scope, A.attributes != null) this.setAttributes(A.attributes);
      this._spanProcessor.onStart(this, A.context);
    }
    spanContext() {
      return this._spanContext;
    }
    setAttribute(A, K) {
      if (K == null || this._isSpanEnded()) return this;
      if (A.length === 0) return ZL.diag.warn(`Invalid attribute key: ${A}`), this;
      if (!(0, _j.isAttributeValue)(K)) return ZL.diag.warn(`Invalid attribute value set for key: ${A}`), this;
      let {
        attributeCountLimit: q
      } = this._spanLimits;
      if (q !== void 0 && Object.keys(this.attributes).length >= q && !Object.prototype.hasOwnProperty.call(this.attributes, A)) return this._droppedAttributesCount++, this;
      return this.attributes[A] = this._truncateToSize(K), this;
    }
    setAttributes(A) {
      for (let [K, q] of Object.entries(A)) this.setAttribute(K, q);
      return this;
    }
    addEvent(A, K, q) {
      if (this._isSpanEnded()) return this;
      let {
        eventCountLimit: Y
      } = this._spanLimits;
      if (Y === 0) return ZL.diag.warn("No events allowed."), this._droppedEventsCount++, this;
      if (Y !== void 0 && this.events.length >= Y) {
        if (this._droppedEventsCount === 0) ZL.diag.debug("Dropping extra events.");
        this.events.shift(), this._droppedEventsCount++;
      }
      if ((0, _j.isTimeInput)(K)) {
        if (!(0, _j.isTimeInput)(q)) q = K;
        K = void 0;
      }
      let z = (0, _j.sanitizeAttributes)(K);
      return this.events.push({
        name: A,
        attributes: z,
        time: this._getTime(q),
        droppedAttributesCount: 0
      }), this;
    }
    addLink(A) {
      return this.links.push(A), this;
    }
    addLinks(A) {
      return this.links.push(...A), this;
    }
    setStatus(A) {
      if (this._isSpanEnded()) return this;
      if (this.status = {
        ...A
      }, this.status.message != null && typeof A.message !== "string") ZL.diag.warn(`Dropping invalid status.message of type '${typeof A.message}', expected 'string'`), delete this.status.message;
      return this;
    }
    updateName(A) {
      if (this._isSpanEnded()) return this;
      return this.name = A, this;
    }
    end(A) {
      if (this._isSpanEnded()) {
        ZL.diag.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);
        return;
      }
      if (this._ended = !0, this.endTime = this._getTime(A), this._duration = (0, _j.hrTimeDuration)(this.startTime, this.endTime), this._duration[0] < 0) ZL.diag.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0];
      if (this._droppedEventsCount > 0) ZL.diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`);
      this._spanProcessor.onEnd(this);
    }
    _getTime(A) {
      if (typeof A === "number" && A <= _j.otperformance.now()) return (0, _j.hrTime)(A + this._performanceOffset);
      if (typeof A === "number") return (0, _j.millisToHrTime)(A);
      if (A instanceof Date) return (0, _j.millisToHrTime)(A.getTime());
      if ((0, _j.isTimeInputHrTime)(A)) return A;
      if (this._startTimeProvided) return (0, _j.millisToHrTime)(Date.now());
      let K = _j.otperformance.now() - this._performanceStartTime;
      return (0, _j.addHrTimes)(this.startTime, (0, _j.millisToHrTime)(K));
    }
    isRecording() {
      return this._ended === !1;
    }
    recordException(A, K) {
      let q = {};
      if (typeof A === "string") q[J3A.ATTR_EXCEPTION_MESSAGE] = A;else if (A) {
        if (A.code) q[J3A.ATTR_EXCEPTION_TYPE] = A.code.toString();else if (A.name) q[J3A.ATTR_EXCEPTION_TYPE] = A.name;
        if (A.message) q[J3A.ATTR_EXCEPTION_MESSAGE] = A.message;
        if (A.stack) q[J3A.ATTR_EXCEPTION_STACKTRACE] = A.stack;
      }
      if (q[J3A.ATTR_EXCEPTION_TYPE] || q[J3A.ATTR_EXCEPTION_MESSAGE]) this.addEvent(s02.ExceptionEventName, q, K);else ZL.diag.warn(`Failed to record an exception ${A}`);
    }
    get duration() {
      return this._duration;
    }
    get ended() {
      return this._ended;
    }
    get droppedAttributesCount() {
      return this._droppedAttributesCount;
    }
    get droppedEventsCount() {
      return this._droppedEventsCount;
    }
    get droppedLinksCount() {
      return this._droppedLinksCount;
    }
    _isSpanEnded() {
      if (this._ended) {
        let A = Error(`Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
        ZL.diag.warn(`Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`, A);
      }
      return this._ended;
    }
    _truncateToLimitUtil(A, K) {
      if (A.length <= K) return A;
      return A.substring(0, K);
    }
    _truncateToSize(A) {
      let K = this._attributeValueLengthLimit;
      if (K <= 0) return ZL.diag.warn(`Attribute value limit must be positive, got ${K}`), A;
      if (typeof A === "string") return this._truncateToLimitUtil(A, K);
      if (Array.isArray(A)) return A.map(q => typeof q === "string" ? this._truncateToLimitUtil(q, K) : q);
      return A;
    }
  }
  do7.SpanImpl = po7;
});

// Register to shared state
__$.lo7 = lo7;
