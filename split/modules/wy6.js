// Module: wy6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wy6 = v(l1K => {
  Object.defineProperty(l1K, "__esModule", {
    value: !0
  });
  l1K.invokeCallback = l1K.sleep = l1K.pTimeout = void 0;
  function d1K(A, K) {
    return new Promise(function (q, Y) {
      var z = setTimeout(function () {
        Y(Error("Promise timed out"));
      }, K);
      A.then(function (w) {
        return clearTimeout(z), q(w);
      }).catch(Y);
    });
  }
  l1K.pTimeout = d1K;
  function c1K(A) {
    return new Promise(function (K) {
      return setTimeout(K, A);
    });
  }
  l1K.sleep = c1K;
  function OZ2(A, K, q) {
    var Y = function () {
      try {
        return Promise.resolve(K(A));
      } catch (z) {
        return Promise.reject(z);
      }
    };
    return c1K(q).then(function () {
      return d1K(Y(), 1000);
    }).catch(function (z) {
      A === null || A === void 0 || A.log("warn", "Callback Error", {
        error: z
      }), A === null || A === void 0 || A.stats.increment("callback_error");
    }).then(function () {
      return A;
    });
  }
  l1K.invokeCallback = OZ2;
});

// Register to shared state
__$.wy6 = wy6;
