// Module: aeA
// Dependencies: ij, seA, ieA, _6, MF1, rw, neA, PF1, reA, VF1
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aeA = k(() => {
  __$.ij();
  __$.seA();
  __$.ieA = __$._6("ZodISODateTime", (A, K) => {
    __$.MF1.init(A, K), __$.rw.init(A, K);
  });
  __$.neA = __$._6("ZodISODate", (A, K) => {
    __$.PF1.init(A, K), __$.rw.init(A, K);
  });
  __$.reA = __$._6("ZodISOTime", (A, K) => {
    __$.VF1.init(A, K), __$.rw.init(A, K);
  });
  __$.oeA = __$._6("ZodISODuration", (A, K) => {
    __$.fF1.init(A, K), __$.rw.init(A, K);
  });
});

// Register to shared state
__$.aeA = aeA;
