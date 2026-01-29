// Module: rsA
// Dependencies: H8, FX, Gb, kvA, CvA, qV, n1A, lsA, csA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rsA = v(GP8 => {
  Object.defineProperty(GP8, "__esModule", {
    value: !0
  });
  var jHA = __$.H8(),
    isA = __$.FX(),
    JFq = __$.Gb(),
    OFq = __$.kvA(),
    LvA = __$.CvA(),
    nsA = __$.qV(),
    XP8 = __$.n1A(),
    $P8 = __$.lsA(),
    XFq = __$.csA();
  class _P8 extends $P8.Span {
    constructor(A, K) {
      super(A);
      this._contexts = {}, this._hub = K || JFq.getCurrentHub(), this._name = A.name || "", this._metadata = {
        ...A.metadata
      }, this._trimEnd = A.trimEnd, this.transaction = this;
      let q = this._metadata.dynamicSamplingContext;
      if (q) this._frozenDynamicSamplingContext = {
        ...q
      };
    }
    get name() {
      return this._name;
    }
    set name(A) {
      this.setName(A);
    }
    get metadata() {
      return {
        source: "custom",
        spanMetadata: {},
        ...this._metadata,
        ...(this._attributes[LvA.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && {
          source: this._attributes[LvA.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]
        }),
        ...(this._attributes[LvA.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] && {
          sampleRate: this._attributes[LvA.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]
        })
      };
    }
    set metadata(A) {
      this._metadata = A;
    }
    setName(A, K = "custom") {
      this._name = A, this.setAttribute(LvA.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, K);
    }
    updateName(A) {
      return this._name = A, this;
    }
    initSpanRecorder(A = 1000) {
      if (!this.spanRecorder) this.spanRecorder = new $P8.SpanRecorder(A);
      this.spanRecorder.add(this);
    }
    setContext(A, K) {
      if (K === null) delete this._contexts[A];else this._contexts[A] = K;
    }
    setMeasurement(A, K, q = "") {
      this._measurements[A] = {
        value: K,
        unit: q
      };
    }
    setMetadata(A) {
      this._metadata = {
        ...this._metadata,
        ...A
      };
    }
    end(A) {
      let K = nsA.spanTimeInputToSeconds(A),
        q = this._finishTransaction(K);
      if (!q) return;
      return this._hub.captureEvent(q);
    }
    toContext() {
      let A = super.toContext();
      return jHA.dropUndefinedKeys({
        ...A,
        name: this._name,
        trimEnd: this._trimEnd
      });
    }
    updateWithContext(A) {
      return super.updateWithContext(A), this._name = A.name || "", this._trimEnd = A.trimEnd, this;
    }
    getDynamicSamplingContext() {
      return XP8.getDynamicSamplingContextFromSpan(this);
    }
    setHub(A) {
      this._hub = A;
    }
    getProfileId() {
      if (this._contexts !== void 0 && this._contexts.profile !== void 0) return this._contexts.profile.profile_id;
      return;
    }
    _finishTransaction(A) {
      if (this._endTime !== void 0) return;
      if (!this._name) isA.DEBUG_BUILD && jHA.logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>";
      super.end(A);
      let K = this._hub.getClient();
      if (K && K.emit) K.emit("finishTransaction", this);
      if (this._sampled !== !0) {
        if (isA.DEBUG_BUILD && jHA.logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), K) K.recordDroppedEvent("sample_rate", "transaction");
        return;
      }
      let q = this.spanRecorder ? this.spanRecorder.spans.filter(X => X !== this && nsA.spanToJSON(X).timestamp) : [];
      if (this._trimEnd && q.length > 0) {
        let X = q.map($ => nsA.spanToJSON($).timestamp).filter(Boolean);
        this._endTime = X.reduce(($, _) => {
          return $ > _ ? $ : _;
        });
      }
      let {
          scope: Y,
          isolationScope: z
        } = XFq.getCapturedScopesOnSpan(this),
        {
          metadata: w
        } = this,
        {
          source: H
        } = w,
        J = {
          contexts: {
            ...this._contexts,
            trace: nsA.spanToTraceContext(this)
          },
          spans: q,
          start_timestamp: this._startTime,
          tags: this.tags,
          timestamp: this._endTime,
          transaction: this._name,
          type: "transaction",
          sdkProcessingMetadata: {
            ...w,
            capturedSpanScope: Y,
            capturedSpanIsolationScope: z,
            ...jHA.dropUndefinedKeys({
              dynamicSamplingContext: XP8.getDynamicSamplingContextFromSpan(this)
            })
          },
          _metrics_summary: OFq.getMetricSummaryJsonForSpan(this),
          ...(H && {
            transaction_info: {
              source: H
            }
          })
        };
      if (Object.keys(this._measurements).length > 0) isA.DEBUG_BUILD && jHA.logger.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), J.measurements = this._measurements;
      return isA.DEBUG_BUILD && jHA.logger.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), J;
    }
  }
  GP8.Transaction = _P8;
});

// Register to shared state
__$.rsA = rsA;
