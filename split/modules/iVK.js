// Module: iVK
// Dependencies: qE1, QDA, l1, x4, qcA, $A, pl2, dW1, FDA, cVK
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iVK = k(() => {
  __$.qE1();
  __$.QDA();
  __$.l1();
  __$.x4();
  __$.qcA = o(__$.$A(), 1), __$.pl2 = {
    type: "local-jsx",
    name: "privacy-settings",
    description: "View and update your privacy settings",
    isEnabled: () => {
      return __$.dW1();
    },
    isHidden: !1,
    async call(A) {
      if (!(await __$.FDA())) return A(__$.cVK), null;
      let [q, Y] = await Promise.all([__$.gDA(), __$.os()]);
      if (!q.success) return A(__$.cVK), null;
      let z = q.data,
        w = Y.success ? Y.data : null;
      async function H(O) {
        if (O === "escape" || O === "defer") {
          A("Privacy settings dialog dismissed", {
            display: "system"
          });
          return;
        }
        await J();
      }
      async function J() {
        let O = await __$.gDA();
        if (!O.success) {
          A("Unable to retrieve updated privacy settings", {
            display: "system"
          });
          return;
        }
        let X = O.data,
          $ = X.grove_enabled ? "true" : "false";
        if (A(`"Help improve Claude" set to ${$}.`), z.grove_enabled !== null && z.grove_enabled !== X.grove_enabled) __$.n("tengu_grove_policy_toggled", {
          state: X.grove_enabled,
          location: "settings"
        });
      }
      if (z.grove_enabled !== null) return __$.qcA.createElement(__$.pVK, {
        settings: z,
        domainExcluded: w?.domain_excluded,
        onDone: J
      });
      return __$.qcA.createElement(__$.KE1, {
        showIfAlreadyViewed: !0,
        onDone: H,
        location: "settings"
      });
    },
    userFacingName() {
      return "privacy-settings";
    }
  }, __$.lVK = __$.pl2;
});

// Register to shared state
__$.iVK = iVK;
