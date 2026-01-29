// Module: VNA
// Dependencies: Ni6, bh, Ti6, hiK, biK, xiK, oL1, r$, Sg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VNA = k(() => {
  __$.Ni6();
  __$.bh();
  __$.Ti6 = Object.prototype, __$.hiK = __$.Ti6.hasOwnProperty, __$.biK = __$.Ti6.propertyIsEnumerable, __$.xiK = __$.oL1(function () {
    return arguments;
  }()) ? __$.oL1 : function (A) {
    return __$.r$(A) && __$.hiK.call(A, "callee") && !__$.biK.call(A, "callee");
  }, __$.Sg = __$.xiK;
});

// Register to shared state
__$.VNA = VNA;
