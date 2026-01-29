// Module: Gb1
// Dependencies: PZ, tP, mN, $7, _K, mg, eP, gg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gb1 = v(hY8 => {
  Object.defineProperty(hY8, "__esModule", {
    value: !0
  });
  hY8.windowTime = void 0;
  var EOq = __$.PZ(),
    kOq = __$.tP(),
    COq = __$.mN(),
    LOq = __$.$7(),
    ROq = __$._K(),
    yOq = __$.mg(),
    IOq = __$.eP(),
    SY8 = __$.gg();
  function SOq(A) {
    var K,
      q,
      Y = [];
    for (var z = 1; z < arguments.length; z++) Y[z - 1] = arguments[z];
    var w = (K = IOq.popScheduler(Y)) !== null && K !== void 0 ? K : kOq.asyncScheduler,
      H = (q = Y[0]) !== null && q !== void 0 ? q : null,
      J = Y[1] || 1 / 0;
    return LOq.operate(function (O, X) {
      var $ = [],
        _ = !1,
        G = function (j) {
          var {
            window: M,
            subs: P
          } = j;
          M.complete(), P.unsubscribe(), yOq.arrRemove($, j), _ && Z();
        },
        Z = function () {
          if ($) {
            var j = new COq.Subscription();
            X.add(j);
            var M = new EOq.Subject(),
              P = {
                window: M,
                subs: j,
                seen: 0
              };
            $.push(P), X.next(M.asObservable()), SY8.executeSchedule(j, w, function () {
              return G(P);
            }, A);
          }
        };
      if (H !== null && H >= 0) SY8.executeSchedule(X, w, Z, H, !0);else _ = !0;
      Z();
      var W = function (j) {
          return $.slice().forEach(j);
        },
        D = function (j) {
          W(function (M) {
            var P = M.window;
            return j(P);
          }), j(X), X.unsubscribe();
        };
      return O.subscribe(ROq.createOperatorSubscriber(X, function (j) {
        W(function (M) {
          M.window.next(j), J <= ++M.seen && G(M);
        });
      }, function () {
        return D(function (j) {
          return j.complete();
        });
      }, function (j) {
        return D(function (M) {
          return M.error(j);
        });
      })), function () {
        $ = null;
      };
    });
  }
  hY8.windowTime = SOq;
});

// Register to shared state
__$.Gb1 = Gb1;
