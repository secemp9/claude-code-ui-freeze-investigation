// Module: XL7
// Dependencies: ZN6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XL7 = v(JL7 => {
  Object.defineProperty(JL7, "__esModule", {
    value: !0
  });
  JL7.ono = void 0;
  var f5A = __$.ZN6(),
    RcY = MB;
  JL7.ono = RcY;
  MB.error = new f5A.Ono(Error);
  MB.eval = new f5A.Ono(EvalError);
  MB.range = new f5A.Ono(RangeError);
  MB.reference = new f5A.Ono(ReferenceError);
  MB.syntax = new f5A.Ono(SyntaxError);
  MB.type = new f5A.Ono(TypeError);
  MB.uri = new f5A.Ono(URIError);
  var ycY = MB;
  function MB(...A) {
    let K = A[0];
    if (typeof K === "object" && typeof K.name === "string") {
      for (let q of Object.values(ycY)) if (typeof q === "function" && q.name === "ono") {
        let Y = q[Symbol.species];
        if (Y && Y !== Error && (K instanceof Y || K.name === Y.name)) return q.apply(void 0, A);
      }
    }
    return MB.error.apply(void 0, A);
  }
});

// Register to shared state
__$.XL7 = XL7;
