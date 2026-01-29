// Module: sh1
// Dependencies: $7, _K, Y3, jZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sh1 = v(l98 => {
  Object.defineProperty(l98, "__esModule", {
    value: !0
  });
  l98.skipUntil = void 0;
  var MJq = __$.$7(),
    c98 = __$._K(),
    PJq = __$.Y3(),
    VJq = __$.jZ();
  function fJq(A) {
    return MJq.operate(function (K, q) {
      var Y = !1,
        z = c98.createOperatorSubscriber(q, function () {
          z === null || z === void 0 || z.unsubscribe(), Y = !0;
        }, VJq.noop);
      PJq.innerFrom(A).subscribe(z), K.subscribe(c98.createOperatorSubscriber(q, function (w) {
        return Y && q.next(w);
      }));
    });
  }
  l98.skipUntil = fJq;
});

// Register to shared state
__$.sh1 = sh1;
