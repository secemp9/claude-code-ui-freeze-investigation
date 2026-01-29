// Module: Db1
// Dependencies: PZ, $7, _K, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Db1 = v(mY8 => {
  Object.defineProperty(mY8, "__esModule", {
    value: !0
  });
  mY8.windowWhen = void 0;
  var gOq = __$.PZ(),
    FOq = __$.$7(),
    BY8 = __$._K(),
    QOq = __$.Y3();
  function UOq(A) {
    return FOq.operate(function (K, q) {
      var Y,
        z,
        w = function (J) {
          Y.error(J), q.error(J);
        },
        H = function () {
          z === null || z === void 0 || z.unsubscribe(), Y === null || Y === void 0 || Y.complete(), Y = new gOq.Subject(), q.next(Y.asObservable());
          var J;
          try {
            J = QOq.innerFrom(A());
          } catch (O) {
            w(O);
            return;
          }
          J.subscribe(z = BY8.createOperatorSubscriber(q, H, H, w));
        };
      H(), K.subscribe(BY8.createOperatorSubscriber(q, function (J) {
        return Y.next(J);
      }, function () {
        Y.complete(), q.complete();
      }, w, function () {
        z === null || z === void 0 || z.unsubscribe(), Y = null;
      }));
    });
  }
  mY8.windowWhen = UOq;
});

// Register to shared state
__$.Db1 = Db1;
