// Module: Fl
// Dependencies: xz, tP, VTA, CoA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fl = v(aK8 => {
  Object.defineProperty(aK8, "__esModule", {
    value: !0
  });
  aK8.timer = void 0;
  var m3q = __$.xz(),
    g3q = __$.tP(),
    F3q = __$.VTA(),
    Q3q = __$.CoA();
  function U3q(A, K, q) {
    if (A === void 0) A = 0;
    if (q === void 0) q = g3q.async;
    var Y = -1;
    if (K != null) if (F3q.isScheduler(K)) q = K;else Y = K;
    return new m3q.Observable(function (z) {
      var w = Q3q.isValidDate(A) ? +A - q.now() : A;
      if (w < 0) w = 0;
      var H = 0;
      return q.schedule(function () {
        if (!z.closed) if (z.next(H++), 0 <= Y) this.schedule(void 0, Y);else z.complete();
      }, w);
    });
  }
  aK8.timer = U3q;
});

// Register to shared state
__$.Fl = Fl;
