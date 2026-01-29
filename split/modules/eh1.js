// Module: eh1
// Dependencies: TTA, eP, $7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eh1 = v(a98 => {
  Object.defineProperty(a98, "__esModule", {
    value: !0
  });
  a98.startWith = void 0;
  var o98 = __$.TTA(),
    EJq = __$.eP(),
    kJq = __$.$7();
  function CJq() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = EJq.popScheduler(A);
    return kJq.operate(function (Y, z) {
      (q ? o98.concat(A, Y, q) : o98.concat(A, Y)).subscribe(z);
    });
  }
  a98.startWith = CJq;
});

// Register to shared state
__$.eh1 = eh1;
