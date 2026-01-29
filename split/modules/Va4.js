// Module: Va4
// Dependencies: Wu, cH6, aH6, sH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Va4 = v((iTw, Pa4) => {
  var _a4 = __$.Wu().Buffer,
    $a4 = __$.cH6(),
    Lt9 = __$.aH6(),
    Rt9 = CA("stream"),
    Ga4 = __$.sH6(),
    yt9 = CA("util"),
    It9 = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
  function St9(A) {
    return Object.prototype.toString.call(A) === "[object Object]";
  }
  function ht9(A) {
    if (St9(A)) return A;
    try {
      return JSON.parse(A);
    } catch (K) {
      return;
    }
  }
  function Za4(A) {
    var K = A.split(".", 1)[0];
    return ht9(_a4.from(K, "base64").toString("binary"));
  }
  function bt9(A) {
    return A.split(".", 2).join(".");
  }
  function Wa4(A) {
    return A.split(".")[2];
  }
  function xt9(A, K) {
    K = K || "utf8";
    var q = A.split(".")[1];
    return _a4.from(q, "base64").toString(K);
  }
  function Da4(A) {
    return It9.test(A) && !!Za4(A);
  }
  function ja4(A, K, q) {
    if (!K) {
      var Y = Error("Missing algorithm parameter for jws.verify");
      throw Y.code = "MISSING_ALGORITHM", Y;
    }
    A = Ga4(A);
    var z = Wa4(A),
      w = bt9(A),
      H = Lt9(K);
    return H.verify(w, z, q);
  }
  function Ma4(A, K) {
    if (K = K || {}, A = Ga4(A), !Da4(A)) return null;
    var q = Za4(A);
    if (!q) return null;
    var Y = xt9(A);
    if (q.typ === "JWT" || K.json) Y = JSON.parse(Y, K.encoding);
    return {
      header: q,
      payload: Y,
      signature: Wa4(A)
    };
  }
  function V_A(A) {
    A = A || {};
    var K = A.secret || A.publicKey || A.key,
      q = new $a4(K);
    this.readable = !0, this.algorithm = A.algorithm, this.encoding = A.encoding, this.secret = this.publicKey = this.key = q, this.signature = new $a4(A.signature), this.secret.once("close", function () {
      if (!this.signature.writable && this.readable) this.verify();
    }.bind(this)), this.signature.once("close", function () {
      if (!this.secret.writable && this.readable) this.verify();
    }.bind(this));
  }
  yt9.inherits(V_A, Rt9);
  V_A.prototype.verify = function () {
    try {
      var K = ja4(this.signature.buffer, this.algorithm, this.key.buffer),
        q = Ma4(this.signature.buffer, this.encoding);
      return this.emit("done", K, q), this.emit("data", K), this.emit("end"), this.readable = !1, K;
    } catch (Y) {
      this.readable = !1, this.emit("error", Y), this.emit("close");
    }
  };
  V_A.decode = Ma4;
  V_A.isValid = Da4;
  V_A.verify = ja4;
  Pa4.exports = V_A;
});

// Register to shared state
__$.Va4 = Va4;
