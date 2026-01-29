// Module: Eg7
// Dependencies: kB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Eg7 = v((PTH, vg7) => {
  vg7.exports = QgA;
  var qE6 = __$.kB();
  (QgA.prototype = Object.create(qE6.EventEmitter.prototype)).constructor = QgA;
  function QgA(A, K, q) {
    if (typeof A !== "function") throw TypeError("rpcImpl must be a function");
    qE6.EventEmitter.call(this), this.rpcImpl = A, this.requestDelimited = Boolean(K), this.responseDelimited = Boolean(q);
  }
  QgA.prototype.rpcCall = function A(K, q, Y, z, w) {
    if (!z) throw TypeError("request must be specified");
    var H = this;
    if (!w) return qE6.asPromise(A, H, K, q, Y, z);
    if (!H.rpcImpl) {
      setTimeout(function () {
        w(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return H.rpcImpl(K, q[H.requestDelimited ? "encodeDelimited" : "encode"](z).finish(), function (O, X) {
        if (O) return H.emit("error", O, K), w(O);
        if (X === null) {
          H.end(!0);
          return;
        }
        if (!(X instanceof Y)) try {
          X = Y[H.responseDelimited ? "decodeDelimited" : "decode"](X);
        } catch ($) {
          return H.emit("error", $, K), w($);
        }
        return H.emit("data", X, K), w(null, X);
      });
    } catch (J) {
      H.emit("error", J, K), setTimeout(function () {
        w(J);
      }, 0);
      return;
    }
  };
  QgA.prototype.end = function (K) {
    if (this.rpcImpl) {
      if (!K) this.rpcImpl(null, null, null);
      this.rpcImpl = null, this.emit("end").off();
    }
    return this;
  };
});

// Register to shared state
__$.Eg7 = Eg7;
