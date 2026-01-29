// Module: xwA
// Dependencies: yTA, p7, gO, B5, Z1, y4, Bb1, z6, ub1, VWq
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xwA = k(() => {
  __$.yTA();
  __$.p7();
  __$.gO();
  __$.B5();
  __$.Z1();
  __$.y4();
  __$.Bb1 = __$.z6(() => {
    if (process.env.CLAUDE_CODE_GIT_BASH_PATH) {
      if (__$.ub1(process.env.CLAUDE_CODE_GIT_BASH_PATH)) return process.env.CLAUDE_CODE_GIT_BASH_PATH;
      console.error(`Claude Code was unable to find CLAUDE_CODE_GIT_BASH_PATH path "${process.env.CLAUDE_CODE_GIT_BASH_PATH}"`), process.exit(1);
    }
    let A = __$.VWq("git");
    if (A) {
      let K = __$.p28.join(A, "..", "..", "bin", "bash.exe");
      if (__$.ub1(K)) return K;
    }
    console.error("Claude Code on Windows requires git-bash (https://git-scm.com/downloads/win). If installed but not in PATH, set environment variable pointing to your bash.exe, similar to: CLAUDE_CODE_GIT_BASH_PATH=C:\\Program Files\\Git\\bin\\bash.exe"), process.exit(1);
  });
});

// Register to shared state
__$.xwA = xwA;
