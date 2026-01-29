// Module: g78
// Dependencies: ul

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var g78 = v(B78 => {
  Object.defineProperty(B78, "__esModule", {
    value: !0
  });
  B78.lastValueFrom = void 0;
  var mqq = __$.ul();
  function gqq(A, K) {
    var q = typeof K === "object";
    return new Promise(function (Y, z) {
      var w = !1,
        H;
      A.subscribe({
        next: function (J) {
          H = J, w = !0;
        },
        error: z,
        complete: function () {
          if (w) Y(H);else if (q) Y(K.defaultValue);else z(new mqq.EmptyError());
        }
      });
    });
  }
  B78.lastValueFrom = gqq;
});

// Register to shared state
__$.g78 = g78;
