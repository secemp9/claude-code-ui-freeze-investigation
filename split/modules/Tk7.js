// Module: Tk7
// Dependencies: Mk7, fk7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tk7 = v(iUY => {
  var Nk7 = __$.Mk7(),
    lUY = __$.fk7();
  iUY.parse = function (K, q) {
    return new Nk7(q).parse(K);
  };
  iUY.parseFragment = function (K, q, Y) {
    if (typeof K === "string") Y = q, q = K, K = null;
    return new Nk7(Y).parseFragment(q, K);
  };
  iUY.serialize = function (A, K) {
    return new lUY(A, K).serialize();
  };
});

// Register to shared state
__$.Tk7 = Tk7;
