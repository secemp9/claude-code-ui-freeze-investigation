// Module: lh1
// Dependencies: $7, _K, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lh1 = v(h98 => {
  Object.defineProperty(h98, "__esModule", {
    value: !0
  });
  h98.sequenceEqual = void 0;
  var nHq = __$.$7(),
    rHq = __$._K(),
    oHq = __$.Y3();
  function aHq(A, K) {
    if (K === void 0) K = function (q, Y) {
      return q === Y;
    };
    return nHq.operate(function (q, Y) {
      var z = S98(),
        w = S98(),
        H = function (O) {
          Y.next(O), Y.complete();
        },
        J = function (O, X) {
          var $ = rHq.createOperatorSubscriber(Y, function (_) {
            var {
              buffer: G,
              complete: Z
            } = X;
            if (G.length === 0) Z ? H(!1) : O.buffer.push(_);else !K(_, G.shift()) && H(!1);
          }, function () {
            O.complete = !0;
            var {
              complete: _,
              buffer: G
            } = X;
            _ && H(G.length === 0), $ === null || $ === void 0 || $.unsubscribe();
          });
          return $;
        };
      q.subscribe(J(z, w)), oHq.innerFrom(A).subscribe(J(w, z));
    });
  }
  h98.sequenceEqual = aHq;
  function S98() {
    return {
      buffer: [],
      complete: !1
    };
  }
});

// Register to shared state
__$.lh1 = lh1;
