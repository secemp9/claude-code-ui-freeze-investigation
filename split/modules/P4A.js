// Module: P4A
// Dependencies: Ix, bZ, RX4, U51, yX4, p51, IX4, IXA, nK6, M4A
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var P4A = k(() => {
  __$.Ix();
  __$.bZ = {
    CURSOR_VISIBLE: 25,
    ALT_SCREEN: 47,
    ALT_SCREEN_CLEAR: 1049,
    MOUSE_NORMAL: 1000,
    MOUSE_BUTTON: 1002,
    MOUSE_ANY: 1003,
    FOCUS_EVENTS: 1004,
    BRACKETED_PASTE: 2004,
    SYNCHRONIZED_UPDATE: 2026
  };
  __$.RX4 = __$.U51(__$.bZ.SYNCHRONIZED_UPDATE), __$.yX4 = __$.p51(__$.bZ.SYNCHRONIZED_UPDATE), __$.IX4 = __$.U51(__$.bZ.BRACKETED_PASTE), __$.IXA = __$.p51(__$.bZ.BRACKETED_PASTE), __$.nK6 = __$.U51(__$.bZ.FOCUS_EVENTS), __$.M4A = __$.p51(__$.bZ.FOCUS_EVENTS), __$.Iy = __$.U51(__$.bZ.CURSOR_VISIBLE), __$.pyA = __$.p51(__$.bZ.CURSOR_VISIBLE);
});

// Register to shared state
__$.P4A = P4A;
