// Module: V88
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V88 = v(P88 => {
  Object.defineProperty(P88, "__esModule", {
    value: !0
  });
  P88.performanceTimestampProvider = void 0;
  P88.performanceTimestampProvider = {
    now: function () {
      return (P88.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: void 0
  };
});

// Register to shared state
__$.V88 = V88;
