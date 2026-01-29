// Module: DFA
// Dependencies: K9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DFA = v(Xl7 => {
  Object.defineProperty(Xl7, "__esModule", {
    value: !0
  });
  Xl7.restrictControlPlaneStatusCode = j22;
  var mB = __$.K9(),
    D22 = [mB.Status.OK, mB.Status.INVALID_ARGUMENT, mB.Status.NOT_FOUND, mB.Status.ALREADY_EXISTS, mB.Status.FAILED_PRECONDITION, mB.Status.ABORTED, mB.Status.OUT_OF_RANGE, mB.Status.DATA_LOSS];
  function j22(A, K) {
    if (D22.includes(A)) return {
      code: mB.Status.INTERNAL,
      details: `Invalid status from control plane: ${A} ${mB.Status[A]} ${K}`
    };else return {
      code: A,
      details: K
    };
  }
});

// Register to shared state
__$.DFA = DFA;
