// Module: vQ6
// Dependencies: aTA, Sw, oPA, DTK, nn2, $A, rn2, an2, on2, Jq
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vQ6 = k(() => {
  __$.aTA();
  __$.Sw();
  __$.oPA();
  __$.DTK();
  __$.nn2 = o(__$.$A(), 1), __$.rn2 = ["Goodbye!", "See ya!", "Bye!", "Catch you later!"];
  __$.an2 = {
    type: "local-jsx",
    name: "exit",
    aliases: ["quit"],
    description: "Exit the REPL",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A) {
      return A(__$.on2()), await __$.Jq(0, "prompt_input_exit"), null;
    },
    userFacingName() {
      return "exit";
    }
  }, __$.ME1 = __$.an2;
});

// Register to shared state
__$.vQ6 = vQ6;
