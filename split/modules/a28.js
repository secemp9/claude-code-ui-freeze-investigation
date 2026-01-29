// Module: a28
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var a28 = v((WEz, o28) => {
  var r28 = CA("stream").Stream;
  o28.exports = LWq;
  function LWq(A) {
    return {
      ReadStream: K,
      WriteStream: q
    };
    function K(Y, z) {
      if (!(this instanceof K)) return new K(Y, z);
      r28.call(this);
      var w = this;
      this.path = Y, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 65536, z = z || {};
      var H = Object.keys(z);
      for (var J = 0, O = H.length; J < O; J++) {
        var X = H[J];
        this[X] = z[X];
      }
      if (this.encoding) this.setEncoding(this.encoding);
      if (this.start !== void 0) {
        if (typeof this.start !== "number") throw TypeError("start must be a Number");
        if (this.end === void 0) this.end = 1 / 0;else if (typeof this.end !== "number") throw TypeError("end must be a Number");
        if (this.start > this.end) throw Error("start must be <= end");
        this.pos = this.start;
      }
      if (this.fd !== null) {
        process.nextTick(function () {
          w._read();
        });
        return;
      }
      A.open(this.path, this.flags, this.mode, function ($, _) {
        if ($) {
          w.emit("error", $), w.readable = !1;
          return;
        }
        w.fd = _, w.emit("open", _), w._read();
      });
    }
    function q(Y, z) {
      if (!(this instanceof q)) return new q(Y, z);
      r28.call(this), this.path = Y, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, z = z || {};
      var w = Object.keys(z);
      for (var H = 0, J = w.length; H < J; H++) {
        var O = w[H];
        this[O] = z[O];
      }
      if (this.start !== void 0) {
        if (typeof this.start !== "number") throw TypeError("start must be a Number");
        if (this.start < 0) throw Error("start must be >= zero");
        this.pos = this.start;
      }
      if (this.busy = !1, this._queue = [], this.fd === null) this._open = A.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush();
    }
  }
});

// Register to shared state
__$.a28 = a28;
