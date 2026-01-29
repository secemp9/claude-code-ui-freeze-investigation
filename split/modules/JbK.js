// Module: JbK
// Dependencies: p7, A4, Qr, wbK, $A, hd6, z6, TB6, xpA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JbK = k(() => {
  __$.p7();
  __$.A4();
  __$.Qr();
  __$.wbK = o(__$.$A(), 1), __$.hd6 = __$.z6(async (A, K) => {
    if (!A.isBypassPermissionsModeAvailable) return;
    if (!(await __$.TB6())) return;
    K(Y => {
      return {
        ...Y,
        toolPermissionContext: __$.xpA(Y.toolPermissionContext)
      };
    });
  });
});

// Register to shared state
__$.JbK = JbK;
