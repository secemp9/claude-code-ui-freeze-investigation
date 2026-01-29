// Module: gpA
// Dependencies: B5, bB6, o6, IPA, DDJ, jDJ, xB6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gpA = k(() => {
  __$.B5();
  __$.bB6 = __$.o6() === "macos" ? "opt" : "alt", __$.IPA = __$.o6() === "windows" ? {
    displayText: `${__$.bB6}+v`,
    check: (A, K) => K.meta && (A === "v" || A === "V")
  } : {
    displayText: "ctrl+v",
    check: (A, K) => K.ctrl && (A === "v" || A === "V")
  }, __$.DDJ = {
    displayText: `${__$.bB6}+p`,
    check: (A, K) => K.meta && (A === "p" || A === "P")
  }, __$.jDJ = {
    displayText: `${__$.bB6}+t`,
    check: (A, K) => K.meta && (A === "t" || A === "T")
  }, __$.xB6 = {
    "†": "alt+t",
    π: "alt+p"
  };
});

// Register to shared state
__$.gpA = gpA;
