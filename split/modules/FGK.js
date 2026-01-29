// Module: FGK
// Dependencies: ppA, Fm6, uGK, BGK, gGK, Z1, uB2, $A, Qm6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FGK = k(() => {
  __$.ppA();
  __$.Fm6();
  __$.uGK();
  __$.BGK();
  __$.gGK();
  __$.Z1();
  __$.uB2 = o(__$.$A(), 1), __$.Qm6 = o(__$.$A(), 1);
});

// Register to shared state
__$.FGK = FGK;
