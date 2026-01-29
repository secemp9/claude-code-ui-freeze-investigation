// Module: X$A
// Dependencies: WY, Br

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var X$A = v(cD9 => {
  var pD9 = __$.WY(),
    kI4 = __$.Br(),
    dD9 = {
      collection: "map",
      default: !0,
      nodeClass: kI4.YAMLMap,
      tag: "tag:yaml.org,2002:map",
      resolve(A, K) {
        if (!pD9.isMap(A)) K("Expected a mapping for this tag");
        return A;
      },
      createNode: (A, K, q) => kI4.YAMLMap.from(A, K, q)
    };
  cD9.map = dD9;
});

// Register to shared state
__$.X$A = X$A;
