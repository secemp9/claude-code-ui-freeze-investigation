// Module: VjK
// Dependencies: XVA, og6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VjK = v((lFJ, PjK) => {
  var MU2 = CA("util"),
    jjK = CA("stream"),
    PU2 = __$.XVA(),
    VU2 = __$.og6(),
    MjK = PjK.exports = function (A) {
      jjK.call(this);
      let K = A || {};
      this._packer = new VU2(K), this._deflate = this._packer.createDeflate(), this.readable = !0;
    };
  MU2.inherits(MjK, jjK);
  MjK.prototype.pack = function (A, K, q, Y) {
    if (this.emit("data", Buffer.from(PU2.PNG_SIGNATURE)), this.emit("data", this._packer.packIHDR(K, q)), Y) this.emit("data", this._packer.packGAMA(Y));
    let z = this._packer.filterData(A, K, q);
    this._deflate.on("error", this.emit.bind(this, "error")), this._deflate.on("data", function (w) {
      this.emit("data", this._packer.packIDAT(w));
    }.bind(this)), this._deflate.on("end", function () {
      this.emit("data", this._packer.packIEND()), this.emit("end");
    }.bind(this)), this._deflate.end(z);
  };
});

// Register to shared state
__$.VjK = VjK;
