// Module: oF7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oF7 = v(nF7 => {
  Object.defineProperty(nF7, "__esModule", {
    value: !0
  });
  nF7.parseRetryAfterToMills = nF7.isExportRetryable = void 0;
  function N42(A) {
    return [429, 502, 503, 504].includes(A);
  }
  nF7.isExportRetryable = N42;
  function T42(A) {
    if (A == null) return;
    let K = Number.parseInt(A, 10);
    if (Number.isInteger(K)) return K > 0 ? K * 1000 : -1;
    let q = new Date(A).getTime() - Date.now();
    if (q >= 0) return q;
    return 0;
  }
  nF7.parseRetryAfterToMills = T42;
});

// Register to shared state
__$.oF7 = oF7;
