// Module: DV8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DV8 = v(WV8 => {
  Object.defineProperty(WV8, "__esModule", {
    value: !0
  });
  function Ypq(A, K) {
    let q = K && Hpq(K) ? K.getClient() : K,
      Y = q && q.getDsn(),
      z = q && q.getOptions().tunnel;
    return wpq(A, Y) || zpq(A, z);
  }
  function zpq(A, K) {
    if (!K) return !1;
    return ZV8(A) === ZV8(K);
  }
  function wpq(A, K) {
    return K ? A.includes(K.host) : !1;
  }
  function ZV8(A) {
    return A[A.length - 1] === "/" ? A.slice(0, -1) : A;
  }
  function Hpq(A) {
    return A.getClient !== void 0;
  }
  WV8.isSentryRequestUrl = Ypq;
});

// Register to shared state
__$.DV8 = DV8;
