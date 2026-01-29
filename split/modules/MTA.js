// Module: MTA
// Dependencies: MZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MTA = v(H88 => {
  Object.defineProperty(H88, "__esModule", {
    value: !0
  });
  H88.pipeFromArray = H88.pipe = void 0;
  var J4q = __$.MZ();
  function O4q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    return w88(A);
  }
  H88.pipe = O4q;
  function w88(A) {
    if (A.length === 0) return J4q.identity;
    if (A.length === 1) return A[0];
    return function (q) {
      return A.reduce(function (Y, z) {
        return z(Y);
      }, q);
    };
  }
  H88.pipeFromArray = w88;
});

// Register to shared state
__$.MTA = MTA;
