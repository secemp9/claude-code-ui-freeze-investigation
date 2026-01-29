// Module: US1
// Dependencies: xz, Y3, k1A, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var US1 = v(Cq8 => {
  Object.defineProperty(Cq8, "__esModule", {
    value: !0
  });
  Cq8.raceInit = Cq8.race = void 0;
  var W9q = __$.xz(),
    Eq8 = __$.Y3(),
    D9q = __$.k1A(),
    j9q = __$._K();
  function M9q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    return A = D9q.argsOrArgArray(A), A.length === 1 ? Eq8.innerFrom(A[0]) : new W9q.Observable(kq8(A));
  }
  Cq8.race = M9q;
  function kq8(A) {
    return function (K) {
      var q = [],
        Y = function (w) {
          q.push(Eq8.innerFrom(A[w]).subscribe(j9q.createOperatorSubscriber(K, function (H) {
            if (q) {
              for (var J = 0; J < q.length; J++) J !== w && q[J].unsubscribe();
              q = null;
            }
            K.next(H);
          })));
        };
      for (var z = 0; q && !K.closed && z < A.length; z++) Y(z);
    };
  }
  Cq8.raceInit = kq8;
});

// Register to shared state
__$.US1 = US1;
