// Module: q5A
// Dependencies: sN, C1, Z1, K7, IH, x4, l1, cT, bV6, BxA
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q5A = k(() => {
  __$.sN();
  __$.C1();
  __$.Z1();
  __$.K7();
  __$.IH();
  __$.x4();
  __$.l1();
  __$.cT();
  __$.bV6();
  __$.BxA();
  __$.$8();
  __$.aU();
  __$.l6();
  __$.Os = class Os extends Error {
    originalError;
    retryContext;
    constructor(A, K) {
      let q = A instanceof Error ? A.message : String(A);
      super(q);
      this.originalError = A;
      this.retryContext = K;
      if (this.name = "RetryError", A instanceof Error && A.stack) this.stack = A.stack;
    }
  };
  __$.TG1 = class TG1 extends Error {
    originalModel;
    fallbackModel;
    constructor(A, K) {
      super(`Model fallback triggered: ${A} -> ${K}`);
      this.originalModel = A;
      this.fallbackModel = K;
      this.name = "FallbackTriggeredError";
    }
  };
});

// Register to shared state
__$.q5A = q5A;
