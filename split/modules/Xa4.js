// Module: Xa4
// Dependencies: Wu, cH6, aH6, sH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xa4 = v((lTw, Oa4) => {
  var vt9 = __$.Wu().Buffer,
    za4 = __$.cH6(),
    Et9 = __$.aH6(),
    kt9 = CA("stream"),
    wa4 = __$.sH6(),
    tH6 = CA("util");
  function Ha4(A, K) {
    return vt9.from(A, K).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function Ct9(A, K, q) {
    q = q || "utf8";
    var Y = Ha4(wa4(A), "binary"),
      z = Ha4(wa4(K), q);
    return tH6.format("%s.%s", Y, z);
  }
  function Ja4(A) {
    var {
        header: K,
        payload: q
      } = A,
      Y = A.secret || A.privateKey,
      z = A.encoding,
      w = Et9(K.alg),
      H = Ct9(K, q, z),
      J = w.sign(H, Y);
    return tH6.format("%s.%s", H, J);
  }
  function ww1(A) {
    var K = A.secret || A.privateKey || A.key,
      q = new za4(K);
    this.readable = !0, this.header = A.header, this.encoding = A.encoding, this.secret = this.privateKey = this.key = q, this.payload = new za4(A.payload), this.secret.once("close", function () {
      if (!this.payload.writable && this.readable) this.sign();
    }.bind(this)), this.payload.once("close", function () {
      if (!this.secret.writable && this.readable) this.sign();
    }.bind(this));
  }
  tH6.inherits(ww1, kt9);
  ww1.prototype.sign = function () {
    try {
      var K = Ja4({
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
  ww1.sign = Ja4;
  Oa4.exports = ww1;
});

// Register to shared state
__$.Xa4 = Xa4;
