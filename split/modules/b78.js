// Module: b78
// Dependencies: xz, Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var b78 = v(S78 => {
  Object.defineProperty(S78, "__esModule", {
    value: !0
  });
  S78.isObservable = void 0;
  var xqq = __$.xz(),
    I78 = __$.Hz();
  function uqq(A) {
    return !!A && (A instanceof xqq.Observable || I78.isFunction(A.lift) && I78.isFunction(A.subscribe));
  }
  S78.isObservable = uqq;
});

// Register to shared state
__$.b78 = b78;
