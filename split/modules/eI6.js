// Module: eI6
// Dependencies: UKK, e6, mS, l1, Z1, qP2, YP2, zP2, aI6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eI6 = k(() => {
  __$.UKK();
  __$.e6();
  __$.mS();
  __$.l1();
  __$.Z1();
  __$.qP2 = new Set(["export", "declare", "typeset", "readonly", "local", "unset", "unsetenv"]), __$.YP2 = new Set(["word", "string", "raw_string", "number"]), __$.zP2 = new Set(["command_substitution", "process_substitution"]), __$.aI6 = new Set(["command", "declaration_command"]);
});

// Register to shared state
__$.eI6 = eI6;
