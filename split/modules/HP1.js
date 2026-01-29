// Module: HP1
// Dependencies: cA, mA, rZA, Eq, nK, Sy6, OP, $A, R4K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HP1 = k(() => {
  __$.cA();
  __$.mA();
  __$.rZA();
  __$.Eq();
  __$.nK();
  __$.Sy6();
  __$.OP = o(__$.$A(), 1), __$.R4K = /(?:^|\n)(Shell cwd was reset to .+)$/;
});

// Register to shared state
__$.HP1 = HP1;
