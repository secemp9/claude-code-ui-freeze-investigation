// Module: WPK
// Dependencies: cA, mA, $8, XB, x3A, $PK, GPK, DVA, zh, $A
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WPK = k(() => {
  __$.cA();
  __$.mA();
  __$.$8();
  __$.XB();
  __$.x3A();
  __$.$PK();
  __$.GPK();
  __$.DVA();
  __$.zh = o(__$.$A(), 1);
  __$.ZPK = __$.zh.memo(__$.id2, __$.od2);
});

// Register to shared state
__$.WPK = WPK;
