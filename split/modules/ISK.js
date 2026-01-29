// Module: ISK
// Dependencies: cA, C8, SQ, _B, j7z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ISK = k(() => {
  __$.cA();
  __$.C8();
  __$.SQ();
  __$._B();
  __$.j7z = {
    setCursorOffset: () => {},
    clearBuffer: () => {},
    resetHistory: () => {}
  };
});

// Register to shared state
__$.ISK = ISK;
