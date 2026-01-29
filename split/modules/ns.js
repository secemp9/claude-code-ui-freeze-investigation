// Module: ns
// Dependencies: p7, n3, Db7, Mb7, YsA, kx, Z1, C1, sO, BQ
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ns = k(() => {
  __$.p7();
  __$.n3();
  __$.Db7();
  __$.Mb7();
  __$.YsA();
  __$.kx();
  __$.Z1();
  __$.C1();
  __$.sO();
  __$.BQ();
  __$.b1();
  __$.QW1 = o(__$.Wb7(), 1);
  __$.Pb7 = __$.z6(() => {
    if (__$.K$()) return null;
    return __$.ttY(__$.NW8);
  }), __$.ap = __$.z6(async () => {
    let A = __$.Pb7();
    if (!A) return null;
    return await A.initialized, A.client;
  });
});

// Register to shared state
__$.ns = ns;
