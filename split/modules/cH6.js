// Module: cH6
// Dependencies: Wu

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cH6 = v((UTw, io4) => {
  var qw1 = __$.Wu().Buffer,
    Ht9 = CA("stream"),
    Jt9 = CA("util");
  function Yw1(A) {
    if (this.buffer = null, this.writable = !0, this.readable = !0, !A) return this.buffer = qw1.alloc(0), this;
    if (typeof A.pipe === "function") return this.buffer = qw1.alloc(0), A.pipe(this), this;
    if (A.length || typeof A === "object") return this.buffer = A, this.writable = !1, process.nextTick(function () {
      this.emit("end", A), this.readable = !1, this.emit("close");
    }.bind(this)), this;
    throw TypeError("Unexpected data type (" + typeof A + ")");
  }
  Jt9.inherits(Yw1, Ht9);
  Yw1.prototype.write = function (K) {
    this.buffer = qw1.concat([this.buffer, qw1.from(K)]), this.emit("data", K);
  };
  Yw1.prototype.end = function (K) {
    if (K) this.write(K);
    this.emit("end", K), this.emit("close"), this.writable = !1, this.readable = !1;
  };
  io4.exports = Yw1;
});

// Register to shared state
__$.cH6 = cH6;
