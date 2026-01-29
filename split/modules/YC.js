// Module: YC
// Dependencies: C1, gZ, p7, Jw, CK, dj, l6, _26, z6, v8
//   ... and 8 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YC = k(() => {
  __$.C1();
  __$.gZ();
  __$.p7();
  __$.Jw();
  __$.CK();
  __$.dj();
  __$.l6();
  __$._26 = __$.z6(async () => {
    let A = Date.now();
    __$.v8("info", "git_status_started");
    let K = Date.now(),
      q = await __$.AD();
    if (__$.v8("info", "git_is_git_check_completed", {
      duration_ms: Date.now() - K,
      is_git: q
    }), !q) return __$.v8("info", "git_status_skipped_not_git", {
      duration_ms: Date.now() - A
    }), null;
    try {
      let Y = Date.now(),
        [z, w, H, J] = await Promise.all([__$.R6("git", ["branch", "--show-current"], {
          preserveOutputOnError: !1
        }).then(({
          stdout: X
        }) => X.trim()), __$.R6("git", ["rev-parse", "--abbrev-ref", "origin/HEAD"], {
          preserveOutputOnError: !1
        }).then(({
          stdout: X
        }) => X.replace("origin/", "").trim()), __$.R6("git", ["status", "--short"], {
          preserveOutputOnError: !1
        }).then(({
          stdout: X
        }) => X.trim()), __$.R6("git", ["log", "--oneline", "-n", "5"], {
          preserveOutputOnError: !1
        }).then(({
          stdout: X
        }) => X.trim())]);
      __$.v8("info", "git_commands_completed", {
        duration_ms: Date.now() - Y,
        status_length: H.length
      });
      let O = H.length > __$.$26 ? H.substring(0, __$.$26) + `
... (truncated because it exceeds 40k characters. If you need more information, run "git status" using BashTool)` : H;
      return __$.v8("info", "git_status_completed", {
        duration_ms: Date.now() - A,
        truncated: H.length > __$.$26
      }), `This is the git status at the start of the conversation. Note that this status is a snapshot in time, and will not update during the conversation.
Current branch: ${z}

Main branch (you will usually use this for PRs): ${w}

Status:
${O || "(clean)"}

Recent commits:
${J}`;
    } catch (Y) {
      return __$.v8("error", "git_status_failed", {
        duration_ms: Date.now() - A
      }), __$.KA(Y instanceof Error ? Y : Error(String(Y))), null;
    }
  }), __$.e0 = __$.z6(async () => {
    let A = Date.now();
    __$.v8("info", "system_context_started");
    let K = __$.P1(process.env.CLAUDE_CODE_REMOTE) ? null : await __$._26();
    return __$.v8("info", "system_context_completed", {
      duration_ms: Date.now() - A,
      has_git_status: K !== null
    }), {
      ...(K ? {
        gitStatus: K
      } : {})
    };
  }), __$.AX = __$.z6(async () => {
    let A = Date.now();
    __$.v8("info", "user_context_started");
    let K = process.env.CLAUDE_CODE_DISABLE_CLAUDE_MDS,
      q = K ? null : __$.w26();
    return __$.v8("info", "user_context_completed", {
      duration_ms: Date.now() - A,
      claudemd_length: q?.length ?? 0,
      claudemd_disabled: Boolean(K)
    }), {
      ...(q ? {
        claudeMd: q
      } : {})
    };
  });
});

// Register to shared state
__$.YC = YC;
