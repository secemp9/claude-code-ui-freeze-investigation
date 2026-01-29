// Module: kS1
// Dependencies: xz, fS1, Hz, gg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kS1 = v($78 => {
  Object.defineProperty($78, "__esModule", {
    value: !0
  });
  $78.scheduleIterable = void 0;
  var oKq = __$.xz(),
    aKq = __$.fS1(),
    sKq = __$.Hz(),
    X78 = __$.gg();
  function tKq(A, K) {
    return new oKq.Observable(function (q) {
      var Y;
      return X78.executeSchedule(q, K, function () {
        Y = A[aKq.iterator](), X78.executeSchedule(q, K, function () {
          var z, w, H;
          try {
            z = Y.next(), w = z.value, H = z.done;
          } catch (J) {
            q.error(J);
            return;
          }
          if (H) q.complete();else q.next(w);
        }, 0, !0);
      }), function () {
        return sKq.isFunction(Y === null || Y === void 0 ? void 0 : Y.return) && Y.return();
      };
    });
  }
  $78.scheduleIterable = tKq;
});

// Register to shared state
__$.kS1 = kS1;
