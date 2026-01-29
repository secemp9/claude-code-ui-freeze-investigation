// Module: wb
// Dependencies: p7, C1, CK, Z1, l6, l1, B5, b1, Vz8, Nb1
//   ... and 19 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wb = k(() => {
  __$.p7();
  __$.C1();
  __$.CK();
  __$.Z1();
  __$.l6();
  __$.l1();
  __$.B5();
  __$.b1();
  __$.Vz8 = o(__$.Nb1(), 1), __$.jDq = __$._Dq(import.meta.url), __$.MDq = __$.wi.join(__$.jDq, "../"), __$.$aA = __$.z6(() => {
    if (__$.J2(process.env.USE_BUILTIN_RIPGREP)) {
      let {
        cmd: Y
      } = __$.Vz8.findActualExecutable("rg", []);
      if (Y !== "rg") return {
        mode: "system",
        command: "rg",
        args: []
      };
    }
    if (__$.n9()) {
      if (process.env.RIPGREP_EMBEDDED === "true") return {
        mode: "embedded",
        command: process.execPath,
        args: [],
        argv0: "rg"
      };
      return {
        mode: "builtin",
        command: process.execPath,
        args: ["--ripgrep"]
      };
    }
    let K = __$.wi.resolve(__$.MDq, "vendor", "ripgrep");
    return {
      mode: "builtin",
      command: process.platform === "win32" ? __$.wi.resolve(K, "x64-win32", "rg.exe") : __$.wi.resolve(K, `${process.arch}-${process.platform}`, "rg"),
      args: []
    };
  });
  __$.fz8 = class fz8 extends Error {
    partialResults;
    constructor(A, K) {
      super(A);
      this.partialResults = K;
      this.name = "RipgrepTimeoutError";
    }
  };
  __$._aA = __$.z6(async (A, K, q = []) => {
    if (__$.wi.resolve(A) === __$.wi.resolve(__$.GDq())) return;
    try {
      let Y = ["--files", "--hidden"];
      q.forEach(O => {
        Y.push("--glob", `!${O}`);
      });
      let w = (await __$.zb(Y, A, K)).length;
      if (w === 0) return 0;
      let H = Math.floor(Math.log10(w)),
        J = Math.pow(10, H);
      return Math.round(w / J) * J;
    } catch (Y) {
      __$.KA(Y instanceof Error ? Y : Error(String(Y)));
    }
  });
  __$.VDq = __$.z6(async () => {
    if (__$.XaA !== null) return;
    let A = __$.$aA();
    try {
      let K;
      if (A.argv0) {
        let Y = __$.DDq(A.command, ["--version"], {
          argv0: A.argv0,
          encoding: "utf8",
          timeout: 5000
        });
        K = {
          code: Y.status ?? 1,
          stdout: Y.stdout || ""
        };
      } else K = await __$.R6(A.command, [...A.args, "--version"], {
        timeout: 5000
      });
      let q = K.code === 0 && !!K.stdout && K.stdout.startsWith("ripgrep ");
      __$.XaA = {
        working: q,
        lastTested: Date.now(),
        config: A
      }, __$.h(`Ripgrep first use test: ${q ? "PASSED" : "FAILED"} (mode=${A.mode}, path=${A.command})`), __$.n("tengu_ripgrep_availability", {
        working: q ? 1 : 0,
        using_system: A.mode === "system" ? 1 : 0
      });
    } catch (K) {
      __$.XaA = {
        working: !1,
        lastTested: Date.now(),
        config: A
      }, __$.KA(K instanceof Error ? K : Error(String(K)));
    }
  });
});

// Register to shared state
__$.wb = wb;
