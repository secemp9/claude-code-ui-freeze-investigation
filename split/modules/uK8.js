// Module: uK8
// Dependencies: PZ, xz, vTA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uK8 = v(bK8 => {
  Object.defineProperty(bK8, "__esModule", {
    value: !0
  });
  bK8.connectable = void 0;
  var q3q = __$.PZ(),
    Y3q = __$.xz(),
    z3q = __$.vTA(),
    w3q = {
      connector: function () {
        return new q3q.Subject();
      },
      resetOnDisconnect: !0
    };
  function H3q(A, K) {
    if (K === void 0) K = w3q;
    var q = null,
      Y = K.connector,
      z = K.resetOnDisconnect,
      w = z === void 0 ? !0 : z,
      H = Y(),
      J = new Y3q.Observable(function (O) {
        return H.subscribe(O);
      });
    return J.connect = function () {
      if (!q || q.closed) {
        if (q = z3q.defer(function () {
          return A;
        }).subscribe(H), w) q.add(function () {
          return H = Y();
        });
      }
      return q;
    }, J;
  }
  bK8.connectable = H3q;
});

// Register to shared state
__$.uK8 = uK8;
