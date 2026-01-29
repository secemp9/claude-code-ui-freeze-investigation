// Module: Tg7
// Dependencies: GD1, kB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tg7 = v((MTH, Ng7) => {
  Ng7.exports = l5A;
  var fg7 = __$.GD1();
  (l5A.prototype = Object.create(fg7.prototype)).constructor = l5A;
  var Vg7 = __$.kB();
  function l5A(A) {
    fg7.call(this, A);
  }
  l5A._configure = function () {
    if (Vg7.Buffer) l5A.prototype._slice = Vg7.Buffer.prototype.slice;
  };
  l5A.prototype.string = function () {
    var K = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + K, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + K, this.len));
  };
  l5A._configure();
});

// Register to shared state
__$.Tg7 = Tg7;
