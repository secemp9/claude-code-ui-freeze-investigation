// Module: Hk1
// Dependencies: cA, mA, L3, l1, A4, C8, _N, $A, P1z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Hk1 = k(() => {
  __$.cA();
  __$.mA();
  __$.L3();
  __$.l1();
  __$.A4();
  __$.C8();
  __$._N = o(__$.$A(), 1), __$.P1z = {
    accept: "tell Claude what to do next",
    reject: "tell Claude what to do differently"
  };
});

// Register to shared state
__$.Hk1 = Hk1;
