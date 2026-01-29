// Module: Mh1
// Dependencies: $7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Mh1 = v(V38 => {
  Object.defineProperty(V38, "__esModule", {
    value: !0
  });
  V38.finalize = void 0;
  var xzq = __$.$7();
  function uzq(A) {
    return xzq.operate(function (K, q) {
      try {
        K.subscribe(q);
      } finally {
        q.add(A);
      }
    });
  }
  V38.finalize = uzq;
});

// Register to shared state
__$.Mh1 = Mh1;
