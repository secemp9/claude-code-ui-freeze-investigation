// Module: i6
// Dependencies: b1, p7, z3, l6, y4, Xw, Oz, iw, q6, e6
//   ... and 26 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var i6 = k(() => {
  __$.b1();
  __$.p7();
  __$.z3();
  __$.l6();
  __$.y4();
  __$.Xw();
  __$.Oz();
  __$.iw();
  __$.q6();
  __$.e6();
  __$.YK();
  __$.x4();
  __$.Z1();
  __$.dj();
  __$.C1();
  __$.Jw();
  __$.l1();
  __$.R2();
  __$.I8();
  __$.B7();
  __$.b1();
  __$.sb6();
  __$.QEK = o(__$.Yb(), 1), __$.CcA = {
    allowedTools: [],
    mcpContextUris: [],
    mcpServers: {},
    enabledMcpjsonServers: [],
    disabledMcpjsonServers: [],
    hasTrustDialogAccepted: !1,
    projectOnboardingSeenCount: 0,
    hasClaudeMdExternalIncludesApproved: !1,
    hasClaudeMdExternalIncludesWarningShown: !1
  }, __$.cv = {
    numStartups: 0,
    installMethod: void 0,
    autoUpdates: void 0,
    theme: "dark",
    preferredNotifChannel: "auto",
    verbose: !1,
    editorMode: "normal",
    autoCompactEnabled: !0,
    showTurnDuration: !0,
    hasSeenTasksHint: !1,
    hasUsedStash: !1,
    queuedCommandUpHintCount: 0,
    diffTool: "auto",
    customApiKeyResponses: {
      approved: [],
      rejected: []
    },
    env: {},
    tipsHistory: {},
    memoryUsageCount: 0,
    promptQueueUseCount: 0,
    todoFeatureEnabled: !0,
    showExpandedTodos: !1,
    messageIdleNotifThresholdMs: 60000,
    autoConnectIde: !1,
    autoInstallIdeExtension: !0,
    fileCheckpointingEnabled: !0,
    terminalProgressBarEnabled: !0,
    cachedStatsigGates: {},
    cachedDynamicConfigs: {},
    cachedGrowthBookFeatures: {},
    respectGitignore: !0
  };
  __$.i0O = {
    ...__$.cv,
    autoUpdates: !1
  }, __$.n0O = {
    ...__$.CcA
  };
  __$.Dc = {
    config: null,
    mtime: 0
  };
  __$.kK(async () => {
    __$.Bs2();
  });
  __$.vU6 = __$.z6(() => {
    let A = __$.V8(),
      K = __$.Rl(A);
    if (K) return __$.xTA(K);
    return __$.xTA(__$.FEK(A));
  });
});

// Register to shared state
__$.i6 = i6;
