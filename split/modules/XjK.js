// Module: XjK
// Dependencies: gg6, KjK, lg6, ig6, ng6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XjK = v((UFJ, OjK) => {
  var aQ2 = CA("util"),
    rg6 = CA("zlib"),
    JjK = __$.gg6(),
    sQ2 = __$.KjK(),
    tQ2 = __$.lg6(),
    eQ2 = __$.ig6(),
    AU2 = __$.ng6(),
    hm = OjK.exports = function (A) {
      JjK.call(this), this._parser = new tQ2(A, {
        read: this.read.bind(this),
        error: this._handleError.bind(this),
        metadata: this._handleMetaData.bind(this),
        gamma: this.emit.bind(this, "gamma"),
        palette: this._handlePalette.bind(this),
        transColor: this._handleTransColor.bind(this),
        finished: this._finished.bind(this),
        inflateData: this._inflateData.bind(this),
        simpleTransparency: this._simpleTransparency.bind(this),
        headersFinished: this._headersFinished.bind(this)
      }), this._options = A, this.writable = !0, this._parser.start();
    };
  aQ2.inherits(hm, JjK);
  hm.prototype._handleError = function (A) {
    if (this.emit("error", A), this.writable = !1, this.destroy(), this._inflate && this._inflate.destroy) this._inflate.destroy();
    if (this._filter) this._filter.destroy(), this._filter.on("error", function () {});
    this.errord = !0;
  };
  hm.prototype._inflateData = function (A) {
    if (!this._inflate) if (this._bitmapInfo.interlace) this._inflate = rg6.createInflate(), this._inflate.on("error", this.emit.bind(this, "error")), this._filter.on("complete", this._complete.bind(this)), this._inflate.pipe(this._filter);else {
      let q = ((this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3) + 1) * this._bitmapInfo.height,
        Y = Math.max(q, rg6.Z_MIN_CHUNK);
      this._inflate = rg6.createInflate({
        chunkSize: Y
      });
      let z = q,
        w = this.emit.bind(this, "error");
      this._inflate.on("error", function (J) {
        if (!z) return;
        w(J);
      }), this._filter.on("complete", this._complete.bind(this));
      let H = this._filter.write.bind(this._filter);
      this._inflate.on("data", function (J) {
        if (!z) return;
        if (J.length > z) J = J.slice(0, z);
        z -= J.length, H(J);
      }), this._inflate.on("end", this._filter.end.bind(this._filter));
    }
    this._inflate.write(A);
  };
  hm.prototype._handleMetaData = function (A) {
    this._metaData = A, this._bitmapInfo = Object.create(A), this._filter = new sQ2(this._bitmapInfo);
  };
  hm.prototype._handleTransColor = function (A) {
    this._bitmapInfo.transColor = A;
  };
  hm.prototype._handlePalette = function (A) {
    this._bitmapInfo.palette = A;
  };
  hm.prototype._simpleTransparency = function () {
    this._metaData.alpha = !0;
  };
  hm.prototype._headersFinished = function () {
    this.emit("metadata", this._metaData);
  };
  hm.prototype._finished = function () {
    if (this.errord) return;
    if (!this._inflate) this.emit("error", "No Inflate block");else this._inflate.end();
  };
  hm.prototype._complete = function (A) {
    if (this.errord) return;
    let K;
    try {
      let q = eQ2.dataToBitMap(A, this._bitmapInfo);
      K = AU2(q, this._bitmapInfo), q = null;
    } catch (q) {
      this._handleError(q);
      return;
    }
    this.emit("parsed", K);
  };
});

// Register to shared state
__$.XjK = XjK;
