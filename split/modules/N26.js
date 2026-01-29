// Module: N26
// Dependencies: Vm4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var N26 = v(ty9 => {
  var oy9 = __$.Vm4(),
    f26 = CA("buffer"),
    ay9 = (A, K = 0, q = A.byteLength - K) => {
      if (!oy9.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return f26.Buffer.from(A, K, q);
    },
    sy9 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? f26.Buffer.from(A, K) : f26.Buffer.from(A);
    };
  ty9.fromArrayBuffer = ay9;
  ty9.fromString = sy9;
});

// Register to shared state
__$.N26 = N26;
