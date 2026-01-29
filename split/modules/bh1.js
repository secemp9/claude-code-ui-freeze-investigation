// Module: bh1
// Dependencies: $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bh1 = v(e38 => {
  Object.defineProperty(e38, "__esModule", {
    value: !0
  });
  e38.pairwise = void 0;
  var rwq = __$.$7(),
    owq = __$._K();
  function awq() {
    return rwq.operate(function (A, K) {
      var q,
        Y = !1;
      A.subscribe(owq.createOperatorSubscriber(K, function (z) {
        var w = q;
        q = z, Y && K.next([w, z]), Y = !0;
      }));
    });
  }
  e38.pairwise = awq;
});

// Register to shared state
__$.bh1 = bh1;
