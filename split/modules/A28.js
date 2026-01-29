// Module: A28
// Dependencies: QS1, Ug

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var A28 = v(tY8 => {
  Object.defineProperty(tY8, "__esModule", {
    value: !0
  });
  tY8.partition = void 0;
  var J_q = __$.QS1(),
    sY8 = __$.Ug();
  function O_q(A, K) {
    return function (q) {
      return [sY8.filter(A, K)(q), sY8.filter(J_q.not(A, K))(q)];
    };
  }
  tY8.partition = O_q;
});

// Register to shared state
__$.A28 = A28;
