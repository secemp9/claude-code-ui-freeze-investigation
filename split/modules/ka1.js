// Module: ka1
// Dependencies: gi8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ka1 = v(iF5 => {
  var dF5 = __$.gi8(),
    Ea1 = CA("buffer"),
    cF5 = (A, K = 0, q = A.byteLength - K) => {
      if (!dF5.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return Ea1.Buffer.from(A, K, q);
    },
    lF5 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? Ea1.Buffer.from(A, K) : Ea1.Buffer.from(A);
    };
  iF5.fromArrayBuffer = cF5;
  iF5.fromString = lF5;
});

// Register to shared state
__$.ka1 = ka1;
