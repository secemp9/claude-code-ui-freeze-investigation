// Module: SJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SJ8 = v((qCz, IJ8) => {
  function TPq(A) {
    return {
      name: "Golo",
      keywords: {
        keyword: "println readln print import module function local return let var while for foreach times in case when match with break continue augment augmentation each find filter reduce if then else otherwise try catch finally raise throw orIfNull DynamicObject|10 DynamicVariable struct Observable map set vector list array",
        literal: "true false null"
      },
      contains: [A.HASH_COMMENT_MODE, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, {
        className: "meta",
        begin: "@[A-Za-z]+"
      }]
    };
  }
  IJ8.exports = TPq;
});

// Register to shared state
__$.SJ8 = SJ8;
