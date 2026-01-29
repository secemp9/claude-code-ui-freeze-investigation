// Module: x96
// Dependencies: wY1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var x96 = v(FP9 => {
  var mP9 = __$.wY1();
  function gP9(A, K, q) {
    if (K?.type === "flow-collection") {
      let Y = K.end[0];
      if (Y.indent === A && (Y.source === "]" || Y.source === "}") && mP9.containsNewline(K)) q(Y, "BAD_INDENT", "Flow end indicator should be more indented than parent", !0);
    }
  }
  FP9.flowIndentCheck = gP9;
});

// Register to shared state
__$.x96 = x96;
