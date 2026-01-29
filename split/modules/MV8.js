// Module: MV8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MV8 = v(jV8 => {
  Object.defineProperty(jV8, "__esModule", {
    value: !0
  });
  function Opq(A, ...K) {
    let q = new String(String.raw(A, ...K));
    return q.__sentry_template_string__ = A.join("\x00").replace(/%/g, "%%").replace(/\0/g, "%s"), q.__sentry_template_values__ = K, q;
  }
  jV8.parameterize = Opq;
});

// Register to shared state
__$.MV8 = MV8;
