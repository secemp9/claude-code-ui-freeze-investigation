// Module: lS1
// Dependencies: $7, _K, mg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lS1 = v(MwA => {
  var cS1 = MwA && MwA.__values || function (A) {
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
  Object.defineProperty(MwA, "__esModule", {
    value: !0
  });
  MwA.bufferCount = void 0;
  var i9q = __$.$7(),
    n9q = __$._K(),
    r9q = __$.mg();
  function o9q(A, K) {
    if (K === void 0) K = null;
    return K = K !== null && K !== void 0 ? K : A, i9q.operate(function (q, Y) {
      var z = [],
        w = 0;
      q.subscribe(n9q.createOperatorSubscriber(Y, function (H) {
        var J,
          O,
          X,
          $,
          _ = null;
        if (w++ % K === 0) z.push([]);
        try {
          for (var G = cS1(z), Z = G.next(); !Z.done; Z = G.next()) {
            var W = Z.value;
            if (W.push(H), A <= W.length) _ = _ !== null && _ !== void 0 ? _ : [], _.push(W);
          }
        } catch (M) {
          J = {
            error: M
          };
        } finally {
          try {
            if (Z && !Z.done && (O = G.return)) O.call(G);
          } finally {
            if (J) throw J.error;
          }
        }
        if (_) try {
          for (var D = cS1(_), j = D.next(); !j.done; j = D.next()) {
            var W = j.value;
            r9q.arrRemove(z, W), Y.next(W);
          }
        } catch (M) {
          X = {
            error: M
          };
        } finally {
          try {
            if (j && !j.done && ($ = D.return)) $.call(D);
          } finally {
            if (X) throw X.error;
          }
        }
      }, function () {
        var H, J;
        try {
          for (var O = cS1(z), X = O.next(); !X.done; X = O.next()) {
            var $ = X.value;
            Y.next($);
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
        Y.complete();
      }, void 0, function () {
        z = null;
      }));
    });
  }
  MwA.bufferCount = o9q;
});

// Register to shared state
__$.lS1 = lS1;
