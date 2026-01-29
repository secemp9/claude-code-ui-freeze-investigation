// Module: YL7
// Dependencies: _N6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YL7 = v(KL7 => {
  Object.defineProperty(KL7, "__esModule", {
    value: !0
  });
  KL7.normalizeArgs = KL7.normalizeOptions = void 0;
  var TcY = __$._N6();
  function vcY(A) {
    return A = A || {}, {
      concatMessages: A.concatMessages === void 0 ? !0 : Boolean(A.concatMessages),
      format: A.format === void 0 ? TcY.format : typeof A.format === "function" ? A.format : !1
    };
  }
  KL7.normalizeOptions = vcY;
  function EcY(A, K) {
    let q,
      Y,
      z,
      w = "";
    if (typeof A[0] === "string") z = A;else if (typeof A[1] === "string") {
      if (A[0] instanceof Error) q = A[0];else Y = A[0];
      z = A.slice(1);
    } else q = A[0], Y = A[1], z = A.slice(2);
    if (z.length > 0) if (K.format) w = K.format.apply(void 0, z);else w = z.join(" ");
    if (K.concatMessages && q && q.message) w += (w ? ` 
` : "") + q.message;
    return {
      originalError: q,
      props: Y,
      message: w
    };
  }
  KL7.normalizeArgs = EcY;
});

// Register to shared state
__$.YL7 = YL7;
