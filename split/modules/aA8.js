// Module: aA8
// Dependencies: iA8, wI1, rA8, nA8, OI1, oA8, lA8, lrA, F1q

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aA8 = k(() => {
  __$.iA8();
  __$.wI1();
  __$.rA8 = {
    DIGIT: __$.nA8,
    ALPHA: __$.OI1,
    ALPHA_DIGIT: __$.OI1 + __$.OI1.toUpperCase() + __$.nA8
  }, __$.oA8 = {
    isNode: !0,
    classes: {
      URLSearchParams: __$.lA8,
      FormData: __$.lrA,
      Blob: typeof Blob < "u" && Blob || null
    },
    ALPHABET: __$.rA8,
    generateString: __$.F1q,
    protocols: ["http", "https", "file", "data"]
  };
});

// Register to shared state
__$.aA8 = aA8;
