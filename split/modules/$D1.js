// Module: $D1
// Dependencies: kB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $D1 = v((WTH, $g7) => {
  $g7.exports = BY;
  var XL = __$.kB(),
    rv6,
    XD1 = XL.LongBits,
    Jg7 = XL.base64,
    Og7 = XL.utf8;
  function FgA(A, K, q) {
    this.fn = A, this.len = K, this.next = void 0, this.val = q;
  }
  function av6() {}
  function F62(A) {
    this.head = A.head, this.tail = A.tail, this.len = A.len, this.next = A.states;
  }
  function BY() {
    this.len = 0, this.head = new FgA(av6, 0, 0), this.tail = this.head, this.states = null;
  }
  var Xg7 = function () {
    return XL.Buffer ? function () {
      return (BY.create = function () {
        return new rv6();
      })();
    } : function () {
      return new BY();
    };
  };
  BY.create = Xg7();
  BY.alloc = function (K) {
    return new XL.Array(K);
  };
  if (XL.Array !== Array) BY.alloc = XL.pool(BY.alloc, XL.Array.prototype.subarray);
  BY.prototype._push = function (K, q, Y) {
    return this.tail = this.tail.next = new FgA(K, q, Y), this.len += q, this;
  };
  function sv6(A, K, q) {
    K[q] = A & 255;
  }
  function Q62(A, K, q) {
    while (A > 127) K[q++] = A & 127 | 128, A >>>= 7;
    K[q] = A;
  }
  function tv6(A, K) {
    this.len = A, this.next = void 0, this.val = K;
  }
  tv6.prototype = Object.create(FgA.prototype);
  tv6.prototype.fn = Q62;
  BY.prototype.uint32 = function (K) {
    return this.len += (this.tail = this.tail.next = new tv6((K = K >>> 0) < 128 ? 1 : K < 16384 ? 2 : K < 2097152 ? 3 : K < 268435456 ? 4 : 5, K)).len, this;
  };
  BY.prototype.int32 = function (K) {
    return K < 0 ? this._push(ev6, 10, XD1.fromNumber(K)) : this.uint32(K);
  };
  BY.prototype.sint32 = function (K) {
    return this.uint32((K << 1 ^ K >> 31) >>> 0);
  };
  function ev6(A, K, q) {
    while (A.hi) K[q++] = A.lo & 127 | 128, A.lo = (A.lo >>> 7 | A.hi << 25) >>> 0, A.hi >>>= 7;
    while (A.lo > 127) K[q++] = A.lo & 127 | 128, A.lo = A.lo >>> 7;
    K[q++] = A.lo;
  }
  BY.prototype.uint64 = function (K) {
    var q = XD1.from(K);
    return this._push(ev6, q.length(), q);
  };
  BY.prototype.int64 = BY.prototype.uint64;
  BY.prototype.sint64 = function (K) {
    var q = XD1.from(K).zzEncode();
    return this._push(ev6, q.length(), q);
  };
  BY.prototype.bool = function (K) {
    return this._push(sv6, 1, K ? 1 : 0);
  };
  function ov6(A, K, q) {
    K[q] = A & 255, K[q + 1] = A >>> 8 & 255, K[q + 2] = A >>> 16 & 255, K[q + 3] = A >>> 24;
  }
  BY.prototype.fixed32 = function (K) {
    return this._push(ov6, 4, K >>> 0);
  };
  BY.prototype.sfixed32 = BY.prototype.fixed32;
  BY.prototype.fixed64 = function (K) {
    var q = XD1.from(K);
    return this._push(ov6, 4, q.lo)._push(ov6, 4, q.hi);
  };
  BY.prototype.sfixed64 = BY.prototype.fixed64;
  BY.prototype.float = function (K) {
    return this._push(XL.float.writeFloatLE, 4, K);
  };
  BY.prototype.double = function (K) {
    return this._push(XL.float.writeDoubleLE, 8, K);
  };
  var U62 = XL.Array.prototype.set ? function (K, q, Y) {
    q.set(K, Y);
  } : function (K, q, Y) {
    for (var z = 0; z < K.length; ++z) q[Y + z] = K[z];
  };
  BY.prototype.bytes = function (K) {
    var q = K.length >>> 0;
    if (!q) return this._push(sv6, 1, 0);
    if (XL.isString(K)) {
      var Y = BY.alloc(q = Jg7.length(K));
      Jg7.decode(K, Y, 0), K = Y;
    }
    return this.uint32(q)._push(U62, q, K);
  };
  BY.prototype.string = function (K) {
    var q = Og7.length(K);
    return q ? this.uint32(q)._push(Og7.write, q, K) : this._push(sv6, 1, 0);
  };
  BY.prototype.fork = function () {
    return this.states = new F62(this), this.head = this.tail = new FgA(av6, 0, 0), this.len = 0, this;
  };
  BY.prototype.reset = function () {
    if (this.states) this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next;else this.head = this.tail = new FgA(av6, 0, 0), this.len = 0;
    return this;
  };
  BY.prototype.ldelim = function () {
    var K = this.head,
      q = this.tail,
      Y = this.len;
    if (this.reset().uint32(Y), Y) this.tail.next = K.next, this.tail = q, this.len += Y;
    return this;
  };
  BY.prototype.finish = function () {
    var K = this.head.next,
      q = this.constructor.alloc(this.len),
      Y = 0;
    while (K) K.fn(K.val, q, Y), Y += K.len, K = K.next;
    return q;
  };
  BY._configure = function (A) {
    rv6 = A, BY.create = Xg7(), rv6._configure();
  };
});

// Register to shared state
__$.$D1 = $D1;
