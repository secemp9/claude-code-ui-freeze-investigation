// Module: pS1
// Dependencies: tP, IoA, Fl

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pS1 = v(Fq8 => {
  Object.defineProperty(Fq8, "__esModule", {
    value: !0
  });
  Fq8.auditTime = void 0;
  var g9q = __$.tP(),
    F9q = __$.IoA(),
    Q9q = __$.Fl();
  function U9q(A, K) {
    if (K === void 0) K = g9q.asyncScheduler;
    return F9q.audit(function () {
      return Q9q.timer(A, K);
    });
  }
  Fq8.auditTime = U9q;
});

// Register to shared state
__$.pS1 = pS1;
