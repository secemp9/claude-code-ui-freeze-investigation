// Module: M36
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var M36 = v(mL4 => {
  Object.defineProperty(mL4, "__esModule", {
    value: !0
  });
  mL4.normalizeType = mL4.normalizeArch = void 0;
  var N_9 = A => {
    switch (A) {
      case "arm":
        return "arm32";
      case "ppc":
        return "ppc32";
      case "x64":
        return "amd64";
      default:
        return A;
    }
  };
  mL4.normalizeArch = N_9;
  var T_9 = A => {
    switch (A) {
      case "sunos":
        return "solaris";
      case "win32":
        return "windows";
      default:
        return A;
    }
  };
  mL4.normalizeType = T_9;
});

// Register to shared state
__$.M36 = M36;
