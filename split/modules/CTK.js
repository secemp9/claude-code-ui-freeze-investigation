// Module: CTK
// Dependencies: cA, mA, q6, UK, u5, wz, L3, t3, l1, kO
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CTK = k(() => {
  __$.cA();
  __$.mA();
  __$.q6();
  __$.UK();
  __$.u5();
  __$.wz();
  __$.L3();
  __$.t3();
  __$.l1();
  __$.kO = o(__$.$A(), 1);
  __$.kTK = {
    type: "local-jsx",
    name: "tag",
    userFacingName() {
      return "tag";
    },
    description: "Toggle a searchable tag on the current session",
    isEnabled: () => !1,
    isHidden: !1,
    argumentHint: "<tag-name>",
    async call(A, K, q) {
      if (q = q?.trim() || "", __$.LzA.includes(q) || __$.CzA.includes(q)) return __$.kO.createElement(__$.ETK, {
        onDone: A
      });
      if (!q) return __$.kO.createElement(__$.ETK, {
        onDone: A
      });
      return __$.kO.createElement(__$.Dr2, {
        tagName: q,
        onDone: A
      });
    }
  };
});

// Register to shared state
__$.CTK = CTK;
