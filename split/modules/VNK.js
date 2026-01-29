// Module: VNK
// Dependencies: MNK, f_, _Q6, $A, ti2, I$, jNK, PNK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VNK = k(() => {
  __$.MNK();
  __$.f_();
  __$._Q6 = o(__$.$A(), 1), __$.ti2 = {
    type: "local-jsx",
    name: "agents",
    description: "Manage agent configurations",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K) {
      let Y = (await K.getAppState()).toolPermissionContext,
        z = __$.I$(Y);
      return __$._Q6.createElement(__$.jNK, {
        tools: z,
        onExit: A
      });
    },
    userFacingName() {
      return "agents";
    }
  }, __$.PNK = __$.ti2;
});

// Register to shared state
__$.VNK = VNK;
