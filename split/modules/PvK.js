// Module: PvK
// Dependencies: jvK, iQ6, $A, yo2, GvK, MvK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PvK = k(() => {
  __$.jvK();
  __$.iQ6 = o(__$.$A(), 1), __$.yo2 = {
    type: "local-jsx",
    name: "stats",
    description: "Show your Claude Code usage statistics and activity",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K, q) {
      return __$.iQ6.createElement(__$.GvK, {
        onClose: A
      });
    },
    userFacingName() {
      return "stats";
    }
  }, __$.MvK = __$.yo2;
});

// Register to shared state
__$.PvK = PvK;
