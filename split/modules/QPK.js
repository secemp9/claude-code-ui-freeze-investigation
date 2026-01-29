// Module: QPK
// Dependencies: gPK, hF6, $A, mc2, mPK, FPK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QPK = k(() => {
  __$.gPK();
  __$.hF6 = o(__$.$A(), 1), __$.mc2 = {
    type: "local-jsx",
    name: "skills",
    description: "List available skills",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K) {
      return __$.hF6.createElement(__$.mPK, {
        onExit: A,
        commands: K.options.commands
      });
    },
    userFacingName() {
      return "skills";
    }
  }, __$.FPK = __$.mc2;
});

// Register to shared state
__$.QPK = QPK;
