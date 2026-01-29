// Module: MVK
// Dependencies: i6, l1, g2, Hl2, wl2, jVK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MVK = k(() => {
  __$.i6();
  __$.l1();
  __$.g2();
  __$.Hl2 = {
    name: "vim",
    description: "Toggle between Vim and Normal editing modes",
    isEnabled: () => !0,
    isHidden: !1,
    supportsNonInteractive: !1,
    type: "local",
    userFacingName: () => "vim",
    call: __$.wl2
  }, __$.jVK = __$.Hl2;
});

// Register to shared state
__$.MVK = MVK;
