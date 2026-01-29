// Module: zg7
// Dependencies: kB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zg7 = v((GTH, Yg7) => {
  Yg7.exports = QG;
  var ggA = __$.kB();
  function QG(A, K) {
    this.lo = A >>> 0, this.hi = K >>> 0;
  }
  var c5A = QG.zero = new QG(0, 0);
  c5A.toNumber = function () {
    return 0;
  };
  c5A.zzEncode = c5A.zzDecode = function () {
    return this;
  };
  c5A.length = function () {
    return 1;
  };
  var g62 = QG.zeroHash = "\x00\x00\x00\x00\x00\x00\x00\x00";
  QG.fromNumber = function (K) {
    if (K === 0) return c5A;
    var q = K < 0;
    if (q) K = -K;
    var Y = K >>> 0,
      z = (K - Y) / 4294967296 >>> 0;
    if (q) {
      if (z = ~z >>> 0, Y = ~Y >>> 0, ++Y > 4294967295) {
        if (Y = 0, ++z > 4294967295) z = 0;
      }
    }
    return new QG(Y, z);
  };
  QG.from = function (K) {
    if (typeof K === "number") return QG.fromNumber(K);
    if (ggA.isString(K)) if (ggA.Long) K = ggA.Long.fromString(K);else return QG.fromNumber(parseInt(K, 10));
    return K.low || K.high ? new QG(K.low >>> 0, K.high >>> 0) : c5A;
  };
  QG.prototype.toNumber = function (K) {
    if (!K && this.hi >>> 31) {
      var q = ~this.lo + 1 >>> 0,
        Y = ~this.hi >>> 0;
      if (!q) Y = Y + 1 >>> 0;
      return -(q + Y * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  };
  QG.prototype.toLong = function (K) {
    return ggA.Long ? new ggA.Long(this.lo | 0, this.hi | 0, Boolean(K)) : {
      low: this.lo | 0,
      high: this.hi | 0,
      unsigned: Boolean(K)
    };
  };
  var es = String.prototype.charCodeAt;
  QG.fromHash = function (K) {
    if (K === g62) return c5A;
    return new QG((es.call(K, 0) | es.call(K, 1) << 8 | es.call(K, 2) << 16 | es.call(K, 3) << 24) >>> 0, (es.call(K, 4) | es.call(K, 5) << 8 | es.call(K, 6) << 16 | es.call(K, 7) << 24) >>> 0);
  };
  QG.prototype.toHash = function () {
    return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
  };
  QG.prototype.zzEncode = function () {
    var K = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ K) >>> 0, this.lo = (this.lo << 1 ^ K) >>> 0, this;
  };
  QG.prototype.zzDecode = function () {
    var K = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ K) >>> 0, this.hi = (this.hi >>> 1 ^ K) >>> 0, this;
  };
  QG.prototype.length = function () {
    var K = this.lo,
      q = (this.lo >>> 28 | this.hi << 4) >>> 0,
      Y = this.hi >>> 24;
    return Y === 0 ? q === 0 ? K < 16384 ? K < 128 ? 1 : 2 : K < 2097152 ? 3 : 4 : q < 16384 ? q < 128 ? 5 : 6 : q < 2097152 ? 7 : 8 : Y < 128 ? 9 : 10;
  };
});

// Register to shared state
__$.zg7 = zg7;
