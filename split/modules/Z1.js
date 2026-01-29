// Module: Z1
// Dependencies: p7, al6, e6, l6, q6, R2, b1, DzA, z6, P1
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Z1 = k(() => {
  __$.p7();
  __$.al6();
  __$.e6();
  __$.l6();
  __$.q6();
  __$.R2();
  __$.b1();
  __$.DzA = __$.z6(() => {
    return __$.P1(process.env.DEBUG) || __$.P1(process.env.DEBUG_SDK) || process.argv.includes("--debug") || process.argv.includes("-d") || __$.ph() || process.argv.some(A => A.startsWith("--debug=")) || __$.or6() !== null;
  }), __$.srK = __$.z6(() => {
    let A = process.argv.find(q => q.startsWith("--debug="));
    if (!A) return null;
    let K = A.substring(8);
    return __$.rl6(K);
  }), __$.ph = __$.z6(() => {
    return process.argv.includes("--debug-to-stderr") || process.argv.includes("-d2e");
  }), __$.or6 = __$.z6(() => {
    for (let A = 0; A < process.argv.length; A++) {
      let K = process.argv[A];
      if (K.startsWith("--debug-file=")) return K.substring(13);
      if (K === "--debug-file" && A + 1 < process.argv.length) return process.argv[A + 1];
    }
    return null;
  });
  __$.AoK = __$.z6(() => {
    if (process.argv[2] === "--ripgrep") return;
    try {
      let A = __$.bNA(),
        K = __$.CR1(A),
        q = __$.rr6(K, "latest");
      if (!__$.BA().existsSync(K)) __$.BA().mkdirSync(K);
      if (__$.BA().existsSync(q)) try {
        __$.BA().unlinkSync(q);
      } catch {}
      __$.BA().symlinkSync(A, q);
    } catch {}
  });
});

// Register to shared state
__$.Z1 = Z1;
