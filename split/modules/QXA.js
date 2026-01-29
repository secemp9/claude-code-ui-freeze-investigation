// Module: QXA
// Dependencies: J51, XG, pk, Rq6, v89, E89, JIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QXA = k(() => {
  __$.J51();
  __$.XG();
  __$.pk = [];
  __$.Rq6 = new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  }), __$.v89 = new Intl.Segmenter(void 0, {
    granularity: "word"
  }), __$.E89 = /^[\p{L}\p{N}\p{M}_]$/u, __$.JIA = /\s/;
});

// Register to shared state
__$.QXA = QXA;
