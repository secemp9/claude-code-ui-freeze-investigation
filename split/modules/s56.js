// Module: s56
// Dependencies: RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var s56 = v($M4 => {
  Object.defineProperty($M4, "__esModule", {
    value: !0
  });
  $M4.loggingErrorHandler = void 0;
  var $q9 = __$.RK();
  function _q9() {
    return A => {
      $q9.diag.error(Gq9(A));
    };
  }
  $M4.loggingErrorHandler = _q9;
  function Gq9(A) {
    if (typeof A === "string") return A;else return JSON.stringify(Zq9(A));
  }
  function Zq9(A) {
    let K = {},
      q = A;
    while (q !== null) Object.getOwnPropertyNames(q).forEach(Y => {
      if (K[Y]) return;
      let z = q[Y];
      if (z) K[Y] = String(z);
    }), q = Object.getPrototypeOf(q);
    return K;
  }
});

// Register to shared state
__$.s56 = s56;
