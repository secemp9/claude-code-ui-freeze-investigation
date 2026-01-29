// Module: i91
// Dependencies: q$

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var i91 = v(Jj9 => {
  var RI4 = __$.q$(),
    yI4 = {
      identify: A => A == null,
      createNode: () => new RI4.Scalar(null),
      default: !0,
      tag: "tag:yaml.org,2002:null",
      test: /^(?:~|[Nn]ull|NULL)?$/,
      resolve: () => new RI4.Scalar(null),
      stringify: ({
        source: A
      }, K) => typeof A === "string" && yI4.test.test(A) ? A : K.options.nullStr
    };
  Jj9.nullTag = yI4;
});

// Register to shared state
__$.i91 = i91;
