// Module: mc8
// Dependencies: Bc8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mc8 = v(Bx5 => {
  var bx5 = __$.Bc8(),
    Qo1 = CA("buffer"),
    xx5 = (A, K = 0, q = A.byteLength - K) => {
      if (!bx5.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return Qo1.Buffer.from(A, K, q);
    },
    ux5 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? Qo1.Buffer.from(A, K) : Qo1.Buffer.from(A);
    };
  Bx5.fromArrayBuffer = xx5;
  Bx5.fromString = ux5;
});

// Register to shared state
__$.mc8 = mc8;
