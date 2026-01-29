// Module: nh1
// Dependencies: VoA, coA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nh1 = v(B98 => {
  Object.defineProperty(B98, "__esModule", {
    value: !0
  });
  B98.shareReplay = void 0;
  var qJq = __$.VoA(),
    YJq = __$.coA();
  function zJq(A, K, q) {
    var Y,
      z,
      w,
      H,
      J = !1;
    if (A && typeof A === "object") Y = A.bufferSize, H = Y === void 0 ? 1 / 0 : Y, z = A.windowTime, K = z === void 0 ? 1 / 0 : z, w = A.refCount, J = w === void 0 ? !1 : w, q = A.scheduler;else H = A !== null && A !== void 0 ? A : 1 / 0;
    return YJq.share({
      connector: function () {
        return new qJq.ReplaySubject(H, K, q);
      },
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: J
    });
  }
  B98.shareReplay = zJq;
});

// Register to shared state
__$.nh1 = nh1;
