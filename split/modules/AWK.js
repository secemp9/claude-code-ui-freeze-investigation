// Module: AWK
// Dependencies: mA, x4, Iq, CK, rP, nD, vZK, kZK, SZK, bZK
//   ... and 19 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AWK = k(() => {
  __$.mA();
  __$.x4();
  __$.Iq();
  __$.CK();
  __$.rP();
  __$.nD();
  __$.vZK();
  __$.kZK();
  __$.SZK();
  __$.bZK();
  __$.uZK();
  __$.mZK();
  __$.FZK();
  __$.UZK();
  __$.dZK();
  __$.lZK();
  __$.nZK();
  __$.oZK();
  __$.tZK();
  __$.l1();
  __$.g2();
  __$.AJ = o(__$.$A(), 1), __$.fm2 = {
    step: "check-gh",
    selectedRepoName: "",
    currentRepo: "",
    useCurrentRepo: !1,
    apiKeyOrOAuthToken: "",
    useExistingKey: !0,
    currentWorkflowInstallStep: 0,
    warnings: [],
    secretExists: !1,
    secretName: "ANTHROPIC_API_KEY",
    useExistingSecret: !0,
    workflowExists: !1,
    selectedWorkflows: ["claude", "claude-review"],
    selectedApiKeyOption: "new",
    authType: "api_key"
  };
  __$.Tm2 = {
    type: "local-jsx",
    name: "install-github-app",
    description: "Set up Claude GitHub Actions for a repository",
    isEnabled: () => !process.env.DISABLE_INSTALL_GITHUB_APP_COMMAND && !__$.ak(),
    isHidden: !1,
    async call(A) {
      return __$.l7("github-app"), __$.AJ.default.createElement(__$.Nm2, {
        onDone: A
      });
    },
    userFacingName() {
      return "install-github-app";
    }
  }, __$.eZK = __$.Tm2;
});

// Register to shared state
__$.AWK = AWK;
