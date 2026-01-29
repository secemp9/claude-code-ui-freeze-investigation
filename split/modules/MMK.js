// Module: MMK
// Dependencies: UK, q6, t9, W2, zd2, b8, m2, d1, Y$, kPA
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MMK = k(() => {
  __$.UK();
  __$.q6();
  __$.t9();
  __$.W2();
  __$.zd2 = {
    type: "local",
    name: "rename",
    description: "Rename the current conversation",
    isEnabled: () => !0,
    isHidden: !1,
    supportsNonInteractive: !1,
    argumentHint: "<name>",
    async call(A, K) {
      if (__$.b8() && __$.m2()) return {
        type: "text",
        value: "Cannot rename: This session is a swarm teammate. Teammate names are set by the team leader."
      };
      if (!A || A.trim() === "") return {
        type: "text",
        value: "Please provide a name for the session. Usage: /rename <name>"
      };
      let q = __$.d1(),
        Y = __$.Y$(),
        z = A.trim();
      if (await __$.kPA(q, z, Y), __$.b8()) return await __$.wXK(q, z, Y), K.setAppState(w => ({
        ...w,
        standaloneAgentContext: {
          ...w.standaloneAgentContext,
          name: z
        }
      })), {
        type: "text",
        value: `Session and agent renamed to: ${z}`
      };
      return {
        type: "text",
        value: `Session renamed to: ${z}`
      };
    },
    userFacingName() {
      return "rename";
    }
  }, __$.jMK = __$.zd2;
});

// Register to shared state
__$.MMK = MMK;
