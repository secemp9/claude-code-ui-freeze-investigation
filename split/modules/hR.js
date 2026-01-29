// Module: hR
// Dependencies: xz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hR = v(f48 => {
  Object.defineProperty(f48, "__esModule", {
    value: !0
  });
  f48.empty = f48.EMPTY = void 0;
  var V48 = __$.xz();
  f48.EMPTY = new V48.Observable(function (A) {
    return A.complete();
  });
  function l7q(A) {
    return A ? i7q(A) : f48.EMPTY;
  }
  f48.empty = l7q;
  function i7q(A) {
    return new V48.Observable(function (K) {
      return A.schedule(function () {
        return K.complete();
      });
    });
  }
});

// Register to shared state
__$.hR = hR;
