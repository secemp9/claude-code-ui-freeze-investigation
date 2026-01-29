// Module: Uh1
// Dependencies: $7, _K, MZ, Fl, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Uh1 = v(V98 => {
  Object.defineProperty(V98, "__esModule", {
    value: !0
  });
  V98.retry = void 0;
  var LHq = __$.$7(),
    P98 = __$._K(),
    RHq = __$.MZ(),
    yHq = __$.Fl(),
    IHq = __$.Y3();
  function SHq(A) {
    if (A === void 0) A = 1 / 0;
    var K;
    if (A && typeof A === "object") K = A;else K = {
      count: A
    };
    var q = K.count,
      Y = q === void 0 ? 1 / 0 : q,
      z = K.delay,
      w = K.resetOnSuccess,
      H = w === void 0 ? !1 : w;
    return Y <= 0 ? RHq.identity : LHq.operate(function (J, O) {
      var X = 0,
        $,
        _ = function () {
          var G = !1;
          if ($ = J.subscribe(P98.createOperatorSubscriber(O, function (Z) {
            if (H) X = 0;
            O.next(Z);
          }, void 0, function (Z) {
            if (X++ < Y) {
              var W = function () {
                if ($) $.unsubscribe(), $ = null, _();else G = !0;
              };
              if (z != null) {
                var D = typeof z === "number" ? yHq.timer(z) : IHq.innerFrom(z(Z, X)),
                  j = P98.createOperatorSubscriber(O, function () {
                    j.unsubscribe(), W();
                  }, function () {
                    O.complete();
                  });
                D.subscribe(j);
              } else W();
            } else O.error(Z);
          })), G) $.unsubscribe(), $ = null, _();
        };
      _();
    });
  }
  V98.retry = SHq;
});

// Register to shared state
__$.Uh1 = Uh1;
