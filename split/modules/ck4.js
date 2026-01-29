// Module: ck4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ck4 = v(pk4 => {
  Object.defineProperty(pk4, "__esModule", {
    value: !0
  });
  pk4.validateValue = pk4.validateKey = void 0;
  var z36 = "[_0-9a-z-*/]",
    t09 = `[a-z]${z36}{0,255}`,
    e09 = `[a-z0-9]${z36}{0,240}@[a-z]${z36}{0,13}`,
    AX9 = new RegExp(`^(?:${t09}|${e09})$`),
    KX9 = /^[ -~]{0,255}[!-~]$/,
    qX9 = /,|=/;
  function YX9(A) {
    return AX9.test(A);
  }
  pk4.validateKey = YX9;
  function zX9(A) {
    return KX9.test(A) && !qX9.test(A);
  }
  pk4.validateValue = zX9;
});

// Register to shared state
__$.ck4 = ck4;
