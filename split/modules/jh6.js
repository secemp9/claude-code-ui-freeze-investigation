// Module: jh6
// Dependencies: P0

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jh6 = v((RtH, X3K) => {
  var xd = __$.P0(),
    VL = X3K.exports = {
      valid: function (A) {
        return xd.assert(A, "list falsy"), xd.assert(A._previousSibling, "previous falsy"), xd.assert(A._nextSibling, "next falsy"), !0;
      },
      insertBefore: function (A, K) {
        xd.assert(VL.valid(A) && VL.valid(K));
        var q = A,
          Y = A._previousSibling,
          z = K,
          w = K._previousSibling;
        q._previousSibling = w, Y._nextSibling = z, w._nextSibling = q, z._previousSibling = Y, xd.assert(VL.valid(A) && VL.valid(K));
      },
      replace: function (A, K) {
        if (xd.assert(VL.valid(A) && (K === null || VL.valid(K))), K !== null) VL.insertBefore(K, A);
        VL.remove(A), xd.assert(VL.valid(A) && (K === null || VL.valid(K)));
      },
      remove: function (A) {
        xd.assert(VL.valid(A));
        var K = A._previousSibling;
        if (K === A) return;
        var q = A._nextSibling;
        K._nextSibling = q, q._previousSibling = K, A._previousSibling = A._nextSibling = A, xd.assert(VL.valid(A));
      }
    };
});

// Register to shared state
__$.jh6 = jh6;
