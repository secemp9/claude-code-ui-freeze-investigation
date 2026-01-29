// Module: QIA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QIA = v(xW9 => {
  var hW9 = A => A.replace(/^(?!$)(?: $)?/gm, "#");
  function s36(A, K) {
    if (/^\n+$/.test(A)) return A.substring(1);
    return K ? A.replace(/^(?! *$)/gm, K) : A;
  }
  var bW9 = (A, K, q) => A.endsWith(`
`) ? s36(q, K) : q.includes(`
`) ? `
` + s36(q, K) : (A.endsWith(" ") ? "" : " ") + q;
  xW9.indentComment = s36;
  xW9.lineComment = bW9;
  xW9.stringifyComment = hW9;
});

// Register to shared state
__$.QIA = QIA;
