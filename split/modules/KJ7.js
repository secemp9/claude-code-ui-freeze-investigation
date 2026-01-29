// Module: KJ7
// Dependencies: CW6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KJ7 = k(() => {
  __$.CW6 = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? import("node:crypto").then(A => A.webcrypto);
});

// Register to shared state
__$.KJ7 = KJ7;
