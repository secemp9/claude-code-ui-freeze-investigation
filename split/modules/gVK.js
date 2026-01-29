// Module: gVK
// Dependencies: mA, C8, xe, C1, l1, np, Iq, i4, $A, xm
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gVK = k(() => {
  __$.mA();
  __$.C8();
  __$.xe();
  __$.C1();
  __$.l1();
  __$.np();
  __$.Iq();
  __$.i4 = o(__$.$A(), 1), __$.xm = o(__$.$A(), 1);
  __$.Bl2 = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    BRL: "R$",
    CAD: "CA$",
    AUD: "A$",
    NZD: "NZ$",
    SGD: "S$"
  };
});

// Register to shared state
__$.gVK = gVK;
