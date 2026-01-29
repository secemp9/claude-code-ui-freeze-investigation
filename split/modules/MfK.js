// Module: MfK
// Dependencies: DfK, f_, l1, iF6, $A, qi2, n, I$, WfK, jfK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MfK = k(() => {
  __$.DfK();
  __$.f_();
  __$.l1();
  __$.iF6 = o(__$.$A(), 1), __$.qi2 = {
    type: "local-jsx",
    name: "hooks",
    description: "Manage hook configurations for tool events",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K) {
      __$.n("tengu_hooks_command", {});
      let Y = (await K.getAppState()).toolPermissionContext,
        z = __$.I$(Y).map(w => w.name);
      return __$.iF6.createElement(__$.WfK, {
        toolNames: z,
        onExit: A
      });
    },
    userFacingName() {
      return "hooks";
    }
  }, __$.jfK = __$.qi2;
});

// Register to shared state
__$.MfK = MfK;
