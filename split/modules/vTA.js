// Module: vTA
// Dependencies: xz, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vTA = v(SK8 => {
  Object.defineProperty(SK8, "__esModule", {
    value: !0
  });
  SK8.defer = void 0;
  var e5q = __$.xz(),
    A3q = __$.Y3();
  function K3q(A) {
    return new e5q.Observable(function (K) {
      A3q.innerFrom(A()).subscribe(K);
    });
  }
  SK8.defer = K3q;
});

// Register to shared state
__$.vTA = vTA;
