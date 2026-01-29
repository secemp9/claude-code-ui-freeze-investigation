// Module: jQA
// Dependencies: C1, x4, nD, AP1, i6, X4K, $4K, $A, JD2, oU
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jQA = k(() => {
  __$.C1();
  __$.x4();
  __$.nD();
  __$.AP1();
  __$.i6();
  __$.X4K();
  __$.$4K = o(__$.$A(), 1), __$.JD2 = {
    type: "local-jsx",
    name: "extra-usage",
    description: "Configure extra usage to keep working when limits are hit",
    isEnabled: () => {
      if (process.env.DISABLE_EXTRA_USAGE_COMMAND) return !1;
      if (!__$.oU()) return !1;
      if (__$.DI()) return !0;
      let A = __$.Uq();
      return A === "pro" || A === "max";
    },
    isHidden: !1,
    async call(A, K) {
      let q = __$.Uq(),
        Y = q === "team" || q === "enterprise",
        z = __$.yu(),
        w = __$.DI(),
        H = __$.$5()?.hasExtraUsageEnabled === !0;
      if (!z && Y) {
        if (w) {
          try {
            let O = await __$.O4K("limit_increase", ["pending", "dismissed"]);
            if (O && O.length > 0) return A("You have already submitted a request for extra usage to your admin."), null;
          } catch (O) {
            __$.KA(O);
          }
          try {
            return await __$.J4K({
              request_type: "limit_increase",
              details: null
            }), A(H ? "Request sent to your admin to increase extra usage." : "Request sent to your admin to enable extra usage."), null;
          } catch (O) {
            __$.KA(O);
          }
        }
        return A("Please contact your admin to manage extra usage settings."), null;
      }
      let J = Y ? "https://claude.ai/admin-settings/usage" : "https://claude.ai/settings/usage";
      try {
        return await __$.MY(J), __$.$4K.default.createElement(__$.ZQA, {
          startingMessage: "Starting new login following /extra-usage. Exit with Ctrl-C to use existing account.",
          onDone: O => {
            K.onChangeAPIKey(), A(O ? "Login successful" : "Login interrupted");
          }
        });
      } catch (O) {
        __$.KA(O), A(`Failed to open browser. Please visit ${J} to see your extra usage.`);
      }
      return null;
    },
    userFacingName() {
      return "extra-usage";
    }
  }, __$.fd = __$.JD2;
});

// Register to shared state
__$.jQA = jQA;
