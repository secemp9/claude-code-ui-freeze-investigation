// Module: as7
// Dependencies: z7, TRH, U, os7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var as7 = k(() => {
  __$.z7();
  __$.TRH = __$.U.object({
    checksum: __$.U.string(),
    version: __$.U.string().optional()
  }), __$.os7 = __$.U.object({
    uuid: __$.U.string(),
    checksum: __$.U.string(),
    settings: __$.U.record(__$.U.string(), __$.U.unknown())
  });
});

// Register to shared state
__$.as7 = as7;
