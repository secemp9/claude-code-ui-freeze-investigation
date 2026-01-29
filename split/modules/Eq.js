// Module: Eq
// Dependencies: cA, mA, MI, $A, G37, Z37

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Eq = k(() => {
  __$.cA();
  __$.mA();
  __$.MI = o(__$.$A(), 1), __$.G37 = o(__$.$A(), 1);
  __$.Z37 = __$.MI.createContext(!1);
});

// Register to shared state
__$.Eq = Eq;
