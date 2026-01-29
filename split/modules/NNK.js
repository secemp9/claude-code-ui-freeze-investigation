// Module: NNK
// Dependencies: Gg6, GQ6, $A, ei2, rWK, fNK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NNK = k(() => {
  __$.Gg6();
  __$.GQ6 = o(__$.$A(), 1), __$.ei2 = {
    type: "local-jsx",
    name: "plugin",
    aliases: ["plugins", "marketplace"],
    description: "Manage Claude Code plugins",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K, q) {
      return __$.GQ6.createElement(__$.rWK, {
        onComplete: A,
        args: q
      });
    },
    userFacingName() {
      return "plugin";
    }
  }, __$.fNK = __$.ei2;
});

// Register to shared state
__$.NNK = NNK;
