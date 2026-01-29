// Module: Rr
// Dependencies: CK, Z91, p7, e6, Z1, z3, DG9, z6, R6, MG9
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Rr = k(() => {
  __$.CK();
  __$.Z91();
  __$.p7();
  __$.e6();
  __$.Z1();
  __$.z3();
  __$.DG9 = __$.z6(async () => {
    let {
      code: A
    } = await __$.R6("test", ["-f", "/.dockerenv"]);
    if (A !== 0) return !1;
    return process.platform === "linux";
  }), __$.MG9 = __$.z6(() => {
    if (process.platform !== "linux") return !1;
    let A = __$.BA();
    try {
      if (A.existsSync("/lib/libc.musl-x86_64.so.1") || A.existsSync("/lib/libc.musl-aarch64.so.1")) return !0;
      let K = __$.eW("ldd /bin/ls 2>/dev/null");
      return K !== null && K.includes("musl");
    } catch {
      return __$.h("musl detection failed, assuming glibc"), !1;
    }
  });
  __$.QV = {
    ...__$.m6,
    terminal: __$.VG9(),
    getIsDocker: __$.DG9,
    getIsBubblewrapSandbox: __$.jG9,
    isMuslEnvironment: __$.MG9,
    getTerminalWithJetBrainsDetectionAsync: __$.PG9,
    initJetBrainsDetection: __$.R36
  };
});

// Register to shared state
__$.Rr = Rr;
