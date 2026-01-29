// Module: xVK
// Dependencies: SVK, dF6, $A, bl2, IVK, bVK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xVK = k(() => {
  __$.SVK();
  __$.dF6 = o(__$.$A(), 1), __$.bl2 = {
    type: "local-jsx",
    name: "permissions",
    aliases: ["allowed-tools"],
    description: "Manage allow & deny tool permission rules",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A) {
      return __$.dF6.createElement(__$.IVK, {
        onExit: A
      });
    },
    userFacingName() {
      return "permissions";
    }
  }, __$.bVK = __$.bl2;
});

// Register to shared state
__$.xVK = xVK;
