// Module: C1K
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var C1K = v(E1K => {
  Object.defineProperty(E1K, "__esModule", {
    value: !0
  });
  E1K.pickBy = void 0;
  var QG2 = function (A, K) {
    return Object.keys(A).filter(function (q) {
      return K(q, A[q]);
    }).reduce(function (q, Y) {
      return q[Y] = A[Y], q;
    }, {});
  };
  E1K.pickBy = QG2;
});

// Register to shared state
__$.C1K = C1K;
