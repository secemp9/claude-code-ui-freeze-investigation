// Module: YMK
// Dependencies: cA, mA, C8, HF6, vX, $A, SdA, JF6, sp2, ip2
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YMK = k(() => {
  __$.cA();
  __$.mA();
  __$.C8();
  __$.HF6();
  __$.vX = o(__$.$A(), 1), __$.SdA = o(__$.$A(), 1), __$.JF6 = {
    ios: {
      url: "https://apps.apple.com/app/claude-by-anthropic/id6473753684"
    },
    android: {
      url: "https://play.google.com/store/apps/details?id=com.anthropic.claude"
    }
  };
  __$.sp2 = {
    type: "local-jsx",
    name: "mobile",
    aliases: ["ios", "android"],
    description: "Show QR code to download the Claude mobile app",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A) {
      return __$.vX.createElement(__$.ip2, {
        onDone: A
      });
    },
    userFacingName() {
      return "mobile";
    }
  }, __$.qMK = __$.sp2;
});

// Register to shared state
__$.YMK = YMK;
