// Module: voA
// Dependencies: Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var voA = v(kE => {
  var WKq = kE && kE.__generator || function (A, K) {
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
    $wA = kE && kE.__await || function (A) {
      return this instanceof $wA ? (this.v = A, this) : new $wA(A);
    },
    DKq = kE && kE.__asyncGenerator || function (A, K, q) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var Y = q.apply(A, K || []),
        z,
        w = [];
      return z = {}, H("next"), H("throw"), H("return"), z[Symbol.asyncIterator] = function () {
        return this;
      }, z;
      function H(G) {
        if (Y[G]) z[G] = function (Z) {
          return new Promise(function (W, D) {
            w.push([G, Z, W, D]) > 1 || J(G, Z);
          });
        };
      }
      function J(G, Z) {
        try {
          O(Y[G](Z));
        } catch (W) {
          _(w[0][3], W);
        }
      }
      function O(G) {
        G.value instanceof $wA ? Promise.resolve(G.value.v).then(X, $) : _(w[0][2], G);
      }
      function X(G) {
        J("next", G);
      }
      function $(G) {
        J("throw", G);
      }
      function _(G, Z) {
        if (G(Z), w.shift(), w.length) J(w[0][0], w[0][1]);
      }
    };
  Object.defineProperty(kE, "__esModule", {
    value: !0
  });
  kE.isReadableStreamLike = kE.readableStreamLikeToAsyncGenerator = void 0;
  var jKq = __$.Hz();
  function MKq(A) {
    return DKq(this, arguments, function () {
      var q, Y, z, w;
      return WKq(this, function (H) {
        switch (H.label) {
          case 0:
            q = A.getReader(), H.label = 1;
          case 1:
            H.trys.push([1,, 9, 10]), H.label = 2;
          case 2:
            return [4, $wA(q.read())];
          case 3:
            if (Y = H.sent(), z = Y.value, w = Y.done, !w) return [3, 5];
            return [4, $wA(void 0)];
          case 4:
            return [2, H.sent()];
          case 5:
            return [4, $wA(z)];
          case 6:
            return [4, H.sent()];
          case 7:
            return H.sent(), [3, 2];
          case 8:
            return [3, 10];
          case 9:
            return q.releaseLock(), [7];
          case 10:
            return [2];
        }
      });
    });
  }
  kE.readableStreamLikeToAsyncGenerator = MKq;
  function PKq(A) {
    return jKq.isFunction(A === null || A === void 0 ? void 0 : A.getReader);
  }
  kE.isReadableStreamLike = PKq;
});

// Register to shared state
__$.voA = voA;
