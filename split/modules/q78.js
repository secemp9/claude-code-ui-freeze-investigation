// Module: q78
// Dependencies: Y3, GwA, ZwA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q78 = v(A78 => {
  Object.defineProperty(A78, "__esModule", {
    value: !0
  });
  A78.scheduleObservable = void 0;
  var FKq = __$.Y3(),
    QKq = __$.GwA(),
    UKq = __$.ZwA();
  function pKq(A, K) {
    return FKq.innerFrom(A).pipe(UKq.subscribeOn(K), QKq.observeOn(K));
  }
  A78.scheduleObservable = pKq;
});

// Register to shared state
__$.q78 = q78;
