// Module: ij8
// Dependencies: hE, JsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ij8 = v(lj8 => {
  Object.defineProperty(lj8, "__esModule", {
    value: !0
  });
  var ySq = __$.hE(),
    ISq = __$.JsA();
  function SSq(A, K, q, Y) {
    let z = A(),
      w = !1,
      H = !0;
    return setInterval(() => {
      let J = z.getTimeMs();
      if (w === !1 && J > K + q) {
        if (w = !0, H) Y();
      }
      if (J < K + q) w = !1;
    }, 20), {
      poll: () => {
        z.reset();
      },
      enabled: J => {
        H = J;
      }
    };
  }
  function hSq(A, K, q) {
    let Y = K ? K.replace(/^file:\/\//, "") : void 0,
      z = A.location.columnNumber ? A.location.columnNumber + 1 : void 0,
      w = A.location.lineNumber ? A.location.lineNumber + 1 : void 0;
    return ySq.dropUndefinedKeys({
      filename: Y,
      module: q(Y),
      function: A.functionName || "?",
      colno: z,
      lineno: w,
      in_app: Y ? ISq.filenameIsInApp(Y) : void 0
    });
  }
  lj8.callFrameToStackFrame = hSq;
  lj8.watchdogTimer = SSq;
});

// Register to shared state
__$.ij8 = ij8;
