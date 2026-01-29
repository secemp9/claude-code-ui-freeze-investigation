// Module: XVK
// Dependencies: cA, xu, q6, mA, YdA, lFA, wc, $A, Kl2, Pe
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XVK = k(() => {
  __$.cA();
  __$.xu();
  __$.q6();
  __$.mA();
  __$.YdA();
  __$.lFA();
  __$.wc = o(__$.$A(), 1);
  __$.Kl2 = {
    type: "local-jsx",
    name: "todos",
    description: "List current todo items",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A) {
      let K = await __$.Pe(__$.wc.default.createElement(__$.Al2, null));
      return A(K), null;
    },
    userFacingName() {
      return "todos";
    }
  }, __$.OVK = __$.Kl2;
});

// Register to shared state
__$.XVK = XVK;
