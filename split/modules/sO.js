// Module: sO
// Dependencies: p7, z3, Rr, ok, K7, q6, l6, x4, B5, M91
//   ... and 13 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sO = k(() => {
  __$.p7();
  __$.z3();
  __$.Rr();
  __$.ok();
  __$.K7();
  __$.q6();
  __$.l6();
  __$.x4();
  __$.B5();
  __$.M91();
  __$.b1();
  __$.W2();
  __$.IG9 = new Set(["rm", "mv", "cp", "touch", "mkdir", "chmod", "chown", "cat", "head", "tail", "sort", "stat", "diff", "wc", "grep", "rg", "sed"]), __$.SG9 = /\s*(?:&&|\|\||[;|])\s*/, __$.hG9 = /\s+/;
  __$.xG9 = __$.z6(() => {
    let A = {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.23",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-01-29T00:18:20Z"
    }.VERSION.match(/^\d+\.\d+\.\d+(?:-[a-z]+)?/);
    return A ? A[0] : void 0;
  }), __$.uG9 = __$.z6(async () => {
    let [A, K] = await Promise.all([__$.m6.getPackageManagers(), __$.m6.getRuntimes()]);
    return {
      platform: __$.m6.platform,
      arch: __$.m6.arch,
      nodeVersion: __$.m6.nodeVersion,
      terminal: __$.QV.terminal,
      packageManagers: A.join(","),
      runtimes: K.join(","),
      isRunningWithBun: __$.m6.isRunningWithBun(),
      isCi: __$.P1(!1),
      isClaubbit: __$.P1(process.env.CLAUBBIT),
      isClaudeCodeRemote: __$.P1(process.env.CLAUDE_CODE_REMOTE),
      isLocalAgentMode: process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent",
      isConductor: __$.m6.isConductor(),
      ...(process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE && {
        remoteEnvironmentType: process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE
      }),
      ...{},
      ...(process.env.CLAUDE_CODE_CONTAINER_ID && {
        claudeCodeContainerId: process.env.CLAUDE_CODE_CONTAINER_ID
      }),
      ...(process.env.CLAUDE_CODE_REMOTE_SESSION_ID && {
        claudeCodeRemoteSessionId: process.env.CLAUDE_CODE_REMOTE_SESSION_ID
      }),
      ...(process.env.CLAUDE_CODE_TAGS && {
        tags: process.env.CLAUDE_CODE_TAGS
      }),
      isGithubAction: __$.P1(process.env.GITHUB_ACTIONS),
      isClaudeCodeAction: __$.P1(process.env.CLAUDE_CODE_ACTION),
      isClaudeAiAuth: __$.Z4(),
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.23",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-01-29T00:18:20Z"
      }.VERSION,
      versionBase: __$.xG9(),
      buildTime: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.23",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-01-29T00:18:20Z"
      }.BUILD_TIME,
      deploymentEnvironment: __$.m6.detectDeploymentEnvironment(),
      ...(__$.P1(process.env.GITHUB_ACTIONS) && {
        githubEventName: process.env.GITHUB_EVENT_NAME,
        githubActionsRunnerEnvironment: process.env.RUNNER_ENVIRONMENT,
        githubActionsRunnerOs: process.env.RUNNER_OS,
        githubActionRef: process.env.GITHUB_ACTION_PATH?.includes("claude-code-action/") ? process.env.GITHUB_ACTION_PATH.split("claude-code-action/")[1] : void 0
      }),
      ...(__$.h1A() && {
        wslVersion: __$.h1A()
      })
    };
  });
});

// Register to shared state
__$.sO = sO;
