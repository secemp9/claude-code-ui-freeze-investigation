// Module: gy1
// Dependencies: nt6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gy1 = v((m_z, ot6) => {
  var rt6 = __$.nt6();
  ot6.exports = HAq;
  function HAq(A) {
    var K = !1;
    return rt6(function () {
      K = !0;
    }), function (Y, z) {
      if (K) A(Y, z);else rt6(function () {
        A(Y, z);
      });
    };
  }
});

// Register to shared state
__$.gy1 = gy1;
