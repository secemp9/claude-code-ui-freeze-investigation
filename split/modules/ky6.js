// Module: ky6
// Dependencies: p7, kx, i6, C1, x4, sO, BQ, A4K, e8K, eW2
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ky6 = k(() => {
  __$.p7();
  __$.kx();
  __$.i6();
  __$.C1();
  __$.x4();
  __$.sO();
  __$.BQ();
  __$.A4K = o(__$.e8K(), 1), __$.eW2 = {
    production: "LKJN8LsLERHEOXkw487o7qCTFOrGPimI",
    development: "b64sf1kxwDGe1PiSAlv5ixuH0f509RKK"
  };
  __$.K4K = __$.z6(async () => {
    if (!(await __$.KD2())) return null;
    try {
      return __$.eM1 = new __$.A4K.Analytics({
        writeKey: __$.AD2()
      }), process.on("beforeExit", async () => {
        await __$.eM1?.closeAndFlush();
      }), process.on("exit", () => {
        __$.eM1?.closeAndFlush();
      }), __$.eM1;
    } catch (K) {
      return __$.KA(K instanceof Error ? K : Error(String(K))), null;
    }
  });
});

// Register to shared state
__$.ky6 = ky6;
