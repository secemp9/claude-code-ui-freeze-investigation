// Module: EPK
// Dependencies: mA, KYA, $A, Kc2, PPK, TPK, qc2, VPK, fPK, Yc2
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var EPK = k(() => {
  __$.mA();
  __$.KYA = o(__$.$A(), 1), __$.Kc2 = __$.PPK.length + __$.TPK + 1, __$.qc2 = __$.VPK.length + __$.TPK + __$.fPK.length, __$.Yc2 = __$.NPK.length;
});

// Register to shared state
__$.EPK = EPK;
