// Module: zZK
// Dependencies: qZK, nm6, $A, tB2, KZK, YZK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zZK = k(() => {
  __$.qZK();
  __$.nm6 = o(__$.$A(), 1), __$.tB2 = {
    type: "local-jsx",
    name: "help",
    description: "Show help and available commands",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, {
      options: {
        commands: K
      }
    }) {
      return __$.nm6.createElement(__$.KZK, {
        commands: K,
        onClose: A
      });
    },
    userFacingName() {
      return "help";
    }
  }, __$.YZK = __$.tB2;
});

// Register to shared state
__$.zZK = zZK;
