// Module: QK8
// Dependencies: Y3, xz, th, ToA, Hz, ml

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QK8 = v(DwA => {
  var D3q = DwA && DwA.__read || function (A, K) {
    var q = typeof Symbol === "function" && A[Symbol.iterator];
    if (!q) return A;
    var Y = q.call(A),
      z,
      w = [],
      H;
    try {
      while ((K === void 0 || K-- > 0) && !(z = Y.next()).done) w.push(z.value);
    } catch (J) {
      H = {
        error: J
      };
    } finally {
      try {
        if (z && !z.done && (q = Y.return)) q.call(Y);
      } finally {
        if (H) throw H.error;
      }
    }
    return w;
  };
  Object.defineProperty(DwA, "__esModule", {
    value: !0
  });
  DwA.fromEvent = void 0;
  var j3q = __$.Y3(),
    M3q = __$.xz(),
    P3q = __$.th(),
    V3q = __$.ToA(),
    E1A = __$.Hz(),
    f3q = __$.ml(),
    N3q = ["addListener", "removeListener"],
    T3q = ["addEventListener", "removeEventListener"],
    v3q = ["on", "off"];
  function BS1(A, K, q, Y) {
    if (E1A.isFunction(q)) Y = q, q = void 0;
    if (Y) return BS1(A, K, q).pipe(f3q.mapOneOrManyArgs(Y));
    var z = D3q(C3q(A) ? T3q.map(function (J) {
        return function (O) {
          return A[J](K, O, q);
        };
      }) : E3q(A) ? N3q.map(FK8(A, K)) : k3q(A) ? v3q.map(FK8(A, K)) : [], 2),
      w = z[0],
      H = z[1];
    if (!w) {
      if (V3q.isArrayLike(A)) return P3q.mergeMap(function (J) {
        return BS1(J, K, q);
      })(j3q.innerFrom(A));
    }
    if (!w) throw TypeError("Invalid event target");
    return new M3q.Observable(function (J) {
      var O = function () {
        var X = [];
        for (var $ = 0; $ < arguments.length; $++) X[$] = arguments[$];
        return J.next(1 < X.length ? X : X[0]);
      };
      return w(O), function () {
        return H(O);
      };
    });
  }
  DwA.fromEvent = BS1;
  function FK8(A, K) {
    return function (q) {
      return function (Y) {
        return A[q](K, Y);
      };
    };
  }
  function E3q(A) {
    return E1A.isFunction(A.addListener) && E1A.isFunction(A.removeListener);
  }
  function k3q(A) {
    return E1A.isFunction(A.on) && E1A.isFunction(A.off);
  }
  function C3q(A) {
    return E1A.isFunction(A.addEventListener) && E1A.isFunction(A.removeEventListener);
  }
});

// Register to shared state
__$.QK8 = QK8;
