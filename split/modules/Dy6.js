// Module: Dy6
// Dependencies: Uz, aM1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Dy6 = v(L6K => {
  Object.defineProperty(L6K, "__esModule", {
    value: !0
  });
  L6K.ensure = L6K.attempt = void 0;
  var k6K = __$.Uz(),
    Wy6 = __$.aM1();
  function mZ2(A) {
    return k6K.__awaiter(this, void 0, void 0, function () {
      var K;
      return k6K.__generator(this, function (q) {
        switch (q.label) {
          case 0:
            return q.trys.push([0, 2,, 3]), [4, A()];
          case 1:
            return [2, q.sent()];
          case 2:
            return K = q.sent(), [2, Promise.reject(K)];
          case 3:
            return [2];
        }
      });
    });
  }
  function C6K(A, K) {
    A.log("debug", "plugin", {
      plugin: K.name
    });
    var q = new Date().getTime(),
      Y = K[A.event.type];
    if (Y === void 0) return Promise.resolve(A);
    var z = mZ2(function () {
      return Y.apply(K, [A]);
    }).then(function (w) {
      var H = new Date().getTime() - q;
      return w.stats.gauge("plugin_time", H, ["plugin:".concat(K.name)]), w;
    }).catch(function (w) {
      if (w instanceof Wy6.ContextCancelation && w.type === "middleware_cancellation") throw w;
      if (w instanceof Wy6.ContextCancelation) return A.log("warn", w.type, {
        plugin: K.name,
        error: w
      }), w;
      return A.log("error", "plugin Error", {
        plugin: K.name,
        error: w
      }), A.stats.increment("plugin_error", 1, ["plugin:".concat(K.name)]), w;
    });
    return z;
  }
  L6K.attempt = C6K;
  function gZ2(A, K) {
    return C6K(A, K).then(function (q) {
      if (q instanceof Wy6.CoreContext) return q;
      A.log("debug", "Context canceled"), A.stats.increment("context_canceled"), A.cancel(q);
    });
  }
  L6K.ensure = gZ2;
});

// Register to shared state
__$.Dy6 = Dy6;
