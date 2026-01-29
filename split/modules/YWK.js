// Module: YWK
// Dependencies: nD, i6, l1, g2, vm2, l7, n, D6, MY, KWK
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YWK = k(() => {
  __$.nD();
  __$.i6();
  __$.l1();
  __$.g2();
  __$.vm2 = {
    type: "local",
    name: "install-slack-app",
    description: "Install the Claude Slack app",
    isEnabled: () => !0,
    isHidden: !1,
    supportsNonInteractive: !1,
    async call() {
      if (__$.l7("slack-app"), __$.n("tengu_install_slack_app_clicked", {}), __$.D6(K => ({
        ...K,
        slackAppInstallCount: (K.slackAppInstallCount ?? 0) + 1
      })), await __$.MY(__$.KWK)) return {
        type: "text",
        value: "Opening Slack app installation page in browser…"
      };else return {
        type: "text",
        value: `Couldn't open browser. Visit: ${__$.KWK}`
      };
    },
    userFacingName() {
      return "install-slack-app";
    }
  }, __$.qWK = __$.vm2;
});

// Register to shared state
__$.YWK = YWK;
