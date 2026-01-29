// Module: z8K
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var z8K = v(q8K => {
  Object.defineProperty(q8K, "__esModule", {
    value: !0
  });
  q8K.b64encode = void 0;
  var wW2 = CA("buffer"),
    HW2 = A => {
      return wW2.Buffer.from(A).toString("base64");
    };
  q8K.b64encode = HW2;
});

// Register to shared state
__$.z8K = z8K;
