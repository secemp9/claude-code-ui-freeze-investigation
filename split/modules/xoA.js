// Module: xoA
// Dependencies: $7, _K, jZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xoA = v(B58 => {
  Object.defineProperty(B58, "__esModule", {
    value: !0
  });
  B58.ignoreElements = void 0;
  var S2q = __$.$7(),
    h2q = __$._K(),
    b2q = __$.jZ();
  function x2q() {
    return S2q.operate(function (A, K) {
      A.subscribe(h2q.createOperatorSubscriber(K, b2q.noop));
    });
  }
  B58.ignoreElements = x2q;
});

// Register to shared state
__$.xoA = xoA;
