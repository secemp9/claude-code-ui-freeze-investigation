// Module: Yb1
// Dependencies: $7, _K, Y3, jZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Yb1 = v(OY8 => {
  Object.defineProperty(OY8, "__esModule", {
    value: !0
  });
  OY8.takeUntil = void 0;
  var gJq = __$.$7(),
    FJq = __$._K(),
    QJq = __$.Y3(),
    UJq = __$.jZ();
  function pJq(A) {
    return gJq.operate(function (K, q) {
      QJq.innerFrom(A).subscribe(FJq.createOperatorSubscriber(q, function () {
        return q.complete();
      }, UJq.noop)), !q.closed && K.subscribe(q);
    });
  }
  OY8.takeUntil = pJq;
});

// Register to shared state
__$.Yb1 = Yb1;
