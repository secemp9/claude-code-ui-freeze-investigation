// Module: SWA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SWA = v(_N7 => {
  Object.defineProperty(_N7, "__esModule", {
    value: !0
  });
  _N7.stringArray = _N7.array = _N7.func = _N7.error = _N7.number = _N7.string = _N7.boolean = void 0;
  function BuY(A) {
    return A === !0 || A === !1;
  }
  _N7.boolean = BuY;
  function XN7(A) {
    return typeof A === "string" || A instanceof String;
  }
  _N7.string = XN7;
  function muY(A) {
    return typeof A === "number" || A instanceof Number;
  }
  _N7.number = muY;
  function guY(A) {
    return A instanceof Error;
  }
  _N7.error = guY;
  function FuY(A) {
    return typeof A === "function";
  }
  _N7.func = FuY;
  function $N7(A) {
    return Array.isArray(A);
  }
  _N7.array = $N7;
  function QuY(A) {
    return $N7(A) && A.every(K => XN7(K));
  }
  _N7.stringArray = QuY;
});

// Register to shared state
__$.SWA = SWA;
