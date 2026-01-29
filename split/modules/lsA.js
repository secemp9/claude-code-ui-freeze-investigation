// Module: lsA
// Dependencies: H8, FX, kvA, CvA, $HA, qV, ZHA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lsA = v(OP8 => {
  Object.defineProperty(OP8, "__esModule", {
    value: !0
  });
  var o1A = __$.H8(),
    wP8 = __$.FX(),
    YFq = __$.kvA(),
    AF = __$.CvA(),
    HP8 = __$.$HA(),
    DHA = __$.qV(),
    zFq = __$.ZHA();
  class JP8 {
    constructor(A = 1000) {
      this._maxlen = A, this.spans = [];
    }
    add(A) {
      if (this.spans.length > this._maxlen) A.spanRecorder = void 0;else this.spans.push(A);
    }
  }
  class CB1 {
    constructor(A = {}) {
      if (this._traceId = A.traceId || o1A.uuid4(), this._spanId = A.spanId || o1A.uuid4().substring(16), this._startTime = A.startTimestamp || o1A.timestampInSeconds(), this.tags = A.tags ? {
        ...A.tags
      } : {}, this.data = A.data ? {
        ...A.data
      } : {}, this.instrumenter = A.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
        [AF.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: A.origin || "manual",
        [AF.SEMANTIC_ATTRIBUTE_SENTRY_OP]: A.op,
        ...A.attributes
      }), this._name = A.name || A.description, A.parentSpanId) this._parentSpanId = A.parentSpanId;
      if ("sampled" in A) this._sampled = A.sampled;
      if (A.status) this._status = A.status;
      if (A.endTimestamp) this._endTime = A.endTimestamp;
      if (A.exclusiveTime !== void 0) this._exclusiveTime = A.exclusiveTime;
      this._measurements = A.measurements ? {
        ...A.measurements
      } : {};
    }
    get name() {
      return this._name || "";
    }
    set name(A) {
      this.updateName(A);
    }
    get description() {
      return this._name;
    }
    set description(A) {
      this._name = A;
    }
    get traceId() {
      return this._traceId;
    }
    set traceId(A) {
      this._traceId = A;
    }
    get spanId() {
      return this._spanId;
    }
    set spanId(A) {
      this._spanId = A;
    }
    set parentSpanId(A) {
      this._parentSpanId = A;
    }
    get parentSpanId() {
      return this._parentSpanId;
    }
    get sampled() {
      return this._sampled;
    }
    set sampled(A) {
      this._sampled = A;
    }
    get attributes() {
      return this._attributes;
    }
    set attributes(A) {
      this._attributes = A;
    }
    get startTimestamp() {
      return this._startTime;
    }
    set startTimestamp(A) {
      this._startTime = A;
    }
    get endTimestamp() {
      return this._endTime;
    }
    set endTimestamp(A) {
      this._endTime = A;
    }
    get status() {
      return this._status;
    }
    set status(A) {
      this._status = A;
    }
    get op() {
      return this._attributes[AF.SEMANTIC_ATTRIBUTE_SENTRY_OP];
    }
    set op(A) {
      this.setAttribute(AF.SEMANTIC_ATTRIBUTE_SENTRY_OP, A);
    }
    get origin() {
      return this._attributes[AF.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
    }
    set origin(A) {
      this.setAttribute(AF.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, A);
    }
    spanContext() {
      let {
        _spanId: A,
        _traceId: K,
        _sampled: q
      } = this;
      return {
        spanId: A,
        traceId: K,
        traceFlags: q ? DHA.TRACE_FLAG_SAMPLED : DHA.TRACE_FLAG_NONE
      };
    }
    startChild(A) {
      let K = new CB1({
        ...A,
        parentSpanId: this._spanId,
        sampled: this._sampled,
        traceId: this._traceId
      });
      if (K.spanRecorder = this.spanRecorder, K.spanRecorder) K.spanRecorder.add(K);
      let q = HP8.getRootSpan(this);
      if (K.transaction = q, wP8.DEBUG_BUILD && q) {
        let Y = A && A.op || "< unknown op >",
          z = DHA.spanToJSON(K).description || "< unknown name >",
          w = q.spanContext().spanId,
          H = `[Tracing] Starting '${Y}' span on transaction '${z}' (${w}).`;
        o1A.logger.log(H), this._logMessage = H;
      }
      return K;
    }
    setTag(A, K) {
      return this.tags = {
        ...this.tags,
        [A]: K
      }, this;
    }
    setData(A, K) {
      return this.data = {
        ...this.data,
        [A]: K
      }, this;
    }
    setAttribute(A, K) {
      if (K === void 0) delete this._attributes[A];else this._attributes[A] = K;
    }
    setAttributes(A) {
      Object.keys(A).forEach(K => this.setAttribute(K, A[K]));
    }
    setStatus(A) {
      return this._status = A, this;
    }
    setHttpStatus(A) {
      return zFq.setHttpStatus(this, A), this;
    }
    setName(A) {
      this.updateName(A);
    }
    updateName(A) {
      return this._name = A, this;
    }
    isSuccess() {
      return this._status === "ok";
    }
    finish(A) {
      return this.end(A);
    }
    end(A) {
      if (this._endTime) return;
      let K = HP8.getRootSpan(this);
      if (wP8.DEBUG_BUILD && K && K.spanContext().spanId !== this._spanId) {
        let q = this._logMessage;
        if (q) o1A.logger.log(q.replace("Starting", "Finishing"));
      }
      this._endTime = DHA.spanTimeInputToSeconds(A);
    }
    toTraceparent() {
      return DHA.spanToTraceHeader(this);
    }
    toContext() {
      return o1A.dropUndefinedKeys({
        data: this._getData(),
        description: this._name,
        endTimestamp: this._endTime,
        op: this.op,
        parentSpanId: this._parentSpanId,
        sampled: this._sampled,
        spanId: this._spanId,
        startTimestamp: this._startTime,
        status: this._status,
        tags: this.tags,
        traceId: this._traceId
      });
    }
    updateWithContext(A) {
      return this.data = A.data || {}, this._name = A.name || A.description, this._endTime = A.endTimestamp, this.op = A.op, this._parentSpanId = A.parentSpanId, this._sampled = A.sampled, this._spanId = A.spanId || this._spanId, this._startTime = A.startTimestamp || this._startTime, this._status = A.status, this.tags = A.tags || {}, this._traceId = A.traceId || this._traceId, this;
    }
    getTraceContext() {
      return DHA.spanToTraceContext(this);
    }
    getSpanJSON() {
      return o1A.dropUndefinedKeys({
        data: this._getData(),
        description: this._name,
        op: this._attributes[AF.SEMANTIC_ATTRIBUTE_SENTRY_OP],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: this._status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[AF.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
        _metrics_summary: YFq.getMetricSummaryJsonForSpan(this),
        profile_id: this._attributes[AF.SEMANTIC_ATTRIBUTE_PROFILE_ID],
        exclusive_time: this._exclusiveTime,
        measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0
      });
    }
    isRecording() {
      return !this._endTime && !!this._sampled;
    }
    toJSON() {
      return this.getSpanJSON();
    }
    _getData() {
      let {
          data: A,
          _attributes: K
        } = this,
        q = Object.keys(A).length > 0,
        Y = Object.keys(K).length > 0;
      if (!q && !Y) return;
      if (q && Y) return {
        ...A,
        ...K
      };
      return q ? A : K;
    }
  }
  OP8.Span = CB1;
  OP8.SpanRecorder = JP8;
});

// Register to shared state
__$.lsA = lsA;
