// Module: W$A
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var W$A = v(YV9 => {
  function qV9(A, K, q, Y) {
    let z = "";
    if (A) {
      let w = !1,
        H = "";
      for (let J of A) {
        let {
          source: O,
          type: X
        } = J;
        switch (X) {
          case "space":
            w = !0;
            break;
          case "comment":
            {
              if (q && !w) Y(J, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
              let $ = O.substring(1) || " ";
              if (!z) z = $;else z += H + $;
              H = "";
              break;
            }
          case "newline":
            if (z) H += O;
            w = !0;
            break;
          default:
            Y(J, "UNEXPECTED_TOKEN", `Unexpected ${X} at node end`);
        }
        K += O.length;
      }
    }
    return {
      comment: z,
      offset: K
    };
  }
  YV9.resolveEnd = qV9;
});

// Register to shared state
__$.W$A = W$A;
