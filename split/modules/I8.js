// Module: I8
// Dependencies: p7, rG8, YK, e6, Xw, C1, Z1, dj, B5, GJ
//   ... and 15 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var I8 = k(() => {
  __$.p7();
  __$.rG8();
  __$.YK();
  __$.e6();
  __$.Xw();
  __$.C1();
  __$.Z1();
  __$.dj();
  __$.B5();
  __$.GJ();
  __$.rU();
  __$.q6();
  __$.dm6();
  __$.l6();
  __$.Pf6();
  __$.iM();
  __$.ci();
  __$.ujA();
  __$.b1();
  __$.yT = __$.z6(function () {
    switch (__$.o6()) {
      case "macos":
        return "/Library/Application Support/ClaudeCode";
      case "windows":
        if (__$.zU6("C:\\Program Files\\ClaudeCode")) return "C:\\Program Files\\ClaudeCode";
        return "C:\\ProgramData\\ClaudeCode";
      default:
        return "/etc/claude-code";
    }
  });
  __$.J8 = __$.yq;
});

// Register to shared state
__$.I8 = I8;
