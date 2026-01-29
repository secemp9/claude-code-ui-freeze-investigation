// Module: te6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var te6 = v((DGz, se6) => {
  var yAq = "Function.prototype.bind called on incompatible ",
    IAq = Object.prototype.toString,
    SAq = Math.max,
    hAq = "[object Function]",
    ae6 = function (K, q) {
      var Y = [];
      for (var z = 0; z < K.length; z += 1) Y[z] = K[z];
      for (var w = 0; w < q.length; w += 1) Y[w + K.length] = q[w];
      return Y;
    },
    bAq = function (K, q) {
      var Y = [];
      for (var z = q || 0, w = 0; z < K.length; z += 1, w += 1) Y[w] = K[z];
      return Y;
    },
    xAq = function (A, K) {
      var q = "";
      for (var Y = 0; Y < A.length; Y += 1) if (q += A[Y], Y + 1 < A.length) q += K;
      return q;
    };
  se6.exports = function (K) {
    var q = this;
    if (typeof q !== "function" || IAq.apply(q) !== hAq) throw TypeError(yAq + q);
    var Y = bAq(arguments, 1),
      z,
      w = function () {
        if (this instanceof z) {
          var $ = q.apply(this, ae6(Y, arguments));
          if (Object($) === $) return $;
          return this;
        }
        return q.apply(K, ae6(Y, arguments));
      },
      H = SAq(0, q.length - Y.length),
      J = [];
    for (var O = 0; O < H; O++) J[O] = "$" + O;
    if (z = Function("binder", "return function (" + xAq(J, ",") + "){ return binder.apply(this,arguments); }")(w), q.prototype) {
      var X = function () {};
      X.prototype = q.prototype, z.prototype = new X(), X.prototype = null;
    }
    return z;
  };
});

// Register to shared state
__$.te6 = te6;
