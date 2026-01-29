// Module: SXA
// Dependencies: O4A, z3, BX4, wr, Cy, et3, _G, qYw, kT, V4A
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SXA = k(() => {
  __$.O4A();
  __$.z3();
  __$.BX4 = __$.wr + String.fromCharCode(__$.Cy.OSC), __$.et3 = __$.wr + "\\";
  __$._G = {
    SET_TITLE_AND_ICON: 0,
    SET_ICON: 1,
    SET_TITLE: 2,
    SET_COLOR: 4,
    SET_CWD: 7,
    HYPERLINK: 8,
    ITERM2: 9,
    SET_FG_COLOR: 10,
    SET_BG_COLOR: 11,
    SET_CURSOR_COLOR: 12,
    CLIPBOARD: 52,
    KITTY: 99,
    RESET_COLOR: 104,
    RESET_FG_COLOR: 110,
    RESET_BG_COLOR: 111,
    RESET_CURSOR_COLOR: 112,
    SEMANTIC_PROMPT: 133,
    GHOSTTY: 777
  };
  __$.qYw = __$.kT(__$._G.HYPERLINK, "", ""), __$.V4A = {
    NOTIFY: 0,
    BADGE: 2,
    PROGRESS: 4
  }, __$.f4A = {
    CLEAR: 0,
    SET: 1,
    ERROR: 2,
    INDETERMINATE: 3
  }, __$.c51 = `${__$.BX4}${__$._G.ITERM2};${__$.V4A.PROGRESS};${__$.f4A.CLEAR};${__$.Hr}`;
});

// Register to shared state
__$.SXA = SXA;
