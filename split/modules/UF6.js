// Module: UF6
// Dependencies: cA, B7, mA, t3, CXA, B5, CK, L3, TJ, mZ
//   ... and 15 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UF6 = k(() => {
  __$.cA();
  __$.B7();
  __$.mA();
  __$.t3();
  __$.CXA();
  __$.B5();
  __$.CK();
  __$.L3();
  __$.TJ();
  __$.mZ();
  __$.KVA();
  __$.s0();
  __$.YVA();
  __$.TL();
  __$.i2();
  __$.Z1();
  __$.C1();
  __$.AE1();
  __$.o5 = o(__$.$A(), 1), __$.xL = o(__$.$A(), 1);
  __$.Vl2 = {
    type: "local-jsx",
    name: "think-back",
    description: "Your 2025 Claude Code Year in Review",
    isEnabled: () => __$.aY("tengu_thinkback"),
    isHidden: !1,
    async call(A) {
      return __$.o5.createElement(__$.Pl2, {
        onDone: A
      });
    },
    userFacingName() {
      return "think-back";
    }
  }, __$.fVK = __$.Vl2;
});

// Register to shared state
__$.UF6 = UF6;
