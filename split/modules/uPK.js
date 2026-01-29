// Module: uPK
// Dependencies: cA, mA, HF6, A4, q6, Z1, C8, yz, $A, av1
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uPK = k(() => {
  __$.cA();
  __$.mA();
  __$.HF6();
  __$.A4();
  __$.q6();
  __$.Z1();
  __$.C8();
  __$.yz = o(__$.$A(), 1), __$.av1 = o(__$.$A(), 1);
  __$.Sc2 = {
    type: "local-jsx",
    name: "session",
    aliases: ["remote"],
    description: "Show remote session URL and QR code",
    isEnabled: () => __$.TR1(),
    get isHidden() {
      return !__$.TR1();
    },
    async call(A) {
      return __$.yz.createElement(__$.Cc2, {
        onDone: A
      });
    },
    userFacingName() {
      return "session";
    }
  }, __$.xPK = __$.Sc2;
});

// Register to shared state
__$.uPK = uPK;
