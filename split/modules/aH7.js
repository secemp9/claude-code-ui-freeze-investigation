// Module: aH7
// Dependencies: _W6, oH7, lR1, _DY, F01

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aH7 = k(() => {
  __$._W6();
  __$.oH7 = o(__$.lR1(), 1), __$._DY = __$.F01.platform === "win32" ? ["APPDATA", "HOMEDRIVE", "HOMEPATH", "LOCALAPPDATA", "PATH", "PROCESSOR_ARCHITECTURE", "SYSTEMDRIVE", "SYSTEMROOT", "TEMP", "USERNAME", "USERPROFILE", "PROGRAMFILES"] : ["HOME", "LOGNAME", "PATH", "SHELL", "TERM", "USER"];
});

// Register to shared state
__$.aH7 = aH7;
