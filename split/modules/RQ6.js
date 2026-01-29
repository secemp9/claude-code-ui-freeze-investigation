// Module: RQ6
// Dependencies: C1, x4, nD, AP1, _yA, LQ6, $A, Er2, ak, Uq
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RQ6 = k(() => {
  __$.C1();
  __$.x4();
  __$.nD();
  __$.AP1();
  __$._yA();
  __$.LQ6 = o(__$.$A(), 1), __$.Er2 = {
    type: "local-jsx",
    name: "upgrade",
    description: "Upgrade to Max for higher rate limits and more Opus",
    isEnabled: () => !process.env.DISABLE_UPGRADE_COMMAND && !__$.ak() && __$.Uq() !== "enterprise",
    isHidden: !1,
    async call(A, K) {
      try {
        if (__$.Z4()) {
          let Y = __$.LK(),
            z = !1;
          if (Y?.subscriptionType && Y?.rateLimitTier) z = Y.subscriptionType === "max" && Y.rateLimitTier === "default_claude_max_20x";else if (Y?.accessToken) {
            let w = await __$.KXA(Y.accessToken);
            z = w?.organization?.organization_type === "claude_max" && w?.organization?.rate_limit_tier === "default_claude_max_20x";
          }
          if (z) return setTimeout(() => {
            A("You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account.");
          }, 0), null;
        }
        return await __$.MY("https://claude.ai/upgrade/max"), __$.LQ6.createElement(__$.ZQA, {
          startingMessage: "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",
          onDone: Y => {
            K.onChangeAPIKey(), A(Y ? "Login successful" : "Login interrupted");
          }
        });
      } catch (q) {
        __$.KA(q), setTimeout(() => {
          A("Failed to open browser. Please visit https://claude.ai/upgrade/max to upgrade.");
        }, 0);
      }
      return null;
    },
    userFacingName() {
      return "upgrade";
    }
  }, __$.XcA = __$.Er2;
});

// Register to shared state
__$.RQ6 = RQ6;
