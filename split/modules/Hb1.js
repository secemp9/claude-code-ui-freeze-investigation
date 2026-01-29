// Module: Hb1
// Dependencies: tP, loA, Fl

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Hb1 = v(MY8 => {
  Object.defineProperty(MY8, "__esModule", {
    value: !0
  });
  MY8.throttleTime = void 0;
  var AOq = __$.tP(),
    KOq = __$.loA(),
    qOq = __$.Fl();
  function YOq(A, K, q) {
    if (K === void 0) K = AOq.asyncScheduler;
    var Y = qOq.timer(A, K);
    return KOq.throttle(function () {
      return Y;
    }, q);
  }
  MY8.throttleTime = YOq;
});

// Register to shared state
__$.Hb1 = Hb1;
