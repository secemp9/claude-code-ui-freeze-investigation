// Module: NTK
// Dependencies: MTK, EQ6, y4, b1, g2, VTK, $A, zr2, l7, Yr2
//   ... and 8 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NTK = k(() => {
  __$.MTK();
  __$.EQ6();
  __$.y4();
  __$.b1();
  __$.g2();
  __$.VTK = o(__$.$A(), 1);
  __$.zr2 = {
    type: "local-jsx",
    name: "export",
    description: "Export the current conversation to a file or clipboard",
    isEnabled: () => !0,
    isHidden: !1,
    argumentHint: "[filename]",
    async call(A, K, q) {
      __$.l7("export");
      let Y = await __$.Yr2(K);
      if (q.trim()) {
        let J = q.trim(),
          O = J.endsWith(".txt") ? J : J.replace(/\.[^.]+$/, "") + ".txt",
          X = __$.en2(__$.x1(), O);
        try {
          return __$.x8(X, Y, {
            encoding: "utf-8",
            flush: !0
          }), A(`Conversation exported to: ${O}`), null;
        } catch ($) {
          return A(`Failed to export conversation: ${$ instanceof Error ? $.message : "Unknown error"}`), null;
        }
      }
      let z = __$.Kr2(K.messages),
        w = __$.Ar2(new Date()),
        H;
      if (z) {
        let J = __$.qr2(z);
        H = J ? `${w.substring(0, 10)}-${J}.txt` : `conversation-${w}.txt`;
      } else H = `conversation-${w}.txt`;
      return __$.VTK.default.createElement(__$.jTK, {
        content: Y,
        defaultFilename: H,
        onDone: J => {
          A(J.message);
        }
      });
    },
    userFacingName() {
      return "export";
    }
  }, __$.fTK = __$.zr2;
});

// Register to shared state
__$.NTK = NTK;
