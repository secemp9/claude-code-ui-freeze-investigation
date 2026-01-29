// Module: XGK
// Dependencies: Ck, x4, jI, g2, Qu2, Z4, l7, zf, d46, OGK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XGK = k(() => {
  __$.Ck();
  __$.x4();
  __$.jI();
  __$.g2();
  __$.Qu2 = {
    type: "local",
    name: "cost",
    description: "Show the total cost and duration of the current session",
    isEnabled: () => !0,
    get isHidden() {
      return __$.Z4();
    },
    supportsNonInteractive: !0,
    async call() {
      if (__$.l7("cost"), __$.Z4()) {
        let A;
        if (__$.zf.isUsingOverage) A = "You are currently using your overages to power your Claude Code usage. We will automatically switch you back to your subscription rate limits when they reset";else A = "You are currently using your subscription to power your Claude Code usage";
        return {
          type: "text",
          value: A
        };
      }
      return {
        type: "text",
        value: __$.d46()
      };
    },
    userFacingName() {
      return "cost";
    }
  }, __$.OGK = __$.Qu2;
});

// Register to shared state
__$.XGK = XGK;
