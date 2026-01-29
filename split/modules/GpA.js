// Module: GpA
// Dependencies: e6, Xz, _pA, ZPA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GpA = k(() => {
  __$.e6();
  __$.Xz();
  __$._pA = {
    minimumMessageTokensToInit: 1e4,
    minimumTokensBetweenUpdate: 5000,
    toolCallsBetweenUpdates: 3
  }, __$.ZPA = {
    ...__$._pA
  };
});

// Register to shared state
__$.GpA = GpA;
