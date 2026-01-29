// Module: TG8
// Dependencies: dTq, QTq, UTq, pTq, lTq, DG8, Ix1, iTq, Sx1, jG8
//   ... and 12 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TG8 = k(() => {
  __$.dTq = __$.QTq + __$.UTq + __$.pTq, __$.lTq = "[" + __$.DG8 + "]", __$.Ix1 = "[" + __$.dTq + "]", __$.iTq = "(?:" + __$.Ix1 + "|" + __$.Sx1 + ")", __$.jG8 = "[^" + __$.DG8 + "]", __$.VG8 = __$.iTq + "?", __$.fG8 = "[" + __$.cTq + "]?", __$.rTq = "(?:" + __$.nTq + "(?:" + [__$.jG8, __$.MG8, __$.PG8].join("|") + ")" + __$.fG8 + __$.VG8 + ")*", __$.oTq = __$.fG8 + __$.VG8 + __$.rTq, __$.aTq = "(?:" + [__$.jG8 + __$.Ix1 + "?", __$.Ix1, __$.MG8, __$.PG8, __$.lTq].join("|") + ")", __$.sTq = RegExp(__$.Sx1 + "(?=" + __$.Sx1 + ")|" + __$.aTq + __$.oTq, "g");
  __$.NG8 = __$.tTq;
});

// Register to shared state
__$.TG8 = TG8;
