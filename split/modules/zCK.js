// Module: zCK
// Dependencies: Nx6, nUA, $8, K7, l1, Fe2, qCK, me2, t1, ge2
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zCK = k(() => {
  __$.Nx6();
  __$.nUA();
  __$.$8();
  __$.K7();
  __$.l1();
  __$.$8();
  __$.Fe2 = {
    name: "session_quality_classifier",
    async shouldRun(A) {
      if (A.querySource !== "repl_main_thread") return !1;
      return __$.qCK(A.messages).length > 0;
    },
    buildMessages(A) {
      let K = __$.qCK(A.messages),
        q = __$.me2(K);
      return [__$.t1({
        content: `Analyze the following conversation between a user and an assistant (assistant responses are hidden).

${q}

Think step-by-step about:
1. Does the user seem frustrated at the Asst based on their messages? Look for signs like repeated corrections, negative language, etc.
2. Has the user explicitly asked to SEND/CREATE/PUSH a pull request to GitHub? This means they want to actually submit a PR to a repository, not just work on code together or prepare changes. Look for explicit requests like: "create a pr", "send a pull request", "push a pr", "open a pr", "submit a pr to github", etc. Do NOT count mentions of working on a PR together, preparing for a PR, or discussing PR content.

Based on your analysis, output:
<frustrated>true/false</frustrated>
<pr_request>true/false</pr_request>`
      })];
    },
    systemPrompt: "You are analyzing user messages from a conversation to detect certain features of the interaction.",
    useTools: !1,
    parseResponse(A) {
      return __$.ge2(A);
    },
    logResult(A, K) {
      if (A.type === "success") {
        let q = A.result;
        if (q.isFrustrated || q.hasPRRequest) __$.n("tengu_session_quality_classification", {
          uuid: A.uuid,
          isFrustrated: q.isFrustrated ? 1 : 0,
          hasPRRequest: q.hasPRRequest ? 1 : 0,
          messageCount: K.queryMessageCount
        });
      }
    },
    getModel: __$._O
  };
});

// Register to shared state
__$.zCK = zCK;
