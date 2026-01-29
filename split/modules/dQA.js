// Module: dQA
// Dependencies: _MA, _H, Z1, SI6, $A, pQA, dP1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dQA = k(() => {
  __$._MA();
  __$._H();
  __$.Z1();
  __$.SI6 = o(__$.$A(), 1), __$.pQA = new Map();
  __$.dP1 = new Map();
});

// Register to shared state
__$.dQA = dQA;
