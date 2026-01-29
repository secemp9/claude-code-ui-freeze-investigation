// Module: MoA
// Dependencies: $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MoA = v(D88 => {
  Object.defineProperty(D88, "__esModule", {
    value: !0
  });
  D88.refCount = void 0;
  var E4q = __$.$7(),
    k4q = __$._K();
  function C4q() {
    return E4q.operate(function (A, K) {
      var q = null;
      A._refCount++;
      var Y = k4q.createOperatorSubscriber(K, void 0, void 0, void 0, function () {
        if (!A || A._refCount <= 0 || 0 < --A._refCount) {
          q = null;
          return;
        }
        var z = A._connection,
          w = q;
        if (q = null, z && (!w || z === w)) z.unsubscribe();
        K.unsubscribe();
      });
      if (A.subscribe(Y), !Y.closed) q = A.connect();
    });
  }
  D88.refCount = C4q;
});

// Register to shared state
__$.MoA = MoA;
