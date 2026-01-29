// Module: RTK
// Dependencies: cA, Tm6, C8, l1, u5, I8, Ms, Am, y4, wz
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RTK = k(() => {
  __$.cA();
  __$.Tm6();
  __$.C8();
  __$.l1();
  __$.u5();
  __$.I8();
  __$.Ms();
  __$.Am();
  __$.y4();
  __$.wz();
  __$._c = o(__$.$A(), 1);
  __$.LTK = {
    type: "local-jsx",
    name: "output-style",
    userFacingName() {
      return "output-style";
    },
    description: "Set the output style directly or from a selection menu",
    isEnabled: () => !0,
    isHidden: !1,
    argumentHint: "[style]",
    async call(A, K, q) {
      if (q = q?.trim() || "", __$.LzA.includes(q)) return __$.n("tengu_output_style_command_inline_help", {
        args: q
      }), __$._c.createElement(__$.Vr2, {
        onDone: A
      });
      if (__$.CzA.includes(q)) {
        A("Run /output-style to open the output style selection menu, or /output-style [styleName] to set the output style.", {
          display: "system"
        });
        return;
      }
      if (q) return __$.n("tengu_output_style_command_inline", {
        args: q
      }), __$._c.createElement(__$.Pr2, {
        args: q,
        onDone: A
      });
      return __$._c.createElement(__$.jr2, {
        onDone: A
      });
    }
  };
});

// Register to shared state
__$.RTK = RTK;
