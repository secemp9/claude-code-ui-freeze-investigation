// Module: FS1
// Dependencies: xz, k1A, _K, jZ, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FS1 = v($q8 => {
  Object.defineProperty($q8, "__esModule", {
    value: !0
  });
  $q8.onErrorResumeNext = void 0;
  var K9q = __$.xz(),
    q9q = __$.k1A(),
    Y9q = __$._K(),
    Xq8 = __$.jZ(),
    z9q = __$.Y3();
  function w9q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = q9q.argsOrArgArray(A);
    return new K9q.Observable(function (Y) {
      var z = 0,
        w = function () {
          if (z < q.length) {
            var H = void 0;
            try {
              H = z9q.innerFrom(q[z++]);
            } catch (O) {
              w();
              return;
            }
            var J = new Y9q.OperatorSubscriber(Y, void 0, Xq8.noop, Xq8.noop);
            H.subscribe(J), J.add(w);
          } else Y.complete();
        };
      w();
    });
  }
  $q8.onErrorResumeNext = w9q;
});

// Register to shared state
__$.FS1 = FS1;
