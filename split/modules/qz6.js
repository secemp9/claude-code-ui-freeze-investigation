// Module: qz6
// Dependencies: PF4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qz6 = v(ib9 => {
  var db9 = __$.PF4(),
    Kz6 = CA("buffer"),
    cb9 = (A, K = 0, q = A.byteLength - K) => {
      if (!db9.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return Kz6.Buffer.from(A, K, q);
    },
    lb9 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? Kz6.Buffer.from(A, K) : Kz6.Buffer.from(A);
    };
  ib9.fromArrayBuffer = cb9;
  ib9.fromString = lb9;
});

// Register to shared state
__$.qz6 = qz6;
