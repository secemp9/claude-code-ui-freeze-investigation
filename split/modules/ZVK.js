// Module: ZVK
// Dependencies: pT1, gF6, $A, GVK, dPA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZVK = k(() => {
  __$.pT1();
  __$.gF6 = o(__$.$A(), 1), __$.GVK = {
    type: "local-jsx",
    name: "usage",
    description: "Show plan usage limits",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K) {
      return __$.gF6.createElement(__$.dPA, {
        onClose: A,
        context: K,
        defaultTab: "Usage"
      });
    },
    userFacingName() {
      return "usage";
    }
  };
});

// Register to shared state
__$.ZVK = ZVK;
