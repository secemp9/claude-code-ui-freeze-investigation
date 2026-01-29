// Module: Om8
// Dependencies: zm8, ii

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Om8 = v(Jm8 => {
  Object.defineProperty(Jm8, "__esModule", {
    value: !0
  });
  Jm8.splitStream = OZ5;
  var wm8 = CA("stream"),
    JZ5 = __$.zm8(),
    Hm8 = __$.ii();
  async function OZ5(A) {
    if ((0, Hm8.isReadableStream)(A) || (0, Hm8.isBlob)(A)) return (0, JZ5.splitStream)(A);
    let K = new wm8.PassThrough(),
      q = new wm8.PassThrough();
    return A.pipe(K), A.pipe(q), [K, q];
  }
});

// Register to shared state
__$.Om8 = Om8;
