// Module: UoA
// Dependencies: hR, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UoA = v(vwA => {
  var zwq = vwA && vwA.__values || function (A) {
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
  Object.defineProperty(vwA, "__esModule", {
    value: !0
  });
  vwA.takeLast = void 0;
  var wwq = __$.hR(),
    Hwq = __$.$7(),
    Jwq = __$._K();
  function Owq(A) {
    return A <= 0 ? function () {
      return wwq.EMPTY;
    } : Hwq.operate(function (K, q) {
      var Y = [];
      K.subscribe(Jwq.createOperatorSubscriber(q, function (z) {
        Y.push(z), A < Y.length && Y.shift();
      }, function () {
        var z, w;
        try {
          for (var H = zwq(Y), J = H.next(); !J.done; J = H.next()) {
            var O = J.value;
            q.next(O);
          }
        } catch (X) {
          z = {
            error: X
          };
        } finally {
          try {
            if (J && !J.done && (w = H.return)) w.call(H);
          } finally {
            if (z) throw z.error;
          }
        }
        q.complete();
      }, void 0, function () {
        Y = null;
      }));
    });
  }
  vwA.takeLast = Owq;
});

// Register to shared state
__$.UoA = UoA;
