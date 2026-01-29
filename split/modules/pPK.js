// Module: pPK
// Dependencies: pT1, bF6, $A, gc2, dPA, UPK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pPK = k(() => {
  __$.pT1();
  __$.bF6 = o(__$.$A(), 1), __$.gc2 = {
    type: "local-jsx",
    name: "status",
    description: "Show Claude Code status including version, model, account, API connectivity, and tool statuses",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K) {
      return __$.bF6.createElement(__$.dPA, {
        onClose: A,
        context: K,
        defaultTab: "Status"
      });
    },
    userFacingName() {
      return "status";
    }
  }, __$.UPK = __$.gc2;
});

// Register to shared state
__$.pPK = pPK;
