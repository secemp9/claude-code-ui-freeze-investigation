// Module: $TK
// Dependencies: nD, ln2, MY, XTK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $TK = k(() => {
  __$.nD();
  __$.ln2 = {
    type: "local",
    name: "stickers",
    description: "Order Claude Code stickers",
    isEnabled: () => !0,
    isHidden: !1,
    supportsNonInteractive: !1,
    async call() {
      if (await __$.MY("https://www.stickermule.com/claudecode")) return {
        type: "text",
        value: "Opening sticker page in browser…"
      };else return {
        type: "text",
        value: "Failed to open browser. Visit: https://www.stickermule.com/claudecode"
      };
    },
    userFacingName() {
      return "stickers";
    }
  }, __$.XTK = __$.ln2;
});

// Register to shared state
__$.$TK = $TK;
