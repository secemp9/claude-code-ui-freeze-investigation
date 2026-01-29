// Module: Mq1
// Dependencies: q6, C1, zyA, rJA, IH, WH4, vx, INA, cr3, bnA
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Mq1 = k(() => {
  __$.q6();
  __$.C1();
  __$.zyA();
  __$.rJA();
  __$.IH();
  __$.WH4 = __$.vx(async () => {
    if (__$.INA() !== null) return;
    try {
      let A = await __$.cr3();
      __$.bnA(A);
    } catch (A) {
      __$.KA(A);
    }
  });
});

// Register to shared state
__$.Mq1 = Mq1;
