// Module: I87
// Dependencies: Wu, aX6, A$6, K$6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var I87 = v(($mw, y87) => {
  var m7Y = __$.Wu().Buffer,
    k87 = __$.aX6(),
    g7Y = __$.A$6(),
    F7Y = CA("stream"),
    C87 = __$.K$6(),
    q$6 = CA("util");
  function L87(A, K) {
    return m7Y.from(A, K).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function Q7Y(A, K, q) {
    q = q || "utf8";
    var Y = L87(C87(A), "binary"),
      z = L87(C87(K), q);
    return q$6.format("%s.%s", Y, z);
  }
  function R87(A) {
    var {
        header: K,
        payload: q
      } = A,
      Y = A.secret || A.privateKey,
      z = A.encoding,
      w = g7Y(K.alg),
      H = Q7Y(K, q, z),
      J = w.sign(H, Y);
    return q$6.format("%s.%s", H, J);
  }
  function YJ1(A) {
    var K = A.secret || A.privateKey || A.key,
      q = new k87(K);
    this.readable = !0, this.header = A.header, this.encoding = A.encoding, this.secret = this.privateKey = this.key = q, this.payload = new k87(A.payload), this.secret.once("close", function () {
      if (!this.payload.writable && this.readable) this.sign();
    }.bind(this)), this.payload.once("close", function () {
      if (!this.secret.writable && this.readable) this.sign();
    }.bind(this));
  }
  q$6.inherits(YJ1, F7Y);
  YJ1.prototype.sign = function () {
    try {
      var K = R87({
        header: this.header,
        payload: this.payload.buffer,
        secret: this.secret.buffer,
        encoding: this.encoding
      });
      return this.emit("done", K), this.emit("data", K), this.emit("end"), this.readable = !1, K;
    } catch (q) {
      this.readable = !1, this.emit("error", q), this.emit("close");
    }
  };
  YJ1.sign = R87;
  y87.exports = YJ1;
});

// Register to shared state
__$.I87 = I87;
