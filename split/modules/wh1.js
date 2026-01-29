// Module: wh1
// Dependencies: C1A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wh1 = v(k58 => {
  Object.defineProperty(k58, "__esModule", {
    value: !0
  });
  k58.count = void 0;
  var W2q = __$.C1A();
  function D2q(A) {
    return W2q.reduce(function (K, q, Y) {
      return !A || A(q, Y) ? K + 1 : K;
    }, 0);
  }
  k58.count = D2q;
});

// Register to shared state
__$.wh1 = wh1;
