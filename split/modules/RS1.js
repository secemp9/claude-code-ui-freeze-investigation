// Module: RS1
// Dependencies: xz, Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RS1 = v(E78 => {
  Object.defineProperty(E78, "__esModule", {
    value: !0
  });
  E78.throwError = void 0;
  var Eqq = __$.xz(),
    kqq = __$.Hz();
  function Cqq(A, K) {
    var q = kqq.isFunction(A) ? A : function () {
        return A;
      },
      Y = function (z) {
        return z.error(q());
      };
    return new Eqq.Observable(K ? function (z) {
      return K.schedule(Y, 0, z);
    } : Y);
  }
  E78.throwError = Cqq;
});

// Register to shared state
__$.RS1 = RS1;
