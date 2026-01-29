// Module: tR7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tR7 = v((DDH, sR7) => {
  var krY = /\.(jpeg|jpg|gif|png|bmp|ico)$/i;
  sR7.exports = {
    order: 400,
    allowEmpty: !0,
    canParse(A) {
      return Buffer.isBuffer(A.data) && krY.test(A.url);
    },
    parse(A) {
      if (Buffer.isBuffer(A.data)) return A.data;else return Buffer.from(A.data);
    }
  };
});

// Register to shared state
__$.tR7 = tR7;
