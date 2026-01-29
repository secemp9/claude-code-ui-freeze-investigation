// Module: gsA
// Dependencies: H8, Gb

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gsA = v(cM8 => {
  Object.defineProperty(cM8, "__esModule", {
    value: !0
  });
  var dM8 = __$.H8(),
    qgq = __$.Gb();
  function Ygq(A) {
    return (A || qgq.getCurrentHub()).getScope().getTransaction();
  }
  var zgq = dM8.extractTraceparentData;
  cM8.stripUrlQueryAndFragment = dM8.stripUrlQueryAndFragment;
  cM8.extractTraceparentData = zgq;
  cM8.getActiveTransaction = Ygq;
});

// Register to shared state
__$.gsA = gsA;
