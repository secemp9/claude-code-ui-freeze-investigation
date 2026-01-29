// Module: BGK
// Dependencies: cA, mA, C8, hB2, $A, bB2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BGK = k(() => {
  __$.cA();
  __$.mA();
  __$.C8();
  __$.hB2 = o(__$.$A(), 1), __$.bB2 = o(__$.$A(), 1);
});

// Register to shared state
__$.BGK = BGK;
