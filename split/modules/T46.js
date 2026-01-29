// Module: T46
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var T46 = v((C8w, Uw4) => {
  function zr3(A) {
    return A.indexOf("\x00") === -1;
  }
  function wr3(A) {
    if (A.length === 0) return !1;
    for (let K = 0; K < A.length; K++) if (A.charCodeAt(K) < 48 || A.charCodeAt(K) > 57) return !1;
    return !0;
  }
  function Hr3(A) {
    return new Promise(K => {
      setTimeout(K, A).unref();
    });
  }
  Uw4.exports = {
    isValidLastEventId: zr3,
    isASCIINumber: wr3,
    delay: Hr3
  };
});

// Register to shared state
__$.T46 = T46;
