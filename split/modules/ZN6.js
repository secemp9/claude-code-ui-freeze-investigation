// Module: ZN6
// Dependencies: AL7, YL7, kZ1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZN6 = v(wL7 => {
  Object.defineProperty(wL7, "__esModule", {
    value: !0
  });
  wL7.Ono = void 0;
  var LZ1 = __$.AL7(),
    zL7 = __$.YL7(),
    CcY = __$.kZ1(),
    LcY = GN6;
  wL7.Ono = LcY;
  function GN6(A, K) {
    K = zL7.normalizeOptions(K);
    function q(...Y) {
      let {
          originalError: z,
          props: w,
          message: H
        } = zL7.normalizeArgs(Y, K),
        J = new A(H);
      return LZ1.extendError(J, z, w);
    }
    return q[Symbol.species] = A, q;
  }
  GN6.toJSON = function (K) {
    return CcY.toJSON.call(K);
  };
  GN6.extend = function (K, q, Y) {
    if (Y || q instanceof Error) return LZ1.extendError(K, q, Y);else if (q) return LZ1.extendError(K, void 0, q);else return LZ1.extendError(K);
  };
});

// Register to shared state
__$.ZN6 = ZN6;
