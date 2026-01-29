// Module: $27
// Dependencies: B3, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $27 = v(O27 => {
  Object.defineProperty(O27, "__esModule", {
    value: !0
  });
  O27.assignDefaults = void 0;
  var rGA = __$.B3(),
    a0Y = __$.hY();
  function s0Y(A, K) {
    let {
      properties: q,
      items: Y
    } = A.schema;
    if (K === "object" && q) for (let z in q) J27(A, z, q[z].default);else if (K === "array" && Array.isArray(Y)) Y.forEach((z, w) => J27(A, w, z.default));
  }
  O27.assignDefaults = s0Y;
  function J27(A, K, q) {
    let {
      gen: Y,
      compositeRule: z,
      data: w,
      opts: H
    } = A;
    if (q === void 0) return;
    let J = rGA._`${w}${(0, rGA.getProperty)(K)}`;
    if (z) {
      (0, a0Y.checkStrictMode)(A, `default is ignored for: ${J}`);
      return;
    }
    let O = rGA._`${J} === undefined`;
    if (H.useDefaults === "empty") O = rGA._`${O} || ${J} === null || ${J} === ""`;
    Y.if(O, rGA._`${J} = ${(0, rGA.stringify)(q)}`);
  }
});

// Register to shared state
__$.$27 = $27;
