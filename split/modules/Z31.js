// Module: Z31
// Dependencies: B5, AIA, Gq6, Zq6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Z31 = k(() => {
  __$.B5();
  __$.AIA = [{
    key: "ctrl+c",
    reason: "Cannot be rebound - used for interrupt/exit (hardcoded)",
    severity: "error"
  }, {
    key: "ctrl+d",
    reason: "Cannot be rebound - used for exit (hardcoded)",
    severity: "error"
  }, {
    key: "ctrl+m",
    reason: "Cannot be rebound - identical to Enter in terminals (both send CR)",
    severity: "error"
  }], __$.Gq6 = [{
    key: "ctrl+z",
    reason: "Unix process suspend (SIGTSTP)",
    severity: "warning"
  }, {
    key: "ctrl+\\",
    reason: "Terminal quit signal (SIGQUIT)",
    severity: "error"
  }], __$.Zq6 = [{
    key: "cmd+c",
    reason: "macOS system copy",
    severity: "error"
  }, {
    key: "cmd+v",
    reason: "macOS system paste",
    severity: "error"
  }, {
    key: "cmd+x",
    reason: "macOS system cut",
    severity: "error"
  }, {
    key: "cmd+q",
    reason: "macOS quit application",
    severity: "error"
  }, {
    key: "cmd+w",
    reason: "macOS close window/tab",
    severity: "error"
  }, {
    key: "cmd+tab",
    reason: "macOS app switcher",
    severity: "error"
  }, {
    key: "cmd+space",
    reason: "macOS Spotlight",
    severity: "error"
  }];
});

// Register to shared state
__$.Z31 = Z31;
