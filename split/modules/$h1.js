// Module: $h1
// Dependencies: $7, _K, jZ, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $h1 = v(o58 => {
  Object.defineProperty(o58, "__esModule", {
    value: !0
  });
  o58.distinct = void 0;
  var a2q = __$.$7(),
    r58 = __$._K(),
    s2q = __$.jZ(),
    t2q = __$.Y3();
  function e2q(A, K) {
    return a2q.operate(function (q, Y) {
      var z = new Set();
      q.subscribe(r58.createOperatorSubscriber(Y, function (w) {
        var H = A ? A(w) : w;
        if (!z.has(H)) z.add(H), Y.next(w);
      })), K && t2q.innerFrom(K).subscribe(r58.createOperatorSubscriber(Y, function () {
        return z.clear();
      }, s2q.noop));
    });
  }
  o58.distinct = e2q;
});

// Register to shared state
__$.$h1 = $h1;
