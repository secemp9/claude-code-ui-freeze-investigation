// Module: rh1
// Dependencies: ul, SS1, IS1, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rh1 = v(g98 => {
  Object.defineProperty(g98, "__esModule", {
    value: !0
  });
  g98.single = void 0;
  var wJq = __$.ul(),
    HJq = __$.SS1(),
    JJq = __$.IS1(),
    OJq = __$.$7(),
    XJq = __$._K();
  function $Jq(A) {
    return OJq.operate(function (K, q) {
      var Y = !1,
        z,
        w = !1,
        H = 0;
      K.subscribe(XJq.createOperatorSubscriber(q, function (J) {
        if (w = !0, !A || A(J, H++, K)) Y && q.error(new HJq.SequenceError("Too many matching values")), Y = !0, z = J;
      }, function () {
        if (Y) q.next(z), q.complete();else q.error(w ? new JJq.NotFoundError("No matching values") : new wJq.EmptyError());
      }));
    });
  }
  g98.single = $Jq;
});

// Register to shared state
__$.rh1 = rh1;
