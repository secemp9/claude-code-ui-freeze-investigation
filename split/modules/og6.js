// Module: og6
// Dependencies: XVA, cg6, _jK, WjK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var og6 = v((cFJ, DjK) => {
  var kj = __$.XVA(),
    ZU2 = __$.cg6(),
    WU2 = __$._jK(),
    DU2 = __$.WjK(),
    jU2 = CA("zlib"),
    Se = DjK.exports = function (A) {
      if (this._options = A, A.deflateChunkSize = A.deflateChunkSize || 32768, A.deflateLevel = A.deflateLevel != null ? A.deflateLevel : 9, A.deflateStrategy = A.deflateStrategy != null ? A.deflateStrategy : 3, A.inputHasAlpha = A.inputHasAlpha != null ? A.inputHasAlpha : !0, A.deflateFactory = A.deflateFactory || jU2.createDeflate, A.bitDepth = A.bitDepth || 8, A.colorType = typeof A.colorType === "number" ? A.colorType : kj.COLORTYPE_COLOR_ALPHA, A.inputColorType = typeof A.inputColorType === "number" ? A.inputColorType : kj.COLORTYPE_COLOR_ALPHA, [kj.COLORTYPE_GRAYSCALE, kj.COLORTYPE_COLOR, kj.COLORTYPE_COLOR_ALPHA, kj.COLORTYPE_ALPHA].indexOf(A.colorType) === -1) throw Error("option color type:" + A.colorType + " is not supported at present");
      if ([kj.COLORTYPE_GRAYSCALE, kj.COLORTYPE_COLOR, kj.COLORTYPE_COLOR_ALPHA, kj.COLORTYPE_ALPHA].indexOf(A.inputColorType) === -1) throw Error("option input color type:" + A.inputColorType + " is not supported at present");
      if (A.bitDepth !== 8 && A.bitDepth !== 16) throw Error("option bit depth:" + A.bitDepth + " is not supported at present");
    };
  Se.prototype.getDeflateOptions = function () {
    return {
      chunkSize: this._options.deflateChunkSize,
      level: this._options.deflateLevel,
      strategy: this._options.deflateStrategy
    };
  };
  Se.prototype.createDeflate = function () {
    return this._options.deflateFactory(this.getDeflateOptions());
  };
  Se.prototype.filterData = function (A, K, q) {
    let Y = WU2(A, K, q, this._options),
      z = kj.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    return DU2(Y, K, q, this._options, z);
  };
  Se.prototype._packChunk = function (A, K) {
    let q = K ? K.length : 0,
      Y = Buffer.alloc(q + 12);
    if (Y.writeUInt32BE(q, 0), Y.writeUInt32BE(A, 4), K) K.copy(Y, 8);
    return Y.writeInt32BE(ZU2.crc32(Y.slice(4, Y.length - 4)), Y.length - 4), Y;
  };
  Se.prototype.packGAMA = function (A) {
    let K = Buffer.alloc(4);
    return K.writeUInt32BE(Math.floor(A * kj.GAMMA_DIVISION), 0), this._packChunk(kj.TYPE_gAMA, K);
  };
  Se.prototype.packIHDR = function (A, K) {
    let q = Buffer.alloc(13);
    return q.writeUInt32BE(A, 0), q.writeUInt32BE(K, 4), q[8] = this._options.bitDepth, q[9] = this._options.colorType, q[10] = 0, q[11] = 0, q[12] = 0, this._packChunk(kj.TYPE_IHDR, q);
  };
  Se.prototype.packIDAT = function (A) {
    return this._packChunk(kj.TYPE_IDAT, A);
  };
  Se.prototype.packIEND = function () {
    return this._packChunk(kj.TYPE_IEND, null);
  };
});

// Register to shared state
__$.og6 = og6;
