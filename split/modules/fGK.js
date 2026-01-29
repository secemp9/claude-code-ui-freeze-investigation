// Module: fGK
// Dependencies: VGK, g2, Im6, $A, DkJ, V31, PGK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fGK = k(() => {
  __$.VGK();
  __$.g2();
  __$.Im6 = o(__$.$A(), 1), __$.DkJ = {
    type: "local-jsx",
    name: "discover",
    description: "Explore Claude Code features and track your progress",
    isEnabled: __$.V31,
    isHidden: !__$.V31(),
    async call(A) {
      return __$.Im6.createElement(__$.PGK, {
        onClose: A
      });
    },
    userFacingName() {
      return "discover";
    }
  };
});

// Register to shared state
__$.fGK = fGK;
