// Module: wa6
// Dependencies: to6, Ya6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wa6 = v((f0z, za6) => {
  var V0z = CA("fs"),
    wrA;
  if (process.platform === "win32" || global.TESTING_WINDOWS) wrA = __$.to6();else wrA = __$.Ya6();
  za6.exports = BR1;
  BR1.sync = daK;
  function BR1(A, K, q) {
    if (typeof K === "function") q = K, K = {};
    if (!q) {
      if (typeof Promise !== "function") throw TypeError("callback not provided");
      return new Promise(function (Y, z) {
        BR1(A, K || {}, function (w, H) {
          if (w) z(w);else Y(H);
        });
      });
    }
    wrA(A, K || {}, function (Y, z) {
      if (Y) {
        if (Y.code === "EACCES" || K && K.ignoreErrors) Y = null, z = !1;
      }
      q(Y, z);
    });
  }
  function daK(A, K) {
    try {
      return wrA.sync(A, K || {});
    } catch (q) {
      if (K && K.ignoreErrors || q.code === "EACCES") return !1;else throw q;
    }
  }
});

// Register to shared state
__$.wa6 = wa6;
