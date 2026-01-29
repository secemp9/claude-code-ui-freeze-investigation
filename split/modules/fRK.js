// Module: fRK
// Dependencies: mA, g4, Ip6, l1, C1, Z1, fc, $A, Pk1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fRK = k(() => {
  __$.mA();
  __$.g4();
  __$.Ip6();
  __$.l1();
  __$.C1();
  __$.Z1();
  __$.fc = o(__$.$A(), 1), __$.Pk1 = o(__$.$A(), 1);
});

// Register to shared state
__$.fRK = fRK;
