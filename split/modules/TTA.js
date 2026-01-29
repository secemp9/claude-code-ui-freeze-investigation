// Module: TTA
// Dependencies: NTA, eP, Fg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TTA = v(yK8 => {
  Object.defineProperty(yK8, "__esModule", {
    value: !0
  });
  yK8.concat = void 0;
  var o5q = __$.NTA(),
    a5q = __$.eP(),
    s5q = __$.Fg();
  function t5q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    return o5q.concatAll()(s5q.from(A, a5q.popScheduler(A)));
  }
  yK8.concat = t5q;
});

// Register to shared state
__$.TTA = TTA;
