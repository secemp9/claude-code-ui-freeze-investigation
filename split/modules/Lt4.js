// Module: Lt4
// Dependencies: Tt4, vt4, AO6, KO6, Vw1, qO6, kt4, Ct4, YO6, A1Y
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Lt4 = k(() => {
  __$.Tt4();
  __$.vt4 = typeof process < "u" && process.env && process.env.DEBUG || void 0, __$.AO6 = [], __$.KO6 = [], __$.Vw1 = [];
  if (__$.vt4) __$.qO6(__$.vt4);
  __$.kt4 = Object.assign(A => {
    return __$.Ct4(A);
  }, {
    enable: __$.qO6,
    enabled: __$.YO6,
    disable: __$.A1Y,
    log: __$.Nt4
  });
  __$.I_A = __$.kt4;
});

// Register to shared state
__$.Lt4 = Lt4;
