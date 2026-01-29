// Module: pj6
// Dependencies: FJ7, Z1, e6, Oz, Ua

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pj6 = k(() => {
  __$.FJ7();
  __$.Z1();
  __$.e6();
  __$.Oz();
  __$.Ua = {
    MAX_FILE_SIZE: 536870912,
    MAX_TOTAL_SIZE: 1073741824,
    MAX_FILE_COUNT: 1e5,
    MAX_COMPRESSION_RATIO: 50,
    MIN_COMPRESSION_RATIO: 0.5
  };
});

// Register to shared state
__$.pj6 = pj6;
