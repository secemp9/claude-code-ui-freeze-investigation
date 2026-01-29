// Module: vNK
// Dependencies: g2, An2, l7, TNK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vNK = k(() => {
  __$.g2();
  __$.An2 = {
    description: "Restore the code and/or conversation to a previous point",
    name: "rewind",
    aliases: ["checkpoint"],
    userFacingName: () => "rewind",
    argumentHint: "",
    isEnabled: () => !0,
    type: "local",
    isHidden: !1,
    supportsNonInteractive: !1,
    async call(A, K) {
      if (__$.l7("rewind"), K.openMessageSelector) K.openMessageSelector();
      return {
        type: "skip"
      };
    }
  }, __$.TNK = __$.An2;
});

// Register to shared state
__$.vNK = vNK;
