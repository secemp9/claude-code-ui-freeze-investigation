// Module: XG
// Dependencies: bk, LyA, dJ4, QJ4, sa3, UJ4, j7, Ks3, cJ4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XG = k(() => {
  __$.bk();
  __$.LyA();
  __$.dJ4 = o(__$.QJ4(), 1), __$.sa3 = new Intl.Segmenter(), __$.UJ4 = __$.dJ4.default();
  __$.j7 = typeof Bun < "u" ? __$.Ks3 : __$.cJ4;
});

// Register to shared state
__$.XG = XG;
