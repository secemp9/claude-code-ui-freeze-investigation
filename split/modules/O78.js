// Module: O78
// Dependencies: xz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var O78 = v(H78 => {
  Object.defineProperty(H78, "__esModule", {
    value: !0
  });
  H78.scheduleArray = void 0;
  var nKq = __$.xz();
  function rKq(A, K) {
    return new nKq.Observable(function (q) {
      var Y = 0;
      return K.schedule(function () {
        if (Y === A.length) q.complete();else if (q.next(A[Y++]), !q.closed) this.schedule();
      });
    });
  }
  H78.scheduleArray = rKq;
});

// Register to shared state
__$.O78 = O78;
