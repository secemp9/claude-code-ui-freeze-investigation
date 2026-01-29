// Module: Wb1
// Dependencies: PZ, mN, $7, Y3, _K, jZ, mg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Wb1 = v(CwA => {
  var hOq = CwA && CwA.__values || function (A) {
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
  Object.defineProperty(CwA, "__esModule", {
    value: !0
  });
  CwA.windowToggle = void 0;
  var bOq = __$.PZ(),
    xOq = __$.mN(),
    uOq = __$.$7(),
    xY8 = __$.Y3(),
    Zb1 = __$._K(),
    uY8 = __$.jZ(),
    BOq = __$.mg();
  function mOq(A, K) {
    return uOq.operate(function (q, Y) {
      var z = [],
        w = function (H) {
          while (0 < z.length) z.shift().error(H);
          Y.error(H);
        };
      xY8.innerFrom(A).subscribe(Zb1.createOperatorSubscriber(Y, function (H) {
        var J = new bOq.Subject();
        z.push(J);
        var O = new xOq.Subscription(),
          X = function () {
            BOq.arrRemove(z, J), J.complete(), O.unsubscribe();
          },
          $;
        try {
          $ = xY8.innerFrom(K(H));
        } catch (_) {
          w(_);
          return;
        }
        Y.next(J.asObservable()), O.add($.subscribe(Zb1.createOperatorSubscriber(Y, X, uY8.noop, w)));
      }, uY8.noop)), q.subscribe(Zb1.createOperatorSubscriber(Y, function (H) {
        var J,
          O,
          X = z.slice();
        try {
          for (var $ = hOq(X), _ = $.next(); !_.done; _ = $.next()) {
            var G = _.value;
            G.next(H);
          }
        } catch (Z) {
          J = {
            error: Z
          };
        } finally {
          try {
            if (_ && !_.done && (O = $.return)) O.call($);
          } finally {
            if (J) throw J.error;
          }
        }
      }, function () {
        while (0 < z.length) z.shift().complete();
        Y.complete();
      }, w, function () {
        while (0 < z.length) z.shift().unsubscribe();
      }));
    });
  }
  CwA.windowToggle = mOq;
});

// Register to shared state
__$.Wb1 = Wb1;
