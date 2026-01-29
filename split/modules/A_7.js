// Module: A_7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var A_7 = v((Y4H, e$7) => {
  var hD6 = {};
  e$7.exports = hD6;
  var t$7 = {};
  hD6.encode = function (A, K, q) {
    if (typeof K !== "string") throw TypeError('"alphabet" must be a string.');
    if (q !== void 0 && typeof q !== "number") throw TypeError('"maxline" must be a number.');
    var Y = "";
    if (!(A instanceof Uint8Array)) Y = $NY(A, K);else {
      var z = 0,
        w = K.length,
        H = K.charAt(0),
        J = [0];
      for (z = 0; z < A.length; ++z) {
        for (var O = 0, X = A[z]; O < J.length; ++O) X += J[O] << 8, J[O] = X % w, X = X / w | 0;
        while (X > 0) J.push(X % w), X = X / w | 0;
      }
      for (z = 0; A[z] === 0 && z < A.length - 1; ++z) Y += H;
      for (z = J.length - 1; z >= 0; --z) Y += K[J[z]];
    }
    if (q) {
      var $ = new RegExp(".{1," + q + "}", "g");
      Y = Y.match($).join(`\r
`);
    }
    return Y;
  };
  hD6.decode = function (A, K) {
    if (typeof A !== "string") throw TypeError('"input" must be a string.');
    if (typeof K !== "string") throw TypeError('"alphabet" must be a string.');
    var q = t$7[K];
    if (!q) {
      q = t$7[K] = [];
      for (var Y = 0; Y < K.length; ++Y) q[K.charCodeAt(Y)] = Y;
    }
    A = A.replace(/\s/g, "");
    var z = K.length,
      w = K.charAt(0),
      H = [0];
    for (var Y = 0; Y < A.length; Y++) {
      var J = q[A.charCodeAt(Y)];
      if (J === void 0) return;
      for (var O = 0, X = J; O < H.length; ++O) X += H[O] * z, H[O] = X & 255, X >>= 8;
      while (X > 0) H.push(X & 255), X >>= 8;
    }
    for (var $ = 0; A[$] === w && $ < A.length - 1; ++$) H.push(0);
    if (typeof Buffer < "u") return Buffer.from(H.reverse());
    return new Uint8Array(H.reverse());
  };
  function $NY(A, K) {
    var q = 0,
      Y = K.length,
      z = K.charAt(0),
      w = [0];
    for (q = 0; q < A.length(); ++q) {
      for (var H = 0, J = A.at(q); H < w.length; ++H) J += w[H] << 8, w[H] = J % Y, J = J / Y | 0;
      while (J > 0) w.push(J % Y), J = J / Y | 0;
    }
    var O = "";
    for (q = 0; A.at(q) === 0 && q < A.length() - 1; ++q) O += z;
    for (q = w.length - 1; q >= 0; --q) O += K[w[q]];
    return O;
  }
});

// Register to shared state
__$.A_7 = A_7;
