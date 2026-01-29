// Module: bq8
// Dependencies: xz, Y3, hR

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bq8 = v(Sq8 => {
  Object.defineProperty(Sq8, "__esModule", {
    value: !0
  });
  Sq8.using = void 0;
  var T9q = __$.xz(),
    v9q = __$.Y3(),
    E9q = __$.hR();
  function k9q(A, K) {
    return new T9q.Observable(function (q) {
      var Y = A(),
        z = K(Y),
        w = z ? v9q.innerFrom(z) : E9q.EMPTY;
      return w.subscribe(q), function () {
        if (Y) Y.unsubscribe();
      };
    });
  }
  Sq8.using = k9q;
});

// Register to shared state
__$.bq8 = bq8;
