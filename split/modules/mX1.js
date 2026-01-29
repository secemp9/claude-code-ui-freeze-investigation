// Module: mX1
// Dependencies: m3, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mX1 = v((w4H, w_7) => {
  var CG = __$.m3();
  __$.bY();
  w_7.exports = CG.cipher = CG.cipher || {};
  CG.cipher.algorithms = CG.cipher.algorithms || {};
  CG.cipher.createCipher = function (A, K) {
    var q = A;
    if (typeof q === "string") {
      if (q = CG.cipher.getAlgorithm(q), q) q = q();
    }
    if (!q) throw Error("Unsupported algorithm: " + A);
    return new CG.cipher.BlockCipher({
      algorithm: q,
      key: K,
      decrypt: !1
    });
  };
  CG.cipher.createDecipher = function (A, K) {
    var q = A;
    if (typeof q === "string") {
      if (q = CG.cipher.getAlgorithm(q), q) q = q();
    }
    if (!q) throw Error("Unsupported algorithm: " + A);
    return new CG.cipher.BlockCipher({
      algorithm: q,
      key: K,
      decrypt: !0
    });
  };
  CG.cipher.registerAlgorithm = function (A, K) {
    A = A.toUpperCase(), CG.cipher.algorithms[A] = K;
  };
  CG.cipher.getAlgorithm = function (A) {
    if (A = A.toUpperCase(), A in CG.cipher.algorithms) return CG.cipher.algorithms[A];
    return null;
  };
  var BD6 = CG.cipher.BlockCipher = function (A) {
    this.algorithm = A.algorithm, this.mode = this.algorithm.mode, this.blockSize = this.mode.blockSize, this._finish = !1, this._input = null, this.output = null, this._op = A.decrypt ? this.mode.decrypt : this.mode.encrypt, this._decrypt = A.decrypt, this.algorithm.initialize(A);
  };
  BD6.prototype.start = function (A) {
    A = A || {};
    var K = {};
    for (var q in A) K[q] = A[q];
    K.decrypt = this._decrypt, this._finish = !1, this._input = CG.util.createBuffer(), this.output = A.output || CG.util.createBuffer(), this.mode.start(K);
  };
  BD6.prototype.update = function (A) {
    if (A) this._input.putBuffer(A);
    while (!this._op.call(this.mode, this._input, this.output, this._finish) && !this._finish);
    this._input.compact();
  };
  BD6.prototype.finish = function (A) {
    if (A && (this.mode.name === "ECB" || this.mode.name === "CBC")) this.mode.pad = function (q) {
      return A(this.blockSize, q, !1);
    }, this.mode.unpad = function (q) {
      return A(this.blockSize, q, !0);
    };
    var K = {};
    if (K.decrypt = this._decrypt, K.overflow = this._input.length() % this.blockSize, !this._decrypt && this.mode.pad) {
      if (!this.mode.pad(this._input, K)) return !1;
    }
    if (this._finish = !0, this.update(), this._decrypt && this.mode.unpad) {
      if (!this.mode.unpad(this.output, K)) return !1;
    }
    if (this.mode.afterFinish) {
      if (!this.mode.afterFinish(this.output, K)) return !1;
    }
    return !0;
  };
});

// Register to shared state
__$.mX1 = mX1;
