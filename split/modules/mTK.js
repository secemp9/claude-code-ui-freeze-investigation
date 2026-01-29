// Module: mTK
// Dependencies: cA, L3, t3, l1, x4, RQ6, jQA, i6, jI, PE1
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mTK = k(() => {
  __$.cA();
  __$.L3();
  __$.t3();
  __$.l1();
  __$.x4();
  __$.RQ6();
  __$.jQA();
  __$.i6();
  __$.jI();
  __$.PE1 = o(__$.$A(), 1), __$.uTK = o(__$.$A(), 1), __$.BTK = {
    type: "local-jsx",
    name: "rate-limit-options",
    userFacingName() {
      return "rate-limit-options";
    },
    description: "Show options when rate limit is reached",
    isEnabled: () => {
      if (!__$.Z4()) return !1;
      if (__$.DI()) return !0;
      let A = __$.Uq();
      return A === "pro" || A === "max";
    },
    isHidden: !0,
    async call(A, K) {
      return __$.PE1.default.createElement(__$.kr2, {
        onDone: A,
        context: K
      });
    }
  };
});

// Register to shared state
__$.mTK = mTK;
