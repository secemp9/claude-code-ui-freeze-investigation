// Module: Jb1
// Dependencies: tP, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jb1 = v(fY8 => {
  Object.defineProperty(fY8, "__esModule", {
    value: !0
  });
  fY8.TimeInterval = fY8.timeInterval = void 0;
  var zOq = __$.tP(),
    wOq = __$.$7(),
    HOq = __$._K();
  function JOq(A) {
    if (A === void 0) A = zOq.asyncScheduler;
    return wOq.operate(function (K, q) {
      var Y = A.now();
      K.subscribe(HOq.createOperatorSubscriber(q, function (z) {
        var w = A.now(),
          H = w - Y;
        Y = w, q.next(new VY8(z, H));
      }));
    });
  }
  fY8.timeInterval = JOq;
  var VY8 = function () {
    function A(K, q) {
      this.value = K, this.interval = q;
    }
    return A;
  }();
  fY8.TimeInterval = VY8;
});

// Register to shared state
__$.Jb1 = Jb1;
