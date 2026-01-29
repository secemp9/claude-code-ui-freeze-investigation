// Module: fZK
// Dependencies: jr, PZK, ym, Dm2, gk, Wm2, VZK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fZK = k(() => {
  __$.jr();
  __$.PZK();
  __$.ym();
  __$.Dm2 = {
    name: "keybindings",
    description: "Open or create your keybindings configuration file",
    isEnabled: () => __$.gk(),
    isHidden: !1,
    supportsNonInteractive: !1,
    type: "local",
    userFacingName: () => "keybindings",
    call: __$.Wm2
  }, __$.VZK = __$.Dm2;
});

// Register to shared state
__$.fZK = fZK;
