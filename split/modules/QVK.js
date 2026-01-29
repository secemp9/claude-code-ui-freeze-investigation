// Module: QVK
// Dependencies: gVK, i6, l1, xe, cF6, $A, FVK, WVA, M1, D6
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QVK = k(() => {
  __$.gVK();
  __$.i6();
  __$.l1();
  __$.xe();
  __$.cF6 = o(__$.$A(), 1), __$.FVK = {
    type: "local-jsx",
    name: "passes",
    get description() {
      if (__$.WVA()) return "Share a free week of Claude Code with friends and earn extra usage";
      return "Share a free week of Claude Code with friends";
    },
    isEnabled: () => !0,
    isHidden: !1,
    async call(A) {
      let q = !__$.M1().hasVisitedPasses;
      if (q) __$.D6(Y => ({
        ...Y,
        hasVisitedPasses: !0,
        passesLastSeenCampaign: __$.FdA() ?? Y.passesLastSeenCampaign
      }));
      return __$.n("tengu_guest_passes_visited", {
        is_first_visit: q
      }), __$.cF6.createElement(__$.mVK, {
        onDone: A
      });
    },
    userFacingName() {
      return "passes";
    }
  };
});

// Register to shared state
__$.QVK = QVK;
