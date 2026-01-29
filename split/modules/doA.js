// Module: doA
// Dependencies: Y3, $7, jZ, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var doA = v(k98 => {
  Object.defineProperty(k98, "__esModule", {
    value: !0
  });
  k98.sample = void 0;
  var BHq = __$.Y3(),
    mHq = __$.$7(),
    gHq = __$.jZ(),
    E98 = __$._K();
  function FHq(A) {
    return mHq.operate(function (K, q) {
      var Y = !1,
        z = null;
      K.subscribe(E98.createOperatorSubscriber(q, function (w) {
        Y = !0, z = w;
      })), BHq.innerFrom(A).subscribe(E98.createOperatorSubscriber(q, function () {
        if (Y) {
          Y = !1;
          var w = z;
          z = null, q.next(w);
        }
      }, gHq.noop));
    });
  }
  k98.sample = FHq;
});

// Register to shared state
__$.doA = doA;
