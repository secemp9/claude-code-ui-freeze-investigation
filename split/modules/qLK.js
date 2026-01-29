// Module: qLK
// Dependencies: VYA, z3, Xz, l1, sO, KLK, dAz, cAz, lAz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qLK = k(() => {
  __$.VYA();
  __$.z3();
  __$.Xz();
  __$.l1();
  __$.sO();
  __$.KLK = {
    "accept-once": __$.dAz,
    "accept-session": __$.cAz,
    reject: __$.lAz
  };
});

// Register to shared state
__$.qLK = qLK;
