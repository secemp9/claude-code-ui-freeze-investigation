// Module: iS1
// Dependencies: mN, $7, _K, mg, tP, eP, gg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iS1 = v(PwA => {
  var a9q = PwA && PwA.__values || function (A) {
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
  Object.defineProperty(PwA, "__esModule", {
    value: !0
  });
  PwA.bufferTime = void 0;
  var s9q = __$.mN(),
    t9q = __$.$7(),
    e9q = __$._K(),
    AYq = __$.mg(),
    KYq = __$.tP(),
    qYq = __$.eP(),
    cq8 = __$.gg();
  function YYq(A) {
    var K,
      q,
      Y = [];
    for (var z = 1; z < arguments.length; z++) Y[z - 1] = arguments[z];
    var w = (K = qYq.popScheduler(Y)) !== null && K !== void 0 ? K : KYq.asyncScheduler,
      H = (q = Y[0]) !== null && q !== void 0 ? q : null,
      J = Y[1] || 1 / 0;
    return t9q.operate(function (O, X) {
      var $ = [],
        _ = !1,
        G = function (D) {
          var {
            buffer: j,
            subs: M
          } = D;
          M.unsubscribe(), AYq.arrRemove($, D), X.next(j), _ && Z();
        },
        Z = function () {
          if ($) {
            var D = new s9q.Subscription();
            X.add(D);
            var j = [],
              M = {
                buffer: j,
                subs: D
              };
            $.push(M), cq8.executeSchedule(D, w, function () {
              return G(M);
            }, A);
          }
        };
      if (H !== null && H >= 0) cq8.executeSchedule(X, w, Z, H, !0);else _ = !0;
      Z();
      var W = e9q.createOperatorSubscriber(X, function (D) {
        var j,
          M,
          P = $.slice();
        try {
          for (var f = a9q(P), N = f.next(); !N.done; N = f.next()) {
            var T = N.value,
              C = T.buffer;
            C.push(D), J <= C.length && G(T);
          }
        } catch (R) {
          j = {
            error: R
          };
        } finally {
          try {
            if (N && !N.done && (M = f.return)) M.call(f);
          } finally {
            if (j) throw j.error;
          }
        }
      }, function () {
        while ($ === null || $ === void 0 ? void 0 : $.length) X.next($.shift().buffer);
        W === null || W === void 0 || W.unsubscribe(), X.complete(), X.unsubscribe();
      }, void 0, function () {
        return $ = null;
      });
      O.subscribe(W);
    });
  }
  PwA.bufferTime = YYq;
});

// Register to shared state
__$.iS1 = iS1;
