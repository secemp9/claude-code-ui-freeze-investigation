// Module: _VK
// Dependencies: qDA, nQ, aQ, g2, $VK, GVA, l7, J_, ql2, Qy
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _VK = k(() => {
  __$.qDA();
  __$.nQ();
  __$.aQ();
  __$.g2();
  __$.$VK = __$.GVA({
    name: "security-review",
    description: "Complete a security review of the pending changes on the current branch",
    progressMessage: "analyzing code changes for security risks",
    pluginName: "security-review",
    pluginCommand: "security-review",
    async getPromptWhileMarketplaceIsPrivate(A, K) {
      __$.l7("security-review");
      let q = __$.J_(__$.ql2),
        Y = __$.Qy(q.frontmatter["allowed-tools"]);
      return [{
        type: "text",
        text: await __$.Is(q.content, {
          ...K,
          async getAppState() {
            let w = await K.getAppState();
            return {
              ...w,
              toolPermissionContext: {
                ...w.toolPermissionContext,
                alwaysAllowRules: {
                  ...w.toolPermissionContext.alwaysAllowRules,
                  command: Y
                }
              }
            };
          }
        }, "security-review")
      }];
    }
  });
});

// Register to shared state
__$._VK = _VK;
