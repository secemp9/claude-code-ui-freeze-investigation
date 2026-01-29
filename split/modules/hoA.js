// Module: hoA
// Dependencies: LoA, tS1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hoA = v(J58 => {
  Object.defineProperty(J58, "__esModule", {
    value: !0
  });
  J58.combineLatestAll = void 0;
  var SYq = __$.LoA(),
    hYq = __$.tS1();
  function bYq(A) {
    return hYq.joinAllInternals(SYq.combineLatest, A);
  }
  J58.combineLatestAll = bYq;
});

// Register to shared state
__$.hoA = hoA;
