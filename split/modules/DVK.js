// Module: DVK
// Dependencies: cA, mA, BT1, j$, Hc, $A, Yl2, zl2, WVK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DVK = k(() => {
  __$.cA();
  __$.mA();
  __$.BT1();
  __$.j$();
  __$.Hc = o(__$.$A(), 1), __$.Yl2 = {
    type: "local-jsx",
    name: "theme",
    description: "Change the theme",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K) {
      return __$.Hc.createElement(__$.zl2, {
        onDone: A
      });
    },
    userFacingName() {
      return "theme";
    }
  };
  __$.WVK = __$.Yl2;
});

// Register to shared state
__$.DVK = DVK;
