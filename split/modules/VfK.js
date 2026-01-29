// Module: VfK
// Dependencies: y4, hD, zi2, py, Yi2, x1, PfK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VfK = k(() => {
  __$.y4();
  __$.hD();
  __$.zi2 = {
    type: "local",
    name: "files",
    description: "List all files currently in context",
    isEnabled: () => !1,
    isHidden: !1,
    supportsNonInteractive: !0,
    async call(A, K) {
      let q = K.readFileState ? __$.py(K.readFileState) : [];
      if (q.length === 0) return {
        type: "text",
        value: "No files in context"
      };
      return {
        type: "text",
        value: `Files in context:
${q.map(z => __$.Yi2(__$.x1(), z)).join(`
`)}`
      };
    },
    userFacingName() {
      return "files";
    }
  }, __$.PfK = __$.zi2;
});

// Register to shared state
__$.VfK = VfK;
