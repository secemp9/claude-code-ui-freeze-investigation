// Module: dBA
// Dependencies: x$1, l1, c01, UuA, yW6, nD, n3, C1, W$, B5
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dBA = k(() => {
  __$.x$1();
  __$.l1();
  __$.c01();
  __$.UuA();
  __$.yW6();
  __$.nD();
  __$.n3();
  __$.C1();
  __$.W$();
  __$.B5();
  __$.b1();
  __$.VM6 = o(__$.JD7(), 1), __$.vLY = ["state", "nonce", "code_challenge", "code_verifier", "code"];
  __$.tZA = class tZA extends Error {
    constructor() {
      super("Authentication was cancelled");
      this.name = "AuthenticationCancelledError";
    }
  };
  __$.kLY = __$.o6() === "windows" ? {
    min: 39152,
    max: 49151
  } : {
    min: 49152,
    max: 65535
  };
});

// Register to shared state
__$.dBA = dBA;
