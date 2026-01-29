// Module: Zg7
// Dependencies: $D1, kB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zg7 = v((DTH, Gg7) => {
  Gg7.exports = CB;
  var _g7 = __$.$D1();
  (CB.prototype = Object.create(_g7.prototype)).constructor = CB;
  var At = __$.kB();
  function CB() {
    _g7.call(this);
  }
  CB._configure = function () {
    CB.alloc = At._Buffer_allocUnsafe, CB.writeBytesBuffer = At.Buffer && At.Buffer.prototype instanceof Uint8Array && At.Buffer.prototype.set.name === "set" ? function (K, q, Y) {
      q.set(K, Y);
    } : function (K, q, Y) {
      if (K.copy) K.copy(q, Y, 0, K.length);else for (var z = 0; z < K.length;) q[Y++] = K[z++];
    };
  };
  CB.prototype.bytes = function (K) {
    if (At.isString(K)) K = At._Buffer_from(K, "base64");
    var q = K.length >>> 0;
    if (this.uint32(q), q) this._push(CB.writeBytesBuffer, q, K);
    return this;
  };
  function p62(A, K, q) {
    if (A.length < 40) At.utf8.write(A, K, q);else if (K.utf8Write) K.utf8Write(A, q);else K.write(A, q);
  }
  CB.prototype.string = function (K) {
    var q = At.Buffer.byteLength(K);
    if (this.uint32(q), q) this._push(p62, q, K);
    return this;
  };
  CB._configure();
});

// Register to shared state
__$.Zg7 = Zg7;
