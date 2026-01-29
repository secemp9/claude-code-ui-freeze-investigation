// Module: GD1
// Dependencies: kB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GD1 = v((jTH, Pg7) => {
  Pg7.exports = $X;
  var WS = __$.kB(),
    KE6,
    jg7 = WS.LongBits,
    d62 = WS.utf8;
  function DS(A, K) {
    return RangeError("index out of range: " + A.pos + " + " + (K || 1) + " > " + A.len);
  }
  function $X(A) {
    this.buf = A, this.pos = 0, this.len = A.length;
  }
  var Wg7 = typeof Uint8Array < "u" ? function (K) {
      if (K instanceof Uint8Array || Array.isArray(K)) return new $X(K);
      throw Error("illegal buffer");
    } : function (K) {
      if (Array.isArray(K)) return new $X(K);
      throw Error("illegal buffer");
    },
    Mg7 = function () {
      return WS.Buffer ? function (q) {
        return ($X.create = function (z) {
          return WS.Buffer.isBuffer(z) ? new KE6(z) : Wg7(z);
        })(q);
      } : Wg7;
    };
  $X.create = Mg7();
  $X.prototype._slice = WS.Array.prototype.subarray || WS.Array.prototype.slice;
  $X.prototype.uint32 = function () {
    var K = 4294967295;
    return function () {
      if (K = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128) return K;
      if (K = (K | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) return K;
      if (K = (K | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) return K;
      if (K = (K | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) return K;
      if (K = (K | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128) return K;
      if ((this.pos += 5) > this.len) throw this.pos = this.len, DS(this, 10);
      return K;
    };
  }();
  $X.prototype.int32 = function () {
    return this.uint32() | 0;
  };
  $X.prototype.sint32 = function () {
    var K = this.uint32();
    return K >>> 1 ^ -(K & 1) | 0;
  };
  function AE6() {
    var A = new jg7(0, 0),
      K = 0;
    if (this.len - this.pos > 4) {
      for (; K < 4; ++K) if (A.lo = (A.lo | (this.buf[this.pos] & 127) << K * 7) >>> 0, this.buf[this.pos++] < 128) return A;
      if (A.lo = (A.lo | (this.buf[this.pos] & 127) << 28) >>> 0, A.hi = (A.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128) return A;
      K = 0;
    } else {
      for (; K < 3; ++K) {
        if (this.pos >= this.len) throw DS(this);
        if (A.lo = (A.lo | (this.buf[this.pos] & 127) << K * 7) >>> 0, this.buf[this.pos++] < 128) return A;
      }
      return A.lo = (A.lo | (this.buf[this.pos++] & 127) << K * 7) >>> 0, A;
    }
    if (this.len - this.pos > 4) {
      for (; K < 5; ++K) if (A.hi = (A.hi | (this.buf[this.pos] & 127) << K * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return A;
    } else for (; K < 5; ++K) {
      if (this.pos >= this.len) throw DS(this);
      if (A.hi = (A.hi | (this.buf[this.pos] & 127) << K * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return A;
    }
    throw Error("invalid varint encoding");
  }
  $X.prototype.bool = function () {
    return this.uint32() !== 0;
  };
  function _D1(A, K) {
    return (A[K - 4] | A[K - 3] << 8 | A[K - 2] << 16 | A[K - 1] << 24) >>> 0;
  }
  $X.prototype.fixed32 = function () {
    if (this.pos + 4 > this.len) throw DS(this, 4);
    return _D1(this.buf, this.pos += 4);
  };
  $X.prototype.sfixed32 = function () {
    if (this.pos + 4 > this.len) throw DS(this, 4);
    return _D1(this.buf, this.pos += 4) | 0;
  };
  function Dg7() {
    if (this.pos + 8 > this.len) throw DS(this, 8);
    return new jg7(_D1(this.buf, this.pos += 4), _D1(this.buf, this.pos += 4));
  }
  $X.prototype.float = function () {
    if (this.pos + 4 > this.len) throw DS(this, 4);
    var K = WS.float.readFloatLE(this.buf, this.pos);
    return this.pos += 4, K;
  };
  $X.prototype.double = function () {
    if (this.pos + 8 > this.len) throw DS(this, 4);
    var K = WS.float.readDoubleLE(this.buf, this.pos);
    return this.pos += 8, K;
  };
  $X.prototype.bytes = function () {
    var K = this.uint32(),
      q = this.pos,
      Y = this.pos + K;
    if (Y > this.len) throw DS(this, K);
    if (this.pos += K, Array.isArray(this.buf)) return this.buf.slice(q, Y);
    if (q === Y) {
      var z = WS.Buffer;
      return z ? z.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, q, Y);
  };
  $X.prototype.string = function () {
    var K = this.bytes();
    return d62.read(K, 0, K.length);
  };
  $X.prototype.skip = function (K) {
    if (typeof K === "number") {
      if (this.pos + K > this.len) throw DS(this, K);
      this.pos += K;
    } else do if (this.pos >= this.len) throw DS(this); while (this.buf[this.pos++] & 128);
    return this;
  };
  $X.prototype.skipType = function (A) {
    switch (A) {
      case 0:
        this.skip();
        break;
      case 1:
        this.skip(8);
        break;
      case 2:
        this.skip(this.uint32());
        break;
      case 3:
        while ((A = this.uint32() & 7) !== 4) this.skipType(A);
        break;
      case 5:
        this.skip(4);
        break;
      default:
        throw Error("invalid wire type " + A + " at offset " + this.pos);
    }
    return this;
  };
  $X._configure = function (A) {
    KE6 = A, $X.create = Mg7(), KE6._configure();
    var K = WS.Long ? "toLong" : "toNumber";
    WS.merge($X.prototype, {
      int64: function () {
        return AE6.call(this)[K](!1);
      },
      uint64: function () {
        return AE6.call(this)[K](!0);
      },
      sint64: function () {
        return AE6.call(this).zzDecode()[K](!1);
      },
      fixed64: function () {
        return Dg7.call(this)[K](!0);
      },
      sfixed64: function () {
        return Dg7.call(this)[K](!1);
      }
    });
  };
});

// Register to shared state
__$.GD1 = GD1;
