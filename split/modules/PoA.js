// Module: PoA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PoA = v(h88 => {
  Object.defineProperty(h88, "__esModule", {
    value: !0
  });
  h88.dateTimestampProvider = void 0;
  h88.dateTimestampProvider = {
    now: function () {
      return (h88.dateTimestampProvider.delegate || Date).now();
    },
    delegate: void 0
  };
});

// Register to shared state
__$.PoA = PoA;
