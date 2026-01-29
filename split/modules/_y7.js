// Module: _y7
// Dependencies: Oy7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _y7 = v((VDH, $y7) => {
  var Xy7 = __$.Oy7();
  $y7.exports = BrY;
  function BrY(A) {
    let K, q, Y, z;
    if (A = Array.prototype.slice.call(A), typeof A[A.length - 1] === "function") z = A.pop();
    if (typeof A[0] === "string") {
      if (K = A[0], typeof A[2] === "object") q = A[1], Y = A[2];else q = void 0, Y = A[1];
    } else K = "", q = A[0], Y = A[1];
    if (!(Y instanceof Xy7)) Y = new Xy7(Y);
    return {
      path: K,
      schema: q,
      options: Y,
      callback: z
    };
  }
});

// Register to shared state
__$._y7 = _y7;
