// Module: bt6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bt6 = v((S_z, ht6) => {
  var St6 = CA("stream").Stream,
    ieK = CA("util");
  ht6.exports = LR;
  function LR() {
    this.source = null, this.dataSize = 0, this.maxDataSize = 1048576, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
  }
  ieK.inherits(LR, St6);
  LR.create = function (A, K) {
    var q = new this();
    K = K || {};
    for (var Y in K) q[Y] = K[Y];
    q.source = A;
    var z = A.emit;
    if (A.emit = function () {
      return q._handleEmit(arguments), z.apply(A, arguments);
    }, A.on("error", function () {}), q.pauseStream) A.pause();
    return q;
  };
  Object.defineProperty(LR.prototype, "readable", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return this.source.readable;
    }
  });
  LR.prototype.setEncoding = function () {
    return this.source.setEncoding.apply(this.source, arguments);
  };
  LR.prototype.resume = function () {
    if (!this._released) this.release();
    this.source.resume();
  };
  LR.prototype.pause = function () {
    this.source.pause();
  };
  LR.prototype.release = function () {
    this._released = !0, this._bufferedEvents.forEach(function (A) {
      this.emit.apply(this, A);
    }.bind(this)), this._bufferedEvents = [];
  };
  LR.prototype.pipe = function () {
    var A = St6.prototype.pipe.apply(this, arguments);
    return this.resume(), A;
  };
  LR.prototype._handleEmit = function (A) {
    if (this._released) {
      this.emit.apply(this, A);
      return;
    }
    if (A[0] === "data") this.dataSize += A[1].length, this._checkIfMaxDataSizeExceeded();
    this._bufferedEvents.push(A);
  };
  LR.prototype._checkIfMaxDataSizeExceeded = function () {
    if (this._maxDataSizeExceeded) return;
    if (this.dataSize <= this.maxDataSize) return;
    this._maxDataSizeExceeded = !0;
    var A = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", Error(A));
  };
});

// Register to shared state
__$.bt6 = bt6;
