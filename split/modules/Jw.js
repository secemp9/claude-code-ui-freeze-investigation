// Module: Jw
// Dependencies: p7, CK, Z1, y4, l1, dj, C1, Rl, z6, v8
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jw = k(() => {
  __$.p7();
  __$.CK();
  __$.Z1();
  __$.y4();
  __$.l1();
  __$.dj();
  __$.C1();
  __$.Rl = __$.z6(A => {
    let K = Date.now();
    __$.v8("info", "find_git_root_started");
    let q = __$.qeK(A),
      Y = q.substring(0, q.indexOf(__$.Sy1) + 1) || __$.Sy1,
      z = 0;
    while (q !== Y) {
      try {
        let H = __$.jt6(q, ".git");
        z++;
        let J = __$.Dt6(H);
        if (J.isDirectory() || J.isFile()) return __$.v8("info", "find_git_root_completed", {
          duration_ms: Date.now() - K,
          stat_count: z,
          found: !0
        }), q;
      } catch {}
      let w = __$.YeK(q);
      if (w === q) break;
      q = w;
    }
    try {
      let w = __$.jt6(Y, ".git");
      z++;
      let H = __$.Dt6(w);
      if (H.isDirectory() || H.isFile()) return __$.v8("info", "find_git_root_completed", {
        duration_ms: Date.now() - K,
        stat_count: z,
        found: !0
      }), Y;
    } catch {}
    return __$.v8("info", "find_git_root_completed", {
      duration_ms: Date.now() - K,
      stat_count: z,
      found: !1
    }), null;
  }), __$.AD = __$.z6(async () => {
    let A = Date.now();
    __$.v8("info", "is_git_check_started");
    let {
      code: K
    } = await __$.R6("git", ["rev-parse", "--is-inside-work-tree"]);
    return __$.v8("info", "is_git_check_completed", {
      duration_ms: Date.now() - A,
      is_git: K === 0
    }), K === 0;
  });
});

// Register to shared state
__$.Jw = Jw;
