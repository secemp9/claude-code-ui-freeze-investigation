// Module: HVK
// Dependencies: BF6, mF6, $A, ec2, ev1, wVK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HVK = k(() => {
  __$.BF6();
  __$.mF6 = o(__$.$A(), 1), __$.ec2 = {
    type: "local-jsx",
    name: "tasks",
    aliases: ["bashes"],
    description: "List and manage background tasks",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K) {
      return __$.mF6.createElement(__$.ev1, {
        toolUseContext: K,
        onDone: A,
        onForegroundTask: K.onForegroundTask
      });
    },
    userFacingName() {
      return "tasks";
    }
  }, __$.wVK = __$.ec2;
});

// Register to shared state
__$.HVK = HVK;
