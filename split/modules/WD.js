// Module: WD
// Dependencies: Ju8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WD = v(_X5 => {
  var Ou8 = __$.Ju8(),
    XX5 = A => A[Ou8.SMITHY_CONTEXT_KEY] || (A[Ou8.SMITHY_CONTEXT_KEY] = {}),
    $X5 = A => {
      if (typeof A === "function") return A;
      let K = Promise.resolve(A);
      return () => K;
    };
  _X5.getSmithyContext = XX5;
  _X5.normalizeProvider = $X5;
});

// Register to shared state
__$.WD = WD;
