// Module: xTK
// Dependencies: hTK, x4, CS, CQ6, $A, bTK, Z4, HP, STK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xTK = k(() => {
  __$.hTK();
  __$.x4();
  __$.CS();
  __$.CQ6 = o(__$.$A(), 1), __$.bTK = {
    type: "local-jsx",
    name: "remote-env",
    userFacingName() {
      return "remote-env";
    },
    description: "Configure the default remote environment for teleport sessions",
    isEnabled: () => __$.Z4() && __$.HP("allow_remote_sessions"),
    get isHidden() {
      return !__$.Z4() || !__$.HP("allow_remote_sessions");
    },
    async call(A) {
      return __$.CQ6.createElement(__$.STK, {
        onDone: A
      });
    }
  };
});

// Register to shared state
__$.xTK = xTK;
