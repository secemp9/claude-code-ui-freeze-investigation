// Module: Di1
// Dependencies: _g8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Di1 = v(FD5 => {
  var BD5 = __$._g8(),
    Wi1 = CA("buffer"),
    mD5 = (A, K = 0, q = A.byteLength - K) => {
      if (!BD5.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return Wi1.Buffer.from(A, K, q);
    },
    gD5 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? Wi1.Buffer.from(A, K) : Wi1.Buffer.from(A);
    };
  FD5.fromArrayBuffer = mD5;
  FD5.fromString = gD5;
});

// Register to shared state
__$.Di1 = Di1;
