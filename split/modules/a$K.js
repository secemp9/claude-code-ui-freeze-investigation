// Module: a$K
// Dependencies: UK, q6, aZ, t9, W2, ob2, b8, m2, Y0, d1
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var a$K = k(() => {
  __$.UK();
  __$.q6();
  __$.aZ();
  __$.t9();
  __$.W2();
  __$.ob2 = {
    type: "local",
    name: "color",
    description: "Set the prompt bar color for this session",
    isEnabled: () => __$.b8(),
    isHidden: !1,
    supportsNonInteractive: !1,
    argumentHint: "<color>",
    async call(A, K) {
      if (__$.m2()) return {
        type: "text",
        value: "Cannot set color: This session is a swarm teammate. Teammate colors are assigned by the team leader."
      };
      if (!A || A.trim() === "") return {
        type: "text",
        value: `Please provide a color. Available colors: ${__$.Y0.join(", ")}`
      };
      let q = A.trim().toLowerCase();
      if (!__$.Y0.includes(q)) {
        let w = __$.Y0.join(", ");
        return {
          type: "text",
          value: `Invalid color "${q}". Available colors: ${w}`
        };
      }
      let Y = __$.d1(),
        z = __$.Y$();
      return await __$.HXK(Y, q, z), K.setAppState(w => ({
        ...w,
        standaloneAgentContext: {
          ...w.standaloneAgentContext,
          name: w.standaloneAgentContext?.name ?? "",
          color: q
        }
      })), {
        type: "text",
        value: `Session color set to: ${q}`
      };
    },
    userFacingName() {
      return "color";
    }
  }, __$.o$K = __$.ob2;
});

// Register to shared state
__$.a$K = a$K;
