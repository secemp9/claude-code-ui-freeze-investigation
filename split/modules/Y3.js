// Module: Y3
// Dependencies: ToA, jS1, xz, MS1, PS1, VS1, NS1, voA, Hz, tI1
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Y3 = v(XJ => {
  var VKq = XJ && XJ.__awaiter || function (A, K, q, Y) {
      function z(w) {
        return w instanceof q ? w : new q(function (H) {
          H(w);
        });
      }
      return new (q || (q = Promise))(function (w, H) {
        function J($) {
          try {
            X(Y.next($));
          } catch (_) {
            H(_);
          }
        }
        function O($) {
          try {
            X(Y.throw($));
          } catch (_) {
            H(_);
          }
        }
        function X($) {
          $.done ? w($.value) : z($.value).then(J, O);
        }
        X((Y = Y.apply(A, K || [])).next());
      });
    },
    fKq = XJ && XJ.__generator || function (A, K) {
      var q = {
          label: 0,
          sent: function () {
            if (w[0] & 1) throw w[1];
            return w[1];
          },
          trys: [],
          ops: []
        },
        Y,
        z,
        w,
        H;
      return H = {
        next: J(0),
        throw: J(1),
        return: J(2)
      }, typeof Symbol === "function" && (H[Symbol.iterator] = function () {
        return this;
      }), H;
      function J(X) {
        return function ($) {
          return O([X, $]);
        };
      }
      function O(X) {
        if (Y) throw TypeError("Generator is already executing.");
        while (q) try {
          if (Y = 1, z && (w = X[0] & 2 ? z.return : X[0] ? z.throw || ((w = z.return) && w.call(z), 0) : z.next) && !(w = w.call(z, X[1])).done) return w;
          if (z = 0, w) X = [X[0] & 2, w.value];
          switch (X[0]) {
            case 0:
            case 1:
              w = X;
              break;
            case 4:
              return q.label++, {
                value: X[1],
                done: !1
              };
            case 5:
              q.label++, z = X[1], X = [0];
              continue;
            case 7:
              X = q.ops.pop(), q.trys.pop();
              continue;
            default:
              if ((w = q.trys, !(w = w.length > 0 && w[w.length - 1])) && (X[0] === 6 || X[0] === 2)) {
                q = 0;
                continue;
              }
              if (X[0] === 3 && (!w || X[1] > w[0] && X[1] < w[3])) {
                q.label = X[1];
                break;
              }
              if (X[0] === 6 && q.label < w[1]) {
                q.label = w[1], w = X;
                break;
              }
              if (w && q.label < w[2]) {
                q.label = w[2], q.ops.push(X);
                break;
              }
              if (w[2]) q.ops.pop();
              q.trys.pop();
              continue;
          }
          X = K.call(A, q);
        } catch ($) {
          X = [6, $], z = 0;
        } finally {
          Y = w = 0;
        }
        if (X[0] & 5) throw X[1];
        return {
          value: X[0] ? X[1] : void 0,
          done: !0
        };
      }
    },
    NKq = XJ && XJ.__asyncValues || function (A) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var K = A[Symbol.asyncIterator],
        q;
      return K ? K.call(A) : (A = typeof TS1 === "function" ? TS1(A) : A[Symbol.iterator](), q = {}, Y("next"), Y("throw"), Y("return"), q[Symbol.asyncIterator] = function () {
        return this;
      }, q);
      function Y(w) {
        q[w] = A[w] && function (H) {
          return new Promise(function (J, O) {
            H = A[w](H), z(J, O, H.done, H.value);
          });
        };
      }
      function z(w, H, J, O) {
        Promise.resolve(O).then(function (X) {
          w({
            value: X,
            done: J
          });
        }, H);
      }
    },
    TS1 = XJ && XJ.__values || function (A) {
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
  Object.defineProperty(XJ, "__esModule", {
    value: !0
  });
  XJ.fromReadableStreamLike = XJ.fromAsyncIterable = XJ.fromIterable = XJ.fromPromise = XJ.fromArrayLike = XJ.fromInteropObservable = XJ.innerFrom = void 0;
  var TKq = __$.ToA(),
    vKq = __$.jS1(),
    _wA = __$.xz(),
    EKq = __$.MS1(),
    kKq = __$.PS1(),
    CKq = __$.VS1(),
    LKq = __$.NS1(),
    p48 = __$.voA(),
    RKq = __$.Hz(),
    yKq = __$.tI1(),
    IKq = __$.jTA();
  function SKq(A) {
    if (A instanceof _wA.Observable) return A;
    if (A != null) {
      if (EKq.isInteropObservable(A)) return d48(A);
      if (TKq.isArrayLike(A)) return c48(A);
      if (vKq.isPromise(A)) return l48(A);
      if (kKq.isAsyncIterable(A)) return vS1(A);
      if (LKq.isIterable(A)) return i48(A);
      if (p48.isReadableStreamLike(A)) return n48(A);
    }
    throw CKq.createInvalidObservableTypeError(A);
  }
  XJ.innerFrom = SKq;
  function d48(A) {
    return new _wA.Observable(function (K) {
      var q = A[IKq.observable]();
      if (RKq.isFunction(q.subscribe)) return q.subscribe(K);
      throw TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  XJ.fromInteropObservable = d48;
  function c48(A) {
    return new _wA.Observable(function (K) {
      for (var q = 0; q < A.length && !K.closed; q++) K.next(A[q]);
      K.complete();
    });
  }
  XJ.fromArrayLike = c48;
  function l48(A) {
    return new _wA.Observable(function (K) {
      A.then(function (q) {
        if (!K.closed) K.next(q), K.complete();
      }, function (q) {
        return K.error(q);
      }).then(null, yKq.reportUnhandledError);
    });
  }
  XJ.fromPromise = l48;
  function i48(A) {
    return new _wA.Observable(function (K) {
      var q, Y;
      try {
        for (var z = TS1(A), w = z.next(); !w.done; w = z.next()) {
          var H = w.value;
          if (K.next(H), K.closed) return;
        }
      } catch (J) {
        q = {
          error: J
        };
      } finally {
        try {
          if (w && !w.done && (Y = z.return)) Y.call(z);
        } finally {
          if (q) throw q.error;
        }
      }
      K.complete();
    });
  }
  XJ.fromIterable = i48;
  function vS1(A) {
    return new _wA.Observable(function (K) {
      hKq(A, K).catch(function (q) {
        return K.error(q);
      });
    });
  }
  XJ.fromAsyncIterable = vS1;
  function n48(A) {
    return vS1(p48.readableStreamLikeToAsyncGenerator(A));
  }
  XJ.fromReadableStreamLike = n48;
  function hKq(A, K) {
    var q, Y, z, w;
    return VKq(this, void 0, void 0, function () {
      var H, J;
      return fKq(this, function (O) {
        switch (O.label) {
          case 0:
            O.trys.push([0, 5, 6, 11]), q = NKq(A), O.label = 1;
          case 1:
            return [4, q.next()];
          case 2:
            if (Y = O.sent(), !!Y.done) return [3, 4];
            if (H = Y.value, K.next(H), K.closed) return [2];
            O.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            return J = O.sent(), z = {
              error: J
            }, [3, 11];
          case 6:
            if (O.trys.push([6,, 9, 10]), !(Y && !Y.done && (w = q.return))) return [3, 8];
            return [4, w.call(q)];
          case 7:
            O.sent(), O.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (z) throw z.error;
            return [7];
          case 10:
            return [7];
          case 11:
            return K.complete(), [2];
        }
      });
    });
  }
});

// Register to shared state
__$.Y3 = Y3;
