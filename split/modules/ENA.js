// Module: ENA
// Dependencies: gi6, FiA, Fi6, AR1, Qi6, eAA, gL1, UnK, yg, OnA
//   ... and 17 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ENA = k(() => {
  __$.gi6();
  __$.FiA();
  __$.Fi6();
  __$.AR1();
  __$.Qi6();
  __$.eAA();
  __$.gL1();
  __$.UnK = __$.yg(__$.OnA), __$.pnK = __$.yg(__$._l), __$.dnK = __$.yg(__$.XnA), __$.cnK = __$.yg(__$.Dl), __$.lnK = __$.yg(__$.$nA), __$.q1A = __$.IN;
  if (__$.OnA && __$.q1A(new __$.OnA(new ArrayBuffer(1))) != __$.li6 || __$._l && __$.q1A(new __$._l()) != __$.Ui6 || __$.XnA && __$.q1A(__$.XnA.resolve()) != __$.pi6 || __$.Dl && __$.q1A(new __$.Dl()) != __$.di6 || __$.$nA && __$.q1A(new __$.$nA()) != __$.ci6) __$.q1A = function (A) {
    var K = __$.IN(A),
      q = K == __$.QnK ? A.constructor : void 0,
      Y = q ? __$.yg(q) : "";
    if (Y) switch (Y) {
      case __$.UnK:
        return __$.li6;
      case __$.pnK:
        return __$.Ui6;
      case __$.dnK:
        return __$.pi6;
      case __$.cnK:
        return __$.di6;
      case __$.lnK:
        return __$.ci6;
    }
    return K;
  };
  __$.hg = __$.q1A;
});

// Register to shared state
__$.ENA = ENA;
