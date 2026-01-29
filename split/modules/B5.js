// Module: B5
// Dependencies: p7, C1, e6, bb1, o6, z6, BA, KA, h1A, h28

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B5 = k(() => {
  __$.p7();
  __$.C1();
  __$.e6();
  __$.bb1 = ["macos", "wsl"], __$.o6 = __$.z6(() => {
    try {
      if (process.platform === "darwin") return "macos";
      if (process.platform === "win32") return "windows";
      if (process.platform === "linux") {
        try {
          let A = __$.BA().readFileSync("/proc/version", {
            encoding: "utf8"
          });
          if (A.toLowerCase().includes("microsoft") || A.toLowerCase().includes("wsl")) return "wsl";
        } catch (A) {
          __$.KA(A instanceof Error ? A : Error(String(A)));
        }
        return "linux";
      }
      return "unknown";
    } catch (A) {
      return __$.KA(A instanceof Error ? A : Error(String(A))), "unknown";
    }
  }), __$.h1A = __$.z6(() => {
    if (process.platform !== "linux") return;
    try {
      let A = __$.BA().readFileSync("/proc/version", {
          encoding: "utf8"
        }),
        K = A.match(/WSL(\d+)/i);
      if (K && K[1]) return K[1];
      if (A.toLowerCase().includes("microsoft")) return "1";
      return;
    } catch (A) {
      __$.KA(A instanceof Error ? A : Error(String(A)));
      return;
    }
  }), __$.h28 = __$.o6() !== "windows";
});

// Register to shared state
__$.B5 = B5;
