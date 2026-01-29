// Module: Oy1
// Dependencies: QNA, esK, wtK, ssK, tsK, Ws6, Ds6, ZrA, WrA, AtK
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Oy1 = k(() => {
  __$.QNA();
  __$.esK = new TextEncoder(), __$.wtK = {
    init: __$.ssK,
    convertChunk: {
      string: __$.tsK,
      buffer: __$.Ws6,
      arrayBuffer: __$.Ws6,
      dataView: __$.Ds6,
      typedArray: __$.Ds6,
      others: __$.ZrA
    },
    getSize: __$.WrA,
    truncateChunk: __$.AtK,
    addChunk: __$.KtK,
    getFinalChunk: __$.wy1,
    finalize: __$.ztK
  };
});

// Register to shared state
__$.Oy1 = Oy1;
