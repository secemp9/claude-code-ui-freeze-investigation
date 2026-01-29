// Module: kjK
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kjK = v((ydA, EjK) => {
  var fjK = CA("assert").ok,
    $VA = CA("zlib"),
    fU2 = CA("util"),
    NjK = CA("buffer").kMaxLength;
  function s9A(A) {
    if (!(this instanceof s9A)) return new s9A(A);
    if (A && A.chunkSize < $VA.Z_MIN_CHUNK) A.chunkSize = $VA.Z_MIN_CHUNK;
    if ($VA.Inflate.call(this, A), this._offset = this._offset === void 0 ? this._outOffset : this._offset, this._buffer = this._buffer || this._outBuffer, A && A.maxLength != null) this._maxLength = A.maxLength;
  }
  function NU2(A) {
    return new s9A(A);
  }
  function TjK(A, K) {
    if (K) process.nextTick(K);
    if (!A._handle) return;
    A._handle.close(), A._handle = null;
  }
  s9A.prototype._processChunk = function (A, K, q) {
    if (typeof q === "function") return $VA.Inflate._processChunk.call(this, A, K, q);
    let Y = this,
      z = A && A.length,
      w = this._chunkSize - this._offset,
      H = this._maxLength,
      J = 0,
      O = [],
      X = 0,
      $;
    this.on("error", function (W) {
      $ = W;
    });
    function _(W, D) {
      if (Y._hadError) return;
      let j = w - D;
      if (fjK(j >= 0, "have should not go down"), j > 0) {
        let M = Y._buffer.slice(Y._offset, Y._offset + j);
        if (Y._offset += j, M.length > H) M = M.slice(0, H);
        if (O.push(M), X += M.length, H -= M.length, H === 0) return !1;
      }
      if (D === 0 || Y._offset >= Y._chunkSize) w = Y._chunkSize, Y._offset = 0, Y._buffer = Buffer.allocUnsafe(Y._chunkSize);
      if (D === 0) return J += z - W, z = W, !0;
      return !1;
    }
    fjK(this._handle, "zlib binding closed");
    let G;
    do G = this._handle.writeSync(K, A, J, z, this._buffer, this._offset, w), G = G || this._writeState; while (!this._hadError && _(G[0], G[1]));
    if (this._hadError) throw $;
    if (X >= NjK) throw TjK(this), RangeError("Cannot create final Buffer. It would be larger than 0x" + NjK.toString(16) + " bytes");
    let Z = Buffer.concat(O, X);
    return TjK(this), Z;
  };
  fU2.inherits(s9A, $VA.Inflate);
  function TU2(A, K) {
    if (typeof K === "string") K = Buffer.from(K);
    if (!(K instanceof Buffer)) throw TypeError("Not a string or buffer");
    let q = A._finishFlushFlag;
    if (q == null) q = $VA.Z_FINISH;
    return A._processChunk(K, q);
  }
  function vjK(A, K) {
    return TU2(new s9A(K), A);
  }
  EjK.exports = ydA = vjK;
  ydA.Inflate = s9A;
  ydA.createInflate = NU2;
  ydA.inflateSync = vjK;
});

// Register to shared state
__$.kjK = kjK;
