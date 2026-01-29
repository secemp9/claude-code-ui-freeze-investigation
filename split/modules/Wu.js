// Module: Wu
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Wu = v((bH6, Zo4) => {
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var sz1 = CA("buffer"),
    Zu = sz1.Buffer;
  function Go4(A, K) {
    for (var q in A) K[q] = A[q];
  }
  if (Zu.from && Zu.alloc && Zu.allocUnsafe && Zu.allocUnsafeSlow) Zo4.exports = sz1;else Go4(sz1, bH6), bH6.Buffer = u7A;
  function u7A(A, K, q) {
    return Zu(A, K, q);
  }
  u7A.prototype = Object.create(Zu.prototype);
  Go4(Zu, u7A);
  u7A.from = function (A, K, q) {
    if (typeof A === "number") throw TypeError("Argument must not be a number");
    return Zu(A, K, q);
  };
  u7A.alloc = function (A, K, q) {
    if (typeof A !== "number") throw TypeError("Argument must be a number");
    var Y = Zu(A);
    if (K !== void 0) {
      if (typeof q === "string") Y.fill(K, q);else Y.fill(K);
    } else Y.fill(0);
    return Y;
  };
  u7A.allocUnsafe = function (A) {
    if (typeof A !== "number") throw TypeError("Argument must be a number");
    return Zu(A);
  };
  u7A.allocUnsafeSlow = function (A) {
    if (typeof A !== "number") throw TypeError("Argument must be a number");
    return sz1.SlowBuffer(A);
  };
});

// Register to shared state
__$.Wu = Wu;
