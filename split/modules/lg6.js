// Module: lg6
// Dependencies: XVA, cg6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lg6 = v((gFJ, zjK) => {
  var y_ = __$.XVA(),
    FQ2 = __$.cg6(),
    YZ = zjK.exports = function (A, K) {
      this._options = A, A.checkCRC = A.checkCRC !== !1, this._hasIHDR = !1, this._hasIEND = !1, this._emittedHeadersFinished = !1, this._palette = [], this._colorType = 0, this._chunks = {}, this._chunks[y_.TYPE_IHDR] = this._handleIHDR.bind(this), this._chunks[y_.TYPE_IEND] = this._handleIEND.bind(this), this._chunks[y_.TYPE_IDAT] = this._handleIDAT.bind(this), this._chunks[y_.TYPE_PLTE] = this._handlePLTE.bind(this), this._chunks[y_.TYPE_tRNS] = this._handleTRNS.bind(this), this._chunks[y_.TYPE_gAMA] = this._handleGAMA.bind(this), this.read = K.read, this.error = K.error, this.metadata = K.metadata, this.gamma = K.gamma, this.transColor = K.transColor, this.palette = K.palette, this.parsed = K.parsed, this.inflateData = K.inflateData, this.finished = K.finished, this.simpleTransparency = K.simpleTransparency, this.headersFinished = K.headersFinished || function () {};
    };
  YZ.prototype.start = function () {
    this.read(y_.PNG_SIGNATURE.length, this._parseSignature.bind(this));
  };
  YZ.prototype._parseSignature = function (A) {
    let K = y_.PNG_SIGNATURE;
    for (let q = 0; q < K.length; q++) if (A[q] !== K[q]) {
      this.error(Error("Invalid file signature"));
      return;
    }
    this.read(8, this._parseChunkBegin.bind(this));
  };
  YZ.prototype._parseChunkBegin = function (A) {
    let K = A.readUInt32BE(0),
      q = A.readUInt32BE(4),
      Y = "";
    for (let w = 4; w < 8; w++) Y += String.fromCharCode(A[w]);
    let z = Boolean(A[4] & 32);
    if (!this._hasIHDR && q !== y_.TYPE_IHDR) {
      this.error(Error("Expected IHDR on beggining"));
      return;
    }
    if (this._crc = new FQ2(), this._crc.write(Buffer.from(Y)), this._chunks[q]) return this._chunks[q](K);
    if (!z) {
      this.error(Error("Unsupported critical chunk type " + Y));
      return;
    }
    this.read(K + 4, this._skipChunk.bind(this));
  };
  YZ.prototype._skipChunk = function () {
    this.read(8, this._parseChunkBegin.bind(this));
  };
  YZ.prototype._handleChunkEnd = function () {
    this.read(4, this._parseChunkEnd.bind(this));
  };
  YZ.prototype._parseChunkEnd = function (A) {
    let K = A.readInt32BE(0),
      q = this._crc.crc32();
    if (this._options.checkCRC && q !== K) {
      this.error(Error("Crc error - " + K + " - " + q));
      return;
    }
    if (!this._hasIEND) this.read(8, this._parseChunkBegin.bind(this));
  };
  YZ.prototype._handleIHDR = function (A) {
    this.read(A, this._parseIHDR.bind(this));
  };
  YZ.prototype._parseIHDR = function (A) {
    this._crc.write(A);
    let K = A.readUInt32BE(0),
      q = A.readUInt32BE(4),
      Y = A[8],
      z = A[9],
      w = A[10],
      H = A[11],
      J = A[12];
    if (Y !== 8 && Y !== 4 && Y !== 2 && Y !== 1 && Y !== 16) {
      this.error(Error("Unsupported bit depth " + Y));
      return;
    }
    if (!(z in y_.COLORTYPE_TO_BPP_MAP)) {
      this.error(Error("Unsupported color type"));
      return;
    }
    if (w !== 0) {
      this.error(Error("Unsupported compression method"));
      return;
    }
    if (H !== 0) {
      this.error(Error("Unsupported filter method"));
      return;
    }
    if (J !== 0 && J !== 1) {
      this.error(Error("Unsupported interlace method"));
      return;
    }
    this._colorType = z;
    let O = y_.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = !0, this.metadata({
      width: K,
      height: q,
      depth: Y,
      interlace: Boolean(J),
      palette: Boolean(z & y_.COLORTYPE_PALETTE),
      color: Boolean(z & y_.COLORTYPE_COLOR),
      alpha: Boolean(z & y_.COLORTYPE_ALPHA),
      bpp: O,
      colorType: z
    }), this._handleChunkEnd();
  };
  YZ.prototype._handlePLTE = function (A) {
    this.read(A, this._parsePLTE.bind(this));
  };
  YZ.prototype._parsePLTE = function (A) {
    this._crc.write(A);
    let K = Math.floor(A.length / 3);
    for (let q = 0; q < K; q++) this._palette.push([A[q * 3], A[q * 3 + 1], A[q * 3 + 2], 255]);
    this.palette(this._palette), this._handleChunkEnd();
  };
  YZ.prototype._handleTRNS = function (A) {
    this.simpleTransparency(), this.read(A, this._parseTRNS.bind(this));
  };
  YZ.prototype._parseTRNS = function (A) {
    if (this._crc.write(A), this._colorType === y_.COLORTYPE_PALETTE_COLOR) {
      if (this._palette.length === 0) {
        this.error(Error("Transparency chunk must be after palette"));
        return;
      }
      if (A.length > this._palette.length) {
        this.error(Error("More transparent colors than palette size"));
        return;
      }
      for (let K = 0; K < A.length; K++) this._palette[K][3] = A[K];
      this.palette(this._palette);
    }
    if (this._colorType === y_.COLORTYPE_GRAYSCALE) this.transColor([A.readUInt16BE(0)]);
    if (this._colorType === y_.COLORTYPE_COLOR) this.transColor([A.readUInt16BE(0), A.readUInt16BE(2), A.readUInt16BE(4)]);
    this._handleChunkEnd();
  };
  YZ.prototype._handleGAMA = function (A) {
    this.read(A, this._parseGAMA.bind(this));
  };
  YZ.prototype._parseGAMA = function (A) {
    this._crc.write(A), this.gamma(A.readUInt32BE(0) / y_.GAMMA_DIVISION), this._handleChunkEnd();
  };
  YZ.prototype._handleIDAT = function (A) {
    if (!this._emittedHeadersFinished) this._emittedHeadersFinished = !0, this.headersFinished();
    this.read(-A, this._parseIDAT.bind(this, A));
  };
  YZ.prototype._parseIDAT = function (A, K) {
    if (this._crc.write(K), this._colorType === y_.COLORTYPE_PALETTE_COLOR && this._palette.length === 0) throw Error("Expected palette not found");
    this.inflateData(K);
    let q = A - K.length;
    if (q > 0) this._handleIDAT(q);else this._handleChunkEnd();
  };
  YZ.prototype._handleIEND = function (A) {
    this.read(A, this._parseIEND.bind(this));
  };
  YZ.prototype._parseIEND = function (A) {
    if (this._crc.write(A), this._hasIEND = !0, this._handleChunkEnd(), this.finished) this.finished();
  };
});

// Register to shared state
__$.lg6 = lg6;
