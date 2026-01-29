// Module: vC
// Dependencies: B7, BQ, l1, p7, l6, b1, ESA, dUA, Z1, ao
//   ... and 8 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vC = k(() => {
  __$.B7();
  __$.BQ();
  __$.l1();
  __$.p7();
  __$.l6();
  __$.b1();
  __$.ESA();
  __$.dUA();
  __$.Z1();
  __$.ao();
  __$.iP();
  __$.ok();
  __$.cR2 = __$.z6(async (A, K, q, Y) => {
    let z = A.filter(w => __$.xM(w));
    if (z.length === 0) return 0;
    try {
      let w = await __$.cd(z, K, {
        activeAgents: q,
        allAgents: q
      }, Y);
      if (w === 0) return null;
      return Math.max(0, w - __$.vN1);
    } catch {
      return null;
    }
  }, A => A.filter(K => __$.xM(K)).map(K => K.name).join(","));
  __$.iR2 = ["haiku"];
});

// Register to shared state
__$.vC = vC;
