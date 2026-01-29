// Module: fTA
// Dependencies: tP, CoA, $7, Y3, hl, _K, gg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fTA = v(a78 => {
  Object.defineProperty(a78, "__esModule", {
    value: !0
  });
  a78.timeout = a78.TimeoutError = void 0;
  var iqq = __$.tP(),
    nqq = __$.CoA(),
    rqq = __$.$7(),
    oqq = __$.Y3(),
    aqq = __$.hl(),
    sqq = __$._K(),
    tqq = __$.gg();
  a78.TimeoutError = aqq.createErrorClass(function (A) {
    return function (q) {
      if (q === void 0) q = null;
      A(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = q;
    };
  });
  function eqq(A, K) {
    var q = nqq.isValidDate(A) ? {
        first: A
      } : typeof A === "number" ? {
        each: A
      } : A,
      Y = q.first,
      z = q.each,
      w = q.with,
      H = w === void 0 ? A5q : w,
      J = q.scheduler,
      O = J === void 0 ? K !== null && K !== void 0 ? K : iqq.asyncScheduler : J,
      X = q.meta,
      $ = X === void 0 ? null : X;
    if (Y == null && z == null) throw TypeError("No timeout provided.");
    return rqq.operate(function (_, G) {
      var Z,
        W,
        D = null,
        j = 0,
        M = function (P) {
          W = tqq.executeSchedule(G, O, function () {
            try {
              Z.unsubscribe(), oqq.innerFrom(H({
                meta: $,
                lastValue: D,
                seen: j
              })).subscribe(G);
            } catch (f) {
              G.error(f);
            }
          }, P);
        };
      Z = _.subscribe(sqq.createOperatorSubscriber(G, function (P) {
        W === null || W === void 0 || W.unsubscribe(), j++, G.next(D = P), z > 0 && M(z);
      }, void 0, void 0, function () {
        if (!(W === null || W === void 0 ? void 0 : W.closed)) W === null || W === void 0 || W.unsubscribe();
        D = null;
      })), !j && M(Y != null ? typeof Y === "number" ? Y : +Y - O.now() : z);
    });
  }
  a78.timeout = eqq;
  function A5q(A) {
    throw new a78.TimeoutError(A);
  }
});

// Register to shared state
__$.fTA = fTA;
