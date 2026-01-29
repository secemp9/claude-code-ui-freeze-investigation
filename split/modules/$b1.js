// Module: $b1
// Dependencies: PZ, $7, _K, jZ, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $b1 = v(RY8 => {
  Object.defineProperty(RY8, "__esModule", {
    value: !0
  });
  RY8.window = void 0;
  var CY8 = __$.PZ(),
    jOq = __$.$7(),
    LY8 = __$._K(),
    MOq = __$.jZ(),
    POq = __$.Y3();
  function VOq(A) {
    return jOq.operate(function (K, q) {
      var Y = new CY8.Subject();
      q.next(Y.asObservable());
      var z = function (w) {
        Y.error(w), q.error(w);
      };
      return K.subscribe(LY8.createOperatorSubscriber(q, function (w) {
        return Y === null || Y === void 0 ? void 0 : Y.next(w);
      }, function () {
        Y.complete(), q.complete();
      }, z)), POq.innerFrom(A).subscribe(LY8.createOperatorSubscriber(q, function () {
        Y.complete(), q.next(Y = new CY8.Subject());
      }, MOq.noop, z)), function () {
        Y === null || Y === void 0 || Y.unsubscribe(), Y = null;
      };
    });
  }
  RY8.window = VOq;
});

// Register to shared state
__$.$b1 = $b1;
