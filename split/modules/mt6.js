// Module: mt6
// Dependencies: bt6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mt6 = v((h_z, Bt6) => {
  var neK = CA("util"),
    ut6 = CA("stream").Stream,
    xt6 = __$.bt6();
  Bt6.exports = mO;
  function mO() {
    this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2097152, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
  }
  neK.inherits(mO, ut6);
  mO.create = function (A) {
    var K = new this();
    A = A || {};
    for (var q in A) K[q] = A[q];
    return K;
  };
  mO.isStreamLike = function (A) {
    return typeof A !== "function" && typeof A !== "string" && typeof A !== "boolean" && typeof A !== "number" && !Buffer.isBuffer(A);
  };
  mO.prototype.append = function (A) {
    var K = mO.isStreamLike(A);
    if (K) {
      if (!(A instanceof xt6)) {
        var q = xt6.create(A, {
          maxDataSize: 1 / 0,
          pauseStream: this.pauseStreams
        });
        A.on("data", this._checkDataSize.bind(this)), A = q;
      }
      if (this._handleErrors(A), this.pauseStreams) A.pause();
    }
    return this._streams.push(A), this;
  };
  mO.prototype.pipe = function (A, K) {
    return ut6.prototype.pipe.call(this, A, K), this.resume(), A;
  };
  mO.prototype._getNext = function () {
    if (this._currentStream = null, this._insideLoop) {
      this._pendingNext = !0;
      return;
    }
    this._insideLoop = !0;
    try {
      do this._pendingNext = !1, this._realGetNext(); while (this._pendingNext);
    } finally {
      this._insideLoop = !1;
    }
  };
  mO.prototype._realGetNext = function () {
    var A = this._streams.shift();
    if (typeof A > "u") {
      this.end();
      return;
    }
    if (typeof A !== "function") {
      this._pipeNext(A);
      return;
    }
    var K = A;
    K(function (q) {
      var Y = mO.isStreamLike(q);
      if (Y) q.on("data", this._checkDataSize.bind(this)), this._handleErrors(q);
      this._pipeNext(q);
    }.bind(this));
  };
  mO.prototype._pipeNext = function (A) {
    this._currentStream = A;
    var K = mO.isStreamLike(A);
    if (K) {
      A.on("end", this._getNext.bind(this)), A.pipe(this, {
        end: !1
      });
      return;
    }
    var q = A;
    this.write(q), this._getNext();
  };
  mO.prototype._handleErrors = function (A) {
    var K = this;
    A.on("error", function (q) {
      K._emitError(q);
    });
  };
  mO.prototype.write = function (A) {
    this.emit("data", A);
  };
  mO.prototype.pause = function () {
    if (!this.pauseStreams) return;
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function") this._currentStream.pause();
    this.emit("pause");
  };
  mO.prototype.resume = function () {
    if (!this._released) this._released = !0, this.writable = !0, this._getNext();
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function") this._currentStream.resume();
    this.emit("resume");
  };
  mO.prototype.end = function () {
    this._reset(), this.emit("end");
  };
  mO.prototype.destroy = function () {
    this._reset(), this.emit("close");
  };
  mO.prototype._reset = function () {
    this.writable = !1, this._streams = [], this._currentStream = null;
  };
  mO.prototype._checkDataSize = function () {
    if (this._updateDataSize(), this.dataSize <= this.maxDataSize) return;
    var A = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(Error(A));
  };
  mO.prototype._updateDataSize = function () {
    this.dataSize = 0;
    var A = this;
    if (this._streams.forEach(function (K) {
      if (!K.dataSize) return;
      A.dataSize += K.dataSize;
    }), this._currentStream && this._currentStream.dataSize) this.dataSize += this._currentStream.dataSize;
  };
  mO.prototype._emitError = function (A) {
    this._reset(), this.emit("error", A);
  };
});

// Register to shared state
__$.mt6 = mt6;
