// Module: cg6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cg6 = v((mFJ, YjK) => {
  var pg6 = [];
  (function () {
    for (let A = 0; A < 256; A++) {
      let K = A;
      for (let q = 0; q < 8; q++) if (K & 1) K = 3988292384 ^ K >>> 1;else K = K >>> 1;
      pg6[A] = K;
    }
  })();
  var dg6 = YjK.exports = function () {
    this._crc = -1;
  };
  dg6.prototype.write = function (A) {
    for (let K = 0; K < A.length; K++) this._crc = pg6[(this._crc ^ A[K]) & 255] ^ this._crc >>> 8;
    return !0;
  };
  dg6.prototype.crc32 = function () {
    return this._crc ^ -1;
  };
  dg6.crc32 = function (A) {
    let K = -1;
    for (let q = 0; q < A.length; q++) K = pg6[(K ^ A[q]) & 255] ^ K >>> 8;
    return K ^ -1;
  };
});

// Register to shared state
__$.cg6 = cg6;
