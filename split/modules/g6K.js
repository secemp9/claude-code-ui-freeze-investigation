// Module: g6K
// Dependencies: Uz, wy6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var g6K = v(u6K => {
  Object.defineProperty(u6K, "__esModule", {
    value: !0
  });
  u6K.dispatch = u6K.getDelay = void 0;
  var x6K = __$.Uz(),
    lZ2 = __$.wy6(),
    iZ2 = function (A, K) {
      var q = Date.now() - A;
      return Math.max((K !== null && K !== void 0 ? K : 300) - q, 0);
    };
  u6K.getDelay = iZ2;
  function nZ2(A, K, q, Y) {
    return x6K.__awaiter(this, void 0, void 0, function () {
      var z, w;
      return x6K.__generator(this, function (H) {
        switch (H.label) {
          case 0:
            if (q.emit("dispatch_start", A), z = Date.now(), !K.isEmpty()) return [3, 2];
            return [4, K.dispatchSingle(A)];
          case 1:
            return w = H.sent(), [3, 4];
          case 2:
            return [4, K.dispatch(A)];
          case 3:
            w = H.sent(), H.label = 4;
          case 4:
            if (!(Y === null || Y === void 0 ? void 0 : Y.callback)) return [3, 6];
            return [4, (0, lZ2.invokeCallback)(w, Y.callback, u6K.getDelay(z, Y.timeout))];
          case 5:
            w = H.sent(), H.label = 6;
          case 6:
            if (Y === null || Y === void 0 ? void 0 : Y.debug) w.flush();
            return [2, w];
        }
      });
    });
  }
  u6K.dispatch = nZ2;
});

// Register to shared state
__$.g6K = g6K;
