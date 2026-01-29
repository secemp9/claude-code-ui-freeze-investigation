// Module: $C8
// Dependencies: sq, H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $C8 = v(XC8 => {
  Object.defineProperty(XC8, "__esModule", {
    value: !0
  });
  var wC8 = __$.sq(),
    rm1 = __$.H8(),
    nm1 = rm1.GLOBAL_OBJ,
    a65 = 7,
    HC8 = "ContextLines",
    s65 = (A = {}) => {
      let K = A.frameContextLines != null ? A.frameContextLines : a65;
      return {
        name: HC8,
        setupOnce() {},
        processEvent(q) {
          return e65(q, K);
        }
      };
    },
    JC8 = wC8.defineIntegration(s65),
    t65 = wC8.convertIntegrationFnToClass(HC8, JC8);
  function e65(A, K) {
    let q = nm1.document,
      Y = nm1.location && rm1.stripUrlQueryAndFragment(nm1.location.href);
    if (!q || !Y) return A;
    let z = A.exception && A.exception.values;
    if (!z || !z.length) return A;
    let w = q.documentElement.innerHTML;
    if (!w) return A;
    let H = ["<!DOCTYPE html>", "<html>", ...w.split(`
`), "</html>"];
    return z.forEach(J => {
      let O = J.stacktrace;
      if (O && O.frames) O.frames = O.frames.map(X => OC8(X, H, Y, K));
    }), A;
  }
  function OC8(A, K, q, Y) {
    if (A.filename !== q || !A.lineno || !K.length) return A;
    return rm1.addContextToFrame(K, A, Y), A;
  }
  XC8.ContextLines = t65;
  XC8.applySourceContextToFrame = OC8;
  XC8.contextLinesIntegration = JC8;
});

// Register to shared state
__$.$C8 = $C8;
