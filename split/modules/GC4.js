// Module: GC4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GC4 = v($C4 => {
  Object.defineProperty($C4, "__esModule", {
    value: !0
  });
  $C4.isPlainObject = void 0;
  var vX9 = "[object Object]",
    EX9 = "[object Null]",
    kX9 = "[object Undefined]",
    CX9 = Function.prototype,
    HC4 = CX9.toString,
    LX9 = HC4.call(Object),
    RX9 = Object.getPrototypeOf,
    JC4 = Object.prototype,
    OC4 = JC4.hasOwnProperty,
    p4A = Symbol ? Symbol.toStringTag : void 0,
    XC4 = JC4.toString;
  function yX9(A) {
    if (!IX9(A) || SX9(A) !== vX9) return !1;
    let K = RX9(A);
    if (K === null) return !0;
    let q = OC4.call(K, "constructor") && K.constructor;
    return typeof q == "function" && q instanceof q && HC4.call(q) === LX9;
  }
  $C4.isPlainObject = yX9;
  function IX9(A) {
    return A != null && typeof A == "object";
  }
  function SX9(A) {
    if (A == null) return A === void 0 ? kX9 : EX9;
    return p4A && p4A in Object(A) ? hX9(A) : bX9(A);
  }
  function hX9(A) {
    let K = OC4.call(A, p4A),
      q = A[p4A],
      Y = !1;
    try {
      A[p4A] = void 0, Y = !0;
    } catch {}
    let z = XC4.call(A);
    if (Y) if (K) A[p4A] = q;else delete A[p4A];
    return z;
  }
  function bX9(A) {
    return XC4.call(A);
  }
});

// Register to shared state
__$.GC4 = GC4;
