// Module: wV1
// Dependencies: B5, Z1, CK, p7, iI6, z6, o6, R6, h, nI6
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wV1 = k(() => {
  __$.B5();
  __$.Z1();
  __$.CK();
  __$.p7();
  __$.iI6 = __$.z6(async () => {
    if (__$.o6() !== "linux") return !1;
    let K = process.execPath || process.argv[0] || "",
      q = await __$.R6("pacman", ["-Qo", K], {
        timeout: 5000,
        useCwd: !1
      });
    if (q.code === 0 && q.stdout) return __$.h(`Detected pacman installation: ${q.stdout.trim()}`), !0;
    return !1;
  }), __$.nI6 = __$.z6(async () => {
    if (__$.o6() !== "linux") return !1;
    let K = process.execPath || process.argv[0] || "",
      q = await __$.R6("dpkg", ["-S", K], {
        timeout: 5000,
        useCwd: !1
      });
    if (q.code === 0 && q.stdout) return __$.h(`Detected deb installation: ${q.stdout.trim()}`), !0;
    return !1;
  }), __$.rI6 = __$.z6(async () => {
    if (__$.o6() !== "linux") return !1;
    let K = process.execPath || process.argv[0] || "",
      q = await __$.R6("rpm", ["-qf", K], {
        timeout: 5000,
        useCwd: !1
      });
    if (q.code === 0 && q.stdout) return __$.h(`Detected rpm installation: ${q.stdout.trim()}`), !0;
    return !1;
  }), __$.oI6 = __$.z6(async () => {
    if (__$.o6() !== "linux") return !1;
    let K = process.execPath || process.argv[0] || "",
      q = await __$.R6("apk", ["info", "--who-owns", K], {
        timeout: 5000,
        useCwd: !1
      });
    if (q.code === 0 && q.stdout) return __$.h(`Detected apk installation: ${q.stdout.trim()}`), !0;
    return !1;
  }), __$.MMA = __$.z6(async () => {
    if (__$.zV1()) return "homebrew";
    if (__$.lI6()) return "winget";
    if (await __$.iI6()) return "pacman";
    if (await __$.oI6()) return "apk";
    if (await __$.nI6()) return "deb";
    if (await __$.rI6()) return "rpm";
    return "unknown";
  });
});

// Register to shared state
__$.wV1 = wV1;
