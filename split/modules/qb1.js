// Module: qb1
// Dependencies: EwA, $7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qb1 = v(HY8 => {
  Object.defineProperty(HY8, "__esModule", {
    value: !0
  });
  HY8.switchScan = void 0;
  var uJq = __$.EwA(),
    BJq = __$.$7();
  function mJq(A, K) {
    return BJq.operate(function (q, Y) {
      var z = K;
      return uJq.switchMap(function (w, H) {
        return A(z, w, H);
      }, function (w, H) {
        return z = H, H;
      })(q).subscribe(Y), function () {
        z = null;
      };
    });
  }
  HY8.switchScan = mJq;
});

// Register to shared state
__$.qb1 = qb1;
