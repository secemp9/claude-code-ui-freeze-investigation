// Module: kh1
// Dependencies: C1A, Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kh1 = v(m38 => {
  Object.defineProperty(m38, "__esModule", {
    value: !0
  });
  m38.max = void 0;
  var Vwq = __$.C1A(),
    fwq = __$.Hz();
  function Nwq(A) {
    return Vwq.reduce(fwq.isFunction(A) ? function (K, q) {
      return A(K, q) > 0 ? K : q;
    } : function (K, q) {
      return K > q ? K : q;
    });
  }
  m38.max = Nwq;
});

// Register to shared state
__$.kh1 = kh1;
