// Module: CS1
// Dependencies: xz, gg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CS1 = v(Z78 => {
  Object.defineProperty(Z78, "__esModule", {
    value: !0
  });
  Z78.scheduleAsyncIterable = void 0;
  var eKq = __$.xz(),
    G78 = __$.gg();
  function Aqq(A, K) {
    if (!A) throw Error("Iterable cannot be null");
    return new eKq.Observable(function (q) {
      G78.executeSchedule(q, K, function () {
        var Y = A[Symbol.asyncIterator]();
        G78.executeSchedule(q, K, function () {
          Y.next().then(function (z) {
            if (z.done) q.complete();else q.next(z.value);
          });
        }, 0, !0);
      });
    });
  }
  Z78.scheduleAsyncIterable = Aqq;
});

// Register to shared state
__$.CS1 = CS1;
