// Module: tS1
// Dependencies: MZ, ml, MTA, th, SoA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tS1 = v(w58 => {
  Object.defineProperty(w58, "__esModule", {
    value: !0
  });
  w58.joinAllInternals = void 0;
  var kYq = __$.MZ(),
    CYq = __$.ml(),
    LYq = __$.MTA(),
    RYq = __$.th(),
    yYq = __$.SoA();
  function IYq(A, K) {
    return LYq.pipe(yYq.toArray(), RYq.mergeMap(function (q) {
      return A(q);
    }), K ? CYq.mapOneOrManyArgs(K) : kYq.identity);
  }
  w58.joinAllInternals = IYq;
});

// Register to shared state
__$.tS1 = tS1;
