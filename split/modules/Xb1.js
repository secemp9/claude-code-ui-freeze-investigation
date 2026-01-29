// Module: Xb1
// Dependencies: PoA, Qg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xb1 = v(EY8 => {
  Object.defineProperty(EY8, "__esModule", {
    value: !0
  });
  EY8.timestamp = void 0;
  var ZOq = __$.PoA(),
    WOq = __$.Qg();
  function DOq(A) {
    if (A === void 0) A = ZOq.dateTimestampProvider;
    return WOq.map(function (K) {
      return {
        value: K,
        timestamp: A.now()
      };
    });
  }
  EY8.timestamp = DOq;
});

// Register to shared state
__$.Xb1 = Xb1;
