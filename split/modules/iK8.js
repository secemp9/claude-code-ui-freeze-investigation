// Module: iK8
// Dependencies: MZ, VTA, vTA, kS1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iK8 = v(jwA => {
  var I3q = jwA && jwA.__generator || function (A, K) {
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
  };
  Object.defineProperty(jwA, "__esModule", {
    value: !0
  });
  jwA.generate = void 0;
  var lK8 = __$.MZ(),
    S3q = __$.VTA(),
    h3q = __$.vTA(),
    b3q = __$.kS1();
  function x3q(A, K, q, Y, z) {
    var w, H, J, O;
    if (arguments.length === 1) w = A, O = w.initialState, K = w.condition, q = w.iterate, H = w.resultSelector, J = H === void 0 ? lK8.identity : H, z = w.scheduler;else if (O = A, !Y || S3q.isScheduler(Y)) J = lK8.identity, z = Y;else J = Y;
    function X() {
      var $;
      return I3q(this, function (_) {
        switch (_.label) {
          case 0:
            $ = O, _.label = 1;
          case 1:
            if (!(!K || K($))) return [3, 4];
            return [4, J($)];
          case 2:
            _.sent(), _.label = 3;
          case 3:
            return $ = q($), [3, 1];
          case 4:
            return [2];
        }
      });
    }
    return h3q.defer(z ? function () {
      return b3q.scheduleIterable(X(), z);
    } : X);
  }
  jwA.generate = x3q;
});

// Register to shared state
__$.iK8 = iK8;
