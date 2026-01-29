// Module: i68
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var i68 = v(c68 => {
  Object.defineProperty(c68, "__esModule", {
    value: !0
  });
  c68.createNotification = c68.nextNotification = c68.errorNotification = c68.COMPLETE_NOTIFICATION = void 0;
  c68.COMPLETE_NOTIFICATION = function () {
    return WoA("C", void 0, void 0);
  }();
  function l8q(A) {
    return WoA("E", void 0, A);
  }
  c68.errorNotification = l8q;
  function i8q(A) {
    return WoA("N", A, void 0);
  }
  c68.nextNotification = i8q;
  function WoA(A, K, q) {
    return {
      kind: A,
      value: K,
      error: q
    };
  }
  c68.createNotification = WoA;
});

// Register to shared state
__$.i68 = i68;
