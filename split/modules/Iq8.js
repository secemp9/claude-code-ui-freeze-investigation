// Module: Iq8
// Dependencies: xz, hR

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Iq8 = v(Rq8 => {
  Object.defineProperty(Rq8, "__esModule", {
    value: !0
  });
  Rq8.range = void 0;
  var V9q = __$.xz(),
    f9q = __$.hR();
  function N9q(A, K, q) {
    if (K == null) K = A, A = 0;
    if (K <= 0) return f9q.EMPTY;
    var Y = K + A;
    return new V9q.Observable(q ? function (z) {
      var w = A;
      return q.schedule(function () {
        if (w < Y) z.next(w++), this.schedule();else z.complete();
      });
    } : function (z) {
      var w = A;
      while (w < Y && !z.closed) z.next(w++);
      z.complete();
    });
  }
  Rq8.range = N9q;
});

// Register to shared state
__$.Iq8 = Iq8;
