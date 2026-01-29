// Module: kx
// Dependencies: i6, p7, q6, x4, rP, z3, Ir, z6, my, M1
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kx = k(() => {
  __$.i6();
  __$.p7();
  __$.q6();
  __$.x4();
  __$.rP();
  __$.z3();
  __$.Ir = __$.z6(A => {
    let K = __$.my(),
      q = __$.M1(),
      Y,
      z;
    if (A) {
      if (Y = __$.Uq() ?? void 0, Y && q.claudeCodeFirstTokenDate) {
        let O = new Date(q.claudeCodeFirstTokenDate).getTime();
        if (!isNaN(O)) z = O;
      }
    }
    let w = __$.$5(),
      H = w?.organizationUuid,
      J = w?.accountUuid;
    return {
      deviceId: K,
      sessionId: __$.d1(),
      email: __$.qs2(),
      appVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.23",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-01-29T00:18:20Z"
      }.VERSION,
      platform: __$.m6.platform,
      organizationUuid: H,
      accountUuid: J,
      userType: "external",
      subscriptionType: Y,
      firstTokenTime: z,
      ...(process.env.GITHUB_ACTIONS === "true" && {
        githubActionsMetadata: {
          actor: process.env.GITHUB_ACTOR,
          actorId: process.env.GITHUB_ACTOR_ID,
          repository: process.env.GITHUB_REPOSITORY,
          repositoryId: process.env.GITHUB_REPOSITORY_ID,
          repositoryOwner: process.env.GITHUB_REPOSITORY_OWNER,
          repositoryOwnerId: process.env.GITHUB_REPOSITORY_OWNER_ID
        }
      })
    };
  });
});

// Register to shared state
__$.kx = kx;
