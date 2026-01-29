// Module: mg
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mg = v(y68 => {
  Object.defineProperty(y68, "__esModule", {
    value: !0
  });
  y68.arrRemove = void 0;
  function F8q(A, K) {
    if (A) {
      var q = A.indexOf(K);
      0 <= q && A.splice(q, 1);
    }
  }
  y68.arrRemove = F8q;
});

// Register to shared state
__$.mg = mg;
