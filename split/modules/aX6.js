// Module: aX6
// Dependencies: Wu

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aX6 = v((Jmw, W87) => {
  var KJ1 = __$.Wu().Buffer,
    T7Y = CA("stream"),
    v7Y = CA("util");
  function qJ1(A) {
    if (this.buffer = null, this.writable = !0, this.readable = !0, !A) return this.buffer = KJ1.alloc(0), this;
    if (typeof A.pipe === "function") return this.buffer = KJ1.alloc(0), A.pipe(this), this;
    if (A.length || typeof A === "object") return this.buffer = A, this.writable = !1, process.nextTick(function () {
      this.emit("end", A), this.readable = !1, this.emit("close");
    }.bind(this)), this;
    throw TypeError("Unexpected data type (" + typeof A + ")");
  }
  v7Y.inherits(qJ1, T7Y);
  qJ1.prototype.write = function (K) {
    this.buffer = KJ1.concat([this.buffer, KJ1.from(K)]), this.emit("data", K);
  };
  qJ1.prototype.end = function (K) {
    if (K) this.write(K);
    this.emit("end", K), this.emit("close"), this.writable = !1, this.readable = !1;
  };
  W87.exports = qJ1;
});

// Register to shared state
__$.aX6 = aX6;
