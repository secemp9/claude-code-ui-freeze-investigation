// Module: Q87
// Dependencies: Wu, aX6, A$6, K$6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Q87 = v((_mw, F87) => {
  var h87 = __$.Wu().Buffer,
    S87 = __$.aX6(),
    U7Y = __$.A$6(),
    p7Y = CA("stream"),
    b87 = __$.K$6(),
    d7Y = CA("util"),
    c7Y = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
  function l7Y(A) {
    return Object.prototype.toString.call(A) === "[object Object]";
  }
  function i7Y(A) {
    if (l7Y(A)) return A;
    try {
      return JSON.parse(A);
    } catch (K) {
      return;
    }
  }
  function x87(A) {
    var K = A.split(".", 1)[0];
    return i7Y(h87.from(K, "base64").toString("binary"));
  }
  function n7Y(A) {
    return A.split(".", 2).join(".");
  }
  function u87(A) {
    return A.split(".")[2];
  }
  function r7Y(A, K) {
    K = K || "utf8";
    var q = A.split(".")[1];
    return h87.from(q, "base64").toString(K);
  }
  function B87(A) {
    return c7Y.test(A) && !!x87(A);
  }
  function m87(A, K, q) {
    if (!K) {
      var Y = Error("Missing algorithm parameter for jws.verify");
      throw Y.code = "MISSING_ALGORITHM", Y;
    }
    A = b87(A);
    var z = u87(A),
      w = n7Y(A),
      H = U7Y(K);
    return H.verify(w, z, q);
  }
  function g87(A, K) {
    if (K = K || {}, A = b87(A), !B87(A)) return null;
    var q = x87(A);
    if (!q) return null;
    var Y = r7Y(A);
    if (q.typ === "JWT" || K.json) Y = JSON.parse(Y, K.encoding);
    return {
      header: q,
      payload: Y,
      signature: u87(A)
    };
  }
  function GGA(A) {
    A = A || {};
    var K = A.secret || A.publicKey || A.key,
      q = new S87(K);
    this.readable = !0, this.algorithm = A.algorithm, this.encoding = A.encoding, this.secret = this.publicKey = this.key = q, this.signature = new S87(A.signature), this.secret.once("close", function () {
      if (!this.signature.writable && this.readable) this.verify();
    }.bind(this)), this.signature.once("close", function () {
      if (!this.secret.writable && this.readable) this.verify();
    }.bind(this));
  }
  d7Y.inherits(GGA, p7Y);
  GGA.prototype.verify = function () {
    try {
      var K = m87(this.signature.buffer, this.algorithm, this.key.buffer),
        q = g87(this.signature.buffer, this.encoding);
      return this.emit("done", K, q), this.emit("data", K), this.emit("end"), this.readable = !1, K;
    } catch (Y) {
      this.readable = !1, this.emit("error", Y), this.emit("close");
    }
  };
  GGA.decode = g87;
  GGA.isValid = B87;
  GGA.verify = m87;
  F87.exports = GGA;
});

// Register to shared state
__$.Q87 = Q87;
