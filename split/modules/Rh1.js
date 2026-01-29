// Module: Rh1
// Dependencies: $7, RoA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Rh1 = v(c38 => {
  Object.defineProperty(c38, "__esModule", {
    value: !0
  });
  c38.mergeScan = void 0;
  var kwq = __$.$7(),
    Cwq = __$.RoA();
  function Lwq(A, K, q) {
    if (q === void 0) q = 1 / 0;
    return kwq.operate(function (Y, z) {
      var w = K;
      return Cwq.mergeInternals(Y, z, function (H, J) {
        return A(w, H, J);
      }, q, function (H) {
        w = H;
      }, !1, void 0, function () {
        return w = null;
      });
    });
  }
  c38.mergeScan = Lwq;
});

// Register to shared state
__$.Rh1 = Rh1;
