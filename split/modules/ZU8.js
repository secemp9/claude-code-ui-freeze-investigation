// Module: ZU8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZU8 = v(cv5 => {
  var pv5 = (A, K, q) => {
      if (!(K in A)) return;
      if (A[K] === "true") return !0;
      if (A[K] === "false") return !1;
      throw Error(`Cannot load ${q} "${K}". Expected "true" or "false", got ${A[K]}.`);
    },
    dv5 = (A, K, q) => {
      if (!(K in A)) return;
      let Y = parseInt(A[K], 10);
      if (Number.isNaN(Y)) throw TypeError(`Cannot load ${q} '${K}'. Expected number, got '${A[K]}'.`);
      return Y;
    };
  cv5.SelectorType = void 0;
  (function (A) {
    A.ENV = "env", A.CONFIG = "shared config entry";
  })(cv5.SelectorType || (cv5.SelectorType = {}));
  cv5.booleanSelector = pv5;
  cv5.numberSelector = dv5;
});

// Register to shared state
__$.ZU8 = ZU8;
