// Module: w78
// Dependencies: Y3, GwA, ZwA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var w78 = v(Y78 => {
  Object.defineProperty(Y78, "__esModule", {
    value: !0
  });
  Y78.schedulePromise = void 0;
  var dKq = __$.Y3(),
    cKq = __$.GwA(),
    lKq = __$.ZwA();
  function iKq(A, K) {
    return dKq.innerFrom(A).pipe(lKq.subscribeOn(K), cKq.observeOn(K));
  }
  Y78.schedulePromise = iKq;
});

// Register to shared state
__$.w78 = w78;
