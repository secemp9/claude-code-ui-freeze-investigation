// Module: Oh1
// Dependencies: tP, BoA, Fl

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Oh1 = v(c58 => {
  Object.defineProperty(c58, "__esModule", {
    value: !0
  });
  c58.delay = void 0;
  var p2q = __$.tP(),
    d2q = __$.BoA(),
    c2q = __$.Fl();
  function l2q(A, K) {
    if (K === void 0) K = p2q.asyncScheduler;
    var q = c2q.timer(A, K);
    return d2q.delayWhen(function () {
      return q;
    });
  }
  c58.delay = l2q;
});

// Register to shared state
__$.Oh1 = Oh1;
