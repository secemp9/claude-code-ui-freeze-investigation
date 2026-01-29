// Module: oS1
// Dependencies: $7, jZ, _K, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oS1 = v(rq8 => {
  Object.defineProperty(rq8, "__esModule", {
    value: !0
  });
  rq8.bufferWhen = void 0;
  var XYq = __$.$7(),
    $Yq = __$.jZ(),
    nq8 = __$._K(),
    _Yq = __$.Y3();
  function GYq(A) {
    return XYq.operate(function (K, q) {
      var Y = null,
        z = null,
        w = function () {
          z === null || z === void 0 || z.unsubscribe();
          var H = Y;
          Y = [], H && q.next(H), _Yq.innerFrom(A()).subscribe(z = nq8.createOperatorSubscriber(q, w, $Yq.noop));
        };
      w(), K.subscribe(nq8.createOperatorSubscriber(q, function (H) {
        return Y === null || Y === void 0 ? void 0 : Y.push(H);
      }, function () {
        Y && q.next(Y), q.complete();
      }, void 0, function () {
        return Y = z = null;
      }));
    });
  }
  rq8.bufferWhen = GYq;
});

// Register to shared state
__$.oS1 = oS1;
