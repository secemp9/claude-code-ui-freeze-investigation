// Module: Ns6
// Dependencies: QNA, $tK, HtK, zy1, jrA, ZrA, WrA, OtK, JtK, XtK
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ns6 = k(() => {
  __$.QNA();
  __$.$tK = {
    init: __$.HtK,
    convertChunk: {
      string: __$.zy1,
      buffer: __$.jrA,
      arrayBuffer: __$.jrA,
      dataView: __$.jrA,
      typedArray: __$.jrA,
      others: __$.ZrA
    },
    getSize: __$.WrA,
    truncateChunk: __$.OtK,
    addChunk: __$.JtK,
    getFinalChunk: __$.XtK,
    finalize: __$.Hy1
  };
});

// Register to shared state
__$.Ns6 = Ns6;
