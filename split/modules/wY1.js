// Module: wY1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wY1 = v(uP9 => {
  function b96(A) {
    if (!A) return null;
    switch (A.type) {
      case "alias":
      case "scalar":
      case "double-quoted-scalar":
      case "single-quoted-scalar":
        if (A.source.includes(`
`)) return !0;
        if (A.end) {
          for (let K of A.end) if (K.type === "newline") return !0;
        }
        return !1;
      case "flow-collection":
        for (let K of A.items) {
          for (let q of K.start) if (q.type === "newline") return !0;
          if (K.sep) {
            for (let q of K.sep) if (q.type === "newline") return !0;
          }
          if (b96(K.key) || b96(K.value)) return !0;
        }
        return !1;
      default:
        return !0;
    }
  }
  uP9.containsNewline = b96;
});

// Register to shared state
__$.wY1 = wY1;
