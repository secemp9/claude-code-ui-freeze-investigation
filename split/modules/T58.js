// Module: T58
// Dependencies: xz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var T58 = v(f58 => {
  Object.defineProperty(f58, "__esModule", {
    value: !0
  });
  f58.fromSubscribable = void 0;
  var H2q = __$.xz();
  function J2q(A) {
    return new H2q.Observable(function (K) {
      return A.subscribe(K);
    });
  }
  f58.fromSubscribable = J2q;
});

// Register to shared state
__$.T58 = T58;
