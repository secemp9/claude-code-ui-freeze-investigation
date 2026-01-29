// Module: B51
// Dependencies: e04, $A, AX4, u51

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B51 = k(() => {
  __$.e04 = o(__$.$A(), 1), __$.AX4 = __$.e04.createContext({
    activeId: void 0,
    add() {},
    remove() {},
    activate() {},
    deactivate() {},
    enableFocus() {},
    disableFocus() {},
    focusNext() {},
    focusPrevious() {},
    focus() {}
  });
  __$.AX4.displayName = "InternalFocusContext";
  __$.u51 = __$.AX4;
});

// Register to shared state
__$.B51 = B51;
