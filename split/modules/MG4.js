// Module: MG4
// Dependencies: O4A, Ix, P4A, SXA, ZG4, W51, WG4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MG4 = k(() => {
  __$.O4A();
  __$.Ix();
  __$.P4A();
  __$.SXA();
  __$.ZG4();
  __$.W51();
  __$.WG4 = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  }) : null;
});

// Register to shared state
__$.MG4 = MG4;
