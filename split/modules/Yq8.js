// Module: Yq8
// Dependencies: WwA, Y3, hR, eP, Fg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Yq8 = v(Kq8 => {
  Object.defineProperty(Kq8, "__esModule", {
    value: !0
  });
  Kq8.merge = void 0;
  var l3q = __$.WwA(),
    i3q = __$.Y3(),
    n3q = __$.hR(),
    Aq8 = __$.eP(),
    r3q = __$.Fg();
  function o3q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = Aq8.popScheduler(A),
      Y = Aq8.popNumber(A, 1 / 0),
      z = A;
    return !z.length ? n3q.EMPTY : z.length === 1 ? i3q.innerFrom(z[0]) : l3q.mergeAll(Y)(r3q.from(z, q));
  }
  Kq8.merge = o3q;
});

// Register to shared state
__$.Yq8 = Yq8;
