// Module: gg6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gg6 = v((SFJ, oDK) => {
  var IQ2 = CA("util"),
    rDK = CA("stream"),
    qh = oDK.exports = function () {
      rDK.call(this), this._buffers = [], this._buffered = 0, this._reads = [], this._paused = !1, this._encoding = "utf8", this.writable = !0;
    };
  IQ2.inherits(qh, rDK);
  qh.prototype.read = function (A, K) {
    this._reads.push({
      length: Math.abs(A),
      allowLess: A < 0,
      func: K
    }), process.nextTick(function () {
      if (this._process(), this._paused && this._reads && this._reads.length > 0) this._paused = !1, this.emit("drain");
    }.bind(this));
  };
  qh.prototype.write = function (A, K) {
    if (!this.writable) return this.emit("error", Error("Stream not writable")), !1;
    let q;
    if (Buffer.isBuffer(A)) q = A;else q = Buffer.from(A, K || this._encoding);
    if (this._buffers.push(q), this._buffered += q.length, this._process(), this._reads && this._reads.length === 0) this._paused = !0;
    return this.writable && !this._paused;
  };
  qh.prototype.end = function (A, K) {
    if (A) this.write(A, K);
    if (this.writable = !1, !this._buffers) return;
    if (this._buffers.length === 0) this._end();else this._buffers.push(null), this._process();
  };
  qh.prototype.destroySoon = qh.prototype.end;
  qh.prototype._end = function () {
    if (this._reads.length > 0) this.emit("error", Error("Unexpected end of input"));
    this.destroy();
  };
  qh.prototype.destroy = function () {
    if (!this._buffers) return;
    this.writable = !1, this._reads = null, this._buffers = null, this.emit("close");
  };
  qh.prototype._processReadAllowingLess = function (A) {
    this._reads.shift();
    let K = this._buffers[0];
    if (K.length > A.length) this._buffered -= A.length, this._buffers[0] = K.slice(A.length), A.func.call(this, K.slice(0, A.length));else this._buffered -= K.length, this._buffers.shift(), A.func.call(this, K);
  };
  qh.prototype._processRead = function (A) {
    this._reads.shift();
    let K = 0,
      q = 0,
      Y = Buffer.alloc(A.length);
    while (K < A.length) {
      let z = this._buffers[q++],
        w = Math.min(z.length, A.length - K);
      if (z.copy(Y, K, 0, w), K += w, w !== z.length) this._buffers[--q] = z.slice(w);
    }
    if (q > 0) this._buffers.splice(0, q);
    this._buffered -= A.length, A.func.call(this, Y);
  };
  qh.prototype._process = function () {
    try {
      while (this._buffered > 0 && this._reads && this._reads.length > 0) {
        let A = this._reads[0];
        if (A.allowLess) this._processReadAllowingLess(A);else if (this._buffered >= A.length) this._processRead(A);else break;
      }
      if (this._buffers && !this.writable) this._end();
    } catch (A) {
      this.emit("error", A);
    }
  };
});

// Register to shared state
__$.gg6 = gg6;
