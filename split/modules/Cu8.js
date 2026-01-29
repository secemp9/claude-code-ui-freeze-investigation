// Module: Cu8
// Dependencies: ku8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Cu8 = v(N$5 => {
  var P$5 = __$.ku8(),
    yl1 = CA("buffer"),
    V$5 = (A, K = 0, q = A.byteLength - K) => {
      if (!P$5.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return yl1.Buffer.from(A, K, q);
    },
    f$5 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? yl1.Buffer.from(A, K) : yl1.Buffer.from(A);
    };
  N$5.fromArrayBuffer = V$5;
  N$5.fromString = f$5;
});

// Register to shared state
__$.Cu8 = Cu8;
