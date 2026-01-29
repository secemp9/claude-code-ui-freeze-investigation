// Module: to6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var to6 = v((M0z, so6) => {
  so6.exports = ao6;
  ao6.sync = QaK;
  var ro6 = CA("fs");
  function FaK(A, K) {
    var q = K.pathExt !== void 0 ? K.pathExt : process.env.PATHEXT;
    if (!q) return !0;
    if (q = q.split(";"), q.indexOf("") !== -1) return !0;
    for (var Y = 0; Y < q.length; Y++) {
      var z = q[Y].toLowerCase();
      if (z && A.substr(-z.length).toLowerCase() === z) return !0;
    }
    return !1;
  }
  function oo6(A, K, q) {
    if (!A.isSymbolicLink() && !A.isFile()) return !1;
    return FaK(K, q);
  }
  function ao6(A, K, q) {
    ro6.stat(A, function (Y, z) {
      q(Y, Y ? !1 : oo6(z, A, K));
    });
  }
  function QaK(A, K) {
    return oo6(ro6.statSync(A), A, K);
  }
});

// Register to shared state
__$.to6 = to6;
