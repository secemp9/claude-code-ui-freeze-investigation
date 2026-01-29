// Module: C2K
// Dependencies: n3, $yA, sz, l1, iw, C1, I8, hb6, N2K, V2K
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var C2K = k(() => {
  __$.n3();
  __$.$yA();
  __$.sz();
  __$.l1();
  __$.iw();
  __$.C1();
  __$.I8();
  __$.hb6();
  __$.N2K = o(__$.V2K(), 1);
  __$.bb6 = class bb6 extends Error {
    constructor(A) {
      super(`Claude Code is unable to fetch from ${A}`);
      this.name = "DomainBlockedError";
    }
  };
  __$.xb6 = class xb6 extends Error {
    constructor(A) {
      super(`Unable to verify if domain ${A} is safe to fetch. This may be due to network restrictions or enterprise security policies blocking claude.ai.`);
      this.name = "DomainCheckFailedError";
    }
  };
  __$.f2K = new __$.Ty({
    maxSize: __$.qE2,
    sizeCalculation: A => Buffer.byteLength(A.content),
    ttl: __$.KE2
  });
});

// Register to shared state
__$.C2K = C2K;
