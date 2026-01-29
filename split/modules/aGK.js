// Module: aGK
// Dependencies: l6, C1, ym, e6, b1, iGK, rGK, mA, C8, gZ
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aGK = k(() => {
  __$.l6();
  __$.C1();
  __$.ym();
  __$.e6();
  __$.b1();
  __$.iGK();
  __$.rGK();
  __$.mA();
  __$.C8();
  __$.mA();
  __$.gZ();
  __$.uK();
  __$.gv = o(__$.$A(), 1), __$.cm6 = o(__$.$A(), 1), __$.rB2 = {
    type: "local-jsx",
    name: "memory",
    description: "Edit Claude memory files",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A) {
      return __$.gv.createElement(__$.oB2, {
        onDone: A
      });
    },
    userFacingName() {
      return this.name;
    }
  };
  __$.oGK = __$.rB2;
});

// Register to shared state
__$.aGK = aGK;
