// Module: vTK
// Dependencies: cA, FT1, A4, K7, IWA, tb6, l1, u5, x4, wz
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vTK = k(() => {
  __$.cA();
  __$.FT1();
  __$.A4();
  __$.K7();
  __$.IWA();
  __$.tb6();
  __$.l1();
  __$.u5();
  __$.x4();
  __$.wz();
  __$.Xh = o(__$.$A(), 1);
  __$.TTK = {
    type: "local-jsx",
    name: "model",
    userFacingName() {
      return "model";
    },
    description: "Set the AI model for Claude Code",
    isEnabled: () => !0,
    isHidden: !1,
    argumentHint: "[model]",
    async call(A, K, q) {
      if (q = q?.trim() || "", __$.LzA.includes(q)) return __$.n("tengu_model_command_inline_help", {
        args: q
      }), __$.Xh.createElement(__$._r2, {
        onDone: A
      });
      if (__$.CzA.includes(q)) {
        A("Run /model to open the model selection menu, or /model [modelName] to set the model.", {
          display: "system"
        });
        return;
      }
      if (q) return __$.n("tengu_model_command_inline", {
        args: q
      }), __$.Xh.createElement(__$.Or2, {
        args: q,
        onDone: A
      });
      return __$.Xh.createElement(__$.wr2, {
        onDone: A
      });
    }
  };
});

// Register to shared state
__$.vTK = vTK;
