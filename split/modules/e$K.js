// Module: e$K
// Dependencies: np, $8, g2, sb2, l7, rf, ab2, Oj, NDA, t$K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var e$K = k(() => {
  __$.np();
  __$.$8();
  __$.g2();
  __$.sb2 = {
    type: "local",
    name: "copy",
    description: "Copy Claude's last response to clipboard as markdown",
    isEnabled: () => !0,
    isHidden: !1,
    supportsNonInteractive: !1,
    async call(A, K) {
      __$.l7("copy");
      let q = __$.rf(K.messages);
      if (!q) return {
        type: "text",
        value: "No assistant message to copy"
      };
      let Y = q.message.content;
      if (!Array.isArray(Y) || Y.length === 0) return {
        type: "text",
        value: "No content to copy"
      };
      let z = __$.ab2(Y);
      if (!z) return {
        type: "text",
        value: "No text content to copy"
      };
      if (await __$.Oj(z)) {
        let H = z.split(`
`).length;
        return {
          type: "text",
          value: `Copied to clipboard (${z.length} characters, ${H} lines)`
        };
      }
      return {
        type: "text",
        value: __$.NDA()
      };
    },
    userFacingName() {
      return "copy";
    }
  }, __$.t$K = __$.sb2;
});

// Register to shared state
__$.e$K = e$K;
