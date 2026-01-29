// Module: TJ
// Dependencies: n3, p7, l6, $SA, e6, b1, Z1, C1, CK, iw
//   ... and 13 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TJ = k(() => {
  __$.n3();
  __$.p7();
  __$.l6();
  __$.$SA();
  __$.e6();
  __$.b1();
  __$.Z1();
  __$.C1();
  __$.CK();
  __$.iw();
  __$.I8();
  __$.ID();
  __$.pr();
  __$.b1();
  __$.mZ();
  __$.TL();
  __$.H0K = {
    GIT_TERMINAL_PROMPT: "0",
    GIT_ASKPASS: ""
  };
  __$.$M = __$.z6(async A => {
    let K = await __$.U3(),
      q = K[A];
    if (!q) throw Error(`Marketplace '${A}' not found in configuration. Available marketplaces: ${Object.keys(K).join(", ")}`);
    try {
      return __$.pN1(q.installLocation);
    } catch (z) {
      __$.h(`Cache corrupted or missing for marketplace ${A}, re-fetching from source: ${z instanceof Error ? z.message : String(z)}`, {
        level: "warn"
      });
    }
    let {
      marketplace: Y
    } = await __$.ru6(q.source);
    return K[A].lastUpdated = new Date().toISOString(), await __$.TPA(K), Y;
  });
});

// Register to shared state
__$.TJ = TJ;
