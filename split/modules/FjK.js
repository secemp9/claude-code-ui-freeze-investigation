// Module: FjK
// Dependencies: XjK, VjK, mjK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FjK = v(cU2 => {
  var QU2 = CA("util"),
    gjK = CA("stream"),
    UU2 = __$.XjK(),
    pU2 = __$.VjK(),
    dU2 = __$.mjK(),
    TP = cU2.PNG = function (A) {
      if (gjK.call(this), A = A || {}, this.width = A.width | 0, this.height = A.height | 0, this.data = this.width > 0 && this.height > 0 ? Buffer.alloc(4 * this.width * this.height) : null, A.fill && this.data) this.data.fill(0);
      this.gamma = 0, this.readable = this.writable = !0, this._parser = new UU2(A), this._parser.on("error", this.emit.bind(this, "error")), this._parser.on("close", this._handleClose.bind(this)), this._parser.on("metadata", this._metadata.bind(this)), this._parser.on("gamma", this._gamma.bind(this)), this._parser.on("parsed", function (K) {
        this.data = K, this.emit("parsed", K);
      }.bind(this)), this._packer = new pU2(A), this._packer.on("data", this.emit.bind(this, "data")), this._packer.on("end", this.emit.bind(this, "end")), this._parser.on("close", this._handleClose.bind(this)), this._packer.on("error", this.emit.bind(this, "error"));
    };
  QU2.inherits(TP, gjK);
  TP.sync = dU2;
  TP.prototype.pack = function () {
    if (!this.data || !this.data.length) return this.emit("error", "No data provided"), this;
    return process.nextTick(function () {
      this._packer.pack(this.data, this.width, this.height, this.gamma);
    }.bind(this)), this;
  };
  TP.prototype.parse = function (A, K) {
    if (K) {
      let q, Y;
      q = function (z) {
        this.removeListener("error", Y), this.data = z, K(null, this);
      }.bind(this), Y = function (z) {
        this.removeListener("parsed", q), K(z, null);
      }.bind(this), this.once("parsed", q), this.once("error", Y);
    }
    return this.end(A), this;
  };
  TP.prototype.write = function (A) {
    return this._parser.write(A), !0;
  };
  TP.prototype.end = function (A) {
    this._parser.end(A);
  };
  TP.prototype._metadata = function (A) {
    this.width = A.width, this.height = A.height, this.emit("metadata", A);
  };
  TP.prototype._gamma = function (A) {
    this.gamma = A;
  };
  TP.prototype._handleClose = function () {
    if (!this._parser.writable && !this._packer.readable) this.emit("close");
  };
  TP.bitblt = function (A, K, q, Y, z, w, H, J) {
    if (q |= 0, Y |= 0, z |= 0, w |= 0, H |= 0, J |= 0, q > A.width || Y > A.height || q + z > A.width || Y + w > A.height) throw Error("bitblt reading outside image");
    if (H > K.width || J > K.height || H + z > K.width || J + w > K.height) throw Error("bitblt writing outside image");
    for (let O = 0; O < w; O++) A.data.copy(K.data, (J + O) * K.width + H << 2, (Y + O) * A.width + q << 2, (Y + O) * A.width + q + z << 2);
  };
  TP.prototype.bitblt = function (A, K, q, Y, z, w, H) {
    return TP.bitblt(this, A, K, q, Y, z, w, H), this;
  };
  TP.adjustGamma = function (A) {
    if (A.gamma) {
      for (let K = 0; K < A.height; K++) for (let q = 0; q < A.width; q++) {
        let Y = A.width * K + q << 2;
        for (let z = 0; z < 3; z++) {
          let w = A.data[Y + z] / 255;
          w = Math.pow(w, 0.45454545454545453 / A.gamma), A.data[Y + z] = Math.round(w * 255);
        }
      }
      A.gamma = 0;
    }
  };
  TP.prototype.adjustGamma = function () {
    TP.adjustGamma(this);
  };
});

// Register to shared state
__$.FjK = FjK;
