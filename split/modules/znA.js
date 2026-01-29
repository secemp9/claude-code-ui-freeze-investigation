// Module: znA
// Dependencies: yi6, AnA, YnA, Si6, uh, PnK, p2A, Ri6, d2A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var znA = k(() => {
  __$.yi6();
  __$.AnA();
  __$.YnA();
  __$.Si6 = __$.uh && __$.uh.isTypedArray, __$.PnK = __$.Si6 ? __$.p2A(__$.Si6) : __$.Ri6, __$.d2A = __$.PnK;
});

// Register to shared state
__$.znA = znA;
