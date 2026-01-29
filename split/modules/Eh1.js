// Module: Eh1
// Dependencies: koA, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Eh1 = v(u38 => {
  Object.defineProperty(u38, "__esModule", {
    value: !0
  });
  u38.materialize = void 0;
  var vh1 = __$.koA(),
    jwq = __$.$7(),
    Mwq = __$._K();
  function Pwq() {
    return jwq.operate(function (A, K) {
      A.subscribe(Mwq.createOperatorSubscriber(K, function (q) {
        K.next(vh1.Notification.createNext(q));
      }, function () {
        K.next(vh1.Notification.createComplete()), K.complete();
      }, function (q) {
        K.next(vh1.Notification.createError(q)), K.complete();
      }));
    });
  }
  u38.materialize = Pwq;
});

// Register to shared state
__$.Eh1 = Eh1;
