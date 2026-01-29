// Module: jM1
// Dependencies: i6, mA, x4, x$1, ok, ns, kx, Sw, QDA, nL6
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jM1 = k(() => {
  __$.i6();
  __$.mA();
  __$.x4();
  __$.x$1();
  __$.ok();
  __$.ns();
  __$.kx();
  __$.Sw();
  __$.QDA();
  __$.nL6();
  __$.ujA();
  __$.CS();
  __$.B7();
  __$.XR6 = o(__$.$A(), 1);
  __$.Tt7 = {
    type: "local-jsx",
    name: "logout",
    description: "Sign out from your Anthropic account",
    isEnabled: () => !process.env.DISABLE_LOGOUT_COMMAND,
    isHidden: !1,
    async call() {
      await __$.$R6({
        clearOnboarding: !0
      });
      let A = __$.XR6.createElement(__$.V, null, "Successfully logged out from your Anthropic account.");
      return setTimeout(() => {
        __$.Y5(0, "logout");
      }, 200), A;
    },
    userFacingName() {
      return "logout";
    }
  };
});

// Register to shared state
__$.jM1 = jM1;
