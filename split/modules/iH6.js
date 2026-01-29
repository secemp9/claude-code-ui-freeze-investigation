// Module: iH6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iH6 = v((pTw, no4) => {
  var DhA = CA("buffer").Buffer,
    lH6 = CA("buffer").SlowBuffer;
  no4.exports = zw1;
  function zw1(A, K) {
    if (!DhA.isBuffer(A) || !DhA.isBuffer(K)) return !1;
    if (A.length !== K.length) return !1;
    var q = 0;
    for (var Y = 0; Y < A.length; Y++) q |= A[Y] ^ K[Y];
    return q === 0;
  }
  zw1.install = function () {
    DhA.prototype.equal = lH6.prototype.equal = function (K) {
      return zw1(this, K);
    };
  };
  var Ot9 = DhA.prototype.equal,
    Xt9 = lH6.prototype.equal;
  zw1.restore = function () {
    DhA.prototype.equal = Ot9, lH6.prototype.equal = Xt9;
  };
});

// Register to shared state
__$.iH6 = iH6;
