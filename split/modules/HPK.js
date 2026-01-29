// Module: HPK
// Dependencies: mA, B7, i6, UdA, $A, pdA, Ud2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HPK = k(() => {
  __$.mA();
  __$.B7();
  __$.i6();
  __$.UdA = o(__$.$A(), 1), __$.pdA = o(__$.$A(), 1);
  __$.Ud2 = {
    tip: "",
    color: "dim"
  };
});

// Register to shared state
__$.HPK = HPK;
