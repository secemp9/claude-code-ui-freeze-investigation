// Module: mS1
// Dependencies: tP, Fl

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mS1 = v(tK8 => {
  Object.defineProperty(tK8, "__esModule", {
    value: !0
  });
  tK8.interval = void 0;
  var p3q = __$.tP(),
    d3q = __$.Fl();
  function c3q(A, K) {
    if (A === void 0) A = 0;
    if (K === void 0) K = p3q.asyncScheduler;
    if (A < 0) A = 0;
    return d3q.timer(A, A, K);
  }
  tK8.interval = c3q;
});

// Register to shared state
__$.mS1 = mS1;
