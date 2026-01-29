// Module: rz7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rz7 = v(nz7 => {
  Object.defineProperty(nz7, "__esModule", {
    value: !0
  });
  function iz7(A) {
    let K = A.length,
      q = 0,
      Y = 0,
      z;
    while (Y < K) if (q++, z = A.charCodeAt(Y++), z >= 55296 && z <= 56319 && Y < K) {
      if (z = A.charCodeAt(Y), (z & 64512) === 56320) Y++;
    }
    return q;
  }
  nz7.default = iz7;
  iz7.code = 'require("ajv/dist/runtime/ucs2length").default';
});

// Register to shared state
__$.rz7 = rz7;
