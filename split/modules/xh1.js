// Module: xh1
// Dependencies: Qg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xh1 = v(K98 => {
  Object.defineProperty(K98, "__esModule", {
    value: !0
  });
  K98.pluck = void 0;
  var swq = __$.Qg();
  function twq() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = A.length;
    if (q === 0) throw Error("list of properties cannot be empty.");
    return swq.map(function (Y) {
      var z = Y;
      for (var w = 0; w < q; w++) {
        var H = z === null || z === void 0 ? void 0 : z[A[w]];
        if (typeof H < "u") z = H;else return;
      }
      return z;
    });
  }
  K98.pluck = twq;
});

// Register to shared state
__$.xh1 = xh1;
