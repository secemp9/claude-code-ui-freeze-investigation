// Module: C1
// Dependencies: q6, pNA, e6, p7, l6, b1, wz, krA, RzA, b$z
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var C1 = k(() => {
  __$.q6();
  __$.pNA();
  __$.e6();
  __$.p7();
  __$.l6();
  __$.b1();
  __$.wz();
  __$.krA = [];
  __$.RzA = [];
  __$.b$z = __$.z6(() => {
    return process.argv.includes("--hard-fail");
  });
});

// Register to shared state
__$.C1 = C1;
