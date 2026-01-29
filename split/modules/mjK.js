// Module: mjK
// Dependencies: hjK, BjK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mjK = v(mU2 => {
  var uU2 = __$.hjK(),
    BU2 = __$.BjK();
  mU2.read = function (A, K) {
    return uU2(A, K || {});
  };
  mU2.write = function (A, K) {
    return BU2(A, K);
  };
});

// Register to shared state
__$.mjK = mjK;
