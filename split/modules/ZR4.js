// Module: ZR4
// Dependencies: RK, P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZR4 = v(_R4 => {
  Object.defineProperty(_R4, "__esModule", {
    value: !0
  });
  _R4.LogRecordImpl = void 0;
  var i4A = __$.RK(),
    $91 = __$.P9();
  class $R4 {
    hrTime;
    hrTimeObserved;
    spanContext;
    resource;
    instrumentationScope;
    attributes = {};
    _severityText;
    _severityNumber;
    _body;
    _eventName;
    totalAttributesCount = 0;
    _isReadonly = !1;
    _logRecordLimits;
    set severityText(A) {
      if (this._isLogRecordReadonly()) return;
      this._severityText = A;
    }
    get severityText() {
      return this._severityText;
    }
    set severityNumber(A) {
      if (this._isLogRecordReadonly()) return;
      this._severityNumber = A;
    }
    get severityNumber() {
      return this._severityNumber;
    }
    set body(A) {
      if (this._isLogRecordReadonly()) return;
      this._body = A;
    }
    get body() {
      return this._body;
    }
    get eventName() {
      return this._eventName;
    }
    set eventName(A) {
      if (this._isLogRecordReadonly()) return;
      this._eventName = A;
    }
    get droppedAttributesCount() {
      return this.totalAttributesCount - Object.keys(this.attributes).length;
    }
    constructor(A, K, q) {
      let {
          timestamp: Y,
          observedTimestamp: z,
          eventName: w,
          severityNumber: H,
          severityText: J,
          body: O,
          attributes: X = {},
          context: $
        } = q,
        _ = Date.now();
      if (this.hrTime = (0, $91.timeInputToHrTime)(Y ?? _), this.hrTimeObserved = (0, $91.timeInputToHrTime)(z ?? _), $) {
        let G = i4A.trace.getSpanContext($);
        if (G && i4A.isSpanContextValid(G)) this.spanContext = G;
      }
      this.severityNumber = H, this.severityText = J, this.body = O, this.resource = A.resource, this.instrumentationScope = K, this._logRecordLimits = A.logRecordLimits, this._eventName = w, this.setAttributes(X);
    }
    setAttribute(A, K) {
      if (this._isLogRecordReadonly()) return this;
      if (K === null) return this;
      if (A.length === 0) return i4A.diag.warn(`Invalid attribute key: ${A}`), this;
      if (!(0, $91.isAttributeValue)(K) && !(typeof K === "object" && !Array.isArray(K) && Object.keys(K).length > 0)) return i4A.diag.warn(`Invalid attribute value set for key: ${A}`), this;
      if (this.totalAttributesCount += 1, Object.keys(this.attributes).length >= this._logRecordLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, A)) {
        if (this.droppedAttributesCount === 1) i4A.diag.warn("Dropping extra attributes.");
        return this;
      }
      if ((0, $91.isAttributeValue)(K)) this.attributes[A] = this._truncateToSize(K);else this.attributes[A] = K;
      return this;
    }
    setAttributes(A) {
      for (let [K, q] of Object.entries(A)) this.setAttribute(K, q);
      return this;
    }
    setBody(A) {
      return this.body = A, this;
    }
    setEventName(A) {
      return this.eventName = A, this;
    }
    setSeverityNumber(A) {
      return this.severityNumber = A, this;
    }
    setSeverityText(A) {
      return this.severityText = A, this;
    }
    _makeReadonly() {
      this._isReadonly = !0;
    }
    _truncateToSize(A) {
      let K = this._logRecordLimits.attributeValueLengthLimit;
      if (K <= 0) return i4A.diag.warn(`Attribute value limit must be positive, got ${K}`), A;
      if (typeof A === "string") return this._truncateToLimitUtil(A, K);
      if (Array.isArray(A)) return A.map(q => typeof q === "string" ? this._truncateToLimitUtil(q, K) : q);
      return A;
    }
    _truncateToLimitUtil(A, K) {
      if (A.length <= K) return A;
      return A.substring(0, K);
    }
    _isLogRecordReadonly() {
      if (this._isReadonly) i4A.diag.warn("Can not execute the operation on emitted log record");
      return this._isReadonly;
    }
  }
  _R4.LogRecordImpl = $R4;
});

// Register to shared state
__$.ZR4 = ZR4;
