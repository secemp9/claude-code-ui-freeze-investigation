// Module: TT1
// Dependencies: X0, YC, gZ, q6, ld, UK, Ye, JP, g2, VT1
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TT1 = k(() => {
  __$.X0();
  __$.YC();
  __$.gZ();
  __$.q6();
  __$.ld();
  __$.UK();
  __$.Ye();
  __$.JP();
  __$.g2();
  __$.VT1();
  __$.NG();
  __$.sD();
  __$.uxA();
  __$.rb2 = {
    type: "local",
    name: "clear",
    description: "Clear conversation history and free up context",
    aliases: ["reset", "new"],
    isEnabled: () => !0,
    isHidden: !1,
    supportsNonInteractive: !1,
    async call(A, K) {
      return __$.l7("clear"), await __$.NT1(K), {
        type: "text",
        value: ""
      };
    },
    userFacingName() {
      return "clear";
    }
  }, __$.r$K = __$.rb2;
});

// Register to shared state
__$.TT1 = TT1;
