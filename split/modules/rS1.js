// Module: rS1
// Dependencies: mN, $7, Y3, _K, jZ, mg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rS1 = v(VwA => {
  var zYq = VwA && VwA.__values || function (A) {
    var K = typeof Symbol === "function" && Symbol.iterator,
      q = K && A[K],
      Y = 0;
    if (q) return q.call(A);
    if (A && typeof A.length === "number") return {
      next: function () {
        if (A && Y >= A.length) A = void 0;
        return {
          value: A && A[Y++],
          done: !A
        };
      }
    };
    throw TypeError(K ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(VwA, "__esModule", {
    value: !0
  });
  VwA.bufferToggle = void 0;
  var wYq = __$.mN(),
    HYq = __$.$7(),
    lq8 = __$.Y3(),
    nS1 = __$._K(),
    iq8 = __$.jZ(),
    JYq = __$.mg();
  function OYq(A, K) {
    return HYq.operate(function (q, Y) {
      var z = [];
      lq8.innerFrom(A).subscribe(nS1.createOperatorSubscriber(Y, function (w) {
        var H = [];
        z.push(H);
        var J = new wYq.Subscription(),
          O = function () {
            JYq.arrRemove(z, H), Y.next(H), J.unsubscribe();
          };
        J.add(lq8.innerFrom(K(w)).subscribe(nS1.createOperatorSubscriber(Y, O, iq8.noop)));
      }, iq8.noop)), q.subscribe(nS1.createOperatorSubscriber(Y, function (w) {
        var H, J;
        try {
          for (var O = zYq(z), X = O.next(); !X.done; X = O.next()) {
            var $ = X.value;
            $.push(w);
          }
        } catch (_) {
          H = {
            error: _
          };
        } finally {
          try {
            if (X && !X.done && (J = O.return)) J.call(O);
          } finally {
            if (H) throw H.error;
          }
        }
      }, function () {
        while (z.length > 0) Y.next(z.shift());
        Y.complete();
      }));
    });
  }
  VwA.bufferToggle = OYq;
});

// Register to shared state
__$.rS1 = rS1;
