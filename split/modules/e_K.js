// Module: e_K
// Dependencies: pT1, Rm6, $A, wu2, dPA, t_K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var e_K = k(() => {
  __$.pT1();
  __$.Rm6 = o(__$.$A(), 1), __$.wu2 = {
    aliases: ["settings"],
    type: "local-jsx",
    name: "config",
    description: "Open config panel",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K) {
      return __$.Rm6.createElement(__$.dPA, {
        onClose: A,
        context: K,
        defaultTab: "Config"
      });
    },
    userFacingName() {
      return "config";
    }
  }, __$.t_K = __$.wu2;
});

// Register to shared state
__$.e_K = e_K;
