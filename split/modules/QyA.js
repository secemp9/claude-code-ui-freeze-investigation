// Module: QyA
// Dependencies: cA, WX4, $A, Wr, FK6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QyA = k(() => {
  __$.cA();
  __$.WX4 = o(__$.$A(), 1), __$.Wr = o(__$.$A(), 1), __$.FK6 = __$.Wr.createContext({
    theme: null,
    setTheme: A => A,
    setPreviewTheme: A => A,
    savePreview: () => {},
    cancelPreview: () => {},
    currentTheme: null
  });
});

// Register to shared state
__$.QyA = QyA;
