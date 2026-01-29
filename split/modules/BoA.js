// Module: BoA
// Dependencies: TTA, NwA, xoA, uoA, th, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BoA = v(p58 => {
  Object.defineProperty(p58, "__esModule", {
    value: !0
  });
  p58.delayWhen = void 0;
  var m2q = __$.TTA(),
    Q58 = __$.NwA(),
    g2q = __$.xoA(),
    F2q = __$.uoA(),
    Q2q = __$.th(),
    U2q = __$.Y3();
  function U58(A, K) {
    if (K) return function (q) {
      return m2q.concat(K.pipe(Q58.take(1), g2q.ignoreElements()), q.pipe(U58(A)));
    };
    return Q2q.mergeMap(function (q, Y) {
      return U2q.innerFrom(A(q, Y)).pipe(Q58.take(1), F2q.mapTo(q));
    });
  }
  p58.delayWhen = U58;
});

// Register to shared state
__$.BoA = BoA;
