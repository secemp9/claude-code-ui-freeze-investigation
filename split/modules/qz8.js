// Module: qz8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qz8 = v((MEz, Kz8) => {
  function yE(A, K) {
    if (typeof K === "boolean") K = {
      forever: K
    };
    if (this._originalTimeouts = JSON.parse(JSON.stringify(A)), this._timeouts = A, this._options = K || {}, this._maxRetryTime = K && K.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._options.forever) this._cachedTimeouts = this._timeouts.slice(0);
  }
  Kz8.exports = yE;
  yE.prototype.reset = function () {
    this._attempts = 1, this._timeouts = this._originalTimeouts;
  };
  yE.prototype.stop = function () {
    if (this._timeout) clearTimeout(this._timeout);
    this._timeouts = [], this._cachedTimeouts = null;
  };
  yE.prototype.retry = function (A) {
    if (this._timeout) clearTimeout(this._timeout);
    if (!A) return !1;
    var K = new Date().getTime();
    if (A && K - this._operationStart >= this._maxRetryTime) return this._errors.unshift(Error("RetryOperation timeout occurred")), !1;
    this._errors.push(A);
    var q = this._timeouts.shift();
    if (q === void 0) if (this._cachedTimeouts) this._errors.splice(this._errors.length - 1, this._errors.length), this._timeouts = this._cachedTimeouts.slice(0), q = this._timeouts.shift();else return !1;
    var Y = this,
      z = setTimeout(function () {
        if (Y._attempts++, Y._operationTimeoutCb) {
          if (Y._timeout = setTimeout(function () {
            Y._operationTimeoutCb(Y._attempts);
          }, Y._operationTimeout), Y._options.unref) Y._timeout.unref();
        }
        Y._fn(Y._attempts);
      }, q);
    if (this._options.unref) z.unref();
    return !0;
  };
  yE.prototype.attempt = function (A, K) {
    if (this._fn = A, K) {
      if (K.timeout) this._operationTimeout = K.timeout;
      if (K.cb) this._operationTimeoutCb = K.cb;
    }
    var q = this;
    if (this._operationTimeoutCb) this._timeout = setTimeout(function () {
      q._operationTimeoutCb();
    }, q._operationTimeout);
    this._operationStart = new Date().getTime(), this._fn(this._attempts);
  };
  yE.prototype.try = function (A) {
    console.log("Using RetryOperation.try() is deprecated"), this.attempt(A);
  };
  yE.prototype.start = function (A) {
    console.log("Using RetryOperation.start() is deprecated"), this.attempt(A);
  };
  yE.prototype.start = yE.prototype.try;
  yE.prototype.errors = function () {
    return this._errors;
  };
  yE.prototype.attempts = function () {
    return this._attempts;
  };
  yE.prototype.mainError = function () {
    if (this._errors.length === 0) return null;
    var A = {},
      K = null,
      q = 0;
    for (var Y = 0; Y < this._errors.length; Y++) {
      var z = this._errors[Y],
        w = z.message,
        H = (A[w] || 0) + 1;
      if (A[w] = H, H >= q) K = z, q = H;
    }
    return K;
  };
});

// Register to shared state
__$.qz8 = qz8;
