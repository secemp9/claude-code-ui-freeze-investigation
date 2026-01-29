// Module: w96
// Dependencies: q$

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var w96 = v($j9 => {
  var Xj9 = __$.q$(),
    II4 = {
      identify: A => typeof A === "boolean",
      default: !0,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
      resolve: A => new Xj9.Scalar(A[0] === "t" || A[0] === "T"),
      stringify({
        source: A,
        value: K
      }, q) {
        if (A && II4.test.test(A)) {
          let Y = A[0] === "t" || A[0] === "T";
          if (K === Y) return A;
        }
        return K ? q.options.trueStr : q.options.falseStr;
      }
    };
  $j9.boolTag = II4;
});

// Register to shared state
__$.w96 = w96;
