// Module: _b1
// Dependencies: PZ, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _b1 = v(kwA => {
  var fOq = kwA && kwA.__values || function (A) {
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
  Object.defineProperty(kwA, "__esModule", {
    value: !0
  });
  kwA.windowCount = void 0;
  var IY8 = __$.PZ(),
    NOq = __$.$7(),
    TOq = __$._K();
  function vOq(A, K) {
    if (K === void 0) K = 0;
    var q = K > 0 ? K : A;
    return NOq.operate(function (Y, z) {
      var w = [new IY8.Subject()],
        H = [],
        J = 0;
      z.next(w[0].asObservable()), Y.subscribe(TOq.createOperatorSubscriber(z, function (O) {
        var X, $;
        try {
          for (var _ = fOq(w), G = _.next(); !G.done; G = _.next()) {
            var Z = G.value;
            Z.next(O);
          }
        } catch (j) {
          X = {
            error: j
          };
        } finally {
          try {
            if (G && !G.done && ($ = _.return)) $.call(_);
          } finally {
            if (X) throw X.error;
          }
        }
        var W = J - A + 1;
        if (W >= 0 && W % q === 0) w.shift().complete();
        if (++J % q === 0) {
          var D = new IY8.Subject();
          w.push(D), z.next(D.asObservable());
        }
      }, function () {
        while (w.length > 0) w.shift().complete();
        z.complete();
      }, function (O) {
        while (w.length > 0) w.shift().error(O);
        z.error(O);
      }, function () {
        H = null, w = null;
      }));
    });
  }
  kwA.windowCount = vOq;
});

// Register to shared state
__$._b1 = _b1;
